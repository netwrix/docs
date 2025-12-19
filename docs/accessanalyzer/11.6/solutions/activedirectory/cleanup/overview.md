---
title: "Cleanup Job Group"
description: "Cleanup Job Group"
sidebar_position: 70
---

# Cleanup Job Group

The **Active Directory** > **Cleanup** Job Group identifies potential stale and unused users,
computers, and groups as well as issues with group membership. Remediation workflows are included to
deprovision unnecessary objects.

:::warning
Apply changes only to intended target Active Directory objects, and ensure only the
changes required are enabled. Enabling and executing action modules without consideration can
negatively impact Active Directory.
:::


:::info
Run the actions in a test environment before making changes to a production
environment.
:::


![Cleanup Job Group Overview page](/images/accessanalyzer/11.6/solutions/activedirectory/cleanup/overviewpage.webp)

The job groups in the Cleanup Job Group are:

- [1.Groups Job Group](/docs/accessanalyzer/11.6/solutions/activedirectory/cleanup/groups/overview.md)
  – Provides an automated workflow to safely deprovision groups, as well as the ability to stamp
  security groups with what resources they are given access to
- [2.Users Job Group](/docs/accessanalyzer/11.6/solutions/activedirectory/cleanup/users/overview.md)
  – Provides an automated workflow to deprovision stale and unused user accounts
- [3.Computers Job Group](/docs/accessanalyzer/11.6/solutions/activedirectory/cleanup/computers/overview.md)
  – Provides an automated workflow to deprovision stale computer accounts
- [AD_CleanupProgress Job](/docs/accessanalyzer/11.6/solutions/activedirectory/cleanup/ad_cleanupprogress.md)
  – Tracks Active Directory computer, group, and user exceptions over time. This information can be
  used to provide a high-level picture of an organization's Active Directory cleanup effort.
