---
description: >-
  This article explains how to reapply SmartGroup LDAP queries in bulk, back up SmartGroup criteria, and identify groups with disabled users in large Active Directory environments.
keywords:
  - SmartGroup
  - LDAP
  - PowerShell
  - Active Directory
  - bulk update
sidebar_label: Reapply SmartGroup Queries
tags: []
title: "How to Reapply SmartGroup Queries and Identify Groups With Disabled Users in Bulk"
knowledge_article_id: kA0Qk0000002o7BKAQ
products:
  - directorymanager
---

# How to Reapply SmartGroup Queries and Identify Groups With Disabled Users in Bulk

## Related Queries

- "How to reapply SmartGroup queries in bulk"
- "How to back up and bulk update SmartGroup LDAP criteria"
- "Find all SmartGroups with disabled users in a specific OU"

## Overview

This article describes how to reapply SmartGroup LDAP queries in bulk, back up SmartGroup criteria, and identify groups with disabled users in large Active Directory environments. The steps include exporting SmartGroup criteria, filtering groups by organizational unit (OU), and safely reapplying LDAP filters using PowerShell. These procedures are intended for support and consulting teams performing SmartGroup maintenance or troubleshooting at scale.

## Instructions

1. Use PowerShell to reapply SmartGroup criteria to a single group:

   ```powershell
   Add-PSSnapin 'Imanami.Groups.Management.PowerShell.Admin10'
   . 'C:\Program Files\Imanami\GroupID 10.0\GroupID.ps1'

   # Get a specific SmartGroup
   $smartGroups = Get-SmartGroup -Identity "All-Marketing Team SR1"

   foreach ($sg in $smartGroups) {
       # Reapply the same Criteria using Set-SmartGroup
       Set-SmartGroup -Identity $sg.DistinguishedName -LdapFilter $sg.Criteria
       Write-Host "Reapplied LDAP filter for SmartGroup: $($sg.Name)"
   }
   ```

2. Back up all SmartGroup LDAP criteria:

   ```powershell
   Add-PSSnapin 'Imanami.Groups.Management.PowerShell.Admin10'
   . 'C:\Program Files\Imanami\GroupID 10.0\GroupID.ps1'

   # Get all SmartGroups
   $smartGroups = Get-SmartGroup

   # Export Name, CN, and Criteria to CSV
   $smartGroups | Select-Object Name, Cn, Criteria |
       Export-Csv -Path "C:\Temp\SmartGroup_LdapBackup.csv" -NoTypeInformation -Encoding UTF8

   Write-Host "`nSmartGroup LDAP criteria backup saved to C:\Temp\SmartGroup_LdapBackup.csv"
   ```

3. Identify groups with disabled users using Directory Manager PowerShell:

   ```powershell
   Add-PSSnapin 'Imanami.Groups.Management.PowerShell.Admin10' -ErrorAction SilentlyContinue
   . 'C:\Program Files\Imanami\GroupID 10.0\GroupID.ps1'

   $groupsWithDisabledUsers = @()
   $log = @()

   Write-Host "Fetching SmartGroups..."
   $smartGroups = Get-SmartGroup -AttributesToLoad "Name", "Member"
   $total = $smartGroups.Count
   $counter = 0

   foreach ($sg in $smartGroups) {
       $counter++
       $groupName = $sg.Name
       Write-Host "[$counter of $total] Processing group: $groupName" -ForegroundColor Cyan

       $startTime = Get-Date
       $disabledUsers = @()

       foreach ($memberName in $sg.Member) {
           $user = Get-ADUser -Filter { SamAccountName -eq $memberName } -Properties Enabled -ErrorAction SilentlyContinue
           if ($user -and !$user.Enabled) {
               $disabledUsers += $user
           }
       }

       if ($disabledUsers.Count -gt 0) {
           $groupsWithDisabledUsers += [PSCustomObject]@{
               GroupName     = $groupName
               DisabledUsers = $disabledUsers.SamAccountName -join ", "
           }
           $log += "Group '$groupName' has $($disabledUsers.Count) disabled user(s)."
       }

       $elapsed = (Get-Date) - $startTime
       $log += "Processed group '$groupName' in $([math]::Round($elapsed.TotalSeconds, 2)) seconds."
   }

   # Output results to table and log file
   if ($groupsWithDisabledUsers.Count -gt 0) {
       Write-Host "`nGroups with disabled users found:" -ForegroundColor Green
       $groupsWithDisabledUsers | Format-Table -AutoSize
   } else {
       Write-Host "No groups with disabled users found." -ForegroundColor Yellow
   }

   $logFile = "C:\Temp\GroupsWithDisabledUsers_Log.txt"
   $log | Out-File -FilePath $logFile -Encoding UTF8
   Write-Host "`nProcessing log saved to $logFile"
   ```

4. Identify groups with disabled users using AD PowerShell (faster for large environments):

   ```powershell
   # Get all disabled users from Active Directory
   $disabledUsers = Get-ADUser -Filter 'Enabled -eq $false' -Properties MemberOf

   if ($disabledUsers.Count -eq 0) {
       Write-Host "No disabled users found." -ForegroundColor Yellow
       return
   }

   Write-Host "Found $($disabledUsers.Count) disabled users. Gathering groups..."

   $uniqueGroupDNs = New-Object System.Collections.Generic.HashSet[string]

   foreach ($user in $disabledUsers) {
       if ($user.MemberOf) {
           foreach ($groupDN in $user.MemberOf) {
               $uniqueGroupDNs.Add($groupDN) | Out-Null
           }
       }
   }

   Write-Host "Found $($uniqueGroupDNs.Count) unique groups with disabled members."

   # Extract group CN from DN for readability
   $groupNames = $uniqueGroupDNs | ForEach-Object {
       if ($_ -match '^CN=([^,]+),') { $matches[1] } else { $_ }
   }

   # Filter group names to include only those with "GroupID"
   $filteredGroupNames = $groupNames | Where-Object { $_ -match 'GroupID' }

   if ($filteredGroupNames.Count -eq 0) {
       Write-Host "No groups with 'GroupID' found among disabled users' groups." -ForegroundColor Yellow
   } else {
       $filteredGroupNames = $filteredGroupNames | Sort-Object

       Write-Host "`nGroups with disabled members containing 'GroupID':"
       $filteredGroupNames | ForEach-Object { Write-Host $_ }

       $groupsOutputFile = "C:\Temp\GroupsWithDisabledMembers_Filtered.txt"
       $filteredGroupNames | Out-File -FilePath $groupsOutputFile -Encoding UTF8

       Write-Host "`nFiltered groups list saved to $groupsOutputFile"
   }
   ```

5. (Optional) Filter groups by OU:

   ```powershell
   $targetOU = "OU=GROUP-SYNC,OU=ai.com,DC=ai,DC=com".ToLower()
   $disabledUsers = Get-ADUser -Filter 'Enabled -eq $false' -Properties MemberOf

   $uniqueGroupDNs = New-Object System.Collections.Generic.HashSet[string]

   foreach ($user in $disabledUsers) {
       if ($user.MemberOf) {
           foreach ($groupDN in $user.MemberOf) {
               if ($groupDN.ToLower().EndsWith($targetOU)) {
                   $uniqueGroupDNs.Add($groupDN) | Out-Null
               }
           }
       }
   }

   $groupNames = $uniqueGroupDNs | ForEach-Object {
       if ($_ -match '^CN=([^,]+),') { $matches[1] } else { $_ }
   } | Sort-Object

   $outputFile = "C:\Temp\GroupsWithDisabledMembers_InTargetOU.txt"
   $groupNames | Out-File -FilePath $outputFile -Encoding UTF8

   Write-Host "`nGroups list saved to $outputFile"
   ```

6. Review and reapply LDAP criteria for filtered groups:

   ```powershell
   Add-PSSnapin 'Imanami.Groups.Management.PowerShell.Admin10'
   . 'C:\Program Files\Imanami\GroupID 10.0\GroupID.ps1'

   # Import CSV with column named "groupname"
   $groupEntries = Import-Csv -Path "C:\Temp\GroupsWithDisabledMembers_InTargetOU.txt"

   foreach ($entry in $groupEntries) {
       $groupName = $entry.groupname

       # Get the SmartGroup object by name
       $sg = Get-SmartGroup -Identity $groupName -ErrorAction SilentlyContinue

       if ($sg) {
           Write-Host "Group Name: $($sg.Name)"
           Write-Host "LDAP Criteria: $($sg.Criteria)"
           Write-Host "--------------------------------------"
       }
       else {
           Write-Host "SmartGroup not found: $groupName" -ForegroundColor Red
       }
   }
   ```

7. Bulk reapply LDAP criteria to filtered groups:

   ```powershell
   Add-PSSnapin 'Imanami.Groups.Management.PowerShell.Admin10'
   . 'C:\Program Files\Imanami\GroupID 10.0\GroupID.ps1'

   # Import CSV with column named "groupname"
   $groupEntries = Import-Csv -Path "C:\Temp\GroupsWithDisabledMembers_InTargetOU.txt"

   foreach ($entry in $groupEntries) {
       $groupName = $entry.groupname

       # Get the SmartGroup object by name
       $sg = Get-SmartGroup -Identity $groupName -ErrorAction SilentlyContinue

       if ($sg) {
           Set-SmartGroup -Identity $groupName -LdapFilter $sg.Criteria | Out-Null
           Write-Host "Reapplied LDAP filter for SmartGroup: $groupName"
       }
       else {
           Write-Host "SmartGroup not found: $groupName" -ForegroundColor Red
       }
   }
   ```

> **IMPORTANT:** Always back up SmartGroup criteria before performing bulk updates. Test scripts on a small set of groups before running them in production.

## Additional Information

- For large environments, use native AD PowerShell for initial filtering, then use Directory Manager PowerShell for SmartGroup-specific actions.
- Review and edit exported files before committing changes.
- Scripts can be adapted for other filtering criteria as needed.

## Related Articles

- [Get-ADUser ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-aduser)