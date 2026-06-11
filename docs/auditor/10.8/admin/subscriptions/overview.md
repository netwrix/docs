---
title: "Subscriptions"
description: "Overview of subscription types in Netwrix Auditor: SSRS, Overview, Search, Behavior Anomalies, and Risks."
sidebar_position: 60
---

# Subscriptions

Subscriptions let you schedule automated delivery of Netwrix Auditor reports, search results, and dashboard data — by email or to a file share. Use subscriptions to stay informed about activity in your environment without logging into the product regularly. For example, an IT manager can automatically provide auditors with weekly compliance reports. Subscription emails may vary slightly depending on the file delivery method and subscription type.

You can add any elements (a dashboard, report, alert, risk, and more) to the Auditor Home screen for quick access. For details, see [Navigation](/docs/auditor/10.8/admin/navigation/overview.md) and [Customize Home Screen](/docs/auditor/10.8/admin/navigation/customizehome.md).

## Subscription to Overview Reports

This subscription type has the following key features:

- Enterprise-level overview reports that aggregate activity data across all audited data sources and monitoring plans, providing a centralized view of your IT infrastructure.
- Data source overview reports that aggregate audit data for a specific data source, showing activity trends by date, user, server, and other dimensions specific to the data source.
- Filters to refine the subscription data, including Monitoring Plan, Timeframe, and more.

## Subscription to SSRS Reports

Netwrix Auditor uses SQL Server Reporting Services (SSRS) as its report generation engine. This subscription type provides access to a library of over 100 predefined report templates grouped by business categories and data sources. Key features include:

- Change and activity reports that show detailed data on changes and activity for a specific data source, with grouping, sorting, and filtering capabilities.
- State-in-Time reports to review the point-in-time state of a data source, based on daily snapshots.
- Compliance reports grouped by regulatory standards to help you demonstrate compliance.
- Organization level reports that aggregate activity data across all data sources and monitoring plans.
- Reports with review status to track team workflow in the change management process.
- User Behavior and Blind Spot Analysis report pack to identify vulnerabilities such as data access anomalies and suspicious files.

## Subscription to Search

This subscription type has the following key features:

- Flexible set of filters to modify search for your business use and create another subscription based on the existing one.
- Advanced filters to make your results context match.

## Subscription to Behavior Anomalies

This subscription type has the following key features:

- Summary of behavior anomalies detected during the selected timeframe, including the risk score timeline and the most active users by risk score.
- Accumulated risk score data to help you identify users whose activity patterns require attention.
- A Timeframe filter to set the data period: 7 or 30 days.

## Subscription to Risks

This subscription type has the following key features:

- Risk assessment overview based on the latest state-in-time data to monitor the state of your Active Directory users and computers, as well as files and folders and other data at a specific moment.
- Automatically calculated metrics to identify risks and potential vulnerabilities such as sensitive data and malicious files.
- Filters for monitoring plans and risk categories to receive exactly the data you need.

## See Also

- [Create Subscriptions](/docs/auditor/10.8/admin/subscriptions/create.md)
- [Review and Manage Subscriptions](/docs/auditor/10.8/admin/subscriptions/manage.md)
