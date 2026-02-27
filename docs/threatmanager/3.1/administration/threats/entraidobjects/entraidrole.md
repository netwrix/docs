---
title: "Role Details Page"
description: "Role Details Page"
sidebar_position: 30
---

# Role Details Page

The Role Details page provides information about a role including its description and role
membership.

![Roles Page](/images/threatmanager/3.0/administration/threatdetails/roles.webp)

The top of the page displays a profile card which may contain the following information about the
role:

- Description
- Built-in
- Enabled
- Object ID
- Object Type
- Tenant

## Members Tab

The members tab displays two tables:

- Eligible Assignments – Lists the roles that the user is eligible for. An eligible assignment
  refers to a role assignment that a user or group can activate when needed but is not permanently
  active.
- Active Assignments – Lists roles that are currently active and usable to a user.

![Role Members Tab Active Assignement Page](/images/threatmanager/3.0/administration/threatdetails/rolesactiveassignments.webp)

Both tables have the following columns:

- Name – The display name of the member
- Type – The object type
- Scope – Defines the boundary within which the assigned role permissions are valid
- Inherited from – How the eligible assignment was inherited
- Assignment Type – How was the active role assignment assigned
- Start Time – When the member is eligible for the role
- End Time – When the role eligibility expires
