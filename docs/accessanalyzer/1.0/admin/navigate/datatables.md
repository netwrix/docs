---
title: "Data Tables"
description: "Sorting, filtering, and pagination in data tables"
sidebar_position: 30
---

# Data Tables

Data tables are used throughout the Access Analyzer interface to display collections of records such as sources, scans, users, and audit log entries. Each table supports sorting, filtering, and pagination.

## Sorting

Click a column header to sort the table by that column. Click the same header again to toggle between ascending and descending order. A directional arrow icon indicates the current sort direction.

## Filtering

Use the filter controls above the table to narrow results:

- **Text search** -- Enter a keyword to filter rows that match across visible columns.
- **Column filters** -- Some tables provide dropdown filters for specific columns such as status, type, or date range.

## Pagination

Tables with large datasets are paginated. Use the controls at the bottom of the table to:

- Navigate between pages using **Previous** and **Next** buttons.
- Select the number of rows displayed per page (e.g., 10, 25, 50, 100).

## Bulk Actions

On supported tables, select one or more rows using the checkbox column to enable bulk actions. Available bulk actions vary by context and may include **Delete**, **Run Scan**, or **Export**.

:::note
Table state (sort order, active filters, current page) resets when you navigate away from the page.
:::
