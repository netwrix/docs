---
title: "Authenticate your Identity Store Account"
description: "Authenticate your Identity Store Account"
sidebar_position: 20
---

# Authenticate your Identity Store Account

To authenticate your identity store account in Directory Manager for multifactor authentication or
[Second Factor Authentication](/docs/directorymanager/11.1/portal/secondfactorauthentication/secondfactorauthentication.md), you
must use one or more authentication types that you enrolled your account with.

## Authenticate your identity store account

1. When you launch Admin Center or the Directory Manager portal, the **GroupID Authenticate** page
   is displayed.
2. On signing in, enrolled users are redirected to the **Authenticate** page. This page lists the
   authentication types the user enrolled his or her account with.

    - **Authenticate using Security Questions**

        1. Select the **Security Questions** check box and click **Continue**.
        2. Provide answers to the security questions you enrolled your account with.
        3. Click **Verify and Continue**.

    - Authenticate using SMS

        To authenticate using mobile, you have to enter the last 4 digits of the mobile number you
        provided during enrollment. Directory Manager sends a confirmation code to this number; you
        have to enter the code in Directory Manager for authentication.

        1. Select the **Mobile Verification** check box and click **Continue**.
        2. Type the last four digits of your mobile number and click **Send Code**.
        3. When the verification code is successfully sent to the provided mobile number, a box
           appears on the page. Type the 5 digit access code you received on your phone by SMS.
        4. Click **Verify and Continue**.

        If you do not receive the code, recheck your mobile number and click **Send Again**.

    - Authenticate using Email

        To authenticate using Email, you have to complete the email address you provided during
        enrollment. Directory Manager then sends a confirmation code to this email address; you have
        to enter the code in Directory Manager for authentication.

        1. Select the **Email Verification** check box and click **Continue**.
        2. Complete your email address and click **Send Code**.
        3. When the verification code is successfully sent to the provided email address, a box
           appears on the page. Type the 5 digit access code received on your email address.
        4. Click **Verify and Continue**.

        If you do not receive the code, recheck your email address and click **Send Again**.

    - Authenticator using Authenticator

        1. Select the **Authenticator** check box and click **Continue**.
        2. Launch the Google Authenticator or Microsoft Authenticator app on your smartphone. The
           app generates a verification code and displays it on your phone’s screen.
        3. Enter the code in the **Security code** box.
        4. Click **Verify and Continue**.

        Authenticator apps generate a new code every 30 seconds, with each code expiring after 30
        seconds.

    - Authenticate using YubiKey

        1. Insert the YubiKey device in the USB slot of your computer.
        2. Select the **YubiKey** check box and click **Continue**.
        3. On the next page, click your YubiKey device name.  
           Directory Manager directs you to tap on the physical device.
        4. On tapping, you are authenticated in Directory Manager.

    - Authenticate using Windows Hello

        1. Select the **Windows Hello** check box and click **Continue**.
        2. On the next page, click **Authenticate and Continue**.
        3. Provide the biometric information you enrolled your account with, or with the PIN given
           in the Windows Hello sign-in options.
