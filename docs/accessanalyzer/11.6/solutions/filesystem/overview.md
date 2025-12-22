---
title: "File System Solution"
description: "File System Solution"
sidebar_position: 130
---

# File System Solution

The File Systems Solution is an auditing, compliance, and governance solution for Windows, NAS,
Unix, and Linux file systems. Key capabilities include effective access calculation, data owner
identification, governance workflows including entitlement reviews and self-service access requests,
sensitive data discovery and classification, open access remediation, least-privilege access
transformation, and file activity monitoring.

File systems and NAS devices contain the vast majority of an organization’s data. Each day, more
data is created and stored in the nooks and crannies of the environment, beyond the sight of the
people charged with managing it and keeping it safe. The File System Solution is designed to gather
information from file systems and shared folders in order to answer questions around data access:

- Who has access to your data?
- Who is accessing your data?
- What sensitive data is being stored and accessed?

The File System Solution requires a special Enterprise Auditor license. It can be focused to only
conduct Access Auditing (FSAA), including environments with a Distributed File System (DFS). It can
be enhanced with the Netwrix Activity Monitor to also conduct Activity Auditing (FSAC).
Additionally, the Sensitive Data Discovery Add-On enables the solution to search file content for
sensitive data, or Sensitive Data Discovery Auditing (SEEK).

**Supported Platforms**

- See the
  [File System Supported Platforms](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/filesystems.md)
  topic for a full list of supported platforms.

**Requirements, Permissions, and Ports**

- Permissions vary based on the Scan Mode Option selected. See the
  [File System Supported Platforms](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/filesystems.md)
  topic for additional information.

- Ports vary based on the Scan Mode Option selected. See the
  [File System Scan Options](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md)
  topic for additional information.

**Sensitive Data Discovery Considerations**

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

:::note
The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.
:::


:::tip
Remember, if employing either of the File System Proxy Mode as a Service scan mode options, it is
also necessary for the Sensitive Data Discovery Add-on to be installed on the server where the proxy
service is installed.
:::


**Location**

The File System Solution requires a special Enterprise Auditor license. It can be installed from the
Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the solution:
**Jobs** > **FileSystem**.

The
[0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/collection/overview.md)
collects the data. The other job groups run analysis on the collected data. The
[FileSystemOverview Job](/docs/accessanalyzer/11.6/solutions/filesystem/filesystemoverview.md)
generates a statistical overview report of the targeted file systems.

:::note
The
[Cleanup Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/cleanup/overview.md)
and the
[Resource Based Groups Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/resourcebasedgroups/overview.md)
require additional licenses to function. See the [Job Groups](#job-groups) topic for additional
information.
:::


## Job Groups

The File System Solution offers information on multiple aspects of an organization’s file system
infrastructure. This solution is comprised of eleven job groups and an overview job which collect,
analyze, and report on data as well as run action tasks for environmental remediation. The data
collection is conducted by the FileSystemAccess (FSAA) Data Collector. See the
[Standard Reference Tables & Views for the FSAA Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/standardtables.md)
section for database table information.

![File System Solution](/images/accessanalyzer/11.6/solutions/filesystem/overviewpage.webp)

Each type of auditing depends on specific jobs within the 0.Collection Job Group to collect the data
and its corresponding analysis and reporting job groups. The Access Auditing components represent
the core of the File System Solution and are required by the other auditing options, with the
exception of the Sensitive Data Discovery Auditing component which can be run independently. The
data collection query options for each type are explained within the 0.Collection Job Group section.
Additionally, the corresponding analysis and reporting job groups are listed for each auditing type.

If intending to run three or all auditing types, see each auditing type section within the
0.Collection Job Group section for information on query options and requirements. It is recommended
to first run the 0.Collection Job Group components in the default order for the desired auditing
types to ensure successful data collection, and then to run the desired sub-groups for reports.

See the
[Recommended Configuration for the File System Solution](/docs/accessanalyzer/11.6/solutions/filesystem/recommended.md)
topic for additional information on run frequency and job group settings.

The File System Solution is available with the File System Reports license feature and is comprised
of the following jobs:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/collection/overview.md)
  – Designed to collect information from targeted file servers. Information collected includes
  access control information, activity events, and sensitive data.
    - This job group is available with the File System license feature.
- [1.Open Access > FS_OpenAccess Job](/docs/accessanalyzer/11.6/solutions/filesystem/fs_openaccess.md)
  – Designed to report on Open Access information from targeted file servers
- [2.Direct Permissions Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/directpermissions/overview.md)
  – Designed to report on Direct Permissions information from targeted file servers
- [3.Broken Inheritance > FS_BrokenInheritance Job](/docs/accessanalyzer/11.6/solutions/filesystem/fs_brokeninheritance.md)
  – Designed to report on Broken Inheritance information from targeted file servers
- [4.Content Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/content/overview.md)
  – Designed to report on content information from targeted file servers. Key information reported
  on in this group is: File Types, File Sizing, Stale Content, and File Tags.
- [5.Activity Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/activity/overview.md)
  – Designed to report on activity event information from targeted file servers
    - Requires the Activity Monitor
- [6.Probable Owner > FS_ProbableOwner Job](/docs/accessanalyzer/11.6/solutions/filesystem/fs_probableowner.md)
  – Designed to report on probable owners of resources from targeted file servers
- [7.Sensitive Data > FS_DLPResults Job](/docs/accessanalyzer/11.6/solutions/filesystem/fs_dlpresults.md)
  – Designed to report on resources that have been identified to contain sensitive data from
  targeted file servers
    - Requires the Sensitive Data Discovery Add-On
- [Ad Hoc Audits Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/adhocaudits/overview.md)
  – Designed to report on resources and trustees that have been provided by the user from targeted
  file servers
    - Typically, this is run independently from the rest of the solution
- [Cleanup Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/cleanup/overview.md)
  – Designed to report on and take action against resources from targeted file servers that can be
  cleaned up
    - Requires the File System Actions license feature to function
    - This job group is run independently from the rest of the solution
- [Resource Based Groups Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/resourcebasedgroups/overview.md)
  – Designed to report on and take action against resources from targeted file servers that can be
  have their permissions structure transformed to a resource-based group implementation
    - Requires the File System Actions and Active Directory Actions license features to function
    - This job group is run independently from the rest of the solution
- [FileSystemOverview Job](/docs/accessanalyzer/11.6/solutions/filesystem/filesystemoverview.md)
  – Designed to provide an overview of all relevant information from targeted file servers
- [FS_SecurityAssessment Job](/docs/accessanalyzer/11.6/solutions/filesystem/fs_securityassessment.md)
  – Designed to provide a security assessment of all relevant information from targeted file servers

When targeting Nasuni Edge Appliances, it is necessary to add a job from the Instant Job Library
(FS_Nasuni Job) which uses the PowerShell Data collector to gather system information, volume data,
and share data from the Nasuni environment. This job should be added to the 0.Collection Job Group
and should be renamed (0-FS_Nasuni) to run immediately after the 0-Create Schema Job. See the
[0-FS_Nasuni Job](/docs/accessanalyzer/11.6/solutions/filesystem/collection/0-fs_nasuni.md)
topic for additional information.
