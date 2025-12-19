---
title: "Active Directory Action Operations"
description: "Active Directory Action Operations"
sidebar_position: 20
---

# Active Directory Action Operations

Use Operations page to select one or more operations for the action to perform on the targeted
Active Directory objects. Some operations have wizard pages to specify the configuration settings.

![Active Directory Action Module Wizard Operations page](/images/accessanalyzer/11.6/admin/action/activedirectory/operations.webp)

The Operations drop-down menu contains the following operations:

- [Clear/Set SID History ](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/sidhistory.md)
- [Computer Details](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/computerdetails.md)
- [Disable/Enable Computers](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/disableenablecomputers.md)
- [Create Groups](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/creategroups.md)
- [Create Users](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/createusers.md)
- [Delete Objects](#delete-objects)
- [Disable/Enable Users](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/disableenableusers.md)
- [Group Details](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/groupdetails.md)
- [Group Membership](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/groupmembership.md)
- [Groups Remove All Members ](#groups-remove-all-members)
- [Move Objects](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/moveobjects.md)
- [Set/Reset Users Password ](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/setresetpassword.md)
- [Unlock Users ](#unlock-users)
- [Users Details ](/docs/accessanalyzer/11.6/admin/action/activedirectory/operations/usersdetails.md)

Select an operation from the drop-down list and then click **Add**. The selection appears in the
Selections pane as well as the navigation pane if there is an associated configuration page. If
performing multiple operations, the action executes the operations in the order in which they appear
here. To change the order, select an operation and use the **Down** and **Up** buttons.

## Delete Objects

:::warning
Once deleted, objects from Active Directory cannot be restored.
:::


Select this operation to delete objects from Active Directory, such as users, groups, or computers.
The source table determines which objects are deleted from the Active Directory. Therefore, this
operation does not possess its own wizard window.

## Groups Remove All Members

Select this operation to remove all members from groups located in the source table. There is not a
wizard window associated with this operation. No configuration is required.

## Unlock Users

Select this operation to unlock the account of the specified users in the source table. There is not
a wizard window associated with this operation. No configuration is required.
