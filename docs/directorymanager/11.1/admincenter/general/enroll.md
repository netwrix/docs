---
title: "Enroll your Identity Store Account"
description: "Enroll your Identity Store Account"
sidebar_position: 10
---

# Enroll your Identity Store Account

When the administrator has enabled multifactor authentication and second factor authentication for
an identity store, users must enroll their identity store accounts in Directory Manager. Without
enrolling, they will not be able to sign into Directory Manager.

To enroll, a user must register his or her identity store account in Directory Manager using one or
more authentication types. When a user enrolls for multifactor authentication, it also suffices for
second factor authentication, and vice versa. See the
[Authentication Policy](/docs/directorymanager/11.1/admincenter/authpolicy/authpolicy.md) topic for a list of supported
authentication types.

- For second factor authentication, a user must enroll his or her account with any one
  authentication type.
- For multifactor authentication, a user may have to enroll with more than one authentication type,
  depending on what the administrator has configured for the respective user's security role. See
  the[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.1/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
  topic.

Account enrollment is a one-time process. Enrolled users must authenticate their identity store
accounts every time they have to pass multifactor or second factor authentication.

## Enroll your identity store account

Step 1 – When you access Admin Center or the Directory Manager portal to sign in, the **GroupID
Authenticate** page is displayed.

Step 2 – On signing in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on
this page represent the different authentication types the administrator has enabled for
enrollment.  
You can also launch the **Your Enrollments** page from Admin Center and the portal. See the
[Enroll your Account](/docs/directorymanager/11.1/admincenter/general/accessapplications.md#enroll-your-account) topic for additional
information.

Step 3 – Select an authentication type to enroll your account with.

- Enroll your account using Security Questions

    To enroll your identity store account with the Security Questions authentication type, select a
    question and then provide an answer for it. The number of questions you must answer are
    configured by the administrator for your role.

    1. Click the **Security Questions** tab.
    2. From a **Question X** list, select a security question of your choice (X represents the
       question number). You can also type a question in the box to create a new question of your
       choice.
    3. Type your answer in the answer box.

        If the answer meets the requirements, such as length-related checks, a tick mark is
        displayed for it.

    4. Repeat steps b and c to select another security question and provide an answer.
    5. Click **Enroll Account**. A confirmation message is displayed on successful enrollment.

- Enroll your account using SMS

    To enroll your identity store account using Mobile, you have to provide your mobile number.
    Directory Manager sends a verification code to this number via SMS and you have to enter it in
    Directory Manager to enroll successfully.

    1. Click the **Mobile** tab.
    2. Select your country and then type your mobile number in the box.
    3. Click **Send Code**.
    4. When the code is successfully sent to your provided mobile number, a box is displayed; enter
       the received code in it.
    5. Click **Enroll Account**.

    If you do not receive the code, recheck your mobile number and click **Send code again**.

- Enroll your account using Email

    To enroll your identity store account using Email, you have to provide your email address.
    Directory Manager sends a verification code to this email address and you have to enter it in
    Directory Manager to enroll successfully.

    1. Click the **Email** tab.
    2. Type your email address in the box and click **Send Verification Code**.
    3. When the code is successfully sent to your provided email address, a box is displayed. Enter
       the received code in it.
    4. Click **Enroll Account**.

    If you do not receive the code, recheck your email address and click **Send code again**.

- Enroll your account using Authenticator

    Before you enroll with Authenticator, make sure you have installed an authenticator app, such as
    Google Authenticator or Microsoft Authenticator, on your phone.

    1. Click the **Authenticator** tab.
    2. Scan the QR code with the authenticator app installed on your phone. The app generates a
       verification code and displays it on your phone’s screen.
    3. Enter this code in the box on the **Authenticator** tab and click **Enroll Account**. A
       confirmation message is displayed on successful enrollment.

    The authenticator app generates a new code every 30 seconds, with each code expiring after 30
    seconds.

- Enroll your account using YubiKey

    1. Insert the YubiKey device in the USB slot of your computer.
    2. Click the **YubiKey** tab.
    3. Enter a name for your YubiKey device in the box and click **Enroll Account**.
    4. You are directed to tap on the physical device. On tapping, your account gets enrolled.

- Enroll your account using Windows Hello

    Before enrolling your account with the Windows Hello authentication type, you must be registered
    on the device using the Windows Hello sign-in options.

    Directory Manager allows enrollment on one Windows Hello device only.

    1. Click the **Windows Hello** tab.
    2. Enter a name for your authentication device in the box and click **Start Registration**. You
       will be prompted to provide your biometric information using the configured biometric device.

:::note
YubiKey and Windows Hello have issues with enrollment in browsers. To resolve this issue,
configure a TLS certificate on your machine. Without a TLS certificate, YubiKey and Windows Hello
will only work with the Firefox browser, as only Firefox allows WebAuthn without a TLS certificate.

:::
