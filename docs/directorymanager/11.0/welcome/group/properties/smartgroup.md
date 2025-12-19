---
title: "Group properties - Smart Group/Query Designer tab"
description: "Group properties - Smart Group/Query Designer tab"
sidebar_position: 90
---

# Group properties - Smart Group/Query Designer tab

Use this tab to view and modify the query defined for the Smart Group/Dynasty, and even schedule
updates.

The group’s membership is updated with the records fetched by the query.

NOTE: In case of an Office 365 group in a Microsoft Entra ID based identity store, group membership
is updated with user objects only.

Membership update settings defined for the identity store also impact Smart Group and Dynasty
membership update.

**Container(s)**

Displays the domain or containers the query will run on.

**Object Types**

Lists the object types the query will fetch.

**Server and Storage**

These areas are displayed if the query only fetches messaging system recipients. They display the
server and storage for the query to fetch the records from.

**Query Designer**

To modify the query, click the **Query Designer** button. This launches the
[Query Designer](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md) dialog
box, where you can modify the query.

Smart Groups and Dynasties in a Microsoft Entra IDbased identity store use a device structured query
language while those in an Active Directory based identity store use LDAP queries to update group
membership.

**Membership Preview**

You can preview the group members of the smart group before executing the changes.

**Clear**

To remove all the queries set in the Query Designer, click **Clear**.

**Scheduled Job**

You can associate a Smart Group Update job with the group; this is a scheduled job that updates the
group’s membership when it runs.

From the **Scheduled Job** list, select a Smart Group Update job to associate with the group.

This list contains Smart Group Update jobs define for the identity store.

NOTE: If the administrator has enforced the job selection option, you cannot save any changes unless
you associate a scheduled job with this group.

**Updated On**

Display the date and time when the group was updated based on the schedule set for it.

**Create a Schedule**

You can create a new schedule other than the ones on the list.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
