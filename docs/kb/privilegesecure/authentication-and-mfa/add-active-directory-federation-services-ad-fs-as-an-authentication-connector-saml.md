---
description: >-
  Add Active Directory Federation Services (AD FS) as a SAML authentication
  connector by configuring AD FS first, then adding the connector in Privilege Secure.
keywords:
  - AD FS
  - SAML
  - authentication connector
  - Netwrix Privilege Secure
  - Relying Party Trust
  - sbpamsaml.stealthbits.com
  - Assertion Consumer
  - SbPAM
  - Issuance Transform Rules
  - Claims aware
  - Name ID Policy
products:
  - privilegesecure
sidebar_label: Adding Active Directory Federation Services (AD FS) as an Authentication Connector (SAML)
tags:
  - kb
  - authentication-and-mfa
title: "Adding Active Directory Federation Services (AD FS) as an Authentication Connector (SAML)"
knowledge_article_id: kA04u0000000HR7CAM
---

# Adding Active Directory Federation Services (AD FS) as an Authentication Connector (SAML)

## Overview

This article describes how to add Active Directory Federation Services (AD FS) to Netwrix Privilege Secure for Access Management as an Authentication Connector via SAML. This article covers two sections: *Steps for Active Directory Federation Services (AD FS)* and *Steps for Privilege Secure*. Complete the AD FS section first.

## Instructions

### Steps for Active Directory Federation Services (AD FS)

1. Launch **AD FS Management** on the AD FS server:

   ![Launching AD FS Management on the AD FS server](./../0-images/ka04u000000wwIE_0EM4u000004bUhA.png)

2. Right-click **Application Groups** and select **Add Application Group…**

   ![Add Application Group option in the Application Groups context menu](./../0-images/ka04u000000wwIE_0EM4u000004bUhK.png)

3. Select **Native application accessing a web API** and enter "SbPAM (SAML)" as the **Name**, then click **Next**.

   ![Native application accessing a web API template with SbPAM (SAML) entered as the name](./../0-images/ka04u000000wwIE_0EM4u000004bUhP.png)

4. Copy the **Client Identifier** value; you need that value when configuring Privilege Secure.

   ![Client Identifier value on the Native application page](./../0-images/ka04u000000wwIE_0EM4u000004bUhU.png)

5. For the **Redirect URI**, use the following URI with the hostname of the Privilege Secure server customized to match your environment. For example: `https://<sbpam-server>:6500/samlSigninCallback`. Click **Add**, then **Next**.

   ![Redirect URI entry with the Add button](./../0-images/ka04u000000wwIE_0EM4u000004bUhZ.png)

6. For the **Identifier** of the Web API, enter `sbpamsaml.stealthbits.com`, click **Add**, then click **Next**.

   ![Web API Identifier entry with the Add button](./../0-images/ka04u000000wwIE_0EM4u000004bUiD.png)

7. For **Apply Access Control Policy**, leave all defaults and then click **Next**.

   ![Apply Access Control Policy page with the default settings](./../0-images/ka04u000000wwIE_0EM4u000004bUiI.png)

8. For **Configure Application Permissions**, enable the following and then click **Next**:
   - `allatclaims`
   - `email`
   - `openid`
   - `profile`

   ![Configure Application Permissions page with allatclaims, email, openid, and profile enabled](./../0-images/ka04u000000wwIE_0EM4u000004bUi8.png)

9. Click **Next** on the remaining pages until the wizard completes.

10. In the left sidebar of **AD FS**, click the **Relying Party Trusts** folder. In the right sidebar, click **Add Relying Party Trust...**

    ![Relying Party Trusts folder with the Add Relying Party Trust action](./../0-images/ka04u000000wwIE_0EM4u000004bUho.png)

11. Select **Claims aware** and click **Next**.

    ![Claims aware option in the Add Relying Party Trust wizard](./../0-images/ka04u000000wwIE_0EM4u000004bUhy.png)

12. For **Select Data Source**, select **Enter data about the relying party manually** and click **Next**.

13. For **Specify Display Name**, enter "SbPAM (SAML)" and click **Next**.

14. For **Configure Certificate**, leave the default values and click **Next**.

15. For **Configure URL**, check **Enable support for the SAML 2.0 WebSSO protocol** and enter your AD FS server's FQDN followed by `/adfs/ls`. For example: `https://adfs-server.domain.com/adfs/ls`. Click **Next**.

    ![Configure URL page with SAML WebSSO support enabled and the AD FS URL entered](./../0-images/ka04u000000wwIE_0EM4u000004bUiN.png)

16. For **Configure Identifiers**, use the value `sbpamsaml.stealthbits.com`, click **Add**, then click **Next**.

    ![Configure Identifiers page with the identifier added](./../0-images/ka04u000000wwIE_0EM4u000004bUiS.png)

17. Leave **Choose Access Control Policy** as default values and click **Next**, then click **Next** through the remaining pages to finish the wizard.

18. When the wizard closes, a window for **Issuance Transform Rules** automatically opens. Click **Add Rule...**.

19. Select **Send LDAP Attributes as Claims**, and click **Next**.

    ![Send LDAP Attributes as Claims rule template selected](./../0-images/ka04u000000wwIE_0EM4u000004bUiX.png)

20. Name the rule "Send attributes", select "Active Directory" as the **Attribute store**, map the following **LDAP Attributes** to **Outgoing Claim Types**, click **Finish**, then click **Apply** and **OK**:
    - `SAM-Account-Name` → `Name`
    - `User-Principal-Name` → `UPN`
    - `E-Mail-Addresses` → `E-Mail Address`

    ![Send attributes rule with the LDAP attribute to outgoing claim type mappings](./../0-images/ka04u000000wwIE_0EM4u000004bUic.png)

21. Double-click the **Relying Party Trust** created in the previous steps (named "SbPAM (SAML)"), and go to the **Endpoints** tab.

    ![Endpoints tab of the Relying Party Trust properties](./../0-images/ka04u000000wwIE_0EM4u000004bUih.png)

    Add the following endpoints (click **Add SAML...**):

    - Endpoint type: SAML Assertion Consumer
      - Binding: POST
      - Index: 0
      - Trusted URL: `https://<sbpam-server>:6500/samlSigninCallback`

      ![SAML Assertion Consumer endpoint settings](./../0-images/ka04u000000wwIE_0EM4u000004bUim.png)

    - Endpoint type: SAML Logout
      - Binding: POST
      - Index: 0
      - Trusted URL: `https://<adfs-server>.domain.com/adfs/ls/?wa=wsignout1.0&wreply=https://<sbpam-server>:6500`
      - Response URL: `https://<sbpam-server>:6500/login`

      ![SAML Logout endpoint settings](./../0-images/ka04u000000wwIE_0EM4u000004bUir.png)

    Click **OK**, **Apply**, then **OK**. This completes the AD FS configuration portion of the guide.

### Steps for Privilege Secure

After completing the *Steps for Active Directory Federation Services (AD FS)*, take the following steps in Privilege Secure to add AD FS as an Authentication Connector via SAML.

1. As a Privilege Secure admin, go to **Configuration > Authentication** in Privilege Secure, and click the green **"+"** button to add a new Authentication Connector.

2. Give the new connector a name, description (optional), and a Connector Type of "SAML".

   ![New Authentication Connector with the SAML connector type](./../0-images/ka04u000000wwIE_0EM4u000004bUiw.png)

3. Click **Configuration Wizard**.

4. On the wizard's **Configure Client** page, enter the following values:
   - Signin URI: `https://<adfs-server>.domain.com/adfs/ls`
   - Callback Address: `https://<sbpam-server>:6500/samlSigninCallback`
   - CORS (Cross-Origin Resource Sharing): `https://<sbpam-server>:6500`

   ![Configure Client page with the sign-in URI, callback address, and CORS values](./../0-images/ka04u000000wwIE_0EM4u000004bUj1.png)

   Click **Test Connection**. If you are redirected to a log-in page, click **Back** in your web browser, then click **Next** in the Privilege Secure wizard. If the page refreshes and brings you back to the Privilege Secure wizard, click **Next** to proceed.

5. Select "Unspecified" for the **Name ID Policy**, and add a certificate if required. Then, click **Login** and sign in to AD FS using Active Directory credentials.

   ![Name ID Policy set to Unspecified with the Login button](./../0-images/ka04u000000wwIE_0EM4u000004bUj6.png)

   When AD FS redirects you back to this page after signing in, if the message reads "Login was successful", click **Next**.

6. Locate a mapping you want to use when users sign in to Privilege Secure using AD FS, such as an email address or UPN.

   ![List of available mappings](./../0-images/ka04u000000wwIE_0EM4u000004bUjB.png)

   Click the mapping, click **Select**, select the matching Active Directory mapping from the displayed dropdown, then click **Next**.

   ![Selected mapping matched to an Active Directory mapping](./../0-images/ka04u000000wwIE_0EM4u000004bUjG.png)

7. For the **Signout URI** and **Signout Callback URI**, use the following values:
   - Signout URI: `https://<adfs-server>.domain.com/adfs/ls/?wa=wsignout1.0&wreply=`
   - Signout Callback URI: `https://<sbpam-server>:6500`

   ![Signout URI and Signout Callback URI values](./../0-images/ka04u000000wwIE_0EM4u000004bUjL.png)

   Click **Test Log Out**, then **Finish** to complete the wizard. Privilege Secure now uses AD FS (via SAML) as an Authentication Connector.

8. In the **Users & Groups** menu in Privilege Secure, go to specific users and assign the AD FS SAML authenticator.

   ![AD FS SAML authenticator assigned to a user in Users & Groups](./../0-images/ka04u000000wwIE_0EM4u000004bUjQ.png)

When using the SAML log-in option, the user signs in to AD FS. Upon successful authentication, Privilege Secure redirects the user to the UI as their signed-in account.
