# 1.HUB Metrics Job Group

The 1. HUB Metrics Job Group is comprised of data collection, analysis and reports that focus on
mail-flow activity occurring within your organization. This job group goes out to each server that
contains the Message Tracking Logs and parse the log to return the data to the Access Analyzer
database.

![1.HUB Metrics Job Group in the Jobs Tree](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The following job groups and jobs comprise the 1. HUB Metrics Job Group:

- [0. Collection Job Group](collection/overview.md) – Comprised of jobs that process and analyze the
  message tracking logs on the Exchange Servers in the environment
- [EX_DeliveryTimes Job](ex_deliverytimes.md) – Provides information around organizational and
  server level delivery times
- [EX_DLMetrics Job](ex_dlmetrics.md) – Provides information around distribution list usage
- [EX_DomainMetrics Job](ex_domainmetrics.md) – Provides information about which domains mail-flow
  is going to and coming from
- [EX_HourlyMetrics Job](ex_hourlymetrics.md) – Provides visibility into how much mail-flow the
  organization sends and receives each hour
- [EX_MessageSize Job](ex_messagesize.md) – Provides information around size of messages sent and
  received
- [EX_ServerMetrics Job](ex_servermetrics.md) – Provides visibility into server mail-flow
  statistics, such as, sent, received, journaling, transport and NDR counts and sizes
- [EX_UserMetrics Job](ex_usermetrics.md) – Provides information around each user’s mail-flow in the
  organization
