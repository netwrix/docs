---
title: "Azure Active Directory for User Credentials"
description: "Azure Active Directory for User Credentials"
sidebar_position: 60
---

# Azure Active Directory for User Credentials

The information in this topic applies to **Select Account Type** > **Azure Active Directory** in the
User Credentials window. This account type is for Microsoft Entra ID, formerly Azure Active
Directory.

![User Credentials Window - Azure Active Directory](/images/accessanalyzer/11.6/admin/settings/connection/profile/entraid.webp)

The required credentials for this account type are:

- Client ID – Application (client) ID of the Enterprise Auditor application registered with
  Microsoft Entra ID. See the
  [Identify the Client ID](/docs/accessanalyzer/11.6/requirements/entraid/entraid/access.md#identify-the-client-id)
  topic for additional information.
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/11.6/admin/settings/application/overview.md)
  topic for additional information.)
- Key – The required Key depends on the target environment the Connection Profile is being used for:

    - Entra ID – Client secret value for the Enterprise Auditor application registered with
      Microsoft Entra ID. See the
      [Generate the Client Secret Key](/docs/accessanalyzer/11.6/requirements/entraid/entraid/access.md#generate-the-client-secret-key)
      topic for additional information.
    - SharePoint Online – The comma delimited string containing the path to the certificate PFX
      file, certificate password, and the Microsoft Entra ID environment identifier (
      `CertPath,CertPassword,AzureEnvironment`). See the
      [SharePoint Online Credential for a Connection Profile using Modern Authentication](/docs/accessanalyzer/11.6/admin/datacollector/spaa/configurejob.md#sharepoint-online-credential-for-a-connection-profile-using-modern-authentication)topic
      for additional information.
