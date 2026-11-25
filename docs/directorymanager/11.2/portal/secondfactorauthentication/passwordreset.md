---
title: "Reset Your Account Password in Directory Manager"
description: "Reset your identity store account password in the Directory Manager portal as an enrolled or unenrolled user, using multifactor authentication."
keywords:
  - reset password
  - Forgot Password
  - multifactor authentication
  - enrolled users
  - unenrolled users
  - second way authentication
sidebar_position: 30
---

# Reset Your Account Password in Directory Manager

The Directory Manager portal enables enrolled users in an identity store to reset their account
passwords securely. They can reset their passwords if they have forgotten or lost their existing
passwords. Unenrolled users can reset their passwords if the administrator has enabled the Second
Way Authentication option for their role.

The Directory Manager portal provides an authentication mechanism, whereby users must authenticate
themselves with the multifactor authentication types they enrolled their accounts with.

If the administrator has enabled multifactor authentication for the identity store, users must
authenticate their accounts using the authentication types they enrolled their account with. After
successful authentication, users can reset the account password in accordance with the password policies
the Directory Manager administrator defined for their role in the identity store.

## Reset identity store account password (enrolled users)

To reset the identity store account password for enrolled users, follow these steps.

Step 1 – On the Welcome to Directory Manager page of the portal, click the **Forgot Password** card.

Step 2 – Select the identity store where your account exists from the identity store dropdown list.

Step 3 – Enter your identity store account name in the user name box.

Step 4 – Provide the displayed captcha code in the **Captcha** box.

Step 5 – Click **Reset Password**. The portal directs you to a page that shows the authentication
types you enrolled this account with.

Step 6 – Authenticate your account using the required types.

- Security Questions

    1. On the Multifactor Authentication window, select the **Security Questions** checkbox and
       click **Continue**.
    2. The page lists the security questions you enrolled your account with. Provide answers to
       these questions.
    3. Click **Verify and Continue**.

- Mobile Verification

    1. On the Multifactor Authentication window, select the **Mobile Verification** checkbox and
       click **Continue**.
    2. Enter the last four digits of your mobile number and click **Send Code**.
    3. In the displayed box, enter the 5-digit access code sent on your mobile phone.
    4. Click **Verify and Continue**.

    If you haven't received a code, click **Send Again** and then enter the received code in the
    given box.

- Email Verification

    1. On the Multifactor Authentication window, select the **Email** checkbox and click
       **Continue**.
    2. Complete your email address and click **Send Code**.
    3. In the displayed box, enter the 5-digit access code sent to the provided email address.
    4. Click **Verify and Continue**.

    If you haven't received a code, click **Send Again** and then enter the received code in the
    given box.

- Authenticator

    1. On the **Multifactor Authentication** window, select the **Authenticator** checkbox and click
       **Continue**.
    2. Launch the authenticator app on your smartphone.
    3. The app displays a 6-digit code. Enter that code in the **Security Code** box on the
       Authenticator page.

        The app generates a new code every 30 seconds.

    4. Click **Verify and Continue**.

- Link Account

    1. On the Multifactor Authentication window, select the **Link Account** checkbox and click
       **Continue**.
    2. On the **Link Account** tab, select a link account you want to use for resetting the password
       of your account.

        This tab lists the linked accounts that have the **Allow Authentication** option enabled.

    3. Enter the username and password of the selected linked account in the respective boxes.
    4. Click **Next**.

- YubiKey

    Insert the YubiKey device in the USB slot of your computer.

    1. On the Multifactor Authentication window, select the **YubiKey** checkbox and click
       **Continue**.
    2. Click your YubiKey device name. The portal directs you to tap the device.
       After you tap it, you are authenticated.

- Windows Hello

    1. On the Multifactor Authentication window, select the **Windows Hello** checkbox and click
       **Continue**.
    2. Click **Authenticate and Continue**.

        Authenticate with the provided biometric information or with the PIN given in Windows Hello
        sign-in options.

Step 7 – After you authenticate, the Reset My Password page appears.

Step 8 – All your linked accounts, if any, are listed in the Select the account to reset their
passwords section. Select the checkboxes for the accounts to reset their passwords.

Enter your new password in the **New password** box. On typing the new password, the **Password
Acceptance** box appears. The new password must conform to the rules of the applied password policy
for the identity store.

To meet the password complexity requirements, the password must:

1. be at least as long as the length defined in the password policy of the provider.
2. contain characters from the following categories:

    - English uppercase characters (A through Z)
    - English lowercase characters (a through z)
    - Base 10 digits (0 through 9)
    - Special characters (for example, !, $, #, %)

Step 9 – Enter the new password for the selected accounts in the Confirm new password box.

Step 10 – Click **Reset Password**.

If you have reused an old password and it doesn't meet the **Enforce password history** policy of
the provider, a message informs you that the password must be different from the old one.

Step 11 – On reset, the Reset Password Results page displays the message "Password has been reset
successfully." Click **OK**.

## Reset identity store account password (unenrolled users)

To reset the identity store account password for unenrolled users, follow these steps.

Step 1 – On the Welcome to Directory Manager page, click the **Forgot Password** card.

Step 2 – Select the identity store your account resides in from the Identity Store list.

Step 3 – Enter your user name in the Username box.

Step 4 – Provide the displayed captcha code in the **Captcha** box.

Step 5 – Click **Reset Password**. The portal directs you to a page that shows the second way
authentication types the Directory Manager administrator has enabled for your role.

Step 6 – Authenticate your account using any of the following second way authentication options.

- Security Question

    1. Select the **Security Questions** checkbox and click **Continue**.
    2. Provide an answer to the question the administrator has set for you.
    3. Click **Verify and Continue**.

- Mobile Verification

    1. Select the **Mobile Verification** checkbox and click **Continue**.
    2. Enter the last four digits of your mobile number in the box and click **Send Code**.
    3. In the displayed box, enter the 5-digit access code sent on your mobile phone.
    4. Click **Verify and Continue**.

    If you haven't received a code, click **Send Again** and then enter the received code in the
    given box.

- Email Verification

    1. Select the **Email Verification** checkbox and click **Continue**.
    2. Complete your email address and click **Send Code**.
    3. Enter the 5-digit access code sent to the provided email address in the displayed box.
    4. Click **Verify and Continue**.

    If you haven't received a code, click **Send Again** and then enter the received code in the
    given box.

Step 7 – Follow steps 6 through 11 in the Reset identity store account password (enrolled users)
section to reset your password.
