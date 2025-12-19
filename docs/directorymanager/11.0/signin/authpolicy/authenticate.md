---
title: "Authenticate with Authentication Types"
description: "Authenticate with Authentication Types"
sidebar_position: 40
---

# Authenticate with Authentication Types

To authenticate your identity store account in GroupID for multifactor authentication or second
factor authentication, you must use one or more authentication types that you enrolled your account
with.

What do you want to do?

- [Authenticate using Security Questions](#authenticate-using-security-questions)
- [Authenticate using Mobile](#authenticate-using-mobile)
- [Authenticate using Email](#authenticate-using-email)
- [Authenticate using Authenticator](#authenticate-using-authenticator)
- [Authenticate using YubiKey](#authenticate-using-yubikey)
- [Authenticate using Windows Hello](#authenticate-using-windows-hello)

## Authenticate using Security Questions

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, enrolled users are redirected to the **Authenticate** page. This page lists the
   authentication types the user enrolled his or her account with.
3. Select the **Security Questions** check box and click **Continue**.
4. The next page lists the security questions you enrolled your account with. Provide answers to
   these questions.
5. Click **Verify and Continue**.

## Authenticate using Mobile

To authenticate using mobile, you have to enter the last 4 digits of the mobile number you provided
during enrollment. GroupID sends a confirmation code to this number; you have to enter the code in
GroupID for authentication.

**To authenticate using mobile:**

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, enrolled users are redirected to the **Authenticate** page. This page lists the
   authentication types the user enrolled his or her account with.
3. Select the **Mobile Verification** check box and click **Continue**.
4. On the next page, type the last four digits of your mobile number and click **Send Code**.
5. When the verification code is successfully sent to the provided mobile number, a box appears on
   the page. Enter the received code in it.
6. Click **Verify and Continue**.

RECOMMENDED: If you do not receive the code, recheck your mobile number and click **Send Again**.

## Authenticate using Email

To authenticate using Email, you have to complete the email address you provided during enrollment.
GroupID then sends a confirmation code to this email address; you have to enter the code in GroupID
for authentication.

**To authenticate using email:**

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, enrolled users are redirected to the **Authenticate** page. This page lists the
   authentication types the user enrolled his or her account with.
3. Select the **Email Verification** check box and click **Continue**.
4. On the next page, complete your email address and click **Send Code**.
5. When the verification code is successfully sent to the provided email address, a box appears on
   the page. Enter the received code in it.
6. Click **Verify and Continue**.

RECOMMENDED: If you do not receive the code, recheck your email address and click **Send Again**.

## Authenticate using Authenticator

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, enrolled users are redirected to the **Authenticate** page. This page lists the
   authentication types the user enrolled his or her account with.
3. Select the **Authenticator** check box and click **Continue**.
4. Launch the Authenticator app on your smartphone.
5. The app displays a 6-digit code. Enter it in the **Security Code** box on the **Authenticator**
   page.
6. Click **Verify and Continue**.

## Authenticate using YubiKey

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, enrolled users are redirected to the **Authenticate** page. This page lists the
   authentication types the user enrolled his or her account with.
3. Insert the YubiKey device in the USB slot of your computer.
4. Select the **YubiKey** check box and click **Continue**.
5. On the next page, click your YubiKey device name.  
   GroupID directs you to tap on the physical device.
6. On tapping, you are authenticated in GroupID.

## Authenticate using Windows Hello

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the **GroupID
   Authenticate** page is displayed.
2. On signing in, enrolled users are redirected to the **Authenticate** page. This page lists the
   authentication types the user enrolled his or her account with.
3. Select the **Windows Hello** check box and click **Continue**.
4. On the next page, click **Authenticate and Continue**.
5. Authenticate with the provided biometric information or with the PIN given in the Windows Hello
   sign-in options.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
- [Enable Authentication Types](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
- [Authentication Policy for Security Roles](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md)
- [Enroll with Authentication Types](/docs/directorymanager/11.0/signin/authpolicy/enroll.md)
