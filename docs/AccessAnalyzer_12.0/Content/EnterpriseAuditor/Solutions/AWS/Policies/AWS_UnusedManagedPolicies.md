---
sidebar_position: 5120
title: AWS_UnusedManagedPolicies Job
---

# AWS\_UnusedManagedPolicies Job

The AWS\_UnusedManagedPolicies job provides details on customer managed policies that exist in the AWS Organization. Optionally, AWS managed policies can be included by changing the parameter for the analysis task.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](../../../Admin/Jobs/Job/Overview#Parameter_Configuration "Parameter Configuration") topic for instructions on how to edit parameters on a job overview page.

The AWS\_UnusedManagedPolicies job has the following configurable parameter:

* True or False value to include policies managed by AWS

See the [Customizable Analysis Tasks for the AWS\_UnusedManagedPolicies Job](#Customiz "Customizable Analysis Tasks for the AWS_UnusedManagedPolicies Job") topic for additional information.

## Analysis Tasks for the AWS\_UnusedManagedPolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS\_UnusedManagedPolicies** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for this job. Only modify the analysis tasks listed in the customizable analysis tasks section.

![Analysis Tasks for the AWS_UnusedManagedPolicies Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Policies/UnusedManagedPoliciesAnalysis.png "Analysis Tasks for the AWS_UnusedManagedPolicies Job")

The following analysis tasks are selected by default:

* Unused Managed Policies – Policies not assigned to any group or user. Creates the AWS\_UnusedPolicies\_Details table accessible under the job’s Results node.

  * Optionally, AWS managed policies can be included by setting the parameter to True. See the [Customizable Analysis Tasks for the AWS\_UnusedManagedPolicies Job](#Customiz "Customizable Analysis Tasks for the AWS_UnusedManagedPolicies Job") topic for additional information.
* Unused Managed Policy Summary – Summary by AWS Organization of unused managed policies. Creates the AWS\_UnusedPolicies\_Summary table accessible under the job’s Results node.

### Customizable Analysis Tasks for the AWS\_UnusedManagedPolicies Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Unused Managed Policies | @IncludeAWSManaged | False | True or False value to include policies managed by AWS. |

See the [Configure the Customizable Parameters in an Analysis Task](../../../Admin/Jobs/Job/Configure/AnalysisCustomizableParameters "Configure the Customizable Parameters in an Analysis Task") topic for instructions on how to modify parameters.

## Report for the AWS\_UnusedManagedPolicies Job

In addition to the tables and views created by the analysis task, the AWS\_UnusedManagedPolicies job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Unused Managed Policies | This report identifies policies that are not assigned to any group or user. | None | This report is comprised of the following elements:   * Stacked Bar Chart – Displays unused managed policies by account * Table – Shows unused managed policies by account * Table – Provides details on unused managed policies |