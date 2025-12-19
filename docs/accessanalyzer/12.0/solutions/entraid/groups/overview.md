---
title: "1.Groups Job Group"
description: "1.Groups Job Group"
sidebar_position: 20
---

# 1.Groups Job Group

The jobs in the 1.Groups group identify group conditions and areas of administrative concern within
Microsoft Entra ID, such as toxic group conditions or synchronization issues.

![1.Groups Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/entraid/groups/jobstree.webp)

The jobs in the 1.Groups Job Group are:

- [AAD_CircularNesting Job](/docs/accessanalyzer/12.0/solutions/entraid/groups/aad_circularnesting.md) – Identifies circularly-nested groups within
  Microsoft Entra ID which can pose administrative and operational challenges with identifying
  effective access to resources
- [AAD_DuplicateGroups Job](/docs/accessanalyzer/12.0/solutions/entraid/groups/aad_duplicategroups.md) – Identifies duplicate groups within Microsoft
  Entra ID. Duplicate groups contain the same group membership as one another and are suitable
  candidates for cleanup
- [AAD_EmptyGroups Job](/docs/accessanalyzer/12.0/solutions/entraid/groups/aad_emptygroups.md) – Identifies empty groups within Microsoft Entra ID
  which are suitable candidates for consolidation or cleanup
- [AAD_GroupDirSync Job](/docs/accessanalyzer/12.0/solutions/entraid/groups/aad_groupdirsync.md) – Summarizes on-premises Active Directory syncing in
  the audited Microsoft Entra ID environment
- [AAD_LargestGroups Job](/docs/accessanalyzer/12.0/solutions/entraid/groups/aad_largestgroups.md) – Identifies groups with large effective member
  counts. These types of groups may cause administrative overhead and burden in being able to easily
  understand who is getting access to resources, or how much access is being granted to resources
  through these groups.
- [AAD_NestedGroups Job](/docs/accessanalyzer/12.0/solutions/entraid/groups/aad_nestedgroups.md) – Identifies nested groups within Microsoft Entra ID
  and provides details such as the levels of nesting. While Microsoft Entra ID provides the ability
  to nest certain types of groups within other groups, Microsoft recommends nesting does not go
  beyond two levels in order to avoid difficulties in understanding effective membership and access.
- [AAD_ProbableOwners Job](/docs/accessanalyzer/12.0/solutions/entraid/groups/aad_probableowners.md) – Determines potential owners for Microsoft Entra
  ID Groups which can be used to perform automated membership reviews and enable self-service group
  management and membership requests
- [AAD_StaleGroups Job](/docs/accessanalyzer/12.0/solutions/entraid/groups/aad_stalegroups.md)– Identifies Microsoft Entra ID groups that contain
  potentially stale users. Users are considered stale if they have never logged onto the domain,
  have not logged onto the domain in the past 30 days, or are disabled. These group memberships
  should be reviewed and possibly removed.
