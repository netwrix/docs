# AWS\_CustomManagedPolicies Job

The AWS\_CustomManagedPolicies job provides details on customer managed policies created in the AWS Organization.

## Analysis Tasks for the AWS\_CustomManagedPolicies Job

Navigate to the __AWS__ > __5.Policies__ > __AWS\_CustomManagedPolicies__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_CustomManagedPolicies Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/policies/custommanagedpoliciesanalysis.png)

The following analysis tasks are selected by default:

- Custom Managed Policy Details – Provides detailed information on AWS custom managed policies. Creates the AWS\_CustomManagedPolicy\_Details table accessible under the job’s Results node.
- Custom Managed Policy Usage Summary – Summarizes the custom managed policy usage by AWS Organization. Creates the AWS\_CustomManagedPolicy\_Summary table accessible under the job’s Results node.

## Report for the AWS\_CustomManagedPolicies Job

In addition to the tables and views created by the analysis task, the AWS\_CustomManagedPolicies job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Custom Managed Policies | This report analyzes AWS Custom Managed Policies and their usage. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays custom managed policies by account - Table – Shows custom managed policies by account - Table – Provides details on custom managed policies by account |
