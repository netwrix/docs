---
title: "Proxy Mode with Applet Permissions"
description: "Proxy Mode with Applet Permissions"
sidebar_position: 10
---

# Proxy Mode with Applet Permissions

When File System scans are run in proxy mode with applet, it means the File System applet is deployed to the Windows proxy server when the job is executed to conduct data collection. The data collection processing is initiated by the proxy server where the applet is deployed and leverages a local mode-type scan to each of the target hosts. The final step in data collection is to compress and transfer the data collected in the SQLite databases, or Tier 2 databases, back to the Access Analyzer Console server.

Configure the credential(s) with the following rights on the proxy server(s):

- Group membership in the local Administrators group
- Granted the Backup files and directories local policy privilege
- Granted the Log on as a batch privilege

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the installation directory on the proxy server as well as on the Access Analyzer Console server. This is required by either the user account running the Access Analyzer application, when manually executing jobs within the console, or the Schedule Service Account assigned within Access Analyzer, when running jobs as a scheduled tasks.

:::tip
Remember, Remote Registry Service must be enabled on the host where the applet is deployed (for
Applet Mode or Proxy Mode with Applet scans) to determine the system platform and where to deploy
the applet.
:::


:::warning
The local policy, “Network access: Do not allow storage of passwords and credentials
for network authentication” must be disabled in order for the applet to start.
:::


Sensitive Data Discovery Auditing scans require .NET Framework 4.7.2 or later to be installed on the
server where the applet is to be deployed in order for Sensitive Data Discovery collections to
successfully occur.


See the [Proxy Mode with Applet Port Requirements](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/proxy-mode-scans/with-applet/proxymodeappletports.md) topic for firewall rule
information.

**Secure Proxy Communication Considerations**

For Proxy Mode with Applet scans, the certificate exchange mechanism and certificate exchange port
must be configured via the File System Access Auditing Data Collector Wizard prior to executing a
scan. See the
[FSAA Applet Certificate Management Overview](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/certificatemanagement/certificatemanagement.md)
topic for additional information.

## Accounts Used
- **Job Execution:** Scheduled Task or Console User (launches the job)
- Console ↔ Applet: **NAA** **Computer Account (Kerberos)**
- Target Access (Applet ↔ Targets): Connection Profile Account

:::note
By default, the Applet will run as the connection profile account unless an additional credential is added to the connection profile using either **Task (Local)** or **Task (Domain)**.
:::

The account used in the connection profile associated with the File System scan jobs, should have the appropriate permissions required to access the target host. See the [File System Supported Platforms](https://docs.netwrix.com/docs/accessanalyzer/11_6/requirements/filesystem/filesystems/) page for specific requirements per target file system.

## **How do I determine if I’m using Proxy Mode with Applet scanning?**

The best way to verify if you’re using Proxy Mode with Applet scanning is via the FSAA Data Collector Query Settings below:
1. [Applet Settings](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/datacollector/fsaa/appletsettings) > Applet Launch Mechanism: MSTask Task Scheduler
2. [Scan Server Selection](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/datacollector/fsaa/scanserverselection) > “Specific Remote Server: “ **OR** “Specific Remote Servers by Host List”