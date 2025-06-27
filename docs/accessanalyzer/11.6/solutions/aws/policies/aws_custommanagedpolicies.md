# AWS_CustomManagedPolicies Job

The AWS_CustomManagedPolicies job provides details on customer managed policies created in the AWS
Organization.

## Analysis Tasks for the AWS_CustomManagedPolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_CustomManagedPolicies** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_CustomManagedPolicies Job](/img/product_docs/accessanalyzer/11.6/solutions/aws/policies/custommanagedpoliciesanalysis.webp)

The following analysis tasks are selected by default:

- Custom Managed Policy Details – Provides detailed information on AWS custom managed policies.
  Creates the AWS_CustomManagedPolicy_Details table accessible under the job’s Results node.
- Custom Managed Policy Usage Summary – Summarizes the custom managed policy usage by AWS
  Organization. Creates the AWS_CustomManagedPolicy_Summary table accessible under the job’s Results
  node.

## Report for the AWS_CustomManagedPolicies Job

In addition to the tables and views created by the analysis task, the AWS_CustomManagedPolicies job
produces the following preconfigured report:

| Report                  | Description                                                       | Default Tags | Report Element                                                                                                                                                                                                                            |
| ----------------------- | ----------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Custom Managed Policies | This report analyzes AWS Custom Managed Policies and their usage. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays custom managed policies by account - Table – Shows custom managed policies by account - Table – Provides details on custom managed policies by account |
