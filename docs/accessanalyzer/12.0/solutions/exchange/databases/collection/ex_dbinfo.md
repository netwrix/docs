---
title: "1.Local > EX_DBInfo Job"
description: "1.Local > EX_DBInfo Job"
sidebar_position: 10
---

# 1.Local > EX_DBInfo Job

The EX_DBInfo job utilizes Exchange PowerShell to gather 2010/2013 Mailbox Size information.

![1.Local > EX_DBInfo Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/databases/collection/localjobstree.webp)

The EX_DBInfo job is located in the 1.Local job group.

:::note
An actual CAS name is required for the data collection. When targeting Exchange 2013 or
2016, it is possible for the **Settings** > **Exchange** node to have been configured with a web
address instead of an actual server. See the
[ExchangePS Data Collector & Client Access Server](/docs/accessanalyzer/12.0/solutions/exchange/recommended.md) topic for additional
information.
:::


## Queries for the EX_DBInfo Job

The EX_DBInfo Job uses the ExchangePS Data Collector.

![Queries for the EX_DBInfo Job](/images/accessanalyzer/12.0/solutions/exchange/databases/collection/dbinfoquery.webp)

The following query is included in the EX_DBInfo Job:

- Exchange 2010 Store Size – Collects mailbox size information

    - By default set to search all mailboxes. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](/docs/accessanalyzer/12.0/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information
