# File Data Collector

The File Data Collector provides file and folder enumeration, properties, and permissions. It is
used to find files and folders on a target host. The File Data Collector finds one or more files on
the target hosts. It can target any file extension. This data collector is a core component of
Enterprise Auditor and is available with all Enterprise Auditor licenses.

**NOTE:** For enhanced file system data collections, use the
[FileSystemAccess Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/fsaa/overview.md).

Supported Platforms

This data collector can target the same servers supported for the FileSystemAccess Data Collector.
See the
[File System Supported Platforms](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/target/filesystems.md)
topic for a full list of supported platforms.

Protocols

- RPC
- WMI

Ports

- TCP 135-139
- Randomly allocated high TCP ports
- Optional TCP 445

Permissions

- Member of the Local Administrators group

## File Query Configuration

The **File** Data Collector is configured through the File Search Wizard, which contains the
following wizard pages:

- Welcome
- [File: Category](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/file/category.md)
- [File: Target Files](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/file/targetfiles.md)
- [File: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/file/results.md)
- [File: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/file/summary.md)

![File Search Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
