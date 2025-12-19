---
title: "Duo Hosted SSO"
description: "Duo Hosted SSO"
sidebar_position: 240
---

# Duo Hosted SSO

Duo Hosted SSO

# Duo Hosted SSO

## Overview

This topic covers integrating Privilege Secure with Duo using a Duo hosted SSO. Please find an
article detailing the Privilege Secure SSO terms here:
[SSO Configuration](/docs/privilegesecurediscovery/administration/configuration/ssoconfiguration.md)

## Preqrequisites

Duo service plan with the following:

- Active Directory (AD) sync configured and synced
- Single Sign-On enabled
- Duo Active Directory Authentication Proxy Agent Installed and configured for AD sync and SSO
- Single Sign-On Authentication Source configured and tested

## Duo: Create the DUO Application for Privilege Secure

- ![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip0.webp)

Scroll down to the **Service Provider Section**; notes:

- The information below is for example purpose only.  Enter the appropriate information for your
  environment.

- [https://10.100.11.192](https://10.100.11.192) should be replace with your Privilege Secure URL.
- Entity ID can by any unique string.  We recommend using your Privilege Secure URL.

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip0.webp)

**SAML Response Section** Notes:

- The NameID can also be:
  `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified`
- The 'idP Attribute' and 'SAML Response Attribute' will need to be manually entered.
- idP Attribute: `distinguishedName`
- SAML Response Attribute: `dn`

![image.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_image.webp)

![image__1_.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_image__1_.webp)

- The remaining **SAML Response** section fields can be left blank.
- The **Policy** section requires no settings from Privilege Secure, tailor to suit your
  environment.
- In the **Settings** section, we recommend setting an appropriate name, tailor the rest to suit
  your environment.

![mceclip4.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip4.webp)

- The **Host Whitelisting** section requires no settings from Privilege Secure, tailor to suit your
  environment.
- Click the [Save] button at the bottom of the page.

## Duo: Retrieve SAML/SSO Information for Privilege Secure

![mceclip6.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip6.webp)

![mceclip7.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip7.webp)

## Enter SAML/SSO Information

![mceclip8.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip8.webp)

## Enable SSO in Privilege Secure and Login Example

At the bottom of the **Configure** > **Server** > **SAML Configuration Panel**, enable or disable
SSO when appropriate:

![mceclip9.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip9_192x74.webp)

**Step 1 –** Click **SSO Login** button to log in via Duo.

**Step 2 –** \*Optional:  To login from Duo first (IdP-initiated), use the Single Sign-On
URL provided by Duo.  This is found in the application's "Metadata" section.

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip0_650x254.webp)

## Troubleshooting

If you are using ADFS as an authentication source and receive a "SAML Assertion Not Yet Valid" while
trying to log in, please see: 
[Configure ADFS (Active Directory Federation Services) SSO](/docs/privilegesecurediscovery/administration/configuration/configureadfs.md)

## Additional Information

[https://duo.com/docs/authproxy-reference](https://duo.com/docs/authproxy-reference)

[https://duo.com/docs/sso-generic](https://duo.com/docs/sso-generic)

[https://duo.com/docs/sso](https://duo.com/docs/sso)
