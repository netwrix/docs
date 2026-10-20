---
title: "SQL Certificate for Windows Authentication"
description: "SQL Certificate for Windows Authentication"
sidebar_position: 50
---

# SQL Certificate for Windows Authentication

Directory Manager now uses .NetCore 8 and it requires a SQL certificate to access SQL database using
Windows Authentication. Therefore, if you want to access the Directory Manager database using
Windows Authentication, then a SQL certificate must be added to the Trusted Root Certification
Authorities certificate store on connecting clients or servers such as Directory Manager.

## Generate a certificate for SQL server

Create the certificate on the SQL Server using the following command.

```
New-SelfSignedCertificate-DnsName “SQL Server name” -CertStoreLocation “Cert:LocalMachine\My” -KeySpec KeyExchange
```

The certificate is saved at the specified location.


1. In SQL Server Configuration Manager, expand **SQL Server Network Configuration** in the
left pane.

2. Right-click **Protocols for `<instance Name>`**, and then select **Properties**.

![SQL Configuration Manager Properties dialog box](/images/directorymanager/11.1/requirements/sqlconfigmgr.webp)

3. On the Certificate tab, select the **certificate** you created from theCertificate
dropdown.

![SQL Configuration Manager Properties Flag tab](/images/directorymanager/11.1/requirements/flagstab.webp)

4. On the Flags tab, check the **Force Encryption** option to **Yes**.

5. Click **OK**.

## Install the Certificate on a Directory Manager Client or Server

Copy the certificate on Directory Manager server and install it by adding it to the Trusted Root
Certification Authorities and Local machine and current user certificate stores.
