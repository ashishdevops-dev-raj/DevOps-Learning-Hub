# PowerShell Commands Reference

Quick reference for common commands in PowerShell (Windows).

## File and Directory Commands

### List files and directories
```powershell
# Simple list
ls
dir
Get-ChildItem

# Detailed list (like ls -l)
ls | Format-Table
Get-ChildItem | Format-List

# List with details
Get-ChildItem -Force | Format-Table Name, Length, LastWriteTime

# List only directories
Get-ChildItem -Directory

# List only files
Get-ChildItem -File
```

### Navigation
```powershell
# Change directory
cd "path\to\directory"
cd ..              # Go up one level
cd \               # Go to root

# Show current directory
pwd
Get-Location

# List directory contents
ls
dir
```

### File Operations
```powershell
# Copy file
Copy-Item file.txt destination.txt

# Move file
Move-Item file.txt newlocation\

# Delete file
Remove-Item file.txt
rm file.txt
del file.txt

# Delete directory
Remove-Item -Recurse directory
rmdir /s directory
```

### Create/Remove Directories
```powershell
# Create directory
mkdir newfolder
New-Item -ItemType Directory -Name "newfolder"

# Remove directory
rmdir folder
Remove-Item -Recurse folder
```

## Common Development Commands

### Node.js/npm
```powershell
# Install dependencies
npm install

# Run script
npm run dev
npm start

# Clear node_modules
Remove-Item -Recurse -Force node_modules
```

### Next.js Specific
```powershell
# Clear .next cache
Remove-Item -Recurse -Force .next

# Build
npm run build

# Start production
npm start
```

### Git Commands (same in PowerShell)
```powershell
git status
git add .
git commit -m "message"
git push
```

## Useful PowerShell Aliases

PowerShell has some Unix-like aliases:
- `ls` = `Get-ChildItem`
- `dir` = `Get-ChildItem`
- `cd` = `Set-Location`
- `pwd` = `Get-Location`
- `rm` = `Remove-Item`
- `cp` = `Copy-Item`
- `mv` = `Move-Item`
- `cat` = `Get-Content`
- `clear` = `Clear-Host`

## For Your Project

### Check if files exist
```powershell
# List all files
ls

# List with details
Get-ChildItem | Format-Table Name, Length, LastWriteTime

# Check specific file
Test-Path package.json
```

### Clear Next.js cache
```powershell
cd frontend
Remove-Item -Recurse -Force .next
```

### Install dependencies
```powershell
# From project root
npm run install:all

# Or individually
cd frontend
npm install
cd ../backend
npm install
```

## Differences from Linux/Mac

| Linux/Mac | PowerShell |
|-----------|------------|
| `ls -l` | `ls | Format-Table` or `Get-ChildItem | Format-List` |
| `ls -la` | `Get-ChildItem -Force` |
| `rm -rf` | `Remove-Item -Recurse -Force` |
| `mkdir -p` | `New-Item -ItemType Directory -Force` |
| `cat file` | `Get-Content file` or `cat file` (alias works) |
| `grep pattern` | `Select-String pattern` |

## Quick Tips

1. **Use Tab completion** - PowerShell has great tab completion
2. **Use quotes for paths with spaces** - `cd "New folder"`
3. **Get help** - `Get-Help command-name`
4. **Check command exists** - `Get-Command ls`

