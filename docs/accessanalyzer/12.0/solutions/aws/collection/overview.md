---
title: "0.Collection Job Group"
description: "0.Collection Job Group"
sidebar_position: 20
---

# 0.Collection Job Group

The 0.Collection job group scans and collects details on IAM and S3 buckets within an
AWS organization.

![0.Collection Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/aws/collection/jobstree.webp)

The 0.Collection Job Group is comprised of:

- [1.AWS_OrgScan Job](/docs/accessanalyzer/12.0/solutions/aws/collection/1.aws_orgscan.md) – Collects details about the AWS Organization including
  password policies and accounts within the organization
- [2.AWS_S3Scan Job](/docs/accessanalyzer/12.0/solutions/aws/collection/2.aws_s3scan.md) – Collects details about the AWS S3 buckets including details
  about the objects in those buckets
- [3.AWS_IAMScan Job](/docs/accessanalyzer/12.0/solutions/aws/collection/3.aws_iamscan.md) – Collects details about users, groups, policies, roles and
  other IAM related identities
- [4.AWS_S3SDDScan Job](/docs/accessanalyzer/12.0/solutions/aws/collection/4.aws_s3sddscan.md) – Collects details about S3 objects containing sensitive
  data
