---
title: "AWS_SensitivePolicies Job"
description: "AWS_SensitivePolicies Job"
sidebar_position: 40
---

# AWS_SensitivePolicies Job

The AWS_SensitivePolicies job provides details on users, groups, and roles as well as the policies
granting them sensitive permissions.

## Analysis Tasks for the AWS_SensitivePolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_SensitivePolicies** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_SensitivePolicies Job](/images/accessanalyzer/11.6/solutions/aws/policies/sensitivepoliciesanalysis.webp)

The following analysis tasks are selected by default:

- Sensitive Managed Policy Details – Provides details on AWS Sensitive Managed Policies. Creates the
  AWS_SensitiveManagedPolicies_Details table accessible under the job’s Results node.
- Sensitive Inline Policy Details – Provides details on AWS Sensitive Inline Policies. Creates the
  AWS_SensitiveInlinePolicies_Details table accessible under the job’s Results node.
- Sensitive Managed Policy Summary – Summarizes AWS Sensitive Managed Policies by organization.
  Creates the AWS_SensitiveManagedPolicies_Summary table accessible under the job’s Results node.
- Sensitive Inline Policy Summary – Summarizes AWS Sensitive Inlin Policies by organization. Creates
  the AWS_SensitiveInlinePolicies_Summary table accessible under the job’s Results node.

## Reports for the AWS_SensitivePolicies Job

In addition to the tables and views created by the analysis task, the AWS_SensitivePolicies job
produces the following preconfigured report:

| Report                     | Description                                                                               | Default Tags | Report Element                                                                                                                                                                                                                                                                            |
| -------------------------- | ----------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Inline Policies  | This report highlights users, groups, and roles with a sensitive inline policy assigned.  | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays sensitive policy assignments by org</li><li>Table – Shows sensitive policy assignments by org</li><li>Table – Provides details on sensitive policy assignments</li></ul>                         |
| Sensitive Managed Policies | This report highlights users, groups, and roles with a sensitive managed policy assigned. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays sensitive managed policy assignments by org</li><li>Table – Shows sensitive managed policy assignments by org</li><li>Table – Provides details on sensitive managed policy assignments</li></ul> |
