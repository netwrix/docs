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

Directory Manager generates logs for its services, clients, and Windows events. It saves them at different locations on the network. Instead of locating these log files in their folders, you can collect the logs you need and dump them to a location you choose.

## Get log files

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Directory Manager Settings** page, click the **Logs** tab.
3. On the **Applications** card, select the checkboxes for the Directory Manager services and portals that you want to fetch logs for. To select all options, select the **Select All** checkbox on the card.

    Each application has a _file logging_ level. Directory Manager fetches the log files generated for file logging.

    - For applications deployed in native IIS, logs are fetched from the Directory Manager server.
    - For applications deployed in remote IIS, logs are fetched from the remote IIS machine.
    - For applications deployed in Docker, logs are fetched from the machine running the Docker daemon.

4. On the **Tools & Management Shell** card, select the checkboxes for Management Shell and the Directory Manager tools that you want to fetch logs for. To select all options, select the **Select All** checkbox on the card.

    Logs are fetched from the local machine. If you haven't used Management Shell or a tool on the machine, its logs aren't available.

5. On the **Event Viewer** card, select the **Event Viewer** checkbox to enable the **Logs** button.
6. Click **Logs**.

    The **Select Event Viewer Logs** dialog box displays all logs maintained by Windows Event Viewer on the local machine.

7. Select the checkboxes for the logs you need and click **OK**.
8. Click **Download**.

    Directory Manager creates a zipped file containing the selected logs. It saves the file to the download location set in your browser settings.
