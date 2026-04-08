---
title: "Installation"
description: "Installation"
sidebar_position: 30
---

# Installation

Prior to installing Threat Manager, please ensure that all of the prerequisites have been met in
accordance with the [Requirements](/docs/threatmanager/3.1/requirements/overview.md) topic. Additionally, the monitoring
agents need to be deployed through either Netwrix Threat Prevention or Netwrix Activity Monitor and
configured to send data to Threat Manager.

The Threat Manager installer is packaged with four executable files.

:::warning
The PostgreSQL database must be installed before installing Threat Manager.
:::


**Netwrix_Setup.exe**

This executable starts a setup launcher containing buttons to install the PostgreSQL database and
the application. The launcher installs these components on the same server. See the installation
details for each components below.

**NetwrixPostgreSQL14.exe**

This executable is for installing the PostgreSQL database on a different server from the
application.

**NetwrixThreatManager.exe**

This executable is for installing the application and its services:

- Netwrix Threat Manager Action Service
- Netwrix Threat Manager Active Directory Service
- Netwrix Threat Manager Email Service
- Netwrix Threat Manager Event Service
- Netwrix Threat Manager Integration Service
- Netwrix Threat Manager Job Service
- Netwrix Threat Manager License Service
- Netwrix Threat Manager SIEM Service
- Netwrix Threat Manager Web Service

The following prerequisites will be installed if they are not present:

- .NET 8.0.11
- .NET Desktop Runtime 8.0.11
- ASP.NET Core 8.0.11
- VC++ redist v14.28.29914
- Python v3.10.8x64

**NetwrixThreatManager.ActionService.exe**

This executable is for installing the Netwrix Threat Manager Action Service on additional servers.

## Software Download

Current customers can log in to the Netwrix Customer Portal to download software binaries and
license keys for purchased products. See the
[Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html)
topic for information on how to register for a Customer Portal account.

## Antivirus Exclusions for PostgreSQL

If you have any antivirus software installed, you must do the following:

- Exclude all scanning of the PostgreSQL Data Directories
- Exclude the postgres.exe process from all scans

Antivirus software can interfere with PostgreSQL's operation because PostgreSQL requires file access
commands in Windows to behave exactly as documented by Microsoft, and many antivirus programs
contain errors or accidental behavior changes that cause these commands to misbehave subtly.

This is not a problem for most programs because they access files in fairly simple ways. Because
PostgreSQL is continuously reading from and writing to the same set of files from multiple
processes, it tends to trigger programming and design mistakes in antivirus software, particularly
problems related to concurrency. Such problems can cause random and unpredictable errors, or even
data corruption.

Antivirus software is also likely to dramatically slow down PostgreSQL's operation. For that reason,
you should at least exclude postgres.exe and the data directories so the scanner ignores them.

## Installation Process

Follow the steps to install the Threat Manager application on a single server.

![setuplauncher](/images/threatmanager/3.0/install/setuplauncher.webp)

**Step 1 –** Right-click on `Netwrix_Setup.exe` and select Run as administrator. The Netwrix Setup
launcher opens. You can now install the following components on the same server:

- Click PostgreSQL Setup to install the database. See the
  [Install the PostgreSQL Database Application](/docs/threatmanager/3.1/install/database.md) topic for additional information.
- Run the Threat Manager Setup to install the application. See the
  [Install the Threat Manager Application](/docs/threatmanager/3.1/install/application.md) topic for additional information.

**Step 2 –** Complete all post-installation tasks that apply to your configured environment:

- Optional: Install the Action Service on additional servers. See the
  [Optionally Install the Action Service on Additional Servers](/docs/threatmanager/3.1/install/actionservice.md) topic for
  additional information.
- Configure a remote Action Service to register with Threat Manager.
- Configure a service account to run actions.

**Step 3 –** Log into the console for the first time. See the [First Launch](/docs/threatmanager/3.1/install/firstlaunch/firstlaunch.md) topic
for additional information.

**Step 4 –** Configure integration with one or more Netwrix products to feed the desired type of
data into Threat Manager:

- [Netwrix Activity Monitor Integration](/docs/threatmanager/3.1/install/integration/activitymonitor.md) – Configure Netwrix
  Activity Monitor to send file system data and/or Active Directory data and/or Microsoft Entra ID
  data to Threat Manager
- [Netwrix Threat Prevention Integration](/docs/threatmanager/3.1/install/integration/threatprevention/threatprevention.md) – Configure Netwrix
  Threat Prevention to send Active Directory data to Threat Manager
- [Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](/docs/threatmanager/3.1/install/integration/accessanalyzer.md)
  – Configure Netwrix Access Analyzer (formerly Enterprise Auditor) to send Sensitive Data to Threat
  Manager
