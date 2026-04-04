#!/usr/bin/env bash
# ============================================================
# Build a release-ready Python package (sdist + wheel) that
# includes the pre-built React dashboard.
#
# Usage:
#   ./scripts/build_release.sh          # builds dist/*.whl + dist/*.tar.gz
#   ./scripts/build_release.sh --upload  # also uploads to PyPI via twine
#
# Requirements (on your dev machine, NOT on the Pi):
#   - Node.js >= 18  (for Vite build)
#   - Python >= 3.10 (build + twine)
# ============================================================
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "==> Building React dashboard..."
cd dashboard
npm ci --silent
npm run build
cd "$ROOT"

# Verify the build output exists
if [ ! -f "pieeg_server/static/dashboard/index.html" ]; then
    echo "ERROR: React build output not found at pieeg_server/static/dashboard/"
    exit 1
fi
echo "    ✓ React dashboard built → pieeg_server/static/dashboard/"

echo "==> Building Python package..."
python -m build
echo "    ✓ Package built → dist/"

ls -lh dist/*.whl dist/*.tar.gz 2>/dev/null

if [ "${1:-}" = "--upload" ]; then
    echo ""
    echo "==> Uploading to PyPI..."
    twine upload dist/*
    echo "    ✓ Uploaded to PyPI"
fi

echo ""
echo "Done. Install on a Raspberry Pi with:"
echo "  pip install pieeg-server"
