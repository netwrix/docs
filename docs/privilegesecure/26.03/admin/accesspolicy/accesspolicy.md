---
title: "Access Policy"
description: "Access Policy"
sidebar_position: 10
---

# Access Policy

The Policy interface provides users with options for creating access policies, investigating
activity sessions, onboarding, and managing users, groups, resources, and credentials.

![Admin Policy Interface](/images/privilegesecure/26.03/accessmanagement/admin/policy/interface.png)

The Access Policies page is accessible from the Navigation pane under Policy. It shows the
configured access policies, which control which users can complete which activities on
which resources.

![Access Policy Page](/images/privilegesecure/26.03/accessmanagement/admin/policy/page/page.png)

The pane on the left side of the page displays a list of the configured access policies. This pane
has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
table or list is filtered to the matching results.
- Blue + button — Create a new access policy. See the [Add Access Policy](/docs/privilegesecure/26.03/admin/accesspolicy/addaccesspolicy.md)
topic for additional information.
- Trashcan icon — Deletes the access policy. Icon appears when policy is hovered over. A
confirmation window displays.

The selected access policy details display at the top of the main pane:

- Name — Displays the name of the policy
- Description — Description of the policy
- Type — Icon indicates the type of object: Resource Based or Credential Based
- Connection Profile — Displays the name of the connection profile associated to the access policy.
The green arrow opens the [Connection Profiles Page](/docs/privilegesecure/26.03/admin/accesspolicy/connectionprofiles/connectionprofiles.md) to add or edit
connection profiles.
- User icon — Shows extra group of users who can manage this access policy. The icon appears only if
a custom role is assigned to a policy. See the
[Custom Access Role Details Page](/docs/privilegesecure/26.03/admin/usersgroups/rolemanagement/customroles/customaccessrole.md) for additional information.

If any of these settings are modified, Save, and Cancel buttons display. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The tabs at the bottom of the main pane are for associating Users, Activities, Resources, and
Credentials to the access policy. The content within the tabs change based on the type of policy.
See the following topics for additional information:

- Resource Based Policy:

- Users Tab for Resource Based Access Policies
- [Activities Tab for Resource Based Access Policies](/docs/privilegesecure/26.03/admin/accesspolicy/resourcebasedpolicyt/resourcebasedpolicy.md)
- [Resources Tab for Resource Based Access Policies](/docs/privilegesecure/26.03/admin/accesspolicy/resourcebasedpolicyt/resourcebasedpolicy.md)

- Credential Based Policy: [Credential Based Access Policies](/docs/privilegesecure/26.03/admin/accesspolicy/credentials.md)
