---
title: "AzureADInventory: Category"
description: "AzureADInventory: Category"
sidebar_position: 30
---

# AzureADInventory: Category

The Category page identifies which Inventory task to perform.

![Entra ID Inventory DC Wizard Category page](/images/accessanalyzer/11.6/admin/datacollector/azureadinventory/category.webp)

The two categories are:

- Scan Entra ID – Scans Microsoft Entra ID objects and imports the information into the SQL Server
  database, creating the standard reference tables. This task also maintains the schema for tables
  and views. This is the standard option for this data collector.
- Remove Tables – Removes all tables and views from SQL Server database. This option is designed for
  troubleshooting. When this option is selected, the next wizard page is the Summary page. See the
  [Troubleshooting AzureADInventory Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/azureadinventory/troubleshooting.md)
  topic for more information.

The Scan Entra ID category is the pre-configured setting for the .Entra ID Inventory Job Group.
Therefore, accessing the Entra ID Inventory DC Wizard from the query within that job group does not
display the Category wizard page.
