---
description: >-
  This article provides a step-by-step guide on how to collect and compress logs from Netwrix Directory Manager, including relevant service logs and Elasticsearch logs.
keywords:
  - Netwrix Directory Manager
  - log collection
  - PowerShell script
sidebar_label: Collect and Compress Logs
tags:
  - system-administration-and-maintenance
title: "How to Collect and Compress Logs in V11"
knowledge_article_id: kA0Qk0000002o5ZKAQ
products:
  - directory-manager
---

# How to Collect and Compress Logs in V11

## Overview

To help troubleshoot issues, follow this procedure to collect all relevant **Netwrix Directory Manager** (formerly **GroupID**) logs from your machine, including:

- Non-portal service logs (**AdminCenter**, **EmailService**, **DataService**, **Scheduler**, **Security**, **Replication**).
- All **Directory Manager Portal** logs (auto-discovered).
- Complete **Elasticsearch** logs folders under `...\elasticsearch\*` (version-agnostic; copies all file types: .log, .json, .zip, .gz, .tar, etc.).
- Additional **ProgramData** folders you specify.

> **NOTE:** Netwrix Directory Manager is used as the product name in this article. The product is historically known as **GroupID**; the folder and log names in the script retain the original "GroupID" names to preserve accuracy for file paths and registry keys."

The script preserves the folder structure and compresses all files into a single, timestamped ZIP file named with the machine’s hostname to streamline handoff in support cases.

## Instructions

### Variables to Prepare

- **$extraDataFolders** — Additional **ProgramData** folders to include, should be left to default unless changed manually:

```powershell
@(
  "C:\ProgramData\Imanami\GroupID 11.0\Configuration Tool",
  "C:\ProgramData\Imanami\GroupID 11.0\Upgrade Tool"
)
```

- **$tempLogDir** — Staging directory for collected logs (e.g., `C:\Temp\GroupID_Collected_Logs`).

The script automatically discovers any logs directory under `...\elasticsearch\*` beneath **$rootPath**, e.g. `C:\Program Files\Imanami\GroupID 11.0\elasticsearch\elasticsearch-8.0.0\logs`.

### PowerShell Script

```powershell
# --- Discover GroupID install path from Registry (Version 11.0) ---
function Get-GroupIDRootPath {
    $subkey = "SOFTWARE\Imanami\GroupID\Version 11.0"
    $views  = @(
        [Microsoft.Win32.RegistryView]::Registry64,
        [Microsoft.Win32.RegistryView]::Registry32
    )

    foreach ($view in $views) {
        try {
            $base = [Microsoft.Win32.RegistryKey]::OpenBaseKey([Microsoft.Win32.RegistryHive]::LocalMachine, $view)
            $key  = $base.OpenSubKey($subkey)
            if ($key) {
                $val = $key.GetValue("Path", $null)
                if ($val) {
                    # Normalize: remove trailing backslash
                    return ($val.TrimEnd('\'))
                }
            }
        } catch { }
    }
    return $null
}

$rootPath = Get-GroupIDRootPath
if (-not $rootPath) {
    Write-Warning "GroupID install path not found in registry. Falling back to default."
    $rootPath = "C:\Program Files\Imanami\GroupID 11.0"
}

# --- Settings you may customize ---
$extraDataFolders = @(
   "C:\ProgramData\Imanami\GroupID 11.0\Configuration Tool",
   "C:\ProgramData\Imanami\GroupID 11.0\Upgrade Tool"
)
$tempLogDir = "C:\Temp\GroupID_Collected_Logs"

# Fresh staging directory
if (Test-Path $tempLogDir) { Remove-Item -Path $tempLogDir -Recurse -Force }
New-Item -Path $tempLogDir -ItemType Directory | Out-Null

# Non-Portal log subdirectories (relative to $rootPath)
$nonPortalLogFolders = @(
  "AdminCenter\Inetpub\AdminCenter\Web\Logs",
  "EmailService\Inetpub\GroupIDEmailService\Web\Logs",
  "GroupIDDataService\Inetpub\GroupIDDataService\Web\Logs",
  "GroupIDSchedulerService\Inetpub\GroupIDSchedulerService\Web\Logs",
  "GroupIDSecurityService\Inetpub\GroupIDSecurityService\Web\Logs",
  "ReplicationService\Inetpub\GroupIDReplicationService\Web\Logs"
)

# Copy *.log from non-portal folders
foreach ($subfolder in $nonPortalLogFolders) {
    $sourceFolder = Join-Path $rootPath $subfolder
    if (Test-Path $sourceFolder) {
        $folderName = Split-Path $subfolder -Leaf
        $destFolder = Join-Path $tempLogDir $folderName
        New-Item -Path $destFolder -ItemType Directory -Force | Out-Null
        Get-ChildItem -Path $sourceFolder -Filter *.log -File -ErrorAction SilentlyContinue | ForEach-Object {
            Copy-Item -Path $_.FullName -Destination $destFolder -Force -ErrorAction SilentlyContinue
        }
    }
}

# Portal logs: auto-discover portals under GroupIDPortal\Inetpub
$portalRoot = Join-Path $rootPath "GroupIDPortal\Inetpub"
if (Test-Path $portalRoot) {
    Get-ChildItem -Path $portalRoot -Directory -ErrorAction SilentlyContinue | ForEach-Object {
        $portalName = $_.Name
        $logsFolder = Join-Path $_.FullName "Web\Logs"
        if (Test-Path $logsFolder) {
            $destFolder = Join-Path $tempLogDir ("Portal_" + $portalName)
            New-Item -Path $destFolder -ItemType Directory -Force | Out-Null
            Get-ChildItem -Path $logsFolder -Filter *.log -File -ErrorAction SilentlyContinue | ForEach-Object {
                Copy-Item -Path $_.FullName -Destination $destFolder -Force -ErrorAction SilentlyContinue
            }
        }
    }
}

# Copy Additional ProgramData Folders (all contents)
foreach ($extraFolder in $extraDataFolders) {
    if (Test-Path $extraFolder) {
        $folderName = Split-Path $extraFolder -Leaf
        $destFolder = Join-Path $tempLogDir $folderName
        Copy-Item -Path $extraFolder -Destination $destFolder -Recurse -Force -ErrorAction SilentlyContinue
    }
}

# Collect Elasticsearch logs (entire folders; any file type)
$esDumpRoot = Join-Path $tempLogDir "ElasticsearchLogs"
New-Item -Path $esDumpRoot -ItemType Directory -Force | Out-Null

try {
    if (Test-Path $rootPath) {
        $esRoots = Get-ChildItem -Path $rootPath -Directory -Recurse -ErrorAction SilentlyContinue |
                   Where-Object { $_.Name -like 'elasticsearch*' }

        foreach ($esRoot in $esRoots) {
            $logsDirs = Get-ChildItem -Path $esRoot.FullName -Directory -Recurse -ErrorAction SilentlyContinue |
                        Where-Object { $_.Name -eq 'logs' }

            foreach ($ld in $logsDirs) {
                $instanceName = Split-Path $ld.Parent.FullName -Leaf
                if ([string]::IsNullOrWhiteSpace($instanceName)) { $instanceName = "elasticsearch_logs" }

                $destInstanceRoot = Join-Path $esDumpRoot $instanceName
                New-Item -Path $destInstanceRoot -ItemType Directory -Force | Out-Null

                # Preserve entire logs directory (includes .log, .json, .zip, .gz, .tar, etc.)
                Copy-Item -Path $ld.FullName -Destination $destInstanceRoot -Recurse -Force -ErrorAction SilentlyContinue
            }
        }
    }
}
catch {
    Write-Warning "Failed to collect Elasticsearch logs: $($_.Exception.Message)"
}

# Create timestamped ZIP with hostname
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$hostname  = $env:COMPUTERNAME
$zipPath   = "C:\Temp\GroupID_Logs_${hostname}_$timestamp.zip"
Compress-Archive -Path "$tempLogDir\*" -DestinationPath $zipPath -Force

Write-Output "Logs compressed to $zipPath"
```

### Result

- Non-portal logs: All *.log files under standard **GroupID** service log paths are copied into corresponding subfolders in **$tempLogDir** (e.g., **AdminCenter**, **GroupIDDataService**, etc.).
- Portal logs: Each portal instance under `GroupIDPortal\Inetpub` becomes a folder like `Portal_<PortalName>` containing its *.log files.
- Elasticsearch logs: A top-level folder `ElasticsearchLogs\<instance>\logs\...` is created under **$tempLogDir** for each discovered instance. The entire logs directory is copied, preserving structure and including all file types (.log, .json, .zip, .gz, .tar, etc.).
- Extra data folders: Every path in **$extraDataFolders** is copied recursively with structure preserved.
- ZIP output: A single archive is created at `C:\Temp\GroupID_Logs_<hostname>_<timestamp>.zip` and the script prints the full path.

### Additional Information

- Uses `-Force` to overwrite existing files when staging and compressing.
- Preserves structure for Elasticsearch and extra data folders to retain context for troubleshooting.
- Hostname and timestamp in the ZIP name prevent collisions and identify the source system.
- `-ErrorAction SilentlyContinue` avoids noisy output in restricted environments while still completing the collection.

### Uploading Logs

1. Log in to [Netwrix Support Portal](https://www.netwrix.com/support?utm_source=chatgpt.com).
2. Navigate to **My Tickets** and locate your ticket number.
3. Click **Add Attachments** and upload the ZIP file that was created at `C:\Temp\GroupID_Logs_<hostname>_<timestamp>.zip`.

For additional resources or information, visit the [Technical Support Resource Hub](https://www.netwrix.com/support?utm_source=chatgpt.com).

### Troubleshooting Tips

- **Access denied:** Run PowerShell as Administrator to ensure access to **Program Files** and **ProgramData** paths.
- **Long paths / locked files:** If compression fails, re-run after services are stopped or consider excluding very large archives temporarily.
- **Different install root:** If **GroupID** is installed elsewhere, update **$rootPath** accordingly—the Elasticsearch discovery remains version-agnostic.

### Security & Privacy of Customer Data

Customer data provided to **Netwrix** through the customer support portal is **encrypted in transit and at rest**.

**Netwrix** follows a security framework such as **NIST-800-53** and requires all devices that handle confidential information be encrypted and maintain up-to-date security solutions per the Information Security policies.

Customer-provided data is retained no longer than **30 days post ticket closure**.