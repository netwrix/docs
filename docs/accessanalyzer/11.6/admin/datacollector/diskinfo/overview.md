---
title: "DiskInfo Data Collector"
description: "DiskInfo Data Collector"
sidebar_position: 100
---

# DiskInfo Data Collector

The DiskInfo Data Collector provides enumeration of disks and their associated properties. When
targeting the local host for a DiskInfo query, it is necessary to select the **Systems Default**
option as the connection profile. This data collector is a core component of Enterprise Auditor and
is available with all Enterprise Auditor licenses.

**Protocols**

- RPC
- WMI

**Ports**

- TCP 135
- Randomly allocated high TCP ports

**Permissions**

- Member of the local Administrators group

## DiskInfo Query Configuration

The DiskInfo Data Collector is configured through the Disk Info wizard, which contains the following
wizard pages:

- Welcome
- [DiskInfo: Target Disks](/docs/accessanalyzer/11.6/admin/datacollector/diskinfo/targetdisks.md)
- [DiskInfo: Results](/docs/accessanalyzer/11.6/admin/datacollector/diskinfo/results.md)
- [DiskInfo: Summary](/docs/accessanalyzer/11.6/admin/datacollector/diskinfo/summary.md)

![Disk Info wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/diskinfo/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
