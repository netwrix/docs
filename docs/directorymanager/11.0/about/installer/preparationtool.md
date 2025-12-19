---
title: "Preparation Tool"
description: "Preparation Tool"
sidebar_position: 10
---

# Preparation Tool

The preparation tool installs all prerequisites software on a machine to prepare it for GroupID.

What do you want to do?

- [Run the Preparation Tool first time on a fresh machine](#run-the-preparation-tool-first-time-on-a-fresh-machine)
- [Run the Preparation Tool on an existing GroupID server](#run-the-preparation-tool-on-an-existing-groupidserver)

## Run the Preparation Tool first time on a fresh machine

To run the GroupID preparation tool:

1. Open **GroupID 11 Prerequisites Tool** folder from the GroupID Installation package.
2. Run _directorymanagerPrereqTool.exe_ file. It launches the Preparation Tool.

    ![Preparation Tool Welcome page](/images/directorymanager/11.0/install/installer/welcome.webp)

3. Read the welcome message and click **Next**.

    ![Ready to Begin page](/images/directorymanager/11.0/install/installer/ready_to_begin.webp)

4. The **Ready to begin** page lists the required software and Windows features that the Preparation
   Tool has identified for GroupID.
   Click **Install** to begin.

    ![We are preparing page](/images/directorymanager/11.0/install/installer/wearepreparing.webp)

5. On the **We are preparing this machine for GroupID ...** page the progress bar shows the
   installation progress while prerequisites are installed.

    ![Ready to install](/images/directorymanager/11.0/install/installer/ready_to_install.webp)

    The **You are ready to install GroupID!** page displays the status of each prerequisite software
    and Windows feature as _Passed_ or _Failed_.

    Expand the node for a perquisite to view its details.

    - A Passed prerequisite has one of these statuses:

        - was already installed (no action taken)
        - Configured Successfully

    - For a Failed prerequisite, read the given message and take appropriate action. That done,
      click **Retry** to verify whether the prerequisite has been installed.

6. After viewing the information, click **Close**.

    If you are installing the prerequisites for the first time, a message to restart the machine is
    displayed. Click **OK** to restart.

## Run the Preparation Tool on an existing GroupID server

If you have an earlier version of GroupID 11.0 installed on a machine, then before running the
preparation tool make sure no other version of the following prerequisite than the mentioned below
is installed, otherwise uninstall them manually:

- Microsoft .NET Desktop Runtime 6.0.30
- Microsoft ASP.NET Core Hosting Bundle 6.0.30
- Microsoft Access Database Engine 2016
- Microsoft Access Database Engine version later to 2016
- PowerShell 7.3.6
- Exchange Online Management versions from 3.2.0 to 3.4.0

    If a higher version is installed, uninstall that using the following cmdlet:

    `uninstal-Module-Name exchangeonlinemanagement -force`

- Microsoft Edge Webview2 Rnntime

    NOTE: If you need to re-run the preparation tool, uninstall this component first.

After uninstalling the prerequisites, follow the steps given in the
[Run the Preparation Tool first time on a fresh machine](#run-the-preparation-tool-first-time-on-a-fresh-machine)
section above.

See Also

- [What does the Preparation Tool Install](/docs/directorymanager/11.0/about/installer/whatprepinstall.md)
- [ Installer](/docs/directorymanager/11.0/about/installer/installer.md)
