---
title: "Reporting Module Installation"
description: "Reporting Module Installation"
sidebar_position: 40
---

# Reporting Module Installation

Prior to installing Netwrix Threat Manager Reporting Module 3.0, make sure that all the
prerequisites have been met in accordance with the
[Reporting Module Server Requirements](/docs/threatprevention/7.4/requirements/reportingserver.md)
topic.

The Netwrix Threat Manager Reporting Module installer is packaged with three executable files.

:::warning
The PostgreSQL database must be installed before installing Netwrix Threat Manager
Reporting Module.
:::


**Netwrix_Setup.exe**

This executable starts a setup launcher containing buttons to install the PostgreSQL database and
the application. The launcher installs these components on the same server. See the installation
details for each components below.

**NetwrixPostgreSQL14.exe**

This executable is for installing the PostgreSQL database on a different server from the
application.

**NetwrixThreatManagerReporting.exe**

This executable is for installing the application and its services:

- StealthDEFEND Active Directory Service
- StealthDEFEND Email Service
- StealthDEFEND Integration Service
- StealthDEFEND License Service
- StealthDEFEND Web Service

The following prerequisites will be installed if they are not present:

- .NET Framework 4.8+
- .NET Desktop Runtime 8.0.4
- ASP.NET Core 8.0.4
- VC++ redist v14.28.29914
- Python v3.10.8x64

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

Follow the steps to install the Netwrix Threat Manager Reporting Module application.

**Step 1 –** Right-click on `Netwrix_Setup.exe` and select Run as administrator. The Netwrix Setup
launcher opens. You can now install the following components on the same server:

![Stealthbits Setup Launcher for StealthINTERCEPT Reporting Powered by StealthDEFEND](/images/threatprevention/7.4/install/reportingmodule/setuplauncher.webp)

- Click PostgreSQL Setup to install the database. See the
  [Install the PostgreSQL Database Application](/docs/threatprevention/7.4/install/reportingmodule/database.md)
  topic for additional information.
- Click Netwrix Threat Manager Reporting to install the application. See the
  [Install the Netwrix Threat Manager Reporting Module](/docs/threatprevention/7.4/install/reportingmodule/application.md)
  topic for additional information.

**Step 2 –** Log into the console for the first time. See the
[First Launch](/docs/threatprevention/7.4/install/reportingmodule/firstlaunch.md)
topic for additional information.

After completing the first launch, it is time to complete the initial configuration. See the
[Set Up the Threat Manager Reporting Module](/docs/threatprevention/7.4/gettingstarted.md#set-up-the-threat-manager-reporting-module)
topic for additional information.
