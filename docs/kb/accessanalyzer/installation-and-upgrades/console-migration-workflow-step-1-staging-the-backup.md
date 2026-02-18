---
description: >-
  Lists the steps to stage the backup for a Netwrix Access Analyzer console
  migration by creating the NAA_Migration folder and collecting the required
  files and folders for the Access Analyzer Console and Access Information
  Center.
keywords:
  - console migration
  - NAA_Migration
  - Netwrix Access Analyzer
  - Access Information Center
  - backup directory
  - scheduled tasks
  - SSL certificates
  - Vault Service
products:
  - access-analyzer
  - access_info_center
sidebar_label: 'Console Migration Workflow: Step 1—Staging the Bac'
tags:
  - installation-and-upgrades
title: 'Console Migration Workflow: Step 1—Staging the Backup'
knowledge_article_id: kA0Qk0000002OnpKAE
---

# Console Migration Workflow: Step 1—Staging the Backup

> **NOTE:** Return to the main workflow page via this link: [Console Migration Workflow](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow.md).
>
> Proceed to the next section via this link: [Console Migration Workflow: Step 2—Prepare the Database](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow-step-2-prepare-the-database.md).

## Overview

This article lists the steps to prepare for the Netwrix Access Analyzer console migration.

## Create the Backup Directory

1. On the current Access Analyzer Console Server, create a folder called `NAA_Migration`.
2. Follow the steps below to prepare the key components necessary for data recovery of the Access Analyzer Console Server.

## Backup Folders and Files

> **IMPORTANT:** Store the following in the `NAA_Migration` directory.

### Netwrix Access Analyzer Console

Within the `NAA_Migration` folder, create a folder named **NAA**, and add the following files and folders:

> **NOTE:** Stop all currently running jobs and disable all scheduled jobs prior to backing up and migrating the Access Analyzer Console.

| File/Folder | Purpose |
|---|---|
| `...\STEALTHbits\StealthAUDIT\Jobs` | Contains the jobs from the SA jobs tree. |
| `...\STEALTHbits\StealthAUDIT\StealthAUDIT.lic` | The license key for the Netwrix Access Analyzer product |
| `…\STEALTHbits\StealthAUDIT\Reports` | This will ensure that you do not have to go and republish all reports |
| `…\STEALTHbits\StealthAUDIT\CLU` | Contains any Command Line Utility parameters. |
| `…\STEALTHbits\StealthAUDIT\ODBCProfiles\Custom` | Contains any custom ODBC connect strings for SQL. |
| `…\STEALTHbits\StealthAUDIT\SADatabase\Views` | Contains the host list definitions. |
| `...\STEALTHbits\StealthAUDIT\SecurityMap` | Contains all of the connection profiles. |
| `...\STEALTHbits\StealthAUDIT\GlobalOptions.XML` | Contains the Global Options. |
| `...\STEALTHbits\StealthAUDIT\SPProfiles.XML` | Contains the Storage Profiles. |
| `...\STEALTHbits\StealthAUDIT\rba.conf` | Contains the Role Based Access Configuration. |
| `…\STEALTHbits\StealthAUDIT\rba-reporting.conf` | Published Reports role-based access. |
| `…\STEALTHbits\StealthAUDIT\Web\webserver.exe.config` | Published Reports web server configuration. |
| `…\STEALTHbits\StealthAUDIT\DC\patternsdef.xml` | Configured SDD Criteria |
| `…\STEALTHbits\StealthAUDIT\DC\mypatternsdef.xml` | Custom SDD Criteria |
| `…\STEALTHbits\StealthAUDIT\FSAA` | Contains short term data related to file server collections |
| `C:\Windows\System32\Tasks` | Specifically tasks names beginning with “SA*.job” |

### Netwrix Access Information Center

Within the `NAA_Migration` folder, create a folder named **AIC**, and add the following files and folders:

> **NOTE:** These can be found in the AIC install directory. By default, this is located in `C:\Program Files\STEALTHbits\Access Information Center`. If you are unsure where the install directory is located, use the following registry key to locate it: `HKLM:\SYSTEM\CurrentControlSet\Services\AccessInformationCenter`

| File/Folder | Purpose |
|---|---|
| `…\Access Information Center\AccessInformationCenter.Service.exe.Config` | Contains the AIC Configuration. |
| `…\Access Information Center\Templates.zip` | Custom email templates used by the AIC. |

## Important Things to Note Before Migrating

- What accounts are Netwrix Services currently running as?
- Are the AIC and Published Reports secured with SSL Certificates?
  - If **yes**, these will need recreated with the new machine.
- Is the Netwrix Vault Service used?
  - If **yes**, disable before migrating, then re-enable post-migration.
- Are you currently scanning SharePoint Online or Exchange Online?
  - If **yes**, new certificates will need created after the migration.
- It is recommended to take screenshots of the following:
  - NAA Scheduled Tasks
  - **Settings** > **Access**
  - **Settings** > **Storage**
  - Expanded **Settings** > **Host Management** node
  - Expanded job tree in NAA Console
  - Netwrix Services running in `services.msc`

> **IMPORTANT:** Once the `NAA_Migration` backup is complete, move it to the new Access Analyzer console server.

## Related Links

- [Console Migration Workflow](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow.md)
- [Console Migration Workflow: Step 2—Prepare the Database](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow-step-2-prepare-the-database.md)
