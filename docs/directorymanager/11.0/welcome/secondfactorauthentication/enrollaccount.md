---
title: "Enroll Your Identity Store Account in Directory Manager"
description: "Enroll your identity store account in the Directory Manager portal using security questions, SMS, email, an authenticator app, YubiKey, or Windows Hello."
keywords:
  - enroll identity store account
  - second factor authentication enrollment
  - security questions enrollment
  - authenticator app enrollment
  - YubiKey enrollment
sidebar_position: 10
---

# Enroll Your Identity Store Account in Directory Manager

With second factor authentication enabled for a user role in an identity store, unenrolled users
must enroll their identity store accounts before they can connect the portal to that identity store
and sign in.

Enrolling an identity store account means that a user must register this account in Directory
Manager using an authentication type.

After users enroll their accounts, they must authenticate with the same authentication types
whenever they sign in to the Directory Manager portal using that account.

What do you want to do?

- Enroll your identity store account

## Enroll your identity store account

1. On the sign-in page of the portal, select an identity store, enter your user name and password
   to connect the portal to it, and click **Sign In**.

    OR

    Scan the QR code if the QR code is enabled in Directory Manager Admin Center.

2. Click the profile icon in the top right corner and select **Enroll your account**.
3. The authentication types available for enrollment are listed as tabs on the **Your Enrollments**
   page. Select an authentication type to enroll your account with.

    - Enroll your account using Security Questions

        1. On the **Your Enrollments** page, click the **Security Questions** tab.
        2. From a **Question X** list, select a security question of your choice (X represents the
           question number).
        3. In the **Answer** box, enter an answer for the selected question.  
           If the answer meets the requirements, such as length-related checks, a tick mark is
           displayed for it.
        4. Repeat steps 2 and 3 to select another security question and provide an answer.
        5. Click **Enroll Account**.

    - Enroll your account using SMS

        1. On the **Your Enrollments** page, click the **Mobile** tab.
        2. Select your country and then enter your mobile number in the box.
        3. Click **Send Code**.
        4. When the code is successfully sent to your mobile number, a box is displayed;
           enter the received code in it.
        5. Click **Enroll Account**.

        If you don't receive the code, recheck your mobile number and click **Send code again**.

    - Enroll your account using Email

        1. On the **Your Enrollments** page, click the **Email** tab.
        2. Enter your email address in the box and click **Send Verification Code**.
        3. When the code is successfully sent to your email address, a box is displayed;
           enter the received code in it.
        4. Click **Enroll Account**.

        If you don't receive the code, recheck your email address and click **Send code again**.

    - Enroll your account using Authenticator

        1. On the **Your Enrollments** page, click the **Authenticator** tab.
        2. Scan the QR code with the authenticator app installed on your phone.

            The app generates a verification code and displays it on your phone's screen.

        3. Enter this code in the box and click **Enroll Account**.

        The authenticator app generates a new code every 30 seconds, with each code expiring after
        30 seconds.

    - Enroll your account using YubiKey

        1. Insert the YubiKey device in the USB slot of your computer.
        2. On the **Your Enrollments** page, click the **YubiKey** tab.
        3. Enter a name for your YubiKey device and click **Enroll Account**.
        4. The portal directs you to tap the device. This enrolls your account on the portal.

    - Enroll your account using Windows Hello

        1. On the **Your Enrollments** page, click the **Windows Hello** tab.
        2. Enter a name for your authentication device and click **Start Registration**.

**See Also**

- [Second Factor Authentication in Directory Manager](/docs/directorymanager/11.0/welcome/secondfactorauthentication/secondfactorauthentication.md)
- [Authenticate Your Identity Store Account in Directory Manager](/docs/directorymanager/11.0/welcome/secondfactorauthentication/authenticateaccount.md)
