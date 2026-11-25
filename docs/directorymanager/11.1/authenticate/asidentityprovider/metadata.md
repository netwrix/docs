---
title: "Set Directory Manager Default Issuer URL and Certificate"
description: "Set the default issuer URL and signing certificate that Directory Manager provides to service providers for single sign-on."
keywords:
  - Directory Manager issuer URL
  - SAML signing certificate
  - identity provider metadata
  - Directory Manager Authenticate settings
  - PFX certificate upload
  - load balancer base URL
sidebar_position: 20
---

# Set Directory Manager Default Issuer URL and Certificate

You can specify default values for the following Directory Manager metadata:

- Issuer URL
- Signing certificate

## Specify the default issuer URL

The Base URL box on the **Settings** page holds the default issuer URL. You might change it to a subdomain URL or a load balancer URL.

To specify the default issuer URL:

1. In Directory Manager Authenticate, go to the **Settings** tab.
2. Replace or update the URL in the Base URL box, and click **Save**.

   The Base URL box displays the default issuer URL. The Provider Issuer box on the Create Application page also displays it. See the [Directory Manager Metadata for Service Provider Configurations](register.md#directory-manager-metadata-for-service-provider-configurations) topic.

## Update the default signing certificate

The Signing Certificate box on the **Settings** page displays the Directory Manager certificate created in IIS, along with its private key. The Provider Signing Certificate box on the Create Application page also displays this certificate, without the private key. See the [Directory Manager Metadata for Service Provider Configurations](register.md#directory-manager-metadata-for-service-provider-configurations) topic.

You can use this certificate, or create a custom certificate and use that in third-party applications.

To update the default signing certificate:

1. In Directory Manager Authenticate, go to the **Settings** tab.
2. To use another certificate, do the following:

   1. Create your custom certificate and export it to a PFX file.
   2. On the **Settings** page, click **Upload PFX**.
   3. On the Import Windows Exported Certificate File dialog box, click **Browse** to select the exported certificate file. Because the file is password-protected, enter the password and click **Load Certificate File**.
   4. Click **Save**.

The new certificate is displayed in the Signing Certificate box on the **Settings** page and also on the Create Application page.
