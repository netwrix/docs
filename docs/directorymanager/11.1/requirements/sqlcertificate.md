---
title: "Configure a SQL Certificate for Directory Manager"
description: "Generate a SQL Server certificate and install it on Directory Manager servers so they can connect to the database using Windows Authentication."
keywords:
  - SQL certificate
  - Windows Authentication
  - SQL Server Force Encryption
  - Trusted Root Certification Authorities
  - .NET 8
sidebar_position: 50
---

# Configure a SQL Certificate for Directory Manager

Directory Manager now uses .NET 8, which requires a SQL certificate to access a SQL database using
Windows Authentication. Therefore, if you want to access the Directory Manager database using
Windows Authentication, you must add a SQL certificate to the Trusted Root Certification
Authorities certificate store on connecting clients or servers, such as Directory Manager.

## Generate a Certificate for SQL Server

Create the certificate on SQL Server using the following command.

```
New-SelfSignedCertificate-DnsName “SQL Server name” -CertStoreLocation “Cert:LocalMachine\My” -KeySpec KeyExchange
```

The certificate is saved at the specified location.


1. In SQL Server Configuration Manager, expand **SQL Server Network Configuration** in the
left pane.

2. Right-click **Protocols for `<instance Name>`**, and then select **Properties**.

![SQL Server Configuration Manager Protocols Properties dialog box](/images/directorymanager/11.1/requirements/sqlconfigmgr.webp)

3. On the Certificate tab, select the **certificate** you created from the Certificate
dropdown.

![Flags tab of the Protocols Properties dialog box with Force Encryption option](/images/directorymanager/11.1/requirements/flagstab.webp)

4. On the Flags tab, set the **Force Encryption** option to **Yes**.

5. Click **OK**.

## Install the Certificate on a Directory Manager Client or Server

Copy the certificate to the Directory Manager server and install it by adding it to the Trusted Root
Certification Authorities certificate store for both the local machine and the current user.
