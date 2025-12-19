---
title: "ADInventory: Index Update Options"
description: "ADInventory: Index Update Options"
sidebar_position: 60
---

# ADInventory: Index Update Options

Configure options for maintaining SQL Server indexes while running queries using the Index Update
Options page.

![Active Directory Inventory DC Wizard Index Update Options page](/images/accessanalyzer/11.6/admin/datacollector/adinventory/indexupdateoptions.webp)

The options on the Index Update Options page are:

- SQL Index Update Options:

    - Maximum Degree of Parallelism – Set the maximum limit of the Degree of Parallelism used for
      the query. Default is **1**.
    - Minimum Index Reorganization Threshold – Set the minimum index reorganization threshold that
      is performed while running the query. Default is **5** percent.
    - Minimum Index Rebuilding Threshold – Set the minimum index rebuilding threshold that is
      performed while running the query. Default is **31** percent.

- Select Data Collector Schemas– Select which schemas to maintain when running the query by
  selecting them from the table. Enable a schema for indexing by selecting the checkbox next to it.
  Right-click in the table to show options for **Check All**, **Clear All**, **Check All Selected
  Items**, and **Clear All Selected Items**.
