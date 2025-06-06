# 0.Collection > EX\_MailboxActivity Job

The EX\_MailboxActivity job collects logs of Native Mailbox Access Auditing from Exchange to provide reporting around mailbox logon activity.

![0.Collection > EX_MailboxActivity Job in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The EX\_MailboxActivity job is located in the 0.Collection job group.

__NOTE:__ This job requires that Exchange Access Auditing is enabled in the Exchange environment.

## Queries for the EX\_MailboxActivity Job

The EX\_MailboxActivity Job uses the ExchangePS Data Collector.

![Queries for the EX_MailboxActivity Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/logons/mailboxactivityquery.png)

The following query is included with the EX\_MailboxActivity job:

- Exchange Mailbox Logons – Collects data on Exchange mailbox access logons

  - By default set to search all mailboxes. It can be scoped.
  - See the [Scope the ExchangePS Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#Scope-the-ExchangePS-Data-Collector) topic for additional information

  __NOTE:__ The ExchangePS Data Collector is capable of targeting Exchange Online as well as Exchange on-premises environments. See the [Exchange PowerShell Permissions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/powershell.md) topic for credential requirements.
