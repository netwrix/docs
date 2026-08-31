---
title: "Configure SAML SSO with Microsoft Entra ID"
sidebar_label: "SAML SSO"
description: "Configure and validate SP-initiated Microsoft Entra SAML SSO for Netwrix Privilege Secure for Discovery, including local recovery and automatic IdP redirection."
sidebar_position: 30
---

# Configure SAML SSO with Microsoft Entra ID

Configure a non-gallery Microsoft Entra enterprise application for service provider-initiated (SP-initiated) Security Assertion Markup Language (SAML) single sign-on (SSO) to Netwrix Privilege Secure for Discovery (NPS-D).

Complete [Microsoft Graph directory synchronization](./directorysynchronization.md) first. The Graph app registration and SAML enterprise application are separate applications. The SAML application doesn't use the Graph client secret.

Keep a tested local NPS-D administrator session open throughout the configuration.

The screenshots in this procedure show a documentation lab and example values. Use the customer fully qualified domain name (FQDN) and the values from the approved implementation record.

## Create a non-gallery enterprise application

1. In the **Microsoft Entra admin center**, go to **Identity > Applications > Enterprise applications > All applications**.
2. Select **New application > Create your own application**.

   ![Create an enterprise application](/img/product_docs/privilegesecurediscovery/microsoftentraid/01-entra-app-gallery-create-own.webp)

3. Enter a name such as `NPSD-<environment>-SAML`.
4. Select **Integrate any other application you don't find in the gallery (Non-gallery)**.
5. Select **Create**.
6. Assign at least two accountable owners.

   ![Create a non-gallery SAML application](/img/product_docs/privilegesecurediscovery/microsoftentraid/02-entra-create-non-gallery-tm-npsd.webp)

7. Set **Assignment required?** to **Yes**.
8. If the application already contains users or inherited configuration, keep sign-in disabled while you stage the configuration.

## Configure the SAML URLs

1. Open **Single sign-on > SAML > Basic SAML Configuration**.
2. Enter the values from the [integration worksheet](./overview.md#record-the-integration-values).

   | Microsoft Entra field | Value |
   | --- | --- |
   | Identifier (Entity ID) | `https://npsd.example.com` |
   | Reply URL (Assertion Consumer Service URL) | `https://npsd.example.com/api/v1/login` |
   | Sign-on URL | `https://npsd.example.com/api/v1/login/sso` |
   | Relay State | Leave empty. |
   | Logout URL | Leave empty. |

   ![Basic SAML configuration overview](/img/product_docs/privilegesecurediscovery/microsoftentraid/03-entra-saml-overview-tm-npsd.webp)

3. Confirm that the Identifier and the NPS-D Issuer are identical. Compare the scheme, host, path, case, and trailing slash before you save the configuration.

## Configure NameID

1. Under **Attributes & Claims**, edit the unique user identifier.
2. Enter the following values.

   | Microsoft Entra setting | Value |
   | --- | --- |
   | Name | Name ID |
   | Source | Attribute |
   | Source attribute | `user.userprincipalname` |
   | Name identifier format | Email address |

   ![Verify Basic SAML values and the NameID claim](/img/product_docs/privilegesecurediscovery/microsoftentraid/04-entra-saml-verified-overview.webp)

The baseline NPS-D match template is `${sAMAccountName}@${domain_fqdn}`. The returned NameID must exactly match the calculated value, including case. If it doesn't match, configure a supported claim-to-field mapping that matches an existing NPS-D identity before you enable SSO.

## Configure signing

1. Under **SAML Certificates**, set **Signing Option** to **Sign SAML response and assertion**.
2. Set the signing algorithm to **SHA-256**.
3. Save the configuration.
4. Download **Certificate (Base64)** from this enterprise application.

![Sign the SAML response and assertion with SHA-256](/img/product_docs/privilegesecurediscovery/microsoftentraid/05-entra-signing-response-and-assertion.webp)

The certificate is application-specific. Don't reuse a certificate from another enterprise application. Record its fingerprint, expiration date, and owner in the operational inventory.

## Assign a pilot identity

1. Open **Users and groups**.
2. Add the approved pilot user or tightly controlled pilot group.
3. Keep **Assignment required?** set to **Yes**.
4. Confirm that the same identity already exists in NPS-D and has an effective NPS-D role.

![Assign the controlled pilot identity](/img/product_docs/privilegesecurediscovery/microsoftentraid/06-entra-user-assignment.webp)

## Configure SAML in NPS-D

1. In NPS-D, open **Configure > Server > SAML Configuration**.
2. Enter the required values.

   | NPS-D field | Required value |
   | --- | --- |
   | Entrypoint | Enter the Microsoft Entra **Login URL**, normally `https://login.microsoftonline.com/<tenant-id>/saml2`. |
   | Issuer | Enter exactly the same value as the Microsoft Entra Identifier, such as `https://npsd.example.com`. |
   | Issuer Cert | Paste the Base64 body of the active certificate from this enterprise application. |
   | SSO Enabled | Keep disabled while staging. Enable only after you review all fields. |
   | SSO Flow | Select **SP-Initiated**. |
   | force IdP reauthentication | Keep off for the baseline configuration. |
   | Auto-Redirect to IdP | Keep off during initial staging and baseline validation. This option is available in NPS-D 26.09.0 and later. |
   | ID Claim | Enter `nameID`. |
   | Match User By | Enter `${sAMAccountName}@${domain_fqdn}`. |
   | Non-SSO sign-in URL | Enter `https://npsd.example.com/#/login`. |

3. For **Issuer Cert**, paste the Base64 certificate body without the `BEGIN CERTIFICATE` and `END CERTIFICATE` marker lines.
4. Save the configuration while **SSO Enabled** is off.
5. Reopen the configuration and verify the saved values.
6. Enable SSO, and save the configuration again.

![Review the saved NPS-D SAML settings](/img/product_docs/privilegesecurediscovery/microsoftentraid/07-npsd-saml-operational-settings.webp)

> **Version note:** This screenshot shows NPS-D 26.06 and doesn't include Auto-Redirect to IdP. Starting with NPS-D 26.09.0, the **SAML/SSO Configuration** section includes an Auto-Redirect to IdP row with the **redirect to IdP on login page** checkbox.

## Select the login behavior

Keep Auto-Redirect to IdP off until the baseline SAML flow and local recovery login pass acceptance testing.

| Setting | Login behavior |
| --- | --- |
| Off (default) | The local username and password form appears first. After you enable SSO, users can select **Show SSO login**, then **SSO Login**. |
| On with SSO enabled | An unauthenticated request to a protected NPS-D route starts SSO and redirects the browser to the identity provider (IdP). A direct visit to the NPS-D login page opens the SSO view first and retains **Show local login**. |
| On with SSO disabled | The local login form remains available, and NPS-D doesn't start an SSO redirect. |

SAML and local username and password authentication remain available from the NPS-D login experience. Preserve and test the local recovery path after every SAML change and before you enable automatic redirection.

## Validate the baseline SAML flow

### Verify local login

1. Open `https://npsd.example.com/#/login` in a private browser window.
2. Confirm that local username and password authentication works before you start the SAML test.

![NPS-D local login with Show SSO login](/img/product_docs/privilegesecurediscovery/microsoftentraid/13-npsd-login-show-sso.webp)

### Start SP-initiated SSO

1. Select **Show SSO login**.
2. Select **SSO Login**.
3. Complete Microsoft Entra authentication and any Conditional Access requirements.

![Start SSO from the NPS-D login page](/img/product_docs/privilegesecurediscovery/microsoftentraid/14-npsd-sso-login-button.webp)

NPS-D sends the browser to Microsoft Entra, receives the signed response at `/api/v1/login`, matches the NameID to the existing NPS-D user, and opens the NPS-D session.

### Confirm the authenticated session

Confirm that:

- The expected NPS-D identity is signed in.
- The effective NPS-D role is correct.
- The browser is on the final application route.
- Local recovery still works in a separate private browser window.

![Authenticated NPS-D landing page after SAML](/img/product_docs/privilegesecurediscovery/microsoftentraid/08-npsd-saml-success.webp)

Don't capture evidence while the browser transitions through `/#/login?samlAuth=<JWT>`. Capture the final application page only after the token-bearing fragment disappears.

## Enable automatic redirection

This option is available in NPS-D 26.09.0 and later. Complete this procedure only after the baseline SAML flow and local recovery login succeed.

1. Keep the tested local administrator session open.
2. Open **Configure > Server > SAML Configuration**.
3. Under Auto-Redirect to IdP, select **redirect to IdP on login page**.
4. Confirm that NPS-D displays **Configuration successfully updated.**
5. In a new private browser window, request a protected NPS-D route.
6. Confirm that the browser starts SSO and reaches Microsoft Entra.
7. Open `https://npsd.example.com/#/login` directly.
8. Confirm that the SSO view appears first and provides **Show local login**.
9. Select **Show local login**, and verify the tested local administrator credentials.

If SSO or local recovery fails, use the preserved administrator session to turn Auto-Redirect to IdP off.

## Acceptance tests

Record evidence for the following tests:

- An assigned, synchronized, and authorized pilot user succeeds.
- Microsoft Entra denies an unassigned user.
- NPS-D denies an assigned user who has no NPS-D account.
- NPS-D denies a user without an effective NPS-D role.
- An incorrect Reply URL fails in a controlled manner.
- A case-mismatched NameID doesn't match.
- NPS-D rejects an inactive or incorrect signing certificate.
- Local recovery login succeeds after SSO enablement.
- With Auto-Redirect to IdP off, the local login form appears first and **Show SSO login** works.
- With automatic redirection enabled in NPS-D 26.09.0 or later, an unauthenticated protected-route request starts SSO and the direct login page still provides **Show local login**.
- Distributable evidence contains no password, client secret, SAML assertion, JSON Web Token (JWT), multifactor authentication prompt, certificate body, or sensitive customer identifier.

## Training video

The following English walkthrough shows Microsoft Graph synchronization and SP-initiated SAML configuration.

The video uses NPS-D 26.06 and doesn't show Auto-Redirect to IdP, which is available in NPS-D 26.09.0 and later.

<video controls preload="metadata" width="100%">
  <source src="/videos/privilegesecurediscovery/microsoftentraid/entra-id-saml-configuration.mp4" type="video/mp4" />
  Your browser doesn't support the video tag.
</video>

For error resolution and final commissioning checks, see [Validate and troubleshoot the integration](./validationandtroubleshooting.md).

## Related Microsoft documentation

- [Configure SAML-based SSO](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso)
