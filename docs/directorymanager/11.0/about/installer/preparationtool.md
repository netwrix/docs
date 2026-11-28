---
title: "Run the GroupID Preparation Tool"
description: "Run the Preparation Tool to install the prerequisite software and Windows features that GroupID 11.0 requires on a server."
keywords:
  - GroupID Preparation Tool
  - GroupID prerequisites
  - install prerequisite software
  - run Preparation Tool on existing server
sidebar_position: 10
---

# Run the GroupID Preparation Tool

The Preparation Tool installs all prerequisite software on a machine to prepare it for GroupID.

What do you want to do?

- [Run the Preparation Tool for the First Time on a Fresh Machine](#run-the-preparation-tool-for-the-first-time-on-a-fresh-machine)
- [Run the Preparation Tool on an Existing GroupID Server](#run-the-preparation-tool-on-an-existing-groupid-server)

## Run the Preparation Tool for the First Time on a Fresh Machine

To run the GroupID Preparation Tool:

1. Open the **GroupID 11 Prerequisites Tool** folder in the GroupID installation package.
2. Run the _directorymanagerPrereqTool.exe_ file. It launches the Preparation Tool.

    ![Preparation Tool Welcome page with the Next button](/images/directorymanager/11.0/install/installer/welcome.webp)

3. Read the welcome message and click **Next**.

    ![Ready to Begin page listing the required software and Windows features](/images/directorymanager/11.0/install/installer/ready_to_begin.webp)

4. The **Ready to begin** page lists the required software and Windows features that the Preparation
   Tool has identified for GroupID.
   Click **Install** to begin.

    ![Preparation page with a progress bar showing prerequisite installation](/images/directorymanager/11.0/install/installer/wearepreparing.webp)

5. On the **We are preparing this machine for GroupID ...** page, the progress bar shows the
   installation progress while the prerequisites are installed.

    ![Ready to Install page showing Passed or Failed status for each prerequisite](/images/directorymanager/11.0/install/installer/ready_to_install.webp)

    The **You are ready to install GroupID!** page displays the status of each prerequisite software
    and Windows feature as _Passed_ or _Failed_.

    Expand the node for a prerequisite to view its details.

    - A Passed prerequisite has one of these statuses:

        - was already installed (no action taken)
        - Configured Successfully

    - For a Failed prerequisite, read the message and take the appropriate action. Then
      click **Retry** to verify whether the prerequisite has been installed.

6. After viewing the information, click **Close**.

    If you are installing the prerequisites for the first time, a message to restart the machine
    appears. Click **OK** to restart.

## Run the Preparation Tool on an Existing GroupID Server

If you have an earlier version of GroupID 11.0 installed on a machine, then before running the
Preparation Tool, ensure that no version other than the following prerequisite versions is installed.
Otherwise, uninstall the other versions manually:

- Microsoft .NET Desktop Runtime 6.0.30
- Microsoft ASP.NET Core Hosting Bundle 6.0.30
- Microsoft Access Database Engine 2016
- Microsoft Access Database Engine version later than 2016
- PowerShell 7.3.6
- Exchange Online Management versions from 3.2.0 to 3.4.0

    If a higher version is installed, uninstall it using the following cmdlet:

    `uninstal-Module-Name exchangeonlinemanagement -force`

- Microsoft Edge WebView2 Runtime

    :::note
    If you need to rerun the Preparation Tool, uninstall this component first.
    :::

After uninstalling the prerequisites, follow the steps in the
[Run the Preparation Tool for the First Time on a Fresh Machine](#run-the-preparation-tool-for-the-first-time-on-a-fresh-machine)
section.

See Also

- [Software the GroupID Preparation Tool Installs](/docs/directorymanager/11.0/about/installer/whatprepinstall.md)
- [GroupID Installation Tools and Upgrade Cases](/docs/directorymanager/11.0/about/installer/installer.md)
