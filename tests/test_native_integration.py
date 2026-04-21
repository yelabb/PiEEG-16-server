"""
Tests for the optional ``pieeg-core`` native accelerator integration.

These tests verify that:
  * the soft-import in ``pieeg_server._native`` never crashes, regardless
    of whether the wheel is installed;
  * ``engine_info()`` returns a JSON-serialisable dict with consistent
    shape in both modes;
  * the pure-Python reference classes remain accessible as
    ``_PyMultichannelFilter`` / ``_PyHampelFilter``;
  * when the wheel is installed, the public symbols in
    ``pieeg_server.filters`` / ``pieeg_server.spike_filter`` point at the
    Rust classes; otherwise they point at the Python reference classes.

The tests are written so they pass in both environments — the pure-Python
CI (default) and the ``pieeg-server[fast]`` environment.
"""

import json

import pytest

from pieeg_server import _native
from pieeg_server import filters, spike_filter


def test_engine_info_shape():
    info = _native.engine_info()
    # Must be JSON-serialisable — it's returned in the WebSocket welcome.
    json.dumps(info)
    assert set(info.keys()) == {"native", "engine", "version"}
    assert isinstance(info["native"], bool)
    assert info["engine"] in ("pieeg-core", "python")
    if info["native"]:
        assert info["engine"] == "pieeg-core"
        assert isinstance(info["version"], str) and info["version"]
    else:
        assert info["engine"] == "python"
        assert info["version"] is None


def test_has_native_consistent_with_import():
    try:
        import pieeg_core  # noqa: F401
    except ImportError:
        assert _native.HAS_NATIVE is False
        assert _native.HampelFilter is None
        assert _native.MultichannelFilter is None
        assert _native.decode_channels is None
    else:
        assert _native.HAS_NATIVE is True
        assert _native.HampelFilter is not None
        assert _native.MultichannelFilter is not None
        assert _native.decode_channels is not None


def test_python_fallback_classes_still_exported():
    # These are always the pure-Python implementations, regardless of
    # whether the native accelerator is installed.
    assert filters._PyMultichannelFilter is not None
    assert spike_filter._PyHampelFilter is not None


def test_public_classes_alias_native_when_available():
    if _native.HAS_NATIVE:
        assert filters.MultichannelFilter is _native.MultichannelFilter
        assert spike_filter.HampelFilter is _native.HampelFilter
    else:
        assert filters.MultichannelFilter is filters._PyMultichannelFilter
        assert spike_filter.HampelFilter is spike_filter._PyHampelFilter


def test_multichannel_filter_api_compat():
    """Public signature must accept the same kwargs in both engines."""
    mf = filters.MultichannelFilter(
        num_channels=4, lowcut=1.0, highcut=40.0, fs=250.0,
    )
    # Feed a short block of zeros — output length must match input length.
    block = [[0.0] * 4 for _ in range(10)]
    out = mf.apply_block(block)
    assert len(out) == 10
    assert all(len(row) == 4 for row in out)

    sample = mf.apply_sample([0.0] * 4)
    assert len(sample) == 4


def test_hampel_filter_api_compat():
    hf = spike_filter.HampelFilter(num_channels=2, window_size=5, n_sigma=3.0)
    for _ in range(10):
        out = hf.apply([0.0, 0.0])
        assert len(out) == 2
    cfg = hf.config()
    # These three keys are part of the public contract in both engines.
    assert cfg["window_size"] == 5
    assert cfg["n_sigma"] == 3.0
    assert cfg["enabled"] is True


def test_decode_channels_matches_reference_when_native():
    """If native is available, its output must match the Python reference
    on a well-known 27-byte SPI frame."""
    if not _native.HAS_NATIVE:
        pytest.skip("pieeg-core not installed")

    from pieeg_server.hardware import (
        PiEEGHardware, SIGN_TEST, FULL_SCALE, FULL_SCALE_PLUS_1,
        NEGATIVE_OFFSET, VREF_UV,
    )

    # Build a realistic frame: status + 8 channels of varying magnitudes.
    raw = [0xC0, 0x00, 0x08]
    samples_24 = [
        0x000000, 0x7FFFFF, 0x800000, 0xFFFFFF,
        0x000001, 0x123456, 0xABCDEF, 0x7F0000,
    ]
    for s in samples_24:
        raw += [(s >> 16) & 0xFF, (s >> 8) & 0xFF, s & 0xFF]

    # Native path (via the static method which dispatches).
    native_out = PiEEGHardware._decode_channels(raw)

    # Force the Python reference by temporarily disabling native.
    from pieeg_server import _native as n
    saved = n.HAS_NATIVE
    n.HAS_NATIVE = False
    try:
        py_out = PiEEGHardware._decode_channels(raw)
    finally:
        n.HAS_NATIVE = saved

    assert len(native_out) == len(py_out) == 8
    for a, b in zip(native_out, py_out):
        # Both sides round to 2 decimal places — exact equality expected.
        assert abs(a - b) < 1e-6, (a, b)
