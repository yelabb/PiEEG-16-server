@echo off
REM Convenience wrapper: runs pieeg-server from the project venv.
REM Usage:  .\pieeg-server.cmd --mock
setlocal
set "VENV=%~dp0.venv\Scripts\python.exe"
if not exist "%VENV%" (
    echo ERROR: Virtual environment not found. Run setup first:
    echo   python -m venv .venv
    echo   .venv\Scripts\pip install -e .
    exit /b 1
)
"%VENV%" -m pieeg_server %*
