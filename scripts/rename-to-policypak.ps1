# rename-to-policypak.ps1
# Comprehensive rename script for PolicyPak documentation
#
# Operations performed:
# 1. Renames components/endpointprivilegemanager → components/leastprivilegemanager (via git mv)
# 2. Fixes all internal link paths referencing the old EPM component directory
# 3. Text replacements for "Endpoint Policy Manager" → "PolicyPak" (with "formerly" cleanup)
# 4. Text replacements for "Endpoint Privilege Manager" → "Least Privilege Manager"
#
# Run from the root of the docs repository (c:\GITLOCAL\docs)

param(
    [switch]$DryRun = $false
)

$ErrorActionPreference = 'Stop'
$root = 'docs\endpointpolicymanager'
$changeCount = 0
$fileCount = 0

Write-Host "=== PolicyPak Rename Script ===" -ForegroundColor Cyan
if ($DryRun) {
    Write-Host "*** DRY RUN MODE - No changes will be made ***" -ForegroundColor Yellow
}

# ============================================================
# Step 1: Rename directory (endpointprivilegemanager → leastprivilegemanager)
# ============================================================
Write-Host "`n--- Step 1: Directory Rename ---" -ForegroundColor Green
$oldDir = Join-Path $root 'components\endpointprivilegemanager'
$newDir = Join-Path $root 'components\leastprivilegemanager'

if (Test-Path $oldDir) {
    if (-not $DryRun) {
        # Use git mv for history tracking
        & git mv $oldDir $newDir
        Write-Host "  Renamed: $oldDir -> $newDir"
    } else {
        Write-Host "  Would rename: $oldDir -> $newDir"
    }
} elseif (Test-Path $newDir) {
    Write-Host "  Directory already renamed (skipping)"
} else {
    Write-Host "  WARNING: Neither old nor new directory found!" -ForegroundColor Red
}

# ============================================================
# Step 2: Text and path replacements
# ============================================================
Write-Host "`n--- Step 2: Text and Path Replacements ---" -ForegroundColor Green

# Get all target files
$files = Get-ChildItem -Path $root -Recurse -Include *.md, *.json -File
Write-Host "  Found $($files.Count) files to process"

# Define replacements in ORDER OF SPECIFICITY (most specific first!)
# Each entry: [regex_pattern, replacement_string, description]
$replacements = @(
    # --- PATH REPLACEMENTS ---
    # Fix link paths for renamed EPM component directory
    # This is safe because 'endpointprivilegemanager' only appears as a docs path slug
    ,@('endpointprivilegemanager', 'leastprivilegemanager', 'Path: EPM component directory slug')

    # --- ENDPOINT PRIVILEGE MANAGER TEXT REPLACEMENTS ---
    # Fix the ironic "formerly Least Privilege Manager" clause (since we're going BACK to LPM)
    ,@('Endpoint\s+Privilege\s+Manager\s*\(formerly\s+Least\s+Privilege\s+Manager\)', 'Least Privilege Manager', 'EPM (formerly LPM) -> LPM')
    # Fix EPM with MacOS parenthetical
    ,@('Endpoint\s+Privilege\s+Manager\s*\(MacOS\s+using\s+EPM\s+Cloud\)', 'Least Privilege Manager (MacOS using PolicyPak Cloud)', 'EPM (MacOS using EPM Cloud)')
    # Fix EPM with Windows parenthetical
    ,@('Endpoint\s+Privilege\s+Manager\s*\(Windows\)', 'Least Privilege Manager (Windows)', 'EPM (Windows)')
    # Fix EPM with Windows and Mac parenthetical
    ,@('Endpoint\s+Privilege\s+Manager\s*\(Windows\s+and\s+Mac\)', 'Least Privilege Manager (Windows and Mac)', 'EPM (Windows and Mac)')
    # General EPM → LPM (catch-all for remaining Endpoint Privilege Manager references)
    ,@('Endpoint Privilege Manager', 'Least Privilege Manager', 'EPM -> LPM (general)')
    # Also handle "Endpoint Privilege:" (truncated form seen in some link text)
    ,@('Endpoint Privilege:', 'Least Privilege Manager:', 'Endpoint Privilege: -> LPM:')

    # --- ENDPOINT POLICY MANAGER TEXT REPLACEMENTS ---
    # Fix double-Netwrix bug with formerly clause (multi-line aware)
    ,@('Netwrix\s+Netwrix\s+Endpoint\s+Policy\s+Manager\s*\(formerly\s+PolicyPak\)', 'Netwrix PolicyPak', 'Double-Netwrix + formerly')
    # Fix "Netwrix Endpoint Policy Manager (formerly PolicyPak)" - THE primary pattern
    # Handle both single-line and multi-line (where "formerly\nPolicyPak" spans lines)
    ,@('Netwrix\s+Endpoint\s+Policy\s+Manager\s*\(formerly[\s\r\n]+PolicyPak\)', 'Netwrix PolicyPak', 'Netwrix EPM (formerly PP)')
    # Fix remaining "Netwrix Endpoint Policy Manager" without formerly
    ,@('Netwrix\s+Endpoint\s+Policy\s+Manager', 'Netwrix PolicyPak', 'Netwrix EPM (no formerly)')
    # Fix standalone "Endpoint Policy Manager" → "PolicyPak"
    ,@('Endpoint Policy Manager', 'PolicyPak', 'EPM -> PolicyPak (standalone)')
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $original = $content
    $fileChanges = @()

    foreach ($r in $replacements) {
        [string]$pattern = $r[0]
        [string]$replacement = $r[1]
        [string]$desc = $r[2]

        # Count matches before replacing
        $matches = [regex]::Matches($content, $pattern)
        if ($matches.Count -gt 0) {
            $content = [regex]::Replace($content, $pattern, $replacement)
            $fileChanges += "    $desc : $($matches.Count) replacements"
            $changeCount += $matches.Count
        }
    }

    if ($content -ne $original) {
        $fileCount++
        $relativePath = $file.FullName.Substring((Get-Location).Path.Length + 1)
        Write-Host "  Updated: $relativePath" -ForegroundColor White
        foreach ($change in $fileChanges) {
            Write-Host $change -ForegroundColor DarkGray
        }

        if (-not $DryRun) {
            [System.IO.File]::WriteAllText($file.FullName, $content)
        }
    }
}

# ============================================================
# Summary
# ============================================================
Write-Host "`n=== Summary ===" -ForegroundColor Cyan
Write-Host "  Files modified: $fileCount"
Write-Host "  Total replacements: $changeCount"
if ($DryRun) {
    Write-Host "`n*** DRY RUN - No files were actually modified ***" -ForegroundColor Yellow
    Write-Host "  Run without -DryRun to apply changes" -ForegroundColor Yellow
} else {
    Write-Host "`n  Changes applied. Review with: git diff --stat" -ForegroundColor Green
}
