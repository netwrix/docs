---
title: "Configure sign-in for the portal"
description: "Choose which sign-in methods the Remote Access Gateway portal offers by setting AllowedLoginMethods and the Use Remote Access Gateway connector option."
sidebar_position: 10
---

# Configure sign-in for the portal

The Remote Access Gateway portal offers the sign-in methods that you allow in two places. The `AllowedLoginMethods` setting in the gateway decides whether users can sign in with a username and password. The **Use Remote Access Gateway** option on each authentication connector decides which single sign-on connectors the portal accepts.

## Choose the allowed sign-in methods

The `AllowedLoginMethods` setting is in `appsettings.json` on the gateway server. For the file location, see [Gateway settings reference](/docs/privilegesecure/26.07/remote-access-gateway/configuration/gateway-settings.md).

| Value | Name | Sign-in methods the portal accepts |
|---|---|---|
| `0` (default) | Single sign-on only | Single sign-on (SSO) through an OpenID Connect or SAML connector. The sign-in form shows only the SSO buttons, and the gateway rejects a password sign-in. |
| `1` | SSO plus local | SSO and Netwrix Privilege Secure for Access Management (Privilege Secure) local users. The sign-in form shows **Username** and **Password**, and no **Domain** field. The gateway rejects a username that contains `\` or `@` with "Cannot use this login method", so domain users can't sign in with a password. |
| `2` | SSO plus local plus domain | SSO, local users, and domain users. The sign-in form shows **Username**, **Password**, and **Domain** fields. |

A new installation uses `0`, so users sign in only through SSO. Keep `0` unless users must sign in with a password.

### Set the allowed sign-in methods

1. On the gateway server, open `C:\ProgramData\Stealthbits\PAM\RagGateway\appsettings.json` in a text editor.
2. Set `AllowedLoginMethods` to the value you want. The value is a number, not text. For example, to allow SSO, local, and domain sign-in:

   ```json
   "AllowedLoginMethods": 2
   ```

3. Save the file.
4. Recycle the gateway application pool:

   ```powershell
   Restart-WebAppPool -Name NPSGatewayAppPool
   ```

   The gateway reads `AllowedLoginMethods` again on each sign-in request, so a saved change applies to new sign-ins without the recycle. The recycle also applies any other setting that you changed in the same file.
5. Browse to the portal by its DNS name. With value `2`, the sign-in form shows **Username**, **Password**, and **Domain**.

If a user tries a method that the value doesn't allow, the portal rejects the sign-in with "Cannot use this login method".

:::note
Password sign-in through the portal uses the same sign-in and multi-factor authentication (MFA) steps as the console.
:::

## Enable a connector for the portal

Each authentication connector has a **Use Remote Access Gateway** checkbox. A connector with the checkbox selected works only for sign-ins through the portal. A connector with the checkbox cleared works only for sign-ins to the console. For the steps and the effect on each connector, see [Use Remote Access Gateway](/docs/privilegesecure/26.07/configuration/authentication/overview.md#use-remote-access-gateway).

To offer SSO on the portal, enable a connector for it:

1. In the console, select **Configuration** > **Authentication**.
2. Select the OpenID Connect or SAML connector that the portal uses.
3. Select **Use Remote Access Gateway**.
4. Select **Save**.

If a user signs in with a connector that doesn't match, the sign-in fails with an error that reads "The authentication method: '\<name\>' cannot be used via Remote Access Gateway", where `<name>` is the connector name.

The portal lists only the connectors that have **Use Remote Access Gateway** selected, and the console lists only the others. To offer the same identity provider on both, create a second connector for the portal, as [Use Remote Access Gateway](/docs/privilegesecure/26.07/configuration/authentication/overview.md#use-remote-access-gateway) describes.

For an OpenID Connect connector, the sign-in sends the user back to the address of the page that started the sign-in, followed by `/callback`. For the portal, that address is `https://<portal DNS name>/callback`. Register it with the identity provider as a callback address, and register the sign-out address, `https://<portal DNS name>/logoutCallback`, as well.

The **Set as Default** and **Set as Exclusive** options work on the portal sign-in page as they do on the console page, but only for a connector that has **Use Remote Access Gateway** selected, because the portal doesn't list any other connector. For what the two options do, see [Default and exclusive connectors](/docs/privilegesecure/26.07/configuration/authentication/overview.md#default-and-exclusive-connectors).

## Related topics

- [Authentication methods](/docs/privilegesecure/26.07/configuration/authentication/overview.md)
- [Sign in to the portal](/docs/privilegesecure/26.07/remote-access-gateway/user-guide/sign-in.md)
- [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md)
