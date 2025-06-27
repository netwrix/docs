# Sizing Job Group

The Sizing job group provides data collection, analyses, and reports which focus on mailbox sizing,
growth, and trends.

**_RECOMMENDED:_** Schedule the Sizing job group to run daily at 4 AM.

![Sizing Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the Sizing job group are:

- [0.Collection > EX_MBSize Job](/docs/accessanalyzer/11.6/solutions/exchange/mailboxes/sizing/ex_mbsize.md)
  – Collects information from the environment about the mailbox sizes in the environment
- [EX_MailboxSizes Job](/docs/accessanalyzer/11.6/solutions/exchange/mailboxes/sizing/ex_mailboxsizes.md)
  – Provides analysis and reporting around Mailbox sizing and growth
- [EX_StaleMailboxes Job](/docs/accessanalyzer/11.6/solutions/exchange/mailboxes/sizing/ex_stalemailboxes.md)
  – Provides analysis and reporting around orphaned and Stale Mailboxes
- [EX_StoreSizes Job](/docs/accessanalyzer/11.6/solutions/exchange/mailboxes/sizing/ex_storesizes.md)
  – Provides analysis and reporting around Database Sizing based on Mailbox Sizes
