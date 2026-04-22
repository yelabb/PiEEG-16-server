"""
Benchmark the pieeg-core native accelerator against the pure-Python
reference implementation.

Measures the three hot paths that pieeg-core overrides:

  1. MultichannelFilter  — Butterworth bandpass (filters.py)
  2. HampelFilter        — spike removal          (spike_filter.py)
  3. decode_channels     — SPI bytes → µV floats  (hardware.py)

Usage
-----
    python -m scripts.bench_native            # default: 60s of 250Hz data
    python -m scripts.bench_native --seconds 30 --channels 16

If ``pieeg-core`` is not installed, only the Python baseline is reported.
"""

from __future__ import annotations

import argparse
import random
import time
from statistics import mean, stdev

from pieeg_server import _native
from pieeg_server.filters import _PyMultichannelFilter
from pieeg_server.spike_filter import _PyHampelFilter


# ── Helpers ─────────────────────────────────────────────────────────

def _fmt_rate(n: int, dt: float) -> str:
    return f"{n / dt:>12,.0f} samples/s"


def _fmt_ms(dt: float) -> str:
    return f"{dt * 1000:>8.2f} ms"


def _run(label: str, fn, n_samples: int, repeats: int = 3) -> float:
    """Run ``fn`` ``repeats`` times, return best wall time in seconds."""
    times = []
    for _ in range(repeats):
        t0 = time.perf_counter()
        fn()
        times.append(time.perf_counter() - t0)
    best = min(times)
    avg = mean(times)
    sd = stdev(times) if len(times) > 1 else 0.0
    print(
        f"  {label:<14s} best {_fmt_ms(best)}  "
        f"avg {_fmt_ms(avg)} ±{sd * 1000:4.2f}ms  "
        f"{_fmt_rate(n_samples, best)}"
    )
    return best


def _print_header(title: str) -> None:
    print()
    print(f"── {title} " + "─" * max(0, 66 - len(title)))


# ── Synthetic data ──────────────────────────────────────────────────

def make_samples(n_samples: int, n_channels: int) -> list[list[float]]:
    rng = random.Random(42)
    # Mix of slow drift + fast noise + occasional spikes (for Hampel).
    data = []
    for i in range(n_samples):
        drift = 10.0 * (i / n_samples)
        row = [drift + rng.gauss(0, 20.0) for _ in range(n_channels)]
        if i % 500 == 0:
            row[0] += 400.0  # inject a spike
        data.append(row)
    return data


def make_spi_frames(n_samples: int) -> list[list[int]]:
    """27-byte SPI reads (3 status + 8×3 channel bytes), shape as returned
    by spidev."""
    rng = random.Random(7)
    return [[rng.randint(0, 255) for _ in range(27)] for _ in range(n_samples)]


# ── Benchmarks ──────────────────────────────────────────────────────

def bench_multichannel_filter(
    samples: list[list[float]], n_channels: int, fs: float
) -> None:
    _print_header("MultichannelFilter — bandpass 1–40 Hz")

    def run_py():
        f = _PyMultichannelFilter(
            num_channels=n_channels, lowcut=1.0, highcut=40.0, fs=fs
        )
        for row in samples:
            f.apply_sample(row)

    n = len(samples)
    t_py = _run("python", run_py, n)
    t_native = None

    if _native.HAS_NATIVE and _native.MultichannelFilter is not None:
        NativeMF = _native.MultichannelFilter

        def run_native():
            # Try the most common signatures; the native class mirrors the
            # pure-Python public API.
            try:
                f = NativeMF(
                    num_channels=n_channels, lowcut=1.0, highcut=40.0, fs=fs
                )
            except TypeError:
                f = NativeMF(n_channels, 1.0, 40.0, fs)
            for row in samples:
                f.apply_sample(row)

        t_native = _run("pieeg-core", run_native, n)
        print(f"  → speedup: {t_py / t_native:.1f}×")
    else:
        print("  pieeg-core    not installed/enabled — skipped")


def bench_hampel_filter(
    samples: list[list[float]], n_channels: int
) -> None:
    _print_header("HampelFilter — spike removal (window=5, n_sigma=3)")

    def run_py():
        f = _PyHampelFilter(num_channels=n_channels)
        for row in samples:
            f.apply(row)

    n = len(samples)
    t_py = _run("python", run_py, n)

    if _native.HAS_NATIVE and _native.HampelFilter is not None:
        NativeHF = _native.HampelFilter

        def run_native():
            try:
                f = NativeHF(num_channels=n_channels)
            except TypeError:
                f = NativeHF(n_channels)
            for row in samples:
                f.apply(row)

        t_native = _run("pieeg-core", run_native, n)
        print(f"  → speedup: {t_py / t_native:.1f}×")
    else:
        print("  pieeg-core    not installed/enabled — skipped")


def bench_decode_channels(frames: list[list[int]]) -> None:
    _print_header("decode_channels — 24-bit SPI → µV (8 channels)")

    # Import the pure-Python reference decoder by temporarily disabling
    # the native path.
    from pieeg_server.hardware import PiEEGHardware

    def run_py():
        # Force the else branch by flipping HAS_NATIVE during the run.
        orig = _native.HAS_NATIVE
        _native.HAS_NATIVE = False
        try:
            for raw in frames:
                PiEEGHardware._decode_channels(raw)
        finally:
            _native.HAS_NATIVE = orig

    n = len(frames)
    t_py = _run("python", run_py, n)

    if _native.HAS_NATIVE and _native.decode_channels is not None:

        def run_native():
            fn = _native.decode_channels
            for raw in frames:
                fn(raw)

        t_native = _run("pieeg-core", run_native, n)
        print(f"  → speedup: {t_py / t_native:.1f}×")
    else:
        print("  pieeg-core    not installed/enabled — skipped")


# ── Main ────────────────────────────────────────────────────────────

def main() -> None:
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("--seconds", type=float, default=60.0,
                   help="simulated stream duration (default: 60s)")
    p.add_argument("--sample-rate", type=float, default=250.0,
                   help="sample rate in Hz (default: 250)")
    p.add_argument("--channels", type=int, default=16,
                   help="number of channels (default: 16)")
    p.add_argument("--repeats", type=int, default=3,
                   help="repeats per benchmark, best wins (default: 3)")
    args = p.parse_args()

    n_samples = int(args.seconds * args.sample_rate)

    print(f"pieeg-server native accelerator benchmark")
    print(f"  engine_info: {_native.engine_info()}")
    print(f"  {args.seconds}s × {args.sample_rate} Hz × "
          f"{args.channels} ch  →  {n_samples:,} samples  "
          f"(repeats={args.repeats})")

    samples = make_samples(n_samples, args.channels)
    frames = make_spi_frames(n_samples)

    # Override the `_run` repeats default by monkey-patching once.
    global _run
    _orig_run = _run

    def _run_with_repeats(label, fn, n_samples):
        return _orig_run(label, fn, n_samples, repeats=args.repeats)

    _run = _run_with_repeats  # type: ignore[assignment]

    try:
        bench_multichannel_filter(samples, args.channels, args.sample_rate)
        bench_hampel_filter(samples, args.channels)
        bench_decode_channels(frames)
    finally:
        _run = _orig_run  # type: ignore[assignment]

    print()
    if not _native.HAS_NATIVE:
        print("Note: pieeg-core is not installed. "
              "Run `pip install 'pieeg-server[fast]'` to benchmark the "
              "Rust path.")


if __name__ == "__main__":
    main()
