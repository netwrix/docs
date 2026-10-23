---
title: "Configure Okta SSO"
description: "Create a SAML application in Okta, require multifactor authentication in Okta, and enter the Okta values in Privilege Secure for Discovery."
sidebar_position: 40
---

Okta can act as the SAML identity provider (IdP) for Netwrix Privilege Secure for Discovery, with Okta enforcing multifactor authentication (MFA). Read the [SAML SSO configuration reference](./saml-sso-reference.md) first. This page shows the values for the Okta application and for the product. For the Okta screens, see the Okta documentation: [Create SAML app integrations](https://help.okta.com/oie/en-us/Content/Topics/apps/apps_app_integration_wizard_saml.htm) and the [SAML field reference](https://help.okta.com/oie/en-us/Content/Topics/apps/aiw-saml-reference.htm).

In the following steps, `<fqdn>` is the fully qualified domain name of Privilege Secure for Discovery.

## Prerequisites

- Administrator access to Okta and to Privilege Secure for Discovery.
- Okta users that match your Active Directory (AD) users. If AD is the source of your Okta users, install the Okta AD Agent. See [Okta AD agent integration](https://help.okta.com/en/prod/Content/Topics/Directory/ad-agent-new-integration.htm).
- Okta usernames that equal `<sAMAccountName>@<AD domain FQDN>` for each user, for example `jsmith@example.com`. An alternate user principal name (UPN) suffix doesn't match. The product matches the user from this value.
- The users or groups added to the product. See [Add users to Privilege Secure for Discovery](../onboard-systems/add-users-to-privilege-secure.md).

## Create the Okta application

1. In the Okta Admin Console, select **Applications** > **Applications**, and then select **Create App Integration**.
2. Select **SAML 2.0**, and then select **Next**.
3. For **App name**, enter `Privilege Secure for Discovery`, and then select **Next**.
4. In the **SAML Settings** section, enter the following values.

   | Okta setting | Value |
   | --- | --- |
   | **Single sign-on URL** | `https://<fqdn>/api/v1/login` |
   | **Use this for Recipient URL and Destination URL** | Selected, which is the default. |
   | **Audience URI (SP Entity ID)** | `https://<fqdn>` |
   | **Default RelayState** | Leave blank. |
   | **Name ID format** | **Unspecified**, which is the default. |
   | **Application username** | The Okta setting that gives the AD user principal name, for example **Okta username** when it equals the UPN. |

5. Select **Show Advanced Settings**, and confirm the following values. They are the Okta defaults, and the product requires them.

   | Okta setting | Value |
   | --- | --- |
   | **Response** | **Signed** |
   | **Assertion Signature** | **Signed** |
   | **Signature Algorithm** | **RSA-SHA256** |
   | **Digest Algorithm** | **SHA256** |

   Leave **Honor Force Authentication** at **Yes**. The product uses it when **force IdP reauthentication** is on.
6. Leave **Attribute Statements** empty. The product matches the user from the NameID.
7. Select **Next**. Select **I'm an Okta customer adding an internal app**, and then select **Finish**.

## Assign users and require MFA

1. On the **Assignments** tab of the application, assign the people and groups that need access to Privilege Secure for Discovery.
2. On the **Sign On** tab, select an **Authentication policy** that requires MFA, for example **Any two factors**.

Okta is the only place where MFA happens for SSO users. The product doesn't ask SSO users for its own second factor. See [MFA with SSO](./saml-sso-reference.md#mfa-with-sso).

## Get the Okta values

1. On the **Sign On** tab, in **SAML Signing Certificates**, select **View SAML setup instructions** for the active certificate.
2. Copy the **Identity Provider Single Sign-On URL** and the **X.509 Certificate**.

## Configure Privilege Secure for Discovery

1. Select **Configure** > **Server**.
2. In **SAML Configuration**, enter the following values.

   | Setting | Value |
   | --- | --- |
   | **Entrypoint** | The **Identity Provider Single Sign-On URL** from Okta. |
   | **Issuer** | `https://<fqdn>`, the same value as the **Audience URI** in Okta. |
   | **Issuer Cert** | The Okta certificate, without the `BEGIN CERTIFICATE` and `END CERTIFICATE` lines. |
   | **SSO Enabled** | **Disabled** while you stage the configuration. |
   | **SSO Flow** | **SP-Initiated** |
   | **ID Claim** | `nameID` |
   | **Match User By** | `${sAMAccountName}@${domain_fqdn}` |

3. Save the configuration, review the saved values, then set **SSO Enabled** to **Enabled**.

These settings work only when the Okta username is exactly `sAMAccountName@<AD domain FQDN>`. The match is case-sensitive, and the product has no UPN field to match against. A user whose UPN has an alternate suffix, or whose username differs in case, can't sign in.

## Sign in with Okta

1. Open `https://<fqdn>` in a new private browser window.
2. Select **SSO Login**. If **Auto-Redirect to IdP** is on, the redirect to Okta starts by itself.
3. Sign in to Okta and complete the MFA prompt.

If sign-in fails, use the **Non-SSO sign-in URL** to sign in locally. See [Troubleshoot SAML sign-in](./saml-sso-reference.md#troubleshoot-saml-sign-in). The **System Log** in the Okta Admin Console shows what Okta sent.

## Start from Okta (IdP-initiated)

To let users start from the Okta dashboard, change the following settings.

1. In Privilege Secure for Discovery, set **SSO Flow** to **IdP-Initiated**.
2. Set **Entrypoint** to the embed link of the Okta application, from the **General** tab of the application.

Users then select the application tile in Okta, and Okta posts the assertion to the product.

## Send the distinguished name instead

Earlier configurations send the AD distinguished name in a claim named `dn`. To keep that mapping, add an attribute statement in Okta that sends the distinguished name as `dn`. In the product, set **ID Claim** to `dn` and **Match User By** to `distinguishedName`. For the steps to map the directory attribute, see the Okta documentation on profile mappings.
