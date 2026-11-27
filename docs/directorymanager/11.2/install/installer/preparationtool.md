---
title: "Run the Directory Manager Preparation Tool"
description: "Run the Preparation Tool to install the prerequisite software and Windows features that Directory Manager 11.2 requires on a server."
keywords:
  - Directory Manager Preparation Tool
  - Directory Manager prerequisites
  - install prerequisite software
  - run Preparation Tool on existing server
sidebar_position: 10
---

# Run the Directory Manager Preparation Tool

The Preparation Tool installs all prerequisite software on a machine to prepare it for Directory
Manager.

## Run the Preparation Tool for the first time on a fresh machine

To run the Directory Manager Preparation Tool:

1. Open the Directory Manager 11.2 Prerequisites Tool folder in the Directory Manager installation
   package.
2. Run the DirectoryManagerPrereqTool.exe file. It launches the Preparation Tool.

   ![Preparation Tool Welcome page with the Next button](/images/directorymanager/11.2/install/installer/welcome.webp)

3. Read the welcome message and click **Next**.

   ![Ready to Begin page listing the required software and Windows features](/images/directorymanager/11.2/install/installer/readytobegin.webp)

4. Review the Ready to Begin page. It lists the required software and Windows features that the
   Preparation Tool has identified for Directory Manager. Click **Install** to begin.

   ![Preparation page with a progress bar showing prerequisite installation](/images/directorymanager/11.2/install/installer/wearepreparing.webp)

5. On the preparation page, watch the progress bar while the Preparation Tool installs the
   prerequisites.

   ![Ready to Install page showing Passed or Failed status for each prerequisite](/images/directorymanager/11.2/install/installer/readytoinstall.webp)

   The You are ready to install Directory Manager! page displays the status of each prerequisite
   software and Windows feature as Passed or Failed.

   Expand the node for a prerequisite to view its details.

   - A Passed prerequisite has one of these statuses:
     - was already installed (no action taken)
     - Configured Successfully
   - For a Failed prerequisite, read the message and take the appropriate action. Then click
     **Retry** to verify whether the prerequisite has been installed.

6. After viewing the information, click **Close**.

   If you are installing the prerequisites for the first time, a message to restart the machine
   appears. Click **OK** to restart.

## Run the Preparation Tool on an existing Directory Manager server

If an earlier version of Directory Manager 11 is installed on a machine, check the installed
prerequisites before you run the Preparation Tool. Ensure that no version other than the following
prerequisite versions is installed. Otherwise, uninstall the other versions manually:

- Microsoft .NET Desktop Runtime 10.0.10
- Microsoft ASP.NET Core Hosting Bundle 10.0.10
- Microsoft Access Database Engine 2016
- Microsoft Access Database Engine version later than 2016
- PowerShell 7.6.3
- Exchange Online Management 3.10.1

  If a higher version is installed, uninstall it using the following cmdlet:

  `uninstal-Module-Name exchangeonlinemanagement -force`

- Microsoft Edge WebView2 Runtime

  :::note
  If you need to rerun the Preparation Tool, uninstall this component first.
  :::

After uninstalling the prerequisites, follow the steps in the
[Run the Preparation Tool for the first time on a fresh machine](#run-the-preparation-tool-for-the-first-time-on-a-fresh-machine)
section.
