---
title: "Upgrade Threat Manager from 2.8 to 3.0"
description: "Upgrade Threat Manager from 2.8 to 3.0"
sidebar_position: 20
---

# Upgrade Threat Manager from 2.8 to 3.0

The upgrade process from Threat Manager 2.8 to 3.0 involves the following steps:

- Upgrade PostgreSQL

- Install Threat Manager 3.0

## Upgrade PostgreSQL

Follow the steps to upgrade from PostgreSQL 14.8.x to 14.13.x.

**Step 1 –** Run `Netwrix_Setup.exe` as an administrator. The Netwrix Setup Launcher window is
displayed.

![Netwrix Threat Manager Setup window](/images/threatprevention/7.5/install/upgrade/tm3installation.webp)

**Step 2 –** Click **PostgreSQL Setup** to upgrade the PostgreSQL version. The following message is
displayed, indicating the currently installed version:

![Threat Manager Reporting - Upgrade DB Confirmation dialog box](/images/threatprevention/7.5/install/upgrade/upgradedbprompt.webp)

**Step 3 –** Click **OK** to upgrade. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard](/images/threatmanager/3.0/install/installdb1.webp)

**Step 4 –** Click **Install**.

![Netwrix PostgreSQL Setup wizard on the EULA page](/images/activitymonitor/8.0/install/eula.webp)

**Step 5 –** Read the End User License Agreement and select the I accept the license agreement checkbox. Click Next.

**Step 6 –** The installation begins and the installer displays a Setup Progress window. Click Exit
when the installation is successful to close the wizard.

PostgreSQL has been upgraded.

:::note
If you have any antivirus or Endpoint Detection and Response (EDR) software installed on
your machine, make sure you have excluded all of the files from the following directories from all
antivirus scans:
:::


- \Program Files\Stealthbits\PostgreSQL14
- \ProgramData\Stealthbits\PostgreSQL14
- \Program Files\Stealthbits\StealthDEFEND

PostgreSQL may fail to start or behave unexpectedly when monitored by any tool.

## Install Threat Manager 3.0

**Step 1 –** Click the Netwrix Threat Manager **Setup** button on the Netwrix Threat Manager setup
window. The following message displays:

![Existing Threat Manager version message](/images/threatmanager/3.0/install/existingtmvver.webp)

**Step 2 –** Click **OK**. The following window is displayed:

![Install Threat Manager 3.0 Page](/images/threatmanager/3.0/install/installtm3.0.webp)

**Step 3 –** Click **Install**.

![Install Netwrix Threat Manager 3.0 page](/images/threatmanager/3.0/install/tm3eula.webp)

**Step 4 –** On the End User License Agreement page, review and accept the licensing agreement and
then click **Next**.

![Threat Manager 3.0 Defalt Setup Folder](/images/threatmanager/3.0/install/tm3defaultfolder.webp)

**Step 5 –** By default, the installation directory is set to:

**C:\Program Files\STEALTHbits\StealthDEFEND\**

Enter a new path or use the Browse button to modify as desired. Click **Next**.

![Connect to a Threat Manager Database page](/images/threatmanager/3.0/install/tmdatababse.webp)

**Step 6 –** On the database page, ensure the host and port are set correctly.

:::note
If installing on the same server where the PostgreSQL database application was installed,
this information will be accurate by default. The default database name is stealthdefend; however,
it can be modified as desired.
:::


**Step 7 –** Click **Test** to validate the connection information.

**Step 8 –** After successful validation, click **Next**.

![Firewall Rules Page of Threat Manager Installation wizard](/images/threatmanager/3.0/install/firewallrules.webp)

**Step 9 –** By default, the installer will Create Inbound Windows Firewall Rules. Deselect the
checkbox if you do not want the installer to automatically create these rules, because you have
already created them. Click **Next**.

![Threat Manager Installation Progress page](/images/threatmanager/3.0/install/installprogress.webp)

**Step 10 –** The installation process will begin and the Setup wizard will display the progress.

![Threat Manager 3.0 Installed Successfully page](/images/threatmanager/3.0/install/completed.webp)

**Step 11 –** Click **Exit** when the installation completes successfully. The Netwrix Threat
Manager Setup wizard closes.

**Step 12 –** Now that both components have been installed, close the Netwrix Threat Manager Setup
Launcher.

Threat Manager 3.0 is now installed, and the database has been upgraded.

:::info
After successfully upgrading to the latest Threat Manager version, clear your
browser cache for better performance and user experience.

:::
