---
title: "Configure an OpenID Connect connector"
description: "Add an OpenID Connect identity provider to Privilege Secure, register the callback addresses, and map provider users to Active Directory users."
sidebar_position: 30
---

# Configure an OpenID Connect connector

An **OpenID Connect** connector lets users sign in to the console with an OpenID Connect identity provider. Privilege Secure reads a user ID from the provider and matches it to an Active Directory (AD) user.

For the other connector types and how a user's connector is chosen, see [Authentication methods](/docs/privilegesecure/26.07/configuration/authentication/overview.md).

## Prerequisites

Register Privilege Secure as an application in the identity provider first. The provider needs these values.

| Item | Value |
|---|---|
| Callback (redirect) address | `https://<nps-server>:6500/callback` |
| Sign-out callback address | `https://<nps-server>:6500/logoutCallback` |
| Cross-Origin Resource Sharing (CORS) origin | `https://<nps-server>:6500` |
| Flow | An implicit flow that returns an access token and an ID token |
| Scopes | `openid`, `profile`, and `email` |

Privilege Secure builds the callback addresses from the address in the browser. Register them with the same host name and port that users use to open the console, which is 6500 by default. Open the console at `https://<nps-server>:6500` before you run the wizard.

An OpenID Connect provider compares the callback address in each sign-in request with the addresses registered for the application, character for character. A callback address with a different host name or port doesn't match and the provider rejects the request. Register the sign-out callback address as well. When a user signs out, the console asks the provider to return the user to that address, and a provider only redirects to an address that is registered.

Copy the **Issuer** address and the application's **Client Id** from the provider. You enter both in Privilege Secure.

The users who sign in must exist in Privilege Secure, and you must assign the connector to them. See [Assign the connector to users](#assign-the-connector-to-users).

## Add the connector

1. Select **Configuration** > **Authentication**.
1. Click the **+** button above the connector list.
1. Enter a name for the connector. The **Connector Type** list stays unavailable until you enter a name.
1. Optional: Enter a **Description**.
1. In **Connector Type**, select **OpenID Connect**.
1. Select **Configuration Wizard** to fill in the connector with a guided test, or select **Manually Enter Data** to enter the values yourself.

Both methods set the same fields. See [Connector fields](#connector-fields).

## Use the Configuration Wizard

The wizard has three pages: **Configure Client**, **Test Login**, and **Configure Id Mapping**. Select **Next >** and **< Previous** to move between them.

### Configure the client

{/* TODO screenshot: Configure Client page, client values redacted */}

1. On the **Configure Client** page, enter the **Issuer**. This is the address of the identity provider. A wrong value usually causes a 404 error when Privilege Secure redirects to the provider.
1. Enter the **Client Id** from the provider.
1. Copy the **Callback Address** and the **CORS** value into the provider's application settings if you haven't already. These two fields are read-only in the wizard.
1. Select **Test Connection**. The browser leaves the wizard and opens the provider's sign-in page.
1. Check that the sign-in page appears as you expect. Don't sign in.
1. Return to the wizard with the browser's back button. If the page didn't appear, correct the values and test again.
1. Select **Next >**.

If the provider returns a 500 error, the CORS entry at the provider is wrong.

### Test the login

1. On the **Test Login** page, select **Login**. The provider's sign-in page opens in the browser.
1. Sign in with a valid account for the identity provider. After a successful sign-in, the page shows the **Access Token**. If the sign-in fails, the page shows an **Error**.
1. Select **Next >**.

### Map the provider user to an AD user

1. On the **Configure Id Mapping** page, select **Get User Data**. Privilege Secure uses the access token to read the user's data from the provider.
1. Find a field whose value matches a property of the user's AD account, such as the email address. The table shows the **Source**, **Field**, and **Example Value** of each result.
1. Select the field and select **Select**. This field becomes the **User Id Field**.
1. In **Login Format**, select the AD property that matches the field's value.
1. Select **Finish**. A window shows the updated settings.
1. Close the window and select **Save** on the **Authentication** page.

The **Source** column shows where the data came from. Use the sources in this order of preference.

| Source | Notes |
|---|---|
| **Introspection Endpoint** | Preferred. Not every provider supports it. It also validates the token. |
| **UserInfo Endpoint** | Some providers require authorization for this endpoint. |
| **Access Token** or **Id Token** | Least preferred. Privilege Secure reads the claims in the token. Use these only if the other sources fail. |

## Connector fields

Select **Manually Enter Data** to show the fields. Select **Hide Data** to hide them again. The console marks the required fields with an asterisk.

| Field | Description |
|---|---|
| **Issuer** | The address of the identity provider. |
| **Client Id** | The application ID of Privilege Secure at the provider. |
| **Login Format** | The AD property that matches the provider's user ID: **sAMAccountName**, **User Principal Name**, **Email Address**, or **SID**. |
| **User Id Source** | Where Privilege Secure reads the user ID: **Introspection Endpoint** (the default), **UserInfo Endpoint**, **Access Token**, or **Id Token**. |
| **User Id Field** | The field in the provider's data that holds the user ID. |

### Example

This example uses placeholders for the values from your provider.

| Field | Value |
|---|---|
| **Issuer** | `https://<identity-provider>` |
| **Client Id** | `<client-id>` |
| **Login Format** | **User Principal Name** |
| **User Id Source** | **Introspection Endpoint** |
| **User Id Field** | `<field-that-holds-the-user-principal-name>` |

Use this example only if **Get User Data** shows a field that holds the user principal name. If it doesn't, choose the field that matches another AD property and set **Login Format** to match.

The **Issuer** is the address of the provider's issuer identifier, an `https` address with no query or fragment. The provider publishes its configuration at that address followed by `/.well-known/openid-configuration`. Copy the value from the provider's settings or from that configuration document, and don't add or remove a trailing slash.

## Assign the connector to users

1. Select **Users & Groups**, then select the user or group.
1. Select the **Authentication Connector** tab.
1. Select the connector.

If a user isn't assigned to the connector, Privilege Secure refuses the sign-in. See [Authentication methods](/docs/privilegesecure/26.07/configuration/authentication/overview.md#assignment-is-required).

If the connector must work through the Remote Access Gateway, read [Use Remote Access Gateway](/docs/privilegesecure/26.07/configuration/authentication/overview.md#use-remote-access-gateway) before you select the checkbox.

## Sign out after an error

In 26.07.3 and later, an OpenID Connect sign-in error doesn't sign the user out automatically. The user selects **Sign Out** to leave the error page and sign in again.

## Related topics

- [Add Microsoft Entra ID as an Authentication Connector (OpenID Connect)](/docs/kb/privilegesecure/authentication-and-mfa/add-microsoft-entra-id-as-an-authentication-connector-openid-connect)
- [Add Active Directory Federation Services (AD FS) as an Authentication Connector (OpenID Connect)](/docs/kb/privilegesecure/authentication-and-mfa/add-active-directory-federation-services-ad-fs-as-an-authentication-connector-openid-connect)
