---
title: "1.HUB Metrics Job Group"
description: "1.HUB Metrics Job Group"
sidebar_position: 20
---

# 1.HUB Metrics Job Group

The 1. HUB Metrics Job Group is comprised of data collection, analysis and reports that focus on
mail-flow activity occurring within your organization. This job group goes out to each server that
contains the Message Tracking Logs and parse the log to return the data to the Enterprise Auditor
database.

![1.HUB Metrics Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/exchange/hubmetrics/jobstree.webp)

The following job groups and jobs comprise the 1. HUB Metrics Job Group:

- [0. Collection Job Group](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/collection/overview.md)
  – Comprised of jobs that process and analyze the message tracking logs on the Exchange Servers in
  the environment
- [EX_DeliveryTimes Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/ex_deliverytimes.md)
  – Provides information around organizational and server level delivery times
- [EX_DLMetrics Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/ex_dlmetrics.md)
  – Provides information around distribution list usage
- [EX_DomainMetrics Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/ex_domainmetrics.md)
  – Provides information about which domains mail-flow is going to and coming from
- [EX_HourlyMetrics Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/ex_hourlymetrics.md)
  – Provides visibility into how much mail-flow the organization sends and receives each hour
- [EX_MessageSize Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/ex_messagesize.md)
  – Provides information around size of messages sent and received
- [EX_ServerMetrics Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/ex_servermetrics.md)
  – Provides visibility into server mail-flow statistics, such as, sent, received, journaling,
  transport and NDR counts and sizes
- [EX_UserMetrics Job](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/ex_usermetrics.md)
  – Provides information around each user’s mail-flow in the organization
