---
title: "Install the application server"
description: "Install PostgreSQL 16 and Privilege Secure with the Netwrix Setup Launcher, or switch the database to SQL Server."
sidebar_position: 30
---

# Install the application server

The Netwrix Setup Launcher (`NPS_Setup.exe`) checks prerequisites, installs the bundled PostgreSQL 16 database, and installs or upgrades Netwrix Privilege Secure for Access Management (Privilege Secure) on the application server. Use it for a first installation on one server and for upgrades.

## Before you begin

- Review the [application server requirements](/docs/privilegesecure/26_07/requirements/application-server) and the [database requirements](/docs/privilegesecure/26_07/requirements/database).
- Sign in to the server with an account that has local administrator rights. The Setup Launcher stops with the message "Netwrix Setup Launcher must be run as Administrator" otherwise.
- Disable antivirus software on the server during the installation. The launcher recommends this.
- Extract the downloaded `privilegesecure-accessmanagement-<version>.zip` file. Keep `NPS_Setup.exe` with the `Extras` folder.
- Install PowerShell 7.6 or later.

:::warning
Install PowerShell 7.6 or later before you start the Setup Launcher. The launcher doesn't check for it. Its **Pre-requisites Setup** grid checks only for PowerShell 5.1 or later, so it can show every prerequisite as installed while the application installer still stops. Download PowerShell from [aka.ms/powershell](https://aka.ms/powershell).
:::

{/* TODO verify: on a clean server without PowerShell 7.6, the on-screen behavior of NPS.exe when the Setup Launcher starts it. The message text is confirmed in the installer source. */}

## Install the application server with PostgreSQL

The launcher shows the steps for your situation on screen. For a first installation with PostgreSQL, the steps are:

1. Install any missing prerequisites.
2. Install the PostgreSQL database software.
3. Install Netwrix Privilege Secure.
4. Open a browser and run the setup wizard.

### Check the prerequisites

1. Right-click `NPS_Setup.exe` and select **Run as administrator**.
2. Click **Pre-requisites Setup**.
3. Review the grid. It lists .NET Framework 4.7.2 and PowerShell 5.1 or later, with a link to download each missing item.
4. Install anything that is missing, and then confirm that PowerShell 7.6 or later is installed.

{/* TODO screenshot: the Netwrix Setup Launcher main window with the four buttons */}
{/* TODO screenshot: the Pre-requisites Setup grid */}

### Install the PostgreSQL database

1. In the launcher, click **PostgreSQL Setup**. If the button reads **Install PostgreSQL16**, click that instead.
2. In the setup wizard, click **Install**.
3. Accept the license agreement and click **Next**.
4. Review the install folder and the data folder. To change a location, click **Browse**. Click **Next**.
5. When the installation finishes, click **Exit**.

{/* TODO verify: the default install and data folders of the Netwrix PostgreSQL v16 installer. The 26.03 pages show C:\Program Files\Stealthbits\Postgres16. */}
{/* TODO screenshot: the PostgreSQL setup wizard install and folder pages */}

If PostgreSQL 16 is already on the server, the launcher shows a green checkmark next to the database button. If you start a new PostgreSQL installation anyway, the launcher warns you that PostgreSQL is already installed at a given location and asks you to confirm.

If you continue to the application without PostgreSQL, the launcher shows "PostgreSQL has not been detected on this host. In order to run Netwrix Privilege Secure PostgreSQL is required, are you sure you wish to continue the installation?"

:::warning
Install the database before you install the application.
:::

### Install the application

1. In the launcher, click **Netwrix Privilege Secure Setup**.
2. In the setup wizard, select the license agreement checkbox ("I agree to the license terms and conditions"). Click **Options**.
3. In **Install Folder**, keep the default `C:\Program Files\Stealthbits\PAM` or click **Browse** to change it. Click **OK**.
4. Click **Install**. The installation takes a few minutes.
5. When the installation finishes, click **Close**.
6. When the launcher shows "Reboot Server Now", click **OK** to restart the server.

{/* TODO screenshot: the Netwrix Privilege Secure Setup wizard license agreement, options, and completion pages */}

The installer creates the "SbPAM Web Service" site in IIS on HTTPS port 6500 and a Windows Firewall exception for that port. It also adds a desktop shortcut named **Netwrix Privilege Secure** that opens `https://localhost:6500`.

To continue, see [Run the setup wizard](/docs/privilegesecure/26_07/install/first-launch).

## Install the application without the launcher

Run `NPS.exe` from the `Extras` folder as an administrator and follow the steps in [Install the application](#install-the-application), starting at step 2. Install PostgreSQL first with `NetwrixPostgreSQL16.exe` from the same folder, or point Privilege Secure at an existing database with the Database Configuration Tool.

To install without the wizard, see [Install silently](/docs/privilegesecure/26_07/install/silent-install).

## Upgrade an existing installation

When the launcher detects an existing installation, the application button reads **Netwrix Privilege Secure Upgrade**. When the installed version matches the installer, it reads **Uninstall/Repair Netwrix Privilege Secure**. Before you upgrade, read [Upgrade Privilege Secure](/docs/privilegesecure/26_07/install/upgrade).

If the launcher finds an existing installation, it asks you to click **OK** to apply an upgrade. It then stops the Privilege Secure services and IIS, uninstalls the old version, and installs the new one. You don't uninstall the previous version first.

## Migrate PostgreSQL 12 to PostgreSQL 16

If the server runs PostgreSQL 12, the launcher shows two database steps. See [Upgrade PostgreSQL from 12 to 16](/docs/privilegesecure/26_07/install/upgrade#upgrade-postgresql-from-12-to-16).

## Switch to SQL Server

The launcher can switch Privilege Secure from PostgreSQL to a Microsoft SQL Server database that you provide. The launcher doesn't install SQL Server.

:::warning
SQL Server is an advanced configuration that requires additional support from Netwrix. Contact Netwrix Support before you switch.
:::

1. In the launcher, click **Switch to SQL Server**.
2. Read the message "Switching the database will switch your active database configuration. Are you sure you wish to continue?" Confirm the prompt to continue.
3. If you need SQL Server software, click **Download SQL Server (if needed)**. This opens the Microsoft download page.
4. Install SQL Server, install Privilege Secure, and then point it at the SQL Server database with the Database Configuration Tool, which can also create the database.

For a first installation with SQL Server, the launcher steps are: install any missing prerequisites, install Netwrix Privilege Secure, and run the setup wizard. To go back, click **Switch to PostgreSQL**.

{/* TODO verify: the button labels and dialog buttons when you switch databases. The 26.03 pages say an Advanced checkbox offers the switch. */}

To point an installed Privilege Secure at a local or remote database, use the Netwrix Privilege Secure Database Configuration Tool. The `NPS.DbCfg.msi` file in the `Extras` folder installs it. The tool lets you choose the active database and enter the type, host, port, name, user, and password. It also lets you test the connection and save.

By default, the database settings point to the local server: PostgreSQL on port 5432 or SQL Server on port 1433, with the database name `PAM`.

{/* TODO verify: the bundled PostgreSQL port on a fresh install. The code uses 5432 in the launcher settings and 5437 elsewhere. */}

## If the installer can't reach the database

When the installer can't reach the database, for example a remote database, it still completes. It writes the error to `ImportActivities.log` in the Privilege Secure log folder under `C:\ProgramData\Stealthbits\PAM`.

{/* TODO verify: the folder name for ImportActivities.log (Log or Logs). */}

If the database wasn't reachable during installation, check the log and fix the connection. Contact Netwrix Support if the default activities are missing after you do.

{/* TODO verify: that running the installer again, or running SbPAM.DbUpdater.exe, imports the default activities after a failed first attempt. */}
