---
title: "Use Filters in Simple Mode"
description: "Use Filters in Simple Mode"
sidebar_position: 10
---

# Use Filters in Simple Mode

Filters are used to narrow your search results. To create a unique set of filters, you can:

- Add different filters to your search. Search results will be sorted by all selected filters since
  they work as a logical conjunction (e.g., Who: Administrator and  Action: Added).
- Specify several values in the same filter to search for any of them (e.g., Action: Modified
  or Action: Removed). To do this, select a filter again and specify a new value.

    Spaces do not separate values, so the whole expression will be included in your search as a
    single value. For example, if you want to search for any of three names, do not enter **Anna
    Mark Bill** but instead create a separate filter entry for each name.

## Filter Types

| Filter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Who    | Filter data by user (initiator) account. Specify an account name (e.g., John) to find all entries containing it (e.g., `Domain1\John`, `Domain1\Johnson`, `Domain2\Johnny`, `John@domain.com`). For exact match, use quotation marks and provide a user name in Domain\User or UPN format (e.g., `Domain1\John` or `John@domain.com`) .                                                                                                                                                           |
| Action | Filter data by action type (Added, Removed, etc.) Select an action type from the list (Added, Removed, Modified, Read). For additional actions, navigate to the Advanced mode. See the [Use Filters in Advanced Mode](/docs/auditor/10.8/admin/search/filteradvanced.md) topic for additional information.                                                                                                                                                                                                                        |
| What   | Specify an object name (e.g., _Policy_) to find all entries containing it (e.g., _HiSecPolicy_, `\\FileSserver\Share\NewFolder\NewPolicy.docx`, `http://sharepoint/sites/collection1/Lists/Policy`). Netwrix Auditor searches across all data sources. For an exact match, use quotation marks and provide an object name in the format that is typical for your data source (e.g., `HiSecPolicy`).                                                                                               |
| When   | Filter data by the time interval when the change occurred. Specify a timeframe or provide a custom date range. Netwrix Auditor allows you to see changes that occurred today, yesterday, in the last 7 or 30 days, or within the specified date range.                                                                                                                                                                                                                                            |
| Where  | Specify a resource name (e.g., _Enterprise_) to find all entries containing it (e.g., `Enterprise-SQL`, `FileStorage.enterprise.local`). The resource name can be a FQDN or NETBIOS server name, Active Directory domain or container, SQL Server instance, SharePoint farm, VMware host, etc. Netwrix Auditor searches across all data sources. For an exact match, use quotation marks and provide a resource name in the format that is typical for your data source (e.g., `Enterprise-SQL`). |

Follow the steps to add a filter to your search.

**Step 1 –** Click a filter type icon. Enter a value you want to search for.

![Account specification](/images/auditor/10.8/admin/search/add.webp)

Alternatively, you can type a value directly into the Search field.

- For exact match, use quotation marks.
- To further restrict your search, right-click the value and select a filter from the pop-up menu.
  To search across all columns in the results view (everywhere—Who, What, Where, Action, etc.),
  leave it as is.

![Filter](/images/auditor/10.8/admin/search/addsuggestions.webp)

**Step 2 –** Click Search to apply your filters. By default, all entries that contain the filter
value are shown.

## Modifying and Removing Filters

| To...         | Do...                                                                                                                                                                                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Modify filter | Double-click the filter and type a new value. ![Filter new value](/images/auditor/10.8/admin/search/search_modify_filter.webp) If you need to modify the When filter, delete it and add a new value, or navigate to the Advanced mode (Simple mode does not support its modification). |
| Remove filter | Click the **Close** icon next to it.                                                                                                                                                                                                                                                                                     |

## Exporting and Importing Filters

To export or import filters as regular expressions, use the **Tools** menu commands:

| To...  | Use...                                                                                                                                                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Export | **Copy search** — copy the search filters that are currently applied to your search. This can be helpful if you want to share your search with a colleague (e.g., by pasting it in an email) or to modify a saved search query with your current filters. |
| Import | **Paste search** — paste the search filters you copied before. These can be filters copied from a previous search or those someone shared with you.                                                                                                       |
