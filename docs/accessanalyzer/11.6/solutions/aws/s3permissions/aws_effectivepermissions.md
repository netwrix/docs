---
title: "AWS_EffectivePermissions Job"
description: "AWS_EffectivePermissions Job"
sidebar_position: 20
---

# AWS_EffectivePermissions Job

The AWS_EffectivePermissions job identifies and summarizes effective permissions on AWS S3 buckets
and bucket objects.

## Analysis Tasks for the AWS_Accounts Job

Navigate to the **AWS** > **6.S3 Permissions** > **AWS_EffectivePermissions** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_Accounts Job](/images/accessanalyzer/11.6/solutions/aws/s3permissions/effectivepermissionsanalysis.webp)

The following analysis tasks are selected by default:

- S3 Bucket Effective Permissions – AWS S3 Bucket effective permissions for each identity. Creates
  the AWS_EffectiveBucketPermissions_Details table accessible under the job’s Results node.
- S3 Bucket Effective Permission Summary – Summarizes permission counts across AWS S3 Buckets.
  Creates the AWS_EffectiveBucketPermissions_Summary table accessible under the job’s Results node.

## Report for the AWS_EffectivePermissions Job

In addition to the tables and views created by the analysis task, the AWS_EffectivePermissions job
produces the following preconfigured report:

| Report                | Description                                                                    | Default Tags | Report Element                                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Effective Permissions | This report identifies and summarizes effective permissions on AWS S3 Buckets. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays top buckets by effective permissions</li><li>Table – Shows buckets by effective permissions</li><li>Table – Provides details on effective permissions</li></ul> |
