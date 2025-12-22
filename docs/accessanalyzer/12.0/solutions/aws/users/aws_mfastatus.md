---
title: "AWS_MFAStatus Job"
description: "AWS_MFAStatus Job"
sidebar_position: 20
---

# AWS_MFAStatus Job

The AWS_MFAStatus job provides details on each user's MFA status, highlighting users that have it
disabled.

## Analysis Tasks for the AWS_MFAStatus Job

Navigate to the **AWS** > **2.Users** > **AWS_MFAStatus** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_MFAStatus Job](/images/accessanalyzer/12.0/solutions/aws/users/mfastatusanalysis.webp)

The following analysis tasks are selected by default:

- MFAStatus – Checks user accounts in AWS for Multi-Factor Authentication. Creates the
  AWS_MFAStatus_Details table accessible under the job’s Results node.
- MFAStatus Summary – Summarizes AWS IAM Multi-Factor Authentication status by organisation. Creates
  the AWS_MFAStatus_Summary table accessible under the job’s Results node.

## Report for the AWS_MFAStatus Job

In addition to the tables and views created by the analysis task, the AWS_MFAStatus job produces the
following preconfigured report:

| Report     | Description                                            | Default Tags | Report Element                                                                                                                                                                        |
| ---------- | ------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MFA Status | This report identifies the MFA status of each AWS user | None         | This report is comprised of the following elements: <ul><li>Pie Chart – Displays MFA status</li><li>Table – Shows status by account</li><li>Table – Provides details on MFA</li></ul> |
