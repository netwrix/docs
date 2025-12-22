---
title: "Schedule Policies Page"
description: "Schedule Policies Page"
sidebar_position: 10
---

# Schedule Policies Page

The Schedule Policies page is accessible from the Navigation pane under Policies > Platforms. It
shows configured schedule policies.

Schedules can be applied:

- Platforms — Configure schedules used by resources on a given platform type. See the
  [Platforms Page](/docs/privilegesecure/4.1/admin/interface/platforms/overview.md)
  topic for additional information.
- Protection Policy — See the
  [Protection Policies Page](/docs/privilegesecure/4.1/admin/interface/protectionpolicies/protectionpolicies.md)
  topic for additional information.
- Change Policy (credential rotation) — How often the password of a managed account is changed. See
  the
  [Credentials Dashboard](/docs/privilegesecure/4.1/admin/dashboard/credentials.md)
  topic for additional information on managed accounts.
- Host scan — Scan a host resources for local users, groups, windows services and scheduled tasks
- Verification — Check that the passwords for managed accounts match the credentials set by
  Privilege Secure

![Schedule Policies Page](/images/privilegesecure/4.1/accessmanagement/admin/policy/page/page_3.webp)

The pane on the left side of the page displays a list of the configured schedule policies. This pane
has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Green + button — Create a new schedule policy. See the
  [Add Schedule Policy](/docs/privilegesecure/4.1/admin/interface/platforms/schedulepolicies/schedulepolicy.md)
  topic for additional information.
- Trashcan icon — Deletes the schedule policy. Icon appears when profile is hovered over. A
  confirmation window will display.

:::note
The default password policy cannot be deleted.
:::


The selected schedule policy details display in the main pane:

- Name — Displays the schedule recurrence information
- Edit icon — Click the icon to edit the selected schedule policy. See the
  [Edit Schedule Policy](/docs/privilegesecure/4.1/admin/interface/platforms/schedulepolicies/schedulepolicy_1.md)
  topic for additional information.
