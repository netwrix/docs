---
title: "SSO: Duo Access Gateway (DAG)"
description: "SSO: Duo Access Gateway (DAG)"
sidebar_position: 170
---

# SSO: Duo Access Gateway (DAG)

SSO: Duo Access Gateway (DAG)

# SSO: Duo Access Gateway (DAG)

## Overview

This topic covers integrating Privilege Secure with Duo using a Duo on-premise Duo Access Gateway
(DAG) SSO. Please find an article detailing the Privilege Secure terms here:
[SSO Configuration](/docs/privilegesecurediscovery/administration/configuration/ssoconfiguration.md)

## Prerequisites

Duo service plan with the following:

- Duo Access Gateway (DAG)
- Active Directory (AD) sync configured and synced
- Single Sign-On enabled
- Duo Active Directory Authentication Proxy Agent Installed and configured for AD sync and SSO
- Single Sign-On Authentication Source configured and tested

## Duo:  Duo Access Gateway Configuration

**Step 1 –** Login to **Duo Access Gateway Admin Console**.

**Step 2 –** Navigate to the page for authentication source, and add the attribute that corresponds
to the DUO user name attribute in the attributes field.

**Step 3 –** Select **Applications** in the left side bar.

**Step 4 –** Locate the metadata section. This is the information you need to provide to the DUO
Network Gateway when configuring the DAG IDP.

**Step 5 –** Select the **Download certificate**.

## Due: Create the DUO Application for Privilege Secure

**Step 1 –** Open a new tab and log into the **Duo Admin Panel**

**Step 2 –** In the left side bar, select **Applications** > **Protect an application**.

**Step 3 –** Type in SAML, select SAML Duo Network Gateway.

**Step 4 –** At the top of this, enter the FQDN of the new server and select save configuration.

**Step 5 –** At the top of the new application’s property page, click ‘Download your configuration
file’ to get the file in JSON format.

**Step 6 –** Return to the **DAG Admin Console**.

**Step 7 –** Add application, select choose file.

**Step 8 –** Locate the file you just downloaded and click ‘open’, then upload.

**Step 9 –** Return to the **Duo Admin Panel.**

DAG Parameters:

**NOTE:** `\{\{base_url\}\}`= URL used to reach Privilege Secure internally.

- **Configure SAML Service Provider**

    - Use -PROD and -DEV or -STG to differential environments
    - Can be selected by client, must match entry in Privilege Secure
    - Use different Entity IDs for PROD and non-PROD
    - Example: \{\{base_url\}\}-PROD

- **Service provider name:** Privilege Secure-PROD
- **Entity ID:**`\{\{base_url\}\}`
- **Assertion Consumer Service:**`\{\{base_url\}\}/api/login`
- **Single Logout URL** (Optional)**:** `<leave blank>`
- **Default Relay State** (Optional): `<leave blank>`

SAML Response:

- **NameID:** `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified`
- **NameID attribute:** `<Username>`
- **Send attributes:** `<select NameID radial>`
- **Signature algorithm:** `<select SHA-256>`
- **Sign response:** `<checked>`
- **Sign assertion:** `<checked>`
- **Map attributes:**

- **idP Attribute:**`distinguishedName`
- **SAML Response Attribute:**`dn`

- **Create attributes (Optional)**:

- **Name:** `<leave blank>`
- **Value:** `<leave blank>`

**Step 10 –** Duo: Retrieve SAML/SSO information for Privilege Secure.

**Step 11 –** Privilege Secure: Enter SAML/SSO information.

**Step 12 –** Privilege Secure: EEnable SSO in Privilege Secure and Login Example.

**Step 13 –** At the bottom of the **Configure** > **Server** > **SAML Configuration Panel**, enable
or disable SSO when appropriate:

- Privilege Secure SSO Login Screen
- Click the **SSO Login** button to log in via Duo.

## Troubleshooting

If you are using ADFS as an authentication source and receive a "SAML Assertion Not Yet Valid" while
trying to log in, please see: 
[Configure ADFS (Active Directory Federation Services) SSO](/docs/privilegesecurediscovery/administration/configuration/configureadfs.md)

## Additional Information

[https://duo.com/docs/authproxy-reference](https://duo.com/docs/authproxy-reference)

[https://duo.com/docs/sso-generic](https://duo.com/docs/sso-generic)

[https://duo.com/docs/sso](https://duo.com/docs/sso)
