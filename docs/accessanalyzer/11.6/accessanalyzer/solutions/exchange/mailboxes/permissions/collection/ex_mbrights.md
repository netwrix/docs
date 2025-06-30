# EX_MBRights Job

The EX_MBRights job collects data from Active Directory to identify the mailbox rights applied to a
mailbox.

## Queries for the EX_MBRights Job

The EX_MBRights job uses the ExchangePS Data Collector.

![Queries for the EX_MBRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/permissions/collection/mbrightsquery.webp)

The following query is included in the EX_MBRights Job:

- Mailbox Rights – Collects mailbox rights

    - By default set to search all mailboxes. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information

    **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
    Exchange on-premises environments. See the
    [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/accessanalyzer/requirements/solutions/exchange/powershell.md)
    topic for credential requirements.
