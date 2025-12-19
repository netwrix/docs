---
title: "1.Organizations Job Group"
description: "1.Organizations Job Group"
sidebar_position: 30
---

# 1.Organizations Job Group

The 1.Organizations job group analyzes and reports on the AWS Organization including password
policies and accounts within the organization.

![1.Organizations Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/aws/organizations/jobstree.webp)

The 1.Organizations job jroup is comprised of:

- [AWS_Accounts Job](/docs/accessanalyzer/11.6/solutions/aws/organizations/aws_accounts.md)
  – Provides detailed information about the accounts that exist in each AWS Organization. This job
  also determines the AWS Master Account for each Organization. The AWS Master Account can be set
  manually by adding a line for each Organization in the temporary table #IdentitySourceAccount in
  the analysis task parameters for this job.
- [AWS_MemberAccountUsers Job](/docs/accessanalyzer/11.6/solutions/aws/organizations/aws_memberaccountusers.md)
  – Highlights users that are not located in the primary AWS Identity Source, which is generally the
  Master AWS Account for the Organization
