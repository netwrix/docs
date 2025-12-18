---
description: >-
  This article explains how to bulk create groups in Netwrix Directory Manager using a CSV file and assign multiple additional owners to each group.
keywords:
  - bulk create groups
  - additional owners
  - CSV file
products:
  - directorymanager
sidebar_label: Bulk Create Groups
tags: []
title: "Bulk Create Groups With Multiple Additional Owners From a CSV File"
knowledge_article_id: kA0Qk0000002mbdKAA
---

# Bulk Create Groups With Multiple Additional Owners From a CSV File

## Related Queries

- "bulk create groups with additional owners"

## Overview

This article explains how to use the Netwrix Directory Manager (formerly GroupID) shell and a properly formatted CSV file to bulk create groups in Directory Manager and assign multiple additional owners to each group. It also covers common pitfalls with CSV formatting and provides a sample script for automation.

> **IMPORTANT:** Before running the script in production, test with a small sample CSV to confirm that groups and all additional owners are created as expected. Always verify your CSV formatting in a plain text editor (such as Notepad++) to ensure additional owners are properly quoted and separated. Incorrect formatting may result in only the first owner being added.

## Instructions

1. Ensure your CSV file includes columns for the group name, primary owner (`managedby`), and a column for additional owners.
2. If you have multiple additional owners, enclose the list in double quotes and separate each owner with a comma.  
   Example CSV:
   ```plaintext
   name,managedby,addowner
   Group1,Primaryowner1,"AdditionalOwner1,AdditionalOwner2"
   Group2,PrimaryOwner2,"AdditionalOwner1,AdditionalOwner3,AdditionalOwner4"
   ```
   > **NOTE:** Enclosing the additional owners in double quotes is required if there are multiple owners, so the CSV parser treats them as a single field.

3. Import the CSV and create groups with owners using the commands below:
   ```powershell
   $groups = Import-csv "C:\Temp\Groups.csv"
   # Create the group with primary owner and mail-enabled
   $groups | ForEach-Object {New-Group -OrganizationalUnit "OU=abc,DC=xyz,DC=site" -Name $_.Name -SamAccountName $_.Name -GroupScope "Universal Group" -Type "Security" -SecurityType "Semi_Private" -Managedby $_.Managedby}
   # Add additional owners
   $groups | ForEach-Object {@{e=foreach($s in $_.AddOwner -split ","){ Set-Group -Identity $_.Name -AdditionalOwners $s}}}
   ```

   > **NOTE:** Run the two commands for group creation and addition one after the other—first to create groups with primary owners, then to add additional owners. Replace `OU=abc,DC=xyz,DC=site` with your actual organizational unit and domain details, and ensure the column names in your CSV match the property names in the script (`name`, `managedby`, `addowner`).