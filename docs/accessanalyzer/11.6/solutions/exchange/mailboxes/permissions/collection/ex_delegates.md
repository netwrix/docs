---
title: "EX_Delegates Job"
description: "EX_Delegates Job"
sidebar_position: 10
---

# EX_Delegates Job

The EX_Delegates job collects data from Active Directory to identify the delegates applied to a
mailbox.

## Queries for the EX_Delegates Job

The EX_Delegates job uses the ExchangePS Data Collector.

![Queries for the EX_Delegates Job](/images/accessanalyzer/11.6/solutions/exchange/mailboxes/permissions/collection/delegatesquery.webp)

The following query is included with the EX_Delegates job:

- Delegates – Collects delegates applied to each mailbox

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
