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

You can unlock your identity store account yourself, without having to contact the administrator or wait.

Your account can get locked because of:

- **Wrong password attempts while signing in to a Directory Manager client**
  - The consecutive number of times a user can provide the wrong password (Account lockout threshold), after which the user's identity store account gets locked.
  - The duration to lock the user account (_Account lockout duration_).
- **Invalid response to authentication types**

  The Directory Manager administrator can specify a password policy for the identity store, which includes:

  - The consecutive number of times a role member can provide a wrong value for any authentication type (Failed Authentication Attempts Threshold).
  - The duration to lock the user account (_Account Lockout duration_).

With authentication disabled, you can't authenticate in Directory Manager, so you can't unlock your identity store accounts or reset your passwords.

## Unlock an account after wrong password attempts: enrolled users

If you enter the wrong password on the Directory Manager Authenticate window the specified number of times while signing in to Directory Manager, the following message appears:

![Authenticate window showing the account locked message](/images/directorymanager/11.2/portal/user/manage/locked.webp)

You can't sign in to the portal unless you unlock your identity store account. To unlock your account:

1. On the Welcome to Directory Manager page of the portal, click the **Account Locked?** card.
2. Select the identity store where your account exists from the identity store dropdown list.
3. Enter your identity store account name in the **Username** box.
4. Enter the captcha in the **Captcha** box.
5. Click **Unlock Account**. The portal directs you to a page that lists the authentication types you enrolled your account with.
6. To authenticate through the required authentication types, click the relevant option in the following list:

   - Security Questions

     1. On the Multifactor Authentication window, select the **Security Questions** checkbox and click **Continue**.
     2. The page lists the security questions you enrolled your account with. Provide answers to these questions.
     3. Click **Verify and Continue**.

   - Mobile Verification

     1. On the Multifactor Authentication window, select the **Mobile Verification** checkbox and click **Continue**.
     2. Enter the last four digits of your mobile number and click **Send Code**.
     3. In the displayed box, enter the 5-digit access code sent to your mobile phone.
     4. Click **Verify and Continue**.

     If you haven't received a code, click **Send Again** and then enter the received code in the given box.

   - Email Verification

     1. On the Multifactor Authentication window, select the **Email** checkbox and click **Continue**.
     2. Complete your email address and click **Send Code**.
     3. In the displayed box, enter the 5-digit access code sent to the provided email address.
     4. Click **Verify and Continue**.

     If you haven't received a code, click **Send Again** and then enter the received code in the given box.

   - Authenticator

     1. On the Multifactor Authentication window, select the **Authenticator** checkbox and click **Continue**.
     2. Launch the authenticator app on your smartphone.
     3. The app displays a 6-digit code. Enter that code in the **Security Code** box on the Authenticator page.

        The app generates a new code every 30 seconds.

     4. Click **Verify and Continue**.

   - Link Account

     1. On the Multifactor Authentication window, select the **Link Account** checkbox and click **Continue**.
     2. On the Link Account tab, select a link account you want to use for resetting the password of your account.

        This tab lists the link accounts that have the Allow Authentication option enabled.

     3. Enter the username and password of the selected linked account in the respective boxes.
     4. Click **Next**.

   - YubiKey

     Insert the YubiKey device in the USB slot of your computer.

     1. On the Multifactor Authentication window, select the **YubiKey** checkbox and click **Continue**.
     2. Click your YubiKey device name. The portal directs you to tap the device.

        When you tap, you are authenticated.

   - **Windows Hello**

     1. On the Multifactor Authentication window, click the **Windows Hello** checkbox and click **Continue**.
     2. Click **Authenticate and Continue**.

        Authenticate with the provided biometric information or with the PIN given in Windows Hello sign-in options.

7. Click **Unlock Account**. A message appears that the account has been unlocked successfully.

You can now sign in to the Directory Manager portal with your account and perform the required function.

## Unlock an account after wrong password attempts: unenrolled users

When you enter the wrong password on the Directory Manager Authenticate window the specified number of times, your account gets locked. You can't sign in to the Password Center user portal unless you unlock your identity store account. To unlock your account:

1. On the Welcome to Directory Manager page of the portal, click the **Unlock my account** card.
2. Select the identity store where your account exists from the identity store dropdown list.
3. Enter your identity store account name in the user name box.
4. Click **Unlock Account**.

   The portal directs you to a page that lists the Second Way Authentication type options as the administrator has configured them for your role.

5. To authenticate through the authentication types defined for your role, click the relevant option in the following list:

   - Security Question

     1. On the Second Way Authentication window, select the **Security Question** checkbox and click **Continue**.
     2. Provide an answer to the question the administrator has set for you.
     3. Click **Verify and Continue**.

   - Mobile Verification

     1. On the Second Way Authentication window, select the **Mobile Verification** checkbox and click **Continue**.
     2. Enter the last four digits of your mobile number.
     3. Click **Send Code**.
     4. Enter the 5-digit access code sent to your mobile phone.
     5. Click **Verify and Continue**.

        If you haven't received a code, click **Send Again** and then enter the received code in the given box.

   - Email Verification

     1. On the Second Way Authentication window, select the **Email Verification** checkbox and click **Continue**.
     2. Complete your email address and click **Send Code**.
     3. In the displayed box, enter the 5-digit access code sent to the provided email address.
     4. Click **Verify and Continue**.

        If you haven't received a code, click **Send Again** and then enter the received code in the given box.

6. The portal asks you to enroll your account according to the multifactor authentication policy defined for your role.

   On successful enrollment, the portal redirects you to the Unlock My Account page. Your account is listed on this page with its checkbox selected.

7. Click **Unlock Account**.

   A message appears that the account has been unlocked successfully.

8. Sign in to the portal with your account and perform the required function.

## Unlock an account after a wrong response to authentication types: enrolled and unenrolled users

While authenticating on the portal, if enrolled or unenrolled users provide a wrong answer the specified number of times, their account gets locked and the following message is displayed:

![Message stating that the account is locked after failed authentication attempts](/images/directorymanager/11.2/portal/user/manage/accountlockout.webp)

You can resolve this type of lockout in one of two ways:

- While signing in to the portal, provide the correct password for your account.

**OR**

- Wait for the specified duration, after which the account unlocks automatically.

:::note
Helpdesk can't unlock accounts that get locked out because of a wrong response to the authentication types.
:::
