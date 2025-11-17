---
title: "Microsoft Entra ID Search Results"
description: "Microsoft Entra ID Search Results"
sidebar_position: 10
---

# Microsoft Entra ID Search Results

When a search has been started, the Search Status table at the bottom displays the percentage
complete according to the size and quantity of the activity log files being searched per activity
agent. You can [Filter](/docs/activitymonitor/9.0/admin/search/overview.md#filter) and [Sort](/docs/activitymonitor/9.0/admin/search/overview.md#sort) the results using the
column headers. Below the Search button is the [Export](/docs/activitymonitor/9.0/admin/search/overview.md#export) option.

![Azure Active Directory - Search Results](/images/activitymonitor/9.0/admin/search/results/searchresults.webp)

The results data grid columns display the following information for each event:

- Event Time – Date timestamp of the event
- Agent – Agent which monitored the event
- Source – Indicates the source of the activity event
- Result – Indicates whether the event resulted in a Success or Failure
- Result Reason – If an event resulted in a Failure, the reason for it will be listed in the Result
  Reason column
- User – Indicates user account associated with the event
- IP Address – Indicates the IP Address associated with the event
- Application – Indicates the Application associated with the event
- Service – Indicates the Service associated with the event
- Category – Indicates the Category associated with the event. Categories returned from search
  queries can be configured using the Category filter drop-down.
- Operation - Indicates the Operation associated with the event. Operations returned from search
  queries can be configured using the Operation filter drop-down.
- Type – Indicates the Type associated with the event. Types returned from search queries can be
  configured using the Type filter drop-down.
- Target(s) – Indicates the Target(s) of the event
- Modified – Indicates modifications associated with the event
- Client App – Indicates the Client App associated with the event
- OS – Indicates the OS associated with the event
- Browser – Indicates the browser associated with the event
- City – Indicates the City associated with the event
- State – Indicates the State associated with the event
- Country – Indicates the Country associated with the event
- Coordinates – Indicates the Coordinates associated with the event
- Interactive – Indicates whether the event was an Interactive event
- Risk – Indicates the level of Risk associated with events
- Conditional Access – Indicates whether Conditional Access was applied to the event
- Conditional Policy – Indicates whether a Conditional Policy was applied to the event
- Details – If applicable, provides additional information associated with the event that is not
  provided by the other Results columns

At the bottom of the search interface, additional information is displayed for selected events in
the data grid. The Attribute Name, Operation, Old Value, and New Value for the logged event (as
applicable to the event) are displayed.
