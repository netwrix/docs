# AWS_OpenBuckets Job

The AWS_OpenBuckets job identifies buckets that have permissions assigned to everyone at the top
level of the AWS S3 bucket.

## Analysis Task for the AWS_OpenBuckets Job

Navigate to the **AWS** > **6.S3 Permissions** > **AWS_OpenBuckets** > **Configure** node and select
**Analysis** to view the analysis task.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the AWS_OpenBuckets Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/s3permissions/openbucketsanalysis.webp)

The following analysis task is selected by default:

- Open Bucket Permissions – Permissions applied to AWS S3 buckets across all users. Creates the
  AWS_OpenBucket_Details table accessible under the job’s Results node.

## Report for the AWS_OpenBuckets Job

In addition to the tables and views created by the analysis task, the AWS_OpenBuckets job produces
the following preconfigured report:

| Report       | Description                                 | Default Tags | Report Element                                                                                                                                                                          |
| ------------ | ------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Buckets | This report identifies AWS S3 Open Buckets. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays largest open buckets - Table – Shows largest open buckets - Table – Provides details on open buckets |
