# Build VoltMotors Frontend
Write-Host "Building frontend..." -ForegroundColor Cyan

# Navigate to client directory
Set-Location VoltMotors.Client

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the project
Write-Host "Building React app..." -ForegroundColor Yellow
npm run build

# Copy to server wwwroot
Write-Host "Copying to wwwroot..." -ForegroundColor Yellow
$wwwrootPath = "..\VoltMotors.Server\wwwroot"

# Remove old wwwroot if exists
if (Test-Path $wwwrootPath) {
    Remove-Item -Path $wwwrootPath -Recurse -Force
}

# Create wwwroot directory
New-Item -ItemType Directory -Path $wwwrootPath -Force | Out-Null

# Copy dist contents to wwwroot
Copy-Item -Path "dist\*" -Destination $wwwrootPath -Recurse -Force

Write-Host "Frontend built successfully!" -ForegroundColor Green
Write-Host "Run the backend: cd VoltMotors.Server && dotnet run" -ForegroundColor Cyan

# Return to root
Set-Location ..
