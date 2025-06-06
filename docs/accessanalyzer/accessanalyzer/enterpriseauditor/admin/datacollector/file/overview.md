# File Data Collector

The File Data Collector provides file and folder enumeration, properties, and permissions. It is used to find files and folders on a target host. The File Data Collector finds one or more files on the target hosts. It can target any file extension. This data collector is a core component of Access Analyzer and is available with all Access Analyzer licenses.

__NOTE:__ For enhanced file system data collections, use the [FileSystemAccess Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/overview.md).

Supported Platforms

This data collector can target the same servers supported for the FileSystemAccess Data Collector. See the [File System Supported Platforms](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/filesystems.md) topic for a full list of supported platforms.

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

The __File__ Data Collector is configured through the File Search Wizard, which contains the following wizard pages:

- Welcome
- [File: Category](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/file/category.md)
- [File: Target Files](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/file/targetfiles.md)
- [File: Results](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/file/results.md)
- [File: Summary](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/file/summary.md)

![File Search Wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the __Do not display this page the next time__ checkbox when the wizard is open and configuration settings are saved.
