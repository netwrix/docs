---
title: "Specify Default Metadata Values"
description: "Specify Default Metadata Values"
sidebar_position: 20
---

# Specify Default Metadata Values

You can specify default values for the following Directory Manager metadata:

- Issuer URL
- Signing certificate

## Specify the Default Issuer URL

Follow the steps to specify the default Issuer URL.

Step 1 – In Directory Manager Authenticate, go to the Settings tab.

Step 2 – On the Settings page, the Base URL box displays the default Issuer URL, which is also
displayed in the Provider Issuer box on the Create Application page. See the
[Directory Manager Metadata for Service Provider Configurations](register.md#directory-manager-metadata-for-service-provider-configurations)
topic.  
You may want to change the default base/Issuer URL for any reason, for example, replace it with a
sub-domain URL or a load balancer URL.  
Replace or update the URL in the Base URL box and click **Save**.

## Update the Default Signing Certificate

Follow the steps to update the default signing certificate.

Step 1 – In Directory Manager Authenticate, go to the Settings tab.

Step 2 – On the Settings page, the Signing Certificate box displays the Directory Manager
certificate created in IIS. It displays the certificate along with the private key. This certificate
is also displayed in the Provider Signing Certificate box on the Create Application page, though
without the private key. See the
[Directory Manager Metadata for Service Provider Configurations](register.md#directory-manager-metadata-for-service-provider-configurations)
topic.  
You may choose to use this certificate or create a custom certificate and use that in third-party
applications.

Step 3 – To use another certificate, do the following:

1. Create your custom certificate and export it to a PFX file.
2. On the Settings page, click **Upload PFX**.
3. On the Import Windows Exported Certificate File dialog box, click **Browse** to select the
   exported certificate file. As it is password protected, enter the password and click **Load
   Certificate File**.
4. Click **Save**.

The new certificate is displayed in the Signing Certificate box on the Settings page and also on the
Create Application page.
