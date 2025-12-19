---
title: "Vault"
description: "Vault"
sidebar_position: 10
---

# Vault

The Access Analyzer vault provides additional security through enhanced encryption to various
credentials stored by the Access Analyzer application, such as Connection Profile credentials or
Schedule Service Account credentials. In order to enable the vault, the following prerequisites must
be met in the order listed:

- Access Analyzer Vault Service must be running

    - This service was installed during the Access Analyzer installation and is configured for
      Manual Startup Type
    - It needs to be configured to Log On (Service > Properties) with a service account which has
      Log on as Service rights, as well as Read and Execute rights to the VaultService.exe file
      located within the Access Analyzer installation directory

- Role Base Access must be enabled within Access Analyzer

    - The vault was designed to provide enhanced security when employing the Role Based Access, or
      least privilege, option of Access Analyzer
    - At least one Administrator role must be assigned to enable the vault:

        - If full Role Based Access is not desired but enabling the vault is, all of the Access
          Analyzer users should be given the Administrator role
        - No additional Role Based Access prerequisites are required for this option

    - See the [Access](/docs/accessanalyzer/12.0/admin/settings/access/overview.md) topic for additional information on Role Based Access

    :::note
    Once the vault has been enabled, it is not possible to disable Role Based Access
    without first disabling the vault. Please contact
    [Netwrix Support](https://www.netwrix.com/support.html) for assistance in disabling Role Based
    Access.
    :::


- The Profile Security section of the Application node must be set to **Vault**

    ![Vault Security](/images/accessanalyzer/12.0/admin/settings/application/vaultrbaerror.webp)

    If the previous prerequisites have not been met, then one of the following errors will occur
    when attempting to save the Vault Profile Security setting:

    - Role Based Access Error – Role Based Access must be configured in order to use the Access
      Analyzer Vault. Please configure Role Based Access and try again
    - Access Analyzer Vault Service Error – Access Analyzer is not running

- The Netwrix Access Analyzer (formerly Enterprise Auditor) Web Server service must be run with an
  account that has the Administrator role assigned

    - If the Administrator role is not assigned, the vault service does not allow the web server to
      access the SQL profile and throws an access denied error in the web server log file

The credentials which are encrypted once the vault has been enabled are:

- Storage Profile credentials
- Connection Profile credentials
- Schedule Service Account credentials
- Role Definitions
- Role Assignments

Once encrypted, the files with these stored credentials are moved into a new directory location.

This location is protected by the service account used to run the Access Analyzer Vault Service.

## Disabling the Vault

To disable the vault, navigate to the **Settings** > **Application** node and change the Profile
Security section setting to **Application**. It is a best practice to also stop the Access Analyzer
Vault Service.
