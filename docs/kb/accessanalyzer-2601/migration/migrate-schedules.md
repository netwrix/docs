---
title: "Migrating Job Schedules to Scan Schedules"
description: "How to translate legacy Netwrix Access Analyzer job schedules to cron expressions and configure scan schedules in Access Analyzer 26"
keywords:
  - schedule migration
  - job schedule migration
  - cron expression
  - windows task scheduler migration
  - scan schedule AA26
  - stealthaudit schedule
products:
  - access-analyzer
sidebar_label: "Migrating Job Schedules"
tags:
  - migration
  - schedules
---

# Migrating Job Schedules to Scan Schedules

## Overview

The legacy Netwrix Access Analyzer product schedules data collection jobs using **Windows Task Scheduler** triggers. Each job or job group can have one or more triggers that define when and how often the job runs.

Access Analyzer 26 schedules scans using **cron expressions** — a standard five-field format used in Unix-based scheduling. This article explains how to inventory legacy job schedules, translate them to cron expressions, and configure scan schedules on your AA26 source groups.

---

## Concept comparison

| Legacy Concept | AA26 Equivalent |
| --- | --- |
| Schedule / Trigger on a job or job group | Cron expression on a scan configuration |
| Schedule Service Account (Windows Task Scheduler) | Scanner service account (runs the scan) |
| Multiple jobs with individual schedules | One scan schedule per source group (shared across all sources in the group) |
| Daily / Weekly / Monthly trigger | Equivalent cron expression |
| Run As — specific domain account | Service account assigned to the source group |

In AA26, the scan schedule is set at the source group level and applies to all sources in the group. If you need different schedules for individual sources, override the schedule at the source level after creating the group.

---

## Cron expression reference

AA26 uses standard five-field cron expressions in UTC by default. Each field controls a time component:

```
┌───────── minute (0–59)
│ ┌─────── hour (0–23, UTC)
│ │ ┌───── day of month (1–31)
│ │ │ ┌─── month (1–12)
│ │ │ │ ┌─ day of week (0=Sunday, 6=Saturday)
│ │ │ │ │
* * * * *
```

### Common schedule translations

| Legacy Trigger | Cron Expression | Description |
| --- | --- | --- |
| Daily at 11:00 PM (local) | `0 23 * * *` | Runs at 23:00 UTC daily. Adjust hour for your timezone. |
| Daily at 2:00 AM | `0 2 * * *` | Runs at 02:00 UTC daily. |
| Daily at 6:00 AM | `0 6 * * *` | Runs at 06:00 UTC daily. |
| Weekly — Sunday at midnight | `0 0 * * 0` | Runs at 00:00 UTC every Sunday. |
| Weekly — Monday at 6:00 AM | `0 6 * * 1` | Runs at 06:00 UTC every Monday. |
| Weekly — Saturday at 11:00 PM | `0 23 * * 6` | Runs at 23:00 UTC every Saturday. |
| Monthly — 1st of month at midnight | `0 0 1 * *` | Runs at 00:00 UTC on the 1st. |
| Monthly — 15th of month at 3:00 AM | `0 3 15 * *` | Runs at 03:00 UTC on the 15th. |
| Every 6 hours | `0 */6 * * *` | Runs at 00:00, 06:00, 12:00, 18:00 UTC. |
| Every 12 hours | `0 */12 * * *` | Runs at 00:00 and 12:00 UTC daily. |

:::note
AA26 stores cron schedules in UTC. If your legacy jobs used local time triggers, convert them to UTC when creating the cron expression. Set the **Time Zone** field on the scan configuration if you want to define the schedule in local time.
:::

---

## Before you begin

- [ ] Source groups and sources have been created in AA26 ([Migrating Target Servers and Host Lists](./migrate-target-servers.md)).
- [ ] You have a documented list of legacy job schedules (from Step 1 below).
- [ ] You have determined which cron expressions to use for each source group.

---

## Step 1 — Inventory legacy job schedules

### Option A — Export using PowerShell

The following script reads scheduled tasks from the Windows Task Scheduler on the legacy NAA console server. Run it on the NAA console server itself or a machine with remote Task Scheduler access.

```powershell
<#
.SYNOPSIS
    Exports all scheduled tasks associated with Netwrix Access Analyzer jobs.
    Run this on the NAA console server.

.PARAMETER ComputerName
    Name of the NAA console server. Leave blank to run locally.

.EXAMPLE
    .\Export-LegacySchedules.ps1
    .\Export-LegacySchedules.ps1 -ComputerName "naa-console01.corp.local"
#>

param(
    [string]$ComputerName = $env:COMPUTERNAME
)

$ErrorActionPreference = 'Stop'

Write-Host "Reading scheduled tasks from: $ComputerName" -ForegroundColor Cyan

try {
    # Get all tasks — filter to ones that look like NAA job schedules.
    # NAA typically creates tasks under a specific folder path; adjust the filter
    # below if your installation uses a custom task folder.
    $tasks = Get-ScheduledTask -CimSession $ComputerName -ErrorAction Stop |
             Where-Object { $_.TaskPath -like '\*StealthAUDIT*' -or
                            $_.TaskPath -like '\*AccessAnalyzer*' -or
                            $_.TaskPath -like '\*Netwrix*' }

    if ($tasks.Count -eq 0) {
        Write-Host "No NAA-related tasks found under standard paths." -ForegroundColor Yellow
        Write-Host "Listing ALL scheduled tasks so you can identify relevant ones:" -ForegroundColor Yellow
        $tasks = Get-ScheduledTask -CimSession $ComputerName
    }

    $scheduleData = foreach ($task in $tasks) {
        $taskInfo = Get-ScheduledTaskInfo -CimSession $ComputerName -TaskPath $task.TaskPath -TaskName $task.TaskName -ErrorAction SilentlyContinue

        foreach ($trigger in $task.Triggers) {
            [PSCustomObject]@{
                TaskPath        = $task.TaskPath
                TaskName        = $task.TaskName
                State           = $task.State
                TriggerType     = $trigger.CimClass.CimClassName
                StartBoundary   = $trigger.StartBoundary
                RepetitionInterval = $trigger.Repetition.Interval
                DaysOfWeek      = $trigger.DaysOfWeek
                DaysInterval    = $trigger.DaysInterval
                WeeksInterval   = $trigger.WeeksInterval
                LastRunTime     = $taskInfo.LastRunTime
                NextRunTime     = $taskInfo.NextRunTime
                LastResult      = $taskInfo.LastTaskResult
            }
        }
    }

    Write-Host "Found $($scheduleData.Count) trigger(s) across $($tasks.Count) task(s)." -ForegroundColor Green
    $scheduleData | Format-Table TaskName, TriggerType, StartBoundary, RepetitionInterval -AutoSize

    $outputPath = ".\LegacySchedules_$(Get-Date -Format 'yyyyMMdd_HHmmss').csv"
    $scheduleData | Export-Csv -Path $outputPath -NoTypeInformation
    Write-Host "`nExported to: $outputPath" -ForegroundColor Green

    Write-Host @"

NEXT STEPS:
  1. Open the exported CSV and review trigger types and frequencies.
  2. Use the cron expression reference table in this article to translate each trigger.
  3. Note the cron expression for each source group.
  4. Proceed to Step 2 to configure schedules in AA26.
"@ -ForegroundColor Cyan
}
catch {
    Write-Host "Error reading scheduled tasks: $_" -ForegroundColor Red
    Write-Host "Ensure you have administrator rights on the target computer." -ForegroundColor Yellow
}
```

### Option B — Review manually from the NAA console

1. In the NAA console, navigate to the **Schedule** node in the left panel.
2. Review each scheduled task listed. For each task, record:
   - The job or job group it runs.
   - The trigger type (daily, weekly, monthly).
   - The start time and recurrence settings.
3. Use the cron expression table above to determine the equivalent for each.

---

## Step 2 — Configure scan schedules in Access Analyzer

Scan schedules are configured on source groups. Navigate to **Configuration** > **Source Groups**, then edit the group or configure schedules during source group creation.

![Source group creation wizard step 3 showing scan type selection and cron schedule configuration fields](/images/accessanalyzer/2601/migration/create-source-group-scan-config.png)

For each source group:

1. In the source groups list, click the actions menu for the group and select **Edit**.
2. Navigate to the **Scan Configuration** section.
3. Enter the cron expression for the schedule you determined in Step 1.
4. Set the **Time Zone** if you want to express the schedule in local time rather than UTC.
5. Enable the schedule by setting **Schedule Enabled** to active.
6. Click **Save**.

:::note
If different legacy jobs targeting the same set of hosts had different schedules, you might need to split those hosts across separate source groups in AA26 so each group can have its own schedule.
:::

---

## Step 3 — Apply schedules using PowerShell

The following script reads a prepared schedule mapping file and applies cron expressions to existing source groups via the AA26 API.

```powershell
<#
.SYNOPSIS
    Applies cron schedules to AA26 source group scan configurations.
    Before running, prepare a CSV file (ScheduleMapping.csv) with columns:
      SourceGroupId, ScanType, CronExpression, TimeZone

    Example CSV row:
      a1b2c3d4-...,access_scan,"0 2 * * *",America/New_York

.PARAMETER AA26BaseUrl
    Base URL of your AA26 instance.

.PARAMETER AA26Email
    Email address of an AA26 administrator account.

.PARAMETER MappingCsvPath
    Path to the schedule mapping CSV file.

.EXAMPLE
    .\Set-AA26ScanSchedules.ps1 `
        -AA26BaseUrl "https://aa26.corp.local" `
        -AA26Email "admin@corp.local" `
        -MappingCsvPath ".\ScheduleMapping.csv"
#>

param(
    [Parameter(Mandatory)] [string]$AA26BaseUrl,
    [Parameter(Mandatory)] [string]$AA26Email,
    [Parameter(Mandatory)] [string]$MappingCsvPath
)

$ErrorActionPreference = 'Stop'

# ── AUTHENTICATE ──────────────────────────────────────────────────────────────
Write-Host "Authenticating to AA26 ..." -ForegroundColor Cyan
$AA26Password = Read-Host "Enter AA26 password for $AA26Email" -AsSecureString
$plainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($AA26Password)
)

$loginBody = "email=$([Uri]::EscapeDataString($AA26Email))&password=$([Uri]::EscapeDataString($plainPassword))"
$session   = New-Object Microsoft.PowerShell.Commands.WebRequestSession

try {
    Invoke-WebRequest -Uri "$AA26BaseUrl/login" -Method POST -Body $loginBody `
        -ContentType 'application/x-www-form-urlencoded' -WebSession $session `
        -MaximumRedirection 5 | Out-Null
    $plainPassword = $null
    Write-Host "Authenticated." -ForegroundColor Green
}
catch {
    Write-Host "Authentication failed: $_" -ForegroundColor Red; exit 1
}

# ── LOAD SCHEDULE MAPPING ─────────────────────────────────────────────────────
$mappings = Import-Csv -Path $MappingCsvPath
Write-Host "`nLoaded $($mappings.Count) schedule mapping(s) from $MappingCsvPath" -ForegroundColor Cyan
$mappings | Format-Table -AutoSize

$confirm = Read-Host "`nApply these schedules? (yes/no)"
if ($confirm -ne 'yes') { Write-Host "Aborted."; exit 0 }

# ── GET EXISTING SCAN CONFIGS ─────────────────────────────────────────────────
Write-Host "`nFetching existing source groups ..." -ForegroundColor Cyan
$sourceGroups = Invoke-RestMethod -Uri "$AA26BaseUrl/api/v1/source-groups" -Method GET -WebSession $session

$updated = 0
$failed  = 0
$errors  = @()

foreach ($mapping in $mappings) {
    $groupId  = $mapping.SourceGroupId
    $scanType = $mapping.ScanType
    $cron     = $mapping.CronExpression
    $tz       = $mapping.TimeZone

    Write-Host "`nProcessing group $groupId ($scanType) → cron: '$cron' tz: '$tz'" -ForegroundColor Cyan

    try {
        # Get scan configs for this group
        $scanConfigs = Invoke-RestMethod `
            -Uri        "$AA26BaseUrl/api/v1/source-groups/$groupId/scan-configs" `
            -Method     GET `
            -WebSession $session

        $existing = $scanConfigs | Where-Object { $_.scanType -eq $scanType }

        $scheduleBody = @{
            cron_expression = $cron
            cron_enabled    = $true
            cron_time_zone  = if ($tz) { $tz } else { 'UTC' }
        } | ConvertTo-Json

        if ($existing) {
            # Update existing scan config
            Invoke-RestMethod -Uri "$AA26BaseUrl/api/v1/source-groups/$groupId/scan-configs/$($existing.id)" `
                -Method PATCH -Body $scheduleBody -ContentType 'application/json' -WebSession $session | Out-Null
            Write-Host "  [OK] Updated schedule on existing config." -ForegroundColor Green
        } else {
            # Create new scan config
            $newConfig = @{
                scan_type       = $scanType
                cron_expression = $cron
                cron_enabled    = $true
                cron_time_zone  = if ($tz) { $tz } else { 'UTC' }
            } | ConvertTo-Json

            Invoke-RestMethod -Uri "$AA26BaseUrl/api/v1/source-groups/$groupId/scan-configs" `
                -Method POST -Body $newConfig -ContentType 'application/json' -WebSession $session | Out-Null
            Write-Host "  [OK] Created new scan config." -ForegroundColor Green
        }
        $updated++
    }
    catch {
        Write-Host "  [FAIL] $_" -ForegroundColor Red
        $errors += [PSCustomObject]@{ GroupId = $groupId; ScanType = $scanType; Error = $_.ToString() }
        $failed++
    }
}

Write-Host "`n── Schedule Update Summary ─────────────────────────────────────" -ForegroundColor Cyan
Write-Host "  Updated : $updated" -ForegroundColor Green
Write-Host "  Failed  : $failed"  -ForegroundColor $(if ($failed -gt 0) { 'Red' } else { 'Green' })

if ($errors.Count -gt 0) {
    $errPath = ".\ScheduleErrors_$(Get-Date -Format 'yyyyMMdd_HHmmss').csv"
    $errors | Export-Csv -Path $errPath -NoTypeInformation
    Write-Host "Errors exported to: $errPath" -ForegroundColor Yellow
}
```

---

## Related links

- [Migrating Target Servers and Host Lists](./migrate-target-servers.md)
- [Migration Checklist](./migration-checklist.md)
