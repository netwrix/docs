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

![Query Selection](/images/accessanalyzer/12.0/solutions/databases/db2/collection/configurationquery.webp)

The query is:

- Database Sizing — Returns the database size for the Db2 databases

## Recommended Configuration for the Configuration Query

Before running a Db2 0.Collection query, you must establish a connection to the appropriate IBM
Db2 server. As long as you set up that connection first, don't make configuration
changes to the 0.Collection jobs before they run.

Establish the connection only for the 1-Db2 SensitiveDataScan Job. After you establish the
connection, it applies to all jobs in the 0.Collection job group. It does
not apply to any other job groups. For additional information on establishing a database connection,
see [1-Db2_SensitiveDataScan](/docs/accessanalyzer/12.0/solutions/databases/db2/collection/db2_sensitivedatascan.md).
