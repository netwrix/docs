# AWS_SensitiveData_Permissions Job

The AWS_SensitiveData_Permissions job provides details on the permissions assigned to AWS S3 buckets
and the objects in them which contain sensitive data.

## Analysis Tasks for the AWS_SensitiveData_Permissions Job

Navigate to the **AWS** > **8.S3 Sensitive Data** > **AWS_SensitiveData_Permissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_SensitiveData_Permissions Job](/img/product_docs/accessanalyzer/11.6/solutions/databases/db2/sensitivedata/sensitivedatapermissionsanalysis.webp)

The following analysis tasks are selected by default:

- AWS Sensitive Data Permissions – Highlights permissions applied to AWS objects containing
  sensitive data. Creates the AWS_SDDPermission_Details table accessible under the job’s Results
  node.
- Sensitive Data Permissions Summary – Summarizes permissions on AWS objects containing sensitive
  data. Creates the AWS_SDDPermission_BucketSummary table accessible under the job’s Results node.

## Report for the AWS_SensitiveData_Permissions Job

In addition to the tables and views created by the analysis task, the AWS_SensitiveData_Permissions
job produces the following preconfigured report:

| Report                     | Description                                                                  | Default Tags   | Report Element                                                                                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Permissions | This report identifies permissions on AWS objects containing sensitive data. | Sensitive Data | This report is comprised of the following elements: - Stacked Bar Chart – Displays top buckets by permissions on sensitive data - Table – Shows buckets by permissions on sensitive data - Table – Provides details on sensitive data permissions |
