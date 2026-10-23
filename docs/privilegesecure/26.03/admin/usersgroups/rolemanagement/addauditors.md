---
title: "Add Auditor Permissions and Auditors Window"
description: "Set auditor permissions and add users to the Auditor role so they can view historical sessions for chosen users and resources."
sidebar_position: 30
---

# Add Auditor Permissions and Auditors Window

Auditors are granted the ability to view recordings of historical sessions by users or resources. There are also custom auditor roles. One way to organize might be to make the built-in auditor role capable of viewing historical sessions of all users and all resources. Then create custom auditor roles to enable viewing of only certain users and/or resources.

![Add Auditors Window](/images/privilegesecure/26.03/accessmanagement/admin/policy/window/usersgroups/addauditors.png)

The window has the following features:

- **Description** — Optional field to describe the auditor role.
- **Permission Assignment** — Add or remove permissions.

The Users tab is where users to be monitored by the Auditor are added.

All users can be selected by the checkbox. If that is selected, then the user list is grayed-out

- **Checkbox** — Check to select one or more items
- **Type** — Icon indicates the type of object
- **Name** — Displays the name of the account
- **User Name** — Displays the sAMAccountName for the account
- **Email** — Displays the associated email address, if available

The Resources tab selects the resources whose live sessions and recordings the auditor can access.

All resources can be selected by the checkbox. If that is selected, then the resource list is grayed-out

- **Checkbox** — Check to select one or more items
- **Type** — Icon indicates the type of object (resource, resource group, or secret vault)
- **Name** — Displays the name of the resource
- **Operating System** — Displays the operating system of the resource

## Assign Auditor role to users

To grant users the Auditor role.

1. Click **Add Role User** to open the **Add Role Users** window.
2. Select the checkbox for the account you want from the **Available Accounts** table.
3. Click **Add** to add the account to the role.

The selected users are now members of the Auditor role.
