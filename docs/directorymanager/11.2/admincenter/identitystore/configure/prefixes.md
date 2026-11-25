---
title: "Configure Group Name Prefixes in Directory Manager"
description: "Standardize group names by defining prefixes for an identity store or its security roles that users select when they create groups."
keywords:
  - group name prefixes
  - Directory Manager
  - identity store prefix
  - security role prefix
  - enforce prefix
sidebar_position: 80
---

# Configure Group Name Prefixes in Directory Manager

You can standardize group names in the directory by defining prefixes. When users create groups in the Directory Manager portal, they must select a prefix. Directory Manager adds the prefix to the group's name and display name.

:::note
The Group Name Prefixes policy doesn't apply when a user creates a group with Directory Manager Management Shell.
:::

You can define group name prefixes (a) for an identity store, (b) for security roles in an identity store, or (c) both at the identity store and role levels.

- Prefixes defined for an identity store are available to all security roles in the identity store. When users create a group, they must select a prefix to append to the group's name.
- Prefixes defined for a security role are available to role members only. You can require members to select a role-specific prefix when they create a group. Role-specific prefixes help distinguish between groups that different roles create.
- When prefixes are defined at both the identity store and role levels, role members see both sets of prefixes in a single dropdown list. They can select any prefix to append to a group's name. However, when you enforce prefixes at the role level, role members can select only a role-specific prefix.

:::note
- For a user with multiple roles, prefixes for all roles are displayed when the user creates or updates groups.
- If prefixes are enforced for the highest-priority role of a user, the user must select a prefix from the list defined for that role.
- If prefixes are enforced for a role other than the highest-priority role of a user, enforcement doesn't apply to the user.
:::

Consider the following:

- For existing groups, the prefix option is available for unmanaged groups, not for Smart Groups and Dynasties. A user can add a prefix to the group name in the group properties. After the prefix is added, it can't be removed.
- For managed groups (Smart Groups and Dynasties), you can add prefixes only while creating a group. You can't change or remove them later.

A group naming policy defined in Microsoft Entra Admin Center has no impact in Directory Manager. For details, see the [Group Naming Policy](/docs/directorymanager/11.2/admincenter/identitystore/advsentraid.md#group-naming-policy) topic.

## Add a prefix for an identity store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Group Name Prefixes**.
4. On the **Group Name Prefixes** page, enter a prefix in the box at the top and click **Add**. The prefix is displayed in the **Group Name Prefix** area.
5. Click **Save**.

**Edit a Prefix**

1. On the **Group Name Prefixes** page, click **Edit** for a prefix and update it. Then click the check mark icon to save your changes or the cross icon to discard them.
2. Click **Save**.

   The change doesn't propagate to group names that already have the prefix.

**Delete a Prefix**

1. On the **Group Name Prefixes** page, click **Remove** for a prefix to delete it.
2. Click **Save**.

   Deleting a prefix has no impact on group names that already have the prefix.

## Add a prefix for a security role in an identity store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Security Roles**.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the **Policies** area.
6. On the **Add Policies** pane, click the **Group Name Prefixes** tab.
7. To add, edit, or delete a group name prefix for a security role, follow step 4 and onward in the Add a prefix for an identity store topic.
8. Select the **Enforce Prefix** checkbox to require role members to select a role-specific prefix when they create groups.
9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.
