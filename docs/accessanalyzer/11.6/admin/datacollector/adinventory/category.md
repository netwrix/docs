---
title: "ADInventory: Category"
description: "ADInventory: Category"
sidebar_position: 20
---

# ADInventory: Category

Use the category page to identify which Active Directory task to perform.

![Active Directory Inventory DC Wizard Category page](/images/accessanalyzer/11.6/admin/datacollector/adinventory/category.webp)

The categories include the following tasks:

- Scan Active Directory – Scans Active Directory objects and imports the information into SQL Server
  database, creating the standard reference tables. This task is also responsible for maintaining
  the schema for tables and views. This is the standard option for this data collector.
- Update SQL Indexes – Reorganizes or rebuilds indexes in the Enterprise Auditor SQL storage
  database. When this option is selected, the next wizard page is the Results page.
- Remove Tables – Removes all tables and views from SQL Server database. This option is designed for
  troubleshooting. When this option is selected, the next wizard page is the Summary page. See the
  [Clear ADInventory Tables](/docs/accessanalyzer/11.6/admin/datacollector/adinventory/cleartables.md)
  topic for more information.
- Drop Domain – Remove host domain related data from SQL server

:::note
The Scan Active Directory category is the pre-configured setting for the .Active Directory
Inventory Job Group. Therefore, accessing the Active Directory Inventory DC Wizard from the query
within that job group does not display the Category wizard page.

:::
