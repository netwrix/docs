---
title: "3-Db2_Configuration Job"
description: "3-Db2_Configuration Job"
sidebar_position: 30
---

# 3-Db2_Configuration Job

This job collects Db2 database configuration settings for use in the following analysis jobs and
respective reports.

## Queries for the 3-Db2_Configuration Job

The 3-Db2_Configuration Job uses the SQL Data Collector for queries.

![Query Selection](/images/accessanalyzer/11.6/solutions/databases/db2/collection/configurationquery.webp)

The query is:

- Database Sizing — Returns the database size for the Db2 databases

## Recommended Configuration for the Configuration Query

Prior to running an Db2 0.Collection query, you must establish a connection to the appropriate IBM
Db2 server. As long as that connection is set up first, it is recommended that no configuration
changes be made to the 0.Collection jobs before they run.

It is also recommended that the connection only be established for the 1-Db2 SensitiveDataScan Job.
Once the connection is established, it applies to all jobs in the 0.Collection job group. It does
not apply to any other job groups. For additional information on establishing a database connection,
see
[1-Db2_SensitiveDataScan](/docs/accessanalyzer/11.6/solutions/databases/db2/collection/db2_sensitivedatascan.md).
