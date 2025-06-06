# 0.Collection Job Group

The 0.Collection job group is designed to collect information from targeted file servers. Information collected includes access control information, activity events, and sensitive data.

![0.Collection Job Group in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.png)

The 0.Collection job group has the following collection components:

- File System Access Auditing (FSAA) component – The primary component of this group. Collects file system information, such as permissions and content metadata. It employs the __1-FSAA System Scans__ job, the __2-FSAA Bulk Import__ job, and the __3-FSAA Exceptions__ job. See the [File System Access Auditing](#File-System-Access-Auditing) topic for additional information.
- File System DFS Auditing (FSDFS) component – Collects Distributed File System (DFS) mappings from Active Directory or self-hosted DFS servers and compares them to the file system information. It works in conjunction with the FSAA component and employs the __0-FSDFS System Scans__ job. The results from this component are only available through the Access Information Center. See the [File System DFS Auditing](#File-System-DFS-Auditing) topic for additional information.
- File System Activity Auditing (FSAC) component – Collects event information logged by the Activity Monitor. This component requires an additional installer package before data collection will occur. It should be run in conjunction with the FSAA component and employs the __1-FSAC System Scans__ job, the __2-FSAC Bulk Import__ job, and the __3-FSAC Exceptions__ job. See the [File System Activity Auditing](#File-System-Activity-Auditing) topic for additional information.
- File System Sensitive Data Discovery Auditing (SEEK) component – Searches file content for sensitive data. It can work independently or in conjunction with the FSAA component and employs the __1-SEEK System Scans__ job and the __2-SEEK Bulk Import__ job. See the [File System Sensitive Data Discovery Auditing (SEEK)](#File-System-Sensitive-Data-Discovery-Auditing-SEEK) topic for additional information.

These jobs are numbered to keep them in the necessary run order. Not all jobs need be run. See the appropriate auditing topic for specific job relationships and recommended workflows. The 0-Create Schema job ensures the database schema is properly configured for the current version of the data collector. See the [0-Create Schema Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/0-create_schema.md) topic for additional information.

_Remember,_ the relationship between system scans and bulk import jobs requires the following considerations:

- A system scans job executed from a Access Analyzer Console must be followed by the corresponding bulk import job from the same Access Analyzer Console with the same version of Access Analyzer
- Two system scans processing the same information, for example two 1-FSAA System Scans jobs, cannot be executed consecutively against the same target host. The corresponding bulk import job, for example 2-FSAA Bulk Import job, must be executed in between.

The system scans job collects the data and creates a Tier-2 database, or SQLite database, on the local host, target host, or proxy host (according to the Applet Gathering Settings configured). The corresponding bulk import job gathers the information from the Tier-2 database, and pulls it into the Tier-1 database, or Access Analyzer SQL backend database, thus completing the collection process. The collection does not include a bulk import job, as it streams the collected data directly into the Tier-1 database.

## File System Access Auditing

Access Auditing (FSAA) is the primary component of the 0.Collection job group. It collects file system permission, content metadata, and additional file system information. The jobs, tables, and views specifically incorporated into this component are prefixed with ```FSAA```. See the [Standard Reference Tables & Views for the FSAA Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/standardtables.md) topic for additional information on the data collected.

The 0.Collection jobs that comprise this auditing component are:

- [1-FSAA System Scans Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/1-fsaa_system_scans.md) – Collects access information from the targeted file servers
- [2-FSAA Bulk Import Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/2-fsaa_bulk_import.md) – Imports collected access information from the targeted file servers

  - The 2-FSAA Bulk Import job does not need to be run when streaming is enabled
- [3-FSAA Exceptions Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/3-fsaa_exceptions.md) – Analyzes collected access information for exceptions

The following job groups and jobs in the File System solution depend on data collected by these jobs to generate reports:

- [1.Open Access > FS\_OpenAccess Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_openaccess.md)
- [2.Direct Permissions Job Group](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/directpermissions/overview.md)
- [3.Broken Inheritance > FS\_BrokenInheritance Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_brokeninheritance.md)
- [4.Content Job Group](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/content/overview.md)
- [5.Activity Job Group](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/overview.md) (also requires Activity Auditing)
- [6.Probable Owner > FS\_ProbableOwner Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_probableowner.md) (also requires Activity Auditing)
- [7.Sensitive Data > FS\_DLPResults Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_dlpresults.md) (also requires Activity Auditing and Sensitive Data Discovery Auditing)
- [Ad Hoc Audits Job Group](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/adhocaudits/overview.md)
- [FileSystemOverview Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/filesystemoverview.md)
- [FS\_SecurityAssessment Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_securityassessment.md)

The File System Access Reports in the Access Information Center are also populated by this data. See the File System Reports topics in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

It is more efficient to streamline the collection jobs to those desired. Remember, it is a best practice to scope the 0.Collection job group to only include the collection components desired by disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently. It is not recommended to delete any jobs. The required collection jobs are listed for the following workflow.

Workflow (for Access Auditing only)

The recommended workflow for Access Auditing only is as follows:

__Step 1 –__ Run the __1-FSAA System Scans__ job.

__Step 2 –__ If necessary, run the __2-FSAA Bulk Import__ job:

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 3 –__ Run the __3-FSAA Exceptions__ job.

__Step 4 –__ Run the desired corresponding analysis and reporting sub-job groups.

__NOTE:__ Please see the [Recommended Configuration for the File System Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/recommended.md) topic before continuing with this workflow.

See the other auditing sections for workflows which include multiple auditing types.

## File System DFS Auditing

DFS Auditing (FSDFS) is the component of the 0.Collection job group which collects Distributed File System (DFS) mappings from Active Directory or self-hosted DFS servers and compares them to the file system information. It works in conjunction with the Access Auditing component. The jobs, tables, and views specifically incorporated into this component are prefixed with ```FSDFS```. See the [Standard Reference Tables & Views for the FSAA Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/standardtables.md) topic for additional information on the data collected.

The 0.Collection jobs that comprise the DFS auditing component are:

- [0-FSDFS System Scans Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/0-fsdfs_system_scans.md) – This job is responsible for enumerating a list of all root and link targets in the distributed file system and creating a dynamic host list that will be used by the other 0.Collection jobs

  - The Connection Profile and required permissions for the 0-FSDFS System Scans job are the same as those required for collecting system data from supported Windows operating systems. They are dependent on the file system scan option being used. See the [File System Scan Options](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/filesystem/scanoptions.md) topic for additional information.
  - The target host you should assign to the 0-FSDFS System Scans job depends on the type of DFS namespace being audited:

    - For domain-based DFS namespaces, assign a host list containing the default domain controllers for the domains hosting the DFS namespaces
    - For standalone DFS namespaces, assign a host list containing the servers hosting the namespaces
  - When run successfully, the 0-FSDFS System Scans job automatically creates a dynamic host list called __DFS HOST LIST__. This is added to the Host Management node. You should assign this __DFS HOST LIST__ to other 0.Collection jobs as outlined in the recommended workflows below.

The components depend on data collected by these jobs to collect within a file system using DFS mappings.

It is more efficient to streamline the collection jobs to those desired. Remember, it is a best practice to scope the 0.Collection job group to only include the collection components desired by disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently. It is not recommended to delete any jobs. The required collection jobs are listed for each of the following optional workflows.

__CAUTION:__ The DFS Auditing component must always be run in conjunction with the Access Auditing component. Access audits are necessary to resolve the target shares and folders of DFS link destinations.

Recommended Workflow 1 (for AccessAuditing with DFS Auditing)

__Step 1 –__ Run the __0-FSDFS System Scans__ job.

__Step 2 –__ Run the __1-FSAA System Scans__ job (with the __DFS HOST LIST__ assigned).

__Step 3 –__ If necessary, run the __2-FSAA Bulk Import__ job (with the __DFS HOST LIST__ assigned):

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 4 –__ Run the __3-FSAA Exceptions__ job (not specifically needed for DFS Auditing, but recommended for __0.Collection__ job group).

__Step 5 –__ Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 2 (for AccessAuditing with DFS Auditing and Activity Auditing)

__Step 1 –__ Install and configure monitoring with the Activity Monitor for targeted hosts (once only).

__Step 2 –__ Run the __0-FSDFS System Scans__ job.

__Step 3 –__ Run the __1-FSAA System Scans__ job (with the __DFS HOST LIST__ assigned).

__Step 4 –__ Run the __1-FSAC System Scans__ job (with the __DFS HOST LIST__ assigned).

__Step 5 –__ If necessary, run the __2-FSAA Bulk Import__ job (with the __DFS HOST LIST__ assigned):

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 6 –__ Run the __2-FSAC Bulk Import__ job (with the __DFS HOST LIST__ assigned).

__Step 7 –__ Run the __3-FSAA Exceptions__ job.

__Step 8 –__ Run the __3-FSAC Exceptions__ job.

__Step 9 –__ Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 3 (for AccessAuditing with DFS Auditing, Activity, and Sensitive Data Discovery Auditing)

__Step 1 –__ Install and configure monitoring with the Activity Monitor for targeted hosts (once only).

__Step 2 –__ Run the __0-FSDFS System Scans__ job.

__Step 3 –__ Run the __1-FSAA System Scans__ job (with the __DFS HOST LIST__ assigned).

__Step 4 –__ Run the __1-FSAC System Scans__ job (with the __DFS HOST LIST__ assigned).

__Step 5 –__ Run the __1-SEEK System Scans__ job (with the __DFS HOST LIST__ assigned).

__Step 6 –__ If necessary, run the __2-FSAA Bulk Import__ job (with the __DFS HOST LIST__ assigned):

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 7 –__ Run the __2-FSAC Bulk Import__ job (with the __DFS HOST LIST__ assigned).

__Step 8 –__ If necessary, run the __2-SEEK Bulk Import__ job (with the __DFS HOST LIST__ assigned):

- If streaming is not enabled in the __1-SEEK System Scans__ job, run the __2-SEEK Bulk Import__ job.
- If streaming is enabled in the __1-SEEK System Scans__ job, do not run the __2-SEEK Bulk Import__ job.

  ___RECOMMENDED:___ It is best practice to disable undesired Bulk Import jobs.

__Step 9 –__ Run the __3-FSAA Exceptions__ job.

__Step 10 –__ Run the __3-FSAC Exceptions__ job.

__Step 11 –__ Run the desired corresponding analysis and reporting sub-job groups.

__NOTE:__ Please see the [Recommended Configuration for the File System Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/recommended.md) topic before continuing with these workflows.

To scope the 0.Collection job group to only collect DFS information, see Step 9 of the [Configure the (FSAA) File System Scan Query](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/1-fsaa_system_scans.md#Configure-the-FSAA-File-System-Scan-Query) topic.

## File System Activity Auditing

Activity Auditing (FSAC) is the component of the 0.Collection job group that imports event information collected by the Activity Monitor. It can be run independently or in conjunction with the FSAA component, though it is recommended to run them together. The jobs, tables, and views specifically incorporated into this component are prefixed with ```FSAC```. See the [Standard Reference Tables & Views for the FSAA Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/standardtables.md) topic for additional information on the data collected.

__NOTE:__ The Activity Auditing component requires the Activity Monitor be deployed, configured, and have services running on the target hosts. See the [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) for additional information.

Once the Activity Monitor is installed, the monitored host configuration tells it what to monitor and how long to retain the activity log files. The monitoring agent writes one log per day of activity for the host. Then, the FSAA Data Collector gathers the log files to report on file system activity for the targeted host. While the Activity Monitor can be configured to create multiple outputs, Access Analyzer can only collect one log file per host. Therefore, after the monitored host has been configured, it is necessary to identify the log file for Access Analyzer. See the [Identify a Log File](#Identify-a-Log-File) topic for additional information.

The data retention period needs to be coordinated between the Activity Monitor and Access Analyzer. The number of days theActivity Monitor is configured to retain log files must be higher than the number of days between Activity Auditing scans. The FSAA Data Collector can be customized on the Activity Settings page of the File System Access Auditor Data Collector Wizard. See the [Configure the Activity Scan Query](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/1-fsac_system_scans.md#Configure-the-Activity-Scan-Query) topic for additional information.

__NOTE:__ Integration between Access Analyzer and Threat Prevention for Windows File System monitoring purposes requires the use of the SI Agent to generate the required logs. See the [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention) for information on the Access Analyzer Integration.

The __0.Collection__ jobs that comprise this auditing component are:

- [1-FSAC System Scans Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/1-fsac_system_scans.md) – Collects activity events from the targeted file servers
- [2-FSAC Bulk Import Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/2-fsac_bulk_import.md) – Imports collected activity events from the targeted file servers
- [3-FSAC Exceptions Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/3-fsac_exceptions.md) – Analyzes the collected activity events for exceptions

The following job groups and jobs in the File System solution depend on data collected by these jobs to generate reports:

- [5.Activity Job Group](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/overview.md) (also requires Access Auditing)
- [6.Probable Owner > FS\_ProbableOwner Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_probableowner.md) (also requires Access Auditing)
- [7.Sensitive Data > FS\_DLPResults Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_dlpresults.md) (also requires Access Auditing and Sensitive Data Discovery Auditing)
- [FileSystemOverview Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/filesystemoverview.md)
- [FS\_SecurityAssessment Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_securityassessment.md)

The File System Activity Reports in the Access Information Center are also populated by this data. See the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

It is more efficient to streamline the collection jobs to those desired. Remember, it is a best practice to scope the 0.Collection job group to only include the collection components desired by disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently. It is not recommended to delete any jobs. The required collection jobs are listed for each of the following optional workflows.

Recommended Workflow 1 (for Access and Activity Auditing)

__Step 1 –__ Install and configure monitoring with the Activity Monitor for targeted hosts (once only).

__Step 2 –__ Run the __1-FSAA System Scans__ job.

__Step 3 –__ Run the __1-FSAC System Scans__ job.

__Step 4 –__ If necessary, run the __2-FSAA Bulk Import__ job:

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 5 –__ Run the __2-FSAC Bulk Import__ job.

__Step 6 –__ Run the __3-FSAA Exceptions__ job.

__Step 7 –__ Run the __3-FSAC Exceptions__ job.

__Step 8 –__ Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 2 (for Access, Activity, and Sensitive Data Discovery Auditing)

__Step 1 –__ Install and configure monitoring with the Activity Monitor for targeted hosts (once only).

__Step 2 –__ Run the __1-FSAA System Scans__ job.

__Step 3 –__ Run the __1-FSAC System Scans__ job.

__Step 4 –__ Run the __1-SEEK System Scans__ job.

__Step 5 –__ If necessary, run the __2-FSAA Bulk Import__ job:

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 6 –__ Run the __2-FSAC Bulk Import__ job.

__Step 7 –__ If necessary, run the __2-SEEK Bulk Import__ job:

- If streaming is not enabled in the __1-SEEK System Scans__ job, run the __2-SEEK Bulk Import__ job.
- If streaming is enabled in the __1-SEEK System Scans__ job, do not run the __2-SEEK Bulk Import__ job.

  ___RECOMMENDED:___ It is best practice to disable undesired Bulk Import jobs.

__Step 8 –__ Run the __3-FSAA Exceptions__ job.

__Step 9 –__ Run the __3-FSAC Exceptions__ job.

__Step 10 –__ Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 3 (for Access, Activity, DFS, and Sensitive Data Discovery Auditing)

__Step 1 –__ Install and configure monitoring with the Activity Monitor for targeted hosts (once only).

__Step 2 –__ Run the __0-FSDFS System Scans__ job.

__Step 3 –__ Run the __1-FSAA System Scans__ job.

__Step 4 –__ Run the __1-FSAC System Scans__ job.

__Step 5 –__ Run the __1-SEEK System Scans__ job.

__Step 6 –__ If necessary, run the __2-FSAA Bulk Import__ job:

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 7 –__ Run the __2-FSAC Bulk Import__ job.

__Step 8 –__ If necessary, run the __2-SEEK Bulk Import__ job:

- If streaming is not enabled in the __1-SEEK System Scans__ job, run the __2-SEEK Bulk Import__ job.
- If streaming is enabled in the __1-SEEK System Scans__ job, do not run the __2-SEEK Bulk Import__ job.

  ___RECOMMENDED:___ It is best practice to disable undesired Bulk Import jobs.

__Step 9 –__ Run the __3-FSAA Exceptions__ job.

__Step 10 –__ Run the __3-FSAC Exceptions__ job.

__Step 11 –__ Run the desired corresponding analysis and reporting sub-job groups.

Optional Workflow (for Activity Auditing data collection only )

While activity data can be collected independently, the Activity reports require the Access Auditing components.

__Step 1 –__ Install and configure monitoring with the Activity Monitor for targeted hosts (once only).

__Step 2 –__ Run the __1-FSAC System Scans__ job.

__Step 3 –__ Run the __2-FSAC Bulk Import__ job.

__Step 4 –__ Run the __3-FSAC Exceptions__ job.

__Step 5 –__ Run the desired corresponding analysis and reporting sub-job groups.

__NOTE:__ Please see the [Recommended Configuration for the File System Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/recommended.md) topic before continuing with these workflows.

### Identify a Log File

While the Activity Monitor can have multiple configurations per host, Access Analyzer can only read one of them. Therefore, after the Activity Monitor has been configured to monitor a host, it is necessary to indicate when that configuration is for Access Analyzer. Follow these steps to identify the Log file to be read by Access Analyzer.

__Step 1 –__ Within the Activity Monitor Console on the __Monitored Hosts__ tab, select the desired configuration and click __Edit__.

__Step 2 –__ On the __Log Files__ tab, select the __This log file is for Access Analyzer__ option.

___RECOMMENDED:___ Select the __Comments__ tab and identify this output as being configured for Access Analyzer.

__Step 3 –__ Click __OK__ to save the setting.

Access Analyzer now reads that Log file when scanning the associated host.

## File System Sensitive Data Discovery Auditing (SEEK)

Sensitive Data Discovery Auditing (SEEK) is the component of the 0.Collection job group that searches file content for sensitive data. It can be run independently or in conjunction with the Access Auditing component to limit searches to Open Shares. The jobs for this component are prefixed with ```SEEK```. The tables and views are prefixed with ```FSDLP```. See the [Standard Reference Tables & Views for the FSAA Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/standardtables.md) topic for additional information on the data collected.

Customized search criteria can be created with the Criteria Editor accessible through the SDD Criteria Settings page of the File System Access Auditor Data Collector Wizard. See the [Configure the (SEEK) File System Scan Query](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/1-seek_system_scans.md#Configure-the-SEEK-File-System-Scan-Query) topic for additional information.

_Remember,_ changes made in the Criteria Editor are global for Sensitive Data Discovery in Access Analyzer. See the [Sensitive Data Criteria Editor](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/overview.md) topic for additional information.

Option to Enable Last Access Timestamp

The Last Access Timestamp (LAT) is disabled by default in Windows. This means the LAT does not get updated by any applications reading the file. As soon as the LAT feature is enabled in Windows, any attempt to read file contents updates the LAT. It stores the time of the last read operation.

Since files are read during the Sensitive Data Discovery Auditing scan, when the feature is enabled in Windows the scan causes each file's LAT to update each time the file is scanned. Therefore, there is a feature within the job XML file which enables the scan to call a special API in order to keep each file's LAT from updating when it's scanned. This feature can be enabled by adding ```<NoUpdateLastAccess>``` tag to the XML. See the [1-SEEK System Scans Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/1-seek_system_scans.md) topic for additional information and instructions.

This feature works for all scan modes when targeting Windows machines.

For additional information on preserving Last Access Time during SDD scans and Metadata tag collection, see the [File System Supported Platforms](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/filesystems.md) topic.

File System Sensitive Data Discovery Auditing (SEEK) Jobs

The 0.Collection jobs that comprise this auditing component are:

- [1-SEEK System Scans Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/1-seek_system_scans.md) – Collects sensitive data from the targeted file servers
- [2-SEEK Bulk Import Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/2-seek_bulk_import.md) – Imports collected sensitive data information from the targeted file servers

  - The 2-SEEK Bulk Import job does not need to be run when streaming is enabled

The following job group and jobs in the File System solution depend on data collected by these jobs to generate reports:

- [7.Sensitive Data > FS\_DLPResults Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_dlpresults.md) (also requires Access Auditing and Activity Auditing)
- [FileSystemOverview Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/filesystemoverview.md)
- [FS\_SecurityAssessment Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/fs_securityassessment.md)

The File System Sensitive Data Discovery Reports in the Access Information Center are also populated by this data. See the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

It is more efficient to streamline the collection jobs to those desired. Remember, it is a best practice to scope the 0.Collection job group to only include the collection components desired by disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently. It is not recommended to delete any jobs. The required collection jobs are listed for the following workflows.

Recommended Workflow 1 (for Access and Sensitive Data Discovery Auditing data collection)

__NOTE:__ While Sensitive Data Discovery data can be collected, the Sensitive Data reports require the Activity Auditing components.

__Step 1 –__ Run the __1-FSAA System Scans__ job.

__Step 2 –__ Run the __1-SEEK System Scans__ job.

__Step 3 –__ If necessary, run the __2-FSAA Bulk Import__ job:

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 4 –__ If necessary, run the __2-SEEK Bulk Import__ job:

- If streaming is not enabled in the __1-SEEK System Scans__ job, run the __2-SEEK Bulk Import__ job.
- If streaming is enabled in the __1-SEEK System Scans__ job, do not run the __2-SEEK Bulk Import__ job.

  ___RECOMMENDED:___ It is best practice to disable undesired Bulk Import jobs.

__Step 5 –__ Run the __3-FSAA Exceptions__ job.

__Step 6 –__ Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 2 (for Access, Activity, and Sensitive Data Discovery Auditing)

__Step 1 –__ Install and configure monitoring with the Activity Monitor for targeted hosts (once only).

__Step 2 –__ Run the __1-FSAA System Scans__ job.

__Step 3 –__ Run the __1-FSAC System Scans__ job.

__Step 4 –__ Run the __1-SEEK System Scans__ job.

__Step 5 –__ If necessary, run the __2-FSAA Bulk Import__ job:

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 6 –__ Run the __2-FSAC Bulk Import__ job.

__Step 7 –__ If necessary, run the __2-SEEK Bulk Import__ job:

- If streaming is not enabled in the __1-SEEK System Scans__ job, run the __2-SEEK Bulk Import__ job.
- If streaming is enabled in the __1-SEEK System Scans__ job, do not run the __2-SEEK Bulk Import__ job.

  ___RECOMMENDED:___ It is best practice to disable undesired Bulk Import jobs.

__Step 8 –__ Run the __3-FSAA Exceptions__ job.

__Step 9 –__ Run the __3-FSAC Exceptions__ job.

__Step 10 –__ Run the desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 3 (for Access, Activity, DFS, and Sensitive Data Discovery Auditing)

__Step 1 –__ Install and configure monitoring with the Activity Monitor for targeted hosts (once only).

__Step 2 –__ Run the __0-FSDFS System Scans__ job.

__Step 3 –__ Run the __1-FSAA System Scans__ job.

__Step 4 –__ Run the __1-FSAC System Scans__ job.

__Step 5 –__ Run the __1-SEEK System Scans__ job.

__Step 6 –__ If necessary, run the __2-FSAA Bulk Import__ job:

- If streaming is not enabled in the __1-FSAA System Scans__ job, run the __2-FSAA Bulk Import__ job.
- If streaming is enabled in the __1-FSAA System Scans__ job, do not run __2-FSAA Bulk Import__ job.

  ___RECOMMENDED:___  It is best practice to disable undesired Bulk Import jobs.

__Step 7 –__ Run the __2-FSAC Bulk Import__ job.

__Step 8 –__ If necessary, run the __2-SEEK Bulk Import__ job:

- If streaming is not enabled in the __1-SEEK System Scans__ job, run the __2-SEEK Bulk Import__ job.
- If streaming is enabled in the __1-SEEK System Scans__ job, do not run the __2-SEEK Bulk Import__ job.

  ___RECOMMENDED:___ It is best practice to disable undesired Bulk Import jobs.

__Step 9 –__ Run the __3-FSAA Exceptions__ job.

__Step 10 –__ Run the __3-FSAC Exceptions__ job.

__Step 11 –__ Run the desired corresponding analysis and reporting sub-job groups.

Optional Workflow (for Sensitive Data Discovery Auditing data collection only)

While Sensitive Data Discovery data can be collected, reports require the Access Auditing and Activity Auditing components.

__Step 1 –__ Run the __1-SEEK System Scans__ job.

__Step 2 –__ If necessary, run the __2-SEEK Bulk Import__ job.

- If streaming is not enabled in the __1-SEEK System Scans__ job, run the __2-SEEK Bulk Import__ job.
- If streaming is enabled in the __1-SEEK System Scans__ job, do not run the __2-SEEK Bulk Import__ job.

  ___RECOMMENDED:___ It is best practice to disable undesired Bulk Import jobs.

__Step 3 –__ Run the desired corresponding analysis and reporting sub-job groups.

__NOTE:__ Please see the [Recommended Configuration for the File System Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/recommended.md) topic before continuing with these workflows.
