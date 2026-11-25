---
title: "Enable Authentication Types for an Identity Store"
description: "Enable authentication types and enrollment for a Directory Manager identity store so users can enroll and use second-factor or multifactor authentication."
keywords:
  - Directory Manager
  - authentication types
  - enable enrollment
  - multifactor authentication
  - second factor authentication
  - identity store settings
sidebar_position: 20
---

# Enable Authentication Types for an Identity Store

You must enable authentication types for an identity store so users can use them for second
factor authentication and multifactor authentication.

You must also enable enrollment for an identity store, so users can enroll their accounts.

What do you want to do?

- [Enable Authentication Types](#enable-authentication-types)
- [Enable Enrollment](#enable-enrollment)
- [Enable QR Code](#enable-qr-code)

## Enable Authentication Types

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Authentication
   Types**.
4. On the **Authentication Types** page, use the toggle button for an authentication type to enable
   or disable it.  
   Enabled authentication types are available to identity store users for enrollment and
   authentication. You must configure them before they can be used. Supported authentication types
   are:

    - Security Questions
    - SMS
    - Email
    - Authenticator
    - Linked Account
    - YubiKey
    - Windows Hello

5. Click **Save**.

## Enable Enrollment

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Authentication Types**.
4. On the **Authentication Types** page, select the **Enrollment Enabled** checkbox to force
   unenrolled users to enroll their identity store accounts in Directory Manager.  
   Don't select this checkbox if you don't want to use multifactor authentication or second
   factor authentication in Directory Manager.
5. Click **Save**.

:::note
For second factor authentication and multifactor authentication to work in Directory Manager,
the **Enrollment Enabled** checkbox must be selected. Otherwise, users can't enroll, which
prevents them from using Directory Manager.
:::

## Enable QR Code

You can enable the QR code option for an identity store to give users a passwordless method for
signing in to Directory Manager.

Users can scan the QR code with the Directory Manager mobile app on their smartphones to connect
Admin Center or the Directory Manager portal to an identity store and sign in, without providing a
username and password.

To enable QR code for an identity store:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Authentication Types**.
4. On the **Authentication Types** page, set the **QR Code Authentication** toggle button to
   _Enabled_ to enable QR code for the identity store.  
   Users can use QR code for passwordless authentication while connecting Admin Center or the
   Directory Manager portal to this identity store.
5. Click **Save**.

### Prerequisite for Using QR Code

To sign in with a QR code, users must first install the Directory Manager mobile app on their mobile
device.

**To install the Directory Manager app:**

1. On your device, do one of the following:

    - On an iPhone, launch the App Store and search for Imanami GroupID.
    - On an Android phone, launch Google Play and search for Imanami GroupID.

2. Tap **Install** to install the app.

### Sign in with QR Code

To sign in using the QR code, see the
[Sign In to Directory Manager Admin Center](/docs/directorymanager/11.0/signin/signin.md) topic.

**See Also**

- [Directory Manager Authentication Policies](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
- [Configure Second Factor Authentication in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/sfa.md)
- [Configure Multifactor Authentication in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/mfa.md)
- [Set Up Authentication Types in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/setupauth/overview.md)
