---
title: "SharePoint Online Access & Sensitive Data Auditing Configuration"
description: "SharePoint Online Access & Sensitive Data Auditing Configuration"
sidebar_position: 10
---

# SharePoint Online Access & Sensitive Data Auditing Configuration

Netwrix Access Analyzer (formerly Enterprise Auditor) uses Modern Authentication to execute Access
Auditing (SPAA) and/or Sensitive Data Discovery Auditing scans for the target SharePoint Online &
OneDrive for Business environments. This involves creating and defining a Microsoft Entra
ID application for app–only access to SharePoint Online.

:::note
A user account with the Global Administrator role is required to register an app with
Microsoft Entra ID.
:::


**Configuration Settings from the Registered Application**

The following settings are needed from your tenant once you have registered the application:

- Client ID – This is the Application (client) ID for the registered application
- Key – The comma delimited string containing the path to the certificate PFX file, certificate
  password, and the Microsoft Entra ID environment identifier (
  `CertPath,CertPassword,AzureEnvironment`)

Configure Modern Authentication for SharePoint Online using SP_RegisterAzureAppAuth Instant Job

Registering a Microsoft Entra ID application and provisioning it to grant permissions to SharePoint
Online can be automated using the SP_RegisterAzureAppAuth job from the Access Analyzer Instant Job
Library. The SP_RegisterAzureAppAuth job uses the PowerShell Data Collector to automatically
configure modern authentication for SharePoint Online. It requires:

- A Connection Profile containing the following two user credentials, both with an Account Type of
  **Task (Local)**:

    - Microsoft Entra ID Global Admin credential
    - A credential with the username `newapp` that contains the password for the new application

- Microsoft Graph API PowerShell module to be installed on targeted hosts

See the
[SP_RegisterAzureAppAuth Job](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/sp_registerazureappauth.md)
topic for additional information.

## Permissions

The following permissions are required:

**Permissions for Microsoft Graph API**

- Application Permissions:

    - Application.Read.All – Read all applications
    - AuditLog.Read.All – Read all audit log data
    - Directory.Read.All – Read directory data
    - Domain.Read.All – Read domains
    - Files.Read.All – Read files in all site collections
    - GroupMember.Read.All – Read all group memberships
    - InformationProtectionPolicy.Read.All – Read all published labels and label policies for an
      organization
    - Member.Read.Hidden – Read all hidden memberships
    - Organization.Read.All – Read organization information
    - OrgContact.Read.All – Read organization contact
    - Policy.Read.All – Read your organization's policies
    - Policy.Read.ConditionalAccess – Read you organization's conditional access policies
    - Policy.Read.PermissionGrant – Read consent and permission grant policies
    - ServiceHealth.Read.All – Read service health
    - ServiceMessage.Read.All – Read service messages
    - Sites.Read.All – Read items in all site collections
    - Team.ReadBasic.All – Get a list of all teamss
    - TeamMember.Read.All – Read the members of all teams

- Delegated Permissions:

    - Group.Read.All – Read all groups
    - User.Read.All – Read all users' full profiles

**Permissions for Office 365 Management APIs**

- Application Permissions:

    - ActivityFeed.Read – Read activity data for your organization
    - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data
    - ServiceHealth.Read – Read service health information for your organization

**Permissions for SharePoint**

- Application Permissions:

    - Sites.FullControl.All – Have full control of all site collections
    - Sites.Read.All – Read items in all site collections
    - TermStore.Read.All – Read managed metadata
    - User.Read.All – Read user profiles

## Create Self–Signed Certificate

To configure the Entra ID Application for invoking SharePoint Online with an App Only access token,
create and configure a self–signed X.509 certificate. This certificate authenticates the application
against Entra ID while requesting the App Only access token. See the Microsoft
[Granting access via Azure AD App-Only](https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread)
article for additional information.

Follow the steps create the self-signed X.509 certificate.

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
$cert=New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -DnsName stealthbits.com -Subject "CN=StealthAUDIT SharePoint Auditor" -FriendlyName "StealthAUDIT SharePoint Auditor" -KeyAlgorithm RSA -KeyLength 2048 -KeyExportPolicy Exportable -Provider "Microsoft Enhanced RSA and AES Cryptographic Provider" -NotAfter (Get-Date).AddYears(11)
```

**Step 2 –** Export the certificate public key as a .cer file to the PrivateAssemblies folder in
Access Analyzer with the Export–Certificate cmdlet using the certificate path stored in the
$certPath variable (see Step 1).

:::note
The environment variable `SAINSTALLDIR` always points to the base Access Analyzer install
directory; simply append the PrivateAssemblies to point to that folder with the following cmdlet:
:::


```
Export-Certificate -Cert $cert -FilePath "$($env:SAINSTALLDIR)PrivateAssemblies\spaa_cert.cer" -Type CERT
```

- See the Microsoft
  [Export-Certificate](https://docs.microsoft.com/en-us/powershell/module/pki/export-certificate)
  article for additional information.

**Step 3 –** Export the certificate private key as a .pfx file to the same folder by running the
following cmdlet:

```
Export-PfxCertificate -Cert $cert -FilePath "$($env:SAINSTALLDIR)PrivateAssemblies\spaa_cert.pfx" -Password (ConvertTo-SecureString -String "PasswordGoesHere" -Force -AsPlainText)
```

:::info
Change the string in the Password parameter from "PasswordGoesHere" to something
more secure before running this cmdlet.
:::


- See the Microsoft
  [Export-PfxCertificate](https://docs.microsoft.com/en-us/powershell/module/pki/export-pfxcertificate)
  article for additional information.

## Register a Microsoft Entra ID Application

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
  (formerly Enterprise Auditor) Entra ID for SharePoint
- Supported account types – Select **Accounts in this organizational directory only**

**Step 5 –** Click **Register**.

The Overview page for the newly registered app opens. Review the newly created registered
application. Now that the application has been registered, permissions need to be granted to it.

## Upload Self-Signed Certificate

Follow the steps to provision the upload your self-signed certificate.

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

**Step 5 –** Navigate to the to PrivateAssemblies folder and select the `spaa_cert.cer` file.
Optionally add a Description.

**Step 6 –** Click **Add**.

The upload certificate public key .cer file is an application key credential.

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

**Step 4 –** On the Request API permissions blade, select **Microsoft Graph** on the Microsoft APIs
tab. Select the following permissions:

- Application Permissions:

    - Application.Read.All – Read all applications
    - AuditLog.Read.All – Read all audit log data
    - Directory.Read.All – Read directory data
    - Domain.Read.All – Read domains
    - Files.Read.All – Read files in all site collections
    - GroupMember.Read.All – Read all group memberships
    - InformationProtectionPolicy.Read.All – Read all published labels and label policies for an
      organization
    - Member.Read.Hidden – Read all hidden memberships
    - Organization.Read.All – Read organization information
    - OrgContact.Read.All – Read organization contact
    - Policy.Read.All – Read your organization's policies
    - Policy.Read.ConditionalAccess – Read you organization's conditional access policies
    - Policy.Read.PermissionGrant – Read consent and permission grant policies
    - ServiceHealth.Read.All – Read service health
    - ServiceMessage.Read.All – Read service messages
    - Sites.Read.All – Read items in all site collections
    - Team.ReadBasic.All – Get a list of all teamss
    - TeamMember.Read.All – Read the members of all teams

- Delegated Permissions:

    - Group.Read.All – Read all groups
    - User.Read.All – Read all users' full profiles

**Step 5 –** At the bottom of the page, click **Add Permissions**.

**Step 6 –** In the top toolbar, click **Add a permission**.

**Step 7 –** On the Request API permissions blade, select **Office 365 Management APIs** on the
Microsoft APIs tab. Select the following permissions:

- Application Permissions:

    - ActivityFeed.Read – Read activity data for your organization
    - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data
    - ServiceHealth.Read – Read service health information for your organization

**Step 8 –** At the bottom of the page, click **Add Permissions**.

**Step 9 –** In the top toolbar, click **Add a permission**.

**Step 10 –** On the Request API permissions blade, select **SharePoint** on the Microsoft APIs tab.
Select the following permissions:

- Application Permissions:

    - Sites.FullControl.All – Have full control of all site collections
    - Sites.Read.All – Read items in all site collections
    - TermStore.Read.All – Read managed metadata
    - User.Read.All – Read user profiles

**Step 11 –** At the bottom of the page, click **Add Permissions**.

**Step 12 –** Click **Grant Admin Consent for [tenant]**. Then click **Yes** in the confirmation
window.

Now that the permissions have been granted to it, the Connection Profile and host settings for
Access Analyzer need to be collected.

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
[Azure Active Directory for User Credentials](/docs/accessanalyzer/12.0/admin/settings/connection/create/entraid.md)
topic for additional information.
