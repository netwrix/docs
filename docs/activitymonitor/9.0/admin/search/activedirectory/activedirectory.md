---
title: "Active Directory Search Query"
description: "Active Directory Search Query"
sidebar_position: 10
---

# Active Directory Search Query

You can search domain activity that has been monitored and recorded to a File output. When you
select **Active Directory** from the magnifying glass drop-down menu, a New Search tab opens with
the applicable query filters.

![Search - Active Directory New Search Tab](/images/activitymonitor/9.0/admin/search/query/activedirectorynewsearchtab.webp)

The filters are separated into the following categories:

- General
- Object Changes
- LSASS Guardian
- LDAP Queries
- Authentication

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

The General category addresses who, what, where, and when an object, user, host, or domain
controller is affected by the events selected in the other categories. The time frame filter must be
configured for every search query.

![Active Directory Search - General Filter](/images/activitymonitor/9.0/admin/search/query/generalfilters.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Event Source – Set which query categories will be used. The drop-down menu displays a checkbox
  list of categories.
- Event Result – Filter the data for a specific event result: Any, Success, or Failure
- Event Block – Filter the data for a specific event result related to blocking: Any, Allowed, or
  Blocked
- Agent Hosts – Filter the data for a specific agent
- Agent Domains – Filter the data for a specific domain
- Affected Object Name – Filter the data for a specific affected object name
- Affected Object Class – Filter the data for a specific affected object class
- User – Filter the data for a specific user, or perpetrator of the event

    - Specify account or group (...) – The ellipsis button beside the User textbox opens the Specify
      account or group window. Use this window to resolve the account for the user. See the
      [Specify Account or Group Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifywindowsaccount.md) topic for
      additional information.

- From Hosts – Filter the data for a specific originating host of the event
- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.

## Object Changes Category

The Object Changes category scopes the query by objects with change activity.

![Object Changes Filter](/images/activitymonitor/9.0/admin/search/query/objectchangesfilters.webp)

This section has the following filters:

- Account Changes – Filter the data by the type of account change: All, Account Locked, Account
  Unlocked, Account Disabled, Account Enabled, Password Changed
- Membership Changes – Filter the data by the type of group membership change: All, Group Members
  Added, Group Members Removed, Group Members Changed
- Object Changes – Filter the data by the type of group membership change: All, Object Moved, Object
  Renamed, Object Added, Object Modified, Object Deleted
- New Object Name – Filter the data for a specific new object name
- Old Object Name – Filter the data for a specific old object name
- Attribute Name – Filter the data for a specific attribute name
- Attribute Value – Filter the data for a specific attribute value

## LSASS Guardian Category

The LSASS Guardian category scopes the query by LSASS Guardian activity.

![LSASS Guardian Filters](/images/activitymonitor/9.0/admin/search/query/lsassguardianfilters.webp)

This section has the following filters:

- Process Name – Filter the data for a specific process name
- Process ID – Filter the data for a specific process ID
- Events – Filter the data by the type of event: All, Create Handle, Duplicate Handle

## LDAP Queries Category

The LDAP Queries category scopes the query by LDAP query activity.

![LDAP Queries Filter](/images/activitymonitor/9.0/admin/search/query/ldapqueriesfilters.webp)

This section has the following filters:

- Query – Filter the data for a specific LDAP query
- Connection – Filter the data by the type of connection : Any, Secure, Nonsecure

## Authentication Category

The Authentication category scopes the query by authentication activity.

![Authentication Filters](/images/activitymonitor/9.0/admin/search/query/authenticationfilters.webp)

This section has the following filters:

- Target Host – Filter the data for a specific host
- Authentication – Filter the data by the type of authentication: All, Kerberos, NTLM
- NTLM Logon Type – Filter the data by the type of NTLM Logon: All, Interactive, Network, Service,
  Generic, Transitive Interactive, Transitive Network, Transitive Service
- NTLM Version – Filter the data by the type of NTLM version: Any, V1, V2
- Encryption – Filter the data for a specific encryption
- SPN – Filter the data for a specific service principal name (SPN)
- Accounts – Filter the data by the type of account: Any, Existing, Nonexistent
- Ticket Type – Filter the data by the type of ticket type: Any, AS, TGS
- Search For – Filter the data by the selected item: Previous passwords usage only, Forged PAC only
