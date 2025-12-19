---
title: "Configure Okta in Directory Manager"
description: "Configure Directory Manager In Okta"
sidebar_position: 30
---

# Configure the Okta Provider In Directory Manager

While creating the Okta provider in Directory Manager, you simply have to import the Okta metadata
file to configure all settings for this identity provider.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Make sure the **Client** box displays the name of the Directory Manager client for which you
   generated the Entity ID/Audience URL and provided that while creating the Directory Manager
   application in Okta.
5. While creating the Directory Manager application in Okta, we downloaded a metadata file. See the
   [Download the Okta Metadata File](configureinokta.md#download-the-okta-metadata-file) topic.  
   To import this file, click the **Import from Metadata** button under the **Advanced** section.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the Okta metadata file downloaded earlier. Then click **Upload**. With this, several fields on
   the **Create New Provider** page are automatically filled in.
7. When Okta is configured with a Directory Manager client, it will be available on the login page
   of that client (the Wizard portal in our example) for single sign-on. You can choose to display
   the Okta authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with Okta.
8. Expand the **Advanced** section on the **Create New Provider** page.  
   View the settings and leave them to defaults.
9. For _Disable GroupID Authentication_, see step 2 in the
   [Specify Advanced Configurations](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#specify-advanced-configurations)
   topic. Replace references to AD FS with the Okta provider.
10. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.
