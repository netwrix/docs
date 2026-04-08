---
title: "Access Policy Page"
description: "Access Policy Page"
sidebar_position: 10
---

# Access Policy Page

The Access Policies page is accessible from the Navigation pane underPolicyPolicies. It shows the
configured access policies, which are used to control which users can complete which activities on
which resources.

![Access Policy Page](/images/privilegesecure/25.12/accessmanagement/admin/policy/page/page.png)

The pane on the left side of the page displays a list of the configured access policies. This pane
has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Blue + button — Create a new access policy. See the [Add Access Policy](/docs/privilegesecure/25.12/admin/interface/accesspolicy/addaccesspolicy.md)
  topic for additional information.
- Trashcan icon — Deletes the access policy. Icon appears when policy is hovered over. A
  confirmation window will display.

The selected access policy details display at the top of the main pane:

- Name — Displays the name of the policy
- Description — Description of the policy
- Type — Icon indicates the type of object: Resource Based or Credential Based
- Connection Profile — Displays the name of the connection profile associated to the access policy.
  The green arrow will open the [Connection Profiles Page](/docs/privilegesecure/25.12/admin/interface/accesspolicy/connectionprofiles/connectionprofiles.md) to add or edit
  connection profiles.
- User icon — Shows extra group of users who can manage this access policy. The icon appears only if
  a custom role has been assigned to a policy. See the
  [Custom Access Role Details Page](/docs/privilegesecure/25.12/admin/interface/usersgroups/rolemanagement/customroles/customaccessrole.md) for additional information.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The tabs at the bottom of the main pane are for associating Users, Activities, Resources, and
Credentials to the access policy. The content within the tabs change based on the type of policy.
See the following topics for additional information:

- Resource Based Policy:

    - Users Tab for Resource Based Access Policies
    - [Activities Tab for Resource Based Access Policies](/docs/privilegesecure/25.12/admin/interface/accesspolicy/resourcebasedpolicyt/activities/activities.md)
    - [Resources Tab for Resource Based Access Policies](/docs/privilegesecure/25.12/admin/interface/accesspolicy/resourcebasedpolicyt/resources/resources.md)

- Credential Based Policy: [Credential Based Access Policies](/docs/privilegesecure/25.12/admin/interface/accesspolicy/credentials.md)
