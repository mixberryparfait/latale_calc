@echo off
echo LaTale Damage Calculator Launcher
echo =================================
echo.
echo [1] Run server with auto-compile SCSS (requires npm)
echo [2] Run server only (Python)
echo [3] Compile SCSS only (requires npm)
echo [4] Watch SCSS changes (requires npm)
echo.
set /p choice="Select option (1-4): "

if "%choice%"=="1" (
    echo.
    echo Installing dependencies if needed...
    call npm install
    echo.
    echo Compiling SCSS to CSS...
    call npm run build-css
    echo.
    echo Starting HTTP server on port 8000...
    echo Access the calculator at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
) else if "%choice%"=="2" (
    echo.
    echo Starting HTTP server on port 8000...
    echo Access the calculator at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
) else if "%choice%"=="3" (
    echo.
    echo Compiling SCSS to CSS...
    call npm run build-css
    echo.
    echo Done! CSS file has been generated.
    pause
) else if "%choice%"=="4" (
    echo.
    echo Watching SCSS changes...
    echo Press Ctrl+C to stop watching
    call npm run watch-css
) else (
    echo Invalid option. Please select 1-4.
    pause
)
