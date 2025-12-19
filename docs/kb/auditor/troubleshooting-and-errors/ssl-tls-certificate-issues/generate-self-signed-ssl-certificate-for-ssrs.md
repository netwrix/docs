---
description: >-
  Shows how to generate and deploy a self-signed SSL certificate for SQL Server
  Reporting Services (SSRS) when Netwrix Auditor and SSRS are on different
  servers.
keywords:
  - SSRS
  - SSL
  - self-signed certificate
  - Netwrix Auditor
  - PowerShell
  - Export-PFXCertificate
  - Import-PfxCertificate
products:
  - auditor
sidebar_label: Generate Self-signed SSL Certificate for SSRS
tags: []
title: "Generate Self-signed SSL Certificate for SSRS"
knowledge_article_id: kA0Qk0000001HRpKAM
---

# Generate Self-signed SSL Certificate for SSRS

## Overview

Netwrix Auditor uses SQL Server Reporting Services (SSRS) to generate reports. In environments with Netwrix Auditor and SSRS installed on different servers, you should use a secure communication channel. This article covers the steps to generate self-signed certificates to use in SSRS.

## Instructions

> **NOTE:** If your self-signed certificate expires, it is reissued upon a reboot.

Refer to the following steps to generate a self-signed certificate:

1. On your SSRS server, run an elevated PowerShell instance.

2. Create a new certificate in the local **My** store and save the created certificate to a variable for further export:

```powershell
$Certificate = New-SelfSignedCertificate -CertStoreLocation cert:\LocalMachine\My -dnsname "%server_name%""
```

Replace `%server_name%` with the FQDN of your SSRS server.

3. Run the following line to specify the target path for the certificate:

```powershell
$file="C:\temp\cert_for_ssrs.pfx"
```

> **IMPORTANT:** The target folder should exist.

4. Run the following line to specify the password for the certificate:

```powershell
$pwd=ConvertTo-SecureString "%CERTIFICATE_PASSWORD%" -asplainText -force
```

Copy the certificate password for future steps.

5. Run the following lines to import the certificate to the trusted certificate store. Export the certificate using the previously created variable:

```powershell
Export-PFXCertificate -Cert $Certificate -FilePath $file -Password $pwd
```

```powershell
Import-PfxCertificate -FilePath $file cert:\LocalMachine\root -Password $pwd
```

6. Copy the certificate file to the Netwrix Auditor host server. Run the following line in an elevated Powershell instance to specify the path to the certificate:

```powershell
$file="C:\temp\cert_for_ssrs.pfx"
```

Replace the placeholder path with an actual path.

7. Run the following lines to import the certificate to the trusted certificate store on the Netwrix Auditor server.

```powershell
$pwd=ConvertTo-SecureString "%CERTIFICATE_PASSWORD%" -asplainText -force
```

```powershell
Import-PfxCertificate -FilePath $file cert:\LocalMachine\root -Password $pwd
```

Replace the `%CERTIFICATE_PASSWORD%` placeholder with an actual password.

8. Import the certificate to all Netwrix Auditor client servers. Perform steps #6 and #7 on all Netwrix Auditor clients.

> **NOTE:** If you deploy new Netwrix Auditor clients, deploy this certificate on all new servers.
