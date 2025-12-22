---
title: "EX_SendAs Job"
description: "EX_SendAs Job"
sidebar_position: 40
---

# EX_SendAs Job

The EX_SendAs job collects data from Active Directory to identify the Active Directory rights
applied to a mailbox.

## Queries for the EX_SendAs Job

The EX_SendAs job uses the ExchangePS Data Collector.

![Queries for the EX_SendAs Job](/images/accessanalyzer/11.6/solutions/exchange/mailboxes/permissions/collection/sendasquery.webp)

The following query is included in the EX_SendAs Job:

- Send AS - Rights – Collects Exchange mailbox folder permissions

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


## Analysis Tasks for the EX_SendAs Job

View the analysis task by navigating to the **Exchange** > **4. Mailboxes** > **Permissions** >
**0.Collection** > **EX_SendAs** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the EX_SendAs Job](/images/accessanalyzer/11.6/solutions/exchange/mailboxes/permissions/collection/sendasanalysis.webp)

The following analysis task is selected by default:

- Index Collection – Creates an index on the collection for use by downstream analysis and report
  generation
