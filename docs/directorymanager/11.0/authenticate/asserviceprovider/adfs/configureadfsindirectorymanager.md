# Configure the AD FS Provider In GroupID

To configure a SAML provider in GroupID, you have to specify the following:

- Issuer URL
- IDP Login URL
- Token signing certificate
- An image for the identity provider
- Advanced configurations

What do you want to do?

- Configure the AD FS Provider in GroupID

## Configure the AD FS Provider in GroupID

1. In GroupID Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider.
4. Make sure the **Client** box displays the name of the GroupID client foe which you generated the
   Entity ID/Audience URL and provided that in AD FS.

Keep this page open while we copy configurations from AD FS and provide them here.

### Provide Issuer URL

The issuer URL is provided by the federation service, i.e., AD FS. Copy this URL from AD FS and
provide it in GroupID.

**To fetch and enter Issuer URL:**

1. In the AD FS console, right-click **Service** and select **Edit Federation Service Properties**.
2. On the **Federation Service Properties** dialog box, copy the URL displayed in the **Federation
   Service Identifier** box and paste it in the **Issuer** box on the **Create New Provider** page,

### Provide IDP Login URL

The IDP Login URL is the URL of the AD FS sign-in page.

**To fetch and enter IDP Login URL:**

1. Launch the AD FS login page and copy the URL displayed in the address bar.
2. We only need the initial part of the URL, up to _ls_. Copy it and paste it in the **IDP Login
   URL** box on the **Create New Provider** page

### Get Token-Signing Certificate

The next step is to get the token-signing certificate from AD FS and provide it in GroupID.

1. Go to the AD FS console and click **Certificates**. The certificates are displayed.
2. Double-click the token-signing certificate to open its properties.
3. On the Certificate Properties dialog box, go to the **Details** tab and click the **Copy to
   File** button to launch the Certificate Export Wizard.
4. Read the welcome message and click **Next**.
5. On the **Export File Format** page, select the **Base-64 encoded X.509 (.CER)** option button and
   click **Next**.
6. On the **File to Export** page, specify a name for the certificate file and click **Browse** to
   specify a location to save it. Then click **Next**.
7. On the next page, click **Finish** to complete the wizard.
8. Open the certificate file in Notepad and select the entire content. Copy this certificate and
   paste it in the **IDP Certificate** box on the **Create New Provider** page. Make sure there is
   no trailing space after the dashes that mark the end of the certificate.

### Upload an Image for the Identity Provider

When AD FS is configured with a GroupID client, say the GroupID portal _Wizard_, it will be
available on _Wizard's_ login page for single sign-on. You can choose to display the AD FS option as
an image or as a button.

To display the AD FS option as an image, you have to upload an image for it. On the **Create New
Provider** page, use the **Browse** button under **Identity Provider Image** to upload an image for
AD FS.

NOTE: Supported image formats are: .jpg, .bmp, .webp, and .gif.  
Required dimensions for the image file are: 210 x 60 pixels.

If you do not upload an image, AD FS authentication will be shown as a button. This button would
have the same name as you entered in the **Name** box on the **Create New Provider** page.

Users can click the AD FS image or the button on the login page of the GroupID portal _Wizard_ for
single sign-on.

### Specify Advanced Configurations

Next, specify some advanced configurations for the identity provider. Expand the **Advanced**
section on the **Create New Provider** page.

1. Make sure that _RSA-SHA-256_ is selected in the **Response Signing Method** box.
2. The **Disable GroupID Authentication** option indicates whether to display the GroupID
   authentication login on the GroupID client's logiin page ( i.e., Wizard portal's login page in
   our example).

    - By default, 'No' is selected, which means that when users access the Wizard portal's login
      page, they will be shown the GroupID login and password option along with the AD FS identity
      provider's button.
    - Selecting 'Yes' means that the GroupID login and password option will not be available on the
      Wizard portal's login page. Moreover, when a single identity store and a single SAML provider
      is configured, the login page for the provider is displayed rather than the Wizard portal's
      login page.

3. Select _Post_ in the **Request Binding** drop-down list.  
   To verify that you have selected the correct binding type, do the following:

    1. In the AD FS console click **Relying Party Trust** in the left pane; the middle pane displays
       the relying party trusts already configured.
    2. Double-click the relying party trust that you created for the GroupID portal _Wizard_. This
       launches the Properties dialog box for the relying party trust.
    3. Click the **Endpoints** tab and confirm that the binding type is _POST_.

4. In AD FS, we configured an Active Directory attribute that the identity provider will use for
   authenticating users (see step 16 in the
   [Configure Relaying Party Trust in AD FS](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configurerelayingpartytrust.md)
   topic). In our example, we used the UPN attribute that stores the user principal name. Now in the
   **Advanced** section, we have to refer to this attribute.  
   In the **Identity Location** list, select the _Identity is an attribute element_ option.
5. On selecting it, the **Identity Location Attribute** box is displayed.  
   The attribute location will be in the form of a URL. Get this URL from AD FS.

    1. In the AD FS console, click **Claim Descriptions** in the left pane and then select the
       Active Directory attribute you specified for authentication. In our example, it is the UPN
       attribute.
    2. Double-click the attribute to open its properties.
    3. On the **Attribute Properties** dialog box, copy the URL displayed in the **Claim type** box
       and paste it in the **Identity Location Attribute** box.

6. With all configurations completed, click the **Create Provider** button. The identity provider,
   i.e., AD FS, is created and displayed on the **SAML Providers** page.
