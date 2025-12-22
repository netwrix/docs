---
title: "Microsoft Entra ID Search Query"
description: "Microsoft Entra ID Search Query"
sidebar_position: 40
---

# Microsoft Entra ID Search Query

You can search activity in Microsoft Entra ID (Azure AD) that has been monitored and recorded to a
File output. When you select **Azure AD / Entra ID** from the magnifying glass drop-down menu, a New
Search tab opens with the applicable query filters.

![Search Query - Entra ID](/images/activitymonitor/7.1/admin/search/query/searchquery.webp)

The filters are separated into the following categories:

- General
- User
- Audit Events
- Target Resource
- Sign-in Events
- Location

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters. You can
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

![Search Query - General Filter](/images/activitymonitor/7.1/admin/search/query/generalfilters.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Source – Set which query categories will be used. The drop-down menu displays a checkbox list of
  categories.
- Event Result – Filter the data for a specific event result: Any, Success, or Failure
- Reason
- Agent Hosts – Filter the data for a specific agent
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

## User Category

The User category scopes the query by the user, or perpetrator of the activity.

![Search Query - User](/images/activitymonitor/7.1/admin/search/query/userfilters.webp)

This section has the following filters:

- Name or ID
- IP Address
- Client App or Browser
- Client OS

## Audit Events Category

The Audit Events category scopes the query by the event type of the activity.

![Search Query - Audit Events](/images/activitymonitor/7.1/admin/search/query/auditeventsfilters.webp)

This section has the following filters:

- Service – Filter the data by the Microsoft Entra ID service: All, AAD Management UX, Access
  Reviews, Account Provisioning, Application Proxy, Authentication Methods, B2C, Conditional Access,
  Core Directory, Device Registration Service, Entitlement Management, Hybrid Authentication,
  Identity Protection, Invited Users, MIM Service, MyApps, PIM, Self-service Group Management,
  Self-service Password Management, Terms of Use
- Category – Filter the data by the category type of activity: All, AdministrativeUnit,
  ApplicationManagement, Authentication, Authorization, AuthorizationPolicy, Contact, Device,
  DeviceConfiguration, DirectoryManagement, EntitlementManagement, GroupManagement,
  IdentityProtection, KerberosDomain, KeyManagement, Label, Other, PermissionGrantPolicy, Policy,
  PolicyManagement, ResourceManagement, RoleManagement, UserManagement
- Type – Filter the data by the type of activity: All, Add, Delete, Update, Assign, Unassign
- Operation

## Target Resource Category

The Target Resource category scopes the query by the target of the activity.

![Search Query - Target Resource](/images/activitymonitor/7.1/admin/search/query/targetresourcefilters.webp)

This section has the following filters:

- Target
- Property
- Modifications – Filter the data to a specific type of modification: All, No changes, Has attribute
  changes

## Sign-in Events Category

The Sign-in Events category scopes the query by the sign-in event.

![Search Query - Sign-in Events](/images/activitymonitor/7.1/admin/search/query/signinevents.webp)

This section has the following filters:

- Risk
- Conditional Access

## Location Category

The Location category scopes the query by the location of the user.

![Search Query - Location](/images/activitymonitor/7.1/admin/search/query/locationfilters.webp)

This section has the following filters:

- City
- State
- Country
