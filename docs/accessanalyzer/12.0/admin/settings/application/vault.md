---
title: "Vault"
description: "Vault"
sidebar_position: 10
---

# Vault

The Access Analyzer vault provides additional security through enhanced encryption to various
credentials the Access Analyzer application stores, such as Connection Profile credentials or
Schedule Service Account credentials. to enable the vault, meet the following prerequisites
in the order listed:

- Access Analyzer Vault Service must be running

    - The Access Analyzer installation installs this service and configures it for Manual
      Startup Type
    - You need to configure it to Log On (Service > Properties) with a service account that has
      Log on as Service rights, as well as Read and Execute rights to the VaultService.exe file
      located within the Access Analyzer installation directory

- Role Base Access must be enabled within Access Analyzer

    - The vault was designed to provide enhanced security when employing the Role Based Access, or
      least privilege, option of Access Analyzer
    - You must assign at least one Administrator role to enable the vault:

        - If you don't want full Role Based Access but do want to enable the vault, give all
          Access Analyzer users the Administrator role
        - This option doesn't require additional Role Based Access prerequisites

    - See the [Access](/docs/accessanalyzer/12.0/admin/settings/access/overview.md) topic for additional information on Role Based Access

    :::note
    After you enable the vault, you can't disable Role Based Access
 without first disabling the vault. contact
    [Netwrix Support](https://www.netwrix.com/support.html) for assistance in disabling Role Based
    Access.
    :::


- The Profile Security section of the Application node must be set to **Vault**

    ![Vault Security](/images/accessanalyzer/12.0/admin/settings/application/vaultrbaerror.webp)

    If the previous prerequisites have not been met, then one of the following errors will occur
    when attempting to save the Vault Profile Security setting:

    - Role Based Access Error – Role Based Access must be configured to use the Access
 Analyzer Vault. configure Role Based Access and try again
    - Access Analyzer Vault Service Error – Access Analyzer isn't running

- The Netwrix Access Analyzer (formerly Enterprise Auditor) Web Server service must be run with an
  account that has the Administrator role assigned

    - If you don't assign the Administrator role, the vault service doesn't allow the web server
      to access the SQL profile and throws an access denied error in the web server log file

The credentials that the Access Analyzer Vault Service encrypts after you enable the vault are:

- Storage Profile credentials
- Connection Profile credentials
- Schedule Service Account credentials
- Role Definitions
- Role Assignments

Once encrypted, the Access Analyzer Vault Service moves the files with these stored credentials
into a new directory location.

The service account used to run the Access Analyzer Vault Service protects this location.

## Disabling the Vault

To disable the vault, navigate to the **Settings** > **Application** node and change the Profile
Security section setting to **Application**. As a best practice, also stop the Access Analyzer
Vault Service.
