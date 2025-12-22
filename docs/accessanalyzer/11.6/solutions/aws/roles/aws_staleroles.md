---
title: "AWS_StaleRoles Job"
description: "AWS_StaleRoles Job"
sidebar_position: 20
---

# AWS_StaleRoles Job

The AWS_StaleRoles job provides details on roles that are considered stale. Highlighting roles that
have not been used in more than 60 days and those that have never been used. The 60 day parameter is
configurable.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AWS_StaleRoles job has the following configurable parameter:

- Days without login to consider an account stale

See the
[Customizable Analysis Tasks for the AWS_StaleRoles Job](#customizable-analysis-tasks-for-the-aws_staleroles-job)
topic for additional information.

## Analysis Tasks for the AWS_StaleRoles Job

Navigate to the **AWS** > **4.Roles** > **AWS_StaleRoles** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for
this job. Only modify the analysis tasks listed in the customizable analysis tasks section.
:::


![Analysis Tasks for the AWS_StaleRoles Job](/images/accessanalyzer/11.6/solutions/aws/roles/stalerolesanalysis.webp)

The following analysis tasks are selected by default:

- Stale Role Details – Highlights the roles in AWS that are considered stale. Creates the
  AWS_StaleRole_Details table accessible under the job’s Results node.

    - The number of days without login to consider an account stale can be customized. By default it
      is set to 60. See the
      [Customizable Analysis Tasks for the AWS_StaleRoles Job](#customizable-analysis-tasks-for-the-aws_staleroles-job)
      topic for additional information.

- Stale Role Summary – Summarizes stale roles by AWS Account. Creates the AWS_StaleRole_Summary
  table accessible under the job’s Results node.

### Customizable Analysis Tasks for the AWS_StaleRoles Job

The default values for parameters that can be customized are:

| Analysis Task      | Customizable Parameter Name | Default Value | Value Indicates                                  |
| ------------------ | --------------------------- | ------------- | ------------------------------------------------ |
| Stale Role Details | @StaleThreshold             | 60            | Days without login to consider an account stale. |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for instructions on how to modify parameters.

## Report for the AWS_StaleRoles Job

In addition to the tables and views created by the analysis task, the AWS_StaleRoles job produces
the following preconfigured report:

| Report      | Description                                                | Default Tags | Report Element                                                                                                                                                                                                              |
| ----------- | ---------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Roles | This report identifies stale roles in the AWS environment. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays top stale roles by account</li><li>Table – Shows stales roles by account</li><li>Table – Provides details on stale roles</li></ul> |
