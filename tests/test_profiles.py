"""Tests for the hardware profile system."""

from unittest.mock import patch

import pytest

from pieeg_server.profiles import (
    DEFAULT_PROFILE,
    PROFILES,
    HardwareProfile,
    detect_profile,
    get_profile,
)


class TestProfileRegistry:
    def test_default_is_pi4(self):
        assert DEFAULT_PROFILE == "pi4"

    def test_pi4_profile_matches_legacy_behavior(self):
        # No-regression guard: the default profile must match what shipped
        # before the profile system existed.
        p = PROFILES["pi4"]
        assert p.spi_speed_hz == 4_000_000
        assert p.manage_cs_pin is True

    def test_pi5_profile(self):
        p = PROFILES["pi5"]
        assert p.spi_speed_hz == 2_000_000
        assert p.manage_cs_pin is False


class TestGetProfile:
    def test_named_profile(self):
        assert get_profile("pi4") is PROFILES["pi4"]
        assert get_profile("pi5") is PROFILES["pi5"]

    def test_unknown_raises(self):
        with pytest.raises(ValueError, match="Unknown hardware profile"):
            get_profile("pi99")

    def test_none_triggers_detect(self):
        with patch("pieeg_server.profiles.detect_profile", return_value="pi5"):
            assert get_profile(None) is PROFILES["pi5"]

    def test_auto_triggers_detect(self):
        with patch("pieeg_server.profiles.detect_profile", return_value="pi4"):
            assert get_profile("auto") is PROFILES["pi4"]


class TestDetectProfile:
    def _patch_read_bytes(self, model_data: bytes | None = None,
                          compat_data: bytes | None = None):
        """Patch Path.read_bytes to return per-path canned data."""
        def fake_read_bytes(self):
            path = str(self)
            if path.endswith("model"):
                if model_data is None:
                    raise OSError("no model file")
                return model_data
            if path.endswith("compatible"):
                if compat_data is None:
                    raise OSError("no compatible file")
                return compat_data
            raise OSError(f"unexpected path {path}")
        return patch("pieeg_server.profiles.Path.read_bytes", fake_read_bytes)

    def test_detect_pi5_from_model(self):
        with self._patch_read_bytes(model_data=b"Raspberry Pi 5 Model B Rev 1.0\x00"):
            assert detect_profile() == "pi5"

    def test_detect_pi4_from_model(self):
        with self._patch_read_bytes(model_data=b"Raspberry Pi 4 Model B Rev 1.4\x00"):
            assert detect_profile() == "pi4"

    def test_detect_pi3_falls_back_to_pi4(self):
        with self._patch_read_bytes(model_data=b"Raspberry Pi 3 Model B Plus\x00"):
            assert detect_profile() == "pi4"

    def test_detect_pi5_from_compatible(self):
        # Model file unreadable, but compatible string identifies Pi 5 SoC.
        with self._patch_read_bytes(
            model_data=None,
            compat_data=b"raspberrypi,5-model-b\x00brcm,bcm2712\x00",
        ):
            assert detect_profile() == "pi5"

    def test_detect_pi4_from_compatible(self):
        with self._patch_read_bytes(
            model_data=None,
            compat_data=b"raspberrypi,4-model-b\x00brcm,bcm2711\x00",
        ):
            assert detect_profile() == "pi4"

    def test_no_files_falls_back_to_default(self):
        with self._patch_read_bytes(model_data=None, compat_data=None):
            assert detect_profile() == DEFAULT_PROFILE

    def test_unknown_model_falls_back_to_default(self):
        with self._patch_read_bytes(model_data=b"Some Other Board\x00",
                                     compat_data=b"unknown,board\x00"):
            assert detect_profile() == DEFAULT_PROFILE


class TestHardwareIntegration:
    """Verify PiEEGHardware accepts and applies the profile correctly."""

    def test_default_construction_uses_pi4_behavior(self):
        # Auto-detect on a non-Pi dev box falls back to pi4 (= legacy behavior).
        from pieeg_server.hardware import PiEEGHardware
        with patch("pieeg_server.profiles.detect_profile", return_value="pi4"):
            hw = PiEEGHardware(num_channels=8)
        assert hw._profile.name == "pi4"
        assert hw._profile.spi_speed_hz == 4_000_000
        assert hw._manage_cs is True

    def test_pi5_profile_8ch_disables_cs_management(self):
        from pieeg_server.hardware import PiEEGHardware
        hw = PiEEGHardware(num_channels=8, profile="pi5")
        assert hw._profile.name == "pi5"
        assert hw._profile.spi_speed_hz == 2_000_000
        assert hw._manage_cs is False

    def test_pi5_profile_16ch_forces_cs_management(self):
        # 16-ch always needs GPIO19 for chip 2's CS, even with the pi5 profile.
        from pieeg_server.hardware import PiEEGHardware
        hw = PiEEGHardware(num_channels=16, profile="pi5")
        assert hw._manage_cs is True

    def test_explicit_profile_object_accepted(self):
        from pieeg_server.hardware import PiEEGHardware
        custom = HardwareProfile(name="custom", spi_speed_hz=1_000_000,
                                  manage_cs_pin=True)
        hw = PiEEGHardware(num_channels=8, profile=custom)
        assert hw._profile is custom
        assert hw._manage_cs is True

    def test_cs_set_is_noop_when_unmanaged(self):
        from pieeg_server.hardware import PiEEGHardware
        hw = PiEEGHardware(num_channels=8, profile="pi5")
        # _cs_fd is -1 and _manage_cs is False; should silently no-op.
        hw._cs_set(0)
        hw._cs_set(1)
