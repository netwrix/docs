---
title: "Authentication methods"
description: "Learn the sign-in methods that Privilege Secure supports, how to add an authentication connector, and how a user's connector is chosen."
sidebar_position: 10
---

# Authentication methods

Users sign in to the Privilege Secure console with a password and a second factor, or through an identity provider. You add the second-factor servers and identity providers as authentication connectors. You then assign a connector to each user or group.

## Connector types

An authentication connector connects Privilege Secure to an external service that verifies users. Add connectors on the **Configuration** > **Authentication** page. Each connector has one **Connector Type**.

| Connector Type | Use it to | Configure it |
|---|---|---|
| **MFA** | Send a second-factor request to a Remote Authentication Dial-In User Service (RADIUS) server, such as a Duo RADIUS proxy. | [Configure a RADIUS MFA connector](/docs/privilegesecure/26_07/configuration/authentication/radius) |
| **OpenID Connect** | Sign users in with an OpenID Connect identity provider. | [Configure an OpenID Connect connector](/docs/privilegesecure/26_07/configuration/authentication/openid-connect) |
| **SAML** | Sign users in with a SAML identity provider. | [Configure a SAML connector](/docs/privilegesecure/26_07/configuration/authentication/saml) |

## Add an authentication connector

1. Select **Configuration** > **Authentication**.
1. Click the **+** button above the connector list.
1. Enter a name in the name box. The **Connector Type** list stays unavailable until you enter a name.
1. Optional: Enter a **Description**.
1. Select a **Connector Type**: **MFA**, **OpenID Connect**, or **SAML**. The remaining fields depend on the type.
1. Optional: Select **Use Remote Access Gateway**. Read [Use Remote Access Gateway](#use-remote-access-gateway) first.
1. Complete the fields for the type. See the page for that type in the table.
1. Select **Save**.

{/* TODO screenshot: Add connector form with Connector Type list and Use Remote Access Gateway checkbox */}

The connector appears in the connector list. To remove a connector, hover over it in the list and select the trash icon.

## Assign a connector to users

A connector does nothing until you assign it to users or groups. Select the method on the **Authentication Connector** tab of the user or group. The tab lists **Internal MFA**, which is built in, the seeded **Duo** and **Not Required** connectors, and any connectors that you add. For the choices and the warning about **Not Required**, see [User and group details](/docs/privilegesecure/26_07/admin/users-groups/user-details#authentication-connector).

{/* TODO verify: whether the SAML, OpenID Connect, and MFA connectors that an administrator adds appear as choices on the user's Authentication Connector tab. The lab had only the Duo connector configured. */}

To remove the second factor for a user or group, see the knowledge base article [Disable MFA for users or groups](/docs/kb/privilegesecure/authentication-and-mfa/disable-mfa-for-users-or-groups).

## Connector precedence

A user can have a connector of their own and also belong to groups that have connectors. These rules decide which connector applies.

- If the user belongs to an Active Directory group that has a different RADIUS profile, the group assignment takes precedence over **Internal MFA** on the user.
- If the user's setting is a RADIUS profile, the user's assignment takes precedence over any group RADIUS profile.
- If the user belongs to several Active Directory groups that have different RADIUS profiles, the alphabetical order of the RADIUS profile names decides.

{/* TODO verify: the precedence rules above come from the 26.03 documentation. Confirm them for 26.07 and for OpenID Connect and SAML connectors. */}

{/* TODO verify: Default and Exclusive connector controls, and the ?adlogin=1 recovery parameter. The console web strings include "Set as Default", "Clear Default", "Set as Exclusive", "Clear Exclusive", and a "Set Exclusive Login Method" confirmation dialog, and the sign-in page code hides the user name and password form for an exclusive connector. The lab tour found no such controls on the Authentication page. Locate them in the 26.07 console before documenting. */}

## Assignment is required

By default, Privilege Secure refuses a sign-in through an external connector when the user isn't assigned to that connector. The `StrictExternalAuth` setting in the web service configuration controls this behavior, and its default is `true`.

If a connector must accept users who aren't assigned to it, change the setting. For an example, see the knowledge base article [Configuring a Custom RADIUS Authentication Connector](/docs/kb/privilegesecure/authentication-and-mfa/configuring-a-custom-radius-authentication-connector).

## Use Remote Access Gateway

Each connector has a **Use Remote Access Gateway** checkbox. The checkbox decides where the connector works.

:::warning
A connector with **Use Remote Access Gateway** selected works only for sign-ins through the Remote Access Gateway portal. A connector with the checkbox cleared works only for sign-ins to the console. A sign-in that uses the wrong connector fails, and Privilege Secure logs an error event.
:::

To offer the same identity provider on both the console and the portal, create two connectors with the same provider settings and select **Use Remote Access Gateway** on only one of them. The sign-in pages hide a connector that doesn't match where the user signs in.

{/* TODO verify: in a lab run, the text that the web app shows for the 400 response "This authentication method cannot be used via Remote Access Gateway". The longer message with the connector name goes only to the log and the event. The two-connector setup is confirmed in the code (UserTokenController.cs, IsInvalidConnector) but not run in the lab. */}

## Sign in after an OpenID Connect error

In 26.07.3 and later, an OpenID Connect sign-in error no longer signs the user out automatically. The user selects **Sign Out** to leave the error page. See [Configure an OpenID Connect connector](/docs/privilegesecure/26_07/configuration/authentication/openid-connect#sign-out-after-an-error).
