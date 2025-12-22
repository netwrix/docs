---
title: "SharePoint Online Search Results"
description: "SharePoint Online Search Results"
sidebar_position: 10
---

# SharePoint Online Search Results

When a search has been started, the Search Status table at the bottom displays the percentage
complete according to the size and quantity of the activity log files being searched per activity
agent. You can [Filter](/docs/activitymonitor/8.0/admin/search/overview.md#filter) and [Sort](/docs/activitymonitor/8.0/admin/search/overview.md#sort) the results using the
column headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/admin/search/overview.md#export) option.

![SharePoint Online Search Results](/images/activitymonitor/8.0/admin/search/results/sharepointonlinesearchresults.webp)

The results data grid columns display the following information for each event:

- Event Time – Date timestamp of the event
- Agent – Agent which monitored the event
- Source – Indicates the source of the activity event
- Operation - Operation associated with event
- User – User account that performed the activity event
- User Type - Type of user associated with event
- External – Indicates whether external sharing is associated with the event
- IP Address - IP Address associated with event
- Object Url - Object Url associated with event
- Item Type - The type of the item associated with the event
- Item Title - The title of the item associated with the event
- Modified - Indicates whether a modification is associated with the event
- Site - Site where the event occurred
- List - Indicates which list the event is associated with
- Relative URL - Indicates the Relative URL associated with the event
- File Name - The name of the file associated with the event
- Extension - If applicable, indicates the extension of the file associated with the event
- New Relative URL - If applicable, indicates the new relative URL of the file associated with the
  event
- New File Name - If applicable, indicates the new name for the file associated with the event
- New Extension - If applicable, indicates the new extension of the file associated with the event
- Workload - Workload associated with the event
- Access - If applicable, indicates what level of access is associated with the event
- Target Account - If applicable, indicates the recipient of the event
- Target Type - If applicable, indicates the type of account of the recipient of the event
- DLP Policy - If applicable, indicates the DLP Policy associated with the event
- Event Data – Data associated with the event
- Custom Event - If the Custom Event filter was configured in the Query bar, it will appear here

At the bottom of the search interface, additional information is displayed for selected events in
the data grid. The Attribute Name, Operation, Old Value, and New Value for the logged event (as
applicable to the event) are displayed.
