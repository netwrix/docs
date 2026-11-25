---
title: "Reset User Passwords as Helpdesk in Directory Manager"
description: "Reset passwords for enrolled and unenrolled users in restricted or unrestricted mode, and send the new password or a secure link."
keywords:
  - reset password
  - secure link
  - restricted mode
  - unrestricted mode
  - helpdesk authentication
sidebar_position: 10
---

# Reset User Passwords as Helpdesk in Directory Manager

Admin Center gives helpdesk users several options for resetting passwords and communicating them to users.

:::note
You can reset passwords of unenrolled users if (a) the **Reset Any Password** permission has been granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted mode.
:::

Helpdesk users may have to authenticate end users before resetting their passwords. See the [Helpdesk Policy](/docs/directorymanager/11.1/admincenter/helpdesk/overview.md#helpdesk-policy) topic.

## Reset passwords in unrestricted mode

1. In Admin Center, click **Helpdesk** in the left pane.

   The **Helpdesk** page opens to the **Helpdesk Operations** tab.

2. Locate your required user. To search for a user, see the [Search Users in Directory Manager Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/operation/search.md) topic.
3. Click the ellipsis button for the user and select **Reset Password**.

   For enrolled users, the **Reset Password** dialog box has two pages: **Authenticate** and **Reset**. Under the unrestricted mode, you can skip the former and move to the **Reset** page. For unenrolled users, only the **Reset** page is available.

   Use the **History** button to view user history, which lists the actions performed on the user and by the user. This history is specific to helpdesk functions, as listed in the [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic.

4. On the **Reset** page, review the user details.

   The page displays the user name, the identity store where this user resides, the last time the user changed their password, and the lock status of the account. If the user has linked their accounts that exist in different identity stores, this page displays all linked accounts that require a password reset.

   Select an account to reset its password.

5. Choose how to reset the password.

   Depending on the password reset method enforced for your role, you can reset the password and communicate the new password to the user. You can also generate a secure link and send it to the user for resetting the password.

   - The **New Password** tab is displayed if you are authorized to generate a new password and send it to the user.
   - The **Secure Link** tab is displayed if you are authorized to send a secure link to the user.
   - Both tabs are displayed if you are authorized to choose any password reset method.

6. On the **New Password** tab:

   - Enter a password of your choice in the **Password** box, or click **Generate Password** to generate a random password.
   - Select the user's mobile number, email address, or both in the **Select Mobile** and **Select Email** boxes. The new password is sent to the user by SMS, email, or both.

7. On the **Secure Link** tab:

   - Select the user's mobile number, email address, or both in the **Select Mobile** and **Select Email** boxes. The secure link is sent to the user by SMS, email, or both. The user must click the link to reset their password.

8. Click **Reset Password**.

## Reset passwords in restricted mode

In the restricted mode, you can't reset passwords for unenrolled users. Further, you could be restricted to:

- Reset passwords of enrolled users residing in a specific OU.
- Authenticate enrolled users through the multifactor authentication policy applicable to the user before resetting their passwords. The Security Questions authentication type may be mandatory.

See the [Helpdesk Policy for Security Roles in Directory Manager](/docs/directorymanager/11.1/admincenter/securityrole/policy/helpdesk.md) topic.

**To reset a password in restricted mode:**

1. In Admin Center, click **Helpdesk** in the left pane.

   The **Helpdesk** page opens to the **Helpdesk Operations** tab.

2. Locate your required user. To search for a user, see the [Search Users in Directory Manager Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/operation/search.md) topic.
3. Click the ellipsis button for the user and select **Reset Password**.

   The **Reset Password** dialog box has two pages: **Authenticate** and **Reset**.

   Use the **History** button to view user history, which lists the actions performed on the user and by the user. This history is specific to helpdesk functions, as listed in the [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic.

4. On the **Authenticate** page, authenticate the user.

   The page displays the authentication types the user's account is enrolled with. You could be restricted to authenticate the user according to the authentication policy that applies to the user.

   Click the plus sign for an authentication type to expand it.

   - **Security Question**

     1. Get the answers to the questions from the user and enter them in the answer boxes.
     2. Click **Verify** for each answer to verify it.

   - **Mobile**

     1. The mobile number with which the user's account is enrolled is displayed in the box. Click **Send Code** to send an access code to the user's mobile number.
     2. Get this access code from the user and enter it in the box.
     3. Click **Verify**.

   - **Email**

     1. The email address with which the user's account is enrolled is displayed in the box. Click **Send Code** to send an access code to the user's email address.
     2. Get this access code from the user and enter it in the box.
     3. Click **Verify**.

   - **Authenticator**

     1. Get a valid access code from the user, as displayed to them in the Authenticator app, and enter it in the box.
     2. Click **Verify**.

   :::note
   Helpdesk can't authenticate users with the Link Account, YubiKey, and Windows Hello authentication types.
   :::

5. Click **Next**.
6. On the **Reset** page, you can reset the password. Follow step 4 and onwards in the Reset Passwords in Unrestricted Mode topic for details.
