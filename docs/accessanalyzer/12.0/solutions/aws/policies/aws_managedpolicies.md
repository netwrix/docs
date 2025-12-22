---
title: "AWS_ManagedPolicies Job"
description: "AWS_ManagedPolicies Job"
sidebar_position: 30
---

# AWS_ManagedPolicies Job

The AWS_ManagedPolicies job provides details on policies managed by Amazon in the AWS Organization.

## Analysis Tasks for the AWS_ManagedPolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_ManagedPolicies** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_ManagedPolicies Job](/images/accessanalyzer/12.0/solutions/aws/policies/managedpoliciesanalysis.webp)

The following analysis tasks are selected by default:

- Managed Policy Details – Identifies managed policies from AWS and if they are assigned to a user
  or group. Creates the AWS_ManagedPolicy_Details table accessible under the job’s Results node.
- Managed Policy Usage Summary – Summarizes the managed policy usage by AWS Org. Creates the
  AWS_ManagedPolicy_Summary table accessible under the job’s Results node.

## Report for the AWS_ManagedPolicies Job

In addition to the tables and views created by the analysis task, the AWS_Accounts job produces the
following preconfigured report:

| Report               | Description                                                | Default Tags | Report Element                                                                                                                                                                                                                                    |
| -------------------- | ---------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Managed Policies | This report analyzes AWS Managed Policies and their usage. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays AWS managed policies by account</li><li>Table – Shows AWS managed policies by account</li><li>Table – Provides details on AWS managed policies</li></ul> |
