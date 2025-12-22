---
title: "NIS: Category"
description: "NIS: Category"
sidebar_position: 30
---

# NIS: Category

The Category page is used to identify which type of NIS information to retrieve.

![NIS Data Collector Wizard Category page](/images/accessanalyzer/11.6/admin/datacollector/nis/category.webp)

The NIS Data Collector contains two query categories:

- Scan NIS Users and Groups – Scans a NIS domain for user and group information, map them to
  Windows-style SIDS, and import the information into SQL server creating the standard reference
  tables. This task is also responsible for maintaining the schema for tables and views. This is the
  standard option for this data collector.
- Custom NIS Scan –Scan and parse a specified NIS map and import the information into the SQL Server
  database creating tables specific to the job configuration

The Scan NIS Users and Groups category is the pre-configured setting for the .NIS Inventory job
group. To use the Custom NIS Scan category, create a query in a new job using the NIS Data Collector
and configure the query as desired.
