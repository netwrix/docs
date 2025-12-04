---
description: >-
  Shows how to determine the number of enabled Active Directory user accounts
  for Netwrix Auditor using a provided script or an AD Saved Query, and how to
  increase the AD query result limit above 10,000.
keywords:
  - enabled AD users
  - Active Directory
  - user count
  - Netwrix Auditor
  - Saved Queries
  - LDAP filter
  - countofusers.vbs
  - AD search limit
  - Group Policy
products:
  - auditor
sidebar_label: Determining the Number of Enabled Active Directory
tags: []
title: "Determining the Number of Enabled Active Directory User Accounts"
knowledge_article_id: kA00g000000H9UdCAK
---

# Determining the Number of Enabled Active Directory User Accounts

## Overview

To determine the number of enabled user accounts for Netwrix Auditor, it is important to understand that Netwrix Auditor is licensed per enabled Active Directory (AD) user.

**What is an enabled AD user?** An enabled AD user is an existing, enabled user account. Computer users, deleted users, group users, and disabled accounts do not constitute enabled AD users and are not factored into licensing.

## Instructions

The number of enabled user accounts can be determined one of the following two ways:

- Use the following link to download a special script: https://www.netwrix.com/download/products/vbs_script/countofusers.zip
  1. Save and unzip `countofusers.zip` and run the `countofusers.vbs` file.
  2. When prompted, enter your domain name. The script will return the number of enabled user accounts in the specified domain.

- Execute the following steps:
  1. Open the **Active Directory Users and Computers** snap-in.
  2. Right-click the **Saved Queries** node and select **New**.
  3. In the **Name** field, provide the name of the new query.
  4. Specify the **Query Root** of the **Organizational Unit** you want to monitor (or the entire domain).
  5. Click on **Define Query**.
  6. Select **Custom Search** from the **Find** drop-down list.
  7. Open the **Advanced** tab and paste in the following LDAP filter:

     ```text
     (&(sAMAccountType=805306368)(!(userAccountControl:1.2.840.113556.1.4.803:=2))(!(name=HealthMailbox*)))
     ```

  8. Click **OK** to save the changes.

> **NOTE:** By default, AD queries are limited to 10,000 results. To view more than 10,000 results, take the following steps:

1. Start the MMC Group Policy Management snap-in.
2. Locate the target domain, right-click the target policy and select **Edit**.
3. Proceed to **User Configuration** > **Policies** > **Administrative Templates** > **Desktop** > **Active Directory**.
4. Double-click the **Maximum size of Active Directory searches** setting.
5. Select **Enabled**, and set the number (e.g., 30000).
6. Click **Apply** > **OK**.
7. Close the Group Policy Editor.
