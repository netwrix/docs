---
title: "Configure Second Way Authentication in Directory Manager"
description: "Let unenrolled users unlock accounts and reset passwords with security questions, mobile, or email by linking each type to a directory attribute."
keywords:
  - second way authentication
  - SWA
  - unenrolled users
  - password reset
  - account unlock
  - identity store
sidebar_position: 150
---

# Configure Second Way Authentication in Directory Manager

Second way authentication (SWA) lets unenrolled users access the following functions in the Directory Manager portal:

- Account unlock
- Password reset

SWA allows only one-time access to these functions. To use them again, users must enroll their identity store accounts in Directory Manager.

SWA can authenticate unenrolled users through:

- Security questions
- Mobile
- Email

Configuring these types for second way authentication differs from configuring the same types for multifactor and second factor authentication. For second way authentication, you must link an authentication type to a schema attribute. When a user resets an account password or unlocks an account in the Directory Manager portal, Directory Manager matches the value the user provides for an authentication type to the value of the linked attribute in the directory. If the values match, authentication succeeds, and the user can perform the action in the portal.

For example, link the Email type with the mail attribute. When an unenrolled user tries to reset the account password, the user must provide the verification code sent to their email address. After the user provides the correct code, they can proceed with the operation.

Second way authentication is disabled by default for an identity store. To let users use it, enable one or more authentication types.

## Enable second way authentication via security questions

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Second Way Authentication**.
4. On the **Second Way Authentication** page, use the toggle button for **Enable Second Way Authentication via Security Questions** to enable it.
5. Click **Add Security Question**.
6. On the **Add New Security Question** dialog box, enter your question in the **Question** box.
7. In the **Attribute** dropdown list, select a schema attribute to map to this question.
8. Click **OK**.

   For successful authentication, the answer a user provides for the security question must match the value of the linked attribute.

   **To edit or remove a security question:**

   - In the **Enable Second Way Authentication via Security Questions** area, click **Remove** for a question to remove it.
   - To remove all questions, click **Remove All**.
   - To change the question text or link it to a different schema attribute, click **Edit** for it.

9. Click **Save** on the **Second Way Authentication** page.

## Enable second way authentication via mobile

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Second Way Authentication**.
4. On the **Second Way Authentication** page, use the toggle button for **Enable Second Way Authentication via Mobile** to enable it.

   :::note
   If an SMS gateway account isn't linked with the identity store, **Configure Now** is displayed in place of the toggle button. Click it to go to the **SMS Authentication** page, where you can link an SMS gateway account with the identity store. See the [Link an SMS Gateway Account to an Identity Store](smsauthentication.md#link-an-sms-gateway-account-to-an-identity-store) topic.
   :::

5. In the **Mobile Attribute** dropdown list, select an attribute that stores mobile numbers in the directory.

   For authentication via mobile, Directory Manager sends a verification code to the user's mobile number. The user must enter the code in Directory Manager for authentication.

6. Click **Save**.

## Enable second way authentication via email

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Second Way Authentication**.
4. On the **Second Way Authentication** page, use the toggle button for **Enable Second Way Authentication via Email** to enable it.

   :::note
   If an SMTP server isn't defined for the identity store, **Configure Now** is displayed in place of the toggle button. Click it to go to the **Notifications** page for configuring an SMTP server. See the [Configure an SMTP Server in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/smtpserver.md) topic.
   :::

5. In the **Email Attribute** dropdown list, select an attribute that stores email addresses in the directory.

   For authentication via email, Directory Manager sends a verification code to the user's email address. The user must enter the code in Directory Manager for authentication.

6. Click **Save**.

## Enforce users to authenticate using x number of SWA types

You can require users to authenticate with one, two, or all three SWA types.

When the enforced number of authentication types is less than the number of enabled types, users can choose the types they want to use. For example, you enable all three SWA types and require users to authenticate with two.

**To enforce SWA types:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Second Way Authentication**.
4. On the **Second Way Authentication** page, enter a number in the **Authentication Factor (chosen by the end user)** box. This number must be equal to or less than the number of enabled SWA authentication types. Users must use this number of types for second way authentication.
5. Click **Save**.
