---
title: "Changes Job Group"
description: "Changes Job Group"
sidebar_position: 30
---

# Changes Job Group

The Changes Job Group provides an audit trail for changes made to Computer, Group and User objects
within the environment.

![Changes Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/activedirectory/activity/changes/jobstree.webp)

The following Jobs make up the Changes Job Group:

:::info
Schedule these jobs to run with the 0.Collection job group.
:::


- [AD_ComputerModifications Job](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/changes/ad_computermodifications.md)
  – Reports on activity relating to changes made on computer objects
- [AD_GroupModifications Job](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/changes/ad_groupmodifications.md)
  – Reports on activity relating to changes made on a group objects and changes made to group
  membership
- [AD_UserModifications Job](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/changes/ad_usermodifications.md)
  – Reports on activity relating to changes made on user objects
