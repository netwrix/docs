---
title: "Create Groups"
description: "Create Groups"
sidebar_position: 40
---

# Create Groups

Use the Create Groups page to configure the action to create groups on the selected target.

![Active Directory Action Module Wizard Create Groups page](/images/accessanalyzer/12.0/admin/action/activedirectory/operations/creategroups.webp)

Use the following options to configure the action:

- Insert field – Use the drop-down list to select a field (column) from the source table. Then,
  click the blue arrow to insert the item into the OU, Group name, or Group name (pre Windows 2000)
  boxes.
- OU – The organizational unit that contains the group

    - Create target OU location if it does not already exist – Select this checkbox to create the
      target OU

- Group Name – The name of the group that being created. This field is required.
- Group name (pre Windows 2000) – The name of the group being created
- Group scope – The scope of the group being created. Select from the following:

    - Universal
    - Global
    - DomainLocal
    - SqlField – Enter a value from the drop-down list

- Group type – The type of group being created. Select from the following:

    - Security
    - Distribution
    - SqlField – Enter a value from the drop-down list
