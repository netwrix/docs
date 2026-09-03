---
title: "Search Feature"
description: "Search Feature"
sidebar_position: 50
---

# Search Feature

The search feature consolidates and compartmentalizes search results based on events, time, objects,
users, hosts, etc. Search results populate based on which query filters are chosen. Results may then
be sorted, filtered, and/or exported into a CSV file or JSON file, depending on the type data.

![Search Tab](/images/activitymonitor/7.1/admin/search/searchtab.webp)

:::note
Search results are pulled from the File output of the monitored host or domain.
:::


To open the search feature, click the magnifying glass icon and select from the following options:

- File – Search for monitored file activity on Windows servers and NAS devices. See the File Search
  Query topic for additional information.
- Active Directory – Search for monitored domain activity. See the Active Directory Search Query
  topic for additional information.
- Azure AD / Entra ID – Search for monitored tenant activity in Microsoft Entra ID (formerly Azure
  AD). See the Microsoft Entra ID Search Query topic for additional information.
- SharePoint – Search for monitored SharePoint activity. See the SharePoint Search Query topic for
  additional information.
- SharePoint Online – Search for monitored SharePoint Online activity. See the SharePoint Online
  Search Query topic for additional information.
- Exchange Online – Search for monitored Exchange Online activity. See the Exchange Online Search
  Query topic for additional information.
- SQL Server – Search for monitored SQL Server activity. See the SQL Server Search Query topic for
  additional information.
- Linux – Search for monitored file activity on Linux servers. See the Linux Search Query topic for
  additional information.

Queries that may be useful to an organization include the following:

- Who accessed a particular folder/file on X day or during Y date range?
- Who renamed a particular folder/file on X day or during Y date range?
- Who deleted a particular folder/file on X day or during Y date range?
- Who created a particular folder/file?
- What did user X do on day Y?
- What did user X do between days Y and Z?
- Administrator activity details?

**Step 1 –** Click the magnifying glass icon and select the source type.

**Step 2 –** Set the filters you want to apply and click **Search**.

**Step 3 –** Filter and Sort the results in the table as desired.

**Step 4 –** Export the results table if desired.

## Filter

The dropdown menu for a column header in the search results data grid provides the option to filter
the search results further.

![Operations Filter Dropdown Menu](/images/activitymonitor/7.1/admin/search/operationssdropdownfiltermenu.webp)

Choose between checking or unchecking the field values you want to apply from the list of available values and
typing in the search textbox. The Clear filter option removes all filters from the selected column.
A filter icon appears on the header where filters have been applied. Multiple columns can be
filtered in the search results data grid.

:::note
The columns you can filter will vary based on your search results.
:::


## Sort

Clicking on any column header in the search results data grid sorts the results alphanumerically for
that column, and an arrow shows next to the column name indicating the sort direction as ascending or
descending.

![Sort Options](/images/activitymonitor/7.1/admin/search/sort.webp)

The dropdown menu on the column header has options to Sort A to Z or Sort Z to A for the selected
column. You can sort only one column at a time.

:::note
The columns you can sort will vary based on your search results.
:::


## Export

The search results data grid can be exported to a CSV/JSON file.

![Export Button](/images/activitymonitor/7.1/admin/search/exportbutton.webp)

After you configure the search results as needed, click the Export button located at the top left
corner of the window. Set the name and location of the CSV/JSON file.
