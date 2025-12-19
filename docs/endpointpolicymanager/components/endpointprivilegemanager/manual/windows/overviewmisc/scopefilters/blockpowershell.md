---
title: "Scenario 2B: Block Powershell.exe Completely, but Allow Local System to Run a Specific .PS1 Script"
description: "Scenario 2B: Block Powershell.exe Completely, but Allow Local System to Run a Specific .PS1 Script"
sidebar_position: 30
---

# Scenario 2B: Block Powershell.exe Completely, but Allow Local System to Run a Specific .PS1 Script

In the previous example, we blocked PowerShell (or PSEXEC, etc.) from all user and system processes.

However, you might need to run some PowerShell scripts as SYSTEM to perform some maintenance tasks. 
Since PowerShell is now being blocked for all Computer side processes, you cannot run a specific
script with PowerShel.

![A screen shot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/scopefilters/scenario_2b_block_powershell.webp)

To enable this, simply add another rule to ALLOW AND LOG, for example, C:\SCRIPTS\ITSCRIPT1.ps1, and
set the scope to User and System processes, but use the scope Filter to SYSTEM.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/scopefilters/scenario_2b_block_powershell_1.webp)

Result:

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/scopefilters/scenario_2b_block_powershell_2.webp)



