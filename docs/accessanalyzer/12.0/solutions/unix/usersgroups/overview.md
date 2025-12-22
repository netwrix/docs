---
title: "1.Users and Groups Job Group"
description: "1.Users and Groups Job Group"
sidebar_position: 20
---

# 1.Users and Groups Job Group

The jobs within the 1.Users and Groups job group provide visibility into users and groups, helping
to pinpoint potential areas of administrative concern.

![1.Users and Groups Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/unix/usersgroups/jobstree.webp)

The jobs in the 1.Users and Groups job group are:

- [0.Collection > UX_UsersAndGroups Job](/docs/accessanalyzer/12.0/solutions/unix/usersgroups/ux_usersandgroups.md) – Collects user and group related
  information from /etc/shadow and their equivalents in order to provide details on user and group
  conditions to help pinpoint areas of administrative concerns
- [UX_DuplicateGroups Job](/docs/accessanalyzer/12.0/solutions/unix/usersgroups/ux_duplicategroups.md) – This job identifies duplicate groups within the
  audited Unix or Linux environment. Duplicate groups contain the same group membership as one
  another and are suitable candidates for cleanup.
- [UX_EmptyGroups Job](/docs/accessanalyzer/12.0/solutions/unix/usersgroups/ux_emptygroups.md) – This job identifies empty groups found within the
  audited Unix or Linux environment. These are suitable candidates for consolidation or cleanup.
- [UX_LargeGroups Job](/docs/accessanalyzer/12.0/solutions/unix/usersgroups/ux_largegroups.md) – This job identifies groups with large member counts.
  These types of groups may cause administrative overhead and burden in being able to easily
  understand who is getting access to resources, or how much access is being granted to resources
  through these groups.
- [UX_LocalGroups Job](/docs/accessanalyzer/12.0/solutions/unix/usersgroups/ux_localgroups.md) – This job provides an overview of all local groups within
  the audited Unix and Linux environments
- [UX_LocalUsers Job](/docs/accessanalyzer/12.0/solutions/unix/usersgroups/ux_localusers.md) – This job provides an overview of all local users within
  the audited Unix and Linux environments
- [UX_PasswordSettings Job](/docs/accessanalyzer/12.0/solutions/unix/usersgroups/ux_passwordsettings.md) – This job provides visibility into user
  passwords and system password configurations within audited Unix and Linux environments
