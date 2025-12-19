# Configure the Microsoft Entra SSO Application in GroupID

To configure a SAML provider in GroupID, you have to specify the following:

- IDP certificate
- IDP Login URL
- Issuer URL
- Advanced configurations

## Configure the Provider in GroupID

1. In GroupID Authenticate, click the **SAML Providers** tab.
2. On the **SAML Providers** page, click **New Provider**.
3. On the **Create New Provider** page, enter a name for the provider in the **Name** box. For
   example, Entra ID SSO.
4. Make sure the **Client** box displays the name of the GroupID client for which you generated the
   Entity ID/Audience URL and provided that while creating the GroupID application in Microsoft
   Entra Admin Center.
5. Open the Certificate (Base64) file that you downloaded from Microsoft Entra Admin Center and copy
   the certificate information.  
   On the **Create New Provider** page, paste it in the **IDP Certificate** box. Make sure you have
   not copied any trailing space.
6. In Microsoft Entra Admin Center, copy the Login URL from the **Set up Azure SSO** card on the
   **SAML-based sign-on** page and paste it in the **IDP Login URL** box on the **Create New
   Provider** page.
7. Again, copy the Azure AD Identifier URL from the **Set up Azure SSO** card on the **SAML-based
   sign-on** page and paste it in the **Issuer** box on the **Create New Provider** page.
8. Expand the **Advanced** section on the **Create New Provider** page.
9. Select _Post_ in the **Request Binding** drop-down list.
10. For _Disable GroupID Authentication_, see step 2 in the
    [Specify Advanced Configurations](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#specify-advanced-configurations)
    topic. Replace references to AD FS with the Microsoft Entra SSO provider.
11. Click the **Create Provider** button. The identity provider is created and displayed on the
    **SAML Providers** page.
