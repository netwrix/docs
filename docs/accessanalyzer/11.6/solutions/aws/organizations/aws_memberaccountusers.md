---
title: "AWS_MemberAccountUsers Job"
description: "AWS_MemberAccountUsers Job"
sidebar_position: 20
---

# AWS_MemberAccountUsers Job

The AWS_MemberAccountUsers job highlights users that are not located in the primary AWS Identity
Source, which is generally the Master AWS Account for the Organization.

## Analysis Tasks for the AWS_MemberAccountUsers Job

Navigate to the **AWS** > **1.Organizations** > **AWS_MemberAccountUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_MemberAccountUsers Job](/images/accessanalyzer/11.6/solutions/aws/organizations/memberaccountusersanalysis.webp)

The following analysis tasks are selected by default:

- Member Account User Details – Provides details on users that exist outside the master AWS account.
  Creates the AWS_MemberAccountUsers_Details table accessible under the job’s Results node.
- Member Account Users Summary – Summarizes AWS member account users by organization. Creates the
  AWS_MemberAccountUsers_Summary table accessible under the job’s Results node.

## Report for the AWS_MemberAccoutUsers Job

In addition to the tables and views created by the analysis task, the AWS_MemberAccountUsers job
produces the following preconfigured report:

| Report               | Description                                                                            | Default Tags | Report Element                                                                                                                                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Member Account Users | This report highlights user accounts that are not contained in the AWS Master Account. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays top member account users by org</li><li>Table – Shows member account users by Org</li><li>Table – Provides details on member account users</li></ul> |
