---
title: "Manage Circular Reference"
description: "Manage Circular Reference"
sidebar_position: 120
---

# Manage Circular Reference

By default, GroupID checks for circular reference and does not allow it when users update objects
manually or when objects are auto updated via a GroupID schedule. If a circular reference occurs,
GroupID displays an error and prevents the user from saving the change.

Examples of circular reference are:

- When UserA is a direct report of UserB and UserB is a direct report of UserC, a circular reference
  would occur when you try to set UserA as UserC's manager.
- When you try to add a group as its member, say, add GroupA as a member of GroupA, a circular
  reference would occur.
- When GroupA is a member of GroupB, GroupB is a member of GroupC, a circular reference would occur
  when you try to add GroupC as a member of GroupA.

You can change the default setting to allow GroupID to save updates to objects even when a circular
reference occurs.

What do you want to do?

- [Allow Circular Reference](#allow-circular-reference)
- [Skip the replication of members of a dynamic group in Entra ID ](#skip-the-replication-of-members-of-a-dynamic-group-in-entra-id)

## Allow Circular Reference

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Miscellaneous**.
4. On the **Miscellaneous** page, uncheck the **Check for Circular Reference** check box to allow
   GroupID to save changes to objects that involve circular reference.  
   The check box is selected by default, indicating that GroupID prevents circular reference in
   objects.
5. Click **Save**.

## Skip the replication of members of a dynamic group in Entra ID

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Miscellaneous**.
4. On the **Miscellaneous** page, select the **Skip Replicating members related attributes of Groups
   with dynamic membership** check box to skip the replication of members of a dynamic group in
   Microsoft Entra ID based identity store.
5. Click **Save**.
