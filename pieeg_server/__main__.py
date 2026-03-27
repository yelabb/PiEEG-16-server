"""
Entry point: python -m pieeg_server

Wires up hardware → acquisition thread → WebSocket server.
One command to start streaming EEG data on the local network.
"""

import argparse
import asyncio
import logging
import signal
import socket
import sys

from . import __version__


def _check_update():
    """Check PyPI for a newer version and print a notice if available."""
    try:
        from urllib.request import urlopen
        import json
        url = "https://pypi.org/pypi/pieeg-server/json"
        with urlopen(url, timeout=3) as resp:
            latest = json.loads(resp.read())["info"]["version"]
        if latest != __version__:
            print(
                f"\n  ╔══════════════════════════════════════════════════╗"
                f"\n  ║  Update available: {__version__} → {latest:<26s}║"
                f"\n  ║  Run: pip install --upgrade pieeg-server        ║"
                f"\n  ╚══════════════════════════════════════════════════╝\n"
            )
    except Exception:
        pass  # no network / not published yet — silently skip


def _check_dependencies():
    missing = []
    for mod in ("websockets", "scipy"):
        try:
            __import__(mod)
        except ImportError:
            missing.append(mod)
    if missing:
        print(
            f"\n  ERROR: Missing dependencies: {', '.join(missing)}\n\n"
            f"  You are using: {sys.executable}\n\n"
            f"  Run the setup script first:\n"
            f"    cd PiEEG-16-server && ./setup.sh\n\n"
            f"  Or activate the virtual environment:\n"
            f"    source .venv/bin/activate\n"
            f"    pieeg-server\n\n"
            f"  For testing without a Raspberry Pi:\n"
            f"    pieeg-server --mock\n",
            file=sys.stderr,
        )
        sys.exit(1)


def _is_doctor_command():
    """Check if the user is running 'pieeg-server doctor' before loading deps."""
    return len(sys.argv) >= 2 and sys.argv[1] in ("doctor", "record", "monitor")


# Only check heavy dependencies if not running doctor
if not _is_doctor_command():
    _check_dependencies()
    from .acquisition import AcquisitionLoop
    from .auth import AuthManager
    from .server import PiEEGServer, DEFAULT_HOST, DEFAULT_PORT
    from .dashboard import DashboardServer, DEFAULT_DASHBOARD_PORT


def parse_args():
    p = argparse.ArgumentParser(
        prog="pieeg-server",
        description="PiEEG-16 local streaming server",
    )

    sub = p.add_subparsers(dest="command")

    # --- doctor subcommand ---
    doc = sub.add_parser(
        "doctor",
        help="Diagnose hardware, software, and configuration",
    )
    doc.add_argument(
        "--quiet", "-q", action="store_true",
        help="Only return exit code (0=ok, 1=warnings, 2=errors)",
    )

    # --- record subcommand ---
    rec = sub.add_parser(
        "record",
        help="Record EEG data to CSV (without starting the WebSocket server)",
    )
    rec.add_argument(
        "output", help="Output CSV file path",
    )
    rec.add_argument(
        "--duration", type=float, default=None,
        help="Recording duration in seconds (default: until Ctrl-C)",
    )
    rec.add_argument(
        "--mock", action="store_true",
        help="Use synthetic EEG data (no hardware needed)",
    )
    rec.add_argument(
        "--gpio-chip", default="/dev/gpiochip4",
        help="GPIO chip device path (default: '/dev/gpiochip4' for Pi 5)",
    )
    rec.add_argument(
        "--verbose", "-v", action="store_true",
        help="Enable debug logging",
    )

    # --- monitor subcommand ---
    mon = sub.add_parser(
        "monitor",
        help="Live terminal monitor (requires 'rich')",
    )
    mon.add_argument(
        "--mock", action="store_true",
        help="Use synthetic EEG data (no hardware needed)",
    )
    mon.add_argument(
        "--gpio-chip", default="/dev/gpiochip4",
        help="GPIO chip device path (default: '/dev/gpiochip4' for Pi 5)",
    )
    mon.add_argument(
        "--verbose", "-v", action="store_true",
        help="Enable debug logging",
    )

    # --- server options (default command) ---
    p.add_argument(
        "--host", default="0.0.0.0",
        help="Bind address (default: 0.0.0.0 = all interfaces)",
    )
    p.add_argument(
        "--port", type=int, default=1616,
        help="WebSocket port (default: 1616)",
    )
    p.add_argument(
        "--dashboard-port", type=int, default=1617,
        help="Dashboard HTTP port (default: 1617)",
    )
    p.add_argument(
        "--no-dashboard", action="store_true",
        help="Disable the web dashboard",
    )
    p.add_argument(
        "--gpio-chip", default="/dev/gpiochip4",
        help="GPIO chip device path (default: '/dev/gpiochip4' for Pi 5)",
    )
    p.add_argument(
        "--filter", action="store_true",
        help="Enable 1–40 Hz bandpass filter on server side",
    )
    p.add_argument(
        "--lowcut", type=float, default=1.0,
        help="Bandpass low cutoff in Hz (default: 1.0)",
    )
    p.add_argument(
        "--highcut", type=float, default=40.0,
        help="Bandpass high cutoff in Hz (default: 40.0)",
    )
    p.add_argument(
        "--verbose", "-v", action="store_true",
        help="Enable debug logging",
    )
    p.add_argument(
        "--no-auth", action="store_true",
        help="Disable authentication (no access code required)",
    )
    p.add_argument(
        "--mock", action="store_true",
        help="Use synthetic EEG data (no hardware needed, for testing)",
    )
    p.add_argument(
        "--record", metavar="FILE",
        help="Record EEG data to CSV while streaming",
    )
    p.add_argument(
        "--record-duration", type=float, default=None,
        help="Stop recording after N seconds (default: until stopped)",
    )
    p.add_argument(
        "--monitor", action="store_true",
        help="Show live terminal monitor (requires 'rich')",
    )
    return p.parse_args()


def _make_hardware(args, logger):
    """Create and open the hardware backend (real or mock)."""
    if args.mock:
        from .mock import MockHardware
        logger.info("Starting in MOCK mode (synthetic EEG data)")
        hw = MockHardware()
    else:
        from .hardware import PiEEGHardware
        logger.info("Initializing PiEEG-16 hardware (GPIO chip: %s)...", args.gpio_chip)
        hw = PiEEGHardware(gpio_chip=args.gpio_chip)
    hw.open()
    if not args.mock:
        logger.info("Hardware initialized - ADCs configured, LEDs should be ON")
    return hw


def main():
    args = parse_args()
    _check_update()

    # --- Doctor subcommand (no heavy deps needed) ---
    if args.command == "doctor":
        from .doctor import run_doctor
        sys.exit(run_doctor(quiet=args.quiet))

    # --- Record subcommand (standalone) ---
    if args.command == "record":
        _check_dependencies()
        from .acquisition import AcquisitionLoop
        from .recorder import Recorder

        logging.basicConfig(
            level=logging.DEBUG if args.verbose else logging.INFO,
            format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
            datefmt="%H:%M:%S",
        )
        logger = logging.getLogger("pieeg")

        hw = _make_hardware(args, logger)
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        acq = AcquisitionLoop(hw, loop, mock=args.mock)
        acq.start()
        recorder = Recorder(acq, output=args.output, duration=args.duration)

        def _rec_shutdown(*_):
            logger.info("Stopping recording...")
            acq.stop()
            hw.close()
            loop.stop()
            sys.exit(0)

        signal.signal(signal.SIGINT, _rec_shutdown)
        signal.signal(signal.SIGTERM, _rec_shutdown)
        loop.run_until_complete(recorder.run())
        acq.stop()
        hw.close()
        return

    # --- Monitor subcommand (standalone) ---
    if args.command == "monitor":
        _check_dependencies()
        from .acquisition import AcquisitionLoop
        from .monitor import TerminalMonitor

        logging.basicConfig(
            level=logging.DEBUG if args.verbose else logging.WARNING,
            format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
            datefmt="%H:%M:%S",
        )
        logger = logging.getLogger("pieeg")

        hw = _make_hardware(args, logger)
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        acq = AcquisitionLoop(hw, loop, mock=args.mock)
        acq.start()
        monitor = TerminalMonitor(acq)

        def _mon_shutdown(*_):
            acq.stop()
            hw.close()
            loop.stop()
            sys.exit(0)

        signal.signal(signal.SIGINT, _mon_shutdown)
        signal.signal(signal.SIGTERM, _mon_shutdown)
        loop.run_until_complete(monitor.run())
        acq.stop()
        hw.close()
        return

    # --- Serve (default) subcommand ---
    _check_dependencies()
    from .acquisition import AcquisitionLoop
    from .auth import AuthManager
    from .server import PiEEGServer, DEFAULT_HOST, DEFAULT_PORT
    from .dashboard import DashboardServer, DEFAULT_DASHBOARD_PORT

    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
        datefmt="%H:%M:%S",
    )
    logger = logging.getLogger("pieeg")

    # --- Hardware ---
    hw = _make_hardware(args, logger)

    # --- Auth ---
    auth = None if args.no_auth else AuthManager()
    if args.no_auth:
        logger.warning("Authentication DISABLED (--no-auth)")

    # --- Acquisition ---
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    acq = AcquisitionLoop(hw, loop, mock=args.mock)
    acq.start()
    logger.info("Acquisition started (250 Hz, 16 channels%s)", " - MOCK" if args.mock else "")

    # --- Server ---
    server = PiEEGServer(acq, host=args.host, port=args.port, auth=auth)
    if args.filter:
        server.enable_filter(args.lowcut, args.highcut)
        logger.info("Server-side filter: %.1f-%.1f Hz", args.lowcut, args.highcut)

    # --- Dashboard ---
    dashboard = None
    if not args.no_dashboard:
        dashboard = DashboardServer(
            host=args.host,
            port=args.dashboard_port,
            auth=auth,
        )
        dashboard.start()

    # --- Recorder (optional, alongside server) ---
    recorder = None
    recorder_task = None
    if args.record:
        from .recorder import Recorder
        recorder = Recorder(acq, output=args.record, duration=args.record_duration)
        logger.info("Recording to %s%s",
                    args.record,
                    f" for {args.record_duration}s" if args.record_duration else "")

    # --- Terminal monitor (optional, alongside server) ---
    monitor = None
    monitor_task = None
    if args.monitor:
        from .monitor import TerminalMonitor
        monitor = TerminalMonitor(acq)

    # --- Graceful shutdown ---
    def shutdown(*_):
        logger.info("Shutting down...")
        if monitor_task:
            monitor_task.cancel()
        if recorder_task:
            recorder_task.cancel()
        if dashboard:
            dashboard.stop()
        acq.stop()
        hw.close()
        loop.stop()
        sys.exit(0)

    signal.signal(signal.SIGINT, shutdown)
    signal.signal(signal.SIGTERM, shutdown)

    # --- Run ---
    # Show all ways clients can connect
    hostname = socket.gethostname()
    try:
        local_ip = socket.gethostbyname(hostname)
    except socket.gaierror:
        local_ip = "127.0.0.1"

    logger.info("PiEEG-16 server ready:")
    logger.info("  WebSocket: ws://%s:%d", local_ip, args.port)
    logger.info("  WebSocket: ws://%s.local:%d  (mDNS)", hostname, args.port)
    if not args.no_dashboard:
        logger.info("  Dashboard: http://%s:%d", local_ip, args.dashboard_port)
        logger.info("  Dashboard: http://%s.local:%d  (mDNS)", hostname, args.dashboard_port)
    if args.record:
        logger.info("  Recording: %s", args.record)
    if args.monitor:
        logger.info("  Monitor:   terminal (live)")

    # --- Show access code ---
    if not args.no_dashboard and auth:
        auth.print_code()

    async def _run_all():
        tasks = [asyncio.create_task(server.run())]
        if recorder:
            nonlocal recorder_task
            recorder_task = asyncio.create_task(recorder.run())
            tasks.append(recorder_task)
        if monitor:
            nonlocal monitor_task
            monitor_task = asyncio.create_task(monitor.run())
            tasks.append(monitor_task)
        await asyncio.gather(*tasks)

    loop.run_until_complete(_run_all())


if __name__ == "__main__":
    main()
