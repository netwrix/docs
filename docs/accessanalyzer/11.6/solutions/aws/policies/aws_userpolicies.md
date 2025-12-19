---
title: "AWS_UserPolicies Job"
description: "AWS_UserPolicies Job"
sidebar_position: 60
---

# AWS_UserPolicies Job

The AWS_UserPolicies job provides details outlining user policy assignment. This includes where the
policy is assigned, directly or at a group level, and if the policy assignment has been duplicated.

## Analysis Tasks for the AWS_UserPolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_UserPolicies** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_UserPolicies Job](/images/accessanalyzer/11.6/solutions/aws/policies/userpoliciesanalysis.webp)

The following analysis tasks are selected by default:

- User Policies View – Details policies assigned to users directly and through group membership.
  Creates the AWS_IamUserPolicyView table accessible under the job’s Results node.
- Duplicated Policies – User policies that have been inherited and directly assigned. Creates the
  AWS_DuplicatedPolicy_Details table accessible under the job’s Results node.
- User Policy Summary – Summarizes policies assigned to users by Account. Creates the
  AWS_UserPolicy_Summary table accessible under the job’s Results node.

## Reports for the AWS_UserPolicies Job

In addition to the tables and views created by the analysis task, the AWS_UserPolicies job produces
the following preconfigured report:

| Report                       | Description                                                                                                          | Default Tags | Report Element                                                                                                                                                                                                                                                                                 |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicate Policy Assignments | This report highlights policies that have been both assigned directly and inherited from a group to a user identity. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays top accounts by assigned managed policies</li><li>Table – Provides details on managed policy assignments</li></ul>                                                                                    |
| Managed Policy Assignments   | This report details managed policy assignments in the AWS Organization.                                              | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays duplicate policy assignment summary by account</li><li>Table – Shows duplicate policy assignment summary by account</li><li>Table – Provides details on duplicate policy assignment summary</li></ul> |
