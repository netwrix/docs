---
title: "Permissions Job Group"
description: "Permissions Job Group"
sidebar_position: 40
---

# Permissions Job Group

The Permissions job group is comprised of data collection, analysis and reports that focus on access
granted to each mailbox in the environment including, Mailbox Rights, Active Directory Permissions,
Delegation, and Folder Permissions.

:::info
Schedule the Permissions job group to run weekly on Fridays at 6 PM.
:::


![Permissions Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/mailboxes/permissions/jobstree.webp)

The job groups and jobs in the Permissions job group are:

- [0. Collection Job Group](/docs/accessanalyzer/12.0/solutions/exchange/mailboxes/permissions/collection/overview.md) – Comprised of data collection and analysis that
  focus on access granted to each mailbox in the environment including: Mailbox Rights, Active
  Directory Permissions, Delegation, and Folder Permissions
- [EX_AdminGroups Job](/docs/accessanalyzer/12.0/solutions/exchange/mailboxes/permissions/ex_admingroups.md) – Provides visibility into the direct and effective
  membership of Exchange Administrative groups
- [EX_MailboxAccess Job](/docs/accessanalyzer/12.0/solutions/exchange/mailboxes/permissions/ex_mailboxaccess.md) – Provides visibility into access granted to each
  mailbox in the environment taking into consideration Mailbox Rights, Active Directory Permissions,
  Delegation, and Folder Permissions
