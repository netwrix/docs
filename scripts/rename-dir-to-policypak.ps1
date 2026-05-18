# rename-dir-to-policypak.ps1
# Top-level directory rename: endpointpolicymanager → policypak
#
# Operations performed (in order):
# 1. git mv docs/endpointpolicymanager → docs/policypak
# 2. git mv static/images/endpointpolicymanager → static/images/policypak
# 3. git mv sidebars/endpointpolicymanager.js → sidebars/policypak.js
# 4. Update sidebar content (endpointpolicymanagerSidebar → policypakSidebar)
# 5. Update src/config/products.js (id, name, path, sidebarFile, hasKBContent)
# 6. Update internal link paths in docs/policypak/**/*.md and *.json
# 7. Update image paths in docs/policypak/**/*.md and *.json
# 8. Add legacy redirect in docusaurus.config.js
#
# Run from the repository root (c:\GITLOCAL\docs)

param(
    [switch]$DryRun = $false
)

$ErrorActionPreference = 'Stop'
$changeCount = 0
$fileCount = 0

Write-Host "=== Top-Level Directory Rename: endpointpolicymanager → policypak ===" -ForegroundColor Cyan
if ($DryRun) {
    Write-Host "*** DRY RUN MODE - No changes will be made ***" -ForegroundColor Yellow
}

# ============================================================
# Step 1: Directory renames via git mv
# ============================================================
Write-Host "`n--- Step 1: Directory Renames (git mv) ---" -ForegroundColor Green

$dirRenames = @(
    ,@('docs\endpointpolicymanager', 'docs\policypak')
    ,@('static\images\endpointpolicymanager', 'static\images\policypak')
)

foreach ($pair in $dirRenames) {
    $oldDir = $pair[0]
    $newDir = $pair[1]

    if (Test-Path $oldDir) {
        if (-not $DryRun) {
            & git mv $oldDir $newDir
            Write-Host "  Renamed: $oldDir -> $newDir"
        } else {
            Write-Host "  Would rename: $oldDir -> $newDir"
        }
    } elseif (Test-Path $newDir) {
        Write-Host "  Already renamed (skipping): $newDir"
    } else {
        Write-Host "  WARNING: Neither old nor new directory found: $oldDir" -ForegroundColor Red
    }
}

# ============================================================
# Step 2: Sidebar file rename via git mv
# ============================================================
Write-Host "`n--- Step 2: Sidebar File Rename (git mv) ---" -ForegroundColor Green

$oldSidebar = 'sidebars\endpointpolicymanager.js'
$newSidebar = 'sidebars\policypak.js'

if (Test-Path $oldSidebar) {
    if (-not $DryRun) {
        & git mv $oldSidebar $newSidebar
        Write-Host "  Renamed: $oldSidebar -> $newSidebar"
    } else {
        Write-Host "  Would rename: $oldSidebar -> $newSidebar"
    }
} elseif (Test-Path $newSidebar) {
    Write-Host "  Already renamed (skipping): $newSidebar"
} else {
    Write-Host "  WARNING: Neither old nor new sidebar file found!" -ForegroundColor Red
}

# ============================================================
# Step 3: Update sidebar content
# ============================================================
Write-Host "`n--- Step 3: Update Sidebar Content ---" -ForegroundColor Green

# After rename, the file is at the new path
$sidebarFile = $newSidebar
if (-not (Test-Path $sidebarFile) -and $DryRun) {
    # In dry-run, the rename hasn't happened yet — read from old path
    $sidebarFile = $oldSidebar
}

if (Test-Path $sidebarFile) {
    $content = [System.IO.File]::ReadAllText((Resolve-Path $sidebarFile).Path)
    $original = $content
    $content = $content.Replace('endpointpolicymanagerSidebar', 'policypakSidebar')

    if ($content -ne $original) {
        $replacementCount = ([regex]::Matches($original, 'endpointpolicymanagerSidebar')).Count
        Write-Host "  Updated sidebar ID: endpointpolicymanagerSidebar -> policypakSidebar ($replacementCount occurrences)"
        $changeCount += $replacementCount
        $fileCount++

        if (-not $DryRun) {
            [System.IO.File]::WriteAllText((Resolve-Path $sidebarFile).Path, $content)
        }
    } else {
        Write-Host "  Sidebar ID already updated (skipping)"
    }
} else {
    Write-Host "  WARNING: Sidebar file not found at $sidebarFile" -ForegroundColor Red
}

# ============================================================
# Step 4: Update src/config/products.js
# ============================================================
Write-Host "`n--- Step 4: Update src/config/products.js ---" -ForegroundColor Green

$productsFile = 'src\config\products.js'
if (Test-Path $productsFile) {
    $content = [System.IO.File]::ReadAllText((Resolve-Path $productsFile).Path)
    $original = $content

    # Replace product definition values (targeted to the endpointpolicymanager product block)
    $content = $content.Replace("id: 'endpointpolicymanager'", "id: 'policypak'")
    $content = $content.Replace("name: 'Endpoint Policy Manager'", "name: 'PolicyPak'")
    $content = $content.Replace("path: 'docs/endpointpolicymanager'", "path: 'docs/policypak'")
    $content = $content.Replace("sidebarFile: './sidebars/sidebar.js'", "sidebarFile: './sidebars/policypak.js'")

    # Replace in hasKBContent function array
    $content = $content.Replace("'endpointpolicymanager',", "'policypak',")
    # Also handle case where it might be the last element without trailing comma
    $content = $content.Replace("'endpointpolicymanager'", "'policypak'")

    if ($content -ne $original) {
        # Count how many lines differ
        $origLines = $original -split "`n"
        $newLines = $content -split "`n"
        $diffCount = 0
        for ($i = 0; $i -lt [Math]::Max($origLines.Count, $newLines.Count); $i++) {
            if ($i -ge $origLines.Count -or $i -ge $newLines.Count -or $origLines[$i] -ne $newLines[$i]) {
                $diffCount++
            }
        }
        Write-Host "  Updated products.js ($diffCount lines changed):"
        Write-Host "    - id: 'endpointpolicymanager' -> 'policypak'" -ForegroundColor DarkGray
        Write-Host "    - name: 'Endpoint Policy Manager' -> 'PolicyPak'" -ForegroundColor DarkGray
        Write-Host "    - path: 'docs/endpointpolicymanager' -> 'docs/policypak'" -ForegroundColor DarkGray
        Write-Host "    - sidebarFile: './sidebars/sidebar.js' -> './sidebars/policypak.js'" -ForegroundColor DarkGray
        Write-Host "    - hasKBContent: 'endpointpolicymanager' -> 'policypak'" -ForegroundColor DarkGray
        $changeCount += $diffCount
        $fileCount++

        if (-not $DryRun) {
            [System.IO.File]::WriteAllText((Resolve-Path $productsFile).Path, $content)
        }
    } else {
        Write-Host "  products.js already updated (skipping)"
    }
} else {
    Write-Host "  WARNING: products.js not found!" -ForegroundColor Red
}

# ============================================================
# Step 5: Update internal link paths in markdown files under docs/policypak/
# ============================================================
Write-Host "`n--- Step 5: Update Internal Link Paths ---" -ForegroundColor Green

# Determine which docs directory to scan (after rename or before in dry-run)
$docsDir = 'docs\policypak'
if (-not (Test-Path $docsDir) -and $DryRun) {
    $docsDir = 'docs\endpointpolicymanager'
}

if (Test-Path $docsDir) {
    $files = Get-ChildItem -Path $docsDir -Recurse -Include *.md, *.json -File
    Write-Host "  Found $($files.Count) files to process in $docsDir"

    # These are safe, targeted doc-link patterns only
    # They will NOT match:
    #   - External URLs (policypak.com/endpointpolicymanager/...)
    #   - Windows paths (%programdata%\endpointpolicymanager\)
    #   - Email addresses (endpointpolicymanagerSales@netwrix.com)
    #   - PowerShell module names (Import-Module endpointpolicymanager.psd1)
    $linkReplacements = @(
        ,@('/docs/endpointpolicymanager/', '/docs/policypak/', 'Doc link paths: /docs/endpointpolicymanager/')
        ,@('(docs/endpointpolicymanager/', '(docs/policypak/', 'Relative doc paths: (docs/endpointpolicymanager/')
        ,@('](/docs/endpointpolicymanager)', '](/docs/policypak)', 'Bare product root links: ](/docs/endpointpolicymanager)')
    )

    foreach ($file in $files) {
        $content = [System.IO.File]::ReadAllText($file.FullName)
        $original = $content
        $fileChanges = @()

        foreach ($r in $linkReplacements) {
            [string]$oldStr = $r[0]
            [string]$newStr = $r[1]
            [string]$desc = $r[2]

            $count = 0
            $idx = $content.IndexOf($oldStr)
            while ($idx -ge 0) {
                $count++
                $idx = $content.IndexOf($oldStr, $idx + 1)
            }

            if ($count -gt 0) {
                $content = $content.Replace($oldStr, $newStr)
                $fileChanges += "    $desc : $count replacements"
                $changeCount += $count
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
} else {
    Write-Host "  WARNING: Docs directory not found: $docsDir" -ForegroundColor Red
}

# ============================================================
# Step 6: Update image paths in markdown files under docs/policypak/
# ============================================================
Write-Host "`n--- Step 6: Update Image Paths ---" -ForegroundColor Green

# Re-scan the same docs directory (already determined above)
if (Test-Path $docsDir) {
    $files = Get-ChildItem -Path $docsDir -Recurse -Include *.md, *.json -File

    foreach ($file in $files) {
        $content = [System.IO.File]::ReadAllText($file.FullName)
        $original = $content

        $oldImgPath = '/images/endpointpolicymanager/'
        $newImgPath = '/images/policypak/'

        $count = 0
        $idx = $content.IndexOf($oldImgPath)
        while ($idx -ge 0) {
            $count++
            $idx = $content.IndexOf($oldImgPath, $idx + 1)
        }

        if ($count -gt 0) {
            $content = $content.Replace($oldImgPath, $newImgPath)

            $fileCount++
            $changeCount += $count
            $relativePath = $file.FullName.Substring((Get-Location).Path.Length + 1)
            Write-Host "  Updated: $relativePath" -ForegroundColor White
            Write-Host "    Image paths: /images/endpointpolicymanager/ : $count replacements" -ForegroundColor DarkGray

            if (-not $DryRun) {
                [System.IO.File]::WriteAllText($file.FullName, $content)
            }
        }
    }
} else {
    Write-Host "  WARNING: Docs directory not found for image path updates: $docsDir" -ForegroundColor Red
}

# ============================================================
# Step 7: Add legacy redirect in docusaurus.config.js
# ============================================================
Write-Host "`n--- Step 7: Add Legacy Redirect in docusaurus.config.js ---" -ForegroundColor Green

$configFile = 'docusaurus.config.js'
if (Test-Path $configFile) {
    $content = [System.IO.File]::ReadAllText((Resolve-Path $configFile).Path)
    $original = $content

    # Check if the redirect already exists
    if ($content.Contains("from: '/docs/endpointpolicymanager'")) {
        Write-Host "  Legacy redirect already present (skipping)"
    } else {
        # Transform the redirects value from a bare .map() call to a spread array with the manual redirect.
        #
        # Before:
        #   redirects: PRODUCTS.filter(product => {
        #     ...
        #   }).map(product => {
        #     ...
        #   }),
        #
        # After:
        #   redirects: [
        #     ...PRODUCTS.filter(product => {
        #       ...
        #     }).map(product => {
        #       ...
        #     }),
        #     // Legacy redirect for renamed product directory
        #     { from: '/docs/endpointpolicymanager', to: '/docs/policypak' },
        #   ],

        $oldPattern = "redirects: PRODUCTS.filter(product => {"
        $newPattern = "redirects: [`n          ...PRODUCTS.filter(product => {"

        if ($content.Contains($oldPattern)) {
            $content = $content.Replace($oldPattern, $newPattern)

            # Now find the closing of the .map() and add the manual redirect + close the array
            # The .map() ends with:   }),
            # followed by the plugin config closing: },
            # We need to find the specific pattern after the .map() result
            #
            # Look for the pattern:  }), \n      },\n    ],
            # which is the end of: .map(...) closing }),  then plugin config },  then plugin array ],

            # The exact pattern at the end of the map:
            $mapEndOld = @"
        }),
      },
    ],
"@
            $mapEndNew = @"
        }),
          // Legacy redirect for renamed product directory
          { from: '/docs/endpointpolicymanager', to: '/docs/policypak' },
        ],
      },
    ],
"@

            if ($content.Contains($mapEndOld)) {
                $content = $content.Replace($mapEndOld, $mapEndNew)

                $fileCount++
                $changeCount += 2  # structural change + redirect entry
                Write-Host "  Added legacy redirect: /docs/endpointpolicymanager -> /docs/policypak"
                Write-Host "  Wrapped redirects in spread array" -ForegroundColor DarkGray

                if (-not $DryRun) {
                    [System.IO.File]::WriteAllText((Resolve-Path $configFile).Path, $content)
                }
            } else {
                Write-Host "  WARNING: Could not find .map() closing pattern in docusaurus.config.js" -ForegroundColor Red
                Write-Host "  The redirect must be added manually." -ForegroundColor Yellow
            }
        } else {
            Write-Host "  WARNING: Could not find redirects pattern in docusaurus.config.js" -ForegroundColor Red
            Write-Host "  The redirect must be added manually." -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "  WARNING: docusaurus.config.js not found!" -ForegroundColor Red
}

# ============================================================
# Summary
# ============================================================
Write-Host "`n=== Summary ===" -ForegroundColor Cyan
Write-Host "  Files modified: $fileCount"
Write-Host "  Total replacements: $changeCount"
Write-Host ""
Write-Host "  Operations performed:" -ForegroundColor White
Write-Host "    1. git mv docs/endpointpolicymanager -> docs/policypak"
Write-Host "    2. git mv static/images/endpointpolicymanager -> static/images/policypak"
Write-Host "    3. git mv sidebars/endpointpolicymanager.js -> sidebars/policypak.js"
Write-Host "    4. Updated sidebar ID in sidebars/policypak.js"
Write-Host "    5. Updated product config in src/config/products.js"
Write-Host "    6. Updated internal doc link paths in docs/policypak/**"
Write-Host "    7. Updated image paths in docs/policypak/**"
Write-Host "    8. Added legacy redirect in docusaurus.config.js"

if ($DryRun) {
    Write-Host "`n*** DRY RUN - No files were actually modified ***" -ForegroundColor Yellow
    Write-Host "  Run without -DryRun to apply changes" -ForegroundColor Yellow
} else {
    Write-Host "`n  Changes applied. Review with: git diff --stat" -ForegroundColor Green
    Write-Host "  To verify redirect: check docusaurus.config.js redirects array" -ForegroundColor Green
}
