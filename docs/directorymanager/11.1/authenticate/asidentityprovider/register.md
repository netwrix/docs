---
title: "Register an Application (Service Provider) in Directory Manager"
description: "Register an Application (Service Provider) in Directory Manager"
sidebar_position: 10
---

# Register an Application (Service Provider) in Directory Manager

To register a service provider in Directory Manager, you have to create an application for the
provider in Directory Manager.

Next, while configuring Directory Manager in the service provider, you have to provide Directory
Manager metadata. You can copy metadata values and paste them in the service provider.

## Create an Application for a Service Provider

Follow the steps to create an application for a service provider in Directory Manager.

Step 1 – In Directory Manager Authenticate, go to the SAML Applications tab and click **New
Application**.

Step 2 – On the Create Application page, enter a name for the application in the Name box. The
application will be displayed on the Directory Manager Login page with this name.

Step 3 – Copy the consumer URL from the service provider and enter it In the Consumer URL box.

Step 4 – Copy the audience URL from the service provider and enter it In the Entity ID/Audience box.

Step 5 – From the Identity store drop-down list, select the identity store to use for authenticating
users.  
For single sign-on, third-party application users must authenticate through an identity store
defined in Directory Manager. For example, to authenticate users through Active Directory, select an
AD-based identity store.

Step 6 – Next, specify an attribute as a claim. Service provider application users are authenticated
in Directory Manager based on this attribute.  
Enter the attribute name in the Claims box. As you type, the system displays the attributes in the
selected identity store that start with the text. Select the required attribute.  
Directory Manager will match the value of this attribute in the application and in the identity
store for authentication.

Step 7 – Click **Browse** under Identity Provider Image to upload an image for the application, such
as the application logo.

:::note
Supported image formats: .jpg, .bmp, .webp, and .gif  
Image file dimensions: 210 x 60 pixels
:::


Step 8 – Expand the Advanced section by clicking the down arrow head to specify advanced settings
for the application.

Step 9 – Select _Enabled_ or _Disabled_ in the Response Signing drop-down list, depending on whether
it is enabled or disabled in the service provider.

Step 10 – Select a response signing method from the Response Signing Method drop-down list. This
method should be the same for the identity provider (Directory Manager) and the service provider
(third-party application).

Step 11 – Select _Post_ or _Redirect_ in the Response Binding drop-down list, depending on how the
service provider accepts the response.

Step 12 – If you are not using assertion encryption, make sure _Disabled_ is selected in the
Assertion Encryption drop-down list.  
To use assertion encryption as an advanced security feature, select **Enabled**. Then provide the
certificate, key transport algorithm, and encryption algorithm to encrypt the response.

Step 13 – Generate a logout URL in the service provider and enter it in the Single Logout URL box.
When a user clicks this URL, he or she will be logged out of all applications that have been
authenticated through Directory Manager (i.e., applications that he or she is single signed in
through Directory Manager).

Step 14 – Provide the Directory Manager metadata in the service provider to register Directory
Manager as an identity provider in it. See the Directory Manager Metadata for Service Provider
Configurations topic.

Step 15 – Click **Create Application** to create the service provider in Directory Manager.

### Directory Manager Metadata for Service Provider Configurations

As part of registering an application in Directory Manager, you also have to provide Directory
Manager metadata in the service provider.

Follow the steps to copy the metadata.

Step 1 – On the Create Application page, expand the Metadata section by clicking the down arrow
head.

Step 2 – Copy the Issuer URL and Directory Manager certificate from the Provider Issuer and Provider
Signing Certificate boxes and paste them in the service provider.

Step 3 – Both the Provider IDP Redirect Endpoint and Provider IDP POST Endpoint are given here.
Depending on how the service provider sends the request or the mechanism used, copy the appropriate
URL and paste it in the service provider.

Step 4 – The Single Logout Endpoint POST box displays a URL. Requests are posted on this URL for
logging out from the current and all other third-party applications configured in Directory Manager.

Step 5 – The Login URL box displays a URL. On clicking it, the user is redirected to the Directory
Manager Login page where Directory Manager is acting as an identity provider. If the user is already
logged into Directory Manager, he/she will be auto-authenticated; else the user will have to provide
the credentials.
