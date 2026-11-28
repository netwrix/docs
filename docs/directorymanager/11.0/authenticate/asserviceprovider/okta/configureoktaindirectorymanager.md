---
title: "Configure Okta as a SAML Provider in GroupID"
description: "Create the Okta SAML provider in GroupID by importing the Okta metadata file, so users can sign in with Okta single sign-on."
keywords:
  - Okta SAML provider
  - import Okta metadata file
  - Okta single sign-on
  - GroupID SAML provider
---

# Configure Okta as a SAML Provider in GroupID

When you create the Okta provider in GroupID, you import the Okta metadata file to
configure all settings for this identity provider.

## Configure the Provider in GroupID

1. In GroupID Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Ensure the **Client** box displays the name of the GroupID client for which you
   generated the Entity ID/Audience URL and provided it while creating the GroupID
   application in Okta.
5. While creating the GroupID application in Okta, you downloaded a metadata file. See the
   [Download the Okta Metadata File](/docs/directorymanager/11.0/authenticate/asserviceprovider/okta/configureinokta.md#download-the-okta-metadata-file)
   topic.  
   To import this file, click the **Import from Metadata** button under the **Advanced** section.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the Okta metadata file downloaded earlier. Then click **Upload**. Several fields on the **Create
   New Provider** page are then filled in automatically.
7. When Okta is configured with a GroupID client, it is available on the sign-in page of
   that client (the Wizard portal in this example) for single sign-on. You can display the Okta
   authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with Okta.
8. Expand the **Advanced** section on the **Create New Provider** page.  
   View the settings and leave them at their defaults.
9. For _Disable GroupID Authentication_, see step 2 in the
   [Specify Advanced Configurations](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#specify-advanced-configurations)
   topic. Replace references to AD FS with Okta.
10. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.
