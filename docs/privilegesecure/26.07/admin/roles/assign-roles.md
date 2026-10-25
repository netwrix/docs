---
title: "Assign administrators, reviewers, and auditors"
description: "Give a user or group the Administrator, Reviewer, or Auditors role from the Role Management page or from the account's details page."
sidebar_position: 20
---

# Assign administrators, reviewers, and auditors

Assign a built-in role to give a user or group the matching access to the console. You can start from the role, or from the account. The result is the same.

Only accounts that are already on the **Users & Groups** page can receive a role. To add accounts first, see [Add domain users and groups](/docs/privilegesecure/26.07/admin/users-groups/add-users-groups.md). For what each role grants, see [Roles and permissions](/docs/privilegesecure/26.07/admin/roles/roles.md).

When you assign a role to a group or a collection, every member of the group or collection receives it.

## Assign a role from Role Management

1. In the left navigation, click **Users & Groups**, then **Role Management**.
2. In the role list, select **Administrators**, **Reviewers**, or **Auditors**.
3. Add the accounts.
   - For **Administrators**, click **Add User** to open the **Add Administrators** window.
   - For **Reviewers**, click **Add User** to open the **Add Reviewers** window.
   - For **Auditors**, click **Add Role Users** at the bottom of the page to open the **Add Role Users** window.
4. Select each account in the left list (**Available Accounts**, or **Available Role Users** for Auditors) to move it to the right list.
5. Click **Add**.

The accounts appear in the member list of the role.

![The Add Administrators window with a search for NPS and the NPS Approvers group in Accounts to Add.](/images/privilegesecure/26.07/admin/role-add-members-window.webp)

In these windows, **Filter** limits the list to users, groups, applications, collections, or local users. The columns are the account type, name, user name, email address, and last login.

### Example

To make the members of `<platform-admins-group>` administrators:

1. Select **Administrators** in the role list.
2. Click **Add User**.
3. Select `<platform-admins-group>` in **Available Accounts**.
4. Click **Add**.

Every member of the group now has the Administrator role, and the group appears in the **Administrators** list.

:::note
For an Auditors role, the members see only the sessions in the role's scope. Set the scope before you add members. See [Roles and permissions](/docs/privilegesecure/26.07/admin/roles/roles.md#scope-of-an-auditors-role).
:::

## Assign a role from an account

1. In the left navigation, click **Users & Groups**.
2. Click the name of the user or group to open its details page.
3. Click the **User Roles** tab for a user, or the **Group Roles** tab for a group.
4. Click **Add** to open the **Add Roles** window.
5. Select one or more roles. The list shows **Administrator**, **Reviewer**, and every custom role, including **Auditors**, that the account doesn't already hold.
6. Click **Add**.

The role appears on the tab with its **ROLE**, **DESCRIPTION**, and **CREATED** values.

The **Users** role isn't assignable here.

### Example

To make a user a reviewer, open the user's details page, click the **User Roles** tab, click **Add**, select **Reviewer**, and click **Add**. The user can then review access in an [Run an access certification](/docs/privilegesecure/26.07/admin/audit-reporting/access-certification.md).

## Remove a role

1. Open the role in **Role Management**, or open the account's **User Roles** or **Group Roles** tab.
2. Select the accounts or roles to remove.
3. Click **Remove**.

A confirmation window lists the roles or accounts you selected. Confirm to remove them. The accounts leave the role.

Removing an account from the Administrators or Reviewers role takes effect at the user's next sign-in or token renewal, not at the moment you click **Remove**. Auditors and custom-role permissions are checked on each request, so removing those roles takes effect at once.

The console doesn't let you remove yourself from the **Administrators** role. **Remove** is disabled when your own account, or a group that you belong to, is selected for that role, and its tooltip reads "Admins can't remove themselves from the admin role." or "Admins can't remove groups they're in from the admin role." This applies to the **Administrators** role only.

## Custom roles

Create a custom role and add its members from **Role Management**. See [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md).
