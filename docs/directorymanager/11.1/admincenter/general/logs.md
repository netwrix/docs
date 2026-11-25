---
title: "Download Directory Manager Logs from Admin Center"
description: "Collect Directory Manager service, application, tool, and Windows Event Viewer logs and download them as one zipped file."
keywords:
  - Directory Manager logs
  - download log files
  - file logging
  - Event Viewer logs
sidebar_position: 120
---

# Download Directory Manager Logs from Admin Center

Directory Manager generates logs for its services, clients, and Windows events, which are saved at
different locations on the network. Rather than locating these log files in their respective
folders, you can collect and dump your required logs to a desired location.

## Get Log Files

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Directory Manager Settings** page, click the **Logs** tab.
3. On the **Logs** tab:

- On the **Applications** card, select the checkboxes for the Directory Manager services and
  portals that you want to fetch the logs for. To select all options, select the **Select All**
  checkbox on the card.  
  Each application has a _file logging_ level set for it. Log files generated against file logging
  are fetched.

    - For applications deployed in native IIS, logs are fetched from the Directory Manager
      server.
    - For applications deployed in remote IIS, logs are fetched from the remote IIS machine.
    - For applications deployed in Docker, logs are fetched from the machine running the Docker
      daemon.

- On the **Tools & Management Shell** card, select the checkboxes for Management Shell and the
  Directory Manager tools that you want to fetch the logs for. To select all options, select the
  **Select All** checkbox on the card. Logs are fetched from the local machine. If you haven't
  used Management Shell or a tool on the machine, its respective logs aren't available.
- On selecting the **Event Viewer** checkbox on the **Event Viewer** card, the **Logs** button is
  enabled. Click it to launch the **Select Event Viewer Logs** dialog box, which displays all logs
  maintained by Windows Event Viewer on the local machine. Select the checkboxes for the required
  logs and click **OK**.

4. Click **Download**.  
   Directory Manager creates a zipped file containing the selected logs and saves it to the download
   location set in browser settings.