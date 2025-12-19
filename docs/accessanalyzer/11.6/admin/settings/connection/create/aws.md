---
title: "Amazon Web Services for User Credentials"
description: "Amazon Web Services for User Credentials"
sidebar_position: 100
---

# Amazon Web Services for User Credentials

The information in this section applies to **Select Account Type > Amazon Web Services** account
type in the User Credentials window.

![User Credentials Window - AWS](/images/accessanalyzer/11.6/admin/settings/connection/profile/connectionaws.webp)

The required credentials for Amazon Web Services are:

- Access Key ID — Used to sign programmatic requests made to AWS. If access keys are not available,
  create them with the IAM console.
- Password Storage: Application – Uses the configured Profile Security setting as selected at the
  **Settings >** **Application** node
- Secret Key — Used to sign programmatic requests made to AWS. If secret keys are not available,
  create them with the IAM console.
- Scan Roles — Role used to scan other organization accounts

## Create a Connection Profile for AWS

A new connection profile will need to be created to be leveraged in the AWS Solution.

**Step 1 –** Under Settings > Connection, click Add Connection profile.

**Step 2 –** Click Add User credential and select the Amazon Web Services account type.

**Step 3 –** Input the Access Key ID into the Username section, and the Secret Access Key into the
Access Token section.

:::tip
Remember, these are obtained from AWS when the permissions are configured. See the
[Configure AWS for Scans](/docs/accessanalyzer/11.6/requirements/aws/configurescans.md)
topic for additional information.
:::


**Step 4 –** Click OK in the User Credentials modal, name the Connection Profile, and click Save.

This connection profile can now be assigned to the AWS Solution.
