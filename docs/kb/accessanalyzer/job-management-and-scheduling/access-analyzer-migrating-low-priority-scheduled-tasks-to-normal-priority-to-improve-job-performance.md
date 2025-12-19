---
description: >-
  Use a PowerShell script to change Netwrix Access Analyzer scheduled task
  priorities from Below Normal (7) or undefined to Normal (5) so
  StealthAUDIT.exe I/O runs at normal priority and job performance improves.
keywords:
  - Netwrix Access Analyzer
  - scheduled tasks
  - priority
  - PowerShell
  - StealthAUDIT.exe
  - I/O priority
  - Set-ScheduledTask
  - 'C:\Windows\System32\Tasks'
products:
  - access-analyzer
sidebar_label: 'Access Analyzer: Migrating Low Priority Scheduled Tasks'
tags:
  - job-management-and-scheduling
title: "Access Analyzer: Migrating Low Priority Scheduled Tasks to Normal Priority to Improve Job Performance"
knowledge_article_id: kA04u0000000K1CCAU
---

# Netwrix Access Analyzer: Migrating Low Priority Scheduled Tasks to Normal Priority to Improve Job Performance

## Summary

In some cases, Scheduled Tasks in Netwrix Access Analyzer are created with priority 7 (Below Normal) instead of 5 (Normal), or with no priority set at all. This results in StealthAUDIT.exe I/O to/from Tier 2 databases being Low Priority which could lead to reduced performance. This article outlines how to migrate Scheduled Tasks to be Priority 5 rather than Priority 7 via PowerShell.

## Instructions

**Important:**

- **The credential in the script below is not for permission purposes. Rather, it is the Service Account that will be assigned to each modified Scheduled Task.**
- **This script should be run again any time a new Netwrix Access Analyzer Scheduled Task is created.**

1. Run the script below in an elevated PowerShell on the Netwrix Access Analyzer server (or download the script here: https://netwrix.com/download/products/KnowledgeBase/SA-ScheduledTaskPriority.ps1):

```powershell
param (

[Parameter(Mandatory=$true)][PSCredential]$TaskServiceAccount

)

$currentPrincipal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Error "Script must be Run As Admin. Exiting..."
    exit
}

$directories = @("C:\Windows\System32\Tasks", "C:\Windows\Tasks")

$directories | ForEach-Object {

    $list = Get-ChildItem $_ | `
        Where-Object { $_.name -like "SAJOB*" } | `
        Select-Object Name

    $list | ForEach-Object {

        $taskName = $_.Name
        $task = Get-ScheduledTask -TaskName $taskName
        $task.Settings.Priority = 5

        Set-ScheduledTask `
            -TaskName $taskName `
            -Action $task.Actions `
            -Settings $task.Settings `
            -User $TaskServiceAccount.Username `
            -Password $TaskServiceAccount.GetNetworkCredential().Password
    }
}
```

2. Confirm the script ran successfully by observing output. It should look similar to the example below:

```
TaskPath                                       TaskName                          State     
--------                                       --------                          -----     
\                                              SAJOB~.Active Directory Invent... Ready     
\                                              SAJOB~FSAA~{A5142820-4190-4244... Ready     
\                                              SAJOB~SEEK~{3ABDD931-37EB-4734... Ready
```

3. Observe XMLs for scheduled tasks in `C:\Windows\Tasks` or `C:\Windows\System32\Tasks` and confirm priority is now set to `5` (Normal).

After successfully running the script all Netwrix Access Analyzer Scheduled Tasks will now run with Normal I/O priority.
