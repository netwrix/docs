---
description: >-
  Steps to improve Netwrix Auditor performance when data collection takes too
  long, including guidance on monitoring plans, hardware, network compression,
  database retention, antivirus exclusions, scope settings, and omit lists.
keywords:
  - Netwrix Auditor
  - performance
  - data collection
  - monitoring plans
  - database retention
  - network compression
  - antivirus exclusions
  - Event Log Manager
  - omit lists
products:
  - auditor
sidebar_label: Long Data Collection — Improving the Performance
tags: []
title: "Long Data Collection — Improving the Performance"
knowledge_article_id: kA00g000000H9WjCAK
---

# Long Data Collection — Improving the Performance

## Question

Data collection takes too long to complete. How to improve the Netwrix Auditor performance to speed up the data collection?

## Answer

The following recommendations will allow you to improve the overall Netwrix Auditor performance.

### Split data sources in separate monitoring plans

For the initial setup and post-setup stages, it is highly recommended to stick to the following structure:

- One database per monitoring plan.
- One monitoring plan per data source.

> **NOTE:** It is possible to split collections of specific data sources in multiple monitoring plans, although it is important to considering the following:
>
> - SQL edition (Express or Standard or other).
> - Average number of activity records of your single data source.
> - Hardware limitations.

In general, it is recommended to use different databases for different data sources to avoid rapid database size growth and ease the troubleshooting process. For additional information on creation of monitoring plans, refer to the following article: [Monitoring Plans](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/overview)

### Hardware limitations

In case of recent changes to your environment that led to hindered performance, refer to the following article for reference on hardware requirements for your infrastructure: [Hardware Requirements](https://docs.netwrix.com/docs/auditor/10_8/requirements/console)

### Network traffic compression

To reduce network traffic in distributed deployments, multi-site networks, and other environments with remote locations that have limited bandwidth, it is recommended to use network traffic compression. This option also helps reduce the CPU load for the Netwrix Auditor host — for additional information on setting up traffic compression, refer to the following article: [Settings for Data Collection](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/create#settings-for-data-collection)

### Decrease database retention period

Depending on your environment and needs, the Audit Database retention period can be either increased or decreased. It should be noted, that higher retention period for any database will also lead to greater database sizes and longer times to search for stored data. For additional information on setting a database retention period, refer to the following article: [Configure Database Retention](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/auditdatabase#configure-database-retention)

### Exclude Netwrix-related folders from antivirus scans

As Netwrix Auditor creates and writes audit data in smaller portions, your antivirus suite will attempt to check every new or edited file to complete the threat check. Full file reads might take extra time to complete, hindering the writing capability of Netwrix Auditor, in some cases leading to timeouts and additional RAM and CPU loads. Refer to the following article for additional information on folders to be excluded from regular antivirus checks: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)

### Set up data collection for State-in-Time reports

Some collectors allow for scheduling of State-in-Time data collection — increasing the time window between these events will help to avoid resource consumption spikes. Same applies to Activity Summary reports — increasing the time window between these reports will allow you to decrease the momentary loads. Both these changes won't affect the overall resource consumption, they will distribute the consumption evenly. Refer to the following article for additional information on editing data sources: [Manage Data Sources](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/datasources)

### Specify domain controllers and Exchange servers for data collection

You can specify DCs and Exchange servers to collect data from — this allows to mitigate the effects of decreased network availability, the hardware underperformance, and distance to the Netwrix host of domain controllers and Exchange servers. Refer to `dclist.txt`, `dirsyncdclist.txt`, and `aal_serverlist.txt` files to list the closest and most reliable DCs and Exchange servers.

### Group membership

Group membership data is collected to include information on group membership of the account that performed a change or an action. Disabling the group membership data collection will reduce the monitoring scope to the audited domain only, but this might increase the overall Active Directory Auditing performance as Netwrix Auditor won't have to query global catalogs in the forest. Refer to the following steps to disable the group membership monitoring:

1. Select your monitoring plan and click **Edit**.
2. Select the appropriate data source and click **Edit data source** in the right pane.
3. Select the **General** tab in the left pane.
4. Uncheck the **Group membership** under the **Detect additional details** section.

### Event Log Manager

In case you have an Event Log Manager plan set up, make sure it doesn't monitor data covered by one of your Netwrix Auditor monitoring plans to avoid redundant monitoring data and performance impact. Refer to the following steps to can disable event log collection via Event Log Manager:

1. Launch Netwrix Auditor Event Log Manager.
2. Select your monitoring plan and click **Edit**.
3. In the top left corner, uncheck the **Enable event log collection** checkbox and click **Save**.

### Omit lists

You can limit the monitoring scope in your environment via omit lists — this allows to proactively decrease the DB loads as changes for omitted items are not recorded. For additional information on how to exclude users and objects via Netwrix Auditor UI, refer to the following article: [How to Exclude Users and Objects from Monitoring Scope in Netwrix Auditor UI](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-exclude-users-and-objects-from-monitoring-scope-in-netwrix-auditor-ui). For additional information on how to use omit lists, refer to the following article: [How to Use Omit Lists](https://docs.netwrix.com/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-use-omit-lists)

### Related articles

- [Monitoring Plans](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/overview)
- [Hardware Requirements](https://docs.netwrix.com/docs/auditor/10_8/requirements/console)
- [Settings for Data Collection](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/create#settings-for-data-collection)
- [Configure Database Retention](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/auditdatabase#configure-database-retention)
- [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
- [Manage Data Sources](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/datasources)
- [How to Exclude Users and Objects from Monitoring Scope in Netwrix Auditor UI](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-exclude-users-and-objects-from-monitoring-scope-in-netwrix-auditor-ui)
- [How to Use Omit Lists](https://docs.netwrix.com/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-use-omit-lists)
