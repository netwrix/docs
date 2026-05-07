---
title: "Microsoft 365 Copilot Search Query"
description: "Microsoft 365 Copilot Search Query"
sidebar_position: 70
---

# Microsoft 365 Copilot Search Query

You can search Microsoft 365 Copilot activity that has been monitored and recorded to a File output.
When you select **Microsoft 365 Copilot** from the search dropdown menu, a New Search tab opens
with the applicable query filters.

The filters are separated into the following categories:

- General
- User
- Copilot
- Advanced

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope the results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters. You can
[Filter](/docs/activitymonitor/10.0/admin/search/overview.md#filter) and
[Sort](/docs/activitymonitor/10.0/admin/search/overview.md#sort) the results using the column
headers. Below the Search button is the
[Export](/docs/activitymonitor/10.0/admin/search/overview.md#export) option.

## General Category

The General category scopes the query by the most common types of filters. The time frame filter
must be configured for every search query.

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range.
- To – Set the date and timestamp for the end of the activity range.
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.
- Agent Hosts – Filter the data for a specific agent.

## User Category

The User category scopes the query by the user who performed the activity.

This section has the following filters:

- Name or UPN
- IP Address
- User Type

## Copilot Category

The Copilot category scopes the query by Copilot-specific activity attributes.

This section has the following filters:

- App Host – The Microsoft 365 application in which the Copilot interaction occurred, for example
  Teams, Word, or Outlook.
- Entity (Resource URL) – The URL of the resource that was accessed during the Copilot interaction.
- Plugins – The Copilot plugins used during the interaction.
- Thread ID – The unique identifier of the Copilot conversation thread.
- Entity Type – The type of entity accessed during the Copilot interaction.

## Advanced Category

This section has the following filters:

- Client Region – The geographic region of the client that initiated the activity.

## Search Results

The results data grid columns display the following information for each event:

- Event Time – Date timestamp of the event
- Agent – Agent which monitored the event
- Source – Indicates the source of the activity event
- User – User account that performed the activity event
- User Type – Type of user associated with the event
- External – Indicates whether the resource accessed is external to Microsoft 365
- IP Address – IP address associated with the event
- App Host – The Microsoft 365 application in which the Copilot interaction occurred
- Thread ID – Unique identifier of the Copilot conversation thread
- Entity (Resource) – URL of the resource accessed during the Copilot interaction
- Entity Type – Type of entity accessed during the Copilot interaction
- Plugins – Copilot plugins used during the interaction
- Client Region – Geographic region of the client that initiated the activity
