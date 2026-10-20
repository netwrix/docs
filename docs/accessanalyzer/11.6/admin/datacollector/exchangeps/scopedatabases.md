---
title: "ExchangePS: Scope by DB"
description: "ExchangePS: Scope by DB"
sidebar_position: 40
---

# ExchangePS: Scope by DB

Use the Scope by Databases page to define specific databases to search. You enable this page by
selecting the **Scope by Database Target Host: Local Host** option on the Scope page. See the
[ExchangePS: Scope](/docs/accessanalyzer/11.6/admin/datacollector/exchangeps/scope.md) topic
for additional information.

When using the applet, the data collector returns databases for the Exchange Organization in which
the Enterprise Auditor Console resides, and only returns information about those
databases. For Remote PowerShell, the data collector returns databases for the Exchange Forest and
only returns information about those databases.

![ExchangePS Data Collector Wizard Scope by Databases page](/images/accessanalyzer/11.6/admin/datacollector/exchangeps/scopedatabases.webp)

Click **Retrieve** to return all databases in the Exchange Organization and populate them in the
Available Databases list. Select the databases you want from Available Databases and click **Add**.
The wizard adds the selected databases to the Selected Databases list. To remove undesired databases
from Selected Databases, select them and click **Remove**. Use the Select All and Clear All buttons
for quick selection.
