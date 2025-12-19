---
title: "6.S3 Permissions Job Group"
description: "6.S3 Permissions Job Group"
sidebar_position: 80
---

# 6.S3 Permissions Job Group

The 6.S3 Permissions job group provides details on permissions assigned to AWS S3 buckets,
highlighting specific threats like broken inheritance and open buckets.

![6.S3 Permissions Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/aws/s3permissions/jobstree.webp)

The 6.S3 Permissions job group is comprised of:

- [AWS_BrokenInheritance Job](/docs/accessanalyzer/11.6/solutions/aws/s3permissions/aws_brokeninheritance.md)
  – Highlights permissions in an AWS S3 bucket that differ from those assigned at the bucket level,
  those assigned directly on objects within the bucket
- [AWS_EffectivePermissions Job](/docs/accessanalyzer/11.6/solutions/aws/s3permissions/aws_effectivepermissions.md)
  – Identifies and summarizes effective permissions on AWS S3 buckets and bucket objects
- [AWS_OpenBuckets Job](/docs/accessanalyzer/11.6/solutions/aws/s3permissions/aws_openbuckets.md)
  – Identifies buckets that have permissions assigned to everyone at the top level of the AWS S3
  bucket
