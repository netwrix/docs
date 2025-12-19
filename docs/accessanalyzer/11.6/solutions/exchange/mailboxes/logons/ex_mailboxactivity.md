---
title: "0.Collection > EX_MailboxActivity Job"
description: "0.Collection > EX_MailboxActivity Job"
sidebar_position: 10
---

# 0.Collection > EX_MailboxActivity Job

The EX_MailboxActivity job collects logs of Native Mailbox Access Auditing from Exchange to provide
reporting around mailbox logon activity.

![0.Collection > EX_MailboxActivity Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/exchange/mailboxes/logons/collectionjobstree.webp)

The EX_MailboxActivity job is located in the 0.Collection job group.

:::note
This job requires that Exchange Access Auditing is enabled in the Exchange environment.
:::


## Queries for the EX_MailboxActivity Job

The EX_MailboxActivity Job uses the ExchangePS Data Collector.

![Queries for the EX_MailboxActivity Job](/images/accessanalyzer/11.6/solutions/exchange/mailboxes/logons/mailboxactivityquery.webp)

The following query is included with the EX_MailboxActivity job:

- Exchange Mailbox Logons – Collects data on Exchange mailbox access logons

    - By default set to search all mailboxes. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information

    :::note
    The ExchangePS Data Collector is capable of targeting Exchange Online as well as
    Exchange on-premises environments. See the
    [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/requirements/exchange/support/powershell.md)
    topic for credential requirements.

    :::
