---
title: "Amazon Web Services for User Credentials"
description: "Amazon Web Services for User Credentials"
sidebar_position: 100
---

# Amazon Web Services for User Credentials

The information in this section applies to **Select Account Type > Amazon Web Services** account
type in the User Credentials window.

![User Credentials Window - AWS](/images/accessanalyzer/12.0/admin/settings/connection/profile/connectionaws.webp)

The required credentials for Amazon Web Services are:

- Access Key ID — Used to sign programmatic requests made to AWS. If access keys aren't available,
  create them with the IAM console.
- Password Storage: Application – Uses the configured Profile Security setting as selected at the
  **Settings >** **Application** node
- Secret Key — Used to sign programmatic requests made to AWS. If secret keys aren't available,
  create them with the IAM console.
- Scan Roles — Role used to scan other organization accounts

## Create a Connection Profile for AWS

You need to create a new connection profile for use in the AWS Solution.

**Step 1 –** Under Settings > Connection, click Add Connection profile.

**Step 2 –** Click Add User credential and select the Amazon Web Services account type.

**Step 3 –** Input the Access Key ID into the Username section, and the Secret Access Key into the
Access Token section.

:::tip
Remember, you obtain these from AWS when you configure the permissions. See the
[Configure AWS for Scans](/docs/accessanalyzer/12.0/requirements/aws/configurescans.md) topic for additional
information.
:::


**Step 4 –** Click OK in the User Credentials modal, name the Connection Profile, and click Save.

You can now assign this connection profile to the AWS Solution.
