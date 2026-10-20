---
description: >-
  Shows how to install GlobalSign and DigiCert root certificates on Windows to
  resolve digital signature errors when installing the Netwrix Endpoint
  Protector Client and components.
keywords:
  - GlobalSign
  - DigiCert
  - root certificates
  - Windows
  - digital signature
  - Netwrix Endpoint Protector
  - EPPNotifier.exe
  - Trusted Root Certification Authorities
products:
  - endpointprotector
sidebar_label: "Install GlobalSign and DigiCert Root Certificates on Windows"
tags:
  - deployment-and-installation
  - kb
title: "Install GlobalSign and DigiCert Root Certificates on Windows"
knowledge_article_id: kA0Qk0000002BFZKA2
---

# Install GlobalSign and DigiCert Root Certificates on Windows

## Overview

This article explains how to install GlobalSign and DigiCert root certificates on Windows. These certificates may be required if you encounter digital signature errors when installing the Netwrix Endpoint Protector Client. The following error messages may populate:

- "A digitally signed driver is required"
- "Microsoft Defender SmartScreen prevented an unrecognized app from starting"

Installing the correct root certificates ensures that Windows recognizes the digital signatures used by Netwrix Endpoint Protector components.

:::note
This same underlying issue — Windows 11 requiring the full DigiCert certificate chain to trust Netwrix-signed binaries — can also surface **after** installation as a policy synchronization failure, especially in air-gapped or offline environments where Windows can't automatically fetch missing chain certificates. If the EPP Client installs successfully but later shows **"Policies update failed!"** on Windows 11, see [Policies Update Fails on Windows 11 EPP Client (Code Signature Verification Error)](/docs/endpointprotector/install/migrationprocedure/troubleshooting#policies-update-fails-on-windows-11-epp-client-code-signature-verification-error) for the full certificate chain (including intermediate and timestamping certificates) and thumbprints to import.
:::

## Instructions

1. To verify if the required GlobalSign root certificate is present, navigate to `Program Files\Cososys\EPPNotifier.exe`.
2. Right-click **EPPNotifier.exe** and select **Properties**.
3. Navigate to the **Digital Signatures** tab and select the certificate then click **Details**.  
   ![Viewing digital signature details for EPPNotifier.exe](./../0-images/ka0Qk000000ETF3_0EMQk00000C8rxt.png)
4. If the GlobalSign root certificate is missing, download it from the official GlobalSign website:  
   GlobalSign Root Certificates ⸱ GlobalSign ↗️  
   https://support.globalsign.com/ca-certificates/root-certificates/globalsign-root-certificates
5. Search for the certificate named **GlobalSign Root R3** then download and install it in the **Trusted Root Certification Authorities** store.
6. If required, check for the **GlobalSign Code Signing Root R45** certificate in the certificate store:  
   ![Checking for GlobalSign Code Signing Root R45 in certificate store](./../0-images/ka0Qk000000ETF3_0EMQk00000C8rLD.png)
7. For digital signature time-stamping, ensure the **DigiCert Assured ID Root CA** certificate (valid until 10 November 2031, thumbprint `0563B8630D62D75ABBC8AB1E4BDFB5A899B24D43`) is trusted. Download it from:  
   DigiCert Root Certificates ⸱ DigiCert ↗️  
   https://www.digicert.com/kb/digicert-root-certificates.htm

## Related Links

- GlobalSign Root Certificates ⸱ GlobalSign ↗️  
  https://support.globalsign.com/ca-certificates/root-certificates/globalsign-root-certificates
- DigiCert Root Certificates ⸱ DigiCert ↗️  
  https://www.digicert.com/kb/digicert-root-certificates.htm
