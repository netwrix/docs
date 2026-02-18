---
title: "Configure Multi-Factor Authentication"
description: "Configure Multi-Factor Authentication"
sidebar_position: 20
---

# Configure Multi-Factor Authentication

You can configure multi-factor authentication (MFA) for your Identity Recovery account
to add an additional layer of security when signing into the application.

:::note
At present, only authenticator apps are supported for MFA. As a prerequisite to enabling MFA, install
an authenticator app—such as Google Authenticator or Microsoft Authenticator—on your phone.
:::


## Enable Authenticator for MFA

Follow the steps to enable the authenticator option for MFA.

![Enable MFA page](/images/identityrecovery/3.1/product/mfa_enable.png)

**Step 1 –** In the Recovery Console, click your profile icon in the top right corner of the page
and select **Manage**. The MFA page opens.

**Step 2 –** Click the **Add authenticator app** button. The Configure authenticator app page is
displayed, showing the instructions for setting up the app.

![Configure authenticator app page](/images/identityrecovery/3.1/product/mfa_authenticator.png)

**Step 3 –** Open the authenticator app on your phone and scan the QR code with it. A new account is
created in the app for the Recovery application and a verification code is displayed under the
account name.

**Step 4 –** Enter this code in the Verification Code field on the Configure authenticator app page
and click **Verify**. A confirmation message is displayed on success.

The authenticator app generates a new code every 30 seconds, with each code expiring after 30
seconds.

**Step 5 –** Click **Close**.

MFA has been enabled for your account. Now you must authenticate your account using the
Authenticator app every time you sign into Identity Recovery. See the
[Sign In](/docs/identityrecovery/3.1/install/login.md#sign-in) topic for additional information.

## Disable Authenticator for MFA

Follow the steps to disable MFA for your Identity Recovery account.

![Disable MFA page](/images/identityrecovery/3.1/product/mfa_disable.png)

**Step 1 –** In the Recovery Console, click your profile icon in the top right corner of the page
and select **Manage**. The MFA page opens.

**Step 2 –** Click **Disable 2FA**. A confirmation message is displayed. Click **Disable 2FA** to
disable multi-factor authentication or **Cancel** to leave it enabled.

On disabling MFA, the page displays a confirmation message and there is an option to enable it
again.
