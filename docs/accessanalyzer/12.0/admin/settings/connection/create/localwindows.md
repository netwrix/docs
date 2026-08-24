---
title: "Local Windows Account for User Credentials"
description: "Local Windows Account for User Credentials"
sidebar_position: 20
---

# Local Windows Account for User Credentials

The information in this topic applies to **Select Account Type** > **Local Windows Account** in the
User Credentials window.

![User Credentials - Local Windows Account](/images/accessanalyzer/12.0/admin/settings/connection/profile/localwindowsaccount.webp)

The required credentials for the Local Windows Account are:

- User name – Enter the user name
- Password Storage – Choose the option for credential password storage:

    - Application – Uses the configured Profile Security setting as selected at the **Settings** >
      **Application** node. See the [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md) topic for
      additional information.
    - CyberArk – Uses the CyberArk Enterprise Password Vault. See the
      [CyberArk Integration](/docs/accessanalyzer/12.0/admin/settings/connection/cyberarkintegration.md) topic for additional information. The
      password fields don't apply for CyberArk password storage.

        :::note
        If you use the CyberArk option, the associated Connection Profile can only have
        one user credential in it. The CyberArk integration doesn't support multiple user
        credentials when you use local Windows accounts.
        :::


- Password – Enter the password
- Confirm – Re-enter the password
