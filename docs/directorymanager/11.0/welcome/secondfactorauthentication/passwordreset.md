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
passwords securely. They can reset their passwords if they have forgotten or lost their existing passwords.
Unenrolled users can reset their passwords if the administrator has enabled the Second Way
Authentication option for their role.

The Directory Manager portal provides an authentication mechanism, whereby users must authenticate
themselves with the multifactor authentication types they enrolled their accounts with.

If the administrator has enabled multifactor authentication for the identity store, users must
authenticate their accounts using the authentication types they enrolled their account with. After
successful authentication, users can reset the account password in accordance with the password
policies the Directory Manager administrator defined for their role in the identity store.

What do you want to do?

- [Reset identity store account password (enrolled users)](#reset-identity-store-account-password-enrolled-users)
- [Reset identity store account password (unenrolled users)](#reset-identity-store-account-password-unenrolled-users)

## Reset identity store account password (enrolled users)

1. On the **Welcome to Directory Manager** page of the portal, click the **Forgot Password** card.
2. Select the identity store where your account exists from the identity store dropdown list.
3. Enter your identity store account name in the user name box.
4. Provide the displayed captcha code in the **Captcha** box.
5. Click **Reset Password**. The portal directs you to a page that shows the authentication types
   you enrolled this account with.
6. Authenticate your account using the required types.

    - Security Questions

        1. On the Multifactor Authentication window, select the **Security Questions** checkbox and
           click **Continue**.
        2. The page lists the security questions you enrolled your account with. Provide answers to
           these questions.
        3. Click **Verify and Continue**.

    - Mobile Verification

        1. On the **Multifactor Authentication** window, select the **Mobile Verification** check
           box and click **Continue**.
        2. Enter the last four digits of your mobile number and click **Send Code**.
        3. In the displayed box, enter the 5-digit access code sent to your mobile phone.
        4. Click **Verify and Continue**.

        If you haven't received a code, click **Send Again** and then enter the received code in
        the given box.

    - Email Verification

        1. On the **Multifactor Authentication** window, select the **Email** checkbox and click
           **Continue**.
        2. Complete your email address and click **Send Code**.
        3. In the displayed box, enter the 5-digit access code sent to the provided email address.
        4. Click **Verify and Continue**.

        If you haven't received a code, click **Send Again** and then enter the received code in
        the given box.

    - Authenticator

        1. On the **Multifactor Authentication** window, select the **Authenticator** checkbox and
           click **Continue**.
        2. Launch the authenticator app on your smartphone.
        3. The app displays a 6-digit code. Enter that code in the **Security Code** box on the
           Authenticator page.

            The app generates a new code every 30 seconds.

        4. Click **Verify and Continue**.

    - Link Account

        1. On the **Multifactor Authentication** window, select the **Link Account** checkbox and
           click **Continue**.
        2. On the **Link Account** tab, select a linked account you want to use for resetting the
           password of your account.

            This tab lists the linked accounts that have the **Allow Authentication** option
            enabled.

        3. Enter the username and password of the selected linked account in the respective boxes.
        4. Click **Next**.

    - YubiKey

        Insert the YubiKey device in the USB slot of your computer.

        1. On the **Multifactor Authentication** window, select the **YubiKey** checkbox and click
           **Continue**.
        2. Click your YubiKey device name. The portal directs you to tap the device.  
           After you tap it, you are authenticated.

    - Windows Hello

        1. On the **Multifactor Authentication** window, select the **Windows Hello** checkbox and
           click **Continue**.
        2. Click **Authenticate and Continue**.

            Authenticate with the provided biometric information or with the PIN given in Windows
            Hello sign-in options.

    After you authenticate, the **Reset My Password** page is displayed.

7. All your linked accounts, if any, are listed in the **Select the account to reset their
   passwords** section. Select the checkboxes for the accounts to reset their passwords.
8. Enter your new password in the **New password** box. On typing the new password, the **Password
   Acceptance** box appears. The new password must meet the password complexity requirements and
   conform to the password complexity rules defined by the Directory Manager administrator for the
   identity store.

    To meet the password complexity requirements, the password must:

    1. be at least as long as the length defined in the password policy of the provider.
    2. contain characters from the following categories:

        - English uppercase characters (A through Z)
        - English lowercase characters (a through z)
        - Base 10 digits (0 through 9)
        - Special characters (for example, !, $, #, %)

9. Enter the new password for the selected accounts in the **Confirm new password** box.
10. Click **Reset Password**.

    If you have reused an old password and it doesn't meet the **Enforce password history** policy
    of the provider, a message informs you that the password must be different from the old one.

11. On reset, the **Reset Password Results** page displays the message "Password has been reset
    successfully."
12. Click **OK**.

## Reset identity store account password (unenrolled users)

1. On the **Welcome to Directory Manager** page, click the **Forgot Password** card.
2. Select the identity store your account resides in from the **Identity Store** list.
3. Enter your user name in the **Username** box.
4. Provide the displayed captcha code in the **Captcha** box.
5. Click **Reset Password**. The portal directs you to a page that shows the second way
   authentication types the Directory Manager administrator has enabled for your role.
6. Authenticate your account using the listed types.

    - Security Question

        1. Select the **Security Questions** checkbox and click **Continue**.
        2. Provide an answer to the question the administrator has set for you.
        3. Click **Verify and Continue**.

    - Mobile Verification

        1. Select the **Mobile Verification** checkbox and click **Continue**.
        2. Enter the last four digits of your mobile number in the box and click **Send Code**.
        3. In the displayed box, enter the 5-digit access code sent to your mobile phone.
        4. Click **Verify and Continue**.

        If you haven't received a code, click **Send Again** and then enter the received code in
        the given box.

    - Email Verification

        1. Select the **Email Verification** checkbox and click **Continue**.
        2. Complete your email address and click **Send Code**.
        3. Enter the 5-digit access code sent to the provided email address in the displayed box.
        4. Click **Verify and Continue**.

        If you haven't received a code, click **Send Again** and then enter the received code in
        the given box.

7. Follow steps 6 through 12 in
   [Reset identity store account password (enrolled users)](#reset-identity-store-account-password-enrolled-users)
   section to reset your password.

**See Also**

- [Enroll Your Identity Store Account in Directory Manager](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
- [ Change Your Password in Directory Manager](/docs/directorymanager/11.0/welcome/user/manage/changepassword.md)
- [Unlock your Directory Manager account](/docs/directorymanager/11.0/welcome/user/manage/unlockaccount.md)
