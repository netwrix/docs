---
title: "Box_GroupMembership Job"
description: "Box_GroupMembership Job"
sidebar_position: 60
---

# Box_GroupMembership Job

The Box_GroupMembership Job provides visibility into group membership within an organization's Box
environment.

## Analysis Tasks for the Box_GroupMembership Job

Navigate to **Box** > **Box_GroupMembership** > **Configure** node and select **Analysis** to view
analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_GroupMembership Job](/images/accessanalyzer/12.0/solutions/box/groupmembershipanalysis.webp)

The following analysis task is selected by default:

- Summarize Group Membership – Creates the Box_GroupMembership_Details table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the Box_Content Job produces the following
pre-configured report.

| Report                                  | Description                                                                                                | Default Tags | Report Elements                                                                                                                                                                                                         |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Membership (Box Group Membership) | This report summarizes Box group membership and lists all group membership across the audited environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top groups by member count</li><li>Table – Provides summary of group membership</li><li>Table – Provides details on group membership</li></ul> |
