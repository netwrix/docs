---
title: "Target Amazon Web Service Requirements, Permissions, and Ports"
description: "Target Amazon Web Service Requirements, Permissions, and Ports"
sidebar_position: 10
---

# Target Amazon Web Service Requirements, Permissions, and Ports

The Access Analyzer for AWS Solution provides the ability to audit Amazon Web Services (AWS) to
collect IAM users, groups, roles, and policies, as well as S3 permissions, content, and sensitive
data from target AWS accounts. It scans:

- Amazon AWS IAM
- Amazon AWS S3

**Data Collector**

This solution employs the following data collector to scan the target environment:

- [AWS Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/aws/overview.md)

## Permissions

The permissions required to scan an AWS account are based on the type of information being
collected:

- To collect details about the AWS Organization, the following permission is required:

    - organizations:DescribeOrganization

- To collect details regarding IAM, the following permissions are required:

    - iam:GenerateCredentialReport
    - iam:GenerateServiceLastAccessedDetails
    - iam:Get\*
    - iam:List\*
    - iam:Simulate\*
    - sts:GetAccessKeyInfo

- To collect details related to S3 buckets and objects, the following permissions are required:

    - s3:Describe\*
    - s3:Get\*
    - s3:HeadBucket
    - s3:List\*

This provides a least privilege model for your auditing needs. See the
[Configure AWS for Scans](/docs/accessanalyzer/12.0/requirements/aws/configurescans.md) topic for additional information.

## Ports

The following firewall ports are needed:

**For AWS Data Collector**

- 443
