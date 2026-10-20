---
title: "SQLViewCreations: Columns"
description: "SQLViewCreations: Columns"
sidebar_position: 40
---

# SQLViewCreations: Columns

The Result Columns page lists the tables selected on the Input Select page.

![View and Table Creation Analysis Module wizard Result Columns page](/images/accessanalyzer/12.0/admin/analysis/sqlviewcreation/columns.webp)

Expand the table to show its columns. Then, select the checkbox next to the column to include it in
the resulting table or view. If you join two data tables, the resulting table displays at
the bottom of the grid. Use the scroll bar to view any hidden tables or data points.

The grid provides the following options for formatting the resulting table or view:

- Check All – Selects all checkboxes in the Checked column
- Uncheck All – Clears all checkboxes in the Checked column
- Add Column – Opens the New Trend Column window, where columns can be added to the table
- Delete – Deletes a selected column

    - You can't delete original columns. You can only delete columns that you added.

- Show All Columns/Hide Unchecked Columns – Hides rows that aren't selected, or if
 columns are hidden, displays all columns in the table
- Checked – Selects data columns for inclusion in the resulting table or view
- Column Name – Displays the data column name
- Group Operation – Accesses the available group operations that can be applied to individual data
  points. Click a cell in this column to display the dropdown arrow. The following operations
  are available:

    - (none)
    - Average
    - Count
    - Maximum
    - Minimum
    - Sum
    - Variance

- Data Label – Displays any data label for the associated data point. Data labels override the
  column name on the materialized table or view. If applying a group operation, a default data label
  shows. To apply a custom label, click in the cell and enter the label.
- Order By Operation – Accesses the available order-by operations that can be applied to individual
  data points. Click a cell in this column to display the dropdown arrow. The following
  operations are available:

    - None
    - Ascending
    - Descending

:::note
If you sort at least one column by value, Access Analyzer enables the **With ties** option on the
Result Constraints page. See the [SQLViewCreation: Result Constraints](/docs/accessanalyzer/12.0/admin/analysis/sqlviewcreation/resultconstraints.md) topic
for additional information.
:::


After selecting the columns to include in the resulting table or view, click **Next** to further
filter the sourced data.
