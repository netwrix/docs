---
title: "AWS_StaleUsers Job"
description: "AWS_StaleUsers Job"
sidebar_position: 40
---

# AWS_StaleUsers Job

The AWS_StaleUsers job provides details on the last time each user logged in or their access key was
used, highlighting those over specified number of days (default 60) or that have never logged in.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The AWS_StaleUsers job has the following configurable parameter:

- Number of days before considering a user stale

See the
[Customizable Analysis Tasks for the AWS_StaleUsers Job](#customizable-analysis-tasks-for-the-aws_staleusers-job)
topic for additional information.

## Analysis Tasks for the AWS_StaleUsers Job

Navigate to the **AWS** > **2.Users** > **AWS_StaleUsers** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for
this job. Only modify the analysis tasks listed in the customizable analysis tasks section.
:::


![Analysis Tasks for the AWS_StaleUsers Job](/images/accessanalyzer/12.0/solutions/aws/users/staleusersanalysis.webp)

The following analysis tasks are selected by default:

- Stale Users – Identifies user accounts that have not been logged in to in the last 60 days.
  Creates the AWS_StaleUser_Details table accessible under the job’s Results node.

    - The number of days can be customized from the default value of 60. See the
      [Customizable Analysis Tasks for the AWS_StaleUsers Job](#customizable-analysis-tasks-for-the-aws_staleusers-job)
      topic for additional information.

- Stale User Summary – Summarizes stale users in AWS. Creates the AWS_StaleUser_Summary table
  accessible under the job’s Results node.

### Customizable Analysis Tasks for the AWS_StaleUsers Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates                                |
| ------------- | --------------------------- | ------------- | ---------------------------------------------- |
| Stale Users   | @StaleThreshold             | 60            | Number of days before considering a user stale |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for instructions on how to modify parameters.

## Report for the AWS_StaleUsers Job

In addition to the tables and views created by the analysis task, the AWS_StaleUsers job produces
the following preconfigured report:

| Report      | Description                                                                                                                                                                                                                               | Default Tags | Report Element                                                                                                                                                            |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Users | This report identifies user accounts which have not logged into AWS for an extended amount of time or have never logged in. A user account is considered stale if the last logon is over 60 days ago or the password has never been used. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays stale users by account</li><li>Table – Provides details on stale users</li></ul> |
