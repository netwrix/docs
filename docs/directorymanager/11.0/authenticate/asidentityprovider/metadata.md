---
title: "Specify Default Metadata Values"
description: "Specify Default Metadata Values"
sidebar_position: 20
---

# Specify Default Metadata Values

You can specify default values for the following GroupID metadata:

- Issuer URL
- Signing certificate

## Specify the Default Issuer URL

1. In GroupID Authenticate, go to the **Settings** tab.
2. On the **Settings** page, the **Base URL** box displays the default Issuer URL, which is
   displayed in the **Provider Issuer** box on the **Create Application** page. See the
   [GroupID Metadata for Service Provider Configurations](/docs/directorymanager/11.0/authenticate/asidentityprovider/register.md#groupid-metadata-for-service-provider-configurations)
   topic.  
   You may want to change the default base/Issuer URL for any reason, for example, replace it with a
   sub-domain URL or a load balancer URL.  
   Replace or update the URL in the **Base URL** box and click **Save**.

## Update the Default Signing Certificate

1. In GroupID Authenticate, go to the **Settings** tab.
2. On the **Settings** page, the **Signing Certificate** box displays the GroupID certificate
   created in IIS. It displays the certificate along with the private key. This certificate is
   displayed in the **Provider Signing Certificate** box on the **Create Application** page, though
   without the private key. See the
   [GroupID Metadata for Service Provider Configurations](/docs/directorymanager/11.0/authenticate/asidentityprovider/register.md#groupid-metadata-for-service-provider-configurations)
   topic.  
   You may choose to use this certificate or create a custom certificate and use that in third-party
   applications.
3. To use another certificate, do the following:

    1. Create your custom certificate and export it to a PFX file.
    2. On the **Settings** page, click **Upload PFX**.
    3. On the **Import Windows Exported Certificate File** dialog box, click **Browse** to select
       the exported certificate file. As it is password protected, enter the password and click
       **Load Certificate File**.
    4. Click **Save**.

    The new certificate is displayed in the **Signing Certificate** box on the **Settings** page and
    also on the **Create Application** page.
