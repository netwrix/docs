---
title: "Edit a Smart Group Query and Update Schedule"
description: "View and modify the query behind a Smart Group or Dynasty, preview its membership, and associate a scheduled Smart Group Update job."
keywords:
  - Smart Group query
  - Query Designer
  - Dynasty
  - Smart Group Update job
  - membership preview
sidebar_position: 90
---

# Edit a Smart Group Query and Update Schedule

Use this tab to view and modify the query defined for the Smart Group/Dynasty, and schedule
updates.

The group’s membership is updated with the records fetched by the query.

:::note
For an Office 365 group in a Microsoft Entra ID based identity store, group membership
is updated with user objects only.
:::


Membership update settings defined for the identity store also impact Smart Group and Dynasty
membership update.

**Containers**

Displays the domain or containers the query runs on.

**Object Types**

Lists the object types the query fetches.

**Server and Storage**

These areas are displayed if the query only fetches messaging system recipients. They display the
server and storage for the query to fetch the records from.

**Query Designer**

To modify the query, click the **Query Designer** button. This launches the
[Query Designer in the Directory Manager portal](/docs/directorymanager/11.2/portal/group/querydesigner/overview.md) dialog box, where you can modify the query.

Smart Groups and Dynasties in a Microsoft Entra ID based identity store use a device structured query
language while those in an Active Directory based identity store use LDAP queries to update group
membership.

**Membership Preview**

You can preview the group members of the Smart Group before executing the changes.

**Clear**

To remove all the queries set in the Query Designer, click **Clear**.

**Scheduled Job**

You can associate a Smart Group Update job with the group; this is a scheduled job that updates the
group’s membership when it runs.

From the **Scheduled Job** list, select a Smart Group Update job to associate with the group.

This list contains Smart Group Update jobs defined for the identity store.

:::note
If the administrator has enforced the job selection option, you can't save any changes unless
you associate a scheduled job with this group.
:::


**Updated On**

Displays the date and time when the group was updated based on the schedule set for it.

**Create a Schedule**

You can create a new schedule other than the ones on the list.
