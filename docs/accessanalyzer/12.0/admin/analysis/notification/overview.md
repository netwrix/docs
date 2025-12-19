---
title: "Notification Analysis Module"
description: "Notification Analysis Module"
sidebar_position: 40
---

# Notification Analysis Module

The Notification Data analysis module provides the ability to send an email or command-line
notification to selected targets based on the values contains in any table.

The Notification Data Analysis Module has the following prerequisites:

- Configure the **Notification** node in the global settings

    - See the [Notification](/docs/accessanalyzer/12.0/admin/settings/notification.md) topic for additional information

- Enable History for the table specified as the source

    - Only required if configuring Frequency or Time Window, or when using the Change Detection
      table as a source on the Table Type page

## Configuration

The Notification analysis module is configured through the Notification Data Analysis Module wizard,
which contains the following wizard pages:

- Welcome
- [Notification: Table Type](/docs/accessanalyzer/12.0/admin/analysis/notification/tabletype.md)
- [Notification: Select Table](/docs/accessanalyzer/12.0/admin/analysis/notification/selecttable.md)
- [Notification: Change Type](/docs/accessanalyzer/12.0/admin/analysis/notification/changetype.md)
- [Notification: Criteria](/docs/accessanalyzer/12.0/admin/analysis/notification/criteria.md)
- [Notification: Hosts](/docs/accessanalyzer/12.0/admin/analysis/notification/hosts.md)
- [Notification: Type](/docs/accessanalyzer/12.0/admin/analysis/notification/type.md)
- [Notification: SMTP](/docs/accessanalyzer/12.0/admin/analysis/notification/smtp.md)
- [Notification: Command Line](/docs/accessanalyzer/12.0/admin/analysis/notification/commandline.md)
- [Notification: Event Log](/docs/accessanalyzer/12.0/admin/analysis/notification/eventlog.md)
- [Notification: Frequency](/docs/accessanalyzer/12.0/admin/analysis/notification/frequency.md)
- [Notification: Time Window](/docs/accessanalyzer/12.0/admin/analysis/notification/timewindow.md)
- [Notification: Summary](/docs/accessanalyzer/12.0/admin/analysis/notification/summary.md)

The Welcome page lists the prerequisites needed for the Notification Analysis Module to function
properly.

![Notification Data Analysis Module wizard Welcome page](/images/accessanalyzer/12.0/admin/analysis/notification/welcome.webp)

There are no configurable settings on the Welcome page. To proceed, click **Next**.
