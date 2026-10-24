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

- Use a supported browser. See [Client requirements](/docs/privilegesecure/26_07/requirements/client).
- If your browser warns that the connection isn't private, the portal might use a self-signed certificate that your administrator hasn't replaced yet. Confirm the address with your administrator before you continue.
- Ask your administrator to add you to at least one access policy. Without a policy, you can sign in but you can't request a session. See [Connect to a session in the browser](/docs/privilegesecure/26_07/remote-access-gateway/user-guide/browser-sessions#request-a-session).

## Choose a sign-in method

The sign-in page shows the methods that your administrator allows. By default, the portal allows SSO only. An administrator can also allow local Privilege Secure users, or local and domain users. See [Configure sign-in for the portal](/docs/privilegesecure/26_07/remote-access-gateway/configuration/authentication).

| What the page shows | Method |
|---|---|
| One button for each identity provider | SSO |
| **Username**, **Password**, and **Domain** fields | Username and password |

{/* TODO verify: the sign-in page when AllowedLoginMethods is 1 (SSO plus local). The lab verified only value 2, so confirm whether the Domain field is hidden and how the page rejects a username that contains a backslash or an at sign. */}

## Sign in with single sign-on

1. Open the portal address in your browser.
2. Click the button for your identity provider. The browser redirects to the identity provider's sign-in page.
3. Sign in to the identity provider. The identity provider applies its own multi-factor authentication (MFA).
4. After authentication, the browser returns to the portal dashboard.

When you sign in with SSO, the portal doesn't ask for a username or password.

{/* TODO verify: how the Default and Exclusive connector settings change the sign-in page on the portal, and whether the "Login with a different account" option appears on the portal. */}

## Sign in with a username and password

1. Open the portal address in your browser.
2. Enter your **Username** and **Password**.
3. Select your **Domain**. Select `<none>` if you use a local Privilege Secure account.
4. Click **Login**.
5. If the portal asks for a verification code, enter the code from your authenticator application.

After you sign in, the portal opens the dashboard with the **Active**, **Scheduled**, **Approvals**, and **Historical** tiles. To start a session, see [Connect to a session in the browser](/docs/privilegesecure/26_07/remote-access-gateway/user-guide/browser-sessions).

{/* TODO screenshot: portal sign-in page with Username, Password, and Domain fields, no text selected, no licence banner */}

{/* TODO verify: multi-factor authentication on the portal. Code shows the same sign-in and verification-code flow as the console, but the lab didn't test it. If confirmed, link to the console steps at /docs/privilegesecure/26_07/user-guide/sign-in.md#register-multi-factor-authentication. */}

## Session timeout

The portal signs you out after a period of inactivity.

{/* TODO verify: the portal inactivity timeout and warning. The 26.03 pages state a 20-minute timeout with a warning after 15 minutes, and the code sets the sign-in token to 15 minutes by default. Confirm the values and the Stay Logged In prompt for 26.07.3 before stating them. */}

## Fix a sign-in error

| What you see | What to do |
|---|---|
| "The license has expired or the license service is offline" | Tell your administrator. They must fix the Privilege Secure license. |
| "Cannot use this login method" | The portal doesn't allow that method. Use SSO, or ask your administrator to change the allowed methods. |
| The sign-in option for your identity provider isn't listed, or the sign-in fails with "This authentication method cannot be used via Remote Access Gateway" | The identity provider connector isn't enabled for the portal. Ask your administrator. |

For details and fixes, see [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26_07/remote-access-gateway/troubleshooting).
