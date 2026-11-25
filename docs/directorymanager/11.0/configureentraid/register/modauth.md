---
title: "Generate a Certificate for Modern Authentication"
description: "Generate a self-signed certificate with GroupID PowerShell, upload it to Microsoft Entra ID, and verify modern authentication."
keywords:
  - self-signed certificate
  - New-SelfSignedCertificate
  - certificate thumbprint
  - modern authentication
  - Connect-ExchangeOnline
sidebar_position: 30
---

# Generate a Certificate for Modern Authentication

When you configure the Directory Manager application in Microsoft Entra ID, you must provide a
certificate. You can generate this certificate using GroupID PowerShell or any other third-party
application.

To generate a certificate using GroupID PowerShell:

1. Sign in to the Directory Manager server and run GroupID PowerShell as an administrator.
2. Run the following command:

    ```
       $mycert = New-SelfSignedCertificate -DnsName "contoso.org" -CertStoreLocation "cert:\LocalMachine\My" -NotAfter (Get-Date).AddYears(1) -KeySpec KeyExchange
       $mycert | Export-Certificate -FilePath c:\mycert.cer
    ```

    ![GroupID PowerShell window showing the commands that generate the certificate](/images/directorymanager/11.0/configureentraid/register/modern_auth_command.webp)

    The generated certificate is saved at the root level of drive C:.

    In the Microsoft Entra Admin Center, while configuring the Directory Manager application, upload
    this certificate using the Certificates & secrets node.

    ![Certificates and secrets page with the Upload certificate option](/images/directorymanager/11.0/configureentraid/register/certificates_n_secrets.webp)

    On the **Upload certificate** page:

    1. Click **Browse** to select the generated certificate, mycert.cer, from drive C.
    2. Provide a brief description for the certificate in the **Description** box.
    3. Click **Add**.

3. After the certificate uploads successfully, the certificate thumbprint is displayed. Copy it and
   keep it safe.

    ![Certificates list showing the generated certificate thumbprint](/images/directorymanager/11.0/configureentraid/register/thumbprint.webp)

    You use the certificate thumbprint:

    - When you create a Microsoft Entra ID identity store (on the Identity Store Details page of
      the new identity store creation wizard).
    - On the Messaging System page in the identity store properties when Exchange Online/Office 365
      is set as the messaging provider.
    - In a Synchronize job, when you select AD as the destination and Office 365 as the messaging
      provider on the Sync Object page, you must provide the certificate thumbprint.

## Verify Modern Authentication

You can test modern authentication from GroupID PowerShell in your tenant. First, verify that the
Exchange Online module is installed on your Directory Manager server using the following cmdlet:

```
Get-InstallModule -name exchangeonlinemanagement
```

Connect to Exchange Online using the cmdlet shown below and fetch some data:

:::note
For that you need the certificate thumbprint and Application ID of the registered app.
:::

```
Connect-ExchangeOnline -certificateThumbprint Thumbprint -AppId App ID -organization organization name
```

To disconnect the Exchange Online session, use the following cmdlet:

```
Disconnect-ExchangeOnline
```

After this verification process, you can use the certificate thumbprint in Directory Manager.

See Also

- [Register Directory Manager in Microsoft Entra ID](/docs/directorymanager/11.0/configureentraid/register/appregister.md)
