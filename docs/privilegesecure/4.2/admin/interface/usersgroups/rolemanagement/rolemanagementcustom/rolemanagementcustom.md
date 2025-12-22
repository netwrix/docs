---
title: "Custom Role Details Page"
description: "Custom Role Details Page"
sidebar_position: 30
---

# Custom Role Details Page

The Role Management page is accessible from the Navigation pane under Users & Group. It provides
details on all available roles for Privilege Secure users. There are default roles, and custom roles
can be created.

![Custome Role Page](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/customrolepage.webp)

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
- Add Role User — Opens Add Role Users window. See the
  [Add Role Users Window](/docs/privilegesecure/4.2/admin/interface/usersgroups/rolemanagement/rolemanagementcustom/addroleusers.md) topic for additional
  information.
- Remove — Removes console access from the selected account. This button is specific to the table in
  the Users role assignment section at the bottom.
- Refresh — Reload the information displayed. This button is specific to the table in the Users
  section at the bottom.

The Users role assignment section table has the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the account. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for additional
  information.
- User Name — Displays the sAMAccountName for the account
- User Principal Name — Displays the UPN value for the account
- Email — Displays the associated email address, if available
- Last Login — Date timestamp for the last time the user logged into the application

The table columns can be resized and sorted in ascending or descending order.

## Permission Assignment

Each permission gives specific rights to users with the selected role. Permissions on the left are
not associated with the role. Permissions on the right are assigned to the selected role.

![Custom Role Permission Assignment](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/customerolepermissionassignment.webp)

Available permissions include:

- Modify Name — Grants permission to modify the names of Policies
- Modify Description — Grants permission to modify the descriptions of Policies
- Modify Connection Profile — Grants permission to modify connection profiles of Policies
- Modify Activities — Grants permission to modify activities. Selecting this option enables the
  Activities tab to scope the permission to specific Activities.
- Modify Users — Grants permission to modify associated users. Selecting this option enables the
  Users tab to scope the permission to specific Users.
- Modify Resources — Grants permission to modify associated resources. Selecting this option enables
  the Resources tab to scope the permission to specific Resources.

All custom roles, no matter what permissions are granted, can be scoped to specific policies. See
the [Change Permission Assignment](/docs/privilegesecure/4.2/admin/interface/usersgroups/rolemanagement/rolemanagementcustom/changepermissions.md) topic for additional
information.

## Policy Tab

The Policy tab for a custom role has the following features:

![Policies Tab for Custom Roles](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/customrolepoliciestab.webp)

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results. This search is specific to the table in the
  Policies tab.
- Add Policies — Opens the Add Policies window. See the
  [Add Policies Window](/docs/privilegesecure/4.2/admin/interface/usersgroups/rolemanagement/rolemanagementcustom/addpolicies.md) topic for additional information.
- Remove — Removes console access from the selected account.This button is specific to the table in
  the Policies tab.
- Refresh — Reload the information displayed. This button is specific to the table in the Policies
  tab.

The Policies tab table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the policy. Click the link to view additional details. See the
  [Access Policy Page](/docs/privilegesecure/4.2/admin/interface/accesspolicy/accesspolicy.md) topic for additional information.
- Description — Description of the policy

## Users Tab

The Users tab for a custom role has the following features:

![Users Tab for Custom Role](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/customroleuserstab.webp)

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results. This search is specific to the table in the
  Users tab.
- Type — Provides options to filter results based on a chosen criterion: User, Group, Application,
  Collection, and Local User
- Add Users— Opens the Add Users and Groups window. See the
  [Add Users & Groups Window](/docs/privilegesecure/4.2/admin/interface/usersgroups/add/addusersandgroups.md) topic for additional
  information.
- Remove — Removes console access from the selected account.This button is specific to the table in
  the Policies tab.
- Refresh — Reload the information displayed. This button is specific to the table in the Policies
  tab.

The Users tab table has the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the account. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for additional
  information.
- User Name — Displays the sAMAccountName for the account
- User Principal Name — Displays the UPN value for the account
- Email — Displays the associated email address, if available
- Last Login — Date timestamp for the last time the user logged into the application

## Activities Tab

The Activities tab for a custom role has the following features:

![Activities Tab for Custom Roles](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/customroleactivitiestab.webp)

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results. This search is specific to the table in the
  Activities tab.
- Type — Provides options to filter results based on a chosen criterion: Activity or Activity Group
- Add Activities — Opens the Add Activities and Activity Groups window. See the
  [Add Activities and Groups Window](/docs/privilegesecure/4.2/admin/interface/usersgroups/rolemanagement/rolemanagementcustom/addactivitiesandgroups.md) topic for
  additional information.
- Remove — Removes console access from the selected account.This button is specific to the table in
  the Policies tab.
- Refresh — Reload the information displayed. This button is specific to the table in the Policies
  tab.

The Activities tab table has the following columns:

- Checkbox — Check to select one or more items
- Type — Classification of the activity
- Name — Displays the name of the activity. Click the link to view additional details. See the
  [Activities Page](/docs/privilegesecure/4.2/admin/interface/activities/activities.md) topic for additional information.

## Resources Tab

The Resources tab for a custom role has the following features:

![Resources Tab for Custom Role](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/customroleresourcestab.webp)

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results. This search is specific to the table in the
  Resources tab.
- Type — Provides options to filter results based on a chosen criterion: Resource or Resource Group
- Add Resources — Opens the Add Resources and Groups window. See the
  [Add Resources and Groups Window](/docs/privilegesecure/4.2/admin/interface/usersgroups/rolemanagement/rolemanagementcustom/addresourcesandgroups.md) topic for
  additional information.
- Remove — Removes console access from the selected account.This button is specific to the table in
  the Policies tab.
- Refresh — Reload the information displayed. This button is specific to the table in the Policies
  tab.

The Resources tab table has the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the resource. See the [Resources Page](/docs/privilegesecure/4.2/admin/interface/resources/resources.md) topic for
  additional information.
- Operating System — Displays the operating system of the resource

## Role Users

Role Users is located at the bottom of the Custom Role details page. This will be the user that has
access to the Custom Role.

![Role Users for Custom Role](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/customroleusers.webp)

The Role Users has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results. This search is specific to the table in the
  Users tab.
- Type — Provides options to filter results based on a chosen criterion: User, Group, Application,
  Collection, and Local User
- Add Role Users— Opens the Add Users and Groups window. See the
  [Add Users & Groups Window](/docs/privilegesecure/4.2/admin/interface/usersgroups/add/addusersandgroups.md) topic for additional
  information.
- Remove — Removes console access from the selected account. This button is specific to the table in
  the Policies tab.
- Refresh — Reload the information displayed. This button is specific to the table in the Policies
  tab.

The Role Users table has the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the account. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for additional
  information.
- User Name — Displays the sAMAccountName for the account
- User Principal Name — Displays the UPN value for the account
- Email — Displays the associated email address, if available
- Last Login — Date timestamp for the last time the user logged into the application
