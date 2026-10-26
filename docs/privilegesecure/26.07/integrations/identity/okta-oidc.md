---
title: "Sign in with Okta using OpenID Connect"
description: "Set up Okta as the OpenID Connect identity provider so users sign in to the Privilege Secure Console with their Okta accounts."
sidebar_position: 10
---

# Sign in with Okta using OpenID Connect

Users can sign in to the Privilege Secure Console with Okta. Okta authenticates the user. Privilege Secure then matches the Okta user to a user in the Active Directory (AD) data that it holds.

This page covers the Okta-specific settings. For the connector steps, see [Configure an OpenID Connect connector](/docs/privilegesecure/26.07/configuration/authentication/openid-connect.md).

## Prerequisites

- An Okta administrator account.
- The AD users who sign in appear on the **Users & Groups** page in Privilege Secure.
- Each Okta user has a **Username** that matches a field of the matching AD user: the email address or the user principal name.

## Register Privilege Secure in Okta

In the Okta Admin Console, go to **Applications** > **Applications**, click **Create App Integration**, and select **OIDC - OpenID Connect** as the sign-in method. Set these values. The callback and CORS addresses are the ones in the prerequisites of [Configure an OpenID Connect connector](/docs/privilegesecure/26.07/configuration/authentication/openid-connect.md#prerequisites).

| Okta setting | Value |
|---|---|
| Callback (redirect) address | `https://<nps-server>:6500/callback` |
| Sign-out redirect address | `https://<nps-server>:6500/logoutCallback` |
| CORS origin | `https://<nps-server>:6500` |
| Grant type | **Implicit (hybrid)** |
| Sub-settings | **Allow ID Token with implicit grant type** and **Allow Access Token with implicit grant type**, both selected |

Okta treats sign-out redirect addresses as optional. The Privilege Secure Console sends its sign-out address when a user signs out, so register it to return the user to the console.

Copy the **Client ID** of the Okta application and the issuer address of your Okta authorization server. The issuer address of the Okta org authorization server is `https://<your-okta-domain>`. The issuer address of a custom authorization server is `https://<your-okta-domain>/oauth2/<authorization-server-id>`, and the default custom server uses `default` as its ID.

## Match Okta users to AD users

Privilege Secure uses the Okta **Username** to find the AD user. In the connector, **Login Format** says which AD property to compare it with.

| Login Format | Use when the Okta Username is |
|---|---|
| **Email Address** | The user's email address |
| **User Principal Name** | The user's user principal name |

Okta doesn't allow a sAMAccountName as a username, so don't select **sAMAccountName** for an Okta connector.

For example, an AD user has the user principal name `jsmith@example.com` and the email address `john.smith@example.com`. An Okta user named `john.smith@example.com` needs **Email Address**. An Okta user named `jsmith@example.com` needs **User Principal Name**. Both resolve to the same AD user.

If you create the Okta user with a password that the user must change, the user sets it in Okta. Privilege Secure regains control when the user finishes.

Ensure Okta assigns the Privilege Secure application to each user who signs in. When you create the application, Okta lets you assign it to everyone in the org or to selected groups. To change the assignment later, open the application in **Applications** > **Applications**, select the **Assignments** tab, and use **Assign** to add people or groups.

## Add the connector in Privilege Secure

1. Follow [Configure an OpenID Connect connector](/docs/privilegesecure/26.07/configuration/authentication/openid-connect.md#add-the-connector). Enter the Okta issuer address and the Okta **Client ID**.
1. In **Login Format**, select **Email Address** or **User Principal Name**.
1. Assign the connector to the users. See [Assign the connector to users](/docs/privilegesecure/26.07/configuration/authentication/openid-connect.md#assign-the-connector-to-users).

## Give users access

A user who signs in with Okta needs a role in Privilege Secure. Assign roles on **Users & Groups** > **Role Management**. See [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md).

## Related topics

- [Configure an OpenID Connect connector](/docs/privilegesecure/26.07/configuration/authentication/openid-connect.md)
- [Authentication methods](/docs/privilegesecure/26.07/configuration/authentication/overview.md)
- [Add Microsoft Entra ID as an Authentication Connector (OpenID Connect)](/docs/kb/privilegesecure/authentication-and-mfa/add-microsoft-entra-id-as-an-authentication-connector-openid-connect)
- [Add Active Directory Federation Services (AD FS) as an Authentication Connector (OpenID Connect)](/docs/kb/privilegesecure/authentication-and-mfa/add-active-directory-federation-services-ad-fs-as-an-authentication-connector-openid-connect)
