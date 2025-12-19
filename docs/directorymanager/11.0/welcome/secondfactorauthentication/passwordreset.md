---
title: "Reset Passwords"
description: "Reset Passwords"
sidebar_position: 30
---

# Reset Passwords

The GroupID portal enables enrolled users in an identity store reset their account passwords
securely. They can reset their passwords if they have forgotten or lost their existing passwords.
Unenrolled users can reset their passwords if the administrator has enabled the Second Way
Authentication option for their role.

The GroupID portal provides an authentication mechanism, whereby users must authenticate themselves
with Multifactor Authentication type(s) they enrolled their accounts with.

If the administrator has enabled multifactor authentication for the identity store, users must
authenticate their accounts using the authentication type(s) they enrolled their account with. After
successful authentication, users can reset account password in accordance with the password policies
the GroupID administrator has defined for your role in the identity store.

What do you want to do?

- [Reset identity store account password (enrolled users)](#reset-identity-store-account-password-enrolled-users)
- [Reset identity store account password (unenrolled users)](#reset-identity-store-account-password-unenrolled-users)

## Reset identity store account password (enrolled users)

1. On the **Welcome to GroupID** page of GroupID portal, click the **Forgot Password** card.
2. Select the identity store where your account exists from the identity store drop down list.
3. Type your identity store account name in the user name box.
4. Provide the displayed captcha code in the **Captcha** box.
5. Click **Reset Password**. You will be directed to a page that shows the authentication type(s)
   you enrolled this account with.
6. Authenticate your account using the required type(s).

    - Security Questions

        1. On the Multifactor Authentication window, select the **Security Questions** check box and
           click **Continue**.
        2. The page lists the security questions you enrolled your account with. Provide answers to
           these questions.
        3. Click **Verify and Continue**.

    - Mobile Verification

        1. On the **Multifactor Authentication** window, select the **Mobile Verification** check
           box and click **Continue**.
        2. Type the last four digits of your mobile number and click **Send Code**.
        3. In the displayed box, type the 5 digit access code sent on your mobile phone.
        4. Click **Verify and Continue**.

        If you have not received a code, click **Send Again** and then enter the received code in
        the given box.

    - Email Verification

        1. On the **Multifactor Authentication** window, select the **Email**check box and click
           **Continue**.
        2. Complete your email address and click **Send Code**.
        3. In the displayed box, type the 5 digits access code sent to the provided email address.
        4. Click **Verify and Continue**.

        If you have not received a code, click **Send Again** and then enter the received code in
        the given box.

    - Authenticator

        1. On the **Multifactor Authentication** window, select the **Authenticator**check box and
           click **Continue**.
        2. Launch the authenticator app on your smartphone.
        3. The app displays a 6-digit code. Enter that code in the **Security Code** box on the
           Authenticator page.

            The app generates a new code every 30 seconds.

        4. Click **Verify and Continue**.

    - Link Account

        1. On the **Multifactor Authentication** window, select the **Link Account** check box and
           click **Continue**.
        2. On the **Link Account** tab, select a link account you want to use for resetting the
           password of your account.

            This tab lists the link account(s) that have the **Allow Authentication** option
            enabled.

        3. Type the username and password of the selected linked account in the respective boxes.
        4. Click **Next**.

    - YubiKey

        Insert the YubiKey device in the USB slot of your computer.

        1. On the **Multifactor Authentication** window, select the **YubiKey**check box and click
           **Continue**.
        2. Click your YubiKey device name. The portal directs you to tap on the device.  
           On tapping, you are authenticated.

    - Windows Hello

        1. On the **Multifactor Authentication** window, click the **Windows Hello** check box and
           click **Continue**.
        2. Click **Authenticate and Continue**.

            Authenticate with the provided biometric information or with the PIN given in Windows
            Hello sign-in options.

    On getting authenticated, the **Reset My Password** page is displayed.

7. All your linked accounts, if any, are listed in the **Select the account to reset their
   passwords** section. Select the check boxes for the account(s) to reset their password(s).
8. Type your new password in the **New password** box. On typing the new password, the **Password
   Acceptance** box appears. The new password must meet the password complexity requirements and
   conform to the password complexity rules defined by the GroupID administrator for the identity
   store.

    To meet the password complexity requirements, the password must:

    1. be at least as per the characters length defined in the password policy of the provider.
    2. contain uppercase lowercase characters, digit or special character:

        - English uppercase characters (A through Z)
        - English lowercase characters (a through z)
        - Base 10 digits (0 through 9)
        - Special characters (for example, !, $, #, %)

9. Type the new password for the selected account(s) in the **Confirm new password** box.
10. Click **Reset Password**.

    If you have reused an old password and it does not meet the **Enforce password history** policy
    of the provider, a message inform you that the password must be different from the old one.

11. On reset, the **Reset Password Results** page displays the message ,"Password has been reset
    successfully.".
12. Click **OK**.

## Reset identity store account password (unenrolled users)

1. On the **Welcome to GroupID** page, click the **Forgot Password** card.
2. Select the identity store from the **Identity Store** list your account resides in.
3. Type your user name in the **Username** box.
4. Provide the displayed captcha code in the **Captcha** box.
5. Click **Reset Password**. You will be directed to a page that shows the second way authentication
   type(s) the GroupID administrator has enabled for your role.
6. Authenticate your account using the listed types.

    - Security Question

        1. Select the **Security Questions** check box and click **Continue**.
        2. Provide answer to the question the administrator has set for you.
        3. Click **Verify and Continue**.

    - Mobile Verification

        1. Select **Mobile Verification** check box and click **Continue**.
        2. Type the last four digits of your mobile number in the box and click **Send Code**.
        3. In the displayed box, type the 5 digit access code sent on your mobile phone.
        4. Click **Verify and Continue**.

        If you have not received a code, click **Send Again** and then enter the received code in
        the given box.

    - Email Verification

        1. Select **Email Verification** check box and click **Continue**.
        2. Complete your email address and click **Send Code**.
        3. Type the 5 digit access code sent to the provided email address in the displayed box.
        4. Click **Verify and Continue**.

        If you have not received a code, click **Send Again** and then enter the received code in
        the given box.

7. Follow the steps 6 - 12 in
   [Reset identity store account password (enrolled users)](#reset-identity-store-account-password-enrolled-users)
   section to reset your password.

**See Also**

- [Enroll Your Identity Store Account](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
- [ Change your password](/docs/directorymanager/11.0/welcome/user/manage/changepassword.md)
- [Unlock your accounts](/docs/directorymanager/11.0/welcome/user/manage/unlockaccount.md)
