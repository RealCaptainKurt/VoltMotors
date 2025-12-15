@echo off
echo Building VoltMotors Frontend...
echo.

cd VoltMotors.Client

echo Installing dependencies...
call npm install

echo Building React app...
call npm run build

echo Copying to wwwroot...
if exist "..\VoltMotors.Server\wwwroot" rmdir /s /q "..\VoltMotors.Server\wwwroot"
mkdir "..\VoltMotors.Server\wwwroot"
xcopy /E /I /Y "dist\*" "..\VoltMotors.Server\wwwroot\"

cd ..

echo.
echo Frontend built successfully!
echo You can now run: dotnet run --project VoltMotors.Server
echo.
pause
