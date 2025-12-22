---
title: "AWS_GroupMembers Job"
description: "AWS_GroupMembers Job"
sidebar_position: 10
---

# AWS_GroupMembers Job

The AWS_GroupMembers job group provides details on AWS IAM group membership, orphaned groups (those
with no policy assigned to them), sensitive security group membership, and stale groups.

## Analysis Tasks for the AWS_GroupMembers Job

Navigate to the **AWS** > **3.Groups** > **AWS_GroupMembers** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_GroupMembers Job](/images/accessanalyzer/12.0/solutions/aws/groups/groupmembersanalysis.webp)

The following analysis tasks are selected by default:

- Group Membership – Identifies groups and their members. Creates the AWS_GroupMember_Details table
  accessible under the job’s Results node.
- Group Member Summary – Summarizes group member counts and number of policies applied to the
  groups. Creates the AWS_GroupMember_Summary table accessible under the job’s Results node.

## Report for the AWS_GroupMembers Job

In addition to the tables and views created by the analysis task, the AWS_GroupMembers job produces
the following preconfigured report:

| Report        | Description                                                                           | Default Tags | Report Element                                                                                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Members | This report identifies group members and summarizes policies applied to those groups. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays a summary of group members</li><li>Stacked Bar Chart – Displays a summary of group policies</li><li>Table – Provides details on groups</li></ul> |
