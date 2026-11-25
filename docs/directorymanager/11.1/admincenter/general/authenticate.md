---
title: "Authenticate Your Account in Directory Manager"
description: "Pass multifactor or second factor authentication in Directory Manager by using security questions, SMS, email, an authenticator app, YubiKey, or Windows Hello."
keywords:
  - authenticate identity store account
  - verification code
  - YubiKey authentication
  - Windows Hello authentication
  - authenticator app
sidebar_position: 20
---

# Authenticate Your Account in Directory Manager

To authenticate your identity store account in Directory Manager for multifactor authentication or [Second Factor Authentication in Directory Manager](/docs/directorymanager/11.1/portal/secondfactorauthentication/secondfactorauthentication.md), use one or more of the authentication types that you enrolled your account with.

## Authenticate your identity store account

1. Launch Admin Center or the Directory Manager portal. The **GroupID Authenticate** page appears.
2. Sign in. Enrolled users are redirected to the **Authenticate** page, which lists the authentication types the user enrolled their account with.

    - **Authenticate using Security Questions**

        1. Select the **Security Questions** checkbox and click **Continue**.
        2. Provide answers to the security questions you enrolled your account with.
        3. Click **Verify and Continue**.

    - **Authenticate using SMS**

        To authenticate using mobile, enter the last 4 digits of the mobile number you provided during enrollment. Directory Manager sends a confirmation code to this number. Enter the code in Directory Manager for authentication.

        1. Select the **Mobile Verification** checkbox and click **Continue**.
        2. Enter the last four digits of your mobile number and click **Send Code**.
        3. When Directory Manager sends the verification code to the provided mobile number, a box appears on the page. Enter the 5-digit access code you received on your phone by SMS.
        4. Click **Verify and Continue**.

        If you don't receive the code, recheck your mobile number and click **Send Again**.

    - **Authenticate using Email**

        To authenticate using email, complete the email address you provided during enrollment. Directory Manager then sends a confirmation code to this email address. Enter the code in Directory Manager for authentication.

        1. Select the **Email Verification** checkbox and click **Continue**.
        2. Complete your email address and click **Send Code**.
        3. When Directory Manager sends the verification code to the provided email address, a box appears on the page. Enter the 5-digit access code you received at your email address.
        4. Click **Verify and Continue**.

        If you don't receive the code, recheck your email address and click **Send Again**.

    - **Authenticate using Authenticator**

        1. Select the **Authenticator** checkbox and click **Continue**.
        2. Launch the Google Authenticator or Microsoft Authenticator app on your smartphone. The app generates a verification code and displays it on your phone's screen.
        3. Enter the code in the **Security code** box.
        4. Click **Verify and Continue**.

        Authenticator apps generate a new code every 30 seconds. Each code expires after 30 seconds.

    - **Authenticate using YubiKey**

        1. Insert the YubiKey device in the USB slot of your computer.
        2. Select the **YubiKey** checkbox and click **Continue**.
        3. On the next page, click your YubiKey device name. Directory Manager directs you to tap the physical device.
        4. Tap the device. Directory Manager then authenticates you.

    - **Authenticate using Windows Hello**

        1. Select the **Windows Hello** checkbox and click **Continue**.
        2. On the next page, click **Authenticate and Continue**.
        3. Provide the biometric information you enrolled your account with, or use the PIN given in the Windows Hello sign-in options.
