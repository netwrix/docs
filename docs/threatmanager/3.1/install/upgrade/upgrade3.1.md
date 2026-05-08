---
title: "Upgrade Threat Manager from 3.0 to 3.1"
description: "Upgrade Threat Manager from 3.0 to 3.1"
sidebar_position: 30
---

# Upgrade Threat Manager from 3.0 to 3.1

The upgrade process from Threat Manager 3.0 to 3.1 involves the following steps:

- Upgrade PostgreSQL

- Install Threat Manager 3.1

## Upgrade PostgreSQL

To upgrade from PostgreSQL 14.13.x to 14.20.x:

**Step 1 –** Run `Netwrix_Setup.exe` as an administrator. The Netwrix Setup Launcher window opens.

![Netwrix Threat Manager Setup window](/images/threatmanager/3.1/install/upgrade/setup-launcher.webp)

**Step 2 –**  Click **PostgreSQL Setup** to upgrade the PostgreSQL version. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard](/images/threatmanager/3.1/install/upgrade/postgres-initial.webp)

**Step 3 –**  Click **PostgreSQL Setup** to upgrade the PostgreSQL version. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard on the EULA page](/images/threatmanager/3.1/install/upgrade/postgres-eula.webp)

**Step 4 –** Read the End User License Agreement, select the acceptance checkbox, and click **Next**.

**Step 5 –** The installation begins and the installer displays a Setup Progress window. Click Exit
when the installation is successful to close the wizard.

The PostgreSQL upgrade is complete.

:::note
If you have any antivirus or Endpoint Detection and Response (EDR) software installed on
your machine, ensure you have excluded all of the files from the following directories from all
antivirus scans:
:::


- \Program Files\Stealthbits\PostgreSQL14
- \ProgramData\Stealthbits\PostgreSQL14
- \Program Files\Stealthbits\StealthDEFEND

PostgreSQL may fail to start or behave unexpectedly if any tool monitors it.

## Install Threat Manager 3.1

**Step 1 –** Click the Netwrix Threat Manager **Setup** button on the Netwrix Threat Manager setup
window. The following window is displayed:

![Install Threat Manager 3.1 Page](/images/threatmanager/3.1/install/upgrade/ntm-initial.webp)

**Step 2 –** Click **Install**.

![Install Netwrix Threat Manager 3.1 page](/images/threatmanager/3.1/install/upgrade/ntm-eula.webp)

**Step 3 –** Review and accept the licensing agreement on the End User License Agreement page,
and then click **Next**.

![Threat Manager 3.1 Defalt Setup Folder](/images/threatmanager/3.1/install/upgrade/ntm-location.webp)

**Step 4 –** By default, the installer sets the installation directory to:

**C:\Program Files\STEALTHbits\StealthDEFEND\**

Enter a new path or use the Browse button to modify it. Click **Next**.

![Connect to a Threat Manager Database page](/images/threatmanager/3.1/install/upgrade/ntm-db.webp)

**Step 5 –** On the database page, ensure the host and port are set correctly.

:::note
If installing on the same server where the PostgreSQL database application was installed,
this information will be accurate by default. The default database name is stealthdefend; however,
it can be modified as desired.
:::


**Step 6 –** Click **Test** to validate the connection information.

**Step 7 –** After successful validation, click **Next**.

![Firewall Rules Page of Threat Manager Installation wizard](/images/threatmanager/3.1/install/upgrade/ntm-opts.webp)

**Step 8 –** By default, the installer will Create Inbound Windows Firewall Rules. Deselect the
checkbox if you don't want the installer to automatically create these rules, because you have
already created them. The installer will also by default install AD and Entra PowerShell modules. Click **Next**.

![Threat Manager Installation Progress page](/images/threatmanager/3.1/install/upgrade/ntm-progress.webp)

**Step 9 –** The installation process begins and the Setup wizard displays the progress.

![Threat Manager 3.1 Installed Successfully page](/images/threatmanager/3.1/install/upgrade/ntm-success.webp)

**Step 10 –** Click **Exit** when the installation completes successfully. The Netwrix Threat
Manager Setup wizard closes.

**Step 11 –** After installing both components, close the Netwrix Threat Manager Setup
Launcher.

Threat Manager 3.1 is now installed, and the database upgrade is complete.

:::info
After successfully upgrading to the latest Threat Manager version, clear your
browser cache for better performance and user experience.

:::
