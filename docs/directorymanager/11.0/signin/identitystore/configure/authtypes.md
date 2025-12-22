---
title: "Enable Authentication Types"
description: "Enable Authentication Types"
sidebar_position: 20
---

# Enable Authentication Types

You must enable authentication types for an identity store to allow users to use them for second
factor authentication and multifactor authentication.

Moreover, you must also enable enrollment for an identity store, so users can enroll their accounts.

What do you want to do?

- Enable Authentication Types
- Enable Enrollment
- Enable QR Code

## Enable Authentication Types

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Authentication
   Types**.
4. On the **Authentication Types** page, use the toggle button for an authentication type to enable
   or disable it.  
   Enabled authentications types are available to identity store users for enrollment and
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
3. Click **Configurations under Settings** in the left pane. Then click **Authentication Types**.
4. On the **Authentication Types** page, select the **Enrollment Enabled** check box to force
   unenrolled users to enroll their identity store accounts in GroupID.  
   Do not select this check box if you do not want to use multifactor authentication or second
   factor authentication in GroupID.
5. Click **Save**.

NOTE: For second factor authentication and multifactor authentication to work in GroupID, the
**Enrollment Enabled** check box must be selected. Else, users will not be able to enroll, which
will prevent them from using GroupID.

## Enable QR Code

The administrator can enable the QR code option for an identity store to provide users with a
passwordless method for signing into GroupID.

Users can simply scan the QR code with the GroupID mobile app on their smartphones to connect Admin
Center or the GroupID portal to an identity store and sign in, without the need to provide a
username and password.

To enable QR code for an identity store:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under Settings in the left pane. Then click **Authentication Types**.
4. On the **Authentication Types** page, set the **QR Code Authentication** toggle button to
   _Enabled_ to enable QR code for the identity store.  
   Users can use QR code for passwordless authentication while connecting Admin Center or the
   GroupID portal to this identity store.
5. Click **Save**.

### Prerequisite for Using QR Code

To sign in via QR code, users must first install the GroupID mobile app on their mobile device.

**To install the GroupID app:**

1. Do the following with respect to your device:

    - On an iPhone, launch App Store and search for Imanami GroupID.
    - On an Android phone, launch Google Play and search for Imanami GroupID.

2. Tap **Install** to install the app.

### Sign in with QR Code

To sign in using the QR code, see the
[Access Admin Center](/docs/directorymanager/11.0/signin/signin.md) topic.

**See Also**

- [Authentication Policy](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
- [Configure Second Factor Authentication](/docs/directorymanager/11.0/signin/authpolicy/sfa.md)
- [Configure Multifactor Authentication](/docs/directorymanager/11.0/signin/authpolicy/mfa.md)
- [Set Up Authentication Types](/docs/directorymanager/11.0/signin/authpolicy/setupauth/overview.md)
