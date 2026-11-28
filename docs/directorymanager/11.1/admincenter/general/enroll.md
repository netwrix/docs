---
title: "Enroll Your Account in Directory Manager"
description: "Enroll your identity store account for multifactor and second factor authentication with security questions, SMS, email, an authenticator app, or a device."
keywords:
  - enroll identity store account
  - enrollment authentication types
  - security questions enrollment
  - WebAuthn
  - TLS certificate
sidebar_position: 10
---

# Enroll Your Account in Directory Manager

When the administrator enables multifactor authentication and second factor authentication for an identity store, users must enroll their identity store accounts in Directory Manager. Without enrolling, they can't sign in.

To enroll, register your identity store account in Directory Manager with one or more authentication types. Enrolling for multifactor authentication also covers second factor authentication, and vice versa. For the supported authentication types, see the [Directory Manager Authentication Policies](/docs/directorymanager/11.1/admincenter/authpolicy/authpolicy.md) topic.

- For second factor authentication, enroll your account with any one authentication type.
- For multifactor authentication, you might have to enroll with more than one authentication type. This depends on what the administrator configured for your security role. See the [Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.1/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication) topic.

Account enrollment is a one-time process. Each time you must pass multifactor or second factor authentication, you authenticate your identity store account.

## Enroll your identity store account

1. Sign in to Admin Center or the Directory Manager portal. The **GroupID Authenticate** page appears.
2. After you sign in, unenrolled users go to the **Your Enrollments** page. Its tabs represent the authentication types the administrator enabled for enrollment.

   You can also open the **Your Enrollments** page from Admin Center and the portal. See the [Enroll your Account](/docs/directorymanager/11.1/admincenter/general/accessapplications.md#enroll-your-account) topic for more information.

3. Select an authentication type to enroll your account with, and follow the steps in the matching section.

### Enroll with security questions

To enroll with the Security Questions authentication type, select a question and provide an answer for it. The administrator configures the number of questions you must answer for your role.

1. Click the **Security Questions** tab.
2. From a **Question X** list, select a security question. X represents the question number. You can also enter a question in the box to create your own.
3. Enter your answer in the answer box.

   If the answer meets the requirements, such as length-related checks, a tick mark appears for it.

4. Repeat steps 2 and 3 to select another security question and provide an answer.
5. Click **Enroll Account**.

A confirmation message appears when the enrollment succeeds.

### Enroll with SMS

To enroll with Mobile, provide your mobile number. Directory Manager sends a verification code to this number by SMS. Enter the code in Directory Manager to enroll.

1. Click the **Mobile** tab.
2. Select your country and enter your mobile number in the box.
3. Click **Send Code**.
4. When Directory Manager sends the code to your mobile number, a box appears. Enter the code in it.
5. Click **Enroll Account**.

If you don't receive the code, recheck your mobile number and click **Send code again**.

### Enroll with email

To enroll with Email, provide your email address. Directory Manager sends a verification code to this address. Enter the code in Directory Manager to enroll.

1. Click the **Email** tab.
2. Enter your email address in the box and click **Send Verification Code**.
3. When Directory Manager sends the code to your email address, a box appears. Enter the code in it.
4. Click **Enroll Account**.

If you don't receive the code, recheck your email address and click **Send code again**.

### Enroll with Authenticator

Before you enroll with Authenticator, install an authenticator app, such as Google Authenticator or Microsoft Authenticator, on your phone.

1. Click the **Authenticator** tab.
2. Scan the QR code with the authenticator app on your phone. The app generates a verification code and displays it on your phone's screen.
3. Enter this code in the box on the **Authenticator** tab and click **Enroll Account**.

A confirmation message appears when the enrollment succeeds.

The authenticator app generates a new code every 30 seconds, and each code expires after 30 seconds.

### Enroll with YubiKey

1. Insert the YubiKey device in a USB slot of your computer.
2. Click the **YubiKey** tab.
3. Enter a name for your YubiKey device in the box and click **Enroll Account**.
4. When prompted, tap the physical device. Your account is enrolled when you tap it.

### Enroll with Windows Hello

Before you enroll with the Windows Hello authentication type, register on the device using the Windows Hello sign-in options.

Directory Manager allows enrollment on one Windows Hello device only.

1. Click the **Windows Hello** tab.
2. Enter a name for your authentication device in the box and click **Start registration**. You are prompted to provide your biometric information using the configured biometric device.

:::note
YubiKey and Windows Hello have issues with enrollment in browsers. To resolve this issue, configure a TLS certificate on your machine. YubiKey and Windows Hello work only with the Firefox browser if there's no TLS certificate, because only Firefox allows WebAuthn without a TLS certificate.
:::
