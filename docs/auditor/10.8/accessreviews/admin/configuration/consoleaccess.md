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

**CAUTION:** Before disabling the Builtin Administrator account, it is necessary to first assign at
least one domain user account to the Administrator role. Login with another Administrator account to
disable the Builtin Administrator. Failure to do this could result in being locked-out of the
Configuration interface. As an alternative to disabling this account, the password can be changed.
See the Modify the Builtin Administrator Account topic for additional information.

Once users have been granted console access, they can login with their domain credentials. Console
access is not a requirement for owners to complete Access Reviews. See the
[URL & Login](/docs/auditor/10.8/accessreviews/admin/login.md) topic for information on how users will log in and where they are
directed after login based on their assigned role or lack of role.

## Add Console Users

Follow the steps to grant domain users or groups console access.

![Console Access Page](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccess.webp)

**Step 1 –** In the Configuration interface on the Console Access page, click Add. The Console
Access wizard opens.

![Console Access wizard showing the Select Trustees page](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessselecttrustee.webp)

**Step 2 –** On the Select Trustee page, enter the following information and click Next:

- Domain — If the Access Reviews Console has been configured for multiple domains, use the drop-down
  menu to select the desired domain
- Search — Begin typing the sAMAccountName or display name and the field will auto-populate options
  from Active Directory sAMAccountName

![Console Access wizard showing the Select Access page](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessselectaccess.webp)

**Step 3 –** On the Select Access page, enter the following information and click **Finish**:

- Select a role for this trustee – Select a role from the drop down list:

    - Unlimited Access — The Administrator role grants unlimited access
    - Limited Access — All other roles can be granted limited access

- Allow access to the following resource — When enabled, users can be limited to only having
  visibility into data for the selected types of resources. Check the boxes for the type of resource
  data to be made available to this user.
- Access is enabled – A user's account must be enabled in order to log into the console. Unchecking
  this option allows you to configure access to be granted at a future time.

![Console Access Page displaying users with various assigned roles](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessadd.webp)

**Step 4 –** The new user displays in the list on the Console Access page. Repeat these steps for
each trustee to be granted console access.

Once the first user with the role of Administrator has been added, the Builtin Administrator account
can be disabled by that user. See the Modify the Builtin Administrator Account topic for additional
information.

## Modify Console Users

Follow the steps to modify a user’s console access.

**NOTE:** These steps are for modifying domain users with console access roles and do not apply to
the Builtin Administrator account. See the Modify the Builtin Administrator Account topic for
additional information.

**Step 1 –** In the Configuration interface on the Console Access page, select the user to be
modified and click Modify. The Console Access wizard opens to the Select Access page.

![Console Access wizard showing the Select Access page when modifying](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessmodifyselectaccess.webp)

**Step 2 –** Modify the desired settings and click **Finish**:

- Select a role for this trustee – Select a role from the drop down list:

    - Unlimited Access — The Administrator role grants unlimited access
    - Limited Access — All other roles can be granted limited access

- Allow access to the following resource — When enabled, users can be limited to only having
  visibility into data for the selected types of resources. Check the boxes for the type of resource
  data to be made available to this user.
- Allow access to the following servers — When enabled, users can be limited to only having
  visibility into data for specific servers. Begin typing server names and the field will
  auto-populate with known servers from scanned data. A resource type appears in parentheses after
  the host name for quick reference.
- Access is enabled – A user's account must be enabled in order to log into the console. Unchecking
  this option allows you to configure access to be granted at a future time.

Any modifications to the user’s role are visible in the list on the Console Access page.

## Delete Console Users

**CAUTION:** Confirmation is not requested when deleting users. An alternative to deleting a console
user is to disable their access. See the Modify Console Users topic for additional information.

Follow the steps to remove a user’s configured console access.

![Console Access Page showing various user accounts, with one selected enabling the Modify and Remove buttons](/images/auditor/10.7/access/reviews/admin/configuration/consoleaccessremove.webp)

**Step 1 –** In the Configuration interface on the Console Access page, select the user.

**Step 2 –** Click Remove.

The user is removed from the list on the Console Access page.

## Modify the Builtin Administrator Account

The Builtin Administrator account can be disabled or its password can be changed. Follow the steps
to modify this account.

![modifybuiltinadministrator](/images/accessinformationcenter/12.0/admin/configuration/modifybuiltinadministrator.webp)

**Step 1 –** In the Configuration interface on the Console Access page, select the Builtin
Administrator account and click **Modify**. The Builtin Administrator window opens.

**Step 2 –** Modify the account as desired and click **OK**:

- Access is enabled — Indicates whether the account can be used to login
- Change Password — Allows you to change the password for this Builtin Administrator account. Check
  the box and enter the new password in both entry fields. The password must be eight or more
  characters long.

The modifications to the Builtin Administrator are processed.

**NOTE:** The new password is encrypted in the `AccessInformationCenter.Service.exe.Config` file, in
the `AuthBuiltinAdminPassword` parameter. If you forget the Admin password, you can clear the
`AuthBuiltinAdminPassword` value in the `AccessInformationCenter.Service.exe.Config` file. Then use
the default first launch login credentials to set a new password.
