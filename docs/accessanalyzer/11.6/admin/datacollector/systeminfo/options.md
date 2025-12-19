---
title: "SystemInfo: Options"
description: "SystemInfo: Options"
sidebar_position: 80
---

# SystemInfo: Options

The Options page contains options for the Files Shares category. It is a wizard page for the
categories of:

- File Shares
- Network Interface (NIC)
- Open File Shares

:::note
This is a legacy feature, as it is more efficient to use the **FileSystemAccess** (FSAA)
Data Collector to gather this information.
:::


## File Shares and Open File Shares

For the File Shares and Open File Shares categories:

![System Info Data Collector Wizard Options page for File Shares category](/images/accessanalyzer/11.6/admin/datacollector/systeminfo/optionsfileshares.webp)

Select from the following options to control the depth of processing and the amount of information
to be returned by the query:

- Include file level permissions

    - Do not collect inherited file permissions

        - Return All Folders

- Enumerate subfolders within shared folders

    - Limit returned subfolders depth to – Specify the number of levels

- Size units for corresponding properties – Select the desired size unit:

    - Bytes
    - KBytes
    - Mbytes
    - GBytes

## Network Interface (NIC)

For the Network Interface (NIC) category:

![System Info Data Collector Wizard Options page for NIC category](/images/accessanalyzer/11.6/admin/datacollector/systeminfo/optionsnic.webp)

The configurable option is:

- Show primary IP address only – Select this checkbox to return data for the primary network
  interface only
