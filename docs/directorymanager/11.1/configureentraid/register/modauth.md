---
title: "Generate a Certificate for Entra ID Authentication"
description: "Generate a self-signed certificate with PowerShell and export it to .pfx for Directory Manager authentication with Microsoft Entra ID."
keywords:
  - self-signed certificate
  - New-SelfSignedCertificate
  - PFX export
  - Entra ID authentication
sidebar_position: 30
---

# Generate a Certificate for Entra ID Authentication

When you configure the Directory Manager application in Microsoft Entra ID, you must provide a certificate for authentication. You can generate this certificate with Windows PowerShell or any other third-party application.

## Generate a certificate

To generate a self-signed certificate, run the following command at the Windows PowerShell prompt.

```
$mycert = New-SelfSignedCertificate -DnsName "contoso.org" -CertStoreLocation "cert:\LocalMachine\My" -NotAfter (Get-Date).AddYears(1) -KeySpec KeyExchange
$mycert | Export-Certificate -FilePath c:\mycert.cer
```

The generated certificate is saved at the root level of drive C: in .cer format.

Upload this certificate when you register the Microsoft Entra ID application. For more information, see step 7 of the [Register Directory Manager in Microsoft Entra ID](/docs/directorymanager/11.1/configureentraid/register/appregister.md) topic.

## Export the certificate

You use the generated certificate in .pfx format in these places:

- When you create a Microsoft Entra ID identity store, on the Identity Store Details page of the new identity store creation wizard. For more information, see point # 6 in the [Create an Identity Store for Microsoft Entra ID](/docs/directorymanager/11.1/admincenter/identitystore/create.md#create-an-identity-store-for-microsoft-entra-id) section of the [Create an Identity Store in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/create.md) topic.
- On the Messaging System page in the identity store properties, when Exchange Online/Office 365 is set as the messaging provider.

To export the certificate to .pfx format, run the following command at the Windows PowerShell prompt.

```
$mycert | Export-PfxCertificate -FilePath c:\mycert.pfx -Password $(ConvertTo-SecureString -String "P@ssw0Rd1234" -AsPlainText -Force)
```

The certificate is saved at the root of drive C: in .pfx format.
