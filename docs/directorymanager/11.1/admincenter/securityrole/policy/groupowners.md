---
title: "Group Owners Policy for Security Roles in Directory Manager"
description: "Require a primary owner and a range of additional owners when role members create or update static groups and Smart Groups."
keywords:
  - Group Owners policy
  - primary owner
  - additional owners
  - orphan groups
  - security role policy
sidebar_position: 10
---

# Group Owners Policy for Security Roles in Directory Manager

Use the Group Owners policy to specify a group ownership criterion that role members must
fulfill when they create or update static groups and Smart Groups using the Directory Manager portal
or Management Shell. You can:

- Control whether groups must have a primary owner.
- Specify a range of additional owners, for example 2-6, which means that a group must have a number of
  additional owners within this range.

## Enforce a Primary Owner

The Group Owners policy ensures that groups that are created and managed using Directory Manager
have a primary owner. This substantially reduces the occurrence of orphan groups in the
directory.

When you create a new group using Directory Manager, the signed-in user is set as its primary owner.
With the primary owner enforced under the Group Owners policy, the user who creates or manages the
group can change the primary owner but can't remove it.

**To enforce a primary owner:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.  
   The **Add Policies** pane is displayed with the **Group Owners** tab in view.
6. Select the **Primary Owner is required** checkbox to prevent role members from removing the
   group's primary owner while creating or updating groups. They can, however, change the primary
   owner.  
   If this checkbox is clear, role members can choose to remove the primary owner while creating or
   updating groups.

    :::note
    In a Microsoft Entra ID identity store, a primary owner must be specified for groups,
    regardless of whether the Group Owners policy enforces it or not.
    :::


7. Click **OK**.
8. On the **Edit Security Role** page, click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

## Enforce Additional Owners

You can specify a range of additional owners, for example 2-10, so that role members can't create or update
a group unless its number of additional owners falls in the given range.

By default, there is no restriction on the number of additional owners. Groups created or updated by
role members can have any number of additional owners and even no additional owner.

**To enforce additional owners:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.  
   The **Add Policies** pane is displayed with the **Group Owners** tab in view.
6. In the **Minimum** box, enter a number from 0 to 3 to set the minimum number of
   additional owners that a group must have, when created or updated by a role member.  
   The default value '0' indicates that role members can create groups with any number of additional
   owners or even without additional owners.
7. In the **Maximum** box, enter a number from 0 to 100 to set the maximum number of
   additional owners that a group can have, when created or updated by a role member. This value
   must be equal to or higher than the value provided in the **Minimum** box.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

:::note
When additional owners were added using an earlier version of Directory Manager and
their number exceeds the value of this setting, Directory Manager retains them. However, more
additional owners can't be added.
:::
