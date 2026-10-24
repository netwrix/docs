---
title: "Sign in to the console"
description: "Sign in to the Privilege Secure console with a username, password, or single sign-on, register multi-factor authentication, and understand the idle timeout."
sidebar_position: 20
---

# Sign in to the console

The Privilege Secure console is a web application. You open it in a browser, sign in, and work from the Dashboard. Every user signs in the same way, whether they request sessions, approve requests, review access, or audit sessions.

## Before you begin

- Use a supported browser. See [Client requirements](/docs/privilegesecure/26.07/requirements/client.md).
- Get the console address from your administrator. The address has this form:

  ```text
  https://<nps-server>:6500
  ```

  `<nps-server>` is the NetBIOS name, fully qualified domain name (FQDN), or IP address of the server that runs Privilege Secure. A firewall can restrict access to the server, so ask your administrator if the page doesn't load.
- If you are the administrator who installed the product and this is the first sign-in, see [Run the setup wizard](/docs/privilegesecure/26.07/install/first-launch.md) for the setup wizard.

To reach the console from outside the network through a browser, see [Sign in to the Remote Access Gateway portal](/docs/privilegesecure/26.07/remote-access-gateway/user-guide/sign-in.md).

## Sign in with a username and password

1. Open `https://<nps-server>:6500` in a browser. The sign-in page opens.
1. Enter your **Username** and **Password**.
1. Select your **Domain** from the list. Select `<none>` if you use a local console account, which includes the built-in Admin account.
1. Click **Login**.
1. If the console asks for a verification code, enter the code from your authenticator application. See [Register multi-factor authentication](#register-multi-factor-authentication).

If you enter your username as `<DOMAIN>\<username>` or `<username>@<domain>`, the console fills in the **Domain** field for you.

After you sign in, the console opens on the Dashboard.

{/* TODO screenshot: sign-in page with the Username, Password, and Domain fields */}

## Sign in with single sign-on

When your administrator configures a SAML or OpenID Connect connector, the sign-in page shows an **Or login using:** button for each connector. With a connector, you don't enter a username or password in the console.

1. Click the button for your identity provider. The browser redirects to the identity provider's sign-in page.
1. Sign in to the identity provider. Complete any MFA that the identity provider requires.
1. After authentication, the browser returns to the console Dashboard.

If the identity provider returns an error, the console shows it and waits. Click **Sign Out** before you try again.

If your administrator makes a connector exclusive, the sign-in page shows only that connector's button and hides the username and password form.

To sign in with a different account than the one the console offers, click **Login with a different account** to show the other sign-in options.

{/* TODO verify: exact capitalization of "Login with a different account" on the 26.07.3 sign-in page. */}
{/* TODO screenshot: sign-in page with single sign-on buttons */}

## Register multi-factor authentication

Your administrator assigns an authentication connector to each user. The assigned connector decides whether you must use multi-factor authentication (MFA). Administrators can assign a connector that doesn't require MFA. For the connector types, see [Authentication](/docs/privilegesecure/26.07/configuration/authentication/overview.md).

If your connector uses the built-in MFA, you register an authenticator application the first time you sign in.

1. Sign in with your username and password. The console shows a QR code and a manual key.
1. In your authenticator application, scan the QR code or enter the manual key. For example, use Microsoft Authenticator or Google Authenticator.
1. Enter the verification code that the application shows.
1. Save the recovery codes that the console displays.

The console shows the recovery codes once, after registration. Copy them to a secure location before you close the dialog. The **Recovery Codes** button in the page header appears only at that time, and the codes aren't available to view again.

After registration, each sign-in asks for a code from your authenticator application. The console opens on the Dashboard after you enter a valid code.

{/* TODO verify: where a recovery code is entered at sign-in when the authenticator is unavailable. */}
{/* TODO screenshot: MFA registration page with the QR code (blur the code) */}
{/* TODO screenshot: recovery codes dialog */}

## Change an expired password

When the password for your account has expired, the console shows a change-password page after you enter your credentials. The page lists the password complexity rules. Enter a new password that meets them, and confirm it.

{/* TODO verify: whether the expired-password flow applies to domain users or only to local console users. */}

## Idle timeout

The console signs you out when you are idle. The **Idle Timeout (minutes)** setting under **System Settings** controls how long the console waits. The default is 10 minutes. Your administrator can change it. See [System settings reference](/docs/privilegesecure/26.07/configuration/system-settings/system-settings.md).

When the idle timeout passes, the **Session Timeout** dialog displays "Your session has been idle and will expire soon." Click **Keep Session Active** to keep working, or click **Logout** to sign out. If you take no action, the console signs you out 5 minutes later. With the default setting, you are signed out after about 15 minutes of inactivity.

{/* TODO verify: time the warning and the sign-out on 26.07.3 (G-83). The code sets the sign-out 5 minutes after the warning. */}
{/* TODO screenshot: idle timeout warning dialog */}

## Account lockout

Repeated failed sign-in attempts lock the account. See [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md) for how an administrator unlocks it.

You also can't sign in while an administrator has locked your account in Privilege Secure. {/* TODO verify: the message text the console shows for a locked managed account. */}

## Next steps

- [Navigate the console](/docs/privilegesecure/26.07/user-guide/navigate-console.md)
- [My Activities](/docs/privilegesecure/26.07/user-guide/my-activities.md)
