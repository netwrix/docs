---
title: "Configure Okta as a SAML Provider in Directory Manager"
description: "Create the Okta SAML provider in Directory Manager by importing the Okta metadata file, so users can sign in with Okta single sign-on."
keywords:
  - Okta SAML provider
  - import Okta metadata file
  - Okta single sign-on
  - Directory Manager SAML provider
sidebar_position: 30
---

# Configure Okta as a SAML Provider in Directory Manager

When you create the Okta provider in Directory Manager, you import the Okta metadata file to configure all settings for this identity provider.

## Configure the provider in Directory Manager

1. In Directory Manager Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Ensure the **Client** box displays the name of the Directory Manager client. This is the client for which you generated the Entity ID/Audience URL and provided it while creating the Directory Manager application in Okta.
5. Click **Import from Metadata** under the **Advanced** section. This imports the metadata file you downloaded while creating the Directory Manager application in Okta. See the [Download the Okta metadata file](configureinokta.md#download-the-okta-metadata-file) topic.
6. In the **Import Settings from IDP Provided Metadata file** dialog box, click **Browse** to select the Okta metadata file downloaded earlier. Then click **Upload**. Several fields on the **Create New Provider** page are filled in automatically.
7. Display the Okta authentication option as an image or a button. When Okta is configured with a Directory Manager client, it is available on the sign-in page of that client (the Wizard portal in this example) for single sign-on. See the [Upload an Image for the Identity Provider](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#upload-an-image-for-the-identity-provider) topic for details, replacing references to AD FS with Okta.
8. Expand the **Advanced** section on the **Create New Provider** page. View the settings and leave them at their defaults.
9. For **Disable Directory Manager Authentication**, see step 2 in the [Specify Advanced Configurations](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#specify-advanced-configurations) topic. Replace references to AD FS with Okta.
10. Click **Create Provider**. Directory Manager creates the identity provider and displays it on the **SAML Providers** page.
