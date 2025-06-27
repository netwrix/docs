# AWS_SensitiveData Job

The AWS_SensitiveData job provides details on AWS S3 buckets and the objects in them which contain
sensitive data.

## Analysis Tasks for the AWS_SensitiveData Job

Navigate to the **AWS** > **8.S3 Sensitive Data** > **AWS_SensitiveData** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_SensitiveData Job](/img/product_docs/accessanalyzer/solutions/databases/postgresql/collection/sensitivedataanalysis.webp)

The following analysis tasks are selected by default:

- Sensitive Data Details – Provides detailed information for S3 objects with Sensitive Data. Creates
  the AWS_SDD_Details table accessible under the job’s Results node.
- Sensitive Data Summary – Summarizes Sensitive Data by AWS Account. Creates the AWS_SDD_Summary
  table accessible under the job’s Results node.
- Enterprise Summary – Summarizes AWS sensitive data by criteria. Creates the
  AWS_SDD_EnterpriseSummary table accessible under the job’s Results node.

## Report for the AWS_Sensitive Data Job

In addition to the tables and views created by the analysis task, the AWS_SensitiveData job produces
the following preconfigured reports:

| Report                  | Description                                                                   | Default Tags   | Report Element                                                                                                                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise.  | None           | This report is comprised of the following elements: - Chart – Displays exceptions by match count - Table – Provides details on exceptions                                                                   |
| Sensitive Data Overview | This report identifies objects in AWS S3 buckets that contain sensitive data. | Sensitive Data | This report is comprised of the following elements: - Stacked Bar Chart – Displays top buckets by sensitive data hit - Table – Shows sensitive data by account - Table – Provides details on sensitive data |
