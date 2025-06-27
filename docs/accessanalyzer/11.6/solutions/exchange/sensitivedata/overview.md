# 7.Sensitive Data Job Group

The 7. Sensitive Data job group is comprised of jobs which locate sensitive data found in mailboxes
and public folders in the Exchange environment.

![7.Sensitive Data Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following comprise the 7. Sensitive Data job group:

**NOTE:** These jobs are compatible with the Office 365 environment.

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/exchange/sensitivedata/collection/overview.md)
  – Locates sensitive data found in mailboxes and public folders in the Exchange environment
- [EX_SDDResults Job](/docs/accessanalyzer/11.6/solutions/exchange/sensitivedata/ex_sddresults.md)
  – Contains analyses and reports to provide insight into the types of sensitive data that was
  located within Exchange mailboxes and public folders within the environment

The 7. Sensitive Data job group is comprised of jobs that utilize the EWSMailbox and EWSPublicFolder
Data Collectors to locate sensitive data found in mailboxes and public folders in the Exchange
environment. It also contains analysis and reporting jobs to order and analyze the data returned by
the queries. See the
[Exchange](/docs/accessanalyzer/11.6/admin/settings/exchange.md)
topic for additional information.
