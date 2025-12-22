---
title: "User Management"
description: "User Management"
sidebar_position: 50
---

# User Management

With GroupID, you can:

- Automate user provisioning and deprovisioning in bulk. See the
  [Synchronize](/docs/directorymanager/11.0/welcome/synchronize/overview.md) section.
- Establish ownership by defining a clear managerial hierarchy with dotted line management. See the
  [Dotted line management](/docs/directorymanager/11.0/welcome/user/properties/activedirectory/useroverview/organization.md#dotted-line-management)
  section of the
  [Object properties - Organization tab](/docs/directorymanager/11.0/welcome/user/properties/activedirectory/useroverview/organization.md)
  topic.
- Delegate user management to end users by enabling them to:

    - Create and manage users, contacts, and mailboxes in the directory. See the
      [ Create User Objects](/docs/directorymanager/11.0/welcome/user/create/overview.md)
      topic.
    - Manage their direct reports. See the
      [Update your Direct Reports](/docs/directorymanager/11.0/welcome/user/manage/directreport.md)
      topic.
    - Update their profiles in the directory. See the
      [Validate your profile](/docs/directorymanager/11.0/welcome/user/manage/validateprofile.md)
      topic.

- Link identical users in different directory services, such as Active Directory and Microsoft Entra
  ID. See the [Linked Accounts](/docs/directorymanager/11.0/welcome/user/linkedaccounts.md)
  topic.

The table below displays the major functions that users can perform in GroupID portal.

| Functions                     | Description                                                                                                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create Objects                | Create mail-enabled and non-mail-enabled Users, Contact, or Mailbox.                                                                                                               |
| Manage your Profile           | On the top right corner, view your profile and verify the information.                                                                                                             |
| Manage Your Direct Reports    | View Users and Contacts that report directly to you. If required, you can modify the properties of your direct reports.                                                            |
| Manage Disabled Users         | View the list of users that have been disabled or expired. You can modify the properties of the users, extend the time for the expired users and also reinstate any disabled user. |
| View Organizational Hierarchy | Displays the complete hierarchy in graphical form. It displays few attributes of users like email address and profile picture etc.                                                 |
| Link Accounts                 | With accounts in multiple identity stores, you can reset passwords or unlock accounts with Linked Accounts                                                                         |
| Reset Password                | Reset your forgotten or lost passwords. Unenrolled users can reset passwords if Second Way Authentication is enabled.                                                              |
| Unlock Account                | Unlock your accounts yourself without contacting the Administrator.                                                                                                                |
| Change Password               | Change your password according to the Password Policy set by the administrator.                                                                                                    |
| Validate Your Profile         | Validate your profile after a particular time in order to ensure the user information in the directory.                                                                            |
| User Account Settings         | Modify your profile information. Administrators can manage the user information, enable/disable the user, or expire a user.                                                        |

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

**See Also**

- [Enroll Your Identity Store Account](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
- [Second Factor Authentication](/docs/directorymanager/11.0/welcome/secondfactorauthentication/secondfactorauthentication.md)
- [Portal Settings](/docs/directorymanager/11.0/welcome/generalfeatures/portal.md)
