---
sidebar_position: 5116
title: AWS_UserPolicies Job
---

# AWS\_UserPolicies Job

The AWS\_UserPolicies job provides details outlining user policy assignment. This includes where the policy is assigned, directly or at a group level, and if the policy assignment has been duplicated.

## Analysis Tasks for the AWS\_UserPolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS\_UserPolicies** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_UserPolicies Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Policies/UserPoliciesAnalysis.png "Analysis Tasks for the AWS_UserPolicies Job")

The following analysis tasks are selected by default:

* User Policies View – Details policies assigned to users directly and through group membership. Creates the AWS\_IamUserPolicyView table accessible under the job’s Results node.
* Duplicated Policies – User policies that have been inherited and directly assigned. Creates the AWS\_DuplicatedPolicy\_Details table accessible under the job’s Results node.
* User Policy Summary – Summarizes policies assigned to users by Account. Creates the AWS\_UserPolicy\_Summary table accessible under the job’s Results node.

## Reports for the AWS\_UserPolicies Job

In addition to the tables and views created by the analysis task, the AWS\_UserPolicies job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Duplicate Policy Assignments | This report highlights policies that have been both assigned directly and inherited from a group to a user identity. | None | This report is comprised of the following elements:   * Stacked Bar Chart – Displays top accounts by assigned managed policies * Table – Provides details on managed policy assignments |
| Managed Policy Assignments | This report details managed policy assignments in the AWS Organization. | None | This report is comprised of the following elements:   * Stacked Bar Chart – Displays duplicate policy assignment summary by account * Table – Shows duplicate policy assignment summary by account * Table – Provides details on duplicate policy assignment summary |