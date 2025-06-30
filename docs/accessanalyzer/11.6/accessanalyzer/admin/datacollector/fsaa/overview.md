# FileSystemAccess Data Collector

The FileSystemAccess (FSAA) Data Collector collects permissions, content, and activity, and
sensitive data information for Windows and NAS file systems. The FSAA Data Collector has been
preconfigured within the File System Solution. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[File System Solution](/docs/accessanalyzer/11.6/accessanalyzer/solutions/filesystem/overview.md)
topic for additional information.

Protocols

- Remote Registry
- WMI

Ports

- Ports vary based on the Scan Mode Option selected. See the
  [File System Scan Options](/docs/accessanalyzer/11.6/accessanalyzer/requirements/solutions/filesystem/scanoptions.md)
  topic for additional information.

Permissions

- Permissions vary based on the Scan Mode Option selected. See the
  [File System Supported Platforms](/docs/accessanalyzer/11.6/accessanalyzer/requirements/target/filesystems.md)
  topic for additional information.

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. By default, SDD scans are configured to run two concurrent threads.
For example, if the job is configured to scan 8 hosts at a time with two concurrent SDD threads,
then an extra 32 GB of RAM are required (8x2x2=32).

_Remember,_ if employing either of the File System Proxy Mode as a Service scan mode options, it is
also necessary for the Sensitive Data Discovery Add-on to be installed on the server where the proxy
service is installed.

## FSAA Query Configuration

The FSAA Data Collector is configured through the File System Access Auditor Data Collector Wizard.
The wizard contains the following pages, which change based up on the query category selected:

- [FSAA: Query Selection](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/queryselection.md)
- [FSAA: Applet Settings](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/appletsettings.md)
- [FSAA: Scan Server Selection](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/scanserverselection.md)
- [FSAA: Scan Settings](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/scansettings.md)
- [FSAA: Azure Tenant Mapping](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/azuretenantmapping.md)
- [FSAA: Activity Settings](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/activitysettings.md)
- [FSAA: Default Scoping Options](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/defaultscopingoptions.md)
- [FSAA: Scoping Options](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/scopingoptions.md)
- [FSAA: Scoping Queries](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/scopingqueries.md)
- [FSAA: Sensitive Data Settings](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/sensitivedatasettings.md)
- [FSAA: SDD Criteria Settings](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/sddcriteria.md)
- [FSAA: Bulk Import Settings](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/bulkimport.md)
- [FSAA: FSAA Update Service Setting](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/updateservicesettings.md)
