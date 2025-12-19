---
title: "Install the PostgreSQL Database Application"
description: "Install the PostgreSQL Database Application"
sidebar_position: 10
---

# Install the PostgreSQL Database Application

The PostgreSQL database application can be installed on the same server as the application or a
different server. If it is installed on a different server, the location of the database server must
be provided while installing the application.

Follow the steps to install the PostgreSQL database application.

:::warning
The PostgreSQL database application must be installed before the application.
:::


:::note
These steps assume you have launched the installer through the Netwrix Setup Launcher
`(Netwrix_Setup.exe`). If you are not using the launcher, right-click on `NetwrixPostgreSQL14.exe`
and select Run as administrator. Then skip to Step 2.
:::


![Netwrix Setup Launcher](/images/threatprevention/7.4/install/reportingmodule/setuplauncher.webp)

**Step 1 –** Click PostgreSQL Setup. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard](/images/threatprevention/7.4/install/upgrade/install.webp)

**Step 2 –** Click Install.

![Netwrix PostgreSQL Setup wizard on the EULA page](/images/threatprevention/7.4/install/reportingmodule/eula_1.webp)

**Step 3 –** Read the End User License Agreement and select the I accept the license agreement
checkbox. Click Next.

![Netwrix PostgreSQL Setup wizard on the Folder Location page](/images/threatprevention/7.4/install/reportingmodule/folder.webp)

**Step 4 –** By default, the installation directories are set to:

- Install Folder – C:\Program Files\Stealthbits\PostgresSQL14
- Data Folder – C:\ProgramData\Stealthbits\PostgresSQL14

Optionally, enter a new path or use the **Browse** buttons to modify as desired. Click Next.

![Netwrix PostgreSQL Setup wizard on the Successfully Installed page](/images/threatprevention/7.4/install/reportingmodule/completed.webp)

**Step 5 –** The installation begins and the installer displays a Setup Progress window. Click Exit
when the installation is successful. The Netwrix PostgreSQL Setup wizard closes.

![postgresqlcheck](/images/threatprevention/7.4/install/reportingmodule/postgresqlcheck.webp)

The PostgreSQL database application is now installed. Nest you can install the Netwrix Threat
Manager Reporting Module application. See the
[Install the Netwrix Threat Manager Reporting Module](/docs/threatprevention/7.4/install/reportingmodule/application.md)
topic for additional information.
