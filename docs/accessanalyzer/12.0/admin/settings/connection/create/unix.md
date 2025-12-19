---
title: "Unix Account for User Credentials"
description: "Unix Account for User Credentials"
sidebar_position: 30
---

# Unix Account for User Credentials

The information in this topic applies to **Select Account Type** > **Unix Account** in the User
Credentials window.

![User Credentials - Unix](/images/accessanalyzer/12.0/admin/settings/connection/profile/unixaccount.webp)

The required credentials for the Unix Account are:

- User name – Enter user name
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md) topic
  for additional information.)
- Password/Confirm

    - If not using a private key, enter the **Password** and re-type in the **Confirm** field
    - If using a private key, then the password is not needed. Provide the private key information
      in the **Use the following private key when connecting** field.

- Use the following port/ports (CSV) for SSH

    - The SSH port needs to be opened in software and hardware firewalls
    - If desired, select this option and provide the port value

- Use the following private key when connecting

    - This option uses the authentication method of an SSH Private Key
    - Supported Key types:

        - Open SSH
        - PuTTY Private Key

    - If desired, select this option and provide the key value
