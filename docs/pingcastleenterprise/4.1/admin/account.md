---
description: Manage your PingCastle Enterprise profile, notifications, password, passkeys, and active sessions from the Manage Your Account window.
sidebar_position: 6
sidebar_label: Manage accounts
---
# Managing Accounts in PingCastle Enterprise

This section explains how to manage your own account in PingCastle Enterprise.

## Manage My Account

The Manage My Account menu opens the Manage Your Account window. This window is a centralized hub for managing your user profile, security settings, notifications, and account information.

To access the Manage My Account window:

1. Log in to your account.

2. Click your profile icon in the top-right corner of the application.

3. Select **Manage My Account** from the dropdown menu. This opens the Manage Your Account window.

![A screenshot of the "Manage My Account" button](/images/pingcastleenterprise/4.1/user/image67.webp)

### Navigation

The Manage Your Account window has the following functions and key features:

| Feature | Purpose | Key actions | Availability |
|---|---|---|---|
| Profile | Manage basic account information | View username, update email | All users |
| Notifications | Control notification delivery | Toggle Domain/Entra ID reports, toggle Entity KPI notifications, view email previews | All users |
| Authorizations | View access permissions | See Domain authorizations, see Entity authorizations, understand direct permissions | All users |
| Password | Change account password | Self-service password reset, password complexity requirements | Internal users only |
| Sign-in security | Add enhanced security | Register passkeys, set up an authenticator app, generate recovery codes | Internal users only |
| View My User Claims | Debug authentication | See all account claims, understand permission sources, troubleshoot access issues | All users |
| View My Sessions | Monitor account access | View all active sessions, end suspicious sessions, session management | All users |

## Sign-in security

The **Sign-in security** page is where you manage the extra ways you verify your identity when you sign in with a local username and password. It covers passkeys, an authenticator app, and recovery codes. These options are available only to users with local (internal) accounts. Users who sign in with Windows, OpenID Connect, SAML2, or another external method manage multi-factor authentication in their identity provider.

To open the page, go to **Manage** > **Sign-in security**.

{/* TODO: add a screenshot of the Sign-in security page */}

### Passkeys

A passkey is a sign-in credential that lives on your device, in a password manager, or on a hardware security key. It uses the WebAuthn and FIDO2 standards. Your private key never leaves the device, so attackers can't phish the passkey or reuse it on another site.

You can use a passkey in two ways:

- **As a second factor.** After you enter your username and password, you verify with your passkey instead of an authenticator app. This is the default.
- **For passwordless sign-in.** You sign in with the passkey alone and skip both the password and the second factor, because a passkey already proves who you are and that you hold the device. An administrator must enable this option first. See [Passkeys](../configuration/settings/authentication.md#passkeys).

Passkeys require a browser that supports passkeys. Open PingCastle Enterprise using the address your administrator configured for passkeys. If you use a different address, the passkey controls stay unavailable and a banner explains why.

#### Register a passkey

1. Go to **Manage** > **Sign-in security**.

2. In the **Passkeys** section, click **Add a passkey**. If you have no passkeys yet, the button is under "No passkeys registered". Otherwise it is below your list of passkeys.

3. In the **Add a passkey** window, enter a name in **Passkey name**, such as `Work laptop`. Use a name that helps you recognize the passkey later. The name can be up to 256 characters.

4. Click **Continue**.

5. When the window shows "Waiting for browser...", follow the prompts from your browser or device to create the passkey. You may need to unlock your device or touch a security key. If nothing happens, click **Try again**.

6. When the window shows "Passkey registered successfully", click **Done**.

If registration fails, an error message appears in a banner on the page, not in the window.

If the **Add a passkey** button is missing, passkeys are unavailable. A banner on the page explains why. See [Troubleshooting passkey availability](../configuration/settings/authentication.md#troubleshooting-passkey-availability).

The passkey appears in your list with the name of its authenticator, such as Microsoft or Yubico, when PingCastle Enterprise recognizes it.

You can register more than one passkey. Register a second one on a different device so you can still sign in if you lose the first.

#### Rename or delete a passkey

1. Go to **Manage** > **Sign-in security**.

2. In the **Passkeys** section, find the passkey.

3. To change the name, click **Rename**, enter the name in **New name**, and click **Save**.

4. To remove the passkey, click **Delete**, read the confirmation, and click **Delete** again. The confirmation says: "This action cannot be undone. You will no longer be able to use this passkey to sign in."

Deleting a passkey removes only that credential. It doesn't affect your password, authenticator app, or other passkeys.

#### Sign in with a passkey

If a passkey is your second factor, sign in with your username and password. When the verification page opens, select **Passkey** and follow the prompts. If you've set up both a passkey and an authenticator app, the page asks which one to use.

If your administrator enabled passwordless sign-in, select the passkey option on the login page instead of entering a password.

### Authenticator app

An authenticator app, such as Microsoft Authenticator or Google Authenticator, generates a six-digit code that you enter after your password. You can use an authenticator app, a passkey, or both. Recovery codes cover either one.

#### Set up an authenticator app

1. Go to **Manage** > **Sign-in security**.

2. In the authenticator row, click **Set up**. The **Enable authenticator** page opens.

3. Under **Step 1: Download an authenticator app**, install an authenticator app on your phone if you don't have one.

4. Under **Step 2: Scan the QR code or enter the key**, scan the QR code with the app. If you can't scan it, enter the shared key instead.

5. Under **Step 3: Enter the verification code**, enter the six-digit code from the app in **Verification code**, one digit per box.

6. Click **Verify**.

If the code is wrong, PingCastle Enterprise shows "Verification code is invalid." and keeps the QR code on screen so you can try again.

:::note
Each time you open the setup page, PingCastle Enterprise generates a new key. If you reload the page after scanning the QR code but before you confirm, the key in your app no longer works. Scan the new QR code.
:::

After you confirm the code, the authenticator app is on for your account. If you don't have recovery codes yet, PingCastle Enterprise takes you straight to generating them. See [Recovery codes](#recovery-codes).

#### Sign in with an authenticator app

1. Sign in with your username and password.

2. On the verification page, enter the six-digit code from your authenticator app. If you also have a passkey, select the authenticator app first.

3. Optional: Select **Remember this machine** to skip the code on this device.

If the code is wrong, PingCastle Enterprise shows "Invalid authenticator code."

#### Reset or turn off the authenticator app

When an authenticator app is on, the authenticator row on **Sign-in security** has these options:

- **Reconfigure**: Opens the **Enable authenticator** page so you can pair a new authenticator app, for example when you get a new phone. Follow the steps in [Set up an authenticator app](#set-up-an-authenticator-app).
- **Disable**: Turns off the authenticator app. PingCastle Enterprise asks you to confirm.

### Recovery codes

Recovery codes let you sign in when you can't use your authenticator app or passkey, for example when you lose your phone. Each set has 10 codes, and each code works once.

You can generate recovery codes only after you set up an authenticator app or register at least one passkey. They work for either method.

#### Generate recovery codes

1. Go to **Manage** > **Sign-in security**.

2. In the recovery codes row, click **Generate new**. The **Generate recovery codes** page opens with a warning to put your recovery codes in a safe place. If you lose your device and don't have the recovery codes, you lose access to your account.

   If you already have recovery codes, the page also warns that generating new ones immediately invalidates your existing codes.

3. Click **Generate recovery codes**.

4. On the **Recovery codes** page, click **Copy all codes** or **Download as file**, and store the codes somewhere safe, such as a password manager.

5. Click **Back to sign-in security**.

:::warning
PingCastle Enterprise shows the codes only once. You can't view them again after you leave the page. **Sign-in security** shows how many codes you have left.
:::

#### Sign in with a recovery code

1. Sign in with your username and password.

2. On the verification page, choose to use a recovery code.

3. Enter one unused code. PingCastle Enterprise ignores spaces.

Each code works only once. Generate a new set when you run low.

:::note
Failed password, authenticator, and recovery code attempts share one counter. After 10 failed attempts, the account locks for 30 minutes.
:::
