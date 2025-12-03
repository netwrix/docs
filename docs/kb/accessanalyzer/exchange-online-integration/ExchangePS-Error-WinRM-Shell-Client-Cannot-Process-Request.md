---
title: "ExchangePS Error: The WinRM Shell Client Cannot Process the Request"
sidebar_label: "ExchangePS Error: The WinRM Shell Client Cannot Process the Request"
description: "Resolves the 'WinRM Shell client cannot process the request' error in ExchangePS data collector jobs by updating the PackageManagement and ExchangeOnlineManagement PowerShell modules to supported versions."
keywords:
  - WinRM
  - ExchangePS
  - PowerShell
  - New-ExoPSSession
  - ExchangeOnlineManagement
  - PackageManagement
  - Office 365
  - remote session
  - module update
  - data collector
  - Netwrix Access Analyzer
  - Netwrix Enterprise Auditor
products: [enterprise_auditor, access_analyzer]
knowledge_article_id: kA0Qk0000003Fc1KAE
---

## Related Queries

- "ExchangePS shell handle is not valid."
- "New-ExoPSSession fails with WinRM Shell client error."
- "ExchangeOnlineManagement 2.0.5 error with StealthAUDIT job."
- "Stealthbits Exchange data collector fails to connect."

## Symptom

Jobs that use the ExchangePS data collector fail with the following error:

```text
PowerShell error: System.Exception: New-ExoPSSession : Processing data from remote server outlook.office365.com failed with the following error message: The WinRM Shell client cannot process the request. The shell handle passed to the WSMan Shell function is not valid. The shell handle is valid only when WSManCreateShell function completes successfully.
```

## Cause

This issue occurs when one or both of the following PowerShell modules are outdated or incompatible:

- `PackageManagement` module version is earlier than `1.0.0.1`
- `ExchangeOnlineManagement` module version is `2.0.5` or earlier

These versions are known to cause instability with remote sessions using `New-ExoPSSession`.

## Resolution

### Step 1: Verify Installed Module Versions

Open a PowerShell session and run:

```powershell
Get-Module -ListAvailable PackageManagement
Get-Module -ListAvailable ExchangeOnlineManagement
```

### Step 2: Update Modules Using PowerShell (Preferred Method)

- Update `PackageManagement` module:
  ```powershell
  Install-Module PackageManagement -Force -Scope AllUsers
  ```

- Update `ExchangeOnlineManagement` module:
  ```powershell
  Install-Module ExchangeOnlineManagement -Force -Scope AllUsers
  ```

> **IMPORTANT:**
> Close and reopen all PowerShell sessions after updating modules.

### Step 3: Manual Update (If Unable to Install via PowerShell)

If the environment prevents direct downloads from PowerShell, update the modules manually.

#### Download the `.nupkg` Files

1. Visit the following URLs:
   - [PackageManagement 1.4.8.1](https://www.powershellgallery.com/packages/PackageManagement/1.4.8.1)
   - [ExchangeOnlineManagement 3.9.1-Preview1](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.9.1-Preview1)

2. Download the `.nupkg` file for each required version.

#### Convert `.nupkg` to ZIP and Extract

1. Rename the downloaded `.nupkg` file to `.zip`
   Example: `PackageManagement.1.4.8.1.zip`
2. Unblock the ZIP file using one of the following methods:
   - In File Explorer, right-click **Properties** > **Unblock**.
   - Or run:
     ```powershell
     Unblock-File .\PackageManagement.1.4.8.1.zip
     ```
3. Extract the contents of each ZIP file.

#### Rename the Extracted Folder

- Rename `PackageManagement.1.4.8.1` to `1.4.8.1`
- Rename `ExchangeOnlineManagement.3.4.0` to `3.4.0` (or the version you downloaded)

#### Move to PowerShell Modules Directory

Place the renamed folders in the correct directories:

- For PackageManagement:
  `C:\Program Files\WindowsPowerShell\Modules\PackageManagement\1.4.8.1`
- For ExchangeOnlineManagement:
  `C:\Program Files\WindowsPowerShell\Modules\ExchangeOnlineManagement\3.4.0`

### Step 4: Confirm Module Versions

Re-run the version checks:

```powershell
Get-Module -ListAvailable PackageManagement
Get-Module -ListAvailable ExchangeOnlineManagement
```

Ensure that:

- `PackageManagement` is version **1.4.8.1** or newer
- `ExchangeOnlineManagement` is version **2.0.6** or newer

> **IMPORTANT:**
> Rerun jobs that use the ExchangePS data collector to confirm that the error message no longer appears.
