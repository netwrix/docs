# 3.Databases Job Group

The 3. Databases Job Group is comprised of data collection, analyses, and reports that focus on
database sizing, growth, and trends.

![3.Databases Job Group in the Jobs Tree](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The following comprise the 3. Databases Job Group:

- [0.Collection Job Group](collection/overview.md) – Comprised of data collection, analysis, and
  reports that focus on database sizing, growth, and trends
- [EX_DBSizing Job](ex_dbsizing.md) – Comprised of analyses and reports which provide information on
  current database sizes, growth statistics, and historical sizing information
- [EX_DBTrending](ex_dbtrending.md) – Creates trend projections for mailbox and public folder
  databases for the entire organization

The 3. Databases Job Group uses a MAPI-based data collector, Exchange2K. Therefore, it requires both
Access Analyzer MAPI CDO and Microsoft Exchange MAPI CDO to be installed on the Access Analyzer
Console server. Once these have been installed, the **Settings** > **Exchange** node must be
configured for proper connection to the Exchange server.

See the [Exchange](../../../admin/settings/exchange.md) topic for additional information.
