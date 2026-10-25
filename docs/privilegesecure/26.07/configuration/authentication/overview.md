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
| **MFA** | Send a second-factor request to a Remote Authentication Dial-In User Service (RADIUS) server, such as a Duo RADIUS proxy. | [Configure a RADIUS MFA connector](/docs/privilegesecure/26.07/configuration/authentication/radius.md) |
| **OpenID Connect** | Sign users in with an OpenID Connect identity provider. | [Configure an OpenID Connect connector](/docs/privilegesecure/26.07/configuration/authentication/openid-connect.md) |
| **SAML** | Sign users in with a SAML identity provider. | [Configure a SAML connector](/docs/privilegesecure/26.07/configuration/authentication/saml.md) |

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

A connector does nothing until you assign it to users or groups. Select the method on the **Authentication Connector** tab of the user or group. The tab lists **Internal MFA**, which is built in, the seeded **Duo** and **Not Required** connectors, and every connector that you add, whatever its type. For the choices and the warning about **Not Required**, see [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md#authentication-connector).

To remove the second factor for a user or group, see the knowledge base article [Disable MFA for users or groups](/docs/kb/privilegesecure/authentication-and-mfa/disable-mfa-for-users-or-groups).

## Connector precedence

A user can have a connector of their own and also belong to groups that have connectors. These rules decide which connector applies.

- If the user belongs to an Active Directory group that has a different connector, the group assignment takes precedence over **Internal MFA** on the user.
- If the user's setting is a connector, the user's assignment takes precedence over any group connector.
- If the user belongs to several Active Directory groups that have different connectors, the alphabetical order of the group names decides. Privilege Secure uses the connector of the first group in that order that has one and writes a warning to the log.

These rules apply to every connector type, including OpenID Connect and SAML connectors.

## Default and exclusive connectors

An OpenID Connect or SAML connector can be the default connector or the exclusive connector for the sign-in page. MFA connectors can be neither. Only one connector at a time can be the default or the exclusive connector, To change it, clear the current default or exclusive connector first.

To set one, hover over the connector in the list on **Configuration** > **Authentication** and select an icon:

- **Set as Default** makes the connector the default. The sign-in page shows a single button for it, plus **Login with a different account**, which brings back the other sign-in choices. A **Default Connector** icon marks the connector in the list.
- **Set as Exclusive** makes the connector the only way to sign in. Select **Set Exclusive** in the **Set Exclusive Login Method** dialog to confirm. The sign-in page hides the user name, password, and domain fields and shows only a button for the connector. Privilege Secure also rejects sign-ins that use another method. An **Exclusive Connector** icon marks the connector in the list.
- **Clear Default** and **Clear Exclusive** remove the setting. The icons you can select depend on the current state: the set icons are hidden while a default or exclusive connector exists.

With a default connector, add `?adlogin=1` to the address of the sign-in page to show the user name, password, and domain fields and sign in with a password.

:::warning
While a connector is exclusive, nobody can sign in with a user name and password, including administrators. Test the connector with an administrator account before you set it as exclusive.
:::

{/* TODO verify: how an administrator gives a user the Active Directory sign-in exception (the allow_ad_login user flag, AllowAdLogin in the database, which lets a user sign in with a password while a connector is exclusive). The release console and the code reviewed have no control that sets it, so the supported way to recover from an exclusive connector that stops working isn't settled by code or public sources. */}

## Assignment is required

By default, Privilege Secure refuses a sign-in through an external connector when the user isn't assigned to that connector. The `StrictExternalAuth` setting in the web service configuration controls this behavior, and its default is `true`.

If a connector must accept users who aren't assigned to it, change the setting. For an example, see the knowledge base article [Configuring a Custom RADIUS Authentication Connector](/docs/kb/privilegesecure/authentication-and-mfa/configuring-a-custom-radius-authentication-connector).

## Use Remote Access Gateway

Each connector has a **Use Remote Access Gateway** checkbox. The checkbox decides where the connector works.

:::warning
A connector with **Use Remote Access Gateway** selected works only for sign-ins through the Remote Access Gateway portal. A connector with the checkbox cleared works only for sign-ins to the console. A sign-in that uses the wrong connector fails, and Privilege Secure logs an error event.
:::

To offer the same identity provider on both the console and the portal, create two connectors with the same provider settings and select **Use Remote Access Gateway** on only one of them. The sign-in pages hide a connector that doesn't match where the user signs in.

When the connector doesn't match, the service answers the request with the message "This authentication method cannot be used via Remote Access Gateway". The log and the error event carry a longer message that names the connector.

## Sign in after an OpenID Connect error

In 26.07.3 and later, an OpenID Connect sign-in error no longer signs the user out automatically. The user selects **Sign Out** to leave the error page. See [Configure an OpenID Connect connector](/docs/privilegesecure/26.07/configuration/authentication/openid-connect.md#sign-out-after-an-error).
