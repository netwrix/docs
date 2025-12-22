---
title: "Certificate for Entra ID Authentication"
description: "Certificate for Entra ID Authentication"
sidebar_position: 30
---

# Certificate for Entra ID Authentication

While configuring Directory Manager application in Microsoft Entra ID you must provide a certificate
for authentication. You can generate this certificate using Windows PowerShell or any other
third-party application.

## Generate a certificate

Run the following command on the Windows PowerShell prompt to generate a self-signed certificate.

```
$mycert = New-SelfSignedCertificate -DnsName "contoso.org" -CertStoreLocation "cert:\LocalMachine\My" -NotAfter (Get-Date).AddYears(1) -KeySpec KeyExchange
$mycert | Export-Certificate -FilePath c:\mycert.cer
```

The generated certificate will be saved at the root level of drive C: in .cer format.

Upload this certificate while registering the Microsoft Entra ID application. See the step 7 of the
[Registration and Permissions Assignment](/docs/directorymanager/11.1/configureentraid/register/appregister.md) topic.

## Export the certificate

The generated certificate in .pfx format will be used:

- While creating a Microsoft Entra ID identity store (on the Identity Store Details page of new
  identity store creation wizard). See the point # 6 the
  [Create an Identity Store for Microsoft Entra ID](/docs/directorymanager/11.1/admincenter/identitystore/create.md#create-an-identity-store-for-microsoft-entra-id)
  section of the [Create an Identity Store](/docs/directorymanager/11.1/admincenter/identitystore/create.md) topic.
- On the Messaging System page in identity store properties when Exchange Online/Office 365 is set
  as a messaging provider.

Run the following command on the Windows PowerShell prompt to export the certificate into .pfx
format.

```
$mycert | Export-PfxCertificate -FilePath c:\mycert.pfx -Password $(ConvertTo-SecureString -String "P@ssw0Rd1234" -AsPlainText -Force)
```

The certificate will be saved on the root of drive c in .pfx format.
