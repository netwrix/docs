---
title: "SPAA: Category"
description: "SPAA: Category"
sidebar_position: 30
---

# SPAA: Category

The SPAA Data Collector Category page contains the following query categories, sub-divided by
auditing focus:

![Category page](/images/accessanalyzer/12.0/admin/datacollector/spaa/category.webp)

The options on the Category page are:

- The **SharePoint Access Audits** category scans hosts for SharePoint access information and has
  two selections to choose from:
    - Scan SharePoint Access – Performs SharePoint access audits
    - Bulk Import Access Scan Results – Imports SharePoint access scan results into the Access
      Analyzer database
- The **Sensitive Content** category scans hosts for sensitive data information and has two
  selections to choose from:
    - Scan for Sensitive Content – Scans for sensitive content on SharePoint
    - Bulk Import Sensitive Content Scan Results – Imports sensitive content scan results into the
      Access Analyzer database
- The **SharePoint Activity Audits** category scans hosts for SharePoint activity information and
  has two selections to choose from:
    - Scan SharePoint Activity – Scans SharePoint activity log files
    - Bulk Import SharePoint Activity Scan Results – Imports SharePoint activity into the Access
      Analyzer database

:::tip
Remember, the sensitive data discovery options require the Sensitive Data Discovery Add-On to be
installed on the Access Analyzer Console. If the SharePoint Agent is used, then it must also be
installed on the application server that hosts the Central Administration component.
:::
