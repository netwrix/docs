# Features > EX_Features Job

The EX_Features job is comprised of data collection and a report that provides information around
which features have been enabled or disabled on Mailboxes, such as ActiveSync, IMAP, POP and more.

**_RECOMMENDED:_** Schedule the Features Job Group to run weekly on any desired recurrence.

![Features > EX_Features Job in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/featuresjobstree.png)

The EX_Features job is located in the Features job group.

## Queries for the EX_Features Job

The EX_Features Job uses the ExchangePS Data Collector.

![Queries for the EX_Features Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/featuresquery.png)

The following query is included with the EX_Features Job:

- User Mailbox Settings – Collects user mailbox settings

    - By default set to search all mailboxes. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information

    **NOTE:** The ExchangePS Data Collector is capable of targeting Exchange Online as well as
    Exchange on-premises environments. See the
    [Exchange PowerShell Permissions](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/solutions/exchange/powershell.md)
    topic for credential requirements.

In addition to the table created by the query, the EX_Features Job produces the following
pre-configured report:

| Report           | Description                                                              | Default Tags | Report Elements                                                                         |
| ---------------- | ------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------- |
| Mailbox Features | This report identifies features introduced in Exchange for each mailbox. | None         | This report is comprised of one element: - Table – Provides details on mailbox features |
