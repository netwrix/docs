---
title: "Sign in to the portal"
description: "Sign in to the Remote Access Gateway portal with single sign-on or a username and password, and find out what to do when the sign-in page shows an error."
sidebar_position: 10
---

# Sign in to the portal

The Remote Access Gateway portal is a web page that lets you request and open Netwrix Privilege Secure for Access Management (Privilege Secure) sessions from outside the corporate network. You sign in with your single sign-on (SSO) account, or with a username and password if your administrator allows it.

## Before you begin

- Get the portal address from your administrator. The address is the DNS name of the portal server, in this form:

  ```text
  https://<portal-server>
  ```

- Use a supported browser. See [Client requirements](/docs/privilegesecure/26.07/requirements/client.md).
- If your browser warns that the connection isn't private, the portal might use a self-signed certificate that your administrator hasn't replaced yet. Confirm the address with your administrator before you continue.
- Ask your administrator to add you to at least one access policy. Without a policy, you can sign in but you can't request a session. See [Connect to a session in the browser](/docs/privilegesecure/26.07/remote-access-gateway/user-guide/browser-sessions.md#request-a-session).

## Choose a sign-in method

The sign-in page shows the methods that your administrator allows. By default, the portal allows SSO only. An administrator can also allow local Privilege Secure users, or local and domain users. See [Configure sign-in for the portal](/docs/privilegesecure/26.07/remote-access-gateway/configuration/authentication.md).

| What the page shows | Method |
|---|---|
| One button for each identity provider | SSO |
| **Username** and **Password** fields, with no **Domain** field | Local Privilege Secure users, when the administrator allows SSO and local users |
| **Username**, **Password**, and **Domain** fields | Local and domain users, when the administrator allows SSO, local users, and domain users |

When the portal allows only SSO, the sign-in page doesn't show the **Username**, **Password**, or **Domain** fields.

## Sign in with single sign-on

1. Open the portal address in your browser.
2. Click the button for your identity provider. The browser redirects to the identity provider's sign-in page.
3. Sign in to the identity provider. The identity provider applies its own multi-factor authentication (MFA).
4. After authentication, the browser returns to the portal dashboard.

When you sign in with SSO, the portal doesn't ask for a username or password.

The sign-in page changes when your administrator sets a default or exclusive connector. See [Default and exclusive connectors](/docs/privilegesecure/26.07/configuration/authentication/overview.md#default-and-exclusive-connectors).

- With an exclusive connector, the page shows only a button with the connector's name, under **Login using:**.
- With a default connector, the page shows the button for that connector and a **Login with a different account** button. Click it to show the other sign-in options that the portal allows.

## Sign in with a username and password

1. Open the portal address in your browser.
2. Enter your **Username** and **Password**.
3. Select your **Domain**. Select `<none>` if you use a local Privilege Secure account. If you enter `<domain>\<user>` or `<user>@<domain>` in **Username**, the portal fills in **Domain** from your entry and locks the field.
4. Click **Login**.
5. If the portal asks for a verification code, enter the code from your authenticator application.

After you sign in, the portal opens the dashboard with the **Active**, **Scheduled**, **Approvals**, and **Historical** tiles. To start a session, see [Connect to a session in the browser](/docs/privilegesecure/26.07/remote-access-gateway/user-guide/browser-sessions.md).

{/* TODO screenshot: portal sign-in page with Username, Password, and Domain fields, no text selected, no licence banner */}

The portal uses the same sign-in and verification-code pages as the console. To register an authenticator application, see [Register multi-factor authentication](/docs/privilegesecure/26.07/user-guide/sign-in.md#register-multi-factor-authentication).

## Session timeout

The portal signs you out after a period of inactivity. It uses the same **Idle Timeout (minutes)** setting as the console, which is 10 minutes by default. When the idle time passes, the **Session Timeout** dialog appears. Click **Keep Session Active** to keep working, or click **Logout** to sign out. If you take no action, the portal signs you out 5 minutes later. See [Idle timeout](/docs/privilegesecure/26.07/user-guide/sign-in.md#idle-timeout).

## Fix a sign-in error

| What you see | What to do |
|---|---|
| "The license has expired or the license service is offline" | Tell your administrator. They must fix the Privilege Secure license. |
| "Cannot use this login method" | The portal doesn't allow that method. Use SSO, or ask your administrator to change the allowed methods. |
| The sign-in option for your identity provider isn't listed, or the sign-in fails with "This authentication method cannot be used via Remote Access Gateway" | The identity provider connector isn't enabled for the portal. Ask your administrator. |

For details and fixes, see [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md).
