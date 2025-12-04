---
description: >-
  After a Windows OS upgrade on an ADFS server, you may see "Failed to retrieve
  the state of windows feature. Reason: The given key was not present in the
  dictionary." This article explains how to diagnose the issue and restore the
  ServerComponentCache or Group Policy settings to resolve the error.
keywords:
  - ADFS
  - ServerComponentCache
  - Get-WindowsFeature
  - KeyNotFoundException
  - registry
  - Server Manager
  - Group Policy
  - ADFS Health Log
  - Windows feature
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Given Key Was Not Present in the Dictionary — ADFS
tags: []
title: "Given Key Was Not Present in the Dictionary — ADFS"
knowledge_article_id: kA04u00000110wMCAQ
---

# Given Key Was Not Present in the Dictionary — ADFS

## Symptom

The following error appears in your ADFS Health Log after upgrading the Windows OS on your ADFS server:

```
Failed to retrieve the state of windows feature.
Reason: The given key was not present in the dictionary.
```

## Diagnosing the issue

1. Run the following command in PowerShell on your Netwrix Auditor server to query a target ADFS server, replacing `%TARGET_NAME%` with the actual target server name:

```powershell
Get-WindowsFeature -ComputerName %TARGET_NAME%
```

2. The command returns the following error:

```
Get-WindowsFeature The given key was not present in the dictionary.
CategoryInfo: NotSpecified: (:) [Get-WindowsFeature], KeyNotFoundException
```

The error indicates a Windows-related issue.

## Causes

- The cache `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ServerManager\ServicingStorage\ServerComponentCache` registry key was corrupted.
- A faulty registry item is present in the XML file that is associated with the Group Policy registry settings.

## Solutions

- Recreate the `ServerComponentCache` registry key:

  1. Locate the `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ServerManager\ServicingStorage\ServerComponentCache` registry key in **Registry Editor** on your ADFS server.
  2. Right-click the key and rename it to `ServerComponentCache.old`.
  3. Run the PowerShell command from your Netwrix Auditor server again or refresh the view in **Server Manager**. This will recreate the key and rebuild the server feature information.

- Re-create the Group Policy and registry settings. Learn more in [Group Policy error: "The given Key was not present in the dictionary" ⸱ Microsoft 𓂸](https://learn.microsoft.com/en-us/troubleshoot/windows-server/group-policy/cannot-run-group-policy-modeling-wizard)."
