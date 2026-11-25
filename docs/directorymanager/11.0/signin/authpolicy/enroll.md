---
title: "Enroll Your Account in Directory Manager"
description: "Enroll your identity store account for multifactor and second factor authentication with security questions, SMS, email, an authenticator app, or a device."
keywords:
  - enroll identity store account
  - enrollment authentication types
  - security questions enrollment
  - mobile SMS enrollment
  - YubiKey enrollment
  - Windows Hello enrollment
sidebar_position: 30
---

# Enroll Your Account in Directory Manager

When the administrator has enabled multifactor authentication and second factor authentication for
an identity store, users must enroll their identity store accounts in Directory Manager. Without enrolling,
they can't sign in to Directory Manager.

To enroll, a user must register their identity store account in Directory Manager using one or more
authentication types. When a user enrolls for multifactor authentication, it also counts for
second factor authentication, and vice versa. See the
[Directory Manager Authentication Policies](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
topic for a list of supported authentication types.

Account enrollment is a one-time process. Enrolled users must authenticate their identity store
accounts every time they must pass multifactor or second factor authentication.

- For second factor authentication, a user must enroll their account with any one
  authentication type.
- For multifactor authentication, a user might have to enroll with more than one authentication type,
  depending on what the administrator has configured for a security role. See
  the [Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
  topic.

What do you want to do?

- [Enroll using Security Questions](#enroll-using-security-questions)
- [Enroll using Mobile](#enroll-using-mobile)
- [Enroll using Email](#enroll-using-email)
- [Enroll using Authenticator](#enroll-using-authenticator)
- [Enroll using YubiKey](#enroll-using-yubikey)
- [Enroll using Windows Hello](#enroll-using-windows-hello)

## Enroll using Security Questions

To enroll your identity store account with the Security Questions authentication type, select a
question and then provide an answer for it. The number of questions you must answer is configured
by the administrator for your role. See the
[Define Security Question Settings for a Security Role](/docs/directorymanager/11.0/signin/securityrole/policy/password.md#define-security-question-settings-for-a-security-role)
topic.

**To enroll with security questions:**

1. When you launch Admin Center, the Directory Manager portal, or the GroupID Mobile app, the
   **GroupID Authenticate** page is displayed.
2. When you sign in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the Directory Manager portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Security Question** tab.
4. From a **Question X** list, select a security question of your choice (X represents the question
   number).  
   You can also enter a question in the box to create a new question of your choice.
5. Enter your answer in the answer box.
6. Repeat steps 4 and 5 to select another security question and provide an answer.
7. Click **Enroll Account**.  
   A confirmation message is displayed on successful enrollment.

## Enroll using Mobile

To enroll your identity store account using Mobile, you must provide your mobile number. Directory Manager
sends a verification code to this number by SMS and you must enter it in Directory Manager to enroll
successfully.

To draft the SMS message text, see the
[Link an SMS Gateway Account to an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/smsauthentication.md#link-an-sms-gateway-account-to-an-identity-store)
topic.

**To enroll using mobile:**

1. When you launch Admin Center, the Directory Manager portal, or the GroupID Mobile app, the
   **GroupID Authenticate** page is displayed.
2. When you sign in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the Directory Manager portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Mobile** tab.
4. Select your country and then enter your mobile number in the box.
5. Click **Send Code**.
6. When the verification code is successfully sent to the provided mobile number, a box appears on
   the page. Enter the received code in it.
7. Click **Enroll Account**.

RECOMMENDED: If you don't receive the code, recheck your mobile number and click **Send code
again**.

## Enroll using Email

To enroll your identity store account using Email, you must provide your email address. Directory Manager
sends a verification code to this email address and you must enter it in Directory Manager to enroll
successfully.

To draft a subject line and body for the email, see the
[Modify the Email Template](/docs/directorymanager/11.0/signin/authpolicy/setupauth/email.md#modify-the-email-template)
topic.

**To enroll using email:**

1. When you launch Admin Center, the Directory Manager portal, or the GroupID Mobile app, the
   **GroupID Authenticate** page is displayed.
2. When you sign in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the Directory Manager portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Email** tab.
4. Enter your email address in the box and click **Send verification code**.
5. When the verification code is successfully sent to the provided email address, a box appears on
   the page. Enter the received code in it.
6. Click **Enroll Account**.

RECOMMENDED: If you don't receive the code, recheck your email address and click **Send code
again**.

## Enroll using Authenticator

Before you enroll with Authenticator, ensure you have installed an authenticator app, such as
Google Authenticator or Microsoft Authenticator, on your phone.

**To enroll with Authenticator:**

1. When you launch Admin Center, the Directory Manager portal, or the GroupID Mobile app, the
   **GroupID Authenticate** page is displayed.
2. When you sign in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the Directory Manager portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Authenticator** tab.
4. Scan the QR code with the authenticator app installed on your smartphone.  
   The app generates a verification code and displays it on your phone's screen.
5. Enter this code in the box on the **Authenticator** tab and click **Enroll Account**.  
   A confirmation message is displayed on successful enrollment.

## Enroll using YubiKey

1. When you launch Admin Center, the Directory Manager portal, or the GroupID Mobile app, the
   **GroupID Authenticate** page is displayed.
2. When you sign in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the Directory Manager portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Insert the YubiKey device in the USB slot of your computer.
4. Click the **YubiKey** tab.
5. Enter a name for your YubiKey device in the box.
6. Click **Enroll Account**.
7. You are directed to tap on the physical device. When you tap the device, your account is enrolled.

## Enroll using Windows Hello

Before enrolling your account with the Windows Hello authentication type, you must be registered on
the device using the Windows Hello sign-in options.

Directory Manager allows enrollment on one Windows Hello device only.

**To enroll using Windows Hello:**

1. When you launch Admin Center, the Directory Manager portal, or the GroupID Mobile app, the
   **GroupID Authenticate** page is displayed.
2. When you sign in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the Directory Manager portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Windows Hello** tab.
4. Enter a name for your authentication device in the box and click **Start Registration**. You are
   prompted to provide your biometric information using the configured biometric device.

**See Also**

- [Directory Manager Authentication Policies](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
- [Enable Authentication Types for an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
- [Authentication Policy for Security Roles in Directory Manager](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md)
- [Authenticate Your Account in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/authenticate.md)
