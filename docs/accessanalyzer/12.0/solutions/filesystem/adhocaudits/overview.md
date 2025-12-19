---
title: "Ad Hoc Audits Job Group"
description: "Ad Hoc Audits Job Group"
sidebar_position: 100
---

# Ad Hoc Audits Job Group

The Ad Hoc Audits Job Group is designed to report on resources and trustees that have been provided
by the user from targeted file servers.

The Ad Hoc Audits Job Group tables and reports are blank if the CSV file is not modified to contain
the required information before job execution.

:::info
Run these jobs independently of the solution.
:::


![Ad Hoc Audits Job Group](/images/accessanalyzer/12.0/solutions/filesystem/adhocaudits/jobstree.webp)

The Ad Hoc Audits Job Group is comprised of:

- [FS_ShareAudit Job](/docs/accessanalyzer/12.0/solutions/filesystem/adhocaudits/fs_shareaudit.md) – Designed to report on shares from targeted file servers
  based on user input
- [FS_TrusteePermissions Job](/docs/accessanalyzer/12.0/solutions/filesystem/adhocaudits/fs_trusteepermissions.md) – Designed to report on trustees from
  targeted file servers based on user input

For both of these jobs, the host list is set to Local host at the job level. The assigned Connection
Profile needs to have rights on the Access Analyzer Console server to access the CSV file saved in
the job’s directory. The Connection Profile can be set at either the Ad Hoc Audits > Settings >
Connection node (applies to both jobs) or in the job’s Properties window on the Connection tab.
