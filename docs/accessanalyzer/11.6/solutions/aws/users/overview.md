---
title: "2.Users Job Group"
description: "2.Users Job Group"
sidebar_position: 40
---

# 2.Users Job Group

The 2.Users job group provides details on AWS IAM user MFA status, access key usage, and staleness.

![2.Users Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/aws/users/jobstree.webp)

The 2.Users job group is comprised of:

- [AWS_AccessKeys Job](/docs/accessanalyzer/11.6/solutions/aws/users/aws_accesskeys.md)
  – Provides details on the last time an access key was rotated or used, highlighting keys that were
  last rotated over a year ago
- [AWS_MFAStatus Job](/docs/accessanalyzer/11.6/solutions/aws/users/aws_mfastatus.md)
  – Provides details on each user's MFA status, highlighting users that have it disabled
- [AWS_RootAccounts Job](/docs/accessanalyzer/11.6/solutions/aws/users/aws_rootaccounts.md)
  – Provides details on AWS root accounts and how they conform to recommended security practices
- [AWS_StaleUsers Job](/docs/accessanalyzer/11.6/solutions/aws/users/aws_staleusers.md)
  – Provides details on the last time each user logged in or their access key was used, highlighting
  those over 60 days or that have never logged in
