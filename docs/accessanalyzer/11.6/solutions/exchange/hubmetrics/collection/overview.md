---
title: "0. Collection Job Group"
description: "0. Collection Job Group"
sidebar_position: 20
---

# 0. Collection Job Group

The 0.Collection Job Group is comprised of jobs that process and analyze the message tracking logs
on the Exchange Servers in the environment.

![jobstree](/images/accessanalyzer/11.6/solutions/exchange/hubmetrics/collection/jobstree.webp)

The jobs in the 0.Collection Job Group are:

- [AppletStatusCheck Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/collection/appletstatuscheck.md)
  – Checks the health and status of the applet deployed to the target Exchange servers
- [EX_MetricsCollection Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/collection/ex_metricscollection.md)
  – Comprised of multiple queries that utilize the Exchange Metrics Data Collect to process and
  collect the message tracking logs on the Exchange servers in the environment. These queries
  collect server, domain, user, and distribution list traffic including but not limited to sent,
  received, journal, NDRs, and transports message. These queries are configured to process and
  collect that previous 7 days of Message Tracking Logs the first time this job is run, after that
  it only collects the previous day assuming persistence has not been disabled inside the query.
- [EX_MetricsDetails Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/collection/ex_metricsdetails.md)
  – Collects user to user traffic per day

    :::note
    This job's query needs to be configured to the internal domains from which to collect
    the sender to recipient traffic. By default, the query is configured to collect the previous 1
    day of Message Tracking Logs and has @netwrix.com configured as the domain. If the domains are
    not configured in the query, then most likely data collection does not return.

    :::
