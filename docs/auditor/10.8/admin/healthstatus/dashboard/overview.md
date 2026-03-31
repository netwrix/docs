---
title: "Health Status Dashboard"
description: "Health Status Dashboard"
sidebar_position: 10
---

# Health Status Dashboard

New Health Status dashboard facilitates Auditor maintenance and troubleshooting tasks, providing IT
specialists with at-a-glance view on the most critical factors: data collection performance, product
health and storage capacity. The dashboard comprises a set of widgets that display the status of
these aspects using aggregated statistics and charts. Nearly each widget allows you to drill down to
the detailed information on the aspect you are interested in.

To view the dashboard, on the main Auditor page, click the Health status tile located in the
Configuration section.

The dashboard includes the following widgets:

- The Activity records by date chart—Shows the number of activity records produced by your data
  sources, collected and saved by Netwrix Auditor during the last 7 days. See the
  [Activity Records Statistics](/docs/auditor/10.8/admin/healthstatus/dashboard/activityrecordstatistics.md) topic for additional information.
- The Monitoring overview widget—Shows aggregated statistics on the statuses of all monitoring plans
  configured in Netwrix Auditor at the moment. See the [Monitoring Overview](/docs/auditor/10.8/admin/healthstatus/dashboard/monitoringoverview.md)
  topic for additional information.
- The Health log chart—Shows the statistics on the events written in the Netwrix Auditor health log
  in the last 24 hours. Click the link in this widget to view the log. See the
  [Netwrix Auditor Health Log](/docs/auditor/10.8/admin/healthstatus/dashboard/healthlog.md) topic for additional information.
- The Database statistics widget—Helps you to estimate database capacity on the default SQL Server
  instance that hosts the product databases. See the [Database Statistics](/docs/auditor/10.8/admin/healthstatus/dashboard/databasestatistics.md)
  topic for additional information.
- The Long-Term Archive widget—Helps you to estimate the capacity of the Long-Term Archive
  file-based storage. To modify its settings, including location and retention, click the link in
  this widget. See the [System Health](/docs/auditor/10.8/requirements/longtermarchive.md#system-health) topic
  for additional information.
- The Working Folder widget—Helps you to estimate the capacity of the Auditor working folder used to
  keep operational information (configuration files of the product components, log files, and other
  data) on the Auditor Server. See the
  [System Health](/docs/auditor/10.8/requirements/longtermarchive.md#system-health) topic for additional
  information.

![healthstatusdashboard_thumb_0_0](/images/auditor/10.8/admin/healthstatus/dashboard/healthstatusdashboard_thumb_0_0.webp)

You can also instruct Netwrix Auditor to forward similar statistics as a health summary email to
personnel in charge. For that, click Notification settings, then follow the steps described in the
[Notifications](/docs/auditor/10.8/admin/settings/notifications.md) topic.
