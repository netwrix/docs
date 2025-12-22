---
title: "DiskInfo: Results"
description: "DiskInfo: Results"
sidebar_position: 20
---

# DiskInfo: Results

The Results page provides a checklist of the data that is available for return by the query. Any
number of options can be selected at once, but at least one must be selected in order to complete
the wizard.

![Disk Info wizard Results page](/images/accessanalyzer/12.0/admin/datacollector/diskinfo/results.webp)

Properties can be selected individually, or you can use the **Select all** and **Clear all**
buttons. The table below describes the available options.

| Checklist Result              | Description                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| DriveLetter                   | Drive Letter of the drive being scanned                                                                             |
| GBDiskFreeSpace               | Total amount of free space on the scanned drive in GB                                                               |
| GBDiskSize                    | Total size of scanned disk in GB                                                                                    |
| MBDiskFreeSpace               | Total amount of free space on the scanned drive in MB                                                               |
| MBDiskSize                    | Total size of scanned disk in MB                                                                                    |
| PercentFree                   | Percentage of the scanned drive that is free                                                                        |
| VolumeLabel                   | Name of drive (if it exists)                                                                                        |
| FileSystemType                | Type of FileSystem configuration. This can include NTFS, FAT(12, 16, 32) and others                                 |
| DiskType                      | Kind of disk that is being used. These can include fixed, removable, shared, and so on.                             |
| ClusterSizer                  | If scanning a disk that is part of a cluster, this indicates the total size of the cluster that the disk is part of |
| FilePercentFragmentation      | Percent of used disk space that shows fragmentation                                                                 |
| FreeSpacePercentFragmentation | Percentage of free space on the disk that shows fragmentation                                                       |
| TotalPercentFragmentation     | Percentage of total disk space that shows fragmentation                                                             |
