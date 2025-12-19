---
title: "My Expired Groups"
description: "My Expired Groups"
sidebar_position: 20
---

# My Expired Groups

To view a list of your expired groups in the identity store, click **Groups** on the left navigation
pane and select **My Groups**. On the My Groups page, click the **My Expired Groups** tab.

The following events occur when a group expires:

- The group becomes inactive and is locked for all activities.
- "EXPIRED\_" is added as a prefix to the group name.
- A mail-enabled distribution group is mail-disabled, which means that any emails sent to the group
  are bounced back with an expiry message.
- For an Office 365 group, its member list is backed up in the database and cleared from Office 365.
- For a security group, its member list is cleared and any permissions set for that group no longer
  apply. However Directory Manager keeps a backup of its membership in the database.

All groups that are expired by the Group Lifecycle job are available on the **My Expired Groups**
page. Moreover, when you manually expire a group that has an expiry policy other than ‘Never
expire’, it is also moved to this page.

The Group Lifecycle job is responsible for logically deleting expired groups, but you can also
physically delete a group. See the [ Group Deletion](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupdeletion.md) topic for additional
information.

By default, the **My Expired Groups** tab lists the groups that you are the primary owner for. To
include the groups for which you are an additional owner, select the **Display additional group
ownership in My Expired Groups** check box on the [Portal Settings](/docs/directorymanager/11.1/portal/generalfeatures/portal.md) panel.

You can [Modify Search Directory](/docs/directorymanager/11.1/portal/group/allgroups/allgroups.md#modify-search-directory) to search expired groups and
add [Filter All Groups](/docs/directorymanager/11.1/portal/group/allgroups/allgroups.md#filter-all-groups)by clicking **My Expired Group Grid
Filters**. All the expired groups matching the filters will be displayed.
