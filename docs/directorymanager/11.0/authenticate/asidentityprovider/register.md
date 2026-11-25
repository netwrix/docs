---
title: "Register a SAML Service Provider in Directory Manager"
description: "Create an application in Directory Manager Authenticate to register a third-party service provider and copy the metadata it needs."
keywords:
  - Directory Manager SAML application
  - register service provider
  - identity provider metadata
  - SAML claims and response signing
  - single logout URL
  - assertion encryption
sidebar_position: 10
---

# Register a SAML Service Provider in Directory Manager

To register a service provider in Directory Manager, you have to create an application for the
provider in Directory Manager.

Next, when you configure Directory Manager in the service provider, you have to provide Directory
Manager metadata. You can copy metadata values and paste them in the service provider.

## Create an Application for a Service Provider in Directory Manager

1. In Directory Manager Authenticate, go to the **SAML Applications** tab and click **New Application**.
2. On the **Create Application** page, enter a name for the application in the **Name** box. The
   application is displayed on the Directory Manager Login page with this name.
3. Copy the consumer URL from the service provider and enter it in the **Consumer URL** box.
4. Copy the audience URL from the service provider and enter it in the **Entity ID/Audience** box.
5. From the **Identity store** dropdown list, select the identity store to use for authenticating
   users.  
   For single sign-on, third-party application users must authenticate through an identity store
   defined in Directory Manager. For example, to authenticate users through Active Directory, select an
   AD-based identity store.
6. Next, specify an attribute as a claim. Service provider application users are authenticated in
   Directory Manager based on this attribute.  
   Enter the attribute name in the **Claims** box. As you type, the system displays the attributes
   in the selected identity store that start with the text. Select the required attribute.  
   Directory Manager matches the value of this attribute in the application and in the identity
   store for authentication.
7. Click **Browse** under **Identity Provider Image** to upload an image for the application, such
   as the application logo.

    :::note
    Supported image formats: .jpg, .bmp, .webp, and .gif  
    Image file dimensions: 210 x 60 pixels
    :::

Specify advanced settings for the application:

8. Expand the **Advanced** section by clicking the down arrowhead.
9. Select _Enabled_ or _Disabled_ in the **Response Signing** dropdown list, depending on whether
   it is enabled or disabled in the service provider.
10. Select a response signing method from the **Response Signing Method** dropdown list. This
    method should be the same for the identity provider (Directory Manager) and the service provider
    (third-party application).
11. Select _Post_ or _Redirect_ in the **Response Binding** dropdown list, depending on how the
    service provider accepts the response.
12. If you aren't using assertion encryption, ensure _Disabled_ is selected in the **Assertion
    Encryption** dropdown list.  
    To use assertion encryption as an advanced security feature, select **Enabled**. Then provide
    the certificate, key transport algorithm, and encryption algorithm to encrypt the response.
13. Generate a logout URL in the service provider and enter it in the **Single Logout URL** box.
    When a user clicks this URL, the user is signed out of all applications that have been
    authenticated through Directory Manager (that is, applications the user has signed in to through
    Directory Manager single sign-on).
14. Provide the Directory Manager metadata in the service provider to register Directory Manager as
    an identity provider in it. See the
    [Directory Manager Metadata for Service Provider Configurations](#groupid-metadata-for-service-provider-configurations)
    topic.
15. Click **Create Application** to create the service provider in Directory Manager.

### Directory Manager Metadata for Service Provider Configurations {#groupid-metadata-for-service-provider-configurations}

As part of registering an application in Directory Manager, you also have to provide Directory
Manager metadata in the service provider.

To copy the metadata:

1. On the **Create Application** page, expand the **Metadata** section by clicking the down arrow
   head.
2. Copy the Issuer URL and Directory Manager certificate from the **Provider Issuer** and **Provider Signing
   Certificate** boxes and paste them in the service provider.
3. The **Provider IDP Redirect Endpoint** and **Provider IDP POST Endpoint** boxes both display
   URLs. Depending on how the service provider sends the request, copy the appropriate URL and paste
   it in the service provider.
4. The **Single Logout Endpoint POST** box displays a URL. Requests are posted to this URL to sign
   out of the current and all other third-party applications configured in Directory Manager.
5. The **Login URL** box displays a URL. Clicking it redirects the user to the Directory Manager
   Login page, where Directory Manager is acting as an identity provider. If the user is already
   signed in to Directory Manager, the user is auto-authenticated. Otherwise, the user must provide
   credentials.
