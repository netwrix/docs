---
title: "DSAR Roles"
description: "DSAR Roles"
sidebar_position: 10
---

# DSAR Roles

To keep the DSAR request process secure, Netwrix suggests configuring role-based access. Delegating
control ensures that only appropriate users can modify DSAR configuration or view data, based on
your company policies and the user's job responsibilities.

- DSAR User – basic user role, which will allow access to the tool itself, and allow search requests
  to be run. The only requests that this user will be able to view are those submitted by the user
  themselves (i.e. they cannot view searches submitted by other users). This role does not have
  access to any system settings as well as to any of the sensitive data identified, including
  filenames/locations.
- DSAR Manager – has all the permissions of the DSAR User role, plus the ability to see and
  pause/cancel searches submitted by other users.
- Super User – has all the permissions of the DSAR Manager role, with the addition of being able to
  see and amend the DSAR settings (user management, output path, batch run-time).

DSAR roles are described briefly in the table below:

| Role         | Query Creation |            | Query Management |              |        | Output |     | Administrative area |
| ------------ | -------------- | ---------- | ---------------- | ------------ | ------ | ------ | --- | ------------------- |
| Create       | Cancel         | View Audit | View Details     | View Results | Export | Reject |     |                     |
| DSAR User    | Own            | Own        | –                | Own          | –      | –      | –   | –                   |
| DSAR Manager | Own            | +          | +                | +            | +      | +      | +   | –                   |
| Super User   | +              | +          | +                | +            | +      | +      | +   | +\*                 |

\* Administrative area includes user maintenance, batch maintenance, and an option to ‘Run Now’ –
which runs the queued batch.

DSAR Roles can be configured under Users → Permissions Management. For more information on how to
configure roles, refer to
[Permission Management](/docs/dataclassification/5.6.2/systemconfigurationoverview/users/user_management.md#permission-management)
section.
