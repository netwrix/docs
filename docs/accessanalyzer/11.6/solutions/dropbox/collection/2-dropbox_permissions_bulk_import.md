---
title: "2-Dropbox_Permissions Bulk Import Job"
description: "2-Dropbox_Permissions Bulk Import Job"
sidebar_position: 30
---

# 2-Dropbox_Permissions Bulk Import Job

The 2-Dropbox_Permissions Bulk Import job imports the data collected by the 1-Dropbox _Permissions
Scan job to the Enterprise Auditor database for use by the analysis tasks.

:::warning
This job should not be run if running sensitive data scans against the Dropbox Business
environment.
:::


## Queries for the 2-Dropbox_Permissions Bulk Import Job

The 2-Dropbox_Permissions Bulk Import job has been preconfigured to run with the default settings
with the category of Bulk Import Access Scan Results.

![Queries for the 2-Dropbox_Permissions Bulk Import Job](/images/accessanalyzer/11.6/solutions/dropbox/collection/permissionsbulkimportquery.webp)

The query for the 2-Dropbox_Permissions Bulk Import job is:

- Dropbox Bulk Import – Imports data collected by the 1-Dropbox_Permissions Scan job to the
  Enterprise Auditor database

There are no customization options available for this job. The Summary page of the Dropbox Access
Auditor Data Collector wizard can be viewed at the **Jobs** > **Dropbox** > **0.Collection** >
**2-Dropbox_Permissions Bulk Import** > **Configure** > **Queries** node.
