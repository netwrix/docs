---
title: "DropboxAccess Data Collector"
description: "DropboxAccess Data Collector"
sidebar_position: 120
---

# DropboxAccess Data Collector

The DropboxAccess Data Collector audits access, group membership, and content within a Dropbox
environment. Using Sensitive Data Discovery, Dropbox can scan the contents of over 400 file types
to discover which files contain sensitive data. The Dropbox Solution includes the preconfigured
DropboxAccess Data Collector. Both this data collector and the solution are available with a
special Access Analyzer license. See the
[Dropbox Solution](/docs/accessanalyzer/12.0/solutions/dropbox/overview.md) topic for additional information.

**Protocols**

- HTTP
- HTTPS

**Ports**

- TCP 80
- TCP443

**Permissions**

- Dropbox Team Administrator

**Sensitive Data Discovery Considerations**

If you run Sensitive Data Discovery (SDD) scans, increase the minimum amount of RAM. Each thread
requires a minimum of 2 additional GB of RAM per host. For example, if you configure the job to
scan 8 hosts at a time, it requires an extra 16 GB of RAM (8 x 2 = 16).

## Query Configuration

You configure the DropboxAccess Data Collector through the Dropbox Access Auditor Data Collector
Wizard. The wizard contains the following pages, which change based upon the query category
selected:

- Welcome
- [DropboxAccess: Category](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/category.md)
- [DropboxAccess: Scan Options](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/scanoptions.md)
- [DropboxAccess: Scoping](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/scoping.md)
- [DropboxAccess: DLP Audit Settings](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/dlpauditsettings.md)
- [DropboxAccess: Select DLP Criteria](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/selectdlpcriteria.md)
- [DropboxAccess: Summary (Completion)](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/completion.md)

![Dropbox Access Auditor Data Collector Wizard Welcome page](/images/accessanalyzer/12.0/admin/datacollector/dropboxaccess/welcome.webp)

To hide the Welcome page, select the **Don't display this page the next time** checkbox while the
wizard is open, then save the configuration settings.
