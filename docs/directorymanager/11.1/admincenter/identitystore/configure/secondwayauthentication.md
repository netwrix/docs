---
title: "Second Way Authentication - SWA"
description: "Second Way Authentication - SWA"
sidebar_position: 150
---

# Second Way Authentication - SWA

You can configure second way Authentication (SWA) to allow unenrolled users to access the following
functions in the Directory Manager portal:

- Account unlock
- Password reset

SWA allows only one-time access to these functions. Users must enroll their identity store accounts
in Directory Manager to use the stated functions again.

SWA can authenticate unenrolled users through:

- Security questions
- Mobile
- Email

Configuring these types for second way authentication is different from configuring the same
authentication types for multifactor and second factor authentication. For second way
authentication, you have to link an authentication type to a schema attribute. When resetting
account passwords or unlocking accounts using the Directory Manager portal, the value provided by
the user for an authentication type is matched to the value of the linked attribute in the
directory. If it matches, authentication is successful, and the user can perform the required action
in the portal.

For example, link the _Email_ type with the _mail_ attribute. When an unenrolled user tries to reset
the account password, he or she must provide the verification code sent to his or her email address.
On providing the right code, he or she can proceed with the operation.

Second way authentication is disabled by default for an identity store. To facilitate users to avail
it, you must enable one or more authentication types.

## Enable Second Way Authentication Via Security Questions

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Second Way
   Authentication**.
4. On the **Second Way Authentication** page, use the toggle button for **Enable Second Way
   Authentication via Security Questions** to enable it.
5. Click **Add Security Question**.
6. On the **Add New Security Question** dialog box, type your question in the **Question** box.
7. In the **Attribute** drop-down list, select a schema attribute to map to this question.
8. Click **OK**.  
   For successful authentication, the answer a user provides for the security question must match
   the value of the linked attribute.

    **To edit or remove a security question:**

    - In the **Enable Second Way Authentication via Security Questions** area, click **Remove** for
      a question to remove it.
    - To remove all questions, click **Remove All**.
    - To change the question text or link it to a different schema attribute, click **Edit** for it.

9. Click **Save** on the **Second Way Authentication** page.

## Enable Second Way Authentication via Mobile

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations under Settings** in the left pane. Then click **Second Way
   Authentication**.
4. On the **Second Way Authentication** page, use the toggle button for **Enable Second Way
   Authentication via Mobile** to enable it.

    :::note
    If an SMS gateway account is not linked with the identity store, **Configure Now** is
    displayed in place of the toggle button. Click it to go to the **SMS Authentication** page,
    where you can link an SMS gateway account with the identity store. See the
    [Link an SMS Gateway Account to an Identity Store](smsauthentication.md#link-an-sms-gateway-account-to-an-identity-store)
    topic.
    :::


5. In the **Mobile Attribute** drop-down list, select an attribute that stores mobile numbers in the
   directory.  
   For authentication via mobile, a verification code is sent to the user’s mobile number. The user
   has to enter the code in Directory Manager for authentication.
6. Click **Save**.

## Enable Second Way Authentication via Email

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations under Settings** in the left pane. Then click **Second Way
   Authentication**.
4. On the **Second Way Authentication** page, use the toggle button for **Enable Second Way
   Authentication via Email** to enable it.

    :::note
    If an SMTP server is not defined for the identity store, **Configure Now** is displayed in
    place of the toggle button. Click it to go to the **Notifications** page for configuring an SMTP
    server. See the [Configure an SMTP Server](/docs/directorymanager/11.1/admincenter/identitystore/configure/smtpserver.md) topic.
    :::


5. In the **Email Attribute** drop-down list, select an attribute that stores email addresses in the
   directory.  
   For authentication via email, a verification code is sent to the user’s email address. The user
   has to enter the code in Directory Manager for authentication.
6. Click **Save**.

## Enforce Users to Authenticate Using x Number of SWA Types

You can enforce users to authenticate with one, two, or all three SWA types.

When the enforced number of authentication types is less than the enabled types, (such as when you
have enabled all three SWA types and enforce users to authenticate with two), users can choose the
type(s) they want to use for authentication.

**To enforce SWA types:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Second Way
   Authentication**.
4. On the **Second Way Authentication** page, enter a number in the **Authentication Factor (chosen
   by the end user)** box. This number must be equal or less than the enabled SWA authentication
   types. Users must use these x number of types for second way authentication.
5. Click **Save**.