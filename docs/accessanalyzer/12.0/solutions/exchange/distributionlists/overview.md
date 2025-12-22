---
title: "6. Distribution Lists Job Group"
description: "6. Distribution Lists Job Group"
sidebar_position: 70
---

# 6. Distribution Lists Job Group

The 6. Distribution Lists job group lists the direct and effective membership to distribution lists,
in addition to providing context around potentially stale distribution lists.

![6. Distribution Lists Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/distributionlists/jobstree.webp)

The following comprise the 6. Distribution Lists job group:

:::note
These jobs are compatible with the Office 365 environment.
:::


- [Effective Membership > EX_GroupExpansion Job](/docs/accessanalyzer/12.0/solutions/exchange/distributionlists/ex_groupexpansion.md) – Expands the direct
  membership of distribution groups in the environment
- [Membership Analysis Job Group](/docs/accessanalyzer/12.0/solutions/exchange/distributionlists/membershipanalysis/overview.md) – Provides visibility into toxic
  conditions contained with the environment, such as circular nesting, large groups, empty groups,
  nesting, and potentially stale groups
- [EX_DLCleanup Job](/docs/accessanalyzer/12.0/solutions/exchange/distributionlists/ex_dlcleanup.md) – Identifies potentially stale distribution groups based on
  the last domain logon of the members, membership counts, and last time mail was sent to the
  distribution lists. These DLs should be reviewed and cleaned up.
