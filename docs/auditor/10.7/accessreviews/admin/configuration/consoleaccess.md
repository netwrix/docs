---
title: "Console Access Page"
description: "Console Access Page"
sidebar_position: 10
---

# Console Access Page

Console access is configured through the Configuration > Console Access page. Adding users to the
Access Reviews Console requires the Active Directory service account to be configured.

![Configuration interface showing the Console Access page](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccess.webp)

There are two levels of access, or roles, which can be granted to domain users or groups:

- Administrator – Role allows access to all interfaces including the Configuration interface
- Security Team – Role allows access to all interfaces except for the Configuration interface

    - In the Entitlement Reviews interface, this role can only view reviews that the logged in user
      has created.
    - Access can be limited by resource types (File System, SharePoint, or Active Directory)

**CAUTION:** Before disabling the Builtin Administrator account, first assign at
least one domain user account to the Administrator role. Login with another Administrator account to
disable the Builtin Administrator. Failure to do this could result in being locked-out of the
Configuration interface. As an alternative to disabling this account, the password can be changed.
See the Modify the Builtin Administrator Account topic for additional information.

Once users have been granted console access, they can login with their domain credentials. Console
access isn't a requirement for owners to complete Access Reviews. See the
[URL & Login](/docs/auditor/10.7/accessreviews/admin/login.md) topic for information on how users will log in and where they are
directed after login based on their assigned role or lack of role.

## Add Console Users


![Console Access Page](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccess.webp)

1. In the Configuration interface on the Console Access page, click Add. The Console
Access wizard opens.

![Console Access wizard showing the Select Trustees page](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessselecttrustee.webp)

2. On the Select Trustee page, enter the following information and click Next:

- Domain — If the Access Reviews Console has been configured for multiple domains, use the dropdown
  menu to select the domain
- Search — Begin typing the sAMAccountName or display name and the field will auto-populate options
  from Active Directory sAMAccountName

![Console Access wizard showing the Select Access page](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessselectaccess.webp)

3. On the Select Access page, enter the following information and click **Finish**:

- Select a role for this trustee – Select a role from the dropdown list:

    - Unlimited Access — The Administrator role grants unlimited access
    - Limited Access — All other roles can be granted limited access

- Allow access to the following resource — When enabled, users can be limited to only having
  visibility into data for the selected types of resources. Check the boxes for the type of resource
  data to be made available to this user.
- Access is enabled – A user's account must be enabled to log into the console. Unchecking
  this option lets you configure access to be granted at a future time.

![Console Access Page displaying users with various assigned roles](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessadd.webp)

4. The new user displays in the list on the Console Access page. Repeat these steps for
each trustee to be granted console access.

After the first user with the role of Administrator has been added, the Builtin Administrator account
can be disabled by that user. See the Modify the Builtin Administrator Account topic for additional
information.

## Modify Console Users


**NOTE:** These steps are for modifying domain users with console access roles and don't apply to
the Builtin Administrator account. See the Modify the Builtin Administrator Account topic for
additional information.

1. In the Configuration interface on the Console Access page, select the user to be
modified and click Modify. The Console Access wizard opens to the Select Access page.

![Console Access wizard showing the Select Access page when modifying](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessmodifyselectaccess.webp)

2. Modify the settings and click **Finish**:

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
  this option lets you configure access to be granted at a future time.

Any modifications to the user’s role are visible in the list on the Console Access page.

## Delete Console Users

**CAUTION:** Confirmation isn't requested when deleting users. An alternative to deleting a console
user is to disable their access. See the Modify Console Users topic for additional information.


![Console Access Page showing various user accounts, with one selected enabling the Modify and Remove buttons](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessremove.webp)

1. In the Configuration interface on the Console Access page, select the user.

2. Click Remove.

The user is removed from the list on the Console Access page.

## Modify the Builtin Administrator Account

Disable or change the password for the Builtin Administrator account.

![modifybuiltinadministrator](/images/accessinformationcenter/12.0/admin/configuration/modifybuiltinadministrator.webp)

1. In the Configuration interface on the Console Access page, select the Builtin
Administrator account and click **Modify**. The Builtin Administrator window opens.

2. Modify the account as needed and click **OK**:

- Access is enabled — Indicates whether the account is enabled for login
- Change Password — Lets you change the password for this Builtin Administrator account. Check
  the box and enter the new password in both entry fields. The password must be eight or more
  characters long.

The modifications to the Builtin Administrator are processed.

**NOTE:** The new password is encrypted in the `AccessInformationCenter.Service.exe.Config` file, in
the `AuthBuiltinAdminPassword` parameter. If you forget the Admin password, you can clear the
`AuthBuiltinAdminPassword` value in the `AccessInformationCenter.Service.exe.Config` file. Then use
the default first launch login credentials to set a new password.
