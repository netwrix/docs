---
title: "File System Reports"
description: "File System Reports"
sidebar_position: 20
---

# File System Reports

File System reports are accessed through the Resource Audit interface. Explore the file system
resources by expanding the levels within the Resources pane and selecting the desired resource. The
data within these reports is collected by the Enterprise Auditor File System solution. See the File
System Solution topic in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

:::note
In order to populate the NFS resources within the reports, the **.Active Directory
Inventory** job group must be configured to collect the `uid` and `uidNumber` attributes for user
objects. See the NFS Permissions for the Access Information Center topic in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for more information.
:::


File System resource reports identify the following information in the targeted file system
environment:

- What shares exist across the organization
- What permissions users and groups have on those shares
- How it all translates into effective access
- What users are doing on shares across the file system environment
- What potentially sensitive data exists across the targeted environment

If the File System DFS Auditing collection jobs are also in use, the DFS Namespaces will show at the
server level of the Resources pane with the DFS shares on the next level down the tree.

File System reports fall into the following categories:

- Access Reports

    - Report on permissions, effective access, and exceptions
    - Data collected by the Enterprise Auditor File System Access Auditing collection jobs

- Activity Reports

    - Report on monitored activity and alerts
    - Data collected by the Enterprise Auditor File System Activity Auditing collection jobs
    - Display information for a selected date range with local time stamps
    - Some of the reports also include trend graphs. Trend graphs provide a visual representation of
      the activity that occurred over the selected date range. See the
      [Activity Report Results Pane Features](/docs/accessinformationcenter/11.6/resourceaudit/navigate/overview.md#activity-report-results-pane-features)
      topic for instructions on selecting a date range and filtering the trend graphs.
    - Activity information is represented in two ways:

        - Activity Statistics – Statistics reports show the count of operation events performed for
          the selected resource within the selected date range. These events are normalized into the
          operations of Reads, Writes, Deletes, and Manages.
        - Activity Details – Details reports show the specific operation events that occurred for
          the selected resource within the selected date range

- Sensitive Content Reports

    - Report on files with potentially sensitive data
    - Data collected by the Enterprise Auditor File System Sensitive Data Discovery Auditing
      collection jobs

- NFS Export Reports

    - Reports on NFS shares
    - Data collected by the Enterprise Auditor File System Sensitive Data Discovery Auditing
      collection jobs

        - The **1-SEEK System Scans** job must be configured for NFS Exports

The following reports are available at the **File System** node:

- [Activity Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/filesystem/activitysummary.md)
- [Exceptions Report](/docs/accessinformationcenter/11.6/resourceaudit/filesystem/exceptions.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/filesystem/sensitivecontentsummary.md)
- [Server Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/filesystem/serversummary.md)
