---
title: "Notification: Type"
description: "Notification: Type"
sidebar_position: 60
---

# Notification: Type

Use the Notification Type page to specify one or more notification types.

![Notification Data Analysis Module wizard Notification Type page](/images/accessanalyzer/12.0/admin/analysis/notification/type.webp)

The following options are available:

- Email – Sends a notification email to specified addresses defined on the SMTP page. See the
  [Notification: SMTP](/docs/accessanalyzer/12.0/admin/analysis/notification/smtp.md) topic for additional information.
- Command-line Executable – Runs a command-line program such as a batch file. On the Command Line
  page, define the specific application to run and any flags or arguments that must be set at
  runtime. See the [Notification: Command Line](/docs/accessanalyzer/12.0/admin/analysis/notification/commandline.md) topic for additional information.
- Event Log – Creates a Windows Event Log item on the Access Analyzer Event Log. On the Event Log
  page, define the following:

    - Type of event (Information, Warning, Error, SuccessAudit, FailureAudit)
    - Event ID
    - Description of the event

    See the [Notification: Event Log](/docs/accessanalyzer/12.0/admin/analysis/notification/eventlog.md) topic for additional information.
