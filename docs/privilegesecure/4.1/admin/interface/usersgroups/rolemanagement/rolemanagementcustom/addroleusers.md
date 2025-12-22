---
title: "Add Role Users Window"
description: "Add Role Users Window"
sidebar_position: 50
---

# Add Role Users Window

The Add Role Users window provides a list of users that have been onboarded. Users are onboarded in
the
[Users & Groups Page](/docs/privilegesecure/4.1/admin/interface/usersgroups/usersgroups.md).
It allows users to be added to a custom role.

![Add Role Users Window](/images/privilegesecure/4.1/accessmanagement/admin/policy/window/usersgroups/addroleusers.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion:User, Group, Application,
  Collection, and Local User
- Available Accounts — Shows all available users, groups, applications, collections, and local users
  that have been onboarded
- Accounts to Add — Shows selected users, groups, applications, collections, and local users
- Add button — Adds modifications and closes window
- Cancel — Closes the window

The tables in both sections have the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the account
- User Name — Displays the sAMAccountName for the account
- User Principal Name — Displays the UPN value for the account
- Email — Displays the associated email address, if available
- Last Login — Date timestamp for the last time the user logged into the application

## Add Role Users

Follow the steps below to add a role user to a custom role.

**Step 1 –** Navigate to the **Users & Groups** > **Role Management** page.

**Step 2 –** In the Role list, click the name of the desired custom role to open the
[Custom Role Details Page](/docs/privilegesecure/4.1/admin/interface/usersgroups/rolemanagement/rolemanagementcustom/rolemanagementcustom.md).

**Step 3 –** Click the **Add Role Users** button.

**Step 4 –** Select the checkbox for the desired users in the Available Role Users table.

**Step 5 –** Click Add to add one or more user roles.

**Step 6 –** Click Add to add the role user(s) to the role.

The selected users are now granted the permissions associated with the selected custom role.
