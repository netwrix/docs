---
title: "Enable Authentication Types"
description: "Enable Authentication Types"
sidebar_position: 20
---

# Enable Authentication Types

You must enable authentication types for an identity store to allow users to use them for second
factor authentication and multifactor authentication.

Moreover, you must also enable enrollment for an identity store, so users can enroll their accounts.

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
   unenrolled users to enroll their identity store accounts in Directory Manager.  
   Do not select this check box if you do not want to use multifactor authentication or second
   factor authentication in Directory Manager.
5. Click **Save**.

:::note
For second factor authentication and multifactor authentication to work in Directory Manager,
the **Enrollment Enabled** check box must be selected. Else, users will not be able to enroll, which
will prevent them from using Directory Manager.
:::
