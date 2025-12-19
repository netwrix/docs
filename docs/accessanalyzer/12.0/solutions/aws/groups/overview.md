---
title: "3.Groups Job Group"
description: "3.Groups Job Group"
sidebar_position: 50
---

# 3.Groups Job Group

The 3.Groups job group provides details on AWS IAM group membership, orphaned groups (those with no
policy assigned to them), sensitive security group membership, and stale groups.

![3.Groups Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/aws/groups/jobstree.webp)

The 3.Groups job group is comprised of:

- [AWS_GroupMembers Job](/docs/accessanalyzer/12.0/solutions/aws/groups/aws_groupmembers.md) – Provides details about group members and the
  policies assigned to those groups
- [AWS_NoPolicyGroups Job](/docs/accessanalyzer/12.0/solutions/aws/groups/aws_nopolicygroups.md) – Provides details on groups that have no policies
  assigned to them
- [AWS_StaleGroups Job](/docs/accessanalyzer/12.0/solutions/aws/groups/aws_stalegroups.md) – Highlights groups that have members that are
  considered stale
