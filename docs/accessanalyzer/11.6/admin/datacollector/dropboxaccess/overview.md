---
title: "DropboxAccess Data Collector"
description: "DropboxAccess Data Collector"
sidebar_position: 120
---

# DropboxAccess Data Collector

The DropboxAccess Data Collector audits access, group membership, and content within a Dropbox
environment. Dropbox can scan the contents of over 400 file types to discover which files contain
sensitive data using the Sensitive Data Discovery Add-on. The DropboxAccess Data Collector has been
preconfigured within the Dropbox Solution. Both this data collector and the solution are available
with a special Enterprise Auditor license. See the
[Dropbox Solution](/docs/accessanalyzer/11.6/solutions/dropbox/overview.md)
topic for additional information.

**Protocols**

- HTTP
- HTTPS

**Ports**

- TCP 80
- TCP443

**Permissions**

- Dropbox Team Administrator

**Sensitive Data Discovery Considerations**

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

## Query Configuration

The DropboxAccess Data Collector is configured through the Dropbox Access Auditor Data Collector
Wizard. The wizard contains the following pages, which change based upon the query category
selected:

- Welcome
- [DropboxAccess: Category](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/category.md)
- [DropboxAccess: Scan Options](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/scanoptions.md)
- [DropboxAccess: Scoping](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/scoping.md)
- [DropboxAccess: DLP Audit Settings](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/dlpauditsettings.md)
- [DropboxAccess: Select DLP Criteria](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/selectdlpcriteria.md)
- [DropboxAccess: Summary (Completion)](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/completion.md)

![Dropbox Access Auditor Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/dropboxaccess/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
