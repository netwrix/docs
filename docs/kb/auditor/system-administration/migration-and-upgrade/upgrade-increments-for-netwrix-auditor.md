---
description: >-
  Describes the approved incremental upgrade paths for Netwrix Auditor up to
  version 10.8 and provides recommendations and prerequisites for successful
  upgrades.
keywords:
  - Netwrix Auditor
  - upgrade
  - incremental upgrade
  - database upgrade
  - 10.8
  - 9.9
  - license
products:
  - auditor
sidebar_label: Upgrade Increments for Netwrix Auditor
tags: []
title: "Upgrade Increments for Netwrix Auditor"
knowledge_article_id: kA00g000000H9eJCAS
---

# Upgrade Increments for Netwrix Auditor

## Overview

When upgrading from old versions of Netwrix Auditor, you must do that **incrementally**. Below is the list of approved upgrade paths up to the version 10.8.

## Before you start

To successfully access the download packages, ensure you are logged in with your customer portal account at [Netwrix.com](https://www.netwrix.com/my_account.html).

> **IMPORTANT:** Make sure the free disk space in your SQL server totals to at least 30% of the total size of all Netwrix Auditor-related databases. This will allow for the database growth during the upgrade.

## Upgrade Recommendations

### For versions older than 9.5

- **Upgrading from versions older than 9.5 is not recommended!** Incremental upgrades may cause error accumulation and cause issues with the product stability post-upgrade. Best practices recommend that you leave your Netwrix Auditor as is for historical reports and start a new server with the latest version installed. Proceed only if you absolutely have to.
- Make sure to wait at least 24 hours before upgrading to the next version, so that the product has enough time time upgrade your databases.
- Contact Technical Support for download links for Netwrix Auditor 8.5 and 9.5
- Once 8.5 is installed, you will need to run the upgrade of your Audit Databases manually. To do this, launch Netwrix Auditor Administrator Console, navigate to **Audit Archive** > **Audit Database** and then click **Upgrade**.

### For Versions 9.5 and Newer

- Upgrading to Netwrix Auditor v10.6 and newer require the [.NET 4.8 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net48) on the Auditor server and on any servers included in a User Activity or Windows Server Monitoring Plan that have network traffic compression (Compression Service) enabled.

> **IMPORTANT:** Plan your upgrade carefully. .NET 4.8 requires Windows Server 2016 or later and may require a server reboot after installation.

- Starting from Netwrix Auditor version 9.9, a new license format was implemented. To reissue the license:
  - If you upgrade incrementally, just follow steps given in the **Upgrade Paths** table below, and your license will upgrade automatically.
  - If you leave your Netwrix Auditor as is and deploy a new server with the latest version, please contact your Account Manager and request the newly formatted license.
- Do not suspend or postpone the upgrade sequence for an extended period. The latest release of Netwrix Auditor consolidates all previous functionality and delivers essential patches and security updates to maintain system integrity.
- After each incremental update, you must wait for the DBs to be upgraded. In large/busy environments, this may take up to 24 hours. Check the **Health Log** to see if database was upgraded successfully. Event IDs **4410** and **4405** indicate that upgrade was done successfully, any other **44XX** Event IDs indicate that there was an error.
- If you have the capability to capture a snapshot of the server, we recommend doing so. Before we begin, launch a PowerShell session as Administrator and execute the following command:

```powershell
Stop-Service -Displayname Netwrix*
```

This will stop all Netwrix Services and prevent complications during the upgrade.

## Upgrade Paths

| Version        | Can Upgrade To | Additional Info |
|----------------|----------------|-----------------|
| 8.0            | 8.5            | Not recommended! |
| 8.5 / 9.0      | 9.5            | Not recommended! |
| 9.5            | 9.7            | [Download](https://www.netwrix.com/my_products.html) |
| 9.7 / 9.8      | 9.9            | [Download](https://www.netwrix.com/my_products.html) |
| 9.9            | 9.96           | [Download](https://www.netwrix.com/my_products.html)<br />Refer to the following article for additional information:<br /> [Upgrade from 9.9 to 9.96 with Your Netwrix Auditor Version Cannot Be Upgraded Error](/docs/kb/auditor/system-administration/migration-and-upgrade/upgrade_from_9.9_to_9.96_with_your_netwrix_auditor_version_cannot_be_upgraded_error)|
| 9.96 / 10.0    | 10.5           | [Download](https://www.netwrix.com/my_products.html) |
| 10 / 10.5      | 10.6           | [Download](https://www.netwrix.com/my_products.html) |
| 10.5 / 10.6    | 10.7           | [Download](https://www.netwrix.com/my_products.html) |
| 10.6 / 10.7    | 10.8           | [Download](https://www.netwrix.com/my_products.html) |

### Related articles

[How to Upgrade Netwrix Auditor](/docs/kb/auditor/system-administration/migration-and-upgrade/how-to-upgrade-netwrix-auditor)
