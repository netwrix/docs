---
title: "Configure a SQL Certificate for Directory Manager"
description: "Generate a SQL Server certificate and install it on Directory Manager servers so they can connect to the database using Windows Authentication."
keywords:
  - SQL certificate
  - Windows Authentication
  - SQL Server Force Encryption
  - Trusted Root Certification Authorities
  - .NET 10
sidebar_position: 50
---

# Configure a SQL Certificate for Directory Manager

Directory Manager uses .NET 10, which requires a SQL certificate to access a SQL database with Windows Authentication. To use Windows Authentication for the Directory Manager database, add a SQL certificate to the Trusted Root Certification Authorities certificate store on each connecting client or server, such as Directory Manager.

## Generate a certificate for SQL Server

Create the certificate on SQL Server with the following command.

```
New-SelfSignedCertificate-DnsName “SQL Server name” -CertStoreLocation “Cert:LocalMachine\My” -KeySpec KeyExchange
```

The command saves the certificate at the specified location. Then bind it to SQL Server:

1. In SQL Server Configuration Manager, expand **SQL Server Network Configuration** in the left pane.

2. Right-click **Protocols for `<instance Name>`**, and then select **Properties**.

   ![SQL Server Configuration Manager Protocols Properties dialog box](/images/directorymanager/11.2/requirements/sqlconfigmgr.webp)

3. On the Certificate tab, select the **certificate** you created from the Certificate dropdown.

   ![Flags tab of the Protocols Properties dialog box with Force Encryption option](/images/directorymanager/11.2/requirements/flagstab.webp)

4. On the Flags tab, set the **Force Encryption** option to **Yes**.

5. Click **OK**.

## Install the certificate on a Directory Manager client or server

Copy the certificate to the Directory Manager server. Install it by adding it to the Trusted Root Certification Authorities certificate store for both the local machine and the current user.
