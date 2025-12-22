---
title: "SoD Clean Up"
description: "SoD Clean Up"
sidebar_position: 40
---

# SoD Clean Up

The new **SoD** > **SoD Clean Up** menu accesses the power of Saved Searches to enable easy,
efficient clean up of your roles. Many NetSuite accounts are littered with unused roles and role
assignments. Eliminating this clutter reduces the violations you encounter, and makes it easier to
see exactly what is going on in your accounts.

Platform Governance for NetSuite automatically removes employees from SoD Approval requests if one
of these conditions occur:

- NetSuite access is removed
- Applicable role(s) are removed
- Employee is In-activated

:::note
Netwrix recommends performing SoD testing and role clean up in a sandbox account. This lays the
groundwork for a smooth transition to production with minimal compliance incidents to review.
:::

Saved Searches are:

- **Employees with Standard Roles** identifies all employees assigned to standard roles.
- **Employees with Unused Logins** identifies any employees who have not logged in.
- **Employee Permission Changes** identifies all employee permission changes that have occurred.
- **Unused Roles - Not Assigned** identifies roles not assigned to any user.
- **Unused Roles - Assigned But Not In Use** identifies roles assigned to a user, but never used.
- **Role Assignments with No Login in Six Months** identifies assigned roles where a user has not
  logged in within the past six months.
- **Role Permission Change** identifies all role permission changes that have occurred.
- **Employees with Multiple Roles Detailed** identifies users with multiple roles and lists the
  roles. Multiple roles create conflicts. Users who require multiple roles for support or
  administration can be isolated in a sandbox using Platform Governance for NetSuite to keep the
  sandbox the same as production for troubleshooting and support.
- **Employees with Multiple Roles Summary** identifies users with multiple roles.
- **Current Global Permission** identifies users with global permissions, which can cause conflicts.
  Best practice is to not use global permissions on a long-term basis.
