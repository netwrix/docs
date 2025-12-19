---
title: "File Data Collector"
description: "File Data Collector"
sidebar_position: 210
---

# File Data Collector

The File Data Collector provides file and folder enumeration, properties, and permissions. It is
used to find files and folders on a target host. The File Data Collector finds one or more files on
the target hosts. It can target any file extension. This data collector is a core component of
Enterprise Auditor and is available with all Enterprise Auditor licenses.

:::note
For enhanced file system data collections, use the
[FileSystemAccess Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/overview.md).
:::


**Supported Platforms**

This data collector can target the same servers supported for the FileSystemAccess Data Collector.
See the
[File System Supported Platforms](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/filesystems.md)
topic for a full list of supported platforms.

**Protocols**

- RPC
- WMI

**Ports**

- TCP 135-139
- Randomly allocated high TCP ports
- Optional TCP 445

**Permissions**

- Member of the Local Administrators group

## File Query Configuration

The **File** Data Collector is configured through the File Search Wizard, which contains the
following wizard pages:

- Welcome
- [File: Category](/docs/accessanalyzer/11.6/admin/datacollector/file/category.md)
- [File: Target Files](/docs/accessanalyzer/11.6/admin/datacollector/file/targetfiles.md)
- [File: Results](/docs/accessanalyzer/11.6/admin/datacollector/file/results.md)
- [File: Summary](/docs/accessanalyzer/11.6/admin/datacollector/file/summary.md)

![File Search Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/file/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
