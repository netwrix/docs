---
title: "Unlock your accounts"
description: "Unlock your accounts"
sidebar_position: 40
---

# Unlock your accounts

You can unlock your identity store account yourself, without having to contact the administrator or
wait.

Your account can get locked due to:

- **Wrong password attempts while logging on to a Directory Manager client**
    - the consecutive number of times a user can provide the wrong password (Account lockout
      threshold), after which the user's identity store account gets locked.
    - the duration to lock the user account (_Account lockout duration_).
- **Invalid response to authentication types**

    The Directory Manager administrator can specify Password Policy for the identity store, which
    includes:

    - the consecutive number of times a role member can provide a wrong value for any authentication
      type (Failed Authentication Attempts Threshold).
    - the duration to lock the user account (_Account Lockout duration_).

With authentication disabled, you can't authenticate in Directory Manager; hence, you can't unlock
your identity store accounts or reset your passwords.

### Unlock identity store user accounts (after wrong password attempts) - enrolled users

While logging on Directory Manager, you provide wrong password on the Directory Manager Authenticate
window for the specified number of times, the following message appears:

![GroupID Authenticate](/images/directorymanager/11.1/portal/user/manage/locked.webp)

Now you can't log in to the portal unless you unlock your identity store account. Follow the
instructions to unlock your account:

Step 1 – On the Welcome to Directory Manager page of the portal, click **Account Locked?** card.

Step 2 – Select the identity store where your account exists from the identity store dropdown list.

Step 3 – Enter your identity store account name in the **Username** box.

Step 4 – Enter captcha in the **Captcha** box.

Step 5 – Click **Unlock Account**. You will be directed to a page where the authentication types
you enrolled your account with are listed.

To get authenticated through the required authentication types, click the relevant option in the
following list:

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
    3. In the displayed box, enter the 5 digit access code sent on your mobile phone.
    4. Click **Verify and Continue**.

    If you have not received a code, click **Send Again** and then enter the received code in the
    given box.

- Email Verification

    1. On the Multifactor Authentication window, select the **Email** checkbox and click
       **Continue**.
    2. Complete your email address and click **Send Code**.
    3. In the displayed box, enter the 5 digits access code sent to the provided email address.
    4. Click **Verify and Continue**.

    If you have not received a code, click **Send Again** and then enter the received code in the
    given box.

- Authenticator

    1. On the Multifactor Authentication window, select the **Authenticator** checkbox and click
       **Continue**.
    2. Launch the authenticator app on your smart phone.
    3. The app displays a 6-digit code. Enter that code in the **Security Code** box on the
       Authenticator page.

        The app generates a new code every 30 seconds.

    4. Click **Verify and Continue**.

- Link Account

    1. On the Multifactor Authentication window, select the **Link Account** checkbox and click
       **Continue**.
    2. On the Link Account tab, select a link account you want to use for resetting the password of
       your account.

        This tab lists the link accounts that have the Allow Authentication option enabled.

    3. Enter the username and password of the selected linked account in the respective boxes.
    4. Click **Next**.

- YubiKey

    Insert the YubiKey device in the USB slot of your computer.

    1. On the Multifactor Authentication window, select the **YubiKey** checkbox and click
       **Continue**.
    2. Click your YubiKey device name. The portal directs you to tap on the device.

        On tapping, you are authenticated.

- **Windows Hello**

    1. On the Multifactor Authentication window, click the **Windows Hello** checkbox and click
       **Continue**.
    2. Click **Authenticate and Continue**.

        Authenticate with the provided biometric information or with the PIN given in Windows Hello
        sign-in options.

Step 6 – Click **Unlock Account**. A message that the account has been unlocked successfully is
displayed.

You can now log in to Directory Manager portal with your account and perform the required function.

### Unlock identity store user accounts (after wrong password attempts) - unenrolled users

On entering the wrong password on the Directory Manager Authenticate window for the specified number
of times, your account gets locked. You can't log in to Password Center user portal unless you
unlock your identity store account. Follow the instructions to unlock your account:

Step 1 – On the Welcome to Directory Manager page of the portal, click **Unlock my account** card.

Step 2 – Select the identity store where your account exists from the identity store dropdown list.

Step 3 – Enter your identity store account name in the user name box.

Step 4 – Click **Unlock Account**.

You will be directed to a page where the Second Way Authentication type options are listed as the
administrator has configured for your role.

To get authenticated through the defined authentication types for your role, click the relevant
option in the following list:

- Security Question

    1. On the Second Way Authentication window, select the **Security Question** checkbox and click
       **Continue**.
    2. Provide answer to the question the administrator has set for you.
    3. Click **Verify and Continue**

- Mobile Verification

    1. On the Second Way Authentication window, select the **Mobile Verification** checkbox and
       click **Continue**.
    2. Type in the last four digit of your mobile number.
    3. Click **Send Code**.
    4. Enter the 5 digits access code sent on your mobile phone.
    5. Click **Verify and Continue**.

        If you have not received a code, click **Send Again** and then enter the received code in
        the given box.

- Email Verification

    1. On the Second Way Authentication window, select the **Email Verification** checkbox and
       click **Continue**.
    2. Complete your email address and click **Send Code**.
    3. In the displayed box, enter the 5 digits access code sent to the provided email address.
    4. Click **Verify and Continue**.

        If you have not received a code, click **Send Again** and then enter the received code in
        the given box.

Step 5 – You will be asked to enroll your account as per the multifactor authentication policy
defined for your role.

On successful enrollment, you are redirected to the Unlock My Account page. Your account is listed
on this page with the checkbox selected for it.

Step 6 – Click **Unlock Account**.

A message that the account has been unlocked successfully is displayed.

Step 7 – You can now log in to portal with your account and perform the required function.

### Unlock identity store user accounts (after providing wrong response to authentication types) - enrolled and unenrolled users

While authenticating on the portal, if enrolled or unenrolled users provide a wrong answer for the
specified number of times, their account gets locked and the following message is displayed:

![accountlockout](/images/directorymanager/11.1/portal/user/manage/accountlockout.webp)

This type of account unlock can be resolved in one of the following two ways:

- While logging on to the portal, you provide the correct password for your account.

**OR**

- You wait for the specified duration, after which the account will be unlocked automatically.

:::note
Helpdesk can't unlock accounts that get locked out on providing a wrong response to the
authentication types.

:::
