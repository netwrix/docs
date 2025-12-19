---
title: "Subscriptions and Exports Page"
description: "Subscriptions and Exports Page"
sidebar_position: 80
---

# Subscriptions and Exports Page

A subscription sends the report results for an investigation to recipients via email as an
attachment. An export puts the report results for an investigation into a desired format. The
Subscriptions and Exports page provides a list of investigations that are either subscribed to or
scheduled for export.

![Investigations interface on the Subscriptions and Exports page](/images/threatmanager/3.0/administration/investigations/subscriptionsexports.webp)

The table has the following columns:

- Mode – Toggle button enables and disables the scheduled report
- Type – Icon indicates the delivery method for the subscription: email or shared folder
- Subscription name – Subscription name of an investigation
- Status – Indicates the subscription status: Scheduled or Disabled
- Investigation – Displays the name of the investigation that is associated with the subscription.
- Last run result – Displays the status of the last scheduled report, which include Never run,
  Delivered, Failed to deliver, or Failed to complete
- Schedule – Displays the schedule frequency of the subscription or export
- Last Run on – Date timestamp of the last scheduled report
- Next Run – Date timestamp of the next scheduled report
- Recipients – List of email recipients subscribed to the report
- Shared folder – Display name for the configured shared folder where scheduled exports are stored
- Actions – Menu option per table row. This column does not have a header. It is represented by
  three dots and shows up when you hover over a row.

See the [Add Subscription](/docs/threatmanager/3.0/administration/investigations/options/subscription.md) topic and [Export Report](/docs/threatmanager/3.0/administration/investigations/options/export.md)
topic for additional information.

## Table Features

The table has several features accessed through the menu button that appears when you hover over a
column header.

![Table column menu](/images/threatprevention/7.5/reportingmodule/investigations/tableoptions.webp)

In addition to the arrow that appears to sort the table in ascending or descending order, the menu
contains the following options:

- Unsort – Removes all sorting from the table
- Sort by ASC – Sorts the table in ascending order for the selected column
- Sort by DESC – Sorts the table in descending order for the selected column
- Filter – Opens the Table Filter window to build a filter statement for the table
- Hide – Hides the selected column from the table
- Show columns – Opens the Column window with a list of all available columns for the table and a
  toggle button to show or hide each column
- Pin to left – Moves the column to the far left of the table and pins it there
- Pin to right – Moves the column to the far right of the table and pins it there
- Unpin – Returns the column to its original location. This option appears if the column has been
  pinned.

## Build a Table Filter Statement

The Table Filter window opens from the table column menu.

![Table Filter window](/images/threatprevention/7.5/reportingmodule/investigations/filterwindow.webp)

Follow the steps to build a filter statement.

**Step 1 –** Select a table column from the **Columns** drop-down menu.

**Step 2 –** Select an operator from the **Operator** drop-down menu. Options include: contains,
equals, starts with, ends with, is empty, is not empty, and is any of.

**Step 3 –** Enter the text string for the filter value in the **Value** box.

**Step 4 –** To build a complex filter statement, click **Add filter**. A new row appears with an
additional drop-down menu for creating an _AND_ or an _OR_ statement. Then repeat Steps 1-3 for the
row.

The table is filtered to matches of the filter.

## Actions Menu

The Actions column holds a menu with actions that apply to the selected subscription or export.

![Actions menu](/images/threatprevention/7.5/reportingmodule/investigations/subscriptionsexportsactions.webp)

The options include:

- Duplicate – Opens the Subscription to or Schedule export window to configure another subscription
  or export for the associated investigation
- Edit –Opens the Subscription to or Schedule export window to modify the current subscription or
  export
- Run Now – Runs the subscription or export report immediately
- Turn off – Disables the subscription or export
- Turn on – Enables the subscription or export
- Delete – Deletes the scheduled subscription or export
