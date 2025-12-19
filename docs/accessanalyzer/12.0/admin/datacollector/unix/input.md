---
title: "Unix: Input"
description: "Unix: Input"
sidebar_position: 20
---

# Unix: Input

The Input page configures the source for input data.

![Unix Data Collector Wizard Input page](/images/accessanalyzer/12.0/admin/datacollector/unix/input.webp)

The configurable options are:

- Use SQL table for scoping input – Select the checkbox to enable scoping options
- Input Table

    - Name – Select the SQL table from the drop-down menu
    - Filter Nulls – Select the checkbox to ignore blank rows in the table
    - Filter Duplicates – Select the checkbox to ignore duplicate rows in the table
    - Filter by host column – Select the checkbox to sort rows by host

- Columns – Select the desired rows from the SQL table
- Data Input Method

    - Run command once per table row
    - Send table data via standard input

- Column Separator – Specify the column delimiter

Click **Next** to continue the setup, or **Back** to return to the previous page.
