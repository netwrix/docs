---
title: "Migrating Target Servers and Host Lists to Source Groups"
description: "How to inventory legacy Netwrix Access Analyzer host lists and recreate them as source groups and sources in Access Analyzer 26"
keywords:
  - host list migration
  - source group migration
  - migrate hosts to AA26
  - stealthaudit host list
  - access analyzer source groups
  - target server migration
products:
  - access-analyzer
sidebar_label: "Migrating Target Servers and Host Lists"
tags:
  - migration
  - source-groups
---

# Migrating Target Servers and Host Lists to Source Groups

## Overview

The legacy Netwrix Access Analyzer product organizes target systems as **Hosts** grouped into **Host Lists**. Access Analyzer 26 uses **Sources** organized into **Source Groups**. This article explains how to inventory your legacy host lists and recreate them as source groups and sources in AA26.

Before starting this procedure, complete [Migrating Connection Profiles to Service Accounts](./migrate-credentials.md). The source group creation wizard requires a service account, and the account must exist before you create the group.

---

## Key difference: host lists vs. source groups

In the legacy product, a single host list can contain any mix of target system types. A list named "East Coast Servers" might include file servers, Active Directory domain controllers, and SharePoint sites.

**AA26 source groups are single-type.** Each group is created for one connector type, and that type is permanent — it can't be changed after creation. You must split mixed-type host lists into separate source groups before you begin.

**Planning example:**

| Legacy Host List | Hosts | AA26 Source Groups |
| --- | --- | --- |
| East Coast Servers | 12 file servers, 2 AD domains | East Coast — File Servers (12 sources)<br/>East Coast — Active Directory (2 sources) |
| Cloud Resources | Entra ID tenant, SharePoint site | Cloud — Entra ID (1 source)<br/>Cloud — SharePoint Online (1 source) |

Plan your source group structure on paper before creating anything in AA26.

---

## Supported connector types

AA26 currently supports the following connector types. Only hosts of these types need to be migrated:

| Legacy Collector / Target Type | AA26 Connector |
| --- | --- |
| File System (FSAA) — Windows file servers | File Server |
| File System (FSAA) — NetApp ONTAP | File Server |
| File System (FSAA) — Isilon/PowerScale | File Server |
| File System (FSAA) — Dell VNX, Celerra, Unity | File Server |
| AD Inventory / ADActivity — Active Directory | Active Directory |
| Azure AD / Entra ID | Entra ID |
| SPAA — SharePoint Online | SharePoint Online |

Legacy jobs targeting SQL Server, Exchange, Unix, or other systems do not have corresponding connectors in AA26 at this time. Document those targets separately for future migration phases.

---

## Before you begin

- [ ] All service accounts have been created in AA26 ([Migrating Connection Profiles](./migrate-credentials.md)).
- [ ] Scanners have been deployed for Active Directory and File Server source groups. See the scanner deployment documentation in the Access Analyzer product docs.
- [ ] You have a written inventory of host lists and their members (see Step 1).
- [ ] You have planned which legacy host lists map to which AA26 source groups.

---

## Step 1 — Inventory legacy host lists

Export a complete inventory of your legacy host lists and hosts before making any changes.

### Option A — Export using PowerShell (recommended)

The following script queries the legacy NAA SQL Server database to export all host lists and their members. Run it on a machine with access to the legacy SQL Server.

```powershell
<#
.SYNOPSIS
    Exports all host lists and their member hosts from the legacy NAA SQL Server database.
    Use this output to plan source group creation in AA26.

.PARAMETER SqlServer
    Hostname or IP address of the legacy NAA SQL Server.

.PARAMETER Database
    Name of the legacy NAA database (default: StealthAUDIT).

.EXAMPLE
    .\Export-LegacyHostLists.ps1 -SqlServer "sql01.corp.local" -Database "StealthAUDIT"
#>

param(
    [Parameter(Mandatory)]
    [string]$SqlServer,

    [string]$Database = 'StealthAUDIT'
)

$ErrorActionPreference = 'Stop'

Write-Host "Connecting to $SqlServer\$Database ..." -ForegroundColor Cyan

try {
    $conn = New-Object System.Data.SqlClient.SqlConnection
    $conn.ConnectionString = "Server=$SqlServer;Database=$Database;Integrated Security=True;"
    $conn.Open()

    # CHECKPOINT: Verify host list table names before running.
    # Run this query first to confirm the table names in your environment:
    # SELECT name FROM sys.tables WHERE name LIKE '%Host%' ORDER BY name
    #
    # Common table names in NAA 11.6 and 12.0:
    #   SA_HostMaster      - all registered hosts (hostname, OS, IP, domain)
    #   SA_HostLists       - host list definitions (name, type, description)
    #   SA_HostListMembers - junction table linking hosts to host lists

    $query = @"
SELECT
    hl.HostListName,
    hl.HostListType,
    hl.Description        AS ListDescription,
    h.HostName,
    h.DNSName,
    h.IPAddress,
    h.OperatingSystem,
    h.Domain,
    h.OSType
FROM
    SA_HostLists       hl
    JOIN SA_HostListMembers hlm ON hl.HostListID = hlm.HostListID
    JOIN SA_HostMaster      h   ON hlm.HostID    = h.HostID
ORDER BY
    hl.HostListName,
    h.HostName
"@

    $cmd    = New-Object System.Data.SqlClient.SqlCommand($query, $conn)
    $reader = $cmd.ExecuteReader()

    $results = @()
    while ($reader.Read()) {
        $results += [PSCustomObject]@{
            HostListName  = $reader['HostListName']
            HostListType  = $reader['HostListType']
            ListDesc      = $reader['ListDescription']
            HostName      = $reader['HostName']
            DNSName       = $reader['DNSName']
            IPAddress     = $reader['IPAddress']
            OS            = $reader['OperatingSystem']
            Domain        = $reader['Domain']
            OSType        = $reader['OSType']
        }
    }
    $reader.Close()
    $conn.Close()

    Write-Host "Found $($results.Count) host-list entries across $((($results | Select-Object -ExpandProperty HostListName) | Sort-Object -Unique).Count) lists." -ForegroundColor Green
    $results | Format-Table -AutoSize

    $outputPath = ".\LegacyHostLists_$(Get-Date -Format 'yyyyMMdd_HHmmss').csv"
    $results | Export-Csv -Path $outputPath -NoTypeInformation
    Write-Host "`nExported to: $outputPath" -ForegroundColor Green

    Write-Host @"

NEXT STEPS:
  1. Open the exported CSV.
  2. For each host list, identify what connector type each host requires (File Server, Active Directory, Entra ID, SharePoint).
  3. Group hosts by connector type — this determines your AA26 source groups.
  4. Proceed to Step 2 to create source groups in AA26.
"@ -ForegroundColor Cyan
}
catch {
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host @"

If the query fails with 'Invalid object name', confirm your table names:
  Run: SELECT name FROM sys.tables WHERE name LIKE '%Host%' ORDER BY name
Then update the table names in this script accordingly.
"@ -ForegroundColor Yellow
}
```

### Option B — Export manually from the NAA console

1. Open the Netwrix Access Analyzer console.
2. Navigate to **Host Management** in the left panel.
3. For each host list, right-click and select **Export** to export the host list to CSV.
4. Record the host list name, the number of hosts, and the system types present.

---

## Step 2 — Create source groups in Access Analyzer

Navigate to **Configuration** > **Source Groups**.

![Source Groups list showing existing groups with source type, service account, scan type, and status columns](/images/accessanalyzer/2601/migration/source-groups-list.png)

Create one source group for each connector type across your legacy host lists. Click **Create Source Group** to open the wizard.

### Step 1 of 3 — Select the source type

The wizard first asks you to choose a connector type.

![Source group creation wizard step 1 showing four source type options: Active Directory, Entra ID, File Server, and SharePoint Online](/images/accessanalyzer/2601/migration/create-source-group-type-select.png)

Select the connector type that matches the hosts you are migrating. If you have hosts of multiple types from the same legacy host list, you'll repeat this process for each type.

### Step 2 of 3 — Configure the group

![Source group creation wizard step 2 showing name field, service account selection, and max concurrent scans setting for a File Server group](/images/accessanalyzer/2601/migration/create-source-group-file-server.png)

| Field | What to enter |
| --- | --- |
| **Name** | A descriptive name that identifies the source type and scope. Example: `File Servers — East Coast` |
| **Service Account** | Select the service account you created for this connector type. |
| **Max Concurrent Scans** | Leave at `1` for initial setup. Increase after validating the first scan. |
| **Scanner Labels** | For Active Directory and File Server groups, add labels matching your deployed scanners. |

Add sources to the group:
- For each host in the matching legacy host list, click **Add Source** and enter the hostname or IP address.
- Use the **Test Connection** button to verify connectivity for each source before saving.

### Step 3 of 3 — Configure scan parameters

![Source group creation wizard step 3 showing scan type selection and schedule configuration fields](/images/accessanalyzer/2601/migration/create-source-group-scan-config.png)

Select the scan types to enable. Configure the scan schedule using a cron expression. See [Migrating Job Schedules](./migrate-schedules.md) for guidance on translating legacy schedule triggers to cron expressions.

Click **Save** to create the source group.

---

## Step 3 — Import sources using PowerShell

If you have many hosts to add, the following script reads the CSV exported in Step 1 and creates sources in AA26 via the REST API. Run it source group by source group, after verifying the source group exists in AA26.

```powershell
<#
.SYNOPSIS
    Creates AA26 sources from a legacy host list export CSV for a specified source group.
    Run this script once per source group, after the group has been created in the AA26 UI.

.PARAMETER AA26BaseUrl
    Base URL of your AA26 instance. Example: https://aa26.corp.local

.PARAMETER AA26Email
    Email address of an AA26 administrator account.

.PARAMETER SourceGroupId
    The UUID of the target source group in AA26.
    Find this in the AA26 URL when viewing a source group, or via GET /api/v1/source-groups.

.PARAMETER CsvPath
    Path to the CSV file exported by Export-LegacyHostLists.ps1.

.PARAMETER HostListName
    Name of the legacy host list to import from the CSV (must match exactly).

.EXAMPLE
    .\Import-AA26Sources.ps1 `
        -AA26BaseUrl "https://aa26.corp.local" `
        -AA26Email "admin@corp.local" `
        -SourceGroupId "a1b2c3d4-e5f6-7890-abcd-ef1234567890" `
        -CsvPath ".\LegacyHostLists_20240414.csv" `
        -HostListName "East Coast File Servers"
#>

param(
    [Parameter(Mandatory)] [string]$AA26BaseUrl,
    [Parameter(Mandatory)] [string]$AA26Email,
    [Parameter(Mandatory)] [string]$SourceGroupId,
    [Parameter(Mandatory)] [string]$CsvPath,
    [Parameter(Mandatory)] [string]$HostListName
)

$ErrorActionPreference = 'Stop'

# ── AUTHENTICATE ──────────────────────────────────────────────────────────────
Write-Host "Authenticating to AA26 ..." -ForegroundColor Cyan
$AA26Password = Read-Host "Enter AA26 password for $AA26Email" -AsSecureString
$plainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($AA26Password)
)

# Submit login form and capture session cookie
$loginBody = "email=$([Uri]::EscapeDataString($AA26Email))&password=$([Uri]::EscapeDataString($plainPassword))"
$session   = New-Object Microsoft.PowerShell.Commands.WebRequestSession

try {
    $loginResponse = Invoke-WebRequest `
        -Uri            "$AA26BaseUrl/login" `
        -Method         POST `
        -Body           $loginBody `
        -ContentType    'application/x-www-form-urlencoded' `
        -WebSession     $session `
        -MaximumRedirection 5

    $plainPassword = $null  # Clear from memory

    if ($session.Cookies.Count -eq 0) {
        throw "Login may have failed — no session cookie received. Verify credentials and the login endpoint."
    }
    Write-Host "Authenticated successfully." -ForegroundColor Green
}
catch {
    Write-Host "Authentication failed: $_" -ForegroundColor Red
    Write-Host "Verify the AA26 base URL and credentials, then retry." -ForegroundColor Yellow
    exit 1
}

# ── LOAD HOST LIST FROM CSV ───────────────────────────────────────────────────
Write-Host "`nLoading host list '$HostListName' from $CsvPath ..." -ForegroundColor Cyan

$allHosts   = Import-Csv -Path $CsvPath
$targetList = $allHosts | Where-Object { $_.HostListName -eq $HostListName }

if ($targetList.Count -eq 0) {
    Write-Host "No hosts found for host list '$HostListName'. Check the HostListName value and retry." -ForegroundColor Red
    exit 1
}

Write-Host "Found $($targetList.Count) host(s) in list '$HostListName'." -ForegroundColor Green
$targetList | Select-Object HostName, DNSName, IPAddress, OS | Format-Table -AutoSize

# CHECKPOINT
Write-Host "`nReview the host list above." -ForegroundColor Yellow
$confirm = Read-Host "Proceed with adding these hosts to source group '$SourceGroupId'? (yes/no)"
if ($confirm -ne 'yes') { Write-Host "Aborted."; exit 0 }

# ── ADD SOURCES TO SOURCE GROUP ───────────────────────────────────────────────
$created = 0
$failed  = 0
$errors  = @()

foreach ($h in $targetList) {
    $hostName = if ($h.DNSName) { $h.DNSName } else { $h.HostName }

    $sourceBody = @{
        name                   = $h.HostName
        source_group_id        = $SourceGroupId
        connection_parameters  = @{
            host = $hostName
        }
    } | ConvertTo-Json -Depth 5

    try {
        $response = Invoke-RestMethod `
            -Uri         "$AA26BaseUrl/api/v1/sources" `
            -Method      POST `
            -Body        $sourceBody `
            -ContentType 'application/json' `
            -WebSession  $session

        Write-Host "  [OK] Added: $($h.HostName) ($hostName)" -ForegroundColor Green
        $created++
    }
    catch {
        Write-Host "  [FAIL] $($h.HostName): $_" -ForegroundColor Red
        $errors += [PSCustomObject]@{ HostName = $h.HostName; Error = $_.ToString() }
        $failed++
    }
}

# ── SUMMARY ───────────────────────────────────────────────────────────────────
Write-Host "`n── Import Summary ──────────────────────────────────────────────" -ForegroundColor Cyan
Write-Host "  Created : $created" -ForegroundColor Green
Write-Host "  Failed  : $failed"  -ForegroundColor $(if ($failed -gt 0) { 'Red' } else { 'Green' })

if ($errors.Count -gt 0) {
    $errorPath = ".\ImportErrors_$(Get-Date -Format 'yyyyMMdd_HHmmss').csv"
    $errors | Export-Csv -Path $errorPath -NoTypeInformation
    Write-Host "`nErrors exported to: $errorPath" -ForegroundColor Yellow
    Write-Host "Review and resolve errors, then re-run for failed hosts only." -ForegroundColor Yellow
}

Write-Host @"

NEXT STEPS:
  1. In AA26, open the source group and verify each source is listed.
  2. Click Test Connection on each source to validate connectivity.
  3. Proceed to configure scan schedules: Migrating Job Schedules.
"@ -ForegroundColor Cyan
```

:::note
The `connection_parameters` structure in the API call varies by connector type. The example above shows the minimal format for File Server sources. For Active Directory sources, the parameter is typically `domain` rather than `host`. Review the AA26 API documentation at `<your-aa26-url>/api-docs` for connector-specific parameter schemas.
:::

---

## Step 4 — Test connections

After adding sources, verify that AA26 can reach each target:

1. Navigate to **Configuration** > **Source Groups**.
2. Click the actions menu for your new source group and select **View Sources**.
3. For each source, click the actions menu and select **Test Connection**.
4. Confirm that all sources show a successful connection result before proceeding.

If a connection test fails, verify that:
- The service account has the required permissions on the target system.
- The scanner assigned to the source group can reach the target on the required ports.
- The hostname or IP address in the source matches what the scanner can resolve.

---

## Related links

- [Migrating Connection Profiles](./migrate-credentials.md)
- [Migrating Job Schedules](./migrate-schedules.md)
- [Migration Checklist](./migration-checklist.md)
