---
description: >-
  You see an "Unable to write to the specified folder" error when installing or
  uninstalling the FSAA Proxy Scanner or the Sensitive Data Discovery Add-on in
  Netwrix Access Analyzer. This article explains the cause and shows how to
  resolve the issue by verifying write permissions and disk space.
keywords:
  - FSAA
  - Unable to write to the specified folder
  - write permissions
  - '%SAINSTALLDIR%/FSAA'
  - Sensitive Data Discovery
  - FSAA Proxy Scanner
  - install error
  - disk space
products:
  - access-analyzer
sidebar_label: Unable to Write to Specified Folder Error
tags:
  - troubleshooting-and-errors
title: "Unable to Write to Specified Folder Error"
knowledge_article_id: kA04u0000000I9OCAU
---

# Unable to Write to Specified Folder Error

## Symptom

You see the following error when you install or uninstall the FSAA Proxy Scanner or the Sensitive Data Discovery Add-on in Netwrix Access Analyzer:

```text
Unable to write to the specified folder: %Folder_path%
```

## Cause

The FSAA permissions module must have write permissions for its installation folder. The write permissions are required to update the Tier 2 data after it is received from the target file server. Once updated, the Tier 2 data is transferred to the SQL backend for reporting.

## Resolutions

1. Confirm that the account running the installer/uninstaller has permissions to write to the ` %SAINSTALLDIR%/FSAA` folder.

   1. Right-click the FSAA folder, navigate to **Properties** > **Security**, and ensure the account has "write" permissions for the folder.
   2. To verify the new write permissions, create a new `.txt` file in the FSAA folder and save it.

2. Confirm the drive containing the FSAA folder is not full.
