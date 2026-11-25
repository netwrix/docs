---
title: "Configure the AD FS Provider in Directory Manager"
description: "Add AD FS as a SAML provider in Directory Manager by entering the issuer URL, login URL, token-signing certificate, and advanced settings."
keywords:
  - Directory Manager AD FS
  - SAML provider configuration
  - AD FS token-signing certificate
  - IdP login URL
  - Directory Manager single sign-on
sidebar_position: 30
---

# Configure the AD FS Provider in Directory Manager

To configure a SAML provider in Directory Manager, you have to specify the following:

- Issuer URL
- IDP Login URL
- Token signing certificate
- An image for the identity provider
- Advanced configurations

## Configure the AD FS provider in Directory Manager

To configure the AD FS provider in Directory Manager:

1. In Directory Manager Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the Create New Provider page, enter a name for the provider.
4. Ensure the Client box displays the name of the Directory Manager client for which you generated the Entity ID/Audience URL and provided that in AD FS.

   Keep this page open while copying configurations from AD FS and providing them here.

## Provide the issuer URL

The federation service, AD FS, provides the issuer URL. Copy this URL from AD FS and provide it in Directory Manager.

To provide the issuer URL:

1. In the AD FS console, right-click **Service** and select **Edit Federation Service Properties**.
2. On the Federation Service Properties dialog box, copy the URL displayed in the Federation Service Identifier box and paste it in the Issuer box on the Create New Provider page in Directory Manager.

### Provide IDP Login URL

The IDP Login URL is the URL of the AD FS sign-in page. To fetch and enter the IDP Login URL:

1. Launch the AD FS login page and copy the URL displayed in the address bar.
2. Copy only the initial part of the URL, up to **ls**, and paste it in the IDP Login URL box on the Create New Provider page.

### Get the token-signing certificate

Get the token-signing certificate from AD FS and provide it in Directory Manager. To do so:

1. Go to the AD FS console and click **Certificates**. The certificates are displayed.
2. Double-click the token-signing certificate to open its properties.
3. On the Certificate Properties dialog box, go to the Details tab and click the **Copy to File** button to launch the Certificate Export Wizard.
4. Read the welcome message and click **Next**.
5. On the Export File Format page, select the **Base-64 encoded X.509 (.CER)** option button and click **Next**.
6. On the File to Export page, specify a name for the certificate file and click **Browse** to specify a location to save it. Then click **Next**.
7. On the next page, click **Finish** to complete the wizard.
8. Open the certificate file in Notepad and select the entire content. Copy this certificate and paste it in the IDP Certificate box on the Create New Provider page in Directory Manager. Ensure there is no trailing space after the dashes that mark the end of the certificate.

### Upload an image for the identity provider

When AD FS is configured with a Directory Manager client, for example, the Directory Manager portal **Wizard**, it is available on the **Wizard** login page for single sign-on. You can choose to display the AD FS option as an image or as a button.

To display the AD FS option as an image, upload an image for it. On the Create New Provider page, use the Browse button under Identity Provider Image to upload an image for AD FS.

:::note
Supported image formats: .jpg, .bmp, .webp, .gif  
Required image file dimensions: 210 x 60 pixels
:::

If you don't upload an image, AD FS authentication is shown as a button. This button has the same name as you entered in the Name box on the Create New Provider page.

Users can click the AD FS image or the button on the login page of the Directory Manager portal **Wizard** for single sign-on.

### Specify advanced configurations

Specify some advanced configurations for the identity provider. Expand the Advanced section on the Create New Provider page and provide the information as follows:

1. Ensure that **RSA-SHA-256** is selected in the Response Signing Method box.
2. Set the Disable Directory Manager Authentication option. It indicates whether to display the Directory Manager authentication login on the Directory Manager client's login page (that is, the Wizard portal's login page in this example).

   - By default, "No" is selected, which means that when users access the Directory Manager client's login page, they are shown the Directory Manager login and password option along with the identity provider's button.
   - Selecting "Yes" means that the Directory Manager login and password option isn't available on the Directory Manager client's login page. Moreover, when a single identity store and a single SAML provider are configured, the login page for the provider is displayed rather than the Directory Manager client's login page.

3. Select **Post** in the Request Binding dropdown list.

   To verify that you have selected the correct binding type, do the following:

   1. In the AD FS console, click **Relying Party Trust** in the left pane. The middle pane displays the relying party trusts already configured.
   2. Double-click the relying party trust that you created for the Directory Manager portal **Wizard**. This launches the Properties dialog box for the relying party trust.
   3. Click the **Endpoints** tab and confirm that the binding type is **POST**.

4. In AD FS, configure an Active Directory attribute that the identity provider uses to authenticate users (see step 16 in the [Configure an AD FS Relying Party Trust for Directory Manager](/docs/directorymanager/11.2/authenticate/asserviceprovider/adfs/configurerelayingpartytrust.md) topic). In this example, use the UPN attribute that stores the user principal name. In the Advanced section, you must refer to this attribute.

   In the Identity Location list, select the **Identity is an attribute element** option.

5. When you select it, the Identity Location Attribute box is displayed. The attribute location is in the form of a URL. Get this URL from AD FS.

   1. In the AD FS console, click **Claim Descriptions** in the left pane and then select the Active Directory attribute you specified for authentication. In this example, it is the UPN attribute.
   2. Double-click the attribute to open its properties.
   3. On the Attribute Properties dialog box, copy the URL displayed in the Claim type box and paste it in the Identity Location Attribute box.

6. With all configurations completed, click the **Create Provider** button. The identity provider, that is, AD FS, is created and displayed on the **SAML Providers** page.
