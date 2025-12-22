---
description: >-
  Explains why Netwrix Auditor reports show changes in an incorrect time zone
  and how to change the time zone on the SQL Server Reporting Services (SSRS)
  server. Also notes which reports are unaffected.
keywords:
  - time zone
  - SSRS
  - SQL Server Reporting Services
  - Netwrix Auditor
  - reports
  - timestamps
  - report server
  - custom search-based reports
  - time
products:
  - auditor
sidebar_label: Changes Reported in Wrong Time Zone
tags: []
title: "Changes Reported in Wrong Time Zone"
knowledge_article_id: kA00g000000H9SWCA0
---

# Changes Reported in Wrong Time Zone

## Question

Netwrix Auditor reports changes in a wrong time zone. Is it possible to fix time zone settings?

## Answer

> **NOTE:** The SQL Server Reporting Services (SSRS) server time zone change won't affect the prior timestamp values. If you change your SSRS server time zone with a change made at 9:00 AM (as per your SSRS server time zone), it will still be recorded as made at 9:00 AM.

If Netwrix Auditor and SQL Server Reporting Services do not share the same server, the predefined reports will show both date and time zone based on the SQL Server Reporting Services server settings. Refer to the following steps to change the time zone set locally on your SSRS server:

1. Open the **Start** menu and select the **Settings** menu.
2. Select the **Time & Language** tab.
3. In the left pane, select the **Date & time** tab.
   1. You can click the **Change** button under the **Change date and time** section to set up the specific time for your SSRS server. Deselect the **Set time automatically** switch to enable the option.
   2. You can also separately set the time zone — deselect the **Set time zone automatically** switch to enable the option.

> **NOTE:** You must restart SSRS service in order for the time zone change to take effect.

Custom search-based reports and queries are not affected by the SSRS time zone. Learn more about custom search-based reports in the Reports – Custom Search-Based Reports ⸱ v10.6 article. To learn more about changing SSRS time zone, refer to the [Change Time Zones and Clock Settings on a Report Server · Microsoft 🤝](https://learn.microsoft.com/en-us/sql/reporting-services/subscriptions/change-time-zones-and-clock-settings-on-a-report-server?view=sql-server-ver16) article.
