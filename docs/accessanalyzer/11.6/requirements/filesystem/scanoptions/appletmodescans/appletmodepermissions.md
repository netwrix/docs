---
title: "Applet Mode Permissions"
description: "Applet Mode Permissions"
sidebar_position: 10
---

# Applet Mode Permissions

When File System scans are run in applet mode, it means the File System applet is deployed to the target host when the job is executed to conduct data collection. However, the applet can only be deployed to a server with a Windows operating system. The data is collected on the Windows target host where the applet is deployed. The final step in data collection is to compress and transfer the data collected in the SQLite database(s), or Tier 2 database(s), back to the Access Analyzer Console server. If the target host is a NAS device, the File System scans will default to local mode for that host.


Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the installation directory on the target host/proxy server as well as on the Access Analyzer Console server. This is required by either the user account running the Access Analyzer application, when manually executing jobs within the console, or the Schedule Service Account assigned within Access Analyzer, when running jobs as a scheduled tasks.


Sensitive Data Discovery Auditing scans require .NET Framework 4.7.2 or later to be installed on the server where the applet is to be deployed in order for Sensitive Data Discovery collections to successfully occur.

:::tip
Remember, Remote Registry Service must be enabled on the host where the applet is deployed (for
Applet Mode or Proxy Mode with Applet scans) to determine the system platform and where to deploy
the applet.
:::

:::warning
The local policy, “Network access: Do not allow storage of passwords and credentials
for network authentication” must be disabled in order for the applet to start.
:::

See the [Applet Mode Port Requirements](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/applet-mode-scans/appletmodeports.md) topic for firewall rule information.

## Accounts Used
- **Job Execution:** Scheduled Task or Console User (launches the job)
- **Target Access:** Connection Profile Account (always used for scanning)

:::note
By default, the Applet will run as the connection profile account unless an additional credential is added to the connection profile using either **Task (Local)** or **Task (Domain)**.
:::

The account used in the connection profile associated with the File System scan jobs, should have the appropriate permissions required to access the target host. See the [File System Supported Platforms](https://docs.netwrix.com/docs/accessanalyzer/11_6/requirements/filesystem/filesystems/) page for specific requirements per target file system.

## How do I determine if I’m using Applet Mode scanning?

The best way to verify if you’re using Applet Mode scanning is via the FSAA Data Collector Query Settings > [Scan Server Selection](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/datacollector/fsaa/scanserverselection) page:

- **Automatic** — If the target host being scanned is a Windows host, NEA will deploy for FS scanning.