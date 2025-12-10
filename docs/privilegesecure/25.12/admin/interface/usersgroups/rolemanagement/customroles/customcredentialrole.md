---
title: "Custom Credential Role"
description: "Custom Credential Role"
sidebar_position: 60
---

# Custom Credential Role Details Page

The Role Management page is accessible from the Navigation pane under Users & Group. It provides
details on all available roles for Privilege Secure users. Here we discuss the custom credential role. This role enables control over managed account credential policy and access.

![Custome Role Page](/images/privilegesecure/25.12/accessmanagement/admin/policy/page/details/customcredentialsrole.png)

When a custom role is selected, the selected role details display at the top of the main pane with
the following features:

- Name — Name of the access policy
- Description — Description of the policy
- Permission Assignment section — Use this section to assign permissions for the custom role. See
  the Permission Assignment topic for additional information.
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results. This search is specific to the table in the
  Users section at the bottom.
- Filter — Provides options to filter results based on a chosen criterion: User, Group, Application,
  Collection, and Local User
- Add Role User — Opens Add Role Users window. 
- Remove — Removes console access from the selected account. This button is specific to the table in
  the Users role assignment section at the bottom.
- Refresh — Reload the information displayed. This button is specific to the table in the Users
  section at the bottom.


The Credentials assignment section table has the following columns:

- Search — Searches the table or list for matches to the search string. When matches are found, the table or list is filtered to the matching results. This search is specific to the table in the credentials tab.
- Type — Provides options to filter results based on a chosen criterion.
- Remove — Removes console access from the selected account.This button is specific to the table in the Policies tab.
- Refresh — Reload the information displayed. This button is specific to the table in the credentials tab.

The Credential tab table has the following columns:

- Type — Icon indicates the type of object
- Name — Displays the name of the account. 
- Resource - Displays the resource associtated with the credential if applicable.

The table columns can be resized and sorted in ascending or descending order.


## Permission Assignment

Each permission gives specific rights to users with the selected role. Permissions on the left are
not associated with the role. Permissions on the right are assigned to the selected role.

Available permissions include:

- Manage - The ability to put an account and credentials under the control of NPS
- Unmanage - The ability to put an account and credentials under the control of NPS
- View Passowrd - Control the ability of the user to see the credentials
- Schedule Rotation - Determine when the credential is rotated
- Verify - Determine if the credential in the vault still works.
- Rotate Services - Determine if the user can trigger credential rotation

## Role Users

Role Users is located at the bottom of the Custom Role details page. This will be the user that has
access to the Custom Role.

The Role Users has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results. This search is specific to the table in the
  Users tab.
- Type — Provides options to filter results based on a chosen criterion: User, Group, Application,
  Collection, and Local User
- Add Role Users— Opens the Add Users and Groups window. Add this role to users here.
- Remove — Removes console access from the selected account. This button is specific to the table in
  the Policies tab.
- Refresh — Reload the information displayed. This button is specific to the table in the Policies
  tab.

The Role Users table has the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the account. 
- User Name — Displays the sAMAccountName for the account
- User Principal Name — Displays the UPN value for the account
- Email — Displays the associated email address, if available
- Last Login — Date timestamp for the last time the user logged into the application