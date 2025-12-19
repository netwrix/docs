---
title: "Preparation Tool"
description: "Preparation Tool"
sidebar_position: 10
---

# Preparation Tool

The preparation tool installs all prerequisites software on a machine to prepare it for Directory
Manager.

## Run the Preparation Tool first time on a fresh machine

To run the Directory Manager preparation tool:

Step 1 – Open Directory Manager 11.1 Prerequisites Tool folder from the Directory Manager
Installation package.

Step 2 – Run directorymanagerPrereqTool.exe file. It launches the Preparation Tool.

![Preparation Tool Welcome page](/images/directorymanager/11.1/install/installer/welcome.webp)

Step 3 – Read the welcome message and click **Next**.

![Ready to Begin page](/images/directorymanager/11.1/install/installer/readytobegin.webp)

Step 4 – The Ready to begin page lists the required software and Windows features that the
Preparation Tool has identified for Directory Manager. Click **Install** to begin.

![We are preparing page](/images/directorymanager/11.1/install/installer/wearepreparing.webp)

Step 5 – On the We are preparing this machine for Directory Manager... page the progress bar shows
the installation progress while prerequisites are installed.

![Ready to install](/images/directorymanager/11.1/install/installer/readytoinstall.webp)

The You are ready to install GroupID! page displays the status of each prerequisite software and
Windows feature as Passed or Failed.

Expand the node for a perquisite to view its details.

- A Passed prerequisite has one of these statuses:

    - was already installed (no action taken)
    - Configured Successfully

- For a Failed prerequisite, read the given message and take appropriate action. That done, click
  **Retry** to verify whether the prerequisite has been installed.

Step 6 – After viewing the information, click **Close**.

If you are installing the prerequisites for the first time, a message to restart the machine is
displayed. Click **OK** to restart.

## Run the Preparation Tool on a Directory Manager server

If you have an earlier version of Directory Manager 11.0 installed on a machine, then before running
the preparation tool make sure no other version of the following prerequisite than the mentioned
below is installed, otherwise uninstall them manually:

- Microsoft .NET Desktop Runtime 8.0.8
- Microsoft ASP.NET Core Hosting Bundle 8.0.8
- Microsoft Access Database Engine 2016
- Microsoft Access Database Engine version later to 2016
- PowerShell 7.4.6
- Exchange Online Management versions from 3.2.0 to 3.4.0

    If a higher version is installed, uninstall that using the following cmdlet:

    `uninstal-Module-Name exchangeonlinemanagement -force`

- Microsoft Edge Webview2 Rnntime

    :::note
    If you need to re-run the preparation tool, uninstall this component first.
    :::


After uninstalling the prerequisites, follow the steps given in the Run the Preparation Tool first
time on a fresh machine section above.
