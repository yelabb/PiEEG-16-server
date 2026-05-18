# Avatar Download Script
# Downloads a free rigged avatar with facial expressions

$avatarUrl = "https://raw.githubusercontent.com/google/model-viewer/master/packages/shared-assets/models/RobotExpressive.glb"
$outputPath = "avatar.glb"

Write-Host "Downloading RobotExpressive avatar from Google Model Viewer..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $avatarUrl -OutFile $outputPath
Write-Host "✓ Avatar downloaded to $outputPath" -ForegroundColor Green
Write-Host ""
Write-Host "This avatar includes:" -ForegroundColor Yellow
Write-Host "  - Full body rig (humanoid)"
Write-Host "  - 7 animations: Idle, Walking, Running, Jump, Death, Dance, TPose"
Write-Host "  - Facial morph targets for expressions"
Write-Host "  - Optimized for Three.js (454 KB)"
Write-Host ""
Write-Host "Source: https://github.com/google/model-viewer" -ForegroundColor Cyan
