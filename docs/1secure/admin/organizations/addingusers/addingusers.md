---
title: "Add Users"
description: "Add Users"
sidebar_position: 70
---

# Add Users

After you add the organization to your system, you can add users to your organization and assign
them a role. The roles in Netwrix 1Secure are:

- System Administrator
- Administrator
- Editor
- Viewer
- Managed Tenant Manager
- Business Viewer
- Co-managing Administrator

The System Administrator role has full access to the system and is granted every permission. Tenant
users can't assign it.

You can add users both in Managing Organization and in Managed Organization. See the
[Manage Organizations](/docs/1secure/admin/organizations/overview.md) topic for additional information.

Image keys:

| Icon                                                                                           | Description                                           |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| ![deletebutton](/images/1secure/integration/deletebutton.webp)     | Bin Icon. Click the Bin Icon to delete the user.      |
| ![editbutton](/images/1secure/admin/organizations/editbutton.webp) | Edit icon. Click the Edit Icon to edit the user data. |

## Add Users to Managing Organization

The Users page allows a Managed Service Provider (MSP) to give the client's manager access to
review reports or other activities. In this case, assign the Viewer rights to the manager.

Follow the instructions to add a user.

**Step 1 –** In the Netwrix 1Secure Website, go to **Configuration** > **Users** page, click **Add
Users**.

**Step 2 –** Specify email addresses of the user and roles. The new user's role defaults to Viewer:

- Administrator – full access rights within the tenant
- Editor – modification access rights within the tenant
- Viewer – read-only access rights within the tenant

The main role list drops System Administrator unless you are a System Administrator. It drops
Administrator unless you are an Administrator or above. It excludes the two business roles. The
per-product roles in the user dialog are Viewer and Editor only. A user in a managing (MSP)
organization can also receive the Managed Tenant Manager role. Managed Tenant Managers can manage
tags and user access to child (managed) organizations. Child and end-customer organizations have no
additional roles.

Netwrix 1Secure blocks these actions with an error. Selecting a role that isn't available returns
"One or more of the selected roles are not available." Editing your own user record returns an error
that users can't edit themselves. Editing a user with higher privileges than your own returns an
error that you can't edit such a user.

## Access Rights for Roles

The Users page requires the User Manage permission. Adding several users at once requires Bulk
User Add, which Editors don't hold. The Organization groups page requires the Manage Tenancy Groups
permission, which only Administrators and System Administrators hold. The My organization page, and
its settings, deletion, and authentication actions, require the Tenancy Administration permission,
which only Administrators hold.

Each role holds these permissions:

- Administrator – Bulk User Add, Audit View, Dashboard Manage and View, User Manage, Risk Profile
  Manage, Tenancy Administration, Managed Tenant Manage, Product Manage, Alert Manage and View,
  Integrations Manage and View, Report Export, Activity Record Report Save, Agent Update,
  Subscription Manage, and the Sources, Sites, Credentials, Business Users, and Tenancy Groups
  manage permissions.
- Editor – Dashboard Manage and View, User Manage, Managed Tenant Manage, Alert View, Integrations
  View, Report Export, Activity Record Report Save, Subscription Manage, and the Sources, Sites,
  Credentials, and Business Users manage permissions. Editors don't hold Alert Manage, Agent
  Update, Integrations Manage, Tenancy Administration, Risk Profile Manage, Bulk User Add, Tenancy
  Groups manage, or Audit View.
- Viewer – Dashboard View only.
- Managed Tenant Manager – Managed Tenant Manage and the Sources, Sites, Credentials, and Business
  Users manage permissions.
- Business Viewer – Dashboard View and Report Export.
- Co-managing Administrator – Dashboard View, Subscription Manage, Bulk User Add, Report Export,
  Agent Update, and the Sources, Sites, Credentials, and Business Users manage permissions.

**Step 3 –** Select the **Temporary User Access** checkbox if you need to allow access to
specific user for certain period. Set the **Access Expiring On** date. The date must be in the
future. Otherwise, the message is "The Valid Until date if set must be in the future." After that
date, the role expires and Netwrix 1Secure removes access.

For example, if you are a tenant administrator and you allowed access to a member of your team who
should edit 100 accounts before 08.03.2023, this member can manage these activities up to a certain
period and the administrator doesn't need to suspend the rights manually.

![Add Users pane](/images/1secure/admin/organizations/addusers.webp)

**Step 4 –** Select one or more organization groups from the **Select organization groups for the
user** dropdown menu. To specify multiple groups, select them one by one from the dropdown menu.

The user can only view and/or manage the organizations assigned to the groups you select here.
You can limit only users who aren't Administrators to organization groups. Saving an Administrator
removes any organization group access.

:::note
Administrators have access to all tenancies regardless of the organization groups. You can't add them to groups.
:::


**Step 5 –** Click Add.

**To review main options and statuses:**

**Step 1 –** To delete the user, select the **Bin icon** for that user.

**Step 2 –** To edit the user data, select the **Edit icon** for that user.

If the user received an invitation from your tenant and registered, the status is Verified.

If the user has not registered, the status is Pending Verification. The administrator can select
Resend Invite to re-notify this user. An expired invitation shows Invite Expired. Netwrix 1Secure
refuses a resend if it sent a verification email in the last 15 minutes. The message is "A
verification email was already sent within the last 15 minutes."

![Users List](/images/1secure/admin/organizations/users_status.webp)

When logging in, the users see the Home screen, on which they can do the following actions:

- Add organization here by selecting **Add Organization**
- Find the organization by populating the **Filtering the keyword** field
- Select the required filters from the **Alert**, **Health Status**, **Tag**, **Time Filter**
  dropdown lists. These filters apply to available organizations.

## Add the Business Viewer Role

:::note
This option isn't available for End Customer Organizations.
:::


Add a Business Viewer role using the Managed Organizations page. The Business viewer is the
organization user, which can be added by users with the Manage Business Users permission to access
the reports and other data of the organization. Adding or editing a business user also requires
Bulk User Add.

The Business viewer role:

- Can access organization dashboards and alerts
- Can run investigations
- Can view predefined reports
- Can view the following custom reports:

    - ag-test1

Business viewers can't add reports on their own. The UI says "These users will not be able to add
reports on their own." When creating the report, select the option **Share
with business users**. This way, all business users can view the shared reports. See the
[ Custom Reports](/docs/1secure/admin/searchandreports/customreports.md) topic for additional information.

When you add the business viewer, the created reports are automatically displayed.

![Add Users pane](/images/1secure/admin/organizations/businessusers.webp)

**To add the Business Viewer role:**

**Step 1 –** On the Managed Organizations page, select your organization and select to the **Users**
tile.

**Step 2 –** Click **Add User**.

**Step 3 –** Verify that the **Business Viewer** radio button is selected. This is the default
option.

**Step 4 –** Specify email addresses you want to add for the role.

**Step 5 –** Click **Send Invite**.

:::note
The Business viewer role provides access to the Home screen, which displays the logged in
organization.
:::


![Home page](/images/1secure/admin/organizations/homescreen_2.webp)

:::note
When logging in, if the Business Viewer account is registered with multiple organizations,
select the one you want to access.
:::


## Add the Co-Managing Administrator Role

Add a Co-Managing Administrator role using the Managed Organizations page. The Co-Managing
Administrator extends the permissions available with the Business Viewer role, which users with the
Manage Business Users permission can add to access the reports and other data of the organization.

The Co-Managing Administrator role:

- Can configure sources and connectors
- Can add business viewers
- Can run investigations
- Can view predefined reports
- Can view custom reports

The Co-Managing Administrator role can't add reports on their own. When creating the report, select
the option **Share with business users**. This way, all the business users can view the shared
reports. See the [ Custom Reports](/docs/1secure/admin/searchandreports/customreports.md) topic for additional
information.

![Add Users pane](/images/1secure/admin/organizations/comanagingadministrator.webp)

**To add the Co-managing Administrator role:**

**Step 1 –** On the Manage Organizations page, select your organization and click the **Users**
tile.

**Step 2 –** Click **Add User**.

**Step 3 –** Specify email addresses you want to add for the role.

**Step 4 –** Select the **Co-managing Administrator** radio button.

**Step 5 –** Click **Send Invite**.

:::note
The Co-managing Administrator role provides access to the Home screen, which displays the
logged in organization.
:::


## Delete a Managed Organization User

:::note
Deleting users requires the Manage Business Users permission. Administrators, Editors, Managed
Tenant Managers, and Co-managing Administrators hold it.
:::

**To delete a user from a managed organization:**


**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** Click the name of an organization from the list. The properties page for the
organization is displayed.

**Step 3 –** Click the **Users** tab. The users for the organization are listed here.

**Step 4 –** Click the **Delete** icon for a user to delete it.

A dialog box prompts you to confirm the deletion of the user.

**Step 5 –** Click **Yes**.

The user is deleted.
