---
title: "Manage Circular Reference in Directory Manager"
description: "Allow or prevent circular references when objects are updated, and skip replicating members of dynamic groups in Microsoft Entra ID."
keywords:
  - circular reference
  - dynamic group replication
  - Microsoft Entra ID
  - identity store miscellaneous settings
sidebar_position: 120
---

# Manage Circular Reference in Directory Manager

By default, Directory Manager checks for circular reference and doesn't allow it when users update
objects manually or when a Directory Manager schedule updates objects automatically. If a circular
reference occurs, Directory Manager displays an error and prevents the user from saving the change.

Examples of circular reference are:

- When UserA is a direct report of UserB and UserB is a direct report of UserC, a circular reference
  occurs when you try to set UserA as UserC's manager.
- When you try to add a group as its own member, for example, add GroupA as a member of GroupA, a
  circular reference occurs.
- When GroupA is a member of GroupB, GroupB is a member of GroupC, a circular reference occurs
  when you try to add GroupC as a member of GroupA.

You can change the default setting to allow Directory Manager to save updates to objects even when a
circular reference occurs.

What do you want to do?

- [Allow Circular Reference](#allow-circular-reference)
- [Skip the replication of members of a dynamic group in Entra ID](#skip-the-replication-of-members-of-a-dynamic-group-in-entra-id)

## Allow Circular Reference

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Miscellaneous**.
4. On the **Miscellaneous** page, clear the **Check for Circular Reference** checkbox to allow
   Directory Manager to save changes to objects that involve a circular reference.  
   The checkbox is selected by default, indicating that Directory Manager prevents circular
   references in objects.
5. Click **Save**.

## Skip the replication of members of a dynamic group in Entra ID

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Miscellaneous**.
4. On the **Miscellaneous** page, select the **Skip Replicating members related attributes of Groups
   with dynamic membership** checkbox to skip the replication of members of a dynamic group in
   a Microsoft Entra ID-based identity store.
5. Click **Save**.
