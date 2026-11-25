---
title: "Unlock your Directory Manager account"
description: "Unlock your identity store account yourself after wrong password attempts or failed authentication, without waiting for the administrator."
keywords:
  - unlock account
  - account lockout
  - Directory Manager portal
  - Account Locked
  - multifactor authentication
  - identity store
sidebar_position: 40
---

# Unlock your Directory Manager account

In the Directory Manager portal, you can unlock your identity store account yourself, without having
to contact the administrator or wait.

Your account can get locked because of:

1. **Wrong password attempts while signing in to the portal**
    - the consecutive number of times a user can provide the wrong password (Account lockout
      threshold), after which the user's identity store account gets locked.
    - the duration to lock the user account (_Account lockout duration_).
2. **Invalid response to authentication type(s)**

    The Directory Manager administrator can specify a password policy for the identity store, which
    includes:

    - the consecutive number of times a role member can provide a wrong value for any authentication
      type (Failed Authentication Attempts Threshold).
    - the duration to lock the user account (_Account Lockout duration_).

With authentication disabled, you can't authenticate yourself on the Directory Manager portal, so you
can't unlock your identity store accounts or reset your passwords until the account is unlocked.

## Unlock identity store user accounts (after wrong password attempts) - enrolled users

If you enter the wrong password on the **GroupID Authenticate** window the specified number of times
while signing in to the portal, the following message appears:

![Authenticate window showing the account locked message](/images/directorymanager/11.0/portal/user/manage/locked.webp)

You can't sign in to the portal unless you unlock your identity store account. Follow these
instructions to unlock your account:

1. On the **Welcome to GroupID** page of the portal, click the **Account Locked?** card.
2. Select the identity store where your account exists from the identity store dropdown list.
3. Enter your identity store account name in the **Username** box.
4. Enter the captcha in the **Captcha** box.
5. Click **Unlock Account**. The portal directs you to a page where the authentication types you
   enrolled your account with are listed.

    To authenticate through the required authentication types, click the relevant option in the
    following list:

    - Security Questions

        1. On the Multifactor Authentication window, select the **Security Questions** checkbox and
           click **Continue**.
        2. The page lists the security questions you enrolled your account with. Provide answers to
           these questions.
        3. Click **Verify and Continue**.

    - Mobile Verification

        1. On the **Multifactor Authentication** window, select the **Mobile Verification** checkbox
           and click **Continue**.
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
        2. On the **Link Account** tab, select a link account you want to use for resetting the
           password of your account.

            This tab lists the link accounts that have the **Allow Authentication** option
            enabled.

        3. Enter the username and password of the selected linked account in the respective boxes.
        4. Click **Next**.

    - YubiKey

        Insert the YubiKey device in the USB slot of your computer.

        1. On the **Multifactor Authentication** window, select the **YubiKey** checkbox and click
           **Continue**.
        2. Click your YubiKey device name. The portal directs you to tap the device.

            When you tap, you are authenticated.

    - **Windows Hello**

        1. On the **Multifactor Authentication** window, click the **Windows Hello** checkbox and
           click **Continue**.
        2. Click **Authenticate and Continue**.

            Authenticate with the provided biometric information or with the PIN given in Windows
            Hello sign-in options.

6. Click **Unlock Account**.
7. A message that the account has been unlocked successfully is displayed.

You can now sign in to the Directory Manager portal with your account and perform the required function.

## Unlock identity store user accounts (after wrong password attempts) - unenrolled users

On entering the wrong password on the **GroupID Authenticate** window for the specified number of
times, your account gets locked. You can't sign in to the Password Center user portal unless you
unlock your identity store account. Follow these instructions to unlock your account:

1. On the **Welcome to GroupID** page of the portal, click the **Unlock my account** card.
2. Select the identity store where your account exists from the identity store dropdown list.
3. Enter your identity store account name in the user name box.
4. Click **Unlock Account**.

    The portal directs you to a page where the **Second Way Authentication** type options are
    listed as the administrator has configured for your role.

    To authenticate through the defined authentication types for your role, click the relevant
    option in the following list:

    - Security Question

        1. On the Second Way Authentication window, select the **Security Question** checkbox and
           click **Continue**.
        2. Provide an answer to the question the administrator has set for you.
        3. Click **Verify and Continue**.

    - Mobile Verification

        1. On the Second Way Authentication window, select the **Mobile Verification** checkbox and
           click **Continue**.
        2. Enter the last four digits of your mobile number.
        3. Click **Send Code**.
        4. Enter the 5-digit access code sent to your mobile phone.
        5. Click **Verify and Continue**.

            If you haven't received a code, click **Send Again** and then enter the received code
            in the given box.

    - Email Verification

        1. On the Second Way Authentication window, select the **Email Verification** checkbox and
           click **Continue**.
        2. Complete your email address and click **Send Code**.
        3. In the displayed box, enter the 5-digit access code sent to the provided email address.
        4. Click **Verify and Continue**.

            If you haven't received a code, click **Send Again** and then enter the received code
            in the given box.

5. The portal asks you to enroll your account according to the **Multifactor Authentication**
   policy defined for your role.

    On successful enrollment, you are redirected to the **Unlock My Account** page. Your account is
    listed on this page with the checkbox selected for it.

6. Click **Unlock Account**.

    A message that the account has been unlocked successfully is displayed.

7. You can now sign in to the portal with your account and perform the required function.

## Unlock identity store user accounts (after providing wrong response to authentication types) - enrolled and unenrolled users

While authenticating on the portal, if enrolled or unenrolled users provide a wrong answer the
specified number of times, their account gets locked and the following message is displayed:

![Message stating that the account is locked after failed authentication attempts](/images/directorymanager/11.0/portal/user/manage/accountlockout.webp)

This type of account unlock can be resolved in one of the following two ways:

- While signing in to the portal, you provide the correct password for your account.

    **OR**

- You wait for the specified duration, after which the account unlocks automatically.

    :::note
    Helpdesk members can't unlock accounts that get locked out because of a wrong response to the
    authentication types.
    :::

**See Also**

- [Enroll Your Identity Store Account in Directory Manager](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
- [Reset Your Account Password in Directory Manager](/docs/directorymanager/11.0/welcome/secondfactorauthentication/passwordreset.md)
- [Change Your Password in Directory Manager](/docs/directorymanager/11.0/welcome/user/manage/changepassword.md)
