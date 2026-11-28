---
title: "Configure the OneLogin Provider in GroupID"
description: "Create the OneLogin SAML provider in GroupID by importing the OneLogin metadata file and entering the issuer and IdP login URLs."
keywords:
  - OneLogin SAML provider
  - import OneLogin metadata
  - Issuer URL and IDP Login URL
  - GroupID Authenticate provider
---

# Configure the OneLogin Provider in GroupID

When you create the OneLogin provider in GroupID, you import the OneLogin metadata file to
configure its settings.

## Configure the Provider in GroupID

1. In GroupID Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box.
4. Ensure the **Client** box displays the name of the GroupID client for which you
   generated the consumer URL and audience URL (see the
   [Generate Consumer and Audience URLs for OneLogin](/docs/directorymanager/11.0/authenticate/asserviceprovider/onelogin/generateurls.md)
   topic).  
   To continue with the example, select the GroupID portal named _Wizard_.

**Import the OneLogin metadata file:**

5. Click the **Import from Metadata** button under the **Advanced** section to import the OneLogin
   metadata file that you downloaded earlier. See the
   [Download the OneLogin Metadata File](/docs/directorymanager/11.0/authenticate/asserviceprovider/onelogin/configureinonelogin.md#download-the-onelogin-metadata-file)
   topic.
6. On the **Import Settings from IDP provided Metadata File** dialog box, click **Browse** to select
   the OneLogin metadata file. Then click **Upload**. Several fields on the **Create New Provider**
   page are filled in automatically. However, you still must provide the Issuer URL and IDP Login
   URL.

**Provide Issuer URL and IDP Login URL:**

7. In the **Issuer** box, enter the issuer URL you copied from the SSO page in OneLogin. See step 15
   in the
   [Create an App for GroupID in OneLogin](/docs/directorymanager/11.0/authenticate/asserviceprovider/onelogin/configureinonelogin.md#create-an-app-for-groupid-in-onelogin)
   topic.
8. In the **IDP Login URL** box, enter the endpoint URL for the post method. You copied this URL
   earlier from the **SAML 2.0 Endpoint (HTTP)** box on the **SSO** page in OneLogin. See step 15 in
   the
   [Create an App for GroupID in OneLogin](/docs/directorymanager/11.0/authenticate/asserviceprovider/onelogin/configureinonelogin.md#create-an-app-for-groupid-in-onelogin)
   topic.

**Upload an image for the identity provider:**

9. When OneLogin is configured with a GroupID client, it is available on the login page of
   that client (the _Wizard_ portal in this example) for single sign-on. You can choose to display
   the OneLogin authentication option as an image or a button. See the
   [Upload an Image for the Identity Provider](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#upload-an-image-for-the-identity-provider)
   topic for details, replacing references to AD FS with OneLogin.

**Specify advanced settings:**

10. Expand the **Advanced** section on the **Create New Provider** page.
11. {/* TODO: in 11.2 the UI label "Disable GroupID Authentication" became "Disable GroupID Authentication"; 11.0 keeps the GroupID label. */}For _Disable GroupID Authentication_, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the OneLogin provider.
12. In the **Request Binding** dropdown list, select _POST_ to use the endpoint URL for the post
    method in the **IDP Login URL** box.
13. Don't use assertion encryption. Ensure _Disabled_ is selected in the **Assertion Encryption**
    dropdown list.
14. In the **Response Signing Method** dropdown list, select _RSA-SHA-256_. This method is
    configured as the signing algorithm in the **SAML Signature Algorithm** list on the **SSO** page
    in OneLogin. See step 14 in the
    [Create an App for GroupID in OneLogin](/docs/directorymanager/11.0/authenticate/asserviceprovider/onelogin/configureinonelogin.md#create-an-app-for-groupid-in-onelogin)
    topic.
15. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.
