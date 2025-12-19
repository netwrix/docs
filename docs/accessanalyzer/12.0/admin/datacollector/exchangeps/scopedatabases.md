---
title: "ExchangePS: Scope by DB"
description: "ExchangePS: Scope by DB"
sidebar_position: 40
---

# ExchangePS: Scope by DB

The Scope by Databases page is used to define specific databases to search. This page is enabled
when **Scope by Database Target Host: Local Host** option is selected on the Scope page. See the
[ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md) topic for additional information.

When using the applet, the data collector returns databases for the Exchange Organization in which
the Access Analyzer Console currently resides, and only returns information about those databases.
For Remote PowerShell, the data collector returns databases for the Exchange Forest and only returns
information about those databases.

![ExchangePS Data Collector Wizard Scope by Databases page](/images/accessanalyzer/12.0/admin/datacollector/exchangeps/scopedatabases.webp)

Click **Retrieve** to return all databases in the Exchange Organization and populate them in the
Available Databases list. Select the desired databases from Available Databases and click **Add**.
The selected databases are added in the Selected Databases list. To remove undesired databases from
Selected Databases, select them and click **Remove**. The Select All and Clear All buttons can be
used for quick selection.
