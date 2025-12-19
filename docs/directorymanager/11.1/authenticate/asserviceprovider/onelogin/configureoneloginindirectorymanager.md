---
title: "Configure OneLogin in Directory Manager"
description: "Configure Directory Manager In OneLogin"
sidebar_position: 30
---

# Configure the OneLogin Provider in Directory Manager

While creating the OneLogin provider in Directory Manager, you simply have to import the OneLogin
metadata file to configure all settings for it.

## Configure the Provider in Directory Manager

1. In Directory Manager Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Make sure the **Client** box displays the name of the Directory Manager client for which you
   generated the consumer URL and audience URL (see the [Generate URLs](/docs/directorymanager/11.1/authenticate/asserviceprovider/onelogin/generateurls.md) topic).  
   To continue with the example, select the Directory Manager portal named _Wizard_.

**Import the OneLogin metadata file:**

5. Click the **Import from Metadata** button under the **Advanced** section to import the OneLogin
   metadata file that you downloaded earlier. See the
   [Download the OneLogin Metadata File](configureinonelogin.md#download-the-onelogin-metadata-file)
   topic.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the PingOne metadata file. Then click **Upload**. With this, several fields on the **Create New
   Provider** page are automatically filled in. However, you still have to provide the Issuer URL
   and IDP Login URL.

**Provide Issuer URL and IDP Login URL:**

7. In the **Issuer** box, enter the issuer URL you copied from the SSO page in OneLogin. See step 15
   in the
   [Create an App for Directory Manager in OneLogin](configureinonelogin.md#create-an-app-for-directory-manager-in-onelogin)
   topic.
8. In the **IDP Login URL** box, enter the endpoint URL for the post method. You copied this URL
   earlier from the **SAML 2.0 Endpoint (HTTP)** box on the **SSO** page in OneLogin. See step 15 in
   the[Create an App for Directory Manager in OneLogin](configureinonelogin.md#create-an-app-for-directory-manager-in-onelogin)
   topic.

**Upload an image for the identity provider:**

9. When OneLogin is configured with a Directory Manager client, it will be available on the login
   page of that client (the Wizard portal in our example) for single sign-on. You can choose to
   display the OneLogin authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with OneLogin.

**Specify advanced settings:**

10. Expand the **Advanced** section on the **Create New Provider** page.
11. For _Disable GroupID Authentication_, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the OneLogin provider.
12. In the **Request Binding** drop-down list, select _POST_, since we used the endpoint URL for the
    post method in the **IDP Login URL** box.
13. We will not use the assertion encryption, so make sure _Disabled_ is selected in the **Assertion
    Encryption** drop-down list.
14. In the **Response Signing Method**drop-down list, select _RSA-SHA-256_, since we configured this
    method as the signing algorithm in the **SAML Signature Algorithm** list on the **SSO** page in
    OneLogin. See step 14 in
    the[Create an App for Directory Manager in OneLogin](configureinonelogin.md#create-an-app-for-directory-manager-in-onelogin)
    topic.
15. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.
