---
title: "EWSPublicFolder Data Collector"
description: "EWSPublicFolder Data Collector"
sidebar_position: 150
---

# EWSPublicFolder Data Collector

The EWSPublicFolder Data Collector provides configuration options to extract public folder contents,
permissions, and sensitive data, and is preconfigured within the Exchange Solution. Both this data
collector and the solution are available with a special Enterprise Auditor license. See the
[Exchange Solution](/docs/accessanalyzer/11.6/solutions/exchange/overview.md)
topic for additional information.

**Protocols**

- HTTPS
- ADSI
- LDAP

**Ports**

- TCP 389
- TCP 443

**Permissions**

- Exchange Admin Role
- Discovery Management Role
- Application Impersonation Role
- Exchange Online License with a mailbox

**Sensitive Data Discovery Considerations**

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

## EWSPublicFolder Query Configuration

The EWSPublicFolder Data Collector is configured through the Exchange Public Folder Data Collector
Wizard. The wizard contains the following pages:

:::note
The Category selected may alter the subsequent steps displayed by the wizard.
:::


- [EWSPublicFolder: Category](/docs/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/category.md)
- [EWSPublicFolder: Options](/docs/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/options.md)
- [EWSPublicFolder: SDD Options](/docs/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/sddoptions.md)
- [EWSPublicFolder: Critieria](/docs/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/critieria.md)
- [EWSPublicFolder: Filter](/docs/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/filter.md)
- [EWSPublicFolder: Search Filter](/docs/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/searchfilter/searchfilter.md)
- [EWSPublicFolder: Results](/docs/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/results.md)
- [EWSPublicFolder: Summary](/docs/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/summary.md)
