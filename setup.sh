#!/usr/bin/env bash
# ============================================================
# PiEEG-16-server: One-time setup script for Raspberry Pi
# Run once on a fresh Raspberry Pi OS installation.
#
# Usage:
#   chmod +x setup.sh && ./setup.sh
#
# What it does:
#   1. Detects your Pi model and validates compatibility
#   2. Installs system packages (python3, pip, venv)
#   3. Enables the SPI interface (needed for ADC communication)
#   4. Creates a Python venv and installs pieeg-server
#   5. Creates a systemd service (auto-start on boot)
#   6. Symlinks 'pieeg-server' to /usr/local/bin
#   7. Runs a self-test to verify everything works
# ============================================================
set -euo pipefail

# --- Colors & formatting ---
if [ -t 1 ] && command -v tput &>/dev/null; then
    BOLD=$(tput bold)
    GREEN=$(tput setaf 2)
    YELLOW=$(tput setaf 3)
    RED=$(tput setaf 1)
    CYAN=$(tput setaf 6)
    RESET=$(tput sgr0)
else
    BOLD="" GREEN="" YELLOW="" RED="" CYAN="" RESET=""
fi

ok()   { echo "  ${GREEN}✓${RESET} $*"; }
warn() { echo "  ${YELLOW}⚠${RESET} $*"; }
fail() { echo "  ${RED}✗${RESET} $*"; }
step() { echo ""; echo "${BOLD}${CYAN}[$1]${RESET} ${BOLD}$2${RESET}"; }

die() {
    echo ""
    fail "$1"
    echo ""
    echo "  Setup failed. You can re-run this script after fixing the issue above."
    echo "  For help: https://github.com/yelabb/PiEEG-16-server/issues"
    exit 1
}

NEEDS_REBOOT=0
INSTALL_DIR="$(cd "$(dirname "$0")" && pwd)"

# ============================================================
# Step 1: Detect Raspberry Pi model
# ============================================================
step "1/7" "Detecting Raspberry Pi..."

detect_pi() {
    if [ ! -f /proc/cpuinfo ]; then
        return 1
    fi

    # Read Pi model from device-tree if available
    if [ -f /proc/device-tree/model ]; then
        PI_MODEL=$(tr -d '\0' < /proc/device-tree/model)
    elif grep -qi "raspberry" /proc/cpuinfo 2>/dev/null; then
        PI_MODEL="Raspberry Pi (unknown model)"
    else
        return 1
    fi

    # Determine Pi generation for GPIO chip selection
    case "$PI_MODEL" in
        *"Pi 5"*)   PI_GEN=5; GPIO_CHIP="/dev/gpiochip4" ;;
        *"Pi 4"*)   PI_GEN=4; GPIO_CHIP="/dev/gpiochip0" ;;
        *"Pi 3"*)   PI_GEN=3; GPIO_CHIP="/dev/gpiochip0" ;;
        *"Pi Zero 2"*) PI_GEN=3; GPIO_CHIP="/dev/gpiochip0" ;;
        *)          PI_GEN=0; GPIO_CHIP="/dev/gpiochip0" ;;
    esac

    return 0
}

if detect_pi; then
    ok "Detected: $PI_MODEL"
    if [ "$PI_GEN" -ge 3 ]; then
        ok "GPIO chip: $GPIO_CHIP"
    else
        warn "Pi generation $PI_GEN — PiEEG-16 is designed for Pi 3/4/5"
    fi
else
    warn "Not running on a Raspberry Pi (or /proc/cpuinfo not available)"
    warn "Continuing anyway — use --mock mode for testing"
    PI_MODEL="Unknown"
    PI_GEN=0
    GPIO_CHIP="/dev/gpiochip0"
fi

# ============================================================
# Step 2: Check prerequisites
# ============================================================
step "2/7" "Checking prerequisites..."

# Must be Linux
if [[ "$(uname)" != "Linux" ]]; then
    die "This setup script is for Linux (Raspberry Pi OS). Detected: $(uname)"
fi

# Check for sudo
if ! command -v sudo &>/dev/null; then
    die "sudo is required but not found. Run as root or install sudo."
fi

# Check we can sudo
if ! sudo -v 2>/dev/null; then
    die "Cannot obtain sudo privileges. Please check your permissions."
fi

ok "Linux detected, sudo available"

# ============================================================
# Step 3: Install system packages
# ============================================================
step "3/7" "Installing system packages..."

sudo apt-get update -qq 2>&1 | tail -1 || die "apt-get update failed. Check your internet connection."
sudo apt-get install -y -qq python3 python3-pip python3-venv git 2>&1 | tail -1 || \
    die "Failed to install system packages."

# Verify Python version
PY_VERSION=$(python3 -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}')" 2>/dev/null) || \
    die "python3 not working after install."

PY_MAJOR=$(echo "$PY_VERSION" | cut -d. -f1)
PY_MINOR=$(echo "$PY_VERSION" | cut -d. -f2)

if [ "$PY_MAJOR" -lt 3 ] || { [ "$PY_MAJOR" -eq 3 ] && [ "$PY_MINOR" -lt 11 ]; }; then
    die "Python 3.11+ is required, but found Python $PY_VERSION. Upgrade your OS or install a newer Python."
fi

ok "Python $PY_VERSION"

# ============================================================
# Step 4: Enable SPI
# ============================================================
step "4/7" "Enabling SPI interface..."

enable_spi() {
    local config_file=""

    # Pi 5 / Bookworm uses /boot/firmware/config.txt
    if [ -f /boot/firmware/config.txt ]; then
        config_file="/boot/firmware/config.txt"
    elif [ -f /boot/config.txt ]; then
        config_file="/boot/config.txt"
    else
        warn "Cannot find boot config file — SPI may need manual setup"
        return
    fi

    if grep -q "^dtparam=spi=on" "$config_file" 2>/dev/null; then
        ok "SPI already enabled in $config_file"
    else
        echo "dtparam=spi=on" | sudo tee -a "$config_file" > /dev/null
        ok "SPI enabled in $config_file"
        NEEDS_REBOOT=1
    fi

    # Check if SPI device exists right now
    if [ -e /dev/spidev0.0 ]; then
        ok "SPI device /dev/spidev0.0 is available"
    else
        warn "SPI device not yet available (will appear after reboot)"
        NEEDS_REBOOT=1
    fi
}

enable_spi

# ============================================================
# Step 5: Create venv & install pieeg-server
# ============================================================
step "5/7" "Installing pieeg-server..."

cd "$INSTALL_DIR"

# Create venv (--system-site-packages so scipy can use OS numpy)
python3 -m venv --system-site-packages .venv || die "Failed to create virtual environment."
# shellcheck source=/dev/null
source .venv/bin/activate || die "Failed to activate virtual environment."

pip install --upgrade pip -q 2>&1 | tail -1 || die "Failed to upgrade pip."

echo "  Installing dependencies (this may take a minute on first run)..."
pip install -e ".[rpi]" -q 2>&1 | tail -3 || die "Failed to install pieeg-server."

# Check which dashboard will be served
if [ -d "$INSTALL_DIR/pieeg_server/static/dashboard" ]; then
    ok "Dashboard: React (pre-built)"
else
    warn "Dashboard: React build not found — run 'cd dashboard && npm run build' to build it"
fi

ok "Installed to: $INSTALL_DIR/.venv"

# ============================================================
# Step 6: Create systemd service
# ============================================================
step "6/7" "Creating systemd service..."

SERVICE_FILE="/etc/systemd/system/pieeg-server.service"

# Build ExecStart with correct GPIO chip for this Pi model
EXEC_CMD="$INSTALL_DIR/.venv/bin/pieeg-server"
if [ "$PI_GEN" -gt 0 ] && [ "$GPIO_CHIP" != "/dev/gpiochip4" ]; then
    EXEC_CMD="$EXEC_CMD --gpio-chip $GPIO_CHIP"
fi

sudo tee "$SERVICE_FILE" > /dev/null <<EOF
[Unit]
Description=PiEEG-16 EEG Streaming Server
After=network.target

[Service]
Type=simple
User=$(whoami)
WorkingDirectory=$INSTALL_DIR
ExecStart=$EXEC_CMD
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable pieeg-server.service 2>/dev/null
ok "Service created: pieeg-server.service (starts on boot)"

# Symlink so 'pieeg-server' works globally
sudo ln -sf "$INSTALL_DIR/.venv/bin/pieeg-server" /usr/local/bin/pieeg-server
ok "Command linked: /usr/local/bin/pieeg-server"

# ============================================================
# Step 7: Verify installation
# ============================================================
step "7/7" "Verifying installation..."

VERIFY_PASS=true

# Check entry point
if "$INSTALL_DIR/.venv/bin/pieeg-server" --help &>/dev/null; then
    ok "pieeg-server --help works"
else
    fail "pieeg-server --help failed"
    VERIFY_PASS=false
fi

# Check imports
if "$INSTALL_DIR/.venv/bin/python" -c "
from pieeg_server.server import PiEEGServer
from pieeg_server.acquisition import AcquisitionLoop
from pieeg_server.mock import MockHardware
from pieeg_server.filters import BandpassFilter
" 2>/dev/null; then
    ok "All Python modules import successfully"
else
    fail "Module import failed"
    VERIFY_PASS=false
fi

# Quick mock smoke test (2 seconds)
if timeout 3 "$INSTALL_DIR/.venv/bin/pieeg-server" --mock --no-dashboard 2>/dev/null; then
    ok "Mock server smoke test passed"
elif [ $? -eq 124 ]; then
    # timeout exit code = ran fine, we killed it
    ok "Mock server smoke test passed"
else
    warn "Mock smoke test had issues (may still work on real hardware)"
fi

# Check doctor command
if "$INSTALL_DIR/.venv/bin/pieeg-server" doctor --quiet 2>/dev/null; then
    ok "pieeg-server doctor: all checks passed"
else
    warn "pieeg-server doctor reported issues (run 'pieeg-server doctor' for details)"
fi

# ============================================================
# Done!
# ============================================================
echo ""
echo "${BOLD}${GREEN}=== Setup complete! ===${RESET}"
echo ""

if [ "$NEEDS_REBOOT" -eq 1 ]; then
    echo "  ${YELLOW}⚠  Reboot required to enable SPI.${RESET}"
    echo ""
    echo "  Run now:"
    echo "    ${BOLD}sudo reboot${RESET}"
    echo ""
    echo "  After reboot:"
    echo "    ${BOLD}pieeg-server${RESET}"
else
    echo "  Start the server:"
    echo "    ${BOLD}pieeg-server${RESET}"
fi

echo ""
echo "  With bandpass filter:  ${BOLD}pieeg-server --filter${RESET}"
echo "  Test without hardware: ${BOLD}pieeg-server --mock${RESET}"
echo "  Diagnose issues:       ${BOLD}pieeg-server doctor${RESET}"
echo ""
echo "  Dashboard: ${CYAN}http://$(hostname).local:1617${RESET}"
echo "  WebSocket: ${CYAN}ws://$(hostname).local:1616${RESET}"
echo ""
echo "  Auto-starts on boot via systemd"
echo ""

if [ "${NEEDS_REBOOT:-0}" -eq 1 ]; then
    echo "  *** REBOOT REQUIRED to enable SPI ***"
    echo "  Run: sudo reboot"
fi
