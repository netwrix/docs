---
title: "Configure PingOne in Directory Manager"
description: "Configure Directory Manager In PingOne"
sidebar_position: 30
---

# Configure the PingOne Provider In Directory Manager

While creating the PingOne provider in Directory Manager, you simply have to import the PingOne
metadata file to configure all settings for this identity provider.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Make sure the **Client** box displays the name of the Directory Manager client for which you
   generated the consumer URL and the Directory Manager metadata file (see the
   [Generate the Consumer URL and Metadata File](/docs/directorymanager/11.1/authenticate/asserviceprovider/pingone/generatemetadata.md) topic).  
   To continue with the example, select the Directory Manager portal named _Wizard_.
5. Click the **Import from Metadata** button under the **Advanced** section to import the PingOne
   metadata file.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the PingOne metadata file downloaded earlier. Then click **Upload**. With this, several fields on
   the **Create New Provider** page are automatically filled in.
7. When PingOne is configured with a Directory Manager client, it will be available on the login
   page of that client (the Wizard portal in our example) for single sign-on. You can choose to
   display the PingOne authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with PingOne.
8. Expand the **Advanced** section on the **Create New Provider** page.
9. The **Response Signing Method** box displays _RSA-SHA-256_ as the signing method type. We
   configured this method as the signing algorithm in PingOne.
10. For _Disable GroupID Authentication_, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the PingOne provider.
11. In the **Request Binding** list, select _POST_, since the **Single Logout Binding Type** is set
    to _Post_ in PingOne.
12. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.
