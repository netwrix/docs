---
description: Preparation steps for upgrading Netwrix Access Analyzer, including considerations, reference screenshots, and required file backups.
keywords:
  - Netwrix Access Analyzer
  - Access Analyzer upgrade
  - upgrade preparation
  - upgrade considerations
  - Azure jobs
  - Entra ID
  - proxy service
  - file backups
  - Access Information Center
  - SharePoint agent
products:
  - access-analyzer
sidebar_label: Preparing for Access Analyzer Upgrade
title: Preparing for Access Analyzer Upgrade
knowledge_article_id: ka0Qk000000GIllIAG
---

# Preparing for Access Analyzer Upgrade

> **NOTE:** Return to the main workflow page here: [Access Analyzer Upgrade Workflow Articles](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow.md).
> Proceed to the next section: [Upgrading Access Analyzer](/docs/kb/accessanalyzer/installation-and-upgrades/access-analyzer-upgrade-workflow-upgrade.md).

## Overview

This article lists the steps to prepare for the **Access Analyzer** upgrade procedure.

## Upgrade Considerations

Refer to the following points to learn more about the upgrade scope:

- The **Access Information Center (AIC)** should be upgraded along with Access Analyzer.
- If you run SharePoint on-premises scans, update the **SharePoint agent** on the SharePoint server.
- When upgrading from v11.5 to v11.6, re-schedule all Azure jobs due to the **Entra ID** rebranding.
- When upgrading from v11.5 to v11.6, manually upgrade each proxy service instead of running the **FS_UpdateProxy** job.

## Reference Screenshots

Take the following reference screenshots before the upgrade:

- Installed programs (**Programs and Features**) via Control Panel:

  ```registry
  appwiz.cpl
  ```

- **License** (**Help** > **About**)
- Each of the global **Settings** subnodes
- The **Schedules** node

  > **IMPORTANT:** When upgrading from Access Analyzer v11.5 to v11.6 or later, pay attention to any Azure-related tasks. Recreate these tasks under the new Entra ID naming after the upgrade.

- The job tree structure with the contents of each module
- Query settings of the **Active Directory Inventory** > **1-AD_Scan** job, including the **Options** page and the **Custom Attributes** page
- Upload the **Active Directory Inventory** > **1-AD_Scan** > **Active Directory Summary** report to Salesforce (**Customer Account** > **Related** > **Notes & Attachments**)

  > **IMPORTANT:** Upload the screenshot to Salesforce — **Customer Account** > **Related** > **Notes & Attachments**.

- Every page of the FSAA, FSAC, SEEK, SPAC, SPAA/SPSEEK scans query settings
- Every page of the AIC settings

## File Backups

Create a separate folder named `NEAUpgrade_%date%` to store backup files. Back up the following items:

- Access Analyzer license file:

  ```registry
  %SAInstallDir%StealthAUDIT.lic
  ```

- Host list definitions:

  ```registry
  %SAInstallDir%SADatabase\Views
  ```

- All connection profiles:

  ```registry
  %SAInstallDir%SecurityMap
  ```

- Global Options/Settings:

  ```registry
  %SAInstallDir%GlobalOptions.xml
  ```

- Connection profiles:

  ```registry
  %SAInstallDir%SPProfiles.xml
  ```

- RBA configuration:

  ```registry
  %SAInstallDir%rba.conf
  ```

- Reporting RBA configuration:

  ```registry
  %SAInstallDir%rba-reporting.conf
  ```

- Published reports configuration:

  ```registry
  %SAInstallDir%Web\WebServer.exe.config
  ```

- Custom SDD criteria:

  ```registry
  %SAInstallDir%DC\MyPatternsDef.xml
  ```

- Configured SDD criteria:

  ```registry
  %SAInstallDir%DC\PatternsDef.xml
  ```

- Customized jobs:

  ```registry
  %SAInstallDir%Jobs
  ```

- Certificates on the server and the ports they are bound to:

  1. Create an `ssl.txt` file in the `NEAUpgrade_%date%` folder.
  2. Hold **Shift**, right-click the text file, and select **Copy as path**.
  3. In an elevated PowerShell instance, run the following command to save the `netsh` output to the file:

     ```registry
     netsh http show ssl > %ssl.txt_location%
     ```

     Example:

     ```registry
     netsh http show ssl > "C:\Users\agradmin\Desktop\testfolder\ssl.txt"
     ```

- AIC configuration:

  - In AIC v11.5:

    ```registry
    C:\inetpub\wwwroot\StealthAUDIT Compliance\
    ```

  - In AIC v11.6:

    ```registry
    C:\Program Files\STEALTHbits\Access Information Center
    ```
