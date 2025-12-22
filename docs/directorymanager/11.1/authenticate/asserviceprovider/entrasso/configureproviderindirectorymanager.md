---
title: "Configure the Microsoft Entra SSO in Directory Manager"
description: "Configure Directory Manager in Microsoft Entra ID for SSO"
sidebar_position: 30
---

# Configure the Microsoft Entra SSO Application in Directory Manager

To configure a SAML provider in Directory Manager, you have to specify the following:

- IDP certificate
- IDP Login URL
- Issuer URL
- Advanced configurations

## Configure the Provider in Directory Manager

Follow the steps to configure the provider in Directory Manager.

Step 1 – In Directory Manager Authenticate, click the **SAML Providers** tab.

Step 2 – On the SAML Providers page, click **New Provider**.

Step 3 – On the Create New Provider page, enter a name for the provider in the Name box. For
example, Entra ID SSO.

Step 4 – Make sure the Client box displays the name of the Directory Manager client for which you
generated the Entity ID/Audience URL and provided that while creating the Directory Manager
application in Microsoft Entra Admin Center.

Step 5 – Open the Certificate (Base64) file that you downloaded from Microsoft Entra Admin Center
and copy the certificate information.  
On the Create New Provider page, paste it in the IDP Certificate box. Make sure you have not copied
any trailing space.

Step 6 – In Microsoft Entra Admin Center, copy the Login URL from the Set up Azure SSO card on the
SAML-based sign-on page and paste it in the IDP Login URL box on the Create New Provider page.

Step 7 – Again, copy the Azure AD Identifier URL from the Set up Azure SSO card on the SAML-based
sign-on page and paste it in the Issuer box on the Create New Provider page.

Step 8 – Expand the Advanced section on the Create New Provider page.

Step 9 – Select _Post_ in the Request Binding drop-down list.

Step 10 – The Disable GroupID Authentication option indicates whether to display the Directory
Manager authentication login on the Directory Manager client's login page.

- By default, ‘No’ is selected, which means that when users access the Directory Manager client's
  login page, they will be shown the Directory Manager login and password option along with the
  identity provider’s button.
- Selecting ‘Yes’ means that the Directory Manager login and password option will not be available
  on the Directory Manager client's login page. Moreover, when a single identity store and a single
  SAML provider is configured, the login page for the provider is displayed rather than the
  Directory Manager client's login page.

Step 11 – Click the **Create Provider** button. The identity provider is created and displayed on
the SAML Providers page.
