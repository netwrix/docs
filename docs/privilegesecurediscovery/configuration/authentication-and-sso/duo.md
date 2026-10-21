---
title: "Configure Duo SSO"
description: "Create a Generic SAML Service Provider application in Duo Single Sign-On and enter the Duo values in Privilege Secure for Discovery."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm which Duo attribute gives the value that **Match User By** needs, for a Duo Single Sign-On tenant with an Active Directory (AD) authentication source. Evidence: the Duo documentation lists **NameID attribute** as a choice; which attribute carries the sAMAccountName or the user principal name depends on the Duo authentication source settings, and no tenant was available to check.

TODO: Confirm the field names **Service Provider Login URL**, **Sign response**, and **Sign assertion** in the Duo application. Evidence: the Duo documentation for the Generic SAML Service Provider (duo.com/docs/sso-generic).
:::

Duo Single Sign-On can act as the SAML identity provider (IdP) for Netwrix Privilege Secure for Discovery, with Duo enforcing multifactor authentication (MFA). Read the [SAML SSO configuration reference](./saml-sso-reference.md) first. This page shows the values for the Duo application and for the product. For the Duo screens, see the Duo documentation: [Generic SAML Service Provider](https://duo.com/docs/sso-generic) and [Duo Single Sign-On](https://duo.com/docs/sso).

This page doesn't cover Duo Access Gateway, the on-premises predecessor. Contact Netwrix Support if you use it.

In the following steps, `<fqdn>` is the fully qualified domain name of Privilege Secure for Discovery.

## Prerequisites

- A Duo plan with Duo Single Sign-On enabled, and an authentication source for your Active Directory (AD) users. See [Duo Single Sign-On](https://duo.com/docs/sso).
- Duo users that match your AD users, and a way to tell which Duo user name matches which AD account.
- The users or groups added to the product. See [Add users to Privilege Secure for Discovery](../onboard-systems/add-users-to-privilege-secure.md).

## Create the Duo application

1. In the Duo Admin Panel, select **Applications** > **Application Catalog**.
2. Find **Generic SAML Service Provider**, which Duo labels **SSO**, and select **Add**.
3. In **Service Provider**, enter the following values.

   | Duo setting | Value |
   | --- | --- |
   | **Metadata Discovery** | **None (manual import)** |
   | **Entity ID** | `https://<fqdn>` |
   | **Assertion Consumer Service (ACS) URL** | `https://<fqdn>/api/v1/login` |
   | **Single Logout URL** | Leave blank. |
   | **Service Provider Login URL** | `https://<fqdn>/api/v1/login/sso`. Users who start from Duo go to this address. |
   | **Default Relay State** | Leave blank. |

4. In **SAML Response**, set the following values.

   | Duo setting | Value |
   | --- | --- |
   | **NameID format** | **Unspecified**, or the format of the attribute that you send. |
   | **NameID attribute** | The Duo attribute that holds the AD account name that you match in the product. |
   | **Signature Algorithm** | **SHA-256**, which is the default. |
   | **Sign response** and **Sign assertion** | Both selected, which is the default. The product requires both. |

   Leave **Assertion encryption** off, and leave the attribute mapping empty.
5. In **Policy**, set the Duo policy that requires MFA for this application. Duo, not the product, enforces MFA for SSO users. See [MFA with SSO](./saml-sso-reference.md#mfa-with-sso).
6. Set **User access** so that the users can sign in. New users can't sign in until you permit them.
7. Name the application, for example `Privilege Secure for Discovery`, and select **Save**.

## Get the Duo values

In the **Metadata** section of the application, copy the **Single Sign-On URL** and the **Certificate**. Duo shows the **Entity ID** and the **SHA-256** fingerprint there too.

## Configure Privilege Secure for Discovery

1. Select **Configure** > **Server**.
2. In **SAML Configuration**, enter the following values.

   | Setting | Value |
   | --- | --- |
   | **Entrypoint** | The **Single Sign-On URL** from Duo. |
   | **Issuer** | `https://<fqdn>`, the same value as the **Entity ID** in the **Service Provider** section of Duo. |
   | **Issuer Cert** | The Duo certificate, without the `BEGIN CERTIFICATE` and `END CERTIFICATE` lines. |
   | **SSO Enabled** | **Disabled** while you stage the configuration. |
   | **SSO Flow** | **SP-Initiated** |
   | **ID Claim** | `nameID` |
   | **Match User By** | See the following table. |

   | Duo sends as the NameID | Match User By |
   | --- | --- |
   | The AD `sAMAccountName`, for example `jsmith` | `${sAMAccountName}` |
   | The AD user principal name, for example `jsmith@example.com`, when the suffix is the domain name | `${sAMAccountName}@${domain_fqdn}` |

   The value must equal the product user record exactly, including the case. With several domains, use a value that includes the domain.

3. Save the configuration, review the saved values, then set **SSO Enabled** to **Enabled**.

## Sign in with Duo

1. Open `https://<fqdn>` in a new private browser window.
2. Select **SSO Login**. If **Auto-Redirect to IdP** is on, the redirect to Duo starts by itself.
3. Sign in with Duo, and complete the Duo prompt.

If sign-in fails, use the **Non-SSO sign-in URL** to sign in locally. See [Troubleshoot SAML sign-in](./saml-sso-reference.md#troubleshoot-saml-sign-in).

## Start from Duo (IdP-initiated)

To start from Duo instead, set **SSO Flow** to **IdP-Initiated** and set **Entrypoint** to the **Single Sign-On URL** of the Duo application. Users then use the application in Duo Central, and Duo posts the assertion to the product.
