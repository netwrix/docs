---
title: "SQL Server Search Query"
description: "SQL Server Search Query"
sidebar_position: 80
---

# SQL Server Search Query

You can search SQL Server activity that has been monitored and recorded to a File output. When you
select **SQL Server** from the magnifying glass drop-down menu, a New Search tab opens with the
applicable query filters.

![SQL Server Search Query](/images/activitymonitor/9.0/admin/search/query/sqlsearchquerytoolbar.webp)

The filters are separated into the following categories:

- General
- User
- SQL

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters. You can
[Filter](/docs/activitymonitor/9.0/admin/search/overview.md#filter) and [Sort](/docs/activitymonitor/9.0/admin/search/overview.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/9.0/admin/search/overview.md#export) option.

**Filter Value Entry**

When the drop-down menu is in front of a query filter, it is used to show or hide the filter entry
field. Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

    - Selected values – Filters by the value selected from the drop-down menu for the textbox
    - Simple string with wildcards – Filters by the value entered into the textbox, which contains
      an asterisk (\*) as the wildcard
    - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category scopes the query by the most common types of filters. The time frame filter
must be configured for every search query.

![General Filters](/images/activitymonitor/9.0/admin/search/query/generalfilter.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Event Result – Filter the data for a specific event result: Any, Success, or Failure
- Reason
- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![userfilter](/images/activitymonitor/9.0/admin/search/query/userfilter.webp)

This section has the following filters:

- Name or ID
- IP Address

## SQL Category

The SQL category scopes the query by SQL Server activity.

![SQL Filters](/images/activitymonitor/9.0/admin/search/query/sqlfilters.webp)

This section has the following filters:

- Server name
- Database
- Operation – Filter the data by the type of Operation: All, Select, Insert, Update, Delete, merge,
  Execute, Login, Logout, Grant, Revoke, Deny, Error, AlterRole
- Application
- Object
- SQL Text
