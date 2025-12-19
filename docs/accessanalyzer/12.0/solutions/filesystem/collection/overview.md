---
title: "0.Collection Job Group"
description: "0.Collection Job Group"
sidebar_position: 20
---

# 0.Collection Job Group

The 0.Collection job group is designed to collect information from targeted file servers.
Information collected includes access control information, activity events, and sensitive data.

![0.Collection Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/filesystem/collection/jobstree.webp)

The 0.Collection job group has the following collection components:

- File System Access Auditing (FSAA) component – The primary component of this group. Collects file
  system information, such as permissions and content metadata. It employs the **1-FSAA System
  Scans** job, the **2-FSAA Bulk Import** job, and the **3-FSAA Exceptions** job. See the
  [File System Access Auditing](#file-system-access-auditing) topic for additional information.
- File System DFS Auditing (FSDFS) component – Collects Distributed File System (DFS) mappings from
  Active Directory or self-hosted DFS servers and compares them to the file system information. It
  works in conjunction with the FSAA component and employs the **0-FSDFS System Scans** job. The
  results from this component are only available through the Access Information Center. See the
  [File System DFS Auditing](#file-system-dfs-auditing) topic for additional information.
- File System Activity Auditing (FSAC) component – Collects event information logged by the Activity
  Monitor. This component requires an additional installer package before data collection will
  occur. It should be run in conjunction with the FSAA component and employs the **1-FSAC System
  Scans** job, the **2-FSAC Bulk Import** job, and the **3-FSAC Exceptions** job. See the
  [File System Activity Auditing](#file-system-activity-auditing) topic for additional information.
- File System Sensitive Data Discovery Auditing (SEEK) component – Searches file content for
  sensitive data. It can work independently or in conjunction with the FSAA component and employs
  the **1-SEEK System Scans** job and the **2-SEEK Bulk Import** job. See the
  [File System Sensitive Data Discovery Auditing (SEEK)](#file-system-sensitive-data-discovery-auditing-seek)
  topic for additional information.

These jobs are numbered to keep them in the necessary run order. Not all jobs need be run. See the
appropriate auditing topic for specific job relationships and recommended workflows. The 0-Create
Schema job ensures the database schema is properly configured for the current version of the data
collector. See the [0-Create Schema Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/0-create_schema.md) topic for additional information.

:::tip
Remember, the relationship between system scans and bulk import jobs requires the following
considerations:
:::


- A system scans job executed from a Access Analyzer Console must be followed by the corresponding
  bulk import job from the same Access Analyzer Console with the same version of Access Analyzer
- Two system scans processing the same information, for example two 1-FSAA System Scans jobs, cannot
  be executed consecutively against the same target host. The corresponding bulk import job, for
  example 2-FSAA Bulk Import job, must be executed in between.

The system scans job collects the data and creates a Tier-2 database, or SQLite database, on the
local host, target host, or proxy host (according to the Applet Gathering Settings configured). The
corresponding bulk import job gathers the information from the Tier-2 database, and pulls it into
the Tier-1 database, or Access Analyzer SQL backend database, thus completing the collection
process. The collection does not include a bulk import job, as it streams the collected data
directly into the Tier-1 database.

## File System Access Auditing

Access Auditing (FSAA) is the primary component of the 0.Collection job group. It collects file
system permission, content metadata, and additional file system information. The jobs, tables, and
views specifically incorporated into this component are prefixed with `FSAA`. See the
[Standard Reference Tables & Views for the FSAA Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/standardtables.md)
topic for additional information on the data collected.

The 0.Collection jobs that comprise this auditing component are:

- [1-FSAA System Scans Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/1-fsaa_system_scans.md) – Collects access information from the targeted
  file servers
- [2-FSAA Bulk Import Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/2-fsaa_bulk_import.md) – Imports collected access information from the
  targeted file servers

    - The 2-FSAA Bulk Import job does not need to be run when streaming is enabled

- [3-FSAA Exceptions Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/3-fsaa_exceptions.md) – Analyzes collected access information for
  exceptions

The following job groups and jobs in the File System solution depend on data collected by these jobs
to generate reports:

- [1.Open Access > FS_OpenAccess Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_openaccess.md)
- [2.Direct Permissions Job Group](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/overview.md)
- [3.Broken Inheritance > FS_BrokenInheritance Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_brokeninheritance.md)
- [4.Content Job Group](/docs/accessanalyzer/12.0/solutions/filesystem/content/overview.md)
- [5.Activity Job Group](/docs/accessanalyzer/12.0/solutions/filesystem/activity/overview.md) (also requires Activity Auditing)
- [6.Probable Owner > FS_ProbableOwner Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_probableowner.md) (also requires Activity
  Auditing)
- [7.Sensitive Data > FS_DLPResults Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_dlpresults.md) (also requires Activity Auditing and
  Sensitive Data Discovery Auditing)
- [Ad Hoc Audits Job Group](/docs/accessanalyzer/12.0/solutions/filesystem/adhocaudits/overview.md)
- [FileSystemOverview Job](/docs/accessanalyzer/12.0/solutions/filesystem/filesystemoverview.md)
- [FS_SecurityAssessment Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_securityassessment.md)

The File System Access Reports in the Access Information Center are also populated by this data. See
the File System Reports topics in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.

It is more efficient to streamline the collection jobs to those desired. Remember, it is a best
practice to scope the 0.Collection job group to only include the collection components desired by
disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently.
It is not recommended to delete any jobs. The required collection jobs are listed for the following
workflow.

**Workflow (for Access Auditing only)**

The recommended workflow for Access Auditing only is as follows:

**Step 1 –** Run the **1-FSAA System Scans** job.

**Step 2 –** If necessary, run the **2-FSAA Bulk Import** job:

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 3 –** Run the **3-FSAA Exceptions** job.

**Step 4 –** Run the desired corresponding analysis and reporting sub-job groups.

:::note
Please see the [Recommended Configuration for the File System Solution](/docs/accessanalyzer/12.0/solutions/filesystem/recommended.md)
topic before continuing with this workflow.
:::


See the other auditing sections for workflows which include multiple auditing types.

## File System DFS Auditing

DFS Auditing (FSDFS) is the component of the 0.Collection job group which collects Distributed File
System (DFS) mappings from Active Directory or self-hosted DFS servers and compares them to the file
system information. It works in conjunction with the Access Auditing component. The jobs, tables,
and views specifically incorporated into this component are prefixed with `FSDFS`. See the
[Standard Reference Tables & Views for the FSAA Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/standardtables.md)
topic for additional information on the data collected.

The 0.Collection jobs that comprise the DFS auditing component are:

- [0-FSDFS System Scans Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/0-fsdfs_system_scans.md) – This job is responsible for enumerating a
  list of all root and link targets in the distributed file system and creating a dynamic host list
  that will be used by the other 0.Collection jobs

    - The Connection Profile and required permissions for the 0-FSDFS System Scans job are the same
      as those required for collecting system data from supported Windows operating systems. They
      are dependent on the file system scan option being used. See the
      [File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md) topic
      for additional information.
    - The target host you should assign to the 0-FSDFS System Scans job depends on the type of
      DFS namespace being audited:

        - For domain-based DFS namespaces, assign a host list containing the default domain
          controllers for the domains hosting the DFS namespaces
        - For standalone DFS namespaces, assign a host list containing the servers hosting the
          namespaces

    - When run successfully, the 0-FSDFS System Scans job automatically creates a dynamic host list
      called **DFS HOST LIST**. This is added to the Host Management node. You should assign this
      **DFS HOST LIST** to other 0.Collection jobs as outlined in the recommended workflows below.

The components depend on data collected by these jobs to collect within a file system using DFS
mappings.

It is more efficient to streamline the collection jobs to those desired. Remember, it is a best
practice to scope the 0.Collection job group to only include the collection components desired by
disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently.
It is not recommended to delete any jobs. The required collection jobs are listed for each of the
following optional workflows.

:::warning
The DFS Auditing component must always be run in conjunction with the Access Auditing
component. Access audits are necessary to resolve the target shares and folders of DFS link
destinations.
:::


**Recommended Workflow 1 (for AccessAuditing with DFS Auditing)**

**Step 1 –** Run the **0-FSDFS System Scans** job.

**Step 2 –** Run the **1-FSAA System Scans** job (with the **DFS HOST LIST** assigned).

**Step 3 –** If necessary, run the **2-FSAA Bulk Import** job (with the **DFS HOST LIST** assigned):

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 4 –** Run the **3-FSAA Exceptions** job (not specifically needed for DFS Auditing, but
recommended for **0.Collection** job group).

**Step 5 –** Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 2 (for AccessAuditing with DFS Auditing and Activity Auditing)

**Step 1 –** Install and configure monitoring with the Activity Monitor for targeted hosts (once
only).

**Step 2 –** Run the **0-FSDFS System Scans** job.

**Step 3 –** Run the **1-FSAA System Scans** job (with the **DFS HOST LIST** assigned).

**Step 4 –** Run the **1-FSAC System Scans** job (with the **DFS HOST LIST** assigned).

**Step 5 –** If necessary, run the **2-FSAA Bulk Import** job (with the **DFS HOST LIST** assigned):

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 6 –** Run the **2-FSAC Bulk Import** job (with the **DFS HOST LIST** assigned).

**Step 7 –** Run the **3-FSAA Exceptions** job.

**Step 8 –** Run the **3-FSAC Exceptions** job.

**Step 9 –** Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 3 (for AccessAuditing with DFS Auditing, Activity, and Sensitive Data Discovery
Auditing)

**Step 1 –** Install and configure monitoring with the Activity Monitor for targeted hosts (once
only).

**Step 2 –** Run the **0-FSDFS System Scans** job.

**Step 3 –** Run the **1-FSAA System Scans** job (with the **DFS HOST LIST** assigned).

**Step 4 –** Run the **1-FSAC System Scans** job (with the **DFS HOST LIST** assigned).

**Step 5 –** Run the **1-SEEK System Scans** job (with the **DFS HOST LIST** assigned).

**Step 6 –** If necessary, run the **2-FSAA Bulk Import** job (with the **DFS HOST LIST** assigned):

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 7 –** Run the **2-FSAC Bulk Import** job (with the **DFS HOST LIST** assigned).

**Step 8 –** If necessary, run the **2-SEEK Bulk Import** job (with the **DFS HOST LIST** assigned):

- If streaming is not enabled in the **1-SEEK System Scans** job, run the **2-SEEK Bulk Import**
  job.
- If streaming is enabled in the **1-SEEK System Scans** job, do not run the **2-SEEK Bulk Import**
  job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 9 –** Run the **3-FSAA Exceptions** job.

**Step 10 –** Run the **3-FSAC Exceptions** job.

**Step 11 –** Run the desired corresponding analysis and reporting sub-job groups.

:::note
Please see the [Recommended Configuration for the File System Solution](/docs/accessanalyzer/12.0/solutions/filesystem/recommended.md)
topic before continuing with these workflows.
:::


To scope the 0.Collection job group to only collect DFS information, see Step 9 of the
[Configure the (FSAA) File System Scan Query](1-fsaa_system_scans.md#configure-the-fsaa-file-system-scan-query)
topic.

## File System Activity Auditing

Activity Auditing (FSAC) is the component of the 0.Collection job group that imports event
information collected by the Activity Monitor. It can be run independently or in conjunction with
the FSAA component, though it is recommended to run them together. The jobs, tables, and views
specifically incorporated into this component are prefixed with `FSAC`. See the
[Standard Reference Tables & Views for the FSAA Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/standardtables.md)
topic for additional information on the data collected.

:::note
The Activity Auditing component requires the Activity Monitor be deployed, configured, and
have services running on the target hosts. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.
:::


Once the Activity Monitor is installed, the monitored host configuration tells it what to monitor
and how long to retain the activity log files. The monitoring agent writes one log per day of
activity for the host. Then, the FSAA Data Collector gathers the log files to report on file system
activity for the targeted host. While the Activity Monitor can be configured to create multiple
outputs, Access Analyzer can only collect one log file per host. Therefore, after the monitored host
has been configured, it is necessary to identify the log file for Access Analyzer. See the
[Identify a Log File](#identify-a-log-file) topic for additional information.

The data retention period needs to be coordinated between the Activity Monitor and Access Analyzer.
The number of days theActivity Monitor is configured to retain log files must be higher than the
number of days between Activity Auditing scans. The FSAA Data Collector can be customized on the
Activity Settings page of the File System Access Auditor Data Collector Wizard. See the
[Configure the Activity Scan Query](1-fsac_system_scans.md#configure-the-activity-scan-query) topic
for additional information.

:::note
Integration between Access Analyzer and Threat Prevention for Windows File System
monitoring purposes requires the use of the SI Agent to generate the required logs. See the
[Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
for information on the Access Analyzer Integration.
:::


The **0.Collection** jobs that comprise this auditing component are:

- [1-FSAC System Scans Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/1-fsac_system_scans.md) – Collects activity events from the targeted
  file servers
- [2-FSAC Bulk Import Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/2-fsac_bulk_import.md) – Imports collected activity events from the
  targeted file servers
- [3-FSAC Exceptions Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/3-fsac_exceptions.md) – Analyzes the collected activity events for
  exceptions

The following job groups and jobs in the File System solution depend on data collected by these jobs
to generate reports:

- [5.Activity Job Group](/docs/accessanalyzer/12.0/solutions/filesystem/activity/overview.md) (also requires Access Auditing)
- [6.Probable Owner > FS_ProbableOwner Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_probableowner.md) (also requires Access Auditing)
- [7.Sensitive Data > FS_DLPResults Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_dlpresults.md) (also requires Access Auditing and
  Sensitive Data Discovery Auditing)
- [FileSystemOverview Job](/docs/accessanalyzer/12.0/solutions/filesystem/filesystemoverview.md)
- [FS_SecurityAssessment Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_securityassessment.md)

The File System Activity Reports in the Access Information Center are also populated by this data.
See the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.

It is more efficient to streamline the collection jobs to those desired. Remember, it is a best
practice to scope the 0.Collection job group to only include the collection components desired by
disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently.
It is not recommended to delete any jobs. The required collection jobs are listed for each of the
following optional workflows.

**Recommended Workflow 1 (for Access and Activity Auditing)**

**Step 1 –** Install and configure monitoring with the Activity Monitor for targeted hosts (once
only).

**Step 2 –** Run the **1-FSAA System Scans** job.

**Step 3 –** Run the **1-FSAC System Scans** job.

**Step 4 –** If necessary, run the **2-FSAA Bulk Import** job:

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 5 –** Run the **2-FSAC Bulk Import** job.

**Step 6 –** Run the **3-FSAA Exceptions** job.

**Step 7 –** Run the **3-FSAC Exceptions** job.

**Step 8 –** Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 2 (for Access, Activity, and Sensitive Data Discovery Auditing)

**Step 1 –** Install and configure monitoring with the Activity Monitor for targeted hosts (once
only).

**Step 2 –** Run the **1-FSAA System Scans** job.

**Step 3 –** Run the **1-FSAC System Scans** job.

**Step 4 –** Run the **1-SEEK System Scans** job.

**Step 5 –** If necessary, run the **2-FSAA Bulk Import** job:

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 6 –** Run the **2-FSAC Bulk Import** job.

**Step 7 –** If necessary, run the **2-SEEK Bulk Import** job:

- If streaming is not enabled in the **1-SEEK System Scans** job, run the **2-SEEK Bulk Import**
  job.
- If streaming is enabled in the **1-SEEK System Scans** job, do not run the **2-SEEK Bulk Import**
  job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 8 –** Run the **3-FSAA Exceptions** job.

**Step 9 –** Run the **3-FSAC Exceptions** job.

**Step 10 –** Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 3 (for Access, Activity, DFS, and Sensitive Data Discovery Auditing)

**Step 1 –** Install and configure monitoring with the Activity Monitor for targeted hosts (once
only).

**Step 2 –** Run the **0-FSDFS System Scans** job.

**Step 3 –** Run the **1-FSAA System Scans** job.

**Step 4 –** Run the **1-FSAC System Scans** job.

**Step 5 –** Run the **1-SEEK System Scans** job.

**Step 6 –** If necessary, run the **2-FSAA Bulk Import** job:

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 7 –** Run the **2-FSAC Bulk Import** job.

**Step 8 –** If necessary, run the **2-SEEK Bulk Import** job:

- If streaming is not enabled in the **1-SEEK System Scans** job, run the **2-SEEK Bulk Import**
  job.
- If streaming is enabled in the **1-SEEK System Scans** job, do not run the **2-SEEK Bulk Import**
  job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 9 –** Run the **3-FSAA Exceptions** job.

**Step 10 –** Run the **3-FSAC Exceptions** job.

**Step 11 –** Run the desired corresponding analysis and reporting sub-job groups.

Optional Workflow (for Activity Auditing data collection only )

While activity data can be collected independently, the Activity reports require the Access Auditing
components.

**Step 1 –** Install and configure monitoring with the Activity Monitor for targeted hosts (once
only).

**Step 2 –** Run the **1-FSAC System Scans** job.

**Step 3 –** Run the **2-FSAC Bulk Import** job.

**Step 4 –** Run the **3-FSAC Exceptions** job.

**Step 5 –** Run the desired corresponding analysis and reporting sub-job groups.

:::note
Please see the [Recommended Configuration for the File System Solution](/docs/accessanalyzer/12.0/solutions/filesystem/recommended.md)
topic before continuing with these workflows.
:::


### Identify a Log File

While the Activity Monitor can have multiple configurations per host, Access Analyzer can only read
one of them. Therefore, after the Activity Monitor has been configured to monitor a host, it is
necessary to indicate when that configuration is for Access Analyzer. Follow these steps to identify
the Log file to be read by Access Analyzer.

**Step 1 –** Within the Activity Monitor Console on the **Monitored Hosts** tab, select the desired
configuration and click **Edit**.

**Step 2 –** On the **Log Files** tab, select the **This log file is for Access Analyzer** option.

:::info
Select the **Comments** tab and identify this output as being configured for
Access Analyzer.
:::


**Step 3 –** Click **OK** to save the setting.

Access Analyzer now reads that Log file when scanning the associated host.

## File System Sensitive Data Discovery Auditing (SEEK)

Sensitive Data Discovery Auditing (SEEK) is the component of the 0.Collection job group that
searches file content for sensitive data. It can be run independently or in conjunction with the
Access Auditing component to limit searches to Open Shares. The jobs for this component are prefixed
with `SEEK`. The tables and views are prefixed with `FSDLP`. See the
[Standard Reference Tables & Views for the FSAA Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/standardtables.md)
topic for additional information on the data collected.

Customized search criteria can be created with the Criteria Editor accessible through the SDD
Criteria Settings page of the File System Access Auditor Data Collector Wizard. See the
[Configure the (SEEK) File System Scan Query](1-seek_system_scans.md#configure-the-seek-file-system-scan-query)
topic for additional information.

:::tip
Remember, changes made in the Criteria Editor are global for Sensitive Data Discovery in Access
Analyzer. See the
[Sensitive Data Criteria Editor](/docs/accessanalyzer/12.0/sensitivedatadiscovery/criteriaeditor/overview.md) topic
for additional information.
:::


**Option to Enable Last Access Timestamp**

The Last Access Timestamp (LAT) is disabled by default in Windows. This means the LAT does not get
updated by any applications reading the file. As soon as the LAT feature is enabled in Windows, any
attempt to read file contents updates the LAT. It stores the time of the last read operation.

Since files are read during the Sensitive Data Discovery Auditing scan, when the feature is enabled
in Windows the scan causes each file's LAT to update each time the file is scanned. Therefore, there
is a feature within the job XML file which enables the scan to call a special API in order to keep
each file's LAT from updating when it's scanned. This feature can be enabled by adding
`<NoUpdateLastAccess>` tag to the XML. See the [1-SEEK System Scans Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/1-seek_system_scans.md)
topic for additional information and instructions.

This feature works for all scan modes when targeting Windows machines.

For additional information on preserving Last Access Time during SDD scans and Metadata tag
collection, see the [File System Supported Platforms](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/filesystems.md)
topic.

**File System Sensitive Data Discovery Auditing (SEEK) Jobs**

The 0.Collection jobs that comprise this auditing component are:

- [1-SEEK System Scans Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/1-seek_system_scans.md) – Collects sensitive data from the targeted file
  servers
- [2-SEEK Bulk Import Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/2-seek_bulk_import.md) – Imports collected sensitive data information
  from the targeted file servers

    - The 2-SEEK Bulk Import job does not need to be run when streaming is enabled

The following job group and jobs in the File System solution depend on data collected by these jobs
to generate reports:

- [7.Sensitive Data > FS_DLPResults Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_dlpresults.md) (also requires Access Auditing and
  Activity Auditing)
- [FileSystemOverview Job](/docs/accessanalyzer/12.0/solutions/filesystem/filesystemoverview.md)
- [FS_SecurityAssessment Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_securityassessment.md)

The File System Sensitive Data Discovery Reports in the Access Information Center are also populated
by this data. See the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.

It is more efficient to streamline the collection jobs to those desired. Remember, it is a best
practice to scope the 0.Collection job group to only include the collection components desired by
disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently.
It is not recommended to delete any jobs. The required collection jobs are listed for the following
workflows.

Recommended Workflow 1 (for Access and Sensitive Data Discovery Auditing data collection)

:::note
While Sensitive Data Discovery data can be collected, the Sensitive Data reports require
the Activity Auditing components.
:::


**Step 1 –** Run the **1-FSAA System Scans** job.

**Step 2 –** Run the **1-SEEK System Scans** job.

**Step 3 –** If necessary, run the **2-FSAA Bulk Import** job:

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 4 –** If necessary, run the **2-SEEK Bulk Import** job:

- If streaming is not enabled in the **1-SEEK System Scans** job, run the **2-SEEK Bulk Import**
  job.
- If streaming is enabled in the **1-SEEK System Scans** job, do not run the **2-SEEK Bulk Import**
  job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 5 –** Run the **3-FSAA Exceptions** job.

**Step 6 –** Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 2 (for Access, Activity, and Sensitive Data Discovery Auditing)

**Step 1 –** Install and configure monitoring with the Activity Monitor for targeted hosts (once
only).

**Step 2 –** Run the **1-FSAA System Scans** job.

**Step 3 –** Run the **1-FSAC System Scans** job.

**Step 4 –** Run the **1-SEEK System Scans** job.

**Step 5 –** If necessary, run the **2-FSAA Bulk Import** job:

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 6 –** Run the **2-FSAC Bulk Import** job.

**Step 7 –** If necessary, run the **2-SEEK Bulk Import** job:

- If streaming is not enabled in the **1-SEEK System Scans** job, run the **2-SEEK Bulk Import**
  job.
- If streaming is enabled in the **1-SEEK System Scans** job, do not run the **2-SEEK Bulk Import**
  job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 8 –** Run the **3-FSAA Exceptions** job.

**Step 9 –** Run the **3-FSAC Exceptions** job.

**Step 10 –** Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 3 (for Access, Activity, DFS, and Sensitive Data Discovery Auditing)

**Step 1 –** Install and configure monitoring with the Activity Monitor for targeted hosts (once
only).

**Step 2 –** Run the **0-FSDFS System Scans** job.

**Step 3 –** Run the **1-FSAA System Scans** job.

**Step 4 –** Run the **1-FSAC System Scans** job.

**Step 5 –** Run the **1-SEEK System Scans** job.

**Step 6 –** If necessary, run the **2-FSAA Bulk Import** job:

- If streaming is not enabled in the **1-FSAA System Scans** job, run the **2-FSAA Bulk Import**
  job.
- If streaming is enabled in the **1-FSAA System Scans** job, do not run **2-FSAA Bulk Import** job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 7 –** Run the **2-FSAC Bulk Import** job.

**Step 8 –** If necessary, run the **2-SEEK Bulk Import** job:

- If streaming is not enabled in the **1-SEEK System Scans** job, run the **2-SEEK Bulk Import**
  job.
- If streaming is enabled in the **1-SEEK System Scans** job, do not run the **2-SEEK Bulk Import**
  job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 9 –** Run the **3-FSAA Exceptions** job.

**Step 10 –** Run the **3-FSAC Exceptions** job.

**Step 11 –** Run the desired corresponding analysis and reporting sub-job groups.

Optional Workflow (for Sensitive Data Discovery Auditing data collection only)

While Sensitive Data Discovery data can be collected, reports require the Access Auditing and
Activity Auditing components.

**Step 1 –** Run the **1-SEEK System Scans** job.

**Step 2 –** If necessary, run the **2-SEEK Bulk Import** job.

- If streaming is not enabled in the **1-SEEK System Scans** job, run the **2-SEEK Bulk Import**
  job.
- If streaming is enabled in the **1-SEEK System Scans** job, do not run the **2-SEEK Bulk Import**
  job.

    :::info
    It is best practice to disable undesired Bulk Import jobs.
    :::


**Step 3 –** Run the desired corresponding analysis and reporting sub-job groups.

:::note
Please see the [Recommended Configuration for the File System Solution](/docs/accessanalyzer/12.0/solutions/filesystem/recommended.md)
topic before continuing with these workflows.

:::
