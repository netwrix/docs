---
title: "FSAA Provide Certificate Authority Configuration"
description: "Configure FSAA to use a custom Certificate Authority for HTTPS communication"
sidebar_position: 20
---

# FSAA Provide Certificate Authority Configuration

Configure the Netwrix Access Analyzer File System Access Analyzer (FSAA) data collector to use the
**Provide Certificate Authority** certificate exchange option. This option enables FSAA to issue and
manage client certificates using a user-supplied Certificate Authority (CA) provided in PFX format.

## Overview

FSAA supports multiple certificate exchange mechanisms to secure HTTPS communication between the
data collector and remote applets. Selecting **Provide Certificate Authority** allows FSAA to use a
custom CA to generate and sign client certificates dynamically.


## How Provide Certificate Authority Works

When **Provide Certificate Authority** is selected:

1. FSAA loads the provided CA certificate from a `.pfx` file.
2. FSAA generates client certificates and signs them using the supplied CA.
3. Generated certificates are stored securely by FSAA.
4. The FSAA applet presents its client certificate during HTTPS communication.
5. The data collector validates the certificate and establishes a secure connection.

## Certificate Requirements

The CA certificate must meet the following requirements:

- PFX (PKCS#12) format
- Exportable private key
- **Basic Constraints:** `CA=TRUE`
- **Key Usage:** certificate signing (`CertSign`)
- Certificate is within its valid date range
- PFX file is not password-protected

:::note
FSAA cannot load password-protected PFX files.
:::

## Creating the CA Certificate

Create a compliant CA certificate using any supported certificate management tool.

### Option 1 – Using FSAACertificateManager.exe

**Path:**  
`%SAInstallDir%\PrivateAssemblies\FILESYSTEMACCESS\Applet\FSAACertificateManager.exe`

```
FSAACertificateManager.exe -createCertificate \
  -subjectDN "CN=My FSAA Certificate Authority" \
  -purpose CertificateAuthority \
  -days 3650 \
  -outputPath C:\Certificates \
  -name MyFSAA_CA
```

### Option 2 – PowerShell

```
$caParams = @{
    Type              = "Custom"
    Subject           = "CN=FSAA Certificate Authority"
    KeySpec           = "Signature"
    KeyExportPolicy   = "Exportable"
    KeyUsage          = "CertSign"
    KeyUsageProperty  = "Sign"
    NotAfter          = (Get-Date).AddYears(10)
    HashAlgorithm     = "SHA256"
    KeyLength         = 2048
    CertStoreLocation = "Cert:\CurrentUser\My"
    TextExtension     = @("2.5.29.19={text}ca=TRUE&pathlength=0")
}

$caCert = New-SelfSignedCertificate @caParams
$caCert | Export-PfxCertificate -FilePath "C:\Certificates\FSAA_CA.pfx"
Remove-Item -Path "Cert:\CurrentUser\My\$($caCert.Thumbprint)" -Force
```

## Configuring FSAA to Use the CA Certificate

1. Open the **FSAA Data Collector Wizard** in Access Analyzer.
2. Go to **Applet Configuration**.
3. Select **Provide Certificate Authority** under **Certificate Exchange Options**.
4. Select the CA `.pfx` file.
5. Complete the wizard.
