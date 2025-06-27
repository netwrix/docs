# 0.Collection > EX_MBSize Job

The EX_MBSize job collects information from the Exchange environment about the mailbox sizes in the
environment.

![0.Collection > EX_MBSize Job in the Jobs Tree](/img/product_docs/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The EX_MBSize job is located in the 0.Collection job group.

## Queries for the EX_MBSize Job

The EX_MBSize Job uses the ExchangePS Data Collector.

![Queries for the EX_MBSize Job](/img/product_docs/accessanalyzer/solutions/exchange/mailboxes/sizing/mbsizequery.webp)

The following query is included in the EX_MBSize Job:

- Mailbox Counts and Sizes – Identifies the Active Directory rights applied to a mailbox

    - By default set to search all mailboxes. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](/docs/accessanalyzer/12.0/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information

    **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
    Exchange on-premises environments. See the
    [Exchange PowerShell Permissions](/docs/accessanalyzer/12.0/requirements/solutions/exchange/powershell.md)
    topic for credential requirements.
