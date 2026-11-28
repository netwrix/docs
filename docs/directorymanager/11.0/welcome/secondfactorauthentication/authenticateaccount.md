---
title: "Authenticate Your Identity Store Account in GroupID"
description: "Authenticate your identity store account in the GroupID portal with security questions, SMS, email, an authenticator app, YubiKey, or Windows Hello."
keywords:
  - second factor authentication
  - authenticate account
  - security questions
  - authenticator app
  - YubiKey
  - Windows Hello
sidebar_position: 20
---

# Authenticate Your Identity Store Account in GroupID

With second factor authentication enabled, users must authenticate the identity store account they
use to sign in to the portal.

This means that a user must prove their identity using the authentication types they used to
enroll their identity store account.

## Authenticate your identity store account

1. On the sign-in page of the portal, select an identity store and then provide your username and
   password to connect the portal to it.
2. Click **Sign In**.
3. You are directed to the **Authenticate Account** page.

    This page displays the authentication types you enrolled this account with. You must
    authenticate using one authentication type.

    - **Authenticate using Security Questions**

        1. On the **Authenticate Account** page, select **Security Questions** and click
           **Continue**.
        2. Provide answers to the security questions you enrolled your account with.
        3. Click **Verify and Continue**.

    - **Authenticate using SMS**

        1. On the **Authenticate Account** page, select **Security Questions** and click
           **Continue**.
        2. Enter the last four digits of your mobile number and click **Send Code**.
        3. In the _access code_ box, enter the 5-digit access code sent to your mobile phone by SMS.
        4. Click **Verify and Continue**.

        If you don't receive a code, click **Send Again** and then enter the received code in the
        box.

    - **Authenticate using Email**

        1. On the **Authenticate Account** page, select **Email Verification** and click
           **Continue**.
        2. Complete your email address and click **Send Code**.
        3. In the _access code_ box, enter the 5-digit access code sent to the provided email
           address.
        4. Click **Verify and Continue**.

        If you don't receive a code, click **Send Again** and then enter the received code in the
        box.

    - **Authenticate using Authenticator**

        1. On the **Authenticate Account** page, select **Authenticator** and click **Continue**.
        2. Launch the Google Authenticator or Microsoft Authenticator app on your smartphone. The
           app generates a verification code and displays it on your phone's screen.
        3. Enter the code in the **Security code** box and click **Verify and Continue**.

        Authenticator apps generate a new code every 30 seconds, and each code expires after 30
        seconds.

    - **Authenticate using YubiKey**

        1. Insert the YubiKey device in the USB slot of your computer.
        2. On the **Authenticate Account** page, select **YubiKey Verification** and click
           **Continue**.
        3. Click your YubiKey device name.

            The portal directs you to tap the device.

        4. When you tap the device, the portal authenticates you.

    - **Authenticate using Windows Hello**

        1. On the **Authenticate Account** page, select **Windows Hello** and click **Continue**.
        2. Click **Authenticate and Continue**.
        3. Provide the biometric information you enrolled your account with.

**See Also**

- [Second Factor Authentication in GroupID](/docs/directorymanager/11.0/welcome/secondfactorauthentication/secondfactorauthentication.md)
- [Enroll Your Identity Store Account in GroupID](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
