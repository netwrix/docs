---
title: "Create a Security Role in Directory Manager"
description: "Create a security role for an identity store, either as a new role or by copying an existing role, and set its criteria, priority, and permissions."
keywords:
  - create security role
  - copy security role
  - Create Security Role page
  - role permissions
sidebar_position: 10
---

# Create a Security Role in Directory Manager

A security role defines who can sign in to Directory Manager and what they can do. To create a security role for an identity store, specify the following:

- Criteria: See [Criteria](/docs/directorymanager/11.1/admincenter/securityrole/manage.md).
- Priority: See [Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md).
- Permissions: The actions that role members can perform in Directory Manager, for example, creating directory objects, managing groups, managing scheduled jobs, and managing user profiles.
- Policies: Settings that apply to role members. For example, the search policy limits role members to searching for objects in a particular container.

You can create a role manually or by copying an existing role. For more information, see the [Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/overview.md) topic.

:::note
You can disable a role to prevent its members from accessing Directory Manager. To prevent an individual role member from accessing Directory Manager, remove that member from the group or container specified as role criteria.
:::

## Create a security role manually

**To create a security role**

1. In Admin Center, click **Identity Stores** in the left pane.

2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.

3. Click **Security Roles** under **Settings** in the left pane.

4. On the **Security Roles** page, click **Add Security Role**. The **Create Security Role** page opens.

5. Enter a name for the security role in the **Name** box.

6. Enter a brief description for the role in the **Description** box.

7. Type or select a value in the range 1-99 in the **Priority** box to set the role priority. The value must be unique for each role in an identity store.

8. In the **Criteria** area, specify a criterion to determine role members. For details, see the [Set Security Role Criteria in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/criteria.md) topic.

9. Assign group management, user management, and other permissions to the security role. For details, see the [Security Role Permissions in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md) topic.

10. Select the **Helpdesk Role** checkbox to restrict role members to the Helpdesk node of Admin Center.

11. Click **Create Security Role**.

12. Click **Save** on the **Security Roles** page. See the [Manage Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/manage.md) topic.

## Create a role by copying an existing role

You can use a security role as a template to create a new role. The new role gets the criteria, permissions, and policies of the template role.

**To copy a role**

1. In Admin Center, click **Identity Stores** in the left pane.

2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.

3. Click **Security Roles** under **Settings** in the left pane.

4. On the **Security Roles** page, click the ellipsis button for the security role you want to use as a template and select **Copy**. The **Copy Security Role** page opens.

5. Update the role information as described in steps 5-9 of the Create a security role manually section, and click **Update Security Role**.

6. On the **Security Roles** page, click **Save**.

7. To update the policies for the new role, see the [Security Role Policies](/docs/directorymanager/11.1/admincenter/securityrole/policy/overview.md) topic.
