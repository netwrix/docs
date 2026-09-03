---
title: "Vault"
description: "Vault"
sidebar_position: 10
---

# Vault

The Enterprise Auditor vault provides additional security through enhanced encryption to various
credentials stored by the Enterprise Auditor application, such as Connection Profile credentials or
Schedule Service Account credentials. To enable the vault, meet the following prerequisites in the order listed:

- Enterprise Auditor Vault Service must be running

    - This service was installed during the Enterprise Auditor installation and is configured for
      Manual Startup Type
    - Configure it to Log On (Service > Properties) with a service account that has
      Log on as Service rights, as well as Read and Execute rights to the VaultService.exe file
      located within the Enterprise Auditor installation directory

- Role Base Access must be enabled within Enterprise Auditor

    - The vault provides enhanced security when you employ the Role Based Access, or
      least-privilege, option of Enterprise Auditor
    - Assign at least one Administrator role to enable the vault:

        - If you don't want full Role Based Access but do want to enable the vault, give all
          Enterprise Auditor users the Administrator role
        - No additional Role Based Access prerequisites are required for this option

    - See the
      [Access](/docs/accessanalyzer/11.6/admin/settings/access/overview.md)
      topic for additional information on Role Based Access

    :::note
    After you enable the vault, you can't disable Role Based Access
 without first disabling the vault. Contact
    [Netwrix Support](https://www.netwrix.com/support.html) for help disabling Role Based
    Access.
    :::


- The Profile Security section of the Application node must be set to **Vault**

    ![Vault Security](/images/accessanalyzer/11.6/admin/settings/application/vaultrbaerror.webp)

    If you haven't met the previous prerequisites, one of the following errors occurs
    when you try to save the Vault Profile Security setting:

    - Role Based Access Error – Configure Role Based Access to use the Enterprise
 Auditor Vault, and try again
    - Enterprise Auditor Vault Service Error – Enterprise Auditor isn't running

- The Netwrix Enterprise Auditor Web Server service must be run with an account that has the
  Administrator role assigned

    - If the Administrator role isn't assigned, the vault service doesn't allow the web server to
      access the SQL profile and throws an access denied error in the web server log file

After you enable the vault, Enterprise Auditor encrypts the following credentials:

- Storage Profile credentials
- Connection Profile credentials
- Schedule Service Account credentials
- Role Definitions
- Role Assignments

Enterprise Auditor moves the encrypted files with these stored credentials into a new directory
location.

The service account used to run the Enterprise Auditor Vault Service protects this location.

## Disabling the Vault

To disable the vault, navigate to the **Settings** > **Application** node and change the Profile
Security section setting to **Application**. As a best practice, also stop the Enterprise
Auditor Vault Service.
