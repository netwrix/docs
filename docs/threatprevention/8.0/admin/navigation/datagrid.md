---
title: "Data Grid Functionality"
description: "Data Grid Functionality"
sidebar_position: 20
---

# Data Grid Functionality

Result data is displayed using data grids on several interfaces in the Administration Console. These
grids employ features for data sorting, filtering, searching, and more.

![Data Grid Functionality pointers](/images/threatprevention/8.0/admin/navigation/datagridfunctionality.webp)

- The Group by Box [1] ribbon impacts how much data is displayed. See the Sort Data topic for
  additional information.
- The Refresh [2] button populates the data grid with the current information according to the
  selections.
- Columns can be reordered as desired as well as removed from the data grid. Removed columns can be
  added back through the Customization Window.
- Many data grids also contain an Export Data [3] button. This provides different export options
  with respect to the interface. See the Export Data topic for additional information.
- The Search [4] icon opens the **Enter text to search…** textbox where you can search for the
  required data in the data grid. See the Search Data topic for additional information.
- The Auto Filter row [5] uses comparison operators to filter the grid against a single attribute.
  See the Filter Data topic for additional information.

## Customization Window

Right-click on a column header and select **Column Chooser** to open the Customization window, that
lists the column(s) that were removed from the data grid display.

![Customization Window](/images/threatprevention/8.0/admin/navigation/customization.webp)

You can remove a columns from the data grid in any of these ways:

- Drag the column and drop it into this window
- Right click in a column header and select **Hide This Column**

A column can be returned to the data grid by double-clicking on it in the Customization window or by
dragging-and-dropping it from this window onto the column header row.

## Sort Data

Data can be grouped by columns using the Group by Box ribbon above the data grid.

![Sort Data function in the data grid](/images/threatprevention/8.0/admin/navigation/sortdatafunction.webp)

Drag a column header into the Group by Box area to group data from that perspective. You can group
by a single header or by tiered headers.

Data can also be sorted alphanumerically ascending or descending by clicking on a column header. An
arrow displays in the right corner of the column header indicating the type of sorting.

## Filter Data

Several methods are available for filtering data in data grids. There can only be one active filter
per column.

![Filter Data functions in a Data Grid](/images/threatprevention/8.0/admin/navigation/filterdata.webp)

- Auto Filter Row [A] – Uses the comparison operator to filter the grid against a single attribute
- Filter Statement Bar [B] – Displays enabled filter statements at the bottom of the display area
- Filter Editor [C] – Build complex filter statements with multiple operators and column filters
- Pin Icon [D] – Opens a filtration dialog that provides multiple types of filtration options such
  as  column values, text filters, and date filters associated with the column data

**Auto Filter Row**

The Auto Filter row is located between the header row and the first event of the data grid. Typing a
single attribute in any of these boxes or selecting an attribute from a dropdown menu filters the
data grid for matches within that column and the selected comparison operator.

:::note
The Alerts grid does not display the Auto Filter Row by default. It must be selected
through the grid’s Show Auto Filter Row option from the right-click menu.
:::


**Filter Statement Bar**

When a filter is enabled, the filter statement bar is displayed at the bottom of the display area.
The X to the left of the bar clears the filter. The checkbox for the filter on the left affects the
scoping of the filter.

**Filter Editor**

Notice the Edit Filter option on the right side of the filter statement bar. Click it to open the
Filter Editor window, where you can build complex filter statements. It can employ multiple
comparison operators and/or multiple column filters.

![Filter Editor](/images/threatprevention/8.0/admin/navigation/filtereditor.webp)

**Pin Icon**

A small pin icon is displayed in the upper-right corner while hovering over a column header or if an
Auto Filter Row filter is enabled.

Click the **pin icon** to open additional filtration options in a filter window. The options
displayed depend on the column it is opened from.

![Window with filtration options](/images/threatprevention/8.0/admin/navigation/valuesfilter.webp)

- Values – Displays for every column in the data grid. Multiple values can be selected.
- Text/Numeric – This is linked to the Auto filter Row filter with the addition of three new
  filtration options including a custom filter option
- Date – Calendars with date timestamps display this filter with an array of scoping options
  including a custom filter
- Custom Filter – Found within Text filters, this filter creates an AND or OR statement between two
  filtered comparison values

## Search Data

The Find Panel enables you to search for data in the data grid. It is represented with a magnifying
glass icon. It is displayed by default but you can choose to hide or show it using the Show/Hide
Find Panel option on the
[Data Grid Right-Click Menu](/docs/threatprevention/8.0/admin/navigation/rightclickmenus.md#data-grid-right-click-menu).

On clicking the magnifying glass icon, the Find box appears as:

![Search function for data grid](/images/threatprevention/8.0/admin/navigation/searchfunction.webp)

- Type a search criteria and click **Find**. The data grid filters to events where the search
  criteria is matched, highlighting the match.
- The drop-down arrow in the textbox provides a history of recent searches for quick reference.
- Click **Clear** to clear both the search criteria and the filtered view.
- The **X** at the far left of the panel closes the Find Panel.

![Search Results](/images/threatprevention/8.0/admin/navigation/searchresults.webp)

## Export Data

The data grids provide an option to export data.

- Data grids on the Agents interface and on the Analytics windows export all available data from the
  grid to a CSV file. Clicking the **Export** button from these interfaces opens a Save As window.
- Clicking the Export button from the Alerts interface opens the Alerts Export window. See the
  [Alerts Export Window](/docs/threatprevention/8.0/admin/alerts/alertsexport.md) topic for additional information.
- Clicking the Export button from the Investigate interface or the Recent Events tab of a policy
  opens the Export window.

:::note
Ensure that all desired filters are set on the data grid before export.
:::


![Export window](/images/threatprevention/8.0/admin/navigation/export.webp)

The Export window provides options for what is exported and what action(s) to take.

In the Export options section, select the option buttons for the Columns and Rows subsections.

- For Columns, you can export data displayed in Visible Columns Only or for All Columns. See the
  Customization Window topic for details on selecting what columns are visible in a data grid.
- For Rows, the exported data can show All Rows or Filtered Only.

In the Export Actions section, select where data will be exported. Check the boxes for Save File
Locally and/or Email to and populate the required fields.

- For the Save File Locally action, a Save As window is displayed when you click Export. Use the
  default path and file name to save the CSV file or choose another one. Then click Save..
- For the Email to action, provide an email address for each recipient, which can be individuals,
  distribution lists, or a combination. Use either a comma (,) or a semi-colon (;) to separate
  multiple recipients. Click Export to export the data.

:::note
The Email to action requires the SMTP host Information to be configured. This can only be
done by a Threat Prevention administrator through the
[Email Tab](/docs/threatprevention/8.0/admin/configuration/systemalerting/email.md) of the System Alerting window.

:::
