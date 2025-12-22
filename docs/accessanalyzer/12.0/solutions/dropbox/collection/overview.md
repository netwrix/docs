---
title: "0.Collection Job Group"
description: "0.Collection Job Group"
sidebar_position: 20
---

# 0.Collection Job Group

The **Dropbox** > **0.Collection** job group scans the targeted Dropbox site using the DropboxAccess
Data Collector. The collected data is then available to other job groups in the Dropbox solution and
the Access Information Center for analysis.

![0.Collection Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/dropbox/collection/jobstree.webp)

The 0.Collection job group is comprised of:

- [1-Dropbox_Permissions Scan Job](/docs/accessanalyzer/12.0/solutions/dropbox/collection/1-dropbox_permissions_scan.md) – This job is responsible for
  scanning the target Dropbox site
- [1-Dropbox_SDD Scan Job](/docs/accessanalyzer/12.0/solutions/dropbox/collection/1-dropbox_sdd_scan.md) – This job is responsible for scanning sensitive
  data in the target Dropbox site. The Sensitive Data Discovery Add-On is required to run this job.
  The Dropbox sensitive data Discovery Reports in the Access Information Center are also populated
  by this data. See the Resource Audits Overview topic in the
  [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
  for additional information.
- [2-Dropbox_Permissions Bulk Import Job](/docs/accessanalyzer/12.0/solutions/dropbox/collection/2-dropbox_permissions_bulk_import.md) – This job is
  responsible for importing the collected data into the Access Analyzer database
- [2-Dropbox_SDD Bulk Import Job](/docs/accessanalyzer/12.0/solutions/dropbox/collection/2-dropbox_sdd_bulk_import.md) – This job is responsible for
  importing the collected sensitive data into the Access Analyzer database. The Sensitive Data
  Discovery Add-On is required to run this job. The Dropbox sensitive data Discovery Reports in the
  Access Information Center are also populated by this data. See the Resource Audits Overview topic
  in the
  [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
  for additional information.

The relationship between the scan and bulk import jobs requires the following considerations:

- A scan job executed from an Access Analyzer Console must be followed by the corresponding bulk
  import job from the same Access Analyzer Console version
- Two scan jobs processing the same information, for example two 1-Dropbox_Permissions Scan jobs,
  cannot be executed consecutively against the same target host. The corresponding bulk import job,
  for example 2-Dropbox_Permissions Bulk Import job, must be executed in between.
- For the Dropbox Solution, the bulk import jobs require the same connection profile as used in the
  corresponding scan jobs

:::info
When running the sensitive data jobs, disable the permissions jobs, and vice
versa.
:::


:::tip
Remember, prior to running the Dropbox Solution for the first time, it is necessary to generate an
access token to be used in the Connection Profile. This only needs to be done once. See the
[Configure the Dropbox Access Query](1-dropbox_permissions_scan.md#configure-the-dropbox-access-query)
topic for additional information.
:::
