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
   - For **Administrators** and **Reviewers**, click **Add User**.
   - For **Auditors**, click **Add Role Users** at the bottom of the page.
4. In **Available Accounts**, select the checkbox for each account.
5. Click **Add**.

The accounts appear in the member list of the role.

{/* TODO verify: the titles and button labels of the Add Administrators, Add Reviewers, and Add Role Users windows. The lab tour didn't open them; the steps come from the 26.03 documentation. */}

{/* TODO screenshot: the add window for the Administrators role with accounts in Accounts to Add */}

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
5. Select **Administrator**, **Auditors**, or **Reviewer**.
6. Confirm the selection.

The role appears on the tab with its **ROLE**, **DESCRIPTION**, and **CREATED** values.

{/* TODO verify: the confirmation button of the Add Roles window; the lab tour cancelled it. */}

The **Add Roles** window offers only those three roles. The **Users** role isn't assignable here.

### Example

To make a user a reviewer, open the user's details page, click the **User Roles** tab, click **Add**, select **Reviewer**, and confirm. The user can then review access in an [Run an access certification](/docs/privilegesecure/26.07/admin/audit-reporting/access-certification.md).

## Remove a role

1. Open the role in **Role Management**, or open the account's **User Roles** or **Group Roles** tab.
2. Select the accounts or roles to remove.
3. Click **Remove**.

The accounts leave the role.

{/* TODO verify: whether a removed role takes effect immediately or at the next sign-in, and whether a confirmation window appears. */}

{/* TODO verify: whether the console blocks you from removing your own role. It does so for removal on the Users & Groups page. */}

## Custom roles

Custom roles aren't on the **Add Roles** list. Create a custom role and add its members from **Role Management**. See [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md).
