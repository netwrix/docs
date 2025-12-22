---
title: "AWS Solution"
description: "AWS Solution"
sidebar_position: 70
---

# AWS Solution

Access Analyzer for AWS allows organizations to secure their data residing in Amazon Web Services
(AWS) S3 platform, reducing their risk exposure through proactive, automated auditing and reporting
of S3 permissions, sensitive data, and ultimately a consolidated view of user access rights across
dozens of structured and unstructured data resources both on-premises and in the cloud.

The AWS Solution is designed to provide information about data access such as:

- Who has access to your data
- Who is accessing your data
- What sensitive data is being stored and accessed

The AWS Solution provides the ability to audit AWS IAM and S3. Access Analyzer uses the AWS solution
to collect IAM users, groups, roles, and policies, as well as S3 permissions, content, and sensitive
data from target AWS accounts. The solution requires a special Access Analyzer license. It can be
focused to only conduct auditing of AWS IAM. Additionally, the Sensitive Data Discovery Add-On
enables the solution to search AWS S3 content for sensitive data.

**Supported Platforms**

- Amazon AWS IAM
- Amazon AWS S3

**Requirements, Permissions, and Ports**

See the
[Target Amazon Web Service Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/aws/target.md)
topic for additional information.

**Sensitive Data Discovery Considerations**

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.
:::


**Location**

The AWS Solution requires a special Access Analyzer license. It can be installed from the Access
Analyzer Instant Job Wizard. See the [Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md)
topic for information on installing instant solutions from the Access Analyzer Library.

Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** > **AWS**.

## Job Groups

The AWS solution is a comprehensive set of pre-configured audit jobs and reports that provide
visibility into IAM users, groups, roles, and policies, as well as S3 permissions, content, and
sensitive data from target AWS accounts.

![AWS Solution Overview page](/images/accessanalyzer/12.0/solutions/aws/overviewpage.webp)

The AWS Solution is comprised of the following job groups:

- [0.Collection Job Group](/docs/accessanalyzer/12.0/solutions/aws/collection/overview.md) – The 0.Collection Job Group scans and collects
  details on IAM and S3 buckets within an AWS organization
- [1.Organizations Job Group](/docs/accessanalyzer/12.0/solutions/aws/organizations/overview.md) – The 1.Organizations Job Group provides
  details on AWS accounts and users
- [2.Users Job Group](/docs/accessanalyzer/12.0/solutions/aws/users/overview.md) – The 2.Users Job Group provides details on AWS IAM user
  MFA status, access key usage, and staleness
- [3.Groups Job Group](/docs/accessanalyzer/12.0/solutions/aws/groups/overview.md) – The 3.Groups Job Group provides details on AWS IAM
  group membership, orphaned groups (those with no policy assigned to them), sensitive security
  group membership, and stale groups
- [4.Roles Job Group](/docs/accessanalyzer/12.0/solutions/aws/roles/overview.md) – The 4.Roles Job Group provides details on roles in the
  AWS IAM environment
- [5.Policies Job Group](/docs/accessanalyzer/12.0/solutions/aws/policies/overview.md) – The 5.Policies Job Group provides details on AWS
  IAM policies including the various types of policies, the permissions they grant, and where they
  are applied in the AWS organization
- [6.S3 Permissions Job Group](/docs/accessanalyzer/12.0/solutions/aws/s3permissions/overview.md) – The 6.S3 Permissions Job Group provides
  details on permissions assigned to AWS S3 buckets, highlighting specific threats like broken
  inheritance and open buckets
- [7.S3 Content Job Group](/docs/accessanalyzer/12.0/solutions/aws/s3content/overview.md) – The 7.S3 Content Job Group provide details on
  AWS S3 buckets and objects contained in those buckets
- [8.S3 Sensitive Data Job Group](/docs/accessanalyzer/12.0/solutions/aws/sensitivedata/overview.md) – The 8.S3 Sensitive Data Job Group
  provides details on AWS S3 buckets and objects containing sensitive data
