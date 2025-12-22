---
title: "AWS_AccessKeys Job"
description: "AWS_AccessKeys Job"
sidebar_position: 10
---

# AWS_AccessKeys Job

The AWS_AccessKeys job provides details on the last time an access key was rotated or used,
highlighting keys that were last rotated over a year ago.

## Analysis Tasks for the AWS_AccessKeys Job

Navigate to the **AWS** > **2.Users** > **AWS_AccessKeys** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_AccessKeys Job](/images/accessanalyzer/11.6/solutions/aws/users/accesskeysanalysis.webp)

The following analysis tasks are selected by default:

- Access Keys – Analyzes access key rotation age and last use. Creates the AWS_AccessKey_Details
  table accessible under the job’s Results node.
- High Risk Access Keys – Highlights high risk access keys. Creates the AWS_AccessKey_HighRisk table
  accessible under the job’s Results node.
- Access Keys summary – Summarizes access key rotation by age. Creates the AWS_AccessKey_Summary
  table accessible under the job’s Results node.

## Report for the AWS_AccessKeys Job

In addition to the tables and views created by the analysis task, the AWS_AccessKeys job produces
the following preconfigured report:

| Report      | Description                                                                                                                                 | Default Tags | Report Element                                                                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Access Keys | This report identifies user accounts which have not rotated their AWS IAM Access Keys for an extended amount of time or have never used it. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays access key age by account</li><li>Table – Shows high risk access keys</li><li>Table – Provides details on access keys</li></ul> |
