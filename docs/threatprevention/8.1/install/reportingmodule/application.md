---
title: "Install the Netwrix Threat Manager Reporting Module"
description: "Install the Netwrix Threat Manager Reporting Module"
sidebar_position: 20
---

# Install the Netwrix Threat Manager Reporting Module

You can install the application on the same server as the PostgreSQL databases or a different
server. If you install it on a different server, you must provide the location of the database
server while installing the application.

To install the application:

:::warning
You must install the PostgreSQL database application before you install the
application.
:::


:::note
These steps assume you have launched the installer through the Netwrix Setup Launcher
(`Netwrix_Setup.exe`). If you aren't using it, right-click `NetwrixThreatManagerReporting.exe`
and select Run as administrator. Then skip to Step 2.
:::


![postgresqlcheck](/images/threatprevention/8.1/install/reportingmodule/postgresqlcheck.webp)

**Step 1 –** Click **Netwrix Threat Manager Reporting**. The Netwrix Threat Manager Reporting Setup
wizard opens.

![Netwrix Threat Mannager Reporting Setup wizard on the Install page](/images/threatprevention/8.1/install/reportingmodule/install.webp)

**Step 2 –** Click **Install**.

![Netwrix Threat Mannager Reporting Setup wizard on the End User License Agreement page](/images/threatprevention/8.1/install/reportingmodule/eula.webp)

**Step 3 –** Read the End User License Agreement and select the I accept the license agreement
checkbox. Click **Next**.

![Netwrix Threat Mannager Reporting Setup wizard on the Install Folder page](/images/threatprevention/8.1/install/reportingmodule/folder_1.webp)

**Step 4 –** By default, the wizard sets the installation directory to:

- Install Folder – C:\Program Files\STEALTHbits\StealthDEFEND

Optionally, enter a new path or use the **Browse** button to modify as desired. Click Next.

![Netwrix Threat Mannager Reporting Setup wizard on the Database page](/images/threatprevention/8.1/install/reportingmodule/database.webp)

**Step 5 –** On the Database page, ensure the host and port are set correctly. If you install on the
same server where you installed the PostgreSQL database application, this information is
accurate by default. The default database name is stealthdefend; however, you can modify it as
desired. Click **Test** to validate the connection information.

![Warning message that the database doesn't exist, Create?](/images/threatprevention/8.1/install/reportingmodule/databasecreatemessage.webp)

**Step 6 –** If the connection succeeds, a message window displays confirming that the database
doesn't exist and that you want to create it. Click **OK** and the window closes.

![Netwrix Threat Mannager Reporting Setup wizard on the Database page showing Ready for installation message](/images/threatprevention/8.1/install/reportingmodule/databaseready.webp)

**Step 7 –** A "Ready for installation" message appears on the Database page of the wizard and the
Next button is enabled. Click **Next**.

![Netwrix Threat Mannager Reporting Setup wizard on the Firewall Rules page](/images/threatprevention/8.1/install/reportingmodule/firewallrules.webp)

**Step 8 –** By default, the **Create Inbound Windows Firewall Rules** checkbox is selected,
indicating that the installer will create these. Deselect the checkbox if you don't want the
installer to automatically create these rules because you have already created them. Click **Next**.

![Netwrix Threat Mannager Reporting Setup wizard on the Completed page](/images/threatprevention/8.1/install/reportingmodule/completed_1.webp)

**Step 9 –** The installation process begins and the Setup wizard displays the progress.
Click Exit when the installation completes successfully. The Netwrix Threat Manager Reporting Setup
wizard closes.

![Netwrix Setup Launcher showingThreat Manager Reporting Setup completed](/images/threatprevention/8.1/install/reportingmodule/applicationcheck.webp)

**Step 10 –** Now that you have installed both components, close the Netwrix Setup Launcher.

You have now installed the Netwrix Threat Manager Reporting Module application and created the
database. There are several post-installation tasks that you may need to complete, depending on your
environment.

- [Secure the Reporting Module Console](/docs/threatprevention/8.1/install/reportingmodule/secure.md)
- During the first launch, you will set up the built-in Administrator account. See the
  [First Launch](/docs/threatprevention/8.1/install/reportingmodule/firstlaunch.md) topic for additional information.
