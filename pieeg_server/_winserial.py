"""
Bare-bones Win32 serial port backend for IronBCI-32 / FreeEEG32-style boards.

Used as a fallback when pyserial fails with Windows error 87
("The parameter is incorrect") — typically caused by the buggy
STMicroelectronics Virtual COM Port driver rejecting `SetCommState`.

We bypass `SetCommState` entirely. USB-CDC ignores baudrate / parity /
stopbits at the wire level (those parameters only matter for real UART
adapters), so the device streams correctly regardless of what we'd have
asked for. We only need:

    CreateFileW(\\.\COM<N>, GENERIC_READ|GENERIC_WRITE, …)
    SetCommTimeouts(handle, COMMTIMEOUTS{...})
    PurgeComm(handle, PURGE_RXCLEAR)
    ReadFile(handle, buf, n, &n_read, NULL)
    CloseHandle(handle)

That's the entire API surface. ~80 lines of ctypes, zero pyserial.

Public surface (intentionally pyserial-compatible subset):
- `WinapiSerial(port, timeout)` — constructor + open
- `.read(n)` → bytes
- `.reset_input_buffer()` → None
- `.close()` → None

Intended to be a drop-in replacement for the small subset of pyserial
that `ironbci_32.py` uses. Not a general-purpose pyserial replacement.
"""

from __future__ import annotations

import ctypes
import sys
from ctypes import wintypes

# This module is Windows-only by design. Importing it on POSIX is a bug.
if sys.platform != "win32":  # pragma: no cover — guarded by callers
    raise ImportError("_winserial is Windows-only")

# --- Win32 constants --------------------------------------------------------
GENERIC_READ = 0x80000000
GENERIC_WRITE = 0x40000000
OPEN_EXISTING = 3
FILE_ATTRIBUTE_NORMAL = 0x80
INVALID_HANDLE_VALUE = ctypes.c_void_p(-1).value

PURGE_RXABORT = 0x0002
PURGE_RXCLEAR = 0x0008
PURGE_TXABORT = 0x0001
PURGE_TXCLEAR = 0x0004
PURGE_ALL = PURGE_RXABORT | PURGE_RXCLEAR | PURGE_TXABORT | PURGE_TXCLEAR

ERROR_IO_PENDING = 997


class _COMMTIMEOUTS(ctypes.Structure):
    _fields_ = [
        ("ReadIntervalTimeout", wintypes.DWORD),
        ("ReadTotalTimeoutMultiplier", wintypes.DWORD),
        ("ReadTotalTimeoutConstant", wintypes.DWORD),
        ("WriteTotalTimeoutMultiplier", wintypes.DWORD),
        ("WriteTotalTimeoutConstant", wintypes.DWORD),
    ]


# --- kernel32 bindings (lazy-loaded so import works in tests on non-Win) ---
_kernel32 = ctypes.WinDLL("kernel32", use_last_error=True)

_CreateFileW = _kernel32.CreateFileW
_CreateFileW.argtypes = [
    wintypes.LPCWSTR,   # lpFileName
    wintypes.DWORD,     # dwDesiredAccess
    wintypes.DWORD,     # dwShareMode
    wintypes.LPVOID,    # lpSecurityAttributes
    wintypes.DWORD,     # dwCreationDisposition
    wintypes.DWORD,     # dwFlagsAndAttributes
    wintypes.HANDLE,    # hTemplateFile
]
_CreateFileW.restype = wintypes.HANDLE

_CloseHandle = _kernel32.CloseHandle
_CloseHandle.argtypes = [wintypes.HANDLE]
_CloseHandle.restype = wintypes.BOOL

_ReadFile = _kernel32.ReadFile
_ReadFile.argtypes = [
    wintypes.HANDLE,
    wintypes.LPVOID,
    wintypes.DWORD,
    ctypes.POINTER(wintypes.DWORD),
    wintypes.LPVOID,   # lpOverlapped (NULL → synchronous)
]
_ReadFile.restype = wintypes.BOOL

_SetCommTimeouts = _kernel32.SetCommTimeouts
_SetCommTimeouts.argtypes = [wintypes.HANDLE, ctypes.POINTER(_COMMTIMEOUTS)]
_SetCommTimeouts.restype = wintypes.BOOL

_PurgeComm = _kernel32.PurgeComm
_PurgeComm.argtypes = [wintypes.HANDLE, wintypes.DWORD]
_PurgeComm.restype = wintypes.BOOL


def _winerror() -> str:
    """Format the last Win32 error like pyserial does."""
    err = ctypes.get_last_error()
    return f"WinError {err}: {ctypes.WinError(err).strerror}"


def _normalize_port(port: str) -> str:
    """`COM6` → `\\\\.\\COM6` (required for COM10+ and safe for COM1-9)."""
    if port.startswith(r"\\.\\"):
        return port
    return r"\\.\\" + port


class WinapiSerial:
    """Synchronous, blocking, fixed-timeout Win32 serial port.

    Mimics the small subset of `pyserial.Serial` that
    `pieeg_server.ironbci_32` actually uses. Does NOT call `SetCommState`,
    so it works around STM32 VCP driver bugs that reject baudrate
    configuration.
    """

    def __init__(self, port: str, timeout: float = 1.0) -> None:
        self._name = port
        self._timeout = timeout
        self._handle: int | None = None
        self._open()

    # -- lifecycle ----------------------------------------------------------
    def _open(self) -> None:
        path = _normalize_port(self._name)
        # Open exclusively (dwShareMode=0 like pyserial).
        handle = _CreateFileW(
            path,
            GENERIC_READ | GENERIC_WRITE,
            0,
            None,
            OPEN_EXISTING,
            FILE_ATTRIBUTE_NORMAL,
            None,
        )
        if handle == INVALID_HANDLE_VALUE or handle is None:
            raise OSError(f"CreateFileW({path}) failed: {_winerror()}")

        # Configure timeouts: ReadIntervalTimeout=MAXDWORD with both
        # multiplier=0 and constant=0 means "return immediately with whatever
        # is in the buffer". We instead want "wait up to `timeout` ms total".
        timeout_ms = max(1, int(self._timeout * 1000))
        ct = _COMMTIMEOUTS(
            ReadIntervalTimeout=0,
            ReadTotalTimeoutMultiplier=0,
            ReadTotalTimeoutConstant=timeout_ms,
            WriteTotalTimeoutMultiplier=0,
            WriteTotalTimeoutConstant=timeout_ms,
        )
        if not _SetCommTimeouts(handle, ctypes.byref(ct)):
            err = _winerror()
            _CloseHandle(handle)
            raise OSError(f"SetCommTimeouts failed: {err}")

        # Flush any stale bytes the driver may have buffered.
        _PurgeComm(handle, PURGE_RXCLEAR | PURGE_TXCLEAR)
        self._handle = handle

    def close(self) -> None:
        h = self._handle
        self._handle = None
        if h is not None:
            _CloseHandle(h)

    def __del__(self) -> None:  # pragma: no cover — best-effort cleanup
        try:
            self.close()
        except Exception:
            pass

    # -- I/O ----------------------------------------------------------------
    def read(self, n: int) -> bytes:
        """Read up to `n` bytes; returns fewer (or empty) on timeout."""
        if self._handle is None:
            raise OSError("port is closed")
        if n <= 0:
            return b""
        buf = (ctypes.c_ubyte * n)()
        n_read = wintypes.DWORD(0)
        ok = _ReadFile(self._handle, buf, n, ctypes.byref(n_read), None)
        if not ok:
            raise OSError(f"ReadFile failed: {_winerror()}")
        return bytes(buf[: n_read.value])

    def reset_input_buffer(self) -> None:
        if self._handle is None:
            return
        _PurgeComm(self._handle, PURGE_RXCLEAR)

    # -- pyserial-compat properties (no-ops on USB-CDC) ---------------------
    @property
    def name(self) -> str:
        return self._name

    @property
    def is_open(self) -> bool:
        return self._handle is not None
