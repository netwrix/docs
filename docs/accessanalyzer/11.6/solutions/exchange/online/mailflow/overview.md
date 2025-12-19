---
title: "Mailflow Job Group"
description: "Mailflow Job Group"
sidebar_position: 20
---

# Mailflow Job Group

The Mailbox job group is comprised of jobs that process and analyze the Message Tracking Logs in the
Office 365 environment. This job group parses message tracking and stores the data for analysis and
reporting in the Enterprise Auditor database.

![Mailflow Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/exchange/online/mailflow/mailflowjobstree.webp)

The jobs in the Mailflow job group are:

- [0. Collection > EX_Mailflow Job](/docs/accessanalyzer/11.6/solutions/exchange/online/mailflow/ex_mailflow.md)
  – Collects message trace data from an Office 365 server
- [EX_Mailflow_DL Job](/docs/accessanalyzer/11.6/solutions/exchange/online/mailflow/ex_mailflow_dl.md)
  – Comprised of analysis and reports which provide information around distribution list usage
- [EX_Mailflow_Domain Job](/docs/accessanalyzer/11.6/solutions/exchange/online/mailflow/ex_mailflow_domain.md)
  – Comprised of analysis and reports which provide information about which domains mail flow is
  going to and coming from
- [EX_Mailflow_Mailbox Job](/docs/accessanalyzer/11.6/solutions/exchange/online/mailflow/ex_mailflow_mailbox.md)
  – Comprised of analysis and reports which provide information around each user's mail-flow in the
  organization
- [EX_Mailflow_OrgOverview Job](/docs/accessanalyzer/11.6/solutions/exchange/online/mailflow/ex_mailflow_orgoverview.md)
  – Comprised of analysis and reports which provide information around the overall traffic in the
  organization
