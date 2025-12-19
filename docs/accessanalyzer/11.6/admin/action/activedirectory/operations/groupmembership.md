---
title: "Group Membership"
description: "Group Membership"
sidebar_position: 80
---

# Group Membership

Use the Groups Membership page to add or remove group members. Values from the source table can also
be used to specify if the object will be added or removed.

![Active Directory Action Module Wizard Group Membership page](/images/accessanalyzer/11.6/admin/action/activedirectory/operations/groupmembership.webp)

Use the following options to configure the action:

- Insert field – Use the drop-down list to select a field (column) from the source table. Then,
  click the blue arrow to insert the item into the selected box.
- Select one of the following:

    - Target Group by OU
    - Target Group by NT Style Name

- OU – The organizational unit that contains the group. This field is required.

    - Create target OU location if it does not already exist – Select this checkbox to create the
      target OU.

- Group (CN, not a pre-Windows 2000 name) – The group to create. This field is required.

    - Create target Group if it does not already exist

- Select one of the following:

    - Add members
    - Remove members
    - Add/Remove members – Enables the ChangeType Column drop down list

- ChangeType Column – The value to use from the source table to specify if the object is added or
  removed. The contents of the ChangeType column should be a 0 for Add or a 1 for Remove.
