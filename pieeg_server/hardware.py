"""
Low-level hardware interface for PiEEG-16.

Manages two ADS1299 ADC chips via SPI (8 channels each = 16 total)
and GPIO lines for chip-select and data-ready signaling.

Requires: spidev, gpiod (v1.x or v2.x)
Must run on Raspberry Pi with SPI enabled and PiEEG-16 shield connected.
"""

import logging
import sys

logger = logging.getLogger("pieeg.hardware")

try:
    import spidev
except ImportError:
    spidev = None

try:
    import gpiod
except ImportError:
    gpiod = None


def _require_hardware_libs():
    """Check that spidev and gpiod are available, exit with a clear message if not."""
    missing = []
    if spidev is None:
        missing.append("spidev")
    if gpiod is None:
        missing.append("gpiod")
    if missing:
        print(
            f"\n  ERROR: Missing hardware libraries: {', '.join(missing)}\n\n"
            f"  These are Raspberry Pi-only packages.\n"
            f"  Install them inside the project venv:\n"
            f"    cd PiEEG-16-Server && ./setup.sh\n\n"
            f"  Or for testing without hardware:\n"
            f"    pieeg-server --mock\n",
            file=sys.stderr,
        )
        sys.exit(1)

# --- ADC register addresses ---
WHO_I_AM = 0x00
CONFIG1 = 0x01
CONFIG2 = 0x02
CONFIG3 = 0x03
CH1SET = 0x05
CH2SET = 0x06
CH3SET = 0x07
CH4SET = 0x08
CH5SET = 0x09
CH6SET = 0x0A
CH7SET = 0x0B
CH8SET = 0x0C

# --- ADC commands ---
CMD_WAKEUP = 0x02
CMD_RESET = 0x06
CMD_START = 0x08
CMD_STOP = 0x0A
CMD_RDATAC = 0x10
CMD_SDATAC = 0x11
CMD_RDATA = 0x12

# --- Conversion constants ---
# 24-bit ADC: 2^23 - 1 = 0x7FFFFF, 2^24 - 1 = 0xFFFFFF
SIGN_TEST = 0x7FFFFF
FULL_SCALE = 0xFFFFFF
FULL_SCALE_PLUS_1 = 16777215
NEGATIVE_OFFSET = 16777214
VREF_UV = 4.5e6  # 4.5V reference in microvolts

# --- GPIO pins ---
CS_PIN = 19
DRDY_PIN = 26

# --- SPI settings ---
SPI_SPEED_HZ = 1_000_000
SPI_MODE = 0b01
SPI_BITS = 8
BYTES_PER_READ = 27  # 3 status + 8 channels * 3 bytes

# --- Expected status header from ADC chip 2 ---
EXPECTED_STATUS = (192, 0, 8)  # 0xC0, 0x00, 0x08

# --- Spike detection (matches not_spike script) ---
SPIKE_THRESHOLD = 5000  # max allowed jump in raw 24-bit signed value


# Detect gpiod API version at import time (if gpiod is available)
_GPIOD_V2 = (gpiod is not None
             and hasattr(gpiod, 'Chip')
             and hasattr(gpiod, 'LineSettings'))


class PiEEGHardware:
    """Hardware abstraction for the PiEEG-16 shield."""

    def __init__(self, gpio_chip: str = "/dev/gpiochip4"):
        self._gpio_chip_name = gpio_chip
        self._chip = None
        self._gpio_request = None   # gpiod v2
        self._cs_line = None        # gpiod v1
        self._drdy_line = None      # gpiod v1
        self._spi1 = None
        self._spi2 = None
        self._last_valid_value: int | None = None
        self._spike_count = 0

    # --- lifecycle ---

    def open(self):
        """Initialize GPIO and SPI, configure both ADC chips."""
        _require_hardware_libs()
        self._init_gpio()
        self._init_spi()
        self._configure_adc(chip_num=1)
        self._configure_adc(chip_num=2)

    def close(self):
        """Release all hardware resources."""
        if self._spi1:
            self._spi1.close()
        if self._spi2:
            self._spi2.close()
        if _GPIOD_V2:
            if self._gpio_request:
                self._gpio_request.release()
            if self._chip:
                self._chip.close()
        else:
            if self._cs_line:
                self._cs_line.release()
            if self._drdy_line:
                self._drdy_line.release()

    def __enter__(self):
        self.open()
        return self

    def __exit__(self, *exc):
        self.close()

    # --- public API ---

    def read_sample(self):
        """
        Read one 16-channel sample from the ADC.

        Returns None on status header mismatch.
        Returns a list of 16 floats (microvolts) on success.

        Caller (acquisition loop) is responsible for DRDY polling.
        """
        # Read 27 bytes from each ADC chip
        raw1 = self._spi1.readbytes(BYTES_PER_READ)

        self._cs_set(0)
        raw2 = self._spi2.readbytes(BYTES_PER_READ)
        self._cs_set(1)

        # Spike detection: check last channel of chip 2 (bytes 24-26)
        if not self._is_valid_frame(raw2):
            return None

        # Validate status bytes from chip 2
        if (raw2[0], raw2[1], raw2[2]) != EXPECTED_STATUS:
            return None

        channels = []
        channels.extend(self._decode_channels(raw1))
        channels.extend(self._decode_channels(raw2))
        return channels

    def _is_valid_frame(self, raw: list[int]) -> bool:
        """Spike detection matching the original not_spike script.

        Checks the last 3 bytes (bytes 24-26) of the SPI read as a signed
        24-bit integer. If the jump from the previous valid value exceeds
        SPIKE_THRESHOLD, the frame is considered corrupted.
        """
        combined = (raw[24] << 16) | (raw[25] << 8) | raw[26]
        if raw[24] & 0x80:
            combined -= 1 << 24

        if self._last_valid_value is None:
            self._last_valid_value = combined
            return False  # first frame is always skipped, matching original

        if abs(combined - self._last_valid_value) > SPIKE_THRESHOLD:
            self._spike_count += 1
            logger.debug("Spike detected (count: %d)", self._spike_count)
            return False

        self._last_valid_value = combined
        return True

    def wait_for_drdy(self):
        """
        Block until DRDY goes high (pre-condition for a valid read).
        Returns True when DRDY is high, meaning data will be ready
        on the next low transition.
        """
        return self._drdy_get() == 1

    # --- GPIO helpers (v1/v2 compatible) ---

    def _cs_set(self, value: int):
        """Set chip-select line: 1 = high (deselect), 0 = low (select)."""
        if _GPIOD_V2:
            from gpiod.line import Value
            self._gpio_request.set_value(
                CS_PIN, Value.ACTIVE if value else Value.INACTIVE)
        else:
            self._cs_line.set_value(value)

    def _drdy_get(self) -> int:
        """Read data-ready line. Returns 1 when high."""
        if _GPIOD_V2:
            from gpiod.line import Value
            return 1 if self._gpio_request.get_value(DRDY_PIN) == Value.ACTIVE else 0
        else:
            return self._drdy_line.get_value()

    # --- private helpers ---

    def _init_gpio(self):
        if _GPIOD_V2:
            self._init_gpio_v2()
        else:
            self._init_gpio_v1()

    def _init_gpio_v2(self):
        """Initialize GPIO using gpiod >= 2.0 API."""
        from gpiod.line import Direction, Value
        logger.info("Using gpiod v2 API")
        self._chip = gpiod.Chip(self._gpio_chip_name)
        self._gpio_request = self._chip.request_lines(
            consumer="pieeg",
            config={
                CS_PIN: gpiod.LineSettings(
                    direction=Direction.OUTPUT,
                    output_value=Value.ACTIVE,
                ),
                DRDY_PIN: gpiod.LineSettings(
                    direction=Direction.INPUT,
                ),
            },
        )

    def _init_gpio_v1(self):
        """Initialize GPIO using gpiod < 2.0 API."""
        logger.info("Using gpiod v1 API")
        # Try OPEN_BY_PATH first (needed for libgpiodcxx wrapper)
        try:
            self._chip = gpiod.chip(self._gpio_chip_name,
                                    gpiod.chip.OPEN_BY_PATH)
        except (TypeError, AttributeError):
            self._chip = gpiod.chip(self._gpio_chip_name)

        # Chip-select line (output, default high)
        self._cs_line = self._chip.get_line(CS_PIN)
        cs_req = gpiod.line_request()
        cs_req.consumer = "pieeg_cs"
        cs_req.request_type = gpiod.line_request.DIRECTION_OUTPUT
        self._cs_line.request(cs_req)
        self._cs_line.set_value(1)

        # Data-ready line (input)
        self._drdy_line = self._chip.get_line(DRDY_PIN)
        drdy_req = gpiod.line_request()
        drdy_req.consumer = "pieeg_drdy"
        drdy_req.request_type = gpiod.line_request.DIRECTION_INPUT
        self._drdy_line.request(drdy_req)

    def _init_spi(self):
        self._spi1 = spidev.SpiDev()
        self._spi1.open(0, 0)
        self._spi1.max_speed_hz = SPI_SPEED_HZ
        self._spi1.lsbfirst = False
        self._spi1.mode = SPI_MODE
        self._spi1.bits_per_word = SPI_BITS

        self._spi2 = spidev.SpiDev()
        self._spi2.open(0, 1)
        self._spi2.max_speed_hz = SPI_SPEED_HZ
        self._spi2.lsbfirst = False
        self._spi2.mode = SPI_MODE
        self._spi2.bits_per_word = SPI_BITS

    def _send_command(self, chip_num: int, command: int):
        if chip_num == 1:
            self._spi1.xfer([command])
        else:
            self._cs_set(0)
            self._spi2.xfer([command])
            self._cs_set(1)

    def _write_register(self, chip_num: int, register: int, value: int):
        data = [0x40 | register, 0x00, value]
        if chip_num == 1:
            self._spi1.xfer(data)
        else:
            self._cs_set(0)
            self._spi2.xfer(data)
            self._cs_set(1)

    def _configure_adc(self, chip_num: int):
        """Send the full initialization sequence to one ADC chip."""
        self._send_command(chip_num, CMD_WAKEUP)
        self._send_command(chip_num, CMD_STOP)
        self._send_command(chip_num, CMD_RESET)
        self._send_command(chip_num, CMD_SDATAC)

        # Register configuration (matches original PiEEG-16 scripts)
        self._write_register(chip_num, 0x14, 0x80)  # GPIO
        self._write_register(chip_num, CONFIG1, 0x96)
        self._write_register(chip_num, CONFIG2, 0xD4)
        self._write_register(chip_num, CONFIG3, 0xFF)
        self._write_register(chip_num, 0x04, 0x00)
        self._write_register(chip_num, 0x0D, 0x00)
        self._write_register(chip_num, 0x0E, 0x00)
        self._write_register(chip_num, 0x0F, 0x00)
        self._write_register(chip_num, 0x10, 0x00)
        self._write_register(chip_num, 0x11, 0x00)
        self._write_register(chip_num, 0x15, 0x20)
        self._write_register(chip_num, 0x17, 0x00)

        # Enable all 8 channels with default gain
        for ch_reg in (CH1SET, CH2SET, CH3SET, CH4SET,
                       CH5SET, CH6SET, CH7SET, CH8SET):
            self._write_register(chip_num, ch_reg, 0x00)

        self._send_command(chip_num, CMD_RDATAC)
        self._send_command(chip_num, CMD_START)

    @staticmethod
    def _decode_channels(raw: list[int]) -> list[float]:
        """
        Decode 8 channels from a 27-byte SPI read.

        Bytes 0-2: status
        Bytes 3-26: 8 channels × 3 bytes (24-bit signed, MSB first)
        """
        channels = []
        for i in range(3, 25, 3):
            raw_val = (raw[i] << 16) | (raw[i + 1] << 8) | raw[i + 2]

            # Two's complement conversion for 24-bit signed values
            if raw_val | SIGN_TEST == FULL_SCALE:
                signed_val = raw_val - NEGATIVE_OFFSET
            else:
                signed_val = raw_val

            # Convert to microvolts: µV = 1e6 * 4.5 * (raw / (2^24 - 1))
            uv = round(VREF_UV * (signed_val / FULL_SCALE_PLUS_1), 2)
            channels.append(uv)

        return channels
