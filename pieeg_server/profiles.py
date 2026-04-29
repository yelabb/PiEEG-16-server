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
