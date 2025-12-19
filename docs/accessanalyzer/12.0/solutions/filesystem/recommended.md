---
title: "Recommended Configuration for the File System Solution"
description: "Recommended Configuration for the File System Solution"
sidebar_position: 10
---

# Recommended Configuration for the File System Solution

The File System Solution has been configured to inherit down from the **FileSystem** > **Settings**
node for most jobs. However, it is a best practice to assign the host list and the Connection
Profile at the data collection level. Once these are assigned to the job, it can be run manually or
scheduled.

:::tip
Remember, the credential permissions required for the scan and host lists are affected by the scan
mode selected. See the
[File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md) topic for
additional information.
:::


**Dependencies**

- The .Active Directory Inventory job froup needs to be executed prior to running the File System
  solution
- The .Entra ID Inventory job group needs to be executed prior to running the File System solution
  (for targeting Azure Files only)
- File System Proxy deployed to targeted proxy servers (for proxy scanning architecture only)
- Activity Monitor deployed, configured, and services running (for Activity Auditing only)

**Targeted Hosts**

The host list assignment should be assigned under the **FileSystem** > **0.Collection** >
**[job]** > **Host** node. The list should be a custom created list for the file system environments
to be targeted. Check the box for the custom-created host list. It is necessary for the **…System
Scans** jobs and the corresponding **…Bulk Import** jobs to be set to the same host lists.

The 0-FSDFS System Scans Job is an exception and is set to the Default domain controller. For
standalone namespaces, modify this host list to target the desired File Systems or Storage
Controllers.

If targeting Nasuni Edge Appliances, the 0-FS_Nasuni Job needs to be assigned a custom host list
containing all on-premise Nasuni Edge Appliances and cloud filers.

If using multiple proxy servers, these should also be configured within a different custom-created
host list. Then assign the proxy servers host list on the
[FSAA: Applet Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/appletsettings.md) page of the File System
Access Auditor Data Collector Wizard within the following jobs in the 0.Collection Job Group
according to the type of auditing being conducted:

- 1-FSAA System Scans Job for Access Auditing
- 1-FSAC System Scans Job for Activity Auditing
- 1-SEEK System Scans Job for Sensitive Data Discovery Auditing

Windows clusters have special needs when it comes to a host list and the host inventory data. It is
necessary to target the Windows File Server Cluster (name of the cluster) of interest when running a
scan against a Windows File System Cluster. Within the Access Analyzer Master Host Table, there
should be a host entry for the cluster as well as for each node. Additionally, each of these host
entries must have the name of the cluster in the WinCluster column in the host inventory data. This
may need to be updated manually. See the [Host Inventory](/docs/accessanalyzer/12.0/admin/settings/hostinventory.md)
topic for additional information.

:::note
The host targeted by the File System scans is only the host entry for the cluster. For
example, the environment has a Windows File System Cluster named `ExampleCluster1` with three nodes
named `ExampleNodeA`, `ExampleNodeB`, and `ExampleNodeC`. There would be four host entries in the
Access Analyzer Master Host Table: `ExampleCluster1`, `ExampleNodeA`, `ExampleNodeB`, and
`ExampleNodeC`. Each of these four entries would have the same value of the cluster name in the
**WinCluster** column: `ExampleCluster1`. Only the `ExampleCluster1` host would be in the host list
targeted by the File System scans.
:::


In order for the selected scan mode to be applied accurately for the target file system, it is
necessary for host inventory to match the values in the table for OSType:

| Devices | OSType Value   |
| ------- | -------------- |
| Windows | Windows        |
| NetApp  | NAS            |
| Celerra | N/A or Unknown |
| Isilon  | NAS            |
| Nasuni  | NAS            |
| ARX     | N/A or Unknown |
| UNIX    | N/A or Unknown |

**Connection Profile**

The FSAA Data Collector requires permissions based on the platform being targeted for data
collection as well as the scan mode selected. See the
[File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md) topic and the
[File System Supported Platforms](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/filesystems.md) topic for necessary
permissions for the supported target platforms. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for the necessary permission for collecting activity data. Then create a custom Connection Profile
containing the appropriate credentials for the targeted environment.

The Connection Profile should be assigned under the **FileSystem** > **0.Collection** job’s
Properties window on the **Connection** tab. It is set to Use the Default Profile, as configured at
the global settings level. However, since this may not be the Connection Profile with the necessary
permissions for the assigned hosts, click the radio button for the **Select one of the following
user defined profiles** option and select the appropriate Connection Profile drop-down menu.

:::tip
Remember, if targeting Nasuni Edge Appliances, the 0-FS_Nasuni Job needs to be assigned a custom
Connection Profile containing the **API Access Key** and **Passcode** for each on-premise Nasuni
Edge Appliance and cloud filer in the target environment. Nasuni API key names are case sensitive.
When providing them, ensure they are entered in the exact same case as generated.
:::


See the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional information.

**Schedule Frequency**

One of the most important decisions to make is how frequently to collect this data. This is
dependent on the size of the target environment. The FileSystem Solution can be scheduled to run
weekly or as desired depending on the types of auditing being conducted and the scope of the target
environment.

For example, it may be desired in large environments to run Activity Auditing collection jobs on a
daily basis, but to only run Access Auditing and Sensitive Data Discovery Auditing collection jobs
on a weekly basis followed by the analysis and reporting job groups.

**Run Order**

Whatever schedule frequency may be configured, it is also recommended to streamline the collection
jobs to those desired. The jobs in the 0.Collection Job Group must be run in order for the auditing
type. Run …System Scans jobs and then the corresponding …Bulk Import jobs according to the desired
workflow.

The other File System Solution sub-job groups can be run in any order, together or individually,
after running the 0.Collection Job Group. The FileSystemOverview Job pulls information from both the
0.Collection Job Group and the other sub-job groups, and the report may contain blank sections if
only select sub-job groups are run.

:::info
If only conducting one or two types of auditing, scope the solution by disabling
the undesired collection jobs. Disabling them allows the solution to run more efficiently. It is not
recommended to delete any jobs. See the
[Disable or Enable a Job](/docs/accessanalyzer/12.0/admin/jobs/job/disableenable.md) topic for additional information.
:::


:::note
If targeting Nasuni Edge Appliances, it is necessary to add the
[0-FS_Nasuni Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/0-fs_nasuni.md) to the **0.Collection** Job Group.
:::


**Query Configuration**

This solution can be run with the default query configuration. However, the most common
customizations include:

- Use proxy scanning architecture, see the
  [File System Data Collection Configuration for Proxy as a Service](/docs/accessanalyzer/12.0/install/filesystemproxy/configuredatacollector.md)
  topic for instructions
- Default Scoping Options page > File Properties tab, optionally configure the following:

    - In the Scan for Probable Owner section, limit the number of probable owners to return per
      folder
    - In the Scan for File Types section, add comma-separated values to limit the file types
      returned
    - Opt to collect file Microsoft Office metadata tags and add comma-separated values to limit the
      metadata tags collected.
    - Set on the following **0.Collection** Job Group jobs:

        - **1-FSAA System Scans** Job for Access Auditing

- Default Scoping Options page > File Details tab, configure the file detail collection

    - By default, file detail scans are disabled
    - Select the type of file data to be collected and optionally add filters
    - Set on the following **0.Collection** Job Group jobs:

        - **1-FSAA System Scans** Job for Access Auditing

- Applet Settings page, optionally configure the applet settings:

    - Opt to enable strong proxy affinity (only run scans on last proxy to scan host, unless no
      longer in proxy host list)
    - Configure the following:

        - Maximum concurrent scans to run on any single applet host
        - Maximum waiting time for strong proxy affinity
        - Scan cancellation timeout

    - Set on the following **0.Collection** Job Group jobs:

        - **1-FSAA System Scans** Job for Access Auditing
        - **1-FSAC System Scans** Job for Activity Auditing
        - **1-SEEK System Scans** Job for Sensitive Data Discovery Auditing

- Scan Server Selection page, set the type of mode the scans will run on

    - The mode configured must align with the provisioning of the credential and environment. See
      the [File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md) topic
      and the [File System Supported Platforms](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/filesystems.md) topic for
      additional information.
    - Local Mode – All of the data collection processing is conducted by the Access Analyzer Console
      server across the network
    - Applet Mode – The File System applet is deployed to the target host when the job is executed
      to conduct data collection. The data is collected on the Windows target host where the applet
      is deployed. The final step in data collection is to compress and transfer the data collected
      in the SQLite databases, or Tier 2 databases, back to the Access Analyzer Console server. If
      the target host is a NAS device, the File System scans default to local mode for that host.
    - Proxy Mode with Applet – The File System applet is deployed to the Windows proxy server when
      the job is executed to conduct data collection. The data collection processing is initiated by
      the proxy server where the applet is deployed and leverages a local mode-type scan to each of
      the target hosts. The final step in data collection is to compress and transfer the data
      collected in the SQLite databases, or Tier 2 databases, back to the Access Analyzer Console
      server.
    - Proxy Mode as a Service – The File System Proxy Service must be installed on the Windows proxy
      servers prior to executing the scans. The data collection processing is conducted by the proxy
      server where the service is running and leverages a local mode-type scan to each of the target
      hosts. The final step in data collection is to compress and transfer the data collected in the
      SQLite databases, or Tier 2 databases, back to the Access Analyzer Console server. The
      credential granted rights to interact with the service must be included in the assigned
      Connection Profile.
    - Set on the following **0.Collection** Job Group jobs:

        - **1-FSAA System Scans** Job for Access Auditing
        - **1-FSAC System Scans** Job for Activity Auditing
        - **1-SEEK System Scans** Job for Sensitive Data Discovery Auditing

- Default Scoping Options page > Scan Settings tab, configuring the subfolder depth

    - Recommendation (allows for a proper assessment on runtime for the targeted environment):

        - For first time execution, recommend setting to 0
        - For second execution, recommend setting to 2
        - Then set to the desired depth.

    - Set on the following **0.Collection** Job Group jobs:

        - **1-FSAA System Scans** Job for Access Auditing
        - **1-SEEK System Scans** Job for Sensitive Data Discovery Auditing

- SDD Criteria Settings page, scope to scan for specific criteria or customizing criteria for
  Sensitive Data Discovery Auditing

    - Set on the **0.Collection** > **1-SEEK System Scans** Job

- Activity Settings page, configure data retention period

    - Recommendation to run with default setting of 60 days
    - Set on the **0.Collection** > **1-FSAC System Scans** Job for Activity Auditing

**Analysis Configuration**

This solution should be run with the default analysis configuration. Most of these analysis tasks
are preconfigured and should not be modified or deselected. There are a few which are deselected by
default, as they are for troubleshooting purposes.

Though the analysis tasks should not be deselected, the following parameters can be modified:

- The .Active Directory Inventory Solution defines large groups, deeply nested groups, stale users,
  and users with large tokens. These parameters can be customized and are applicable to any
  solution, including File System, which incorporate this analyzed data into further analysis.

    - Customize within **.Active Directory Inventory** > **3-AD_Exceptions** Job analysis tasks

- Activity Exception parameters which identify potential security concerns

    - Customize within **0.Collection** > **3-FSAC Exceptions** Job analysis tasks

- Broken inheritance is defined by default to only analyze resources with changed permissions from
  parent

    - Customize within **3.Broken Inheritance** > **FS_BrokenInheritance** Job analysis task

- Probable owner calculations include folder depth parameters

    - Customize within **6.Probable Owner** > **FS_ProbableOwner** Job analysis task

        :::note
        Changes to an exception’s definition will impact all jobs dependent upon that
        exception as well as all AIC Active Directory Exceptions reports.
        :::


There are also a few Notification analysis tasks which can be configured and then enabled in the
following jobs:

- **5.Activity** > **Forensics** > **FS_Deletions** Job
- **5.Activity** > **Forensics** > **FS_PermissionChanges** Job
- **5.Activity** > **Suspicious Activity** > **FS_HighestHourlyActivity** Job

Please see the appropriate topics for details on these tasks.

**Additional Consideration**

The Ad Hoc Audits Job Group is designed to work independent from the rest of the solution, but it is
dependent upon the 0.Collection Job Group. The jobs are scoped to specific shares and trustees
within an analysis task.

The jobs contained in the group use custom SQL scripts to render views on collected data. SQL views
are used to populate report element tables and graphs. Changing or modifying the group, job, or
table names result in no data displayed within the reports or the AIC.

:::tip
Remember, it is recommended to scope the 0.Collection Job Group to only include the collection
components desired by disabling the undesired collection jobs. Disabling them allows the solution to
run more efficiently. It is not recommended to delete any jobs.
:::
