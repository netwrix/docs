---
description: >-
  Instructions to replace an expired certificate used by Netwrix Access Analyzer
  to restore SharePoint Online auditing, including creating/uploading
  certificates and updating the connection profile.
keywords:
  - SharePoint Online
  - expired certificate
  - Netwrix Access Analyzer
  - certificate upload
  - .pfx
  - App Registration
  - Azure
  - connection profile
products:
  - access-analyzer
sidebar_label: Expired Certificate Prevents SharePoint Online Aud
tags:
  - sharepoint-online-integration
title: "Expired Certificate Prevents SharePoint Online Auditing"
knowledge_article_id: kA0Qk00000023UrKAI
---

# Expired Certificate Prevents SharePoint Online Auditing

## Symptom

The certificate used by Netwrix Access Analyzer (formerly Enterprise Auditor) to audit SharePoint Online has expired. Until the certificate is updated, auditing operations may fail or be interrupted.

## Cause

The certificate required for secure communication between Netwrix Access Analyzer and SharePoint Online has reached its expiration date and is no longer valid.

## Resolution

1. Create a new certificate for Netwrix Access Analyzer and SharePoint Online. You can obtain this certificate from your organization's Certificate Authority or generate a self-signed certificate.

   > **NOTE:** The following article provides instructions for creating a self-signed certificate: How to Create a Self-Signed Certificate for SharePoint Online Access.

2. Verify that both the `.cert` and `.pfx` files are located in the `%SAInstallDir%\PrivateAssemblies` folder.
   - If you are using a custom certificate from a Certificate Authority, move both the `.cert` and `.pfx` files to this location.

3. In the Azure Admin Portal, navigate to the App Registration used by Netwrix Access Analyzer for auditing SharePoint Online.

4. On the **Certificates & secrets** tab, select **Upload certificate** and upload the new `.cert` file.

5. In the Netwrix Access Analyzer Console, navigate to **Settings > Connection** and edit the key in the Connection Profile used by the SharePoint Online jobs using the following format: `CertLocation,CertPassword,NumericDesignator`.

   - **Numeric Designator:** 0 is the default; use 1 for pre-production environments, 2 for China, 3 for Germany, and 4 for US Government.
   - **Example:** `C:\Program Files (x86)\STEALTHbits\StealthAUDIT\PrivateAssemblies\spaa_cert_tenant.pfx,YourPasswordHere,0`

   > **NOTE:** It may be helpful to create this string in a text file and then copy it into the key field of the connection profile.

6. Save the updated connection profile. The certificate is now updated for SharePoint Online auditing with Netwrix Access Analyzer.

## Related Link

- How to Create a Self-Signed Certificate for SharePoint Online Access
