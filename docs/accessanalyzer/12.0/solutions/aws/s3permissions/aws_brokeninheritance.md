---
title: "AWS_BrokenInheritance Job"
description: "AWS_BrokenInheritance Job"
sidebar_position: 10
---

# AWS_BrokenInheritance Job

The AWS_BrokenInheritance job highlights permissions in an AWS S3 bucket that differ from those
assigned at the bucket level, those assigned directly on objects within the bucket.

## Analysis Tasks for the AWS_BrokenInheritance Job

Navigate to the **AWS** > **6.S3 Permissions** > **AWS_BrokenInheritance** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AWS_BrokenInheritance Job](/images/accessanalyzer/12.0/solutions/aws/s3permissions/brokeninheritanceanalysis.webp)

The following analysis tasks are selected by default:

- Broken Inheritance – Permissions applied directly to AWS S3 Bucket Objects. Creates the
  AWS_BrokenInheritance_Details table accessible under the job’s Results node.
- Broken Inheritance Summary – Summarizes permissions applied directly to AWS S3 Bucket Objects.
  Creates the AWS_BrokenInheritance_Summary table accessible under the job’s Results node.

## Report for the AWS_BrokenInheritance Job

In addition to the tables and views created by the analysis task, the AWS_BrokenInheritance job
produces the following preconfigured report:

| Report             | Description                                                                     | Default Tags | Report Element                                                                                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Broken Inheritance | This report identifies permissions applied directly on files in AWS S3 Buckets. | None         | This report is comprised of the following elements: <ul><li>Stacked Bar Chart – Displays top buckets by broken inheritance</li><li>Table – Shows buckets by broken inheritance</li><li>Table – Provides details on broken inheritance</li></ul> |
