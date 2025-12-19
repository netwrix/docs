---
title: "Vault"
description: "Vault"
sidebar_position: 10
---

# Vault

The Enterprise Auditor vault provides additional security through enhanced encryption to various
credentials stored by the Enterprise Auditor application, such as Connection Profile credentials or
Schedule Service Account credentials. In order to enable the vault, the following prerequisites must
be met in the order listed:

- Enterprise Auditor Vault Service must be running

    - This service was installed during the Enterprise Auditor installation and is configured for
      Manual Startup Type
    - It needs to be configured to Log On (Service > Properties) with a service account which has
      Log on as Service rights, as well as Read and Execute rights to the VaultService.exe file
      located within the Enterprise Auditor installation directory

- Role Base Access must be enabled within Enterprise Auditor

    - The vault was designed to provide enhanced security when employing the Role Based Access, or
      least privilege, option of Enterprise Auditor
    - At least one Administrator role must be assigned to enable the vault:

        - If full Role Based Access is not desired but enabling the vault is, all of the Enterprise
          Auditor users should be given the Administrator role
        - No additional Role Based Access prerequisites are required for this option

    - See the
      [Access](/docs/accessanalyzer/11.6/admin/settings/access/overview.md)
      topic for additional information on Role Based Access

    :::note
    Once the vault has been enabled, it is not possible to disable Role Based Access
    without first disabling the vault. Please contact
    [Netwrix Support](https://www.netwrix.com/support.html) for assistance in disabling Role Based
    Access.
    :::


- The Profile Security section of the Application node must be set to **Vault**

    ![Vault Security](/images/accessanalyzer/11.6/admin/settings/application/vaultrbaerror.webp)

    If the previous prerequisites have not been met, then one of the following errors will occur
    when attempting to save the Vault Profile Security setting:

    - Role Based Access Error – Role Based Access must be configured in order to use the Enterprise
      Auditor Vault. Please configure Role Based Access and try again
    - Enterprise Auditor Vault Service Error – Enterprise Auditor is not running

- The Netwrix Enterprise Auditor Web Server service must be run with an account that has the
  Administrator role assigned

    - If the Administrator role is not assigned, the vault service does not allow the web server to
      access the SQL profile and throws an access denied error in the web server log file

The credentials which are encrypted once the vault has been enabled are:

- Storage Profile credentials
- Connection Profile credentials
- Schedule Service Account credentials
- Role Definitions
- Role Assignments

Once encrypted, the files with these stored credentials are moved into a new directory location.

This location is protected by the service account used to run the Enterprise Auditor Vault Service.

## Disabling the Vault

To disable the vault, navigate to the **Settings** > **Application** node and change the Profile
Security section setting to **Application**. It is a best practice to also stop the Enterprise
Auditor Vault Service.
