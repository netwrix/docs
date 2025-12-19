---
title: "Box Solution"
description: "Box Solution"
sidebar_position: 80
---

# Box Solution

The Box solution set contains jobs to provide visibility into Box access rights, policies,
configurations, activities, and more, ensuring you never lose sight or control of your critical
assets residing in Box.

**Supported Platforms**

- Box for Business

**Requirements, Permissions, and Ports**

See the
[Target Box Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/box/target.md)
topic for additional information.

**Location**

The Box Solution requires a special Enterprise Auditor license. It can be installed from the Instant
Job Wizard. Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** >
**Box**.

![Box Solution in the Jobs Tree](/images/accessanalyzer/11.6/solutions/box/jobstree.webp)

The 0.Collection Job Group collects the data. The other job groups run analysis on the collected
data and generate reports.

## Jobs

The Box solution contains jobs to highlight access, analyze content, and expand group membership in
an organization's Box environment.

![Box Solution Overview page](/images/accessanalyzer/11.6/solutions/box/overviewpage.webp)

The Box Solution has the following job groups and jobs:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/box/collection/overview.md)
  – Collects the data which will be further analyzed in order to provide details on Box access
  rights, policies, configurations, activities, and content
- [1.Activity Job Group](/docs/accessanalyzer/11.6/solutions/box/activity/overview.md)
  – Identifies long term trends of activity providing insight into user activity, usage statistics,
  and suspicious behavior by analyzing enterprise events within the Box environment
- [2.Content Job Group](/docs/accessanalyzer/11.6/solutions/box/content/overview.md)
  – Analyzes and summarizes the content of the Box environment, highlighting users with the most
  content as well as what type of content exists
- [Box_Access Job](/docs/accessanalyzer/11.6/solutions/box/box_access.md)
  – Analyzes access granted to users and groups in an organization's Box environment in order to
  report on effective access rights, file-level permissions, and inactive access rights that can be
  revoked
- [Box_GroupMembership Job](/docs/accessanalyzer/11.6/solutions/box/box_groupmembership.md)
  – Expands group membership in an organization's Box environment
