---
title: "Configure the Entra ID Provider in Directory Manager"
description: "Create a SAML provider in Directory Manager by entering the Microsoft Entra ID certificate, login URL, and issuer URL."
keywords:
  - Directory Manager SAML provider
  - Microsoft Entra ID SSO
  - IdP certificate
  - IdP login URL
  - SAML request binding
sidebar_position: 30
---

# Configure the Entra ID Provider in Directory Manager

To configure a SAML provider in Directory Manager, specify the following:

- IdP certificate
- IdP login URL
- Issuer URL
- Advanced configurations

## Configure the provider in Directory Manager

To configure the provider in Directory Manager:

1. In Directory Manager Authenticate, click the **SAML Providers** tab.

2. On the SAML Providers page, click **New Provider**.

3. On the Create New Provider page, enter a name for the provider in the **Name** box. For example, Entra ID SSO.

4. Ensure the Client box displays the name of the Directory Manager client for which you generated the Entity ID/Audience URL. You provided this URL while creating the Directory Manager application in Microsoft Entra Admin Center.

5. Open the Certificate (Base64) file that you downloaded from Microsoft Entra Admin Center and copy the certificate information.

   On the Create New Provider page, paste it in the IDP Certificate box. Ensure you haven't copied any trailing space.

6. In Microsoft Entra Admin Center, copy the Login URL from the Set up Azure SSO card on the SAML-based sign-on page. Paste it in the IDP Login URL box on the Create New Provider page.

7. Copy the Azure AD Identifier URL from the Set up Azure SSO card on the SAML-based sign-on page. Paste it in the Issuer box on the Create New Provider page.

8. Expand the Advanced section on the Create New Provider page.

9. Select _Post_ in the Request Binding dropdown list.

10. Set the **Disable Directory Manager Authentication** option. It indicates whether to display the Directory Manager authentication login on the Directory Manager client's login page.

    - By default, "No" is selected. When users access the Directory Manager client's login page, they see the Directory Manager login and password option along with the identity provider's button.
    - Selecting "Yes" means that the Directory Manager login and password option isn't available on the Directory Manager client's login page. When a single identity store and a single SAML provider are configured, the login page for the provider is displayed rather than the Directory Manager client's login page.

11. Click the **Create Provider** button. The identity provider is created and displayed on the SAML Providers page.
