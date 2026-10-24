---
title: "Sign in with Okta using OpenID Connect"
description: "Set up Okta as the OpenID Connect identity provider so users sign in to the Privilege Secure Console with their Okta accounts."
sidebar_position: 10
---

# Sign in with Okta using OpenID Connect

Users can sign in to the Privilege Secure Console with Okta. Okta authenticates the user. Privilege Secure then matches the Okta user to a user in the Active Directory (AD) data that it holds.

This page covers the Okta-specific settings. For the connector steps, see [Configure an OpenID Connect connector](../../configuration/authentication/openid-connect.md).

## Prerequisites

- An Okta administrator account.
- The AD users who sign in appear on the **Users & Groups** page in Privilege Secure.
- Each Okta user has a **Username** that matches a field of the matching AD user: the email address or the user principal name.

## Register Privilege Secure in Okta

Create an application for Privilege Secure in Okta, and set these values. The callback and CORS addresses are the ones in the prerequisites of [Configure an OpenID Connect connector](../../configuration/authentication/openid-connect.md#prerequisites).

| Okta setting | Value |
|---|---|
| Callback (redirect) address | `https://<nps-server>:6500/callback` |
| Sign-out redirect address | `https://<nps-server>:6500/logoutCallback` |
| CORS origin | `https://<nps-server>:6500` |
| Grant type | **Implicit (hybrid)** |
| Sub-settings | **Allow ID Token with implicit grant type** and **Allow Access Token with implicit grant type**, both selected |

Copy the **Client ID** of the Okta application and the issuer address of your Okta authorization server.

{/* TODO verify: the Okta admin console path to create the application, the format of the Okta issuer address, and whether Okta requires the sign-out redirect address. */}

## Match Okta users to AD users

Privilege Secure uses the Okta **Username** to find the AD user. In the connector, **Login Format** says which AD property to compare it with.

| Login Format | Use when the Okta Username is |
|---|---|
| **Email Address** | The user's email address |
| **User Principal Name** | The user's user principal name |

Okta doesn't allow a sAMAccountName as a username, so don't select **sAMAccountName** for an Okta connector.

For example, an AD user has the user principal name `jsmith@example.com` and the email address `john.smith@example.com`. An Okta user named `john.smith@example.com` needs **Email Address**. An Okta user named `jsmith@example.com` needs **User Principal Name**. Both resolve to the same AD user.

If you create the Okta user with a password that the user must change, the user sets it in Okta. Privilege Secure regains control when the user finishes.

Ensure Okta assigns the Privilege Secure application to each user who signs in.

{/* TODO verify: that the application assignment is required in your Okta configuration (it can be automatic by group), and the Okta menu path to assign it. */}

## Add the connector in Privilege Secure

1. Follow [Configure an OpenID Connect connector](../../configuration/authentication/openid-connect.md#add-the-connector). Enter the Okta issuer address and the Okta **Client ID**.
1. In **Login Format**, select **Email Address** or **User Principal Name**.
1. Assign the connector to the users. See [Assign the connector to users](../../configuration/authentication/openid-connect.md#assign-the-connector-to-users).

## Give users access

A user who signs in with Okta needs a role in Privilege Secure. Assign roles on **Users & Groups** > **Role Management**. See [Assign administrators, reviewers, and auditors](../../admin/roles/assign-roles.md).

## Related topics

- [Configure an OpenID Connect connector](../../configuration/authentication/openid-connect.md)
- [Authentication methods](../../configuration/authentication/overview.md)
- [Add Microsoft Entra ID as an Authentication Connector (OpenID Connect)](/docs/kb/privilegesecure/authentication-and-mfa/add-microsoft-entra-id-as-an-authentication-connector-openid-connect)
- [Add Active Directory Federation Services (AD FS) as an Authentication Connector (OpenID Connect)](/docs/kb/privilegesecure/authentication-and-mfa/add-active-directory-federation-services-ad-fs-as-an-authentication-connector-openid-connect)
