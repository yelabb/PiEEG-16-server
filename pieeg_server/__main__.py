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

from .acquisition import AcquisitionLoop
from .server import PiEEGServer, DEFAULT_HOST, DEFAULT_PORT
from .dashboard import DashboardServer, DEFAULT_DASHBOARD_PORT


def parse_args():
    p = argparse.ArgumentParser(
        prog="pieeg-server",
        description="PiEEG-16 local streaming server",
    )
    p.add_argument(
        "--host", default=DEFAULT_HOST,
        help="Bind address (default: 0.0.0.0 = all interfaces)",
    )
    p.add_argument(
        "--port", type=int, default=DEFAULT_PORT,
        help="WebSocket port (default: 1616)",
    )
    p.add_argument(
        "--dashboard-port", type=int, default=DEFAULT_DASHBOARD_PORT,
        help="Dashboard HTTP port (default: 1617)",
    )
    p.add_argument(
        "--no-dashboard", action="store_true",
        help="Disable the web dashboard",
    )
    p.add_argument(
        "--gpio-chip", default="0",
        help="GPIO chip name for gpiod (default: '0')",
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
        "--mock", action="store_true",
        help="Use synthetic EEG data (no hardware needed, for testing)",
    )
    return p.parse_args()


def main():
    args = parse_args()

    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
        datefmt="%H:%M:%S",
    )
    logger = logging.getLogger("pieeg")

    # --- Hardware ---
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

    # --- Acquisition ---
    loop = asyncio.new_event_loop()

    acq = AcquisitionLoop(hw, loop, mock=args.mock)
    acq.start()
    logger.info("Acquisition started (250 Hz, 16 channels%s)", " - MOCK" if args.mock else "")

    # --- Server ---
    server = PiEEGServer(acq, host=args.host, port=args.port)
    if args.filter:
        server.enable_filter(args.lowcut, args.highcut)
        logger.info("Server-side filter: %.1f-%.1f Hz", args.lowcut, args.highcut)

    # --- Dashboard ---
    dashboard = None
    if not args.no_dashboard:
        dashboard = DashboardServer(host=args.host, port=args.dashboard_port)
        dashboard.start()

    # --- Graceful shutdown ---
    def shutdown(*_):
        logger.info("Shutting down...")
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
    loop.run_until_complete(server.run())


if __name__ == "__main__":
    main()
