---
title: "User Access"
description: "User Access Page"
sidebar_position: 20
---

# User Access Page

The User Access page within the System Settings interface displays users and groups with their
assigned roles for console access.

Use the gear icon in the upper right corner of the console to open the Configuration menu. Then
select **System Settings** to open the System Settings interface.

Click **User Access** in the navigation pane.

![System Settings interface on the User Access page](/images/threatprevention/8.0/reportingmodule/configuration/systemsettings/useraccess.webp)

Roles are assigned by the following methods:

- Group Membership – Members of the group will be given the role assigned

  :::note
  If a user is a member of multiple assigned groups, the group with the highest level of
  privilege is assigned
  :::


- Direct User Assignment – Assigns a role directly to a user

  :::note
  If a user is assigned a role directly, it takes priority over any group membership
  roles that have been assigned
  :::


The User Access page has the following sections:

- Users & Groups – Itprovides the ability to allow or deny console access and configure
  authentication types for users and groups. See the Users & Groups topic for additional
  information.
- Settings – It provides the ability to customize the user login page and configure the token
  expiration time for authenticated users. See the Settings topic for additional information.

## Users & Groups

The Users & Groups section provides the ability to allow or deny console access and configure
authentication types for users and groups.

![Users and Groups section of the User Access page](/images/threatprevention/8.0/reportingmodule/configuration/systemsettings/usersgroups.webp)

The table displays the following information:

- Access rule type – Indicates the access type as _Allow_, which enables console access, or _Deny_,
  which disables console access

  :::note
  Disabling a user or group disables that level of access. It does not block the user or
  group from logging into the console if they have access through another role assignment.
  :::


- Login name – The NTStyle domain name for the user or group account
- Display name – The display name for the user or group account
- Domain Name – Name of the domain. This may be either the domain DNS name or domain controller
  hostname. For the built-in ADMIN account, the domain is INTERCEPT Admin.
- Role – The role assigned to the user or group for accessing this application. See the Roles
  Defined topic for additional information.
- Authentication Type – Type of MFA authentication assigned to the user or group. See the
  Authentication Types Defined topic for additional information.
- Action – This column has the following icons for conducting actions on the user or group:

  - Edit icon – Allows you to edit the columns in the selected row by enabling drop-down menus.
    The edit icon changes to a save icon while in edit mode. See the Edit Console Access topic for
    additional information.
  - Trash icon – Opens a Warning window to confirm the action of deleting the user or group.
    Removing a user or group removes console access for it.. Note that the builtin "ADMIN" account
    cannot have its access removed until an account besides the builtin "ADMIN" is granted
    administrative access to the console.
  - Reset MFA button – Forces the user or every user in the group to reconfigure MFA on the next
    login. This option is only available if an MFA authentication type is applied to the user or
    group.
  - Change Password icon – Only available for the built-in ADMIN account. This icon opens the Edit
    password for build-in admin window. See the Edit Built-in Admin Password topic for additional
    information.

The **New Access** button opens the Add Console Access window. See the Add Console Access topic for
additional information.

### Roles Defined

The following roles can be assigned to users and groups:

- Administrator – This role provides unrestricted access to all functionality
- Report Reviewer – This role can only utilize investigations that have been directly assigned to
  them

  - No access to Configuration pages
  - Only has access to the investigation pages
  - Can only see and run saved investigations that have been assigned to them
  - Unable to save Investigations or modify exiting Investigations
  - Can export reports they have access to

- Responders – This role allows users or groups to run Investigations

  - No access to Configuration pages
  - Unable to save Investigations or modify exiting Investigations

- Reviewers – This role allows users or groups to run Investigations

  - No access to Configuration pages
  - Unable to save Investigations or modify exiting Investigations

- Response Managers – This role allows users or groups to run, save, and modify Investigations and
  view the Configuration interface
- Report Administrator – This role can configure/utilize anything on the investigations page

  - No access to Configuration pages
  - Only has access to the investigation pages
  - Can create, edit, and assign any investigation
  - Can export any investigation
  - Can create or modify any subscription

:::note
For Netwrix Threat Manager Reporting Module, the Responders and Reviewers roles provide
the same capabilities. The Responders role has additional permissions in a full Threat Manager
deployment.
:::


### Authentication Types Defined

The following authentication types can be assigned to users and groups:

- Built-in MFA – This type uses an Active Directory username and password with a one-time password
  (OTP) that is configured on the first login by a user via a multi-factor authentication (MFA)
  solution (Authenticator, DUO, etc.)
- No MFA – This type uses only an Active Directory username and password for authentication
- Authentication Provider Profiles – This type enables third-party authentication providers using
  RADIUS, OpenID, and SAML integrations. Methods of authentication will vary based on the
  third-party authentication provider. This must be configure in the Authentication Provider page of
  the Integrations interface in order to be available for user assignment.

See the [Authentication Provider Page](/docs/threatprevention/8.0/reportingmodule/configuration/integrations/authenticationprovider/page.md) topic for
additional information.

### Add Console Access

:::note
Verify that an Active Directory Sync has completed to ensure that user and group
information is updated. See the [Active Directory Sync Page](/docs/threatprevention/8.0/reportingmodule/configuration/integrations/activedirectorysync.md)
for additional information.
:::


Follow the steps to add console access for a user or group.

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **System Settings** to open the System Settings interface.

**Step 2 –** On the User Access page of the System Settings interface, click New Access. The Add
Console Access window opens.

![Add Console Access window](/images/threatprevention/8.0/reportingmodule/configuration/systemsettings/addconsoleaccess.webp)

**Step 3 –** Begin typing a user or group name in the **User Access** box. The drop-down menu will
populate as you type with available options. Select a user or group from the menu.

**Step 4 –** Select an authentication type from the **Authentication Type** drop-down menu.

:::tip
Remember, authentication provider profile types are displayed after an integration has been
configured on the Authentication Provider page of the Integrations interface.
:::


**Step 5 –** Select a role to assign it to the user or group from the **Role** drop-down menu.

**Step 6 –** Click Add. The Add Console Access window closes.

The user or group is added to the table with the assigned role.

### Edit Console Access

Follow the steps to change the role assigned to a user or group.

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **System Settings** to open the System Settings interface.

**Step 2 –** On the User Access page of the System Settings interface, click the **Edit** icon for a
user or group.

![User and Groups section showing the 3 drop-down menus in Edit mode](/images/threatprevention/8.0/reportingmodule/configuration/systemsettings/editaccess.webp)

**Step 3 –** Use the drop-down menus to modify the Access rule type, Role, and/or Authentication
Type for this user or group.

**Step 4 –** Click the Save icon, which replaced the Edit icon.

The modification for the selected user or group is committed.

### Edit Built-in Admin Password

Follow the steps to change the password for the built-in ADMIN account.

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **System Settings** to open the System Settings interface.

**Step 2 –** On the User Access page of the System Settings interface, click the gear icon for the
built-in ADMIN account. The Edit password for built-in admin window opens.

![Edit password for built-in admin window](/images/threatprevention/8.0/reportingmodule/configuration/systemsettings/editpasswordbuiltinadmin.webp)

**Step 3 –** Enter the existing password in the **Old Password** field.

**Step 4 –** Enter the new password in the **New Password** field.

**Step 5 –** Re-enter the new password in the **Confirm New Password** field.

**Step 6 –** Click Save. The Edit password for built-in admin window closes.

The password for the built-in ADMIN account has been updated.

## Settings

The Settings section provides the ability to customize the user login page and configure the token
expiration time for authenticated users.

![Settings section of the User Access page](/images/threatprevention/8.0/reportingmodule/configuration/systemsettings/settings.webp)

- One page login (Login, password, MFA code on one page) – Combines username and password, and
  multi-factor authentication on a single page
- Two pages login (MFA code on a different page) – This is the default setting for the login page

  - The first page requires a username and password
  - The second page is the multi-factor authentication page

- Token expiration time – The period of inactivity before the user is required to re-authenticate
  for access to the console. Select the desired expiration time from the drop-down menu:

  - 15 Minutes
  - 30 Minutes
  - 1 Hour
  - 4 Hours

Changing any of these options automatically saves your settings and applies to all users.
