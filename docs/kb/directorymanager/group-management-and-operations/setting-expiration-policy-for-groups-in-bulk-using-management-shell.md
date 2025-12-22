---
description: >-
  Shows how to use the Netwrix Directory Manager Management Shell to set a group
  expiration policy in bulk by exporting groups to CSV and applying the policy
  with cmdlets.
keywords:
  - Netwrix Directory Manager
  - group expiration
  - bulk
  - Management Shell
  - PowerShell
  - Export-CSV
  - Set-Group
  - expiration policy
products:
  - directory-manager
sidebar_label: Setting Expiration Policy for Groups in Bulk Using
tags:
  - group-management-and-operations
title: "Setting Expiration Policy for Groups in Bulk Using Management Shell"
knowledge_article_id: kA0Qk0000002FkXKAU
---

# Setting Expiration Policy for Groups in Bulk Using Management Shell

## Applies To
Netwrix Directory Manager 11

## Overview
This article explains how to use the Netwrix Directory Manager Management Shell to set the expiration policy for groups in bulk. Follow the steps below to complete this task.

> **NOTE:** Before making any changes to your environment, create a backup or snapshot of the Netwrix Directory Manager server. Additionally, test the provided method on a small number of groups first. Once confirmed successful, apply it to the remaining groups in bulk.

## Instructions
1. Launch the **Netwrix Directory Manager Management Shell**.

2. Use the following cmdlet to export the Common Names of all groups for which you want to apply the bulk expiration policy into a CSV file:

```powershell
Get-group | Select CN | Export-csv "PATH TO EXPORT FILE" -NoTypeInformation
```

3. To limit the export to a specific organizational unit (OU), use the following cmdlet instead:

```powershell
Get-group -SearchContainer "DISTINGUISH_NAME OF THE OU" | Select CN | Export-CSV "PATH TO EXPORT FILE" -NoTypeInformation
```

4. Import the data from the exported CSV file and apply the expiration policy using the following cmdlet:

```powershell
$Data = Import-CSV "PATH OF THE EXPORTED FILE"
Foreach($d in $data) {Set-Group -Identity $d.Cn -ExpirationPolicy "120" -ExtendGroupLife}
```

The value `120` represents the number of days before expiration and can be adjusted as needed.

> **NOTE:** For additional assistance, contact Netwrix Technical Support.
