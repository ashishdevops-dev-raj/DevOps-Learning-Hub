# Script to push DevOps Learning Hub to GitHub
Write-Host "=== DevOps Learning Hub - Git Push Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if we're in a git repository
if (-not (Test-Path .git)) {
    Write-Host "Error: Not a git repository!" -ForegroundColor Red
    exit 1
}

Write-Host "1. Checking git status..." -ForegroundColor Yellow
git status --short
Write-Host ""

Write-Host "2. Adding all files..." -ForegroundColor Yellow
git add -A
Write-Host "Files added successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "3. Committing changes..." -ForegroundColor Yellow
git commit -m "Initial commit: DevOps Learning Hub with all projects and sub-projects"
Write-Host "Commit created successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "4. Checking remote..." -ForegroundColor Yellow
git remote -v
Write-Host ""

Write-Host "5. Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main
Write-Host ""

Write-Host "=== Push Complete! ===" -ForegroundColor Green
Write-Host "Check your repository at: https://github.com/ashishdevops-dev-raj/DevOps-Learning-Hub" -ForegroundColor Cyan

