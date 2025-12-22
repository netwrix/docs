---
title: "Exchange Online Auditing Configuration"
description: "Exchange Online Auditing Configuration"
sidebar_position: 10
---

# Exchange Online Auditing Configuration

It is necessary to register Access Analyzer as a web application to the targeted Microsoft Entra ID,
formerly Azure Active Directory, in order for Access Analyzer to scan the environment. This
generates the Client ID (App ID) and self-signed certificate (Certificate Thumbprint) needed for the
Connection Profile credentials and/or the Custom Attributes Import Wizard page. See
[Microsoft Support](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-reporting-api-prerequisites-azure-portal)
for assistance in configuring the Microsoft Entra ID web application.

:::note
A user account with the Global Administrator role is required to register an app with
Microsoft Entra ID.
:::


**Configuration Settings from the Registered Application**

The following settings are needed from your tenant once you have registered the application:

- Client ID – This is the Application (client) ID for the registered application
- Tenant name – This is the primary domain name of the Microsoft Entra tenant
- Certificate Thumbprint – This is thumbprint value of the certificate uploaded to the Microsoft
  Entra ID application

Configure Modern Authentication for Exchange Online using EX_RegisterAzureAppAuth Instant Job

Registering a Microsoft Entra ID application and provisioning it to grant permissions to Exchange
Online can be automated using the EX_RegisterAzureAppAuth job from the Access Analyzer Instant Job
Library. The EX_RegisterAzureAppAuth job uses the PowerShell Data Collector to automatically
configure modern authentication for Exchange Online. It requires:

- A Connection Profile containing a Microsoft Entra ID Global Admin credential with an Account Type
  of **Task (Local)**
- Exchange Online Management v3.4.0

    - You can install this module with the following command:

        ```
        Install-Module -Name ExchangeOnlineManagement -RequiredVersion 3.4.0
        ```

- Azure AD PowerShell module installed on targeted hosts

    :::note
    If the module is not already installed, the job will attempt to install it.
    :::


    - You can install the module with the following command:

        ```
        Install-Module AzureAD
        ```

    - TLS 1.2 is required for the Azure AD PowerShell module. Run the following command to configure
      it:

        ```
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        ```

- Microsoft Graph PowerShell module installed on targeted hosts

    - You can install the module with the following command:

        ```
        Install-Module Microsoft.Graph
        ```

See the
[EX_RegisterAzureAppAuth Job](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/ex_registerazureappauth.md)
topic for additional information.

## Prerequisites

The following prerequisites are required to use Modern Authentication for Exchange Online in Access
Analyzer.

- Exchange Online Management v3.4.0

    - You can install this module with the following command:

        ```
        Install-Module -Name ExchangeOnlineManagement -RequiredVersion 3.4.0
        ```

- Create a self-signed certificate that will be used by Access Analyzer for Modern Authentication

## Permissions

The following permissions are required:

**Permissions for Office 365 Exchange Online**

- Application Permissions:

    - Exchange.ManageAsApp – Manage Exchange As Application
    - full_access_as_app – Use Exchange Web Services with full access to all mailboxes

- Exchange Administrator role assigned to the registered application's service principal

## Create Self–Signed Certificate

A self signed certificate needs to be created on the Access Analyzer console server. This is used by
Access Analyzer to connect to the Microsoft Entra tenant.

Follow the steps create the self-signed certificate.

**Step 1 –** To generate a certificate, use the sample PowerShell command below:

- Change the following parameters in the sample PowerShell command. See the Microsoft
  [New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pki/new-selfsignedcertificate)
  article for additional information.

    - DNS Name – Specifies a DNS name to put into the subject alternative name extension of the
      certificate
    - Subject – A unique name for the new App (always starts with CN=, to denote a canonical name)
    - FriendlyName – Same as Subject name minus the canonical name prefix
    - NotAfter – A datetime string denoting the certificate's expiration date - in the above sample,
      Get-Date.AddYears(11) specifies that the certificate will expire 11 years from the current
      datetime

Example PowerShell:

```
$cert=New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -DnsName stealthbits.com -Subject "CN=NEA Exchange Online" -FriendlyName "NEA Exchange Online" -KeyAlgorithm RSA -KeyLength 2048 -KeyExportPolicy Exportable -Provider "Microsoft Enhanced RSA and AES Cryptographic Provider" -NotAfter (Get-Date).AddYears(11)
```

**Step 2 –** Export the certificate public key as a .cer file to the PrivateAssemblies folder in
Access Analyzer with the Export–Certificate cmdlet using the certificate path stored in the
$certPath variable (see Step 1).

:::note
The environment variable `SAINSTALLDIR` always points to the base Access Analyzer install
directory; simply append the PrivateAssemblies to point to that folder with the following cmdlet:
:::


```
Export-Certificate -Cert $cert -FilePath "$($env:SAINSTALLDIR)PrivateAssemblies\exchange_cert.cer" -Type CERT
```

- See the Microsoft
  [Export-Certificate](https://docs.microsoft.com/en-us/powershell/module/pki/export-certificate)
  article for additional information.

**Step 3 –** Export the certificate private key as a .pfx file to the same folder by running the
following cmdlet:

:::info
Change the string in the Password parameter from "PasswordGoesHere" to something
more secure before running this cmdlet.
:::


```
Export-PfxCertificate -Cert $cert -FilePath "$($env:SAINSTALLDIR)PrivateAssemblies\exchange_cert.pfx" -Password (ConvertTo-SecureString -String "PasswordGoesHere" -Force -AsPlainText)
```

- See the Microsoft
  [Export-PfxCertificate](https://docs.microsoft.com/en-us/powershell/module/pki/export-pfxcertificate)
  article for additional information.

The self signed certificate has been created. The next steps are to create a Microsoft Entra ID
application and then upload this certificate to it.

## Register a Microsoft Entra ID Application

Follow the steps to register Access Analyzer with Microsoft Entra ID.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Applications** and click App
registrations.

**Step 3 –** In the top toolbar, click **New registration**.

**Step 4 –** Enter the following information in the Register an application page:

- Name – Enter a user-facing display name for the application, for example Netwrix Access Analyzer
  (formerly Enterprise Auditor) for Exchange
- Supported account types – Select **Accounts in this organizational directory only**

**Step 5 –** Click **Register**.

The Overview page for the newly registered app opens. Review the newly created registered
application. Now that the application has been registered, permissions need to be granted to it.

## Upload Self-Signed Certificate

Follow the steps upload your self-signed certificate.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** On the registered app blade, click **Certificates & secrets** in the Manage section.

**Step 3 –** Select the Certificates tab.

**Step 4 –** In the tool bar, click **Upload Certificate**.

**Step 5 –** Navigate to the to PrivateAssemblies folder and select the `exchange_cert.cer` file.
Optionally add a Description.

**Step 6 –** Click **Add**.

The Certificate Thumbprint of this uploaded certificate is needed for the Access Analyzer Connection
Profile. See the
[Exchange Modern Authentication for User Credentials](/docs/accessanalyzer/12.0/admin/settings/connection/create/exchangemodernauth.md)
topic for additional information.

## Grant Permissions to the Registered Application

Follow the steps to grant permissions to the registered application.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** On the registered app blade, click **API permissions** in the Manage section.

**Step 3 –** In the top toolbar, click **Add a permission**.

**Step 4 –** On the Request API permissions blade, use the search bar on the APIs my organization
uses tab to find and select Office 365 Exchange Online. Select the following permissions:

- Application Permissions:

    - Exchange.ManageAsApp – Manage Exchange As Application
    - full_access_as_app – Use Exchange Web Services with full access to all mailboxes

- Exchange Administrator role assigned to the registered application's service principal

**Step 5 –** At the bottom of the page, click **Add Permissions**.

**Step 6 –** Click **Grant Admin Consent for [tenant]**. Then click **Yes** in the confirmation
window.

Now that the permissions have been granted to it, the Connection Profile and host settings for
Access Analyzer need to be collected.

## Identify the Tenant's Name

Follow the steps to find the Tenant Name where the registered application resides.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** On the left navigation menu, navigate to **Identity** > **Settings** and click **Domain
names** to open the Custom domain names list.

**Step 3 –** Copy the domain name from the list of domains.

**Step 4 –** Save this value in a text file.

This is needed for the Access Analyzer Connection Profile. See the
[Exchange Modern Authentication for User Credentials](/docs/accessanalyzer/12.0/admin/settings/connection/create/exchangemodernauth.md)
topic for additional information. Next identify the application’s Client ID.

## Identify the Client ID

Follow the steps to find the registered application's Client ID.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** Select the newly-created, registered application. If you left the Overview page, it
will be listed in the **Identity** > **Applications** > **App registrations** > **All applications**
list.

**Step 2 –** Copy the **Application (client) ID** value.

**Step 3 –** Save this value in a text file.

This is needed for the Access Analyzer Connection Profile. See the
[Exchange Modern Authentication for User Credentials](/docs/accessanalyzer/12.0/admin/settings/connection/create/exchangemodernauth.md)
topic for additional information.
