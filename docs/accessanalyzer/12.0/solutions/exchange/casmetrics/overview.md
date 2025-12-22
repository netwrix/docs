---
title: "2.CAS Metrics Job Group"
description: "2.CAS Metrics Job Group"
sidebar_position: 30
---

# 2.CAS Metrics Job Group

The 2. CAS Metrics Job Group is comprised of data collection, analysis and reports that focus on
remote connections (Outlook Web Access, ActiveSync, and Outlook Anywhere Access) occurring within
your organization. This job group goes out to each server that contains the IIS Logs and parses the
logs to return the data to the Access Analyzer database.

![2.CAS Metrics Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/jobstree.webp)

The jobs in the 2.CAS Metrics Job Group are:

- [0.Collection > EX_IISLogs Job](/docs/accessanalyzer/12.0/solutions/exchange/casmetrics/ex_iislogs.md) – Provides data collection to be utilized in the
  ActiveSync, Outlook Web Access, and Outlook Anywhere Reports. This job group goes out to each
  server that contains the IIS Logs and parses the logs to return the data to the Access
  Analyzer database.
- [ActiveSync > EX_ActiveSync Job](/docs/accessanalyzer/12.0/solutions/exchange/casmetrics/ex_activesync.md) – Provides visibility into ActiveSync Traffic
  in the Organization
- [Outlook Anywhere > EX_RPCTraffic Job](/docs/accessanalyzer/12.0/solutions/exchange/casmetrics/ex_rpctraffic.md) – Provides visibility into Outlook
  Anywhere or RPC\HTTPs Traffic in the organization
- [Outlook Web Access > EX_OWATraffic Job](/docs/accessanalyzer/12.0/solutions/exchange/casmetrics/ex_owatraffic.md) – Provides visibility into Outlook Web
  Access Traffic in the organization
- [EX_ASPolicies Job](/docs/accessanalyzer/12.0/solutions/exchange/casmetrics/ex_aspolicies.md) – Comprised of data collection and a report to show
  information about what policies are enabled for which users

    :::note
    An actual CAS name is required for the data collection. When targeting Exchange 2013
    or 2016, it is possible for the **Settings** > **Exchange** node to have been configured with a
    web address instead of an actual server. See the
    [ExchangePS Data Collector & Client Access Server](/docs/accessanalyzer/12.0/solutions/exchange/recommended.md) topic for additional
    information.

    :::
