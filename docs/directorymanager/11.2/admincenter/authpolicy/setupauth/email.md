---
title: "Set Up Email Authentication in Directory Manager"
description: "Enable email authentication for an identity store, customize the confirmation code email, and enforce it for a security role."
keywords:
  - email authentication
  - AccessCodeEmail template
  - Notification Editor
  - confirmation code
  - email authentication type
sidebar_position: 20
---

# Set Up Email Authentication in Directory Manager

Users can enroll and authenticate their identity store accounts with email. An email sent to a user's email address contains a confirmation code. The user enters this code in Directory Manager to enroll and authenticate their accounts.

Directory Manager provides a default notification template for enrollment and authentication by email in various languages. You can change the subject line and the body text in the template for any of these languages.

:::note
Before you configure Email authentication, ensure that an SMTP server is configured for the identity store. See [Configure an SMTP Server in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/smtpserver.md).
:::

## Enable Email authentication

Enable the email authentication type for an identity store before users can use it for second factor authentication and multifactor authentication. See [Enable Authentication Types for an Identity Store](/docs/directorymanager/11.2/admincenter/identitystore/configure/authtypes.md).

## Modify the email template

You can modify the subject line and body text of the email sent to users. The email contains a confirmation code that users enter in Directory Manager to enroll and authenticate their accounts.

**To modify the subject line and body of the email:**

1. In Admin Center, click **Notification Editor** at the bottom of the left navigation pane. The **Notification Editor** opens.
2. To customize templates for a language other than American English, select that language. Notification templates appear in American English by default.

   1. Click **Filter**.
   2. On the **Filters** dialog box, use the **Locality** dropdown list to select the ISO code for your language.
   3. Click **Apply**.

3. Search for _AccessCodeEmail_ and click **Edit** in the **Actions** column to open it.

   ![AccessCodeEmail notification template open in the Notification Editor in Source Code (HTML) mode](/images/directorymanager/11.2/admincenter/setupauth/accesscode.webp)

4. View the notification content in either of two modes:

   - _Source Code (HTML)_ - The default mode, as shown in the preceding figure. Make changes to the notification template in this mode.
   - _Interactive_ - The user-friendly, front-end view. Use it to view the email notification as it is sent to users.

5. Modify and format the text of the email, except the [USER] and [CODE] placeholders. Directory Manager replaces [USER] with the name of the user and inserts a randomly generated verification code into the [CODE] placeholder. The user must enter this code in Directory Manager to enroll and authenticate.
6. To change the subject line of the email notification, click the **Title** tile.
7. After you make the changes, click **Save**.
8. Click **Go Back** to return to the **Notification Editor**.

## Enforce Email authentication for a role

To enforce an authentication type, see [Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.2/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication).

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.
