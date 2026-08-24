---
title: "SharePointAccess Data Collector"
description: "SharePointAccess Data Collector"
sidebar_position: 340
---

# SharePointAccess Data Collector

The SharePointAccess (SPAA) Data Collector audits access, group membership, and content within a
SharePoint on-premises and SharePoint Online environment. The SharePoint Solution
preconfigures the SPAA Data Collector. Both this data collector and the solution are
available with a special Access Analyzer license. See the
[SharePoint Solution](/docs/accessanalyzer/12.0/solutions/sharepoint/overview.md) topic for additional information.
The SPAA Data Collector has the following requirements:

**Protocols**

- MS SQL
- Remote Registry
- SP CSOM (Web Services via HTTP & HTTPS)
- SP Server API
- WCF AUTH via TCP (configurable)

**Ports**

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/scanoptions.md) topic for
  additional information.

**Permissions**

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/docs/accessanalyzer/12.0/requirements/sharepoint/sharepoint/sharepoint.md) topic for additional information.

**Sensitive Data Discovery Considerations**

If you run Sensitive Data Discovery (SDD) scans, you must increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if you
configure the job to scan 8 hosts at a time, it requires an extra 16 GB of RAM (8x2=16).

## SPAA Query Configuration

You configure the SharePointAccess Data Collector through the SharePoint Access Auditor Data
Collector Wizard. The wizard contains the following pages, which change based up on the query
Category selected:

- Welcome
- [SPAA: Category](/docs/accessanalyzer/12.0/admin/datacollector/spaa/category.md)
- [SPAA: SharePoint Data Collection Settings](/docs/accessanalyzer/12.0/admin/datacollector/spaa/settings.md)
- [SPAA: Scan Scoping Options](/docs/accessanalyzer/12.0/admin/datacollector/spaa/scanscopingoptions.md)
- [SPAA: Additional Scoping](/docs/accessanalyzer/12.0/admin/datacollector/spaa/additionalscoping.md)
- [SPAA: Agent Settings](/docs/accessanalyzer/12.0/admin/datacollector/spaa/agentsettings.md)
- [SPAA: Bulk Import Settings](/docs/accessanalyzer/12.0/admin/datacollector/spaa/bulkimportsettings.md)
- [SPAA: DLP Audit Settings](/docs/accessanalyzer/12.0/admin/datacollector/spaa/dlpauditsettings.md)
- [SPAA: Select DLP Criteria](/docs/accessanalyzer/12.0/admin/datacollector/spaa/selectdlpcriteria.md)
- [SPAA: Activity Date Scope](/docs/accessanalyzer/12.0/admin/datacollector/spaa/activitydatescope.md)
- [SPAA: Activity Log Locations](/docs/accessanalyzer/12.0/admin/datacollector/spaa/activityloglocations.md)
- [SPAA: Test Access](/docs/accessanalyzer/12.0/admin/datacollector/spaa/testaccess.md)
- [SPAA: Results](/docs/accessanalyzer/12.0/admin/datacollector/spaa/results.md)
- [SPAA: Summary Page](/docs/accessanalyzer/12.0/admin/datacollector/spaa/summary.md)

![SPAA Data Collector Wizard Welcome Page](/images/accessanalyzer/12.0/admin/datacollector/spaa/welcomepage.webp)

You can hide the Welcome page by checking the **Don't display this page the next time** box when
the wizard is open and you save configuration settings.
