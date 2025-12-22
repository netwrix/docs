---
title: "Searching and Filtering Data"
description: "Searching and Filtering Data"
sidebar_position: 20
---

# Searching and Filtering Data

When dealing with large sets of data, it may be useful to search for a desired attribute. This can
be done using the Filter icon.

:::note
Searching and grouping cannot be enabled at the same time. If grouping is enabled, the
Search icon is disabled in the report.
:::


The following example shows an interactive grid in which searching has been enabled. See the
[Grid](/docs/accessanalyzer/11.6/admin/report/wizard/widgets.md#grid)
topic for additional information.

![Search](/images/accessanalyzer/11.6/admin/report/interactivegrids/search.webp)

Enter search criteria in the boxes under the columns to filter the data. Click the search icon again
to clear the filters.

Click on a column to sort by that column. Clicking on a cell in a column automatically expands the
column size to fit the largest length of text contained in the column.

## Searching Enumerated Tables

Enabling the enumerated column option, and choosing a column from the data set adds a list of column
types to display as enumerated tables.

![Enumerated Table](/images/accessanalyzer/11.6/admin/report/interactivegrids/enumerated.webp)

To change the enumeration in the report, select an option from the enumerated column list. When
enumeration is set on an interactive grid, a second download button is displayed with the name of
the currently selected enumerated column. You can use this to download a CSV file that only contains
the data for the selected enumeration.

## Filtering on Dates & Times

Data can also be filtered on dates and times. Expanding the column’s width activates hyperlinks to
filter on specific time periods.

![Date column filter](/images/accessanalyzer/11.6/admin/report/interactivegrids/datefilter.webp)

Enter a Start and End date and select the desired time period.

## Filtering on Numeric Columns

Comparison operators can also be used for filtering. Comparison operators which can be used for
filtering include the following:

| Description              | Operator |
| ------------------------ | -------- |
| Equal to                 | =        |
| Greater than             | `>`      |
| Less than                | `<`      |
| Less than or equal to    | `<=`     |
| Greater than or equal to | `>=`     |
| A range of values        | n1..n2   |

## Adding & Removing Columns

Columns can be added or removed from the table.

![Add and remove columns](/images/accessanalyzer/11.6/admin/report/interactivegrids/addremovecolumns.webp)

Right-click on a column to display a list of the available columns. Select the checkboxes of the
columns you want to be displayed. Click the up or down arrows to scroll through the list of columns.
