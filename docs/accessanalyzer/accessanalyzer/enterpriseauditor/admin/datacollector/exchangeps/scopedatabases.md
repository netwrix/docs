# ExchangePS: Scope by DB

The Scope by Databases page is used to define specific databases to search. This page is enabled when __Scope by Database Target Host: Local Host__ option is selected on the Scope page. See the [ExchangePS: Scope](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/scope.md) topic for additional information.

When using the applet, the data collector returns databases for the Exchange Organization in which the Access Analyzer Console currently resides, and only returns information about those databases. For Remote PowerShell, the data collector returns databases for the Exchange Forest and only returns information about those databases.

![ExchangePS Data Collector Wizard Scope by Databases page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/scopedatabases.png)

Click __Retrieve__ to return all databases in the Exchange Organization and populate them in the Available Databases list. Select the desired databases from Available Databases and click __Add__. The selected databases are added in the Selected Databases list. To remove undesired databases from Selected Databases, select them and click __Remove__. The Select All and Clear All buttons can be used for quick selection.
