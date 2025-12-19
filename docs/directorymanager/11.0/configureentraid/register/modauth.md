---
title: "Certificate for Modern Authentication"
description: "Certificate for Modern Authentication"
sidebar_position: 30
---

# Certificate for Modern Authentication

While configuring GroupID application in Microsoft Entra ID you must provide a certificate. You can
generate this certificate using GroupID PowerShell or any other third-party application.

To generate a certificate using GroupID PowerShell:

1. Login to GroupID server and run GroupID PowerShell as an administrator.
2. Run the following command:

    ```
       $mycert = New-SelfSignedCertificate -DnsName "contoso.org" -CertStoreLocation "cert:\LocalMachine\My" -NotAfter (Get-Date).AddYears(1) -KeySpec KeyExchange
       $mycert | Export-Certificate -FilePath c:\mycert.cer
    ```

    ![GroupID PowerShell Command ](/images/directorymanager/11.0/configureentraid/register/modern_auth_command.webp)

    The generated certificate will be saved at the root level of Drive C:.

    In Microsoft Entra Admin Center portal, while configuring the GroupID application, upload this
    certificate using the Certificate & secrets node.

    ![certificates_n_secrets](/images/directorymanager/11.0/configureentraid/register/certificates_n_secrets.webp)

    On the **Upload certificate** page:

    1. Click browse to select the generated certificate, mycert.cer, from Drive C.
    2. Provide a brief description for the certificate in the **Description** box.
    3. Click **Add**.

3. After uploading the certificate successfully, Certificate Thumbprint is displayed. Copy it and
   keep it safe.

    ![Generated Thumbprint ](/images/directorymanager/11.0/configureentraid/register/thumbprint.webp)

    The certificate Thumbprint will be used:

    - While creating a Microsoft Entra ID identity store (on the Identity Store Details page of new
      identity store creation wizard).
    - On the Messaging System page in identity store properties when Exchange Online/Office 365 is
      set as a messaging provider.
    - In Synchronize, in a Synchronize job, when you select AD as destination, and Office 365 as a
      messaging provider on the Sync Object page, you must provide the certificate Thumbprint.

## Verify Modern Authentication

You can test Modern Authentication from GroupID Powershell in your tenant. First, verify that
Exchange Online module is installed on your GroupID server using the following cmdlet:

```
Get-InstallModule -name exchangeonlinemanagement
```

Connect to Exchange Online using the cmdlet shown below and fetch some data:

NOTE: For that you need Certificate Thumbprint and Application ID of the registered app.

```
Connect-ExchangeOnline -certificateThumbprint Thumbprint -AppId App ID -organization organization name
```

To disconnect the Exchange Online session, use the following cmdlet:

```
Disconnect-ExchangeOnline
```

After this verification process, you can use the certificate Thumbprint in GroupID.

See Also

- [Registration and Permissions Assignment](/docs/directorymanager/11.0/configureentraid/register/appregister.md)
