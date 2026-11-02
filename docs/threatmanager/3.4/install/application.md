---
title: "Install the Threat Manager Application"
description: "Install the Threat Manager Application"
sidebar_position: 20
---

# Install the Threat Manager Application

The application can be installed on the same server as the PostgreSQL databases or a different
server. If you install it on a different server, provide the location of the database server
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

The **Install**, **Change**, **Repair**, **Remove**, and **Move Database** buttons on the Welcome page
have keyboard access keys. Press Alt with the underlined letter, such as Alt+C for **Change** or
Alt+V for **Remove**. The **Move Database** button appears only when an
installed service needs the PostgreSQL database. For example, it doesn't appear after an Integration
Service-only install. To export the JSON Web Token (JWT) signing key from this page, see
[Export the JWT Signing Key to Another Host](/docs/threatmanager/3.4/install/exportsigningkeys.md).

To choose which services to install on a first install, select the **Advanced Installation** check
box. The checkbox doesn't appear when the machine already has a locked install mode, or when the command
line sets `ProductInstallSettings_PreferFullInstall=True`.

![Netwrix Threat Manager Setup wizard EULA page](/images/threatmanager/3.0/install/tm3eula.webp)

**Step 3 –** Read the End User License Agreement and select the checkbox to accept the license
agreement. Click **Next**.

![Netwrix Threat Manager Setup wizard Install Folder page](/images/threatmanager/3.0/install/folder.webp)

**Step 4 –** If you selected the **Advanced Installation** checkbox, or this is a remote install,
the Advanced Settings page opens with the title "What would you like to install?". Select one of the
following options, then click **Next**:

- **All Services** – Installs every service on this server.
- **Remote Services Only** – Installs only the services you check, **Action Service**, **Integration Service**,
  or both, to run on a different server than the Threat Manager application. If you don't check a
  service, the page shows "Select at least one remote service to install." and you can't continue.
  See the [Optionally Install the Action Service on Additional Servers](/docs/threatmanager/3.4/install/actionservice.md)
  topic for additional information.

A remote install always shows this page so you can see which services the installer will install.
After a successful first install, you can't change the install mode or the service selection with
**Change** or an upgrade. You must fully uninstall and reinstall. A full uninstall releases the lock,
and the wizard pre-fills the previous install mode and service selection. If the machine has the
locked mode **Remote Services Only**, the page shows its controls disabled with the message "Install mode is
locked. Fully uninstall and reinstall to alter this value." If the locked mode is **All
Services**, **Change** skips the page.

:::note
If the command line passes `ProductInstallSettings_InstallMode` with a value that conflicts with the
locked mode, the installer stops and shows the "Install Mode Conflict" dialog. A silent install writes
the message to the log and exits with code 1.
:::

**Step 5 –** By default, the installation directory is:

- Install Folder – C:\Program Files\STEALTHbits\StealthDEFEND

Optionally, enter a new path or use the **Browse** button to modify as desired. Click Next.

![Netwrix Threat Manager Setup wizard Connect to the Database page](/images/threatmanager/3.0/install/database.webp)

**Step 6 –** On the Database page, ensure the host and port are correct. If installing on the
same server where the PostgreSQL database application was installed, this information will be
accurate by default. The default database name is stealthdefend; however, it can be modified as
desired. Click **Test** to validate the connection information.

The wizard skips the database pages when no installed service uses the database, such as a remote
install of the Action Service, the Integration Service, or both.

For example, if you change the default database name from stealthdefend to threatmanager and click
**Test**.

![Warning message that the database doesn't exist, Create?](/images/threatmanager/3.0/install/databasecreatemessage.webp)

**Step 7 –** If the connection succeeds, a message window displays confirming the database
doesn't exist and you want to create it. Click **OK** and the window closes.

**Step 8 –** A "Ready for installation" message appears on the Database page of the wizard and the
Next button becomes active. Click **Next**.

:::note
If PostgreSQL is on a different host, then update the connection details
accordingly.
:::


![Netwrix Threat Manager Setup wizard Firewall Rules page](/images/threatmanager/3.0/install/firewallrules.webp)

**Step 9 –** By default, the installer selects the **Create Inbound Windows Firewall Rules** checkbox,
indicating that it creates these. Deselect the checkbox if you don't want the
installer to automatically create these rules because you have already created them. Click **Next**.

**Step 10 –** If the Securing Threat Manager page opens, choose how the web console and services use
HTTPS, then click **Next**. See the [Secure the Threat Manager Console](/docs/threatmanager/3.4/install/secure.md)
topic for additional information.

![Netwrix Threat Manager Setup wizard Completed Successfully page](/images/threatmanager/3.0/install/completed.webp)

**Step 11 –** The installation process will begin and the Setup wizard will display the progress.
The installer waits up to 2 minutes for each service to start or stop. Click Exit
when the installation completes successfully. The Netwrix Threat Manager Setup wizard
closes. When the installation completes, the installer starts the Action Service together with the
other services.

If the Visual C++ prerequisite needs a restart, the Finish page shows "To complete the installation,
the computer must be rebooted." and a **Reboot now** button.

![Netwrix Setup Launcher with Threat Manager Setup check](/images/threatmanager/3.0/install/applicationcheck.webp)

**Step 10 –** Now that both components have been installed, close the Netwrix Setup Launcher.

You have now installed the Threat Manager application and the installer has created the database. There are several
post-installation tasks that you may need to complete, depending on your environment. See the
following topics for additional information:

- [Optionally Install the Action Service on Additional Servers](/docs/threatmanager/3.4/install/actionservice.md)
- [Secure the Threat Manager Console](/docs/threatmanager/3.4/install/secure.md)
- To install without the wizard, see the [Silent Installation](/docs/threatmanager/3.4/install/silentinstall.md) topic.
- During the first launch, you will set up the built-in Administrator account. See the
  [First Launch](/docs/threatmanager/3.4/install/firstlaunch/firstlaunch.md) topic for additional information.
