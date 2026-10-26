---
title: "Configure RADIUS authentication"
description: "Connect Privilege Secure for Discovery to a RADIUS server so that users enter a second factor from the RADIUS service when they sign in."
sidebar_position: 50
---

Netwrix Privilege Secure for Discovery can use a Remote Authentication Dial-In User Service (RADIUS) server as the second authentication factor. The product checks the Active Directory (AD) password itself. It sends only the second factor to the RADIUS server. This page covers the RADIUS settings and the sign-in behavior.

## How it works

1. The user enters the AD account, the AD password, and a value in **Second Factor**.
2. The product checks the account and password against AD.
3. The product sends an Access-Request to the RADIUS server. The `User-Name` is the user name without the domain, for example `jsmith`. The `User-Password` is the value from **Second Factor**.
4. The product signs the user in when the RADIUS server answers with Access-Accept. It rejects the sign-in for Access-Reject, and for Access-Challenge, which the product doesn't support.

When you enable RADIUS, it replaces the built-in authenticator code (Google Authenticator) for every user who signs in with a user name and password. Users who sign in with SAML single sign-on (SSO) skip the second factor of the product. See [MFA with SSO](./saml-sso-reference.md#mfa-with-sso).

## Prerequisites

- A RADIUS server that accepts the second factor as the password of the request, and that answers with Access-Accept or Access-Reject. A server in a challenge-and-response mode doesn't work.
- The RADIUS server IP address or host name, the port, and the shared secret.
- Network access from the node that runs the API service to the RADIUS server. RADIUS uses UDP, and the common port is 1812.
- A way to sign in if RADIUS fails. The local `secureone` account doesn't use the second factor. Keep its password available.

## Enter the RADIUS settings

1. Select **Configure** > **Server**.
2. In **Radius Configuration**, enter the following values.

   ![The Radius Configuration panel with its default values](/images/privilegesecurediscovery/authentication-and-sso/sso-radius-configuration.webp)

   | Setting | Description |
   | --- | --- |
   | **Radius Server** | The IP address or host name of the RADIUS server. |
   | **Radius Port** | The UDP port of the RADIUS server, for example `1812`. There is no default. |
   | **Radius Secret** | The shared secret. The product stores it encrypted and doesn't show it again. |
   | **Radius Timeout** | How long the product waits for an answer before it sends the request again. Choose 15, 30, 45, 60, 90, 120, or 180 seconds. The default is 30 seconds. The product makes three attempts in all. |
   | **Radius** | **Enabled** or **Disabled**. |

3. Set **Radius** to **Enabled** when the other values are correct.

Before you enable RADIUS for everyone, sign in with a test account in a new browser session, and keep an administrator session open.

## Use Duo as the RADIUS server

The Duo Authentication Proxy can answer RADIUS requests. Use the proxy mode that checks only the second factor, `radius_server_duo_only`. The user enters a Duo passcode, or the word `push` or `phone`, in **Second Factor**. The challenge mode of the proxy doesn't work with the product.

A push or phone approval holds the request open until the user answers. Set **Radius Timeout** to at least 60 seconds. If the proxy doesn't answer within the timeout, the product sends the request again, so the user can get a second push. For the proxy settings, see the Duo documentation on [RADIUS](https://duo.com/docs/radius) and the [Authentication Proxy reference](https://duo.com/docs/authproxy-reference).

## Sign in with RADIUS

1. Enter your AD account as `<domain>\<username>`.
2. Enter the AD password for the account. The product checks the AD password first.
3. In the **Second Factor** field, enter the value that your RADIUS service requires, such as a one-time code.
4. Select **Sign In**.

While the product waits for RADIUS, the button shows `Signing In`. If the RADIUS server doesn't answer in any of the three attempts, the sign-in fails with `Error: Maximum retries exceeded`.

## Troubleshoot RADIUS

- **`Invalid token.`** The RADIUS server rejected the second factor.
- **`Challenge received from RADIUS server.`** The server expects a reply to a challenge. Use a server mode that answers directly.
- **`Error: Maximum retries exceeded`** The RADIUS server didn't answer. Check the address, the port, the UDP path, and the shared secret on both sides.
- **Nobody can sign in.** Sign in as `secureone`, set **Radius** to **Disabled**, and then correct the settings.
