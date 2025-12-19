---
title: "SQLViewCreations: Join Columns"
description: "SQLViewCreations: Join Columns"
sidebar_position: 30
---

# SQLViewCreations: Join Columns

Use the Join Columns page to select a column from each source table to join together on the
resulting table or view. The options on this page are only enabled if two tables are selected on the
Input Source page.

:::note
The SQLViewCreation analysis module can join two tables, using a simple equi-join
condition of two predicates. For composite joins with two or more tables using a conjunction of
predicates, use the SQLscripting analysis module. See the
[SQLscripting Analysis Module](/docs/accessanalyzer/11.6/admin/analysis/sqlscripting.md) topic
for additional information.
:::


![View and Table Creation Analysis Module wizard Join Columns page](/images/accessanalyzer/11.6/admin/analysis/sqlviewcreation/joincolumns.webp)

Use the **Table 1 join property** and **Table 2 join property** fields to select join predicates
from both tables. Join predicates are columns containing analogous values that are used to match
records in referenced tables.

Next, specify how to join these tables. To automatically select the appropriate join type, select
one or more of the checkboxes. The selection in the **Join Type** field updates based on user
selections.

To manually select, use the **Join Type** field. The selection here may update the above checkboxes.
The following options are available:

- Join Type – Select a join type from the drop-down:

    :::note
    Left is the first table referenced, right is the second table.
    :::


    - Inner Join – Returns records that have matching values in both tables
    - Right Outer Join – Returns all records from the left table, and the matched records from the
      right table
    - Left Outer Join – Return all records from the right table, and the matched records from the
      left table
    - Full Outer Join – Return all records when there is a match in either left or right table

:::note
The join property is the column found within both tables. The two columns can have
different names. However, in the results set, everywhere a value in the first column matches the
value in the second column, rows from the respective tables are joined together.
:::


After selecting a column from each data source to join, click **Next** to select columns to transfer
to the resulting table or view.
