---
title: "AWS Data Collector"
description: "AWS Data Collector"
sidebar_position: 60
---

# AWS Data Collector

The AWS Data Collector collects IAM users, groups, roles, and policies, as well as S3 permissions,
content, and sensitive data from the target Amazon Web Services (AWS) accounts. The AWS Data
Collector has been preconfigured for the AWS Solution. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[AWS Solution](/docs/accessanalyzer/11.6/solutions/aws/overview.md)
topic for additional information.

**Protocols**

- 443

**Ports**

- 443

**Permissions**

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

**Sensitive Data Discovery Considerations**

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

## AWS Query Configuration

The AWS Data Collector is configured through the Amazon Web Services Data Collector Wizard. The
wizard contains the following pages, which change based up on the query category selected:

- [AWS: Category](/docs/accessanalyzer/11.6/admin/datacollector/aws/category.md)
- [AWS: Login Roles](/docs/accessanalyzer/11.6/admin/datacollector/aws/loginroles.md)
- [AWS: Filter S3 Objects](/docs/accessanalyzer/11.6/admin/datacollector/aws/filters3objects.md)
- [AWS: Sensitive Data Settings](/docs/accessanalyzer/11.6/admin/datacollector/aws/sensitivedata.md)
- [AWS: Criteria ](/docs/accessanalyzer/11.6/admin/datacollector/aws/criteria.md)
- [AWS: Results](/docs/accessanalyzer/11.6/admin/datacollector/aws/results.md)
- [AWS: Summary](/docs/accessanalyzer/11.6/admin/datacollector/aws/summary.md)
