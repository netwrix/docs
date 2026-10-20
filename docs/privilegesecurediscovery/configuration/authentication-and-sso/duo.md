---
title: "Configure Duo SSO"
description: "Configure Duo Access Gateway or Duo hosted SSO as the SAML identity provider for Privilege Secure for Discovery."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Re-verify against the current Duo UI. Duo Access Gateway is a legacy product; confirm whether it is still supported and whether this section should stay. Evidence: none.

TODO: Confirm Duo field names (Host allowlisting, SAML Response, Service Provider) in the current Duo Single Sign-On application. Evidence: none.

TODO: Confirm the assertion consumer path (`/api/login` in the source pages versus `/api/v1/login` at 26.09.1). Evidence: docker/node/api-legacy-onprem/app.js:58.

TODO: Screenshots of the Duo hosted SSO tenant (account ID, company name, staff name, application key, certificate fingerprints) were removed from the text; the source images need redaction or replacement. Evidence: img-items.json (360049850994_mceclip6, mceclip7, mceclip8).
:::

Duo can act as the SAML identity provider (IdP) for Netwrix Privilege Secure for Discovery in two ways: through an on-premises Duo Access Gateway (DAG), or through Duo hosted single sign-on (SSO). Read [SAML SSO configuration reference](./saml-sso-reference.md) first for the field definitions.

In the following procedures, `<fqdn>` is the fully qualified domain name of Privilege Secure for Discovery.

## Prerequisites

Both methods need a Duo service plan with the following:

- Active Directory (AD) sync configured and synced.
- Single sign-on enabled.
- The Duo Authentication Proxy installed and configured for AD sync and SSO.
- A single sign-on authentication source configured and tested.

## Duo Access Gateway

Use this section when you integrate Privilege Secure for Discovery through an on-premises DAG.

### Configure the Duo Access Gateway

1. Sign in to the **Duo Access Gateway Admin Console**.
2. Open the authentication source page and add the attribute that corresponds to the Duo user name attribute in the attributes field.
3. Select **Applications** in the left sidebar.
4. Locate the **Metadata** section. You provide this information to Duo when you configure the DAG as the IdP.
5. Select **Download certificate**.

### Create the Duo application

1. In a new tab, sign in to the **Duo Admin Panel**.
2. In the left sidebar, select **Applications** > **Protect an application**.
3. Search for SAML and select the **SAML Duo Network Gateway** application.
4. At the top of the page, enter the FQDN of the Privilege Secure for Discovery server and save the configuration.
5. At the top of the application's property page, select **Download your configuration file** to get the file in JSON format.
6. Return to the **DAG Admin Console**.
7. Select **Add application**, select **Choose file**, locate the downloaded file, and upload it.
8. Return to the **Duo Admin Panel** and set the following DAG parameters. In the table, `<base_url>` is the URL that users use to reach Privilege Secure for Discovery internally.

   | Setting | Value |
   | --- | --- |
   | **Service provider name** | A name that identifies the environment, for example `Privilege Secure-PROD`. |
   | **Entity ID** | `<base_url>`. Use a different Entity ID for production and non-production environments, for example `<base_url>-PROD`. The value must match the **Issuer** in the product. |
   | **Assertion Consumer Service** | `<base_url>/api/v1/login` |
   | **Single Logout URL** | Leave blank. |
   | **Default Relay State** | Leave blank. |

9. In the **SAML Response** section, set the following values.

   | Setting | Value |
   | --- | --- |
   | **NameID format** | `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified` |
   | **NameID attribute** | `Username` |
   | **Send attributes** | The **NameID** option |
   | **Signature algorithm** | SHA-256 |
   | **Sign response** | Selected |
   | **Sign assertion** | Selected |
   | **Map attributes** | **IdP Attribute** `distinguishedName`, **SAML Response Attribute** `dn` |

10. Leave **Create attributes** blank.

### Enter the SAML information in Privilege Secure for Discovery

1. In Duo, copy the SAML values for the application: the single sign-on URL, the entity ID, and the signing certificate.
2. In Privilege Secure for Discovery, go to **Configure** > **Server** > **SAML Configuration**.
3. Enter the values in **Entrypoint**, **Issuer**, and **Issuer Cert** as described in the [field reference](./saml-sso-reference.md#saml-configuration-fields).
4. Enable **SSO Enabled** and save.

The sign-in page now shows an **SSO Login** option. Select it to sign in through Duo.

## Duo hosted SSO

Use this section when Duo hosts the single sign-on service.

### Create the Duo application

1. In the Duo Admin Panel, create a SAML application for Privilege Secure for Discovery.

   ![Duo Admin Panel page for creating the SAML application](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip0.webp)

2. In the **Service Provider** section, enter the following values. Replace the example values with the values for your environment.

   | Setting | Value |
   | --- | --- |
   | **Base URL** | `https://<fqdn>` |
   | **Entity ID** | Any unique string. Use the product URL. It must match the **Issuer** in the product. |
   | **Assertion Consumer Service** | `https://<fqdn>/api/v1/login` |

   ![Duo Service Provider section with the product URL entered](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip0.webp)

3. In the **SAML Response** section, set **NameID attribute** as required (the NameID format can also be `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified`).
4. Under **Map attributes**, type `distinguishedName` for **IdP Attribute** and `dn` for **SAML Response Attribute**. You must type both values manually.

   ![Duo SAML Response section with the NameID setting](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_image.webp)

   ![Duo attribute mapping from distinguishedName to dn](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_image__1_.webp)

5. Leave the remaining **SAML Response** fields blank.
6. The **Policy** section needs no settings from Privilege Secure for Discovery. Configure it to suit your environment.
7. In the **Settings** section, enter an appropriate name and configure the rest to suit your environment.

   ![Duo Settings section with the application name](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip4.webp)

8. The **Hostname allowlist** section needs no settings from Privilege Secure for Discovery. Configure it to suit your environment.
9. Select **Save**.

### Retrieve the SAML information from Duo

Open the application's **Metadata** section and copy the single sign-on URL, the entity ID, and the signing certificate.

:::warning[Screenshot needs attention: remove before publishing]
TODO: 360049850994_mceclip6.webp, mceclip7.webp, and mceclip8.webp show a Duo account ID, company names, staff names, an application key, and certificate fingerprints. Redact or replace before publishing.
:::

![Duo application metadata with the single sign-on URL and certificate](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip7.webp)

### Enter the SAML information in Privilege Secure for Discovery

1. Go to **Configure** > **Server** > **SAML Configuration**.
2. Enter the Duo values in **Entrypoint**, **Issuer**, and **Issuer Cert** as described in the [field reference](./saml-sso-reference.md#saml-configuration-fields).

   ![Privilege Secure for Discovery SAML Configuration panel filled with Duo values](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip8.webp)

3. Enable **SSO Enabled** and save.

   ![SSO Enabled option at the bottom of the SAML Configuration panel](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip9_192x74.webp)

### Sign in with Duo

1. On the sign-in page, select **SSO Login**.
2. Optional: To start from Duo (IdP-initiated), use the single sign-on URL in the application's **Metadata** section.

   ![Duo application Metadata section with the single sign-on URL](/images/privilegesecure/4.2/discovery/admin/configuration/360049850994_mceclip0_650x254.webp)

## Troubleshoot Duo sign-in

If sign-in fails with "SAML Assertion Not Yet Valid", see [Troubleshoot SAML sign-in](./saml-sso-reference.md#troubleshoot-saml-sign-in).

## Related information

- [Duo Authentication Proxy reference](https://duo.com/docs/authproxy-reference)
- [Duo generic SAML single sign-on](https://duo.com/docs/sso-generic)
- [Duo single sign-on](https://duo.com/docs/sso)
