---
title: "DiskInfo: Target Disks"
description: "DiskInfo: Target Disks"
sidebar_position: 10
---

# DiskInfo: Target Disks

The Target Disks page provides a selection of storage devices from which to return data from the
target host after a query.

![Disk Info wizard Target Disks page](/images/accessanalyzer/11.6/admin/datacollector/diskinfo/targetdisks.webp)

Use the options to select the desired target disk.

- The Enumerate all storage devices – Allows all internal drives to be scanned. In order to expand
  the scan, two sub-options can be included together, separately, or not at all.

    - Include removable storage devices – Scans removable devices that are plugged into the target
      host
    - Include network storage devices – Scans mapped drives that exist through a connected network

- Single drive letter – Allows information to be collected from a single drive (`A:` through `Z:`)
  during a single query. This option includes both operating system drives and removable disks.
- Enumerate all mount points (available for Windows 2003+ systems) – Targets any drive letter on the
  target host that points to a mapped share drive
- Registry lookup – Provides the path of connection to gather information from the Enterprise
  Auditor Registry Browser. By default, the local host will be targeted unless modified. The
  Registry value are instructions for the data found within the subfolders of the registry.

    - The browse button **(…)** under the Registry lookup option opens the Enterprise Auditor
      Registry Browser window. Use the registry browser to find registry keys and values that are on
      a target host in the environment. See the
      [DiskInfo: Registry Browser](#diskinfo-registry-browser) topic for additional information.

## DiskInfo: Registry Browser

Clicking the browse button on the Target Disks wizard page opens the Enterprise Auditor Registry
Browser. Use this page to find registry keys and values that exist on a target host in the
environment.

![Registry Browser](/images/accessanalyzer/11.6/admin/datacollector/diskinfo/registrybrowser.webp)

The configurable options on the Registry Browser are:

- Sample from Host – Host for which the Registry will be browsed. If this box is left blank, the
  Registry on the local host is used.
- 64-bit view – Default view is 32-bit. Select the 64-bit checkbox to switch to a 64-bit view.
- Connect – Click **Connect** to browse the Registry
- Table Columns – Select the Registry from the navigation pane to view keys in the table

    - Name – Registry key value
    - Type – Key value type
    - Data – Key value path
