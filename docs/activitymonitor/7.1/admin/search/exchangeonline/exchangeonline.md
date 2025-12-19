---
title: "Exchange Online Search Query"
description: "Exchange Online Search Query"
sidebar_position: 50
---

# Exchange Online Search Query

You can search Exchange Online activity that has been monitored and recorded to a File output. When
you select **Exchange Online** from the magnifying glass drop-down menu, a New Search tab opens with
the applicable query filters.

![Exchange Online - Search Quary Bar](/images/activitymonitor/7.1/admin/search/query/searchquerybar.webp)

The filters are separated into the following categories:

- [General Category](#general-category)
- [User Category](#user-category)
- [Target Category](#target-category)
- [DLP Category](#dlp-category)

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters.You can
[Filter](/docs/activitymonitor/7.1/admin/search/overview.md#filter) and
[Sort](/docs/activitymonitor/7.1/admin/search/overview.md#sort) the
results using the column headers. Below the Search button is the
[Export](/docs/activitymonitor/7.1/admin/search/overview.md#export)
option.

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

![Exchange Online - General Category](/images/activitymonitor/7.1/admin/search/query/general.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Source – Filter the data by the source type: All, Admin Audit, Mailbox Access, DLP, Sensitivity
  Label, Other

    :::note
    Disabling a source that is also a category will hide that category from the query
    options.
    :::


- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![Exchange Online Search - User Filter](/images/activitymonitor/7.1/admin/search/query/user_1.webp)

This section has the following filters:

- Name or UPN – Filter the data by name or User Principal Name (UPN)
- User Type – Filter the data by the type of user: All, Regular, Reserved, Admin, DcAdmin, System,
  Application, ServicePrincipal, CustomPolicy, SystemPolicy, Unknown
- IP Address – Filter the data by IP address.
- Client App or Browser – Filter the data by specified client application or browser.

## Target Category

The Target category scopes the query by the target of the file.

![Exchange Online Search - Target Filter](/images/activitymonitor/7.1/admin/search/query/target.webp)

This section has the following filters:

- Object
- Mailbox
- Accessed Mail

## DLP Category

The DLP category scopes the query by the DLP policy.

![Exchange Online Search - DLP Filter](/images/activitymonitor/7.1/admin/search/query/dlp.webp)

This section has the following filters:

- Policy Name
