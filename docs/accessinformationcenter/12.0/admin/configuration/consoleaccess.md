---
title: "Console Access Page"
description: "Console Access Page"
sidebar_position: 10
---

# Console Access Page

Configure console access through the **Configuration** > **Console Access** page. You must collect data through the Access Analyzer .Active
Directory Inventory Solution to add users to the Access Information Center.

![Console Access Configuration page](/images/accessinformationcenter/12.0/admin/configuration/consoleaccess.webp)

You can grant domain users or groups one of five levels of access, or Roles:

- Administrator – Role allows access to all interfaces including the Configuration interface
- Security Team – Role allows access to all interfaces except for the Configuration interface
    - In the Resource Reviews interface, this role can only view resource reviews that the logged in
      user has created.
- Reader – Role limits the user's access solely to reports available in the Resource Audit interface
  or through the Search features
- Data Privacy — Role allows the user to search metadata and identities from the Netwrix Access
  Analyzer (formerly Enterprise Auditor) Subject Profiles feature
- User Access Administrator — Role allows the user to configure console access for other users. This
  role doesn't grant access to any other page within the Configuration interface. Nor does it grant
  access to any other interface within the Access Information Center. This role also doesn't have
  rights to modify the Builtin Administrator account or their own access.

:::note
If Netwrix Access Analyzer (formerly Enterprise Auditor) is storing discovered sensitive
data, the Sensitive Data reports will only display the sensitive data matches for users with the
Security Team and Administrator roles.
:::


A user granted either the Reader or Security Team role can also be further restricted to accessing
information for either:

- Specific resource types (File System, SharePoint, or Active Directory)
- Specific servers

:::warning
You must first assign at least one domain user account to the Administrator role
before disabling the Builtin Administrator account. Log in with another Administrator account to
disable the Builtin Administrator. Failure to do this could lock you out of the
Configuration interface. As an alternative to disabling this account, you can change the password.
See the Modify the Builtin Administrator Account topic for additional information.
:::


Once users have been granted console access, they can log in with their domain credentials. Console
access isn't a requirement for participation as owners or domain users in the Resource Reviews and
Self-Service Access Requests workflows. See the [URL & Login](/docs/accessinformationcenter/12.0/admin/login/login.md) topic for information on
how users will log in and where they are directed after login based on their assigned role or lack
of role.

## Add Console Users

To grant domain users or groups console access:

![Console Access Configuration page](/images/accessinformationcenter/12.0/admin/configuration/consoleaccess.webp)

**Step 1 –** In the Configuration interface on the Console Access page, click Add. The Console
Access wizard opens.

![Console Access wizard showing the Select Trustee page](/images/accessinformationcenter/12.0/admin/configuration/consoleaccessaddselecttrustee.webp)

**Step 2 –** On the Select Trustee page, enter the following information and click Next:

- Domain — If the Access Information Center has been configured for multiple domains, use the
  dropdown menu to select the domain you want
- Trustee Type — Choose between adding a user or a group by selecting from the dropdown menu
- Search — Begin typing the sAMAccountName or display name and the field will auto-populate options
  from Active Directory

![Console Access wizard showing the Select Access page](/images/accessinformationcenter/12.0/admin/configuration/consoleaccessaddselectaccess.webp)

**Step 3 –** On the Select Access page, enter the following information and click **Finish**:

- Select a role for this trustee – Select a role from the dropdown list:

    - Unlimited Access — The Administrator role grants unlimited access
    - Limited Access — All other roles can be granted limited access

- Allow access to the following resource — When enabled, users can be limited to only having
  visibility into data for the selected types of resources. Check the boxes for the type of resource
  data to be made available to this user.
- Allow access to the following servers — When enabled, users can be limited to only having
  visibility into data for specific servers. Begin typing server names and the field will
  auto-populate with known servers from scanned data. A resource type appears in parentheses after
  the host name for quick reference.
- Access is enabled – A user's account must be enabled to log into the console. Unchecking
  this option lets you defer access until you enable it later.

![Console Access Page displaying users with various assigned roles](/images/accessinformationcenter/12.0/admin/configuration/consoleaccesswithusers.webp)

**Step 4 –** The new user displays in the list on the Console Access page. Repeat these steps for
each trustee to be granted console access.

After the first user with the role of Administrator has been added, the Builtin Administrator account
can be disabled by that user. See the Modify the Builtin Administrator Account topic for additional
information.

## Modify Console Users

To modify a user's console access:

:::note
These steps modify domain users with console access roles and don't apply to
the Builtin Administrator account. See the Modify the Builtin Administrator Account topic for
additional information.
:::


**Step 1 –** In the Configuration interface on the Console Access page, select the user to be
modified and click Modify. The Console Access wizard opens to the Select Access page.

![Console Access wizard showing the Select Access page when modifying](/images/accessinformationcenter/12.0/admin/configuration/consoleaccessmodify.webp)

**Step 2 –** Modify the settings you want and click **Finish**:

- Select a role for this trustee – Select a role from the dropdown list:

    - Unlimited Access — The Administrator role grants unlimited access
    - Limited Access — All other roles can be granted limited access

- Allow access to the following resource — When enabled, users can be limited to only having
  visibility into data for the selected types of resources. Check the boxes for the type of resource
  data to be made available to this user.
- Allow access to the following servers — When enabled, users can be limited to only having
  visibility into data for specific servers. Begin typing server names and the field will
  auto-populate with known servers from scanned data. A resource type appears in parentheses after
  the host name for quick reference.
- Access is enabled – A user's account must be enabled to log into the console. Unchecking
  this option lets you defer access until you enable it later.

Any modifications to the user's role appear in the list on the Console Access page.

## Delete Console Users

:::warning
The system doesn't request confirmation when deleting users. An alternative to deleting a console
user is to disable their access. See the Modify Console Users topic for additional information.
:::


To remove a user's configured console access:

![Console Access Page showing various user accounts, with one selected enabling the Modify and Remove buttons](/images/accessinformationcenter/12.0/admin/configuration/consoleaccessremove.webp)

**Step 1 –** In the Configuration interface on the Console Access page, select the user.

**Step 2 –** Click Remove.

The system removes the user from the list on the Console Access page.

## Modify the Builtin Administrator Account

You can disable the Builtin Administrator account or change its password. Follow the steps
to modify this account.

![modifybuiltinadministrator](/images/accessinformationcenter/12.0/admin/configuration/modifybuiltinadministrator.webp)

**Step 1 –** In the Configuration interface on the Console Access page, select the Builtin
Administrator account and click **Modify**. The Builtin Administrator window opens.

**Step 2 –** Modify the account as desired and click **OK**:

- Access is enabled — Indicates whether the account can log in
- Change Password — Use this to change the password for this Builtin Administrator account. Check
  the box and enter the new password in both entry fields. The password must be eight or more
  characters long.

The system processes the modifications to the Builtin Administrator account.

:::note
The new password is encrypted in the `AccessInformationCenter.Service.exe.config` file, in
the `AuthBuiltinAdminPassword` parameter. If you forget the Admin password, you can clear the
`AuthBuiltinAdminPassword` value in the `AccessInformationCenter.Service.exe.config` file. Then use
the default first launch login credentials to set a new password.

:::
