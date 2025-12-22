---
title: "Group Name Prefixes"
description: "Group Name Prefixes"
sidebar_position: 80
---

# Group Name Prefixes

You can standardize group names in the directory by defining prefixes. When users create groups
using the Directory Manager portal, they must select a prefix, which is added to the group’s name
and display name.

:::note
The Group Name Prefixes policy does not apply when a user creates a group using Directory
Manager Management Shell.
:::


You can define group name prefixes (a) for an identity store, (b) for security roles in an identity
store, or (c) both at the identity store and role levels.

- Prefixes defined for an identity store are available to all security roles in an identity store.
  When creating a group, users must select a prefix to append the group’s name.
- Prefixes defined for a security role are available to role members only. You can enforce members
  to select a role-specific prefix to append a group’s name while creating a group. Role-specific
  prefixes help distinguish between groups created by different roles.
- When prefixes are defined at both the identity store and role levels, both sets of prefixes are
  available to role members in a single drop-down list. Role members can select any prefix to append
  a group’s name. However, when prefixes are enforced at the role level, role members can only
  select a role-specific prefix to append a group’s name.

:::note
(1) For a user with multiple roles, prefixes for all roles are displayed when creating or
updating groups.  
(2) If prefixes are enforced for the highest priority role of a user, he or she must select a prefix
from the list of prefixes defined for this highest priority role.  
(3) If prefixes are enforced for a role other than the highest priority role of a user, enforcement
does not apply to him or her.
:::


Consider the following:

- For existing groups, the prefix option is available for unmanaged groups (and not for Smart Groups
  and Dynasties). A user can choose to add a prefix to the group name in group properties. Once
  added, it cannot be removed.
- For managed groups (Smart Groups and Dynasties), prefixes can only be added while creating a group
  and cannot be changed or removed later.

A group naming policy defined in Microsoft Entra Admin Center has no impact in Directory Manager.
For details, see the [Group Naming Policy](/docs/directorymanager/11.1/admincenter/identitystore/advsentraid.md#group-naming-policy) topic.

## Add a Prefix for an Identity Store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Group Name Prefixes**.
4. On the **Group Name Prefixes** page, type a prefix in the box displayed at the top and click
   **Add**. The prefix is displayed in the **Group Name Prefix** area.
5. Click **Save**.

**Edit a Prefix**

1. On the **Group Name Prefixes** page, click **Edit** for a prefix and update it. Then click the
   check mark icon to save or the cross icon to discard your changes.
2. Click **Save**.  
   The change does not propagate to group names that have already been created with the prefix.

**Delete a Prefix**

1. On the **Group Name Prefixes** page, click **Remove** for a prefix to delete it.
2. Click **Save**.  
   Deleting a prefix has no impact on group names that have already been created with it.

## Add a Prefix for a Security Role in an Identity Store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Group Name Prefixes** tab.
7. Refer to step 4 and onwards in the Add a Prefix for an Identity Store topic to add, edit, or
   delete a group name prefix for a security role.
8. Select the **Enforce Prefix** check box to make it mandatory for role members to select a
   role-specific prefix to append group names while creating groups.
9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.