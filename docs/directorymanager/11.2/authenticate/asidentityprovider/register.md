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

To register a service provider in Directory Manager, create an application for the provider in Directory Manager.

Then, when you configure Directory Manager in the service provider, provide the Directory Manager metadata. You can copy the metadata values and paste them in the service provider.

## Create an application for a service provider

To create an application for a service provider in Directory Manager:

1. In Directory Manager Authenticate, go to the **SAML Applications** tab and click **New Application**.
2. On the Create Application page, enter a name for the application in the Name box. The application is displayed on the Directory Manager Login page with this name.
3. Copy the consumer URL from the service provider and enter it in the Consumer URL box.
4. Copy the audience URL from the service provider and enter it in the Entity ID/Audience box.
5. From the Identity store dropdown list, select the identity store to use for authenticating users.

   For single sign-on, third-party application users must authenticate through an identity store defined in Directory Manager. For example, to authenticate users through Active Directory, select an AD-based identity store.

6. Specify an attribute as a claim. Directory Manager authenticates service provider application users based on this attribute.

   Enter the attribute name in the Claims box. As you type, the system displays the attributes in the selected identity store that start with the text. Select the required attribute.

   Directory Manager matches the value of this attribute in the application and in the identity store for authentication.

7. Click **Browse** under Identity Provider Image to upload an image for the application, such as the application logo.

   :::note
   Supported image formats: .jpg, .bmp, .webp, and .gif  
   Image file dimensions: 210 x 60 pixels
   :::

8. Expand the Advanced section by clicking the down arrowhead to specify advanced settings for the application.
9. Select **Enabled** or **Disabled** in the Response Signing dropdown list, depending on whether it is enabled or disabled in the service provider.
10. Select a response signing method from the Response Signing Method dropdown list. This method should be the same for the identity provider (Directory Manager) and the service provider (third-party application).
11. Select **Post** or **Redirect** in the Response Binding dropdown list, depending on how the service provider accepts the response.
12. If you aren't using assertion encryption, ensure **Disabled** is selected in the Assertion Encryption dropdown list.

    To use assertion encryption as an advanced security feature, select **Enabled**. Then provide the certificate, key transport algorithm, and encryption algorithm to encrypt the response.

13. Generate a logout URL in the service provider and enter it in the Single Logout URL box. When a user clicks this URL, the user is signed out of all applications that have been authenticated through Directory Manager (that is, applications the user has signed in to through Directory Manager single sign-on).
14. Provide the Directory Manager metadata in the service provider to register Directory Manager as an identity provider in it. See the [Directory Manager Metadata for Service Provider Configurations](#directory-manager-metadata-for-service-provider-configurations) topic.
15. Click **Create Application** to create the service provider in Directory Manager.

## Directory Manager metadata for service provider configurations

As part of registering an application in Directory Manager, you also have to provide Directory Manager metadata in the service provider.

To copy the metadata:

1. On the Create Application page, expand the Metadata section by clicking the down arrowhead.
2. Copy the Issuer URL and Directory Manager certificate from the Provider Issuer and Provider Signing Certificate boxes and paste them in the service provider.
3. Depending on how the service provider sends the request, copy the appropriate URL and paste it in the service provider. The Provider IDP Redirect Endpoint and Provider IDP POST Endpoint boxes both display URLs.

The following boxes also display URLs:

- **Single logout Endpoint(POST):** Requests are posted to this URL to sign out of the current and all other third-party applications configured in Directory Manager.
- **Login URL:** Clicking it redirects the user to the Directory Manager Login page, where Directory Manager is acting as an identity provider. If the user is already signed in to Directory Manager, the user is auto-authenticated. Otherwise, the user must provide credentials.
