---
title: "Unlock your accounts"
description: "Unlock your accounts"
sidebar_position: 40
---

# Unlock your accounts

With the GroupID portal, you can unlock your identity store account yourself, without having to
contact the administrator or wait.

Your account can get locked due to:

1. **Wrong password attempts while logging on to the portal**
    - the consecutive number of times a user can provide the wrong password (Account lockout
      threshold), after which the user's identity store account gets locked.
    - the duration to lock the user account (_Account lockout duration_).
2. **Invalid response to authentication type(s)**

    The GroupID Administrator can specify Password Policy for the identity store, which includes:

    - the consecutive number of times a role member can provide a wrong value for any authentication
      type (Failed Authentication Attempts Threshold).
    - the duration to lock the user account (_Account Lockout duration_).

With authentication disabled, you cannot authenticate yourself on the GroupID portal; hence, you
cannot unlock your identity store accounts or reset your passwords until the account is unlocked.

What do you want to do?

- Unlock Identity Store User Accounts after Wrong Password Attempts (Enrolled Users)
- Unlock Identity Store User Accounts after Wrong Password Attempts (Unenrolled Users)
- Unlock Identity Store User Accounts after Providing Wrong Response to Authentication Types
  (Enrolled and Unenrolled Users)

### Unlock identity store user accounts (_after wrong password attempts_) - enrolled users

While logging on GroupID portal you provide wrong password on the **GroupID Authenticate** window
for the specified number of times, the following message appears:

![GroupID Authenticate](/images/directorymanager/11.0/portal/user/manage/locked.webp)

Now you cannot login to portal unless you unlock your identity store account. Follow the
instructions given below to unlock your account:

1. On the **Welcome to GroupID** page of GroupID portal, click **Account Locked?** card.
2. Select the identity store where your account exists from the identity store drop down list.
3. Type your identity store account name in the **Username** box.
4. Enter captcha in the **Captcha** box.
5. Click **Unlock Account**. You will be directed to a page where the authentication type(s) you
   enrolled your account with are listed.

    To get authenticated through the required authentication type(s), click the relevant option
    below:

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

        1. On the **Multifactor Authentication** window, select the **Email** check box and click
           **Continue**.
        2. Complete your email address and click **Send Code**.
        3. In the displayed box, type the 5 digits access code sent to the provided email address.
        4. Click **Verify and Continue**.

        If you have not received a code, click **Send Again** and then enter the received code in
        the given box.

    - Authenticator

        1. On the **Multifactor Authentication** window, select the **Authenticator** check box and
           click **Continue**.
        2. Launch the authenticator app on your smart phone.
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

        1. On the **Multifactor Authentication** window, select the **YubiKey** check box and click
           **Continue**.
        2. Click your YubiKey device name. The portal directs you to tap on the device.

            On tapping, you are authenticated.

    - **Windows Hello**

        1. On the **Multifactor Authentication** window, click the **Windows Hello** check box and
           click **Continue**.
        2. Click **Authenticate and Continue**.

            Authenticate with the provided biometric information or with the PIN given in Windows
            Hello sign-in options.

6. Click **Unlock Account**.
7. A message that the account has been unlocked successfully is displayed.

You can now log in to GroupID portal with your account and perform the required function.

### Unlock identity store user accounts (_after wrong password attempts_) - unenrolled users

On entering the wrong password on the **GroupID Authenticate** window for the specified number of
times, your account gets locked. You cannot login to Password Center user portal unless you unlock
your identity store account. Follow the instructions given below to unlock your account:

1. On the **Welcome to GroupID** page of GroupID portal, click **Unlock my account** card.
2. Select the identity store where your account exists from the identity store drop down list.
3. Type your identity store account name in the user name box.
4. Click **Unlock Account**.

    You will be directed to a page where the **Second Way Authentication** type options are listed
    as the administrator has configured for your role.

    To get authenticated through the defined authentication type(s) for your role, click the
    relevant option below:

    - Security Question

        1. On the Second Way Authentication window, select the **Security Question** check box and
           click **Continue**.
        2. Provide answer to the question the administrator has set for you.
        3. Click **Verify and Continue**

    - Mobile Verification

        1. On the Second Way Authentication window, select the **Mobile Verification** check box and
           click **Continue**.
        2. Type in the last four digit of your mobile number.
        3. Click **Send Code**.
        4. Type the 5 digits access code sent on your mobile phone.
        5. Click **Verify and Continue**.

            If you have not received a code, click **Send Again** and then enter the received code
            in the given box.

    - Email Verification

        1. On the Second Way Authentication window, select the **Email Verification** check box and
           click **Continue**.
        2. Complete your email address and click **Send Code**.
        3. In the displayed box, type the 5 digits access code sent to the provided email address.
        4. Click **Verify and Continue**.

            If you have not received a code, click **Send Again** and then enter the received code
            in the given box.

5. You will be asked to enroll your account as per the **Multifactor Authentication** policy defined
   for your role.

    On successful enrollment, you are redirected to the **Unlock My Account** page. Your account is
    listed on this page with the check box selected for it.

6. Click **Unlock Account**.

    A message that the account has been unlocked successfully is displayed.

7. You can now log in to portal with your account and perform the required function.

### Unlock identity store user accounts (_after providing wrong response to authentication types_) - enrolled and unenrolled users

While authenticating on the portal, if enrolled or unenrolled users provide a wrong answer for the
specified number of times, their account gets locked and the following message is displayed:

![accountlockout](/images/directorymanager/11.0/portal/user/manage/accountlockout.webp)

This type of account unlock can be resolved in one of the following two ways:

- While logging on to the portal, you provide the correct password for your account.

    **OR**

- You wait for the specified duration, after which the account will be unlocked automatically.

    NOTE: Helpdesk members cannot unlock accounts that get locked out on providing a wrong response
    to the authentication type(s).

**See Also**

- [Enroll Your Identity Store Account](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
- [Reset Passwords](/docs/directorymanager/11.0/welcome/secondfactorauthentication/passwordreset.md)
- [ Change your password](/docs/directorymanager/11.0/welcome/user/manage/changepassword.md)
