---
title: "FileSystemAccess Data Collector"
description: "FileSystemAccess Data Collector"
sidebar_position: 230
---

# FileSystemAccess Data Collector

The FileSystemAccess (FSAA) Data Collector collects permissions, content, and activity, and
sensitive data information for Windows and NAS file systems. The FSAA Data Collector has been
preconfigured within the File System Solution. Both this data collector and the solution are
available with a special Access Analyzer license. See the
[File System Solution](/docs/accessanalyzer/12.0/solutions/filesystem/overview.md) topic for additional information.

**Protocols**

- Remote Registry
- WMI

**Ports**

- Ports vary based on the Scan Mode Option selected. See the
  [File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md) topic for
  additional information.

**Permissions**

- Permissions vary based on the Scan Mode Option selected. See the
  [File System Supported Platforms](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/filesystems.md) topic for
  additional information.

**Sensitive Data Discovery Considerations**

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. By default, SDD scans are
configured to run two concurrent threads. For example, if the job is configured to scan 8 hosts at a
time with two concurrent SDD threads, then an extra 32 GB of RAM are required (8x2x2=32).

## FSAA Query Configuration

The FSAA Data Collector is configured through the File System Access Auditor Data Collector Wizard.
The wizard contains the following pages, which change based up on the query category selected:

- [FSAA: Query Selection](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/queryselection.md)
- [FSAA: Applet Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/appletsettings.md)
- [FSAA: Scan Server Selection](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/scanserverselection.md)
- [FSAA: Scan Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/scansettings.md)
- [FSAA: Azure Tenant Mapping](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/azuretenantmapping.md)
- [FSAA: Activity Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/activitysettings.md)
- [FSAA: Default Scoping Options](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/defaultscopingoptions/defaultscopingoptions.md)
- [FSAA: Scoping Options](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/scopingoptions.md)
- [FSAA: Scoping Queries](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/scopingqueries.md)
- [FSAA: Sensitive Data Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/sensitivedatasettings.md)
- [FSAA: SDD Criteria Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/sddcriteria.md)
- [FSAA: Bulk Import Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/bulkimport.md)
- [FSAA: FSAA Update Service Setting](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/updateservicesettings.md)
