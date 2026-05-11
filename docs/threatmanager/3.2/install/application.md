---
title: "Install the Threat Manager Application"
description: "Install the Threat Manager Application"
sidebar_position: 20
---

# Install the Threat Manager Application

The application can be installed on the same server as the PostgreSQL databases or a different
server. If installed on a different server, the location of the database server must be provided
while installing the application.

To install the application:

:::warning
Install the PostgreSQL database application before the application.
:::


:::note
These steps assume you have launched the installer through the Netwrix Setup Launcher
(`Netwrix_Setup.exe`). If you aren't using it, right-click `NetwrixThreatManager.exe` and select
Run as administrator. Then skip to Step 2.
:::


![Netwrix Setup Launcher showing PostgreSQL Setup completed](/images/threatmanager/3.0/install/postgresqlcheck.webp)

**Step 1 –** Click **Netwrix Threat Manager Setup**. The Netwrix Threat Manager Setup wizard opens.

![Netwrix Threat Manager Setup wizard ](/images/threatmanager/3.0/install/installtm3.0.webp)

**Step 2 –** Click **Install**.

![Netwrix Threat Manager Setup wizard EULA page](/images/threatmanager/3.0/install/tm3eula.webp)

**Step 3 –** Read the End User License Agreement and select the I accept the license agreement
checkbox. Click **Next**.

![Netwrix Threat Manager Setup wizard Install Folder page](/images/threatmanager/3.0/install/folder.webp)

**Step 4 –** By default, the installation directory is set to:

- Install Folder – C:\Program Files\STEALTHbits\StealthDEFEND

Optionally, enter a new path or use the **Browse** button to modify as desired. Click Next.

![Netwrix Threat Manager Setup wizard Connect to the Database page](/images/threatmanager/3.0/install/database.webp)

**Step 5 –** On the Database page, ensure the host and port are set correctly. If installing on the
same server where the PostgreSQL database application was installed, this information will be
accurate by default. The default database name is stealthdefend; however, it can be modified as
desired. Click **Test** to validate the connection information.

For example, if you change the default database name from stealthdefend to threatmanager and click
**Test**.

![Warning message that the database doesn't exist, Create?](/images/threatmanager/3.0/install/databasecreatemessage.webp)

**Step 6 –** If the connection succeeds, a message window displays confirming the database
doesn't exist and you want to create it. Click **OK** and the window closes.

**Step 7 –** A "Ready for installation" message appears on the Database page of the wizard and the
Next button is enabled. Click **Next**.

:::note
If PostgreSQL is installed on a different host, then the connection details should be
updated accordingly.
:::


![Netwrix Threat Manager Setup wizard Firewall Rules page](/images/threatmanager/3.0/install/firewallrules.webp)

**Step 8 –** By default, the **Create Inbound Windows Firewall Rules** checkbox is selected,
indicating that the installer will create these. Deselect the checkbox if you don't want the
installer to automatically create these rules because you have already created them. Click **Next**.

![Netwrix Threat Manager Setup wizard Completed Successfully page](/images/threatmanager/3.0/install/completed.webp)

**Step 9 –** The installation process will begin and the Setup wizard will display the progress.
Click Exit when the installation completes successfully. The Netwrix Threat Manager Setup wizard
closes.

![Netwrix Setup Launcher with Threat Manager Setup check](/images/threatmanager/3.0/install/applicationcheck.webp)

**Step 10 –** Now that both components have been installed, close the Netwrix Setup Launcher.

The Threat Manager application is now installed and the database has been created. There are several
post-installation tasks that you may need to complete, depending on your environment. See the
following topics for additional information:

- [Optionally Install the Action Service on Additional Servers](/docs/threatmanager/3.2/install/actionservice.md)
- [Secure the Threat Manager Console](/docs/threatmanager/3.2/install/secure.md)
- During the first launch, you will set up the built-in Administrator account. See the
  [First Launch](/docs/threatmanager/3.2/install/firstlaunch/firstlaunch.md) topic for additional information.
