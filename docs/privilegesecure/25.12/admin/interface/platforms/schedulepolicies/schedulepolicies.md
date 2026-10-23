---
title: "Schedule Policies Page"
description: "Review the configured schedule policies, see where schedules apply, and find the actions for adding, editing, and deleting them."
sidebar_position: 40
---

# Schedule Policies Page

The Schedule Policies page is accessible from the Navigation pane under Policies > Platforms. It
shows configured schedule policies.

You can apply schedules to the following:

- **Platforms** — Configure schedules used by resources on a given platform type. See the
  [Platforms Page](/docs/privilegesecure/25.12/admin/interface/platforms/overview.md) topic for additional information.
- **Protection Policy** — See the [Protection Policies Page](/docs/privilegesecure/25.12/admin/interface/protectionpolicies/protectionpolicies.md) topic for additional
  information.
- **Change Policy (credential rotation)** — How often the password of a managed account is changed. See
  the [Credentials Dashboard](/docs/privilegesecure/25.12/admin/dashboard/credentials.md) topic for additional information on
  managed accounts.
- **Host scan** — Scan a host resource for local users, groups, windows services, and scheduled tasks
- **Verification** — Check that the passwords for managed accounts match the credentials set by
  Privilege Secure

![Schedule Policies Page](/images/privilegesecure/25.12/accessmanagement/admin/policy/page/page_3.webp)

The pane on the left side of the page displays a list of the configured schedule policies. This pane
has the following features:

- **Search** — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- **Green + button** — Create a new schedule policy. See the
  [Add Schedule Policy](/docs/privilegesecure/25.12/admin/interface/platforms/schedulepolicies/schedulepolicy.md) topic for additional information.
- **Trashcan icon** — Deletes the schedule policy. The icon appears when you hover over the policy. A
  confirmation window displays.

:::note
You can't delete the default password policy.
:::

The selected schedule policy details display in the main pane:

- **Name** — Displays the schedule recurrence information
- **Edit icon** — Click the icon to edit the selected schedule policy. See the
  [Edit Schedule Policy](/docs/privilegesecure/25.12/admin/interface/platforms/schedulepolicies/schedulepolicy_1.md) topic for additional information.
