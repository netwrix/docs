---
title: "Manage users in Directory Manager"
description: "Learn what users can do in the Directory Manager portal, from creating objects and managing direct reports to resetting passwords and validating profiles."
keywords:
  - user management
  - dotted line management
  - direct reports
  - linked accounts
  - Directory Manager portal
sidebar_position: 50
---

# Manage users in Directory Manager

With Directory Manager, you can:

- Automate user provisioning and deprovisioning in bulk. See the
  [Directory Manager Synchronize Overview](/docs/directorymanager/11.0/welcome/synchronize/overview.md) section.
- Establish ownership by defining a clear managerial hierarchy with dotted line management. See the
  [Dotted line management](/docs/directorymanager/11.0/welcome/user/properties/activedirectory/useroverview/organization.md#dotted-line-management)
  section of the
  [Organization Tab for Users and Contacts](/docs/directorymanager/11.0/welcome/user/properties/activedirectory/useroverview/organization.md)
  topic.
- Delegate user management to end users by enabling them to:

    - Create and manage users, contacts, and mailboxes in the directory. See the
      [ Create User, Mailbox, and Contact Objects](/docs/directorymanager/11.0/welcome/user/create/overview.md)
      topic.
    - Manage their direct reports. See the
      [Manage Your Direct Reports in Directory Manager](/docs/directorymanager/11.0/welcome/user/manage/directreport.md)
      topic.
    - Update their profiles in the directory. See the
      [Validate your profile in Directory Manager](/docs/directorymanager/11.0/welcome/user/manage/validateprofile.md)
      topic.

- Link identical users in different directory services, such as Active Directory and Microsoft Entra
  ID. See the [Link Accounts Across Identity Stores in Directory Manager](/docs/directorymanager/11.0/welcome/user/linkedaccounts.md)
  topic.

The following table lists the major functions that users can perform in the Directory Manager portal.

| Functions                     | Description                                                                                                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create Objects                | Create mail-enabled and non-mail-enabled users, contacts, or mailboxes.                                                                                                               |
| Manage your Profile           | On the top right corner, view your profile and verify the information.                                                                                                             |
| Manage Your Direct Reports    | View Users and Contacts that report directly to you. If required, you can modify the properties of your direct reports.                                                            |
| Manage Disabled Users         | View the list of users that have been disabled or expired. You can modify the properties of the users, extend the time for the expired users and also reinstate any disabled user. |
| View Organizational Hierarchy | Displays the complete hierarchy in graphical form. It displays a few user attributes, such as email address and profile picture.                                              |
| Link Accounts                 | With accounts in multiple identity stores, you can reset passwords or unlock accounts with Linked Accounts                                                                         |
| Reset Password                | Reset your forgotten or lost passwords. Unenrolled users can reset passwords if Second Way Authentication is enabled.                                                              |
| Unlock Account                | Unlock your accounts yourself without contacting the Administrator.                                                                                                                |
| Change Password               | Change your password according to the Password Policy set by the administrator.                                                                                                    |
| Validate Your Profile         | Validate your profile after a particular time to ensure the user information in the directory is accurate.                                                                         |
| User Account Settings         | Modify your profile information. Administrators can manage user information, expire users, and enable or disable them.                                                        |

:::note
The contact object type isn't supported in a Microsoft Entra ID based identity store.
:::

**See Also**

- [Enroll Your Identity Store Account in Directory Manager](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
- [Second Factor Authentication in Directory Manager](/docs/directorymanager/11.0/welcome/secondfactorauthentication/secondfactorauthentication.md)
- [Configure Directory Manager Portal Settings](/docs/directorymanager/11.0/welcome/generalfeatures/portal.md)
