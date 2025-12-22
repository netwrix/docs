---
title: "Reset Passwords"
description: "Reset Passwords"
sidebar_position: 30
---

# Reset Passwords

The Directory Manager portal enables enrolled users in an identity store reset their account
passwords securely. They can reset their passwords if they have forgotten or lost their existing
passwords. Unenrolled users can reset their passwords if the administrator has enabled the Second
Way Authentication option for their role.

The Directory Manager portal provides an authentication mechanism, whereby users must authenticate
themselves with Multifactor Authentication type(s) they enrolled their accounts with.

If the administrator has enabled multifactor authentication for the identity store, users must
authenticate their accounts using the authentication type(s) they enrolled their account with. After
successful authentication, users can reset account password in accordance with the password policies
the Directory Manager administrator has defined for your role in the identity store.

## Reset identity store account password (enrolled users)

Follow the steps to reset identity store account password for enrolled users.

Step 1 – On the Welcome to Directory Manager page of the portal, click the **Forgot Password** card.

Step 2 – Select the identity store where your account exists from the identity store drop down list.

Step 3 – Type your identity store account name in the user name box.

Step 4 – Provide the displayed captcha code in the **Captcha** box.

Step 5 – Click **Reset Password**. You will be directed to a page that shows the authentication
type(s) you enrolled this account with.

Step 6 – Authenticate your account using the required type(s).

- Security Questions

    1. On the Multifactor Authentication window, select the **Security Questions** check box and
       click **Continue**.
    2. The page lists the security questions you enrolled your account with. Provide answers to
       these questions.
    3. Click **Verify and Continue**.

- Mobile Verification

    1. On the Multifactor Authentication window, select the **Mobile Verification** check box and
       click **Continue**.
    2. Type the last four digits of your mobile number and click **Send Code**.
    3. In the displayed box, type the 5 digit access code sent on your mobile phone.
    4. Click **Verify and Continue**.

    If you have not received a code, click **Send Again** and then enter the received code in the
    given box.

- Email Verification

    1. On the Multifactor Authentication window, select the **Email**check box and click
       **Continue**.
    2. Complete your email address and click **Send Code**.
    3. In the displayed box, type the 5 digits access code sent to the provided email address.
    4. Click **Verify and Continue**.

    If you have not received a code, click **Send Again** and then enter the received code in the
    given box.

- Authenticator

    1. On the **Multifactor Authentication** window, select the **Authenticator**check box and click
       **Continue**.
    2. Launch the authenticator app on your smartphone.
    3. The app displays a 6-digit code. Enter that code in the **Security Code** box on the
       Authenticator page.

        The app generates a new code every 30 seconds.

    4. Click **Verify and Continue**.

- Link Account

    1. On the Multifactor Authentication window, select the **Link Account** check box and click
       **Continue**.
    2. On the **Link Account** tab, select a link account you want to use for resetting the password
       of your account.

        This tab lists the link account(s) that have the **Allow Authentication** option enabled.

    3. Type the username and password of the selected linked account in the respective boxes.
    4. Click **Next**.

- YubiKey

    Insert the YubiKey device in the USB slot of your computer.

    1. On the Multifactor Authentication window, select the **YubiKey**check box and click
       **Continue**.
    2. Click your YubiKey device name. The portal directs you to tap on the device.  
       On tapping, you are authenticated.

- Windows Hello

    1. On the Multifactor Authentication window, click the **Windows Hello** check box and click
       **Continue**.
    2. Click **Authenticate and Continue**.

        Authenticate with the provided biometric information or with the PIN given in Windows Hello
        sign-in options.

Step 7 – On getting authenticated, the Reset My Password page is displayed.

Step 8 – All your linked accounts, if any, are listed in the Select the account to reset their
passwords section. Select the check boxes for the account(s) to reset their password(s).

Type your new password in the **New password** box. On typing the new password, the **Password
Acceptance** box appears. The new password must conform to the rules of the applied password policy
for the identity store.

To meet the password complexity requirements, the password must:

1. be at least as per the characters length defined in the password policy of the provider.
2. contain uppercase lowercase characters, digit or special character:

    - English uppercase characters (A through Z)
    - English lowercase characters (a through z)
    - Base 10 digits (0 through 9)
    - Special characters (for example, !, $, #, %)

Step 9 – Type the new password for the selected account(s) in the Confirm new password box.

Step 10 – Click **Reset Password**.

If you have reused an old password and it does not meet the **Enforce password history** policy of
the provider, a message inform you that the password must be different from the old one.

Step 11 – On reset, the Reset Password Results page displays the message ,"Password has been reset
successfully.". Click **OK**.

## Reset identity store account password (unenrolled users)

Follow the steps to reset identity store account password for unenrolled users.

Step 1 – On the Welcome to Directory Manager page, click the **Forgot Password** card.

Step 2 – Select the identity store from the Identity Store list your account resides in.

Step 3 – Type your user name in the Username box.

Step 4 – Provide the displayed captcha code in the **Captcha** box.

Step 5 – Click **Reset Password**. You will be directed to a page that shows the second way
authentication type(s) the Directory Manageradministrator has enabled for your role.

Step 6 – Authenticate your account using any second way authentication option from below.

- Security Question

    1. Select the **Security Questions** check box and click **Continue**.
    2. Provide answer to the question the administrator has set for you.
    3. Click **Verify and Continue**.

- Mobile Verification

    1. Select **Mobile Verification** check box and click **Continue**.
    2. Type the last four digits of your mobile number in the box and click **Send Code**.
    3. In the displayed box, type the 5 digit access code sent on your mobile phone.
    4. Click **Verify and Continue**.

    If you have not received a code, click **Send Again** and then enter the received code in the
    given box.

- Email Verification

    1. Select **Email Verification** check box and click **Continue**.
    2. Complete your email address and click **Send Code**.
    3. Type the 5 digit access code sent to the provided email address in the displayed box.
    4. Click **Verify and Continue**.

    If you have not received a code, click **Send Again** and then enter the received code in the
    given box.

Step 7 – Follow the steps 6 - 11 in the Reset identity store account password (enrolled users)
section to reset your password.
