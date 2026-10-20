---
title: "Configure SAML SSO with Microsoft Entra ID"
sidebar_label: "SAML SSO"
description: "Configure and validate SP-initiated Microsoft Entra SAML single sign-on, local recovery login, and automatic redirection to the identity provider."
sidebar_position: 30
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: 07-npsd-saml-operational-settings-26.09.0.webp: the browser address bar shows a private IP address. Re-capture with the address bar cropped or replaced by an example FQDN.

TODO: The other screenshots show lab names such as tm-npsd (02, 03, 04) and tenant details. Review each for tenant names, user names, and domain names, and redact or re-capture.

TODO: The training video entra-id-saml-configuration.mp4 was recorded on an earlier release and shows lab values. Review it before publication and re-record if it shows tenant or user details.
:::

Configure a non-gallery Microsoft Entra enterprise application for service provider-initiated (SP-initiated) Security Assertion Markup Language (SAML) single sign-on (SSO) to Netwrix Privilege Secure for Discovery.

Complete [Microsoft Graph directory synchronization](./directory-synchronization.md) first. The Graph app registration and the SAML enterprise application are separate applications. The SAML application doesn't use the Graph client secret.

Keep a tested local administrator session open throughout the configuration. The screenshots show example values. Use the FQDN and values that you recorded in [Record the integration values](./overview.md#record-the-integration-values).

## Create a non-gallery enterprise application

1. In the **Microsoft Entra admin center**, go to **Identity > Applications > Enterprise applications > All applications**.
2. Select **New application > Create your own application**.

   ![The Microsoft Entra Create your own application option](/img/product_docs/privilegesecurediscovery/microsoftentraid/01-entra-app-gallery-create-own.webp)

3. Enter a name such as `PSD-<environment>-SAML`.
4. Select **Integrate any other application you don't find in the gallery (Non-gallery)**.
5. Select **Create**.

   ![The Create your own application pane with the non-gallery option selected](/img/product_docs/privilegesecurediscovery/microsoftentraid/02-entra-create-non-gallery-tm-npsd.webp)

6. Assign at least two accountable owners.
7. Set **Assignment required?** to **Yes**.
8. If the application already contains users or inherited configuration, keep sign-in disabled while you stage the configuration.

## Configure the SAML URLs

1. Open **Single sign-on > SAML > Basic SAML Configuration**.
2. Enter the following values.

   | Microsoft Entra field | Value |
   | --- | --- |
   | Identifier (Entity ID) | `https://psd.example.com` |
   | Reply URL (Assertion Consumer Service URL) | `https://psd.example.com/api/v1/login` |
   | Sign-on URL | `https://psd.example.com/api/v1/login/sso` |
   | Relay State | Leave empty. |
   | Logout URL | Leave empty. |

   ![The Basic SAML Configuration section of the enterprise application](/img/product_docs/privilegesecurediscovery/microsoftentraid/03-entra-saml-overview-tm-npsd.webp)

3. Confirm that the Identifier and the Privilege Secure for Discovery Issuer are identical. Compare the scheme, host, path, case, and trailing slash before you save the configuration.

## Configure NameID

1. Under **Attributes & Claims**, edit the unique user identifier.
2. Enter the following values.

   | Microsoft Entra setting | Value |
   | --- | --- |
   | Name | Name ID |
   | Source | Attribute |
   | Source attribute | `user.userprincipalname` |
   | Name identifier format | Email address |

   ![The verified Basic SAML values and the NameID claim](/img/product_docs/privilegesecurediscovery/microsoftentraid/04-entra-saml-verified-overview.webp)

The default match template is `${sAMAccountName}@${domain_fqdn}`. The returned NameID must exactly match the calculated value, including case. If it doesn't match, configure a supported claim-to-field mapping that matches an existing Privilege Secure for Discovery identity before you enable SSO.

## Configure signing

1. Under **SAML Certificates**, set **Signing Option** to **Sign SAML response and assertion**.
2. Set the signing algorithm to **SHA-256**.
3. Save the configuration.
4. Download **Certificate (Base64)** from this enterprise application.

![The SAML Certificates section with the signing option set to sign the response and assertion](/img/product_docs/privilegesecurediscovery/microsoftentraid/05-entra-signing-response-and-assertion.webp)

The certificate is application-specific. Don't reuse a certificate from another enterprise application. Record its fingerprint, expiration date, and owner.

## Assign a pilot identity

1. Open **Users and groups**.
2. Add the pilot user or a tightly controlled pilot group.
3. Keep **Assignment required?** set to **Yes**.
4. Confirm that the same identity already exists in Privilege Secure for Discovery and has an effective role.

![The Users and groups page of the enterprise application with a pilot assignment](/img/product_docs/privilegesecurediscovery/microsoftentraid/06-entra-user-assignment.webp)

## Configure SAML in Privilege Secure for Discovery

1. Open **Configure > Server > SAML Configuration**.
2. Enter the following values.

   | Field | Required value |
   | --- | --- |
   | Entrypoint | Enter the Microsoft Entra **Login URL**, normally `https://login.microsoftonline.com/<tenant-id>/saml2`. |
   | Issuer | Enter exactly the same value as the Microsoft Entra Identifier, such as `https://psd.example.com`. |
   | Issuer Cert | Paste the Base64 body of the active certificate from this enterprise application, without the `BEGIN CERTIFICATE` and `END CERTIFICATE` marker lines. |
   | SSO Enabled | Keep disabled while you stage the configuration. Enable it after you review all fields. |
   | SSO Flow | Select **SP-Initiated**. |
   | force IdP reauthentication | Keep off for the baseline configuration. |
   | Auto-Redirect to IdP | Keep off (the default) during staging and baseline validation. |
   | ID Claim | Enter `nameID`. |
   | Match User By | Enter `${sAMAccountName}@${domain_fqdn}`. |
   | Non-SSO sign-in URL | Enter `https://psd.example.com/#/login`. |

   ![The SAML Configuration settings with Auto-Redirect to IdP turned off](/img/product_docs/privilegesecurediscovery/microsoftentraid/07-npsd-saml-operational-settings-26.09.0.webp)

3. Save the configuration while **SSO Enabled** is off.
4. Reopen the configuration and verify the saved values.
5. Enable SSO, and save the configuration again.

## Select the login behavior

The **Auto-Redirect to IdP** option controls how the login page behaves. Keep it off until the baseline SAML flow and the local recovery login pass testing.

| Setting | Login behavior |
| --- | --- |
| Off (default) | The local username and password form appears first. After you enable SSO, users can select **Show SSO login**, then **SSO Login**. |
| On with SSO enabled | An unauthenticated request to a protected route starts SSO and redirects the browser to the identity provider (IdP). A direct visit to the login page opens the SSO view first and keeps **Show local login** available. |
| On with SSO disabled | The local login form remains available, and the product doesn't start an SSO redirect. |

SAML and local username and password authentication remain available from the login page. Test the local recovery path after every SAML change and before you enable automatic redirection.

## Validate the baseline SAML flow

### Verify local login

1. Open `https://psd.example.com/#/login` in a private browser window.
2. Confirm that local username and password authentication works before you start the SAML test.

![The sign-in page with the Show SSO login option](/img/product_docs/privilegesecurediscovery/microsoftentraid/13-npsd-login-show-sso.webp)

### Start SP-initiated SSO

1. Select **Show SSO login**.
2. Select **SSO Login**.

   ![The sign-in page with the SSO Login button](/img/product_docs/privilegesecurediscovery/microsoftentraid/14-npsd-sso-login-button.webp)

3. Complete Microsoft Entra authentication and any Conditional Access requirements.

The product sends the browser to Microsoft Entra, receives the signed response at `/api/v1/login`, matches the NameID to the existing user, and opens the session.

### Confirm the authenticated session

Confirm that:

- The expected identity is signed in.
- The effective role is correct.
- The browser is on the final application route.
- Local recovery still works in a separate private browser window.

![The application landing page after a successful SAML sign-in](/img/product_docs/privilegesecurediscovery/microsoftentraid/08-npsd-saml-success.webp)

## Enable automatic redirection

Complete this procedure only after the baseline SAML flow and the local recovery login succeed.

1. Keep the tested local administrator session open.
2. Open **Configure > Server > SAML Configuration**.
3. Under **Auto-Redirect to IdP**, select **redirect to IdP on login page**.
4. Confirm that the product displays **Configuration successfully updated.**
5. In a new private browser window, request a protected route.
6. Confirm that the browser starts SSO and reaches Microsoft Entra.
7. Open `https://psd.example.com/#/login` directly.
8. Confirm that the SSO view appears first and provides **Show local login**.
9. Select **Show local login**, and verify the local administrator credentials.

If SSO or local recovery fails, use the preserved administrator session to turn **Auto-Redirect to IdP** off.

## Acceptance tests

Run the following tests before you roll out SSO:

- An assigned, synchronized, and authorized pilot user succeeds.
- Microsoft Entra denies an unassigned user.
- Privilege Secure for Discovery denies an assigned user who has no account.
- Privilege Secure for Discovery denies a user without an effective role.
- An incorrect Reply URL fails in a controlled manner.
- A case-mismatched NameID doesn't match.
- Privilege Secure for Discovery rejects an inactive or incorrect signing certificate.
- Local recovery login succeeds after you enable SSO.
- With **Auto-Redirect to IdP** off, the local login form appears first and **Show SSO login** works.
- With **Auto-Redirect to IdP** on, an unauthenticated protected-route request starts SSO and the direct login page still provides **Show local login**.

Don't store passwords, client secrets, SAML assertions, JSON Web Tokens (JWTs), or certificate bodies in test records.

## Training video

The following English walkthrough shows Microsoft Graph synchronization and SP-initiated SAML configuration. It doesn't show the **Auto-Redirect to IdP** option.

<video controls preload="metadata" width="100%">
  <source src="/videos/privilegesecurediscovery/microsoftentraid/entra-id-saml-configuration.mp4" type="video/mp4" />
  Your browser doesn't support the video tag.
</video>

For error resolution and final checks, see [Validate and troubleshoot the integration](./validation-and-troubleshooting.md).

## Related Microsoft documentation

- [Configure SAML-based SSO](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso)
