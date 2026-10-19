---
title: "AWS Data Collector"
description: "AWS Data Collector"
sidebar_position: 60
---

# AWS Data Collector

The AWS Data Collector collects IAM users, groups, roles, and policies, as well as S3 permissions,
content, and sensitive data from the target Amazon Web Services (AWS) accounts. The AWS Data
Collector comes preconfigured for the AWS Solution. Both this data collector and the solution are
available with a special Access Analyzer license. See the
[AWS Solution](/docs/accessanalyzer/12.0/solutions/aws/overview.md) topic for additional information.

**Protocols**

- 443

**Ports**

- 443

**Permissions**

- To collect details about the AWS Organization, grant the following permission:

    - organizations:DescribeOrganization

- To collect details regarding IAM, grant the following permissions:

    - iam:GenerateCredentialReport
    - iam:GenerateServiceLastAccessedDetails
    - iam:Get\*
    - iam:List\*
    - iam:Simulate\*
    - sts:GetAccessKeyInfo

- To collect details related to S3 buckets and objects, grant the following permissions:

    - s3:Describe\*
    - s3:Get\*
    - s3:HeadBucket
    - s3:List\*

**Sensitive Data Discovery Considerations**

If you run Sensitive Data Discovery (SDD) scans, increase the minimum amount of RAM. Each thread
requires a minimum of 2 additional GB of RAM per host. For example, if you configure the job to scan
8 hosts at a time, it requires an extra 16 GB of RAM (8 x 2 = 16).

## AWS Query Configuration

You configure the AWS Data Collector through the Amazon Web Services Data Collector Wizard. The
wizard contains the following pages, which change based on the query category you select:

- [AWS: Category](/docs/accessanalyzer/12.0/admin/datacollector/aws/category.md)
- [AWS: Login Roles](/docs/accessanalyzer/12.0/admin/datacollector/aws/loginroles.md)
- [AWS: Filter S3 Objects](/docs/accessanalyzer/12.0/admin/datacollector/aws/filters3objects.md)
- [AWS: Sensitive Data Settings](/docs/accessanalyzer/12.0/admin/datacollector/aws/sensitivedata.md)
- [AWS: Criteria ](/docs/accessanalyzer/12.0/admin/datacollector/aws/criteria.md)
- [AWS: Results](/docs/accessanalyzer/12.0/admin/datacollector/aws/results.md)
- [AWS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/aws/summary.md)
