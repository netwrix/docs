---
title: "Configure the PingOne Provider in Directory Manager"
description: "Create a PingOne SAML provider in Directory Manager by importing the PingOne metadata file and setting the signing and binding options."
keywords:
  - Directory Manager PingOne provider
  - import PingOne metadata
  - create PingOne SAML provider
  - PingOne request binding
  - PingOne response signing method
sidebar_position: 30
---

# Configure the PingOne Provider in Directory Manager

When you create the PingOne provider in Directory Manager, you import the PingOne
metadata file to configure all settings for this identity provider.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Ensure the **Client** box displays the name of the Directory Manager client for which you
   generated the consumer URL and the Directory Manager metadata file (see the
   [Generate the Consumer URL and Metadata File for PingOne](/docs/directorymanager/11.2/authenticate/asserviceprovider/pingone/generatemetadata.md) topic).  
   To continue with the example, select the Directory Manager portal named _Wizard_.
5. Click the **Import from Metadata** button under the **Advanced** section to import the PingOne
   metadata file.
6. On the **Import Settings from IDP Provided Metadata file** dialog box, click **Browse** to select
   the PingOne metadata file you downloaded earlier. Then click **Upload**. Several fields on
   the **Create New Provider** page are then filled in automatically.
7. After you configure PingOne with a Directory Manager client, PingOne appears on the sign-in
   page of that client (such as the Wizard portal) for single sign-on. You can choose to
   display the PingOne authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.2/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with PingOne.
8. Expand the **Advanced** section on the **Create New Provider** page.
9. The **Response Signing Method** box displays _RSA-SHA-256_ as the signing method type. This
   method is configured as the signing algorithm in PingOne.
10. For **Disable Directory Manager Authentication**, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.2/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the PingOne provider.
11. In the **Request Binding** list, select _POST_, because the **Single Logout Binding Type** is set
    to _Post_ in PingOne.
12. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.
