---
sidebar_position: 5976
title: File Data Collector
---

# File Data Collector

The File Data Collector provides file and folder enumeration, properties, and permissions. It is used to find files and folders on a target host. The File Data Collector finds one or more files on the target hosts. It can target any file extension. This data collector is a core component of Access Analyzer and is available with all Access Analyzer licenses.

**NOTE:** For enhanced file system data collections, use the [FileSystemAccess Data Collector](../FSAA/Overview "FileSystemAccess Data Collector").

Supported Platforms

This data collector can target the same servers supported for the FileSystemAccess Data Collector. See the [File System Supported Platforms](../../../Requirements/Target/FileSystems "File System Supported Platforms") topic for a full list of supported platforms.

Protocols

* RPC
* WMI

Ports

* TCP 135-139
* Randomly allocated high TCP ports
* Optional TCP 445

Permissions

* Member of the Local Administrators group

## File Query Configuration

The **File** Data Collector is configured through the File Search Wizard, which contains the following wizard pages:

* Welcome
* [File: Category](Category "File: Category")
* [File: Target Files](TargetFiles "File: Target Files")
* [File: Results](Results "File: Results")
* [File: Summary](Summary "File: Summary")

![File Search Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/File/Welcome.png "File Search Wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox when the wizard is open and configuration settings are saved.