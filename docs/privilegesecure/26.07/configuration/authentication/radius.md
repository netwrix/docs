---
title: "Configure a RADIUS MFA connector"
description: "Add a multi-factor authentication connector that sends second-factor requests to a RADIUS server, such as a Duo RADIUS proxy, and assign it to users."
sidebar_position: 20
---

# Configure a RADIUS MFA connector

An **MFA** connector sends a second-factor request to a Remote Authentication Dial-In User Service (RADIUS) server when a user signs in. Use it with a RADIUS server, such as a Duo RADIUS proxy.

For the other connector types and how a user's connector is chosen, see [Authentication methods](/docs/privilegesecure/26.07/configuration/authentication/overview.md).

## Prerequisites

- You have the Administrator role. Only administrators can open **Configuration** > **Authentication**.
- A RADIUS server that is reachable from the application server.
- The RADIUS server's address, port, authentication type, and shared secret.
- The application server registered as a RADIUS client on the RADIUS server, with the same shared secret. A RADIUS server picks the shared secret for a request from the source IP address of the request (RFC 2865, section 3), so register the address that the application server's requests come from.

## Add the connector

1. Select **Configuration** > **Authentication**.
1. Click the **+** button above the connector list.
1. Enter a name for the connector. The **Connector Type** list stays unavailable until you enter a name.
1. Optional: Enter a **Description**.
1. In **Connector Type**, select **MFA**. After you save the connector, you can't change its type.
1. Complete the fields in the following table.
1. Select **Save**.

## MFA connector fields

| Field | Description |
|---|---|
| **Server FQDN / IP** | The fully qualified domain name (FQDN) or IP address of the RADIUS server. |
| **Remote Port** | The port the RADIUS server listens on. Enter a value from 1 to 65535. The seeded **Duo** connector uses 1812. |
| **Auth. Type** | The protocol for communication with the RADIUS server: **MSCHAPv2** (Microsoft Challenge Handshake Authentication Protocol version 2) or **PAP** (Password Authentication Protocol). Select the type that the RADIUS server expects. |
| **Shared Secret** | The shared secret that you configured for Privilege Secure on the RADIUS server. The console masks the value. |
| **Max Retries** | The number of times Privilege Secure retries a request to the RADIUS server. The seeded **Duo** connector uses 0. |
| **Timeout (Seconds)** | The time Privilege Secure waits for a response before it treats the request as failed. The seeded **Duo** connector uses 60. |
| **Title for MFA Auth. Dialog** | The title of the dialog that prompts the user for the second factor. |
| **Text for MFA Auth. Dialog** | The text of the prompt that the dialog shows the user. |
| **Send NAS Identifier** | Sends the Network Access Server (NAS) identifier to the RADIUS server. Select it only if the RADIUS server requires it. The seeded **Duo** connector has it cleared. |
| **Send Initial Text** | Sends the **Initial Auto-Response Text** to the RADIUS server without a user action. |
| **Initial Auto-Response Text** | The text that Privilege Secure sends automatically when you select **Send Initial Text**. |
| **Prefix for Response Text** | A value that Privilege Secure adds to the start of the user's response. The value depends on the RADIUS server. |
| **Format for username** | The user name format that Privilege Secure sends to the RADIUS server. Select a preset or enter your own format. |

{/* TODO screenshot: MFA connector fields, shared secret masked */}

{/* TODO verify: the value Privilege Secure sends as the NAS Identifier when Send NAS Identifier is selected. The RADIUS client library that sends it (Stealthbits.Radius 1.0.6) isn't in the release source. Next step: get the package from the Azure DevOps SbPAM feed and read how it sets NAS-Identifier when SendNasIdentifier is true. A packet capture on a Windows host is the fallback. */}

A new MFA connector starts with these values: **Remote Port** 1812, **Auth. Type** **MSCHAPv2**, **Max Retries** 0, **Timeout (Seconds)** 60, **Send NAS Identifier** cleared, and **Format for username** empty.

The **Format for username** list offers these presets. You can also enter your own format.

- `%samaccountname%@%domain%`
- `%samaccountname%`
- `%upn%`
- `%email%`
- `%samaccountname%@%fqdn%`
- `%domain%\%samaccountname%`

Privilege Secure replaces these placeholders with the user's values from Active Directory before it sends the user name to the RADIUS server:

| Placeholder | Replaced with |
|---|---|
| `%samaccountname%` | The sAMAccountName without the domain. |
| `%domain%` | The NetBIOS domain name. |
| `%fqdn%` | The DNS name of the user's domain. |
| `%upn%` | The user principal name. |
| `%email%` | The email address. |
| `%sid%` | The security identifier (SID). |

When **Format for username** is empty, Privilege Secure sends the sAMAccountName of an Active Directory user in the form `DOMAIN\user`. A local user sends the Privilege Secure user name. If the format produces an empty value, it sends that same value.

## Example

This example connects Privilege Secure to a Duo RADIUS proxy that prompts the user's phone application.

| Field | Value |
|---|---|
| Name | `Duo RADIUS` |
| **Connector Type** | **MFA** |
| **Server FQDN / IP** | `<radius-server>` |
| **Remote Port** | `1812` |
| **Auth. Type** | The type that the proxy is set to use |
| **Shared Secret** | The secret from the proxy configuration |
| **Send Initial Text** | Selected |
| **Initial Auto-Response Text** | `push` |

With these values, Privilege Secure sends `push` to the proxy automatically, so the user's phone application prompts for authorization immediately.

## Assign the connector to users

:::warning
Privilege Secure includes a **Duo** connector in the connector list. It appears as a choice on every user's **Authentication Connector** tab. Its server is `localhost` until you change it. Set **Server FQDN / IP** and **Shared Secret** on the **Duo** connector before you assign it to a user. If you assign it first, the user's sign-in fails.
:::

1. Select **Users & Groups**, then select the user or group.
1. Select the **Authentication Connector** tab.
1. Select the connector.

For the tab and the rules for users in several groups, see [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md#authentication-connector) and [Connector precedence](/docs/privilegesecure/26.07/configuration/authentication/overview.md#connector-precedence).

If users aren't assigned to the connector, Privilege Secure refuses their sign-in through it. For a connector that must accept unassigned users, see [Configuring a Custom RADIUS Authentication Connector](/docs/kb/privilegesecure/authentication-and-mfa/configuring-a-custom-radius-authentication-connector).

## Related articles

- [How to Configure a Duo RADIUS Proxy for Multi-Factor Authentication](/docs/kb/privilegesecure/authentication-and-mfa/how-to-configure-a-duo-radius-proxy-for-multi-factor-authentication)
- [Configuring a Custom RADIUS Authentication Connector](/docs/kb/privilegesecure/authentication-and-mfa/configuring-a-custom-radius-authentication-connector)
- [Invalid Multi-Factor Authentication Code Error](/docs/kb/privilegesecure/authentication-and-mfa/invalid-multi-factor-authentication-code-error)
