---
title: "Manage Security Roles"
description: "Manage Security Roles"
sidebar_position: 20
---

# Manage Security Roles

After creating a security role, you can manage various settings for it, such as tole criteria,
permissions, and policies.

## View Security Roles

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.  
   On the **Security Roles** page, the following information is displayed for a role:

    | Label | Description |
    | --- | --- |
    | Enable | Shows whether the security role is enabled or disabled. Use the toggle button for an enabled role to disable it and vice versa. Members of a disabled role cannot access Directory Manager. |
    | Display name | The display name of the security role. |
    | Priority | Each security role is assigned a value from 1-99, where 1 indicates the highest priority and 99 indicates the lowest priority. Role priority is unique for a role in an identity store. Role priority is used to resolve conflicts when a user has more than one role in Directory Manager. For example, when a user has two roles, Administrator and User, with role priority set to 1 and 25 respectively, then permissions and policies for the higher priority role (i.e., Administrator), will apply when the user logs into Directory Manager. |
    | Criteria | Role criteria determines the users the role applies to. You can specify as container or group as criteria for a role. <br /><ul><li>In case of a container, all users residing in it are assigned the role.</li><li>For a group, all group members are assigned the role.</li></ul> |
    | Description | A description for the security role. |
    | Actions | <ul><li>Click **Edit** for a security role to update its details, criteria, policies, and permissions.</li><li>Click the ellipsis button and select Delete to delete the security role.</li><li>Click the ellipsis button and select Copy to create a new security role by copying the respective role.</li></ul> |

## Enable or Disable a Role

You can disable a role to prevent its members from signing into Directory Manager. You can also
enable a disabled role to allow its members to access Directory Manager. By default, all new roles
created for an identity store are enabled.

:::note
To prevent an individual role member from accessing Directory Manager, you must remove him or
her from the group or container specified as role criteria.
:::


**To enable or disable a security role:**

**Method 1:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, use the **Enable** toggle button for a role to enable or disable
   it.
5. Click **Save**.

**Method 2:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Update Security Role** page, use the toggle button in the top left corner to enable or
   disable the role.
6. Click **Update Security Role**.
7. On the **Security Roles** page, click **Save**.

## Change Role Priority

While changing role priority, remember that the priority number must be unique for a role in an
identity store.

**To change role priority:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. In the **Priority** box on the **Edit Security Role** page, change the value for role priority.
   This value must fall in the range, 1-99, where 1 indicates the highest and 99 indicates the
   lowest priority. See Priority.
6. Click **Update Security Role**.
7. On the **Security Roles** page, click **Save**.

## Change Role Criteria

By changing role criteria , you can specify a different set of users as members of a role.

**To change role criteria:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, the **Criteria** area displays the role criteria. Click **Add
   Criteria** to change it. On the **Add Criteria** dialog box, update the criteria. See the
   [Security Role – Criteria](/docs/directorymanager/11.1/admincenter/securityrole/criteria.md) topic for details.
6. Click **Update Security Role**.
7. On the **Security Roles** page, click **Save**.

## Modify Role Permissions

You can update the permissions assigned to a role.

**To update role permissions:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Select what members can do** in the **Permissions**
   area to change role permissions.
6. On the **Add Permissions** dialog box, select **Allow** for a permission to assign it to the
   role. Select **Deny** for a permission to deny it to the role. To learn about the available
   permissions, see the [Security Role – Permissions](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md) topic.
7. After assigning the required permissions, click **OK**.
8. Click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

## Define Policies for a Role

To define policies for a security role, see the [Security Role Policies](/docs/directorymanager/11.1/admincenter/securityrole/policy/overview.md) topic.

## Delete a Role

When you delete a security role, role members will not be able to access Directory Manager.

**To delete a role:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click the ellipsis button for a security role and select
   **Delete** to delete it.
5. Click **Save**.