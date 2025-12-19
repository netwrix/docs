---
title: "Create a Security Role"
description: "Create a Security Role"
sidebar_position: 10
---

# Create a Security Role

To create a security role for an identity store, you have to specify the following:

- Criteria - See [Criteria ](/docs/directorymanager/11.1/admincenter/securityrole/manage.md).
- Priority - See [Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md).
- Permissions - Permissions refer to the different actions that role members can perform using
  Directory Manager, for example, creating directory objects, managing groups, managing scheduled
  jobs, managing user profiles, and more.
- Policies - Policies refer to settings that apply to role members. For example, the search policy
  limits role members to search for objects in a particular container.

You can create a role from scratch or by copying an existing role. See the
[Security Roles](/docs/directorymanager/11.1/admincenter/securityrole/overview.md) topic for additional information on security roles.

:::note
You can disable a role to prevent its members from accessing Directory Manager. To prevent an
individual role member from accessing Directory Manager, you must remove him or her from the group
or container specified as role criteria.
:::


## Create a Security Role from Scratch

**Follow the steps to create a security role**

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Security Roles** under Settings in the left pane.

Step 4 – On the **Security Roles** page, click **Add Security Role**. The **Create Security Role**
page is displayed.

Step 5 – Enter a name for the security role in the **Name** box.

Step 6 – Enter a brief description for the role in the **Description** box.

Step 7 – In the **Priority** box, type or select a value in the range, 1-99, to set the role
priority. This should be a unique value for each role in an identity store.

Step 8 – In the **Criteria** area, specify a criterion to determine role members. For details, see
the [Security Role – Criteria](/docs/directorymanager/11.1/admincenter/securityrole/criteria.md) topic.

Step 9 – Next, assign group management, user management, and other permissions to the security role.
For details, see the [Security Role – Permissions](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md) topic.

Step 10 – Select the **HelpDesk Role** checkbox if you want to restrict role members to the Helpdesk
node of Admin Center.

Step 11 – Click **Create Security Role**.

Step 12 – Click **Save** on the **Security Roles** page. See the [Manage Security Roles](/docs/directorymanager/11.1/admincenter/securityrole/manage.md)
topic.

## Create a Role by Copying an Existing Role

You can use a security role as a template to create a new role. In this case, the criteria,
permissions, and policies of the template role are copied to the new role.

**Follow the steps to copy a role**

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Security Roles** under Settings in the left pane.

Step 4 – On the **Security Roles** page, click the ellipsis button for the security role you want to
use as template and select **Copy**. The **Copy Security Role** page is displayed.

Step 5 – Follow steps 5-9 in the Create a Security Role from Scratch topic to update role info and
click **Update Security Role**.

Step 6 – On the Security Roles page, click **Save**.

Step 7 – To update the policies for the new role, see the
[Security Role Policies](/docs/directorymanager/11.1/admincenter/securityrole/policy/overview.md) topic.