"""
Hardware profiles for PiEEG.

Different Raspberry Pi models expose SPI/GPIO slightly differently. A profile
bundles the platform-specific tunables (SPI clock, whether the script needs to
manually toggle the chip-select GPIO line) so the rest of the code stays
generic.

Selection precedence:
    1. Explicit ``--profile <name>`` / ``profile=...`` argument
    2. Auto-detection from /proc/device-tree (model, then compatible)
    3. ``DEFAULT_PROFILE`` (= 'pi4' = current pre-existing behavior)

Auto-detection is deliberately conservative: any failure or unknown hardware
falls back to the default profile, so behavior on existing setups is
unchanged.
"""

from dataclasses import dataclass
import logging
from pathlib import Path

logger = logging.getLogger("pieeg.profiles")


@dataclass(frozen=True)
class HardwareProfile:
    """Platform-specific hardware tunables."""

    name: str
    spi_speed_hz: int
    # If True, the script requests GPIO19 as an output and toggles it around
    # SPI transactions to chip 2. Required for 16-channel mode regardless of
    # this flag (the second ADS1299's CS is wired to GPIO19 on the shield).
    # On Pi 5, GPIO19 cannot be requested on /dev/gpiochip4 in 8-channel mode
    # because the kernel SPI driver already owns the CE line, so this is set
    # to False on the 'pi5' profile.
    manage_cs_pin: bool


PROFILES: dict[str, "HardwareProfile"] = {
    "pi4": HardwareProfile(
        name="pi4",
        spi_speed_hz=4_000_000,
        manage_cs_pin=True,
    ),
    "pi5": HardwareProfile(
        name="pi5",
        spi_speed_hz=2_000_000,
        manage_cs_pin=False,
    ),
}

# Safe default = current pre-existing behavior (Pi 4-style SPI/GPIO).
DEFAULT_PROFILE = "pi4"


def detect_profile() -> str:
    """Auto-detect a hardware profile name from /proc/device-tree.

    Returns one of the keys in :data:`PROFILES`. Falls back to
    :data:`DEFAULT_PROFILE` on any I/O error or unknown hardware, so the
    behavior on non-Pi systems and on older/newer Pi models matches the
    pre-existing default.
    """
    # 1. Model string (most human-readable, set by firmware).
    try:
        raw = Path("/proc/device-tree/model").read_bytes()
        model = raw.rstrip(b"\x00").decode("ascii", errors="replace")
        if "Raspberry Pi 5" in model:
            return "pi5"
        if "Raspberry Pi 4" in model or "Raspberry Pi 400" in model:
            return "pi4"
        if "Raspberry Pi 3" in model or "Raspberry Pi 2" in model:
            return "pi4"  # older Pis behave like Pi 4 for our purposes
    except OSError:
        pass

    # 2. SoC compatible string (fallback when model is missing/custom).
    try:
        raw = Path("/proc/device-tree/compatible").read_bytes()
        tokens = raw.split(b"\x00")
        if any(b"bcm2712" in t for t in tokens):
            return "pi5"
        if any(b"bcm2711" in t for t in tokens):
            return "pi4"
    except OSError:
        pass

    return DEFAULT_PROFILE


def get_profile(name: str | None) -> HardwareProfile:
    """Resolve a profile name to a :class:`HardwareProfile`.

    ``None`` or ``"auto"`` triggers auto-detection. Unknown names raise
    :class:`ValueError`.
    """
    if name is None or name == "auto":
        detected = detect_profile()
        logger.info("Auto-detected hardware profile: %s", detected)
        return PROFILES[detected]
    if name not in PROFILES:
        raise ValueError(
            f"Unknown hardware profile {name!r}. "
            f"Available: {sorted(PROFILES)} (or 'auto')"
        )
    return PROFILES[name]


# ── LSL Channel Groups Configuration ───────────────────────────────────


def _get_config_dir() -> Path:
    """Get or create the PiEEG config directory (~/.pieeg)."""
    config_dir = Path.home() / ".pieeg"
    config_dir.mkdir(exist_ok=True)
    return config_dir


def load_lsl_groups() -> list[dict]:
    """Load LSL channel groups from ~/.pieeg/lsl_groups.json.

    Returns an empty list if the file doesn't exist or is invalid JSON,
    ensuring backward compatibility.

    Returns:
        List of dicts with format: [{"name": "EEG", "channels": [0,1,2,3]}, ...]
    """
    config_file = _get_config_dir() / "lsl_groups.json"
    if not config_file.exists():
        return []

    try:
        import json
        with config_file.open("r") as f:
            data = json.load(f)
        if not isinstance(data, list):
            logger.warning("Invalid lsl_groups.json format (not a list), ignoring")
            return []
        
        # Validate schema of each group entry to prevent crashes in LSLBridge
        for i, item in enumerate(data):
            if not isinstance(item, dict):
                logger.warning("Invalid lsl_groups.json: item %d is not a dict, ignoring file", i)
                return []
            if "name" not in item or "channels" not in item:
                logger.warning("Invalid lsl_groups.json: item %d missing 'name' or 'channels', ignoring file", i)
                return []
            if not isinstance(item["name"], str):
                logger.warning("Invalid lsl_groups.json: item %d 'name' is not a string, ignoring file", i)
                return []
            if not isinstance(item["channels"], list):
                logger.warning("Invalid lsl_groups.json: item %d 'channels' is not a list, ignoring file", i)
                return []
        
        return data
    except (json.JSONDecodeError, OSError) as e:
        logger.warning("Failed to load lsl_groups.json: %s", e)
        return []


def save_lsl_groups(groups: list[dict]) -> None:
    """Save LSL channel groups to ~/.pieeg/lsl_groups.json.

    Args:
        groups: List of dicts with format: [{"name": "EEG", "channels": [0,1,2,3]}, ...]
    """
    import json
    config_file = _get_config_dir() / "lsl_groups.json"
    try:
        with config_file.open("w") as f:
            json.dump(groups, f, indent=2)
        logger.info("Saved %d LSL groups to %s", len(groups), config_file)
    except OSError as e:
        logger.error("Failed to save lsl_groups.json: %s", e)
        raise


def validate_lsl_groups(groups: list[dict], num_hw_channels: int) -> dict:
    """Validate LSL channel group configuration.

    Args:
        groups: List of group dicts to validate
        num_hw_channels: Number of available hardware channels

    Returns:
        {"valid": bool, "error": str | None} — error is set if validation fails
    """
    # Type check first - reject None and other non-list types
    if not isinstance(groups, list):
        return {"valid": False, "error": "Groups must be a list"}

    # Empty list is valid (backward compatible - single default stream)
    if not groups:
        return {"valid": True, "error": None}

    seen_channels = set()
    for i, group in enumerate(groups):
        # Check required fields
        if not isinstance(group, dict):
            return {"valid": False, "error": f"Group {i} is not a dict"}
        if "name" not in group or "channels" not in group:
            return {"valid": False, "error": f"Group {i} missing 'name' or 'channels'"}

        name = group["name"]
        channels = group["channels"]

        # Validate name
        if not isinstance(name, str) or not name.strip():
            return {"valid": False, "error": f"Group {i} has invalid name"}

        # Validate channels
        if not isinstance(channels, list):
            return {"valid": False, "error": f"Group '{name}' channels must be a list"}
        if not channels:
            return {"valid": False, "error": f"Group '{name}' has no channels"}

        for ch in channels:
            if not isinstance(ch, int):
                return {"valid": False, "error": f"Group '{name}' channel {ch} is not an integer"}
            if ch < 0:
                return {"valid": False, "error": f"Group '{name}' channel {ch} is negative"}
            if ch >= num_hw_channels:
                return {
                    "valid": False,
                    "error": f"Group '{name}' channel {ch} >= {num_hw_channels} (hardware limit)"
                }
            if ch in seen_channels:
                return {"valid": False, "error": f"Channel {ch} used in multiple groups"}
            seen_channels.add(ch)

    return {"valid": True, "error": None}
