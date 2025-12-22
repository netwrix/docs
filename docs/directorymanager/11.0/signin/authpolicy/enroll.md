---
title: "Enroll with Authentication Types"
description: "Enroll with Authentication Types"
sidebar_position: 30
---

# Enroll with Authentication Types

When the administrator has enabled multifactor authentication and second factor authentication for
an identity store, users must enroll their identity store accounts in GroupID. Without enrolling,
they will not be able to sign into GroupID.

To enroll, a user must register his or her identity store account in GroupID using one or more
authentication types. When a user enrolls for multifactor authentication, it also suffices for
second factor authentication, and vice versa. See the
[Authentication Policy](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
topic for a list of supported authentication types.

Account enrollment is a one-time process. Enrolled users must authenticate their identity store
accounts every time they have to pass multifactor or second factor authentication.

- For second factor authentication, a user must enroll his or her account with any one
  authentication type.
- For multifactor authentication, a user may have to enroll with more than one authentication type,
  depending on what the administrator has configured for a security role. See
  the[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
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
question and then provide an answer for it. The number of questions you must answer are configured
by the administrator for your role. See the
[Define Security Question Settings for a Security Role](/docs/directorymanager/11.0/signin/securityrole/policy/password.md#define-security-question-settings-for-a-security-role)
topic.

**To enroll with security questions:**

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the GroupID portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Security Question** tab.
4. From a **Question X** list, select a security question of your choice (X represents the question
   number).  
   You can also type a question in the box to create a new question of your choice.
5. Type your answer in the answer box.
6. Repeat steps 4 and 5 to select another security question and provide an answer.
7. Click **Enroll Account**.  
   A confirmation message is displayed on successful enrollment.

## Enroll using Mobile

To enroll your identity store account using Mobile, you have to provide your mobile number. GroupID
sends a verification code to this number via SMS and you have to enter it in GroupID to enroll
successfully.

To draft the SMS message text, see the
[Link an SMS Gateway Account to an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/smsauthentication.md#link-an-sms-gateway-account-to-an-identity-store)
topic.

**To enroll using mobile:**

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the GroupID portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Mobile** tab.
4. Select your country and then type your mobile number in the box.
5. Click **Send Code**.
6. When the verification code is successfully sent to the provided mobile number, a box appears on
   the page. Enter the received code in it.
7. Click **Enroll Account**.

RECOMMENDED: If you do not receive the code, recheck your mobile number and click **Send code
again**.

## Enroll using Email

To enroll your identity store account using Email, you have to provide your email address. GroupID
sends a verification code to this email address and you have to enter it in GroupID to enroll
successfully.

To draft a subject line and body for the email, see the
[Modify the Email Template](/docs/directorymanager/11.0/signin/authpolicy/setupauth/email.md#modify-the-email-template)
topic.

**To enroll using email:**

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the GroupID portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Email** tab.
4. Type your email address in the box and click **Send verification code**.
5. When the verification code is successfully sent to the provided email address, a box appears on
   the page. Enter the received code in it.
6. Click **Enroll Account**.

RECOMMENDED: If you do not receive the code, recheck your email address and click **Send code
again**.

## Enroll using Authenticator

Before you enroll with Authenticator, make sure you have installed an authenticator app, such as
Google Authenticator or Microsoft Authenticator, on your phone.

**To enroll with Authenticator:**

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the GroupID portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Authenticator** tab.
4. Scan the QR code with the authenticator app installed on your smartphone.  
   The app generates a verification code and displays it on your phone’s screen.
5. Enter this code in the box on the **Authenticator** tab and click **Enroll Account**.  
   A confirmation message is displayed on successful enrollment.

## Enroll using YubiKey

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the GroupID portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Insert the YubiKey device in the USB slot of your computer.
4. Click the **YubiKey** tab.
5. Enter a name for your YubiKey device in the box.
6. Click **Enroll Account**.
7. You are directed to tap on the physical device. On tapping, your account gets enrolled.

## Enroll using Windows Hello

Before enrolling your account with the Windows Hello authentication type, you must be registered on
the device using the Windows Hello sign-in options.

GroupID allows enrollment on one Windows Hello device only.

**To enroll using Windows Hello:**

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, unenrolled users are redirected to the **Your Enrollments** page. Tabs on this
   page represent the different authentication types the administrator has enabled for enrollment.  
   You can also launch the **Your Enrollments** page from Admin Center and the GroupID portal. See
   the
   [Enroll your Account](/docs/directorymanager/11.0/signin/concepts/accessapplications.md#enroll-your-account)
   topic.
3. Click the **Windows Hello** tab.
4. Enter a name for your authentication device in the box and click **Start Registration**. You will
   be prompted to provide your biometric information using the configured biometric device.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
- [Enable Authentication Types](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
- [Authentication Policy for Security Roles](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md)
- [Authenticate with Authentication Types](/docs/directorymanager/11.0/signin/authpolicy/authenticate.md)
