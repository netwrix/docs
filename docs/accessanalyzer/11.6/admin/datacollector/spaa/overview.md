---
title: "SharePointAccess Data Collector"
description: "SharePointAccess Data Collector"
sidebar_position: 330
---

# SharePointAccess Data Collector

The SharePointAccess (SPAA) Data Collector audits access, group membership, and content within a
SharePoint on-premises and SharePoint Online environment. The SharePoint Solution includes the SPAA
Data Collector as a preconfigured component. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[SharePoint Solution](/docs/accessanalyzer/11.6/solutions/sharepoint/overview.md)
topic for additional information. The SPAA Data Collector has the following requirements:

**Protocols**

- MS SQL
- Remote Registry
- SP CSOM (Web Services via HTTP & HTTPS)
- SP Server API
- WCF AUTH via TCP (configurable)

**Ports**

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/scanoptions.md)
  topic for additional information.

**Permissions**

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/docs/accessanalyzer/11.6/requirements/sharepoint/sharepoint/sharepoint.md)
  topic for additional information.

**Sensitive Data Discovery Considerations**

You must install the Sensitive Data Discovery Add-On on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If you run Sensitive Data Discovery (SDD) scans,
you must increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if you configure the job to scan 8 hosts at a time,
you need an extra 16 GB of RAM (8x2=16).

:::tip
Remember, if you use the Enterprise Auditor SharePoint Agent, you must also install the
Sensitive Data Discovery Add-on on the server where the agent is installed.
:::


## SPAA Query Configuration

The SharePointAccess Data Collector is configured through the SharePoint Access Auditor Data
Collector Wizard. The wizard contains the following pages, which change based up on the query
Category selected:

- Welcome
- [SPAA: Category](/docs/accessanalyzer/11.6/admin/datacollector/spaa/category.md)
- [SPAA: SharePoint Data Collection Settings](/docs/accessanalyzer/11.6/admin/datacollector/spaa/settings.md)
- [SPAA: Scan Scoping Options](/docs/accessanalyzer/11.6/admin/datacollector/spaa/scanscopingoptions.md)
- [SPAA: Additional Scoping](/docs/accessanalyzer/11.6/admin/datacollector/spaa/additionalscoping.md)
- [SPAA: Agent Settings](/docs/accessanalyzer/11.6/admin/datacollector/spaa/agentsettings.md)
- [SPAA: Bulk Import Settings](/docs/accessanalyzer/11.6/admin/datacollector/spaa/bulkimportsettings.md)
- [SPAA: DLP Audit Settings](/docs/accessanalyzer/11.6/admin/datacollector/spaa/dlpauditsettings.md)
- [SPAA: Select DLP Criteria](/docs/accessanalyzer/11.6/admin/datacollector/spaa/selectdlpcriteria.md)
- [SPAA: Activity Date Scope](/docs/accessanalyzer/11.6/admin/datacollector/spaa/activitydatescope.md)
- [SPAA: Activity Log Locations](/docs/accessanalyzer/11.6/admin/datacollector/spaa/activityloglocations.md)
- [SPAA: Test Access](/docs/accessanalyzer/11.6/admin/datacollector/spaa/testaccess.md)
- [SPAA: Results](/docs/accessanalyzer/11.6/admin/datacollector/spaa/results.md)
- [SPAA: Summary Page](/docs/accessanalyzer/11.6/admin/datacollector/spaa/summary.md)

![SPAA Data Collector Wizard Welcome Page](/images/accessanalyzer/11.6/admin/datacollector/spaa/welcomepage.webp)

Check the **Don't display this page the next time** box to hide the Welcome page. The wizard saves
this setting with your configuration changes.
