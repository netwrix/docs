---
title: "Reset Passwords"
description: "Reset Passwords"
sidebar_position: 10
---

# Reset Passwords

Admin Center provides a variety of options to helpdesk users for resetting passwords and then
communicating them to users.

:::note
You can reset passwords of unenrolled users if (a) the **Reset Any Password** permission has
been granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted mode.
:::


Helpdesk users may have to authenticate end users before resetting their passwords. See the
[Helpdesk Policy ](/docs/directorymanager/11.1/admincenter/helpdesk/overview.md#helpdesk-policy) topic.

## Reset Passwords in Unrestricted Mode

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see the[Search Users](/docs/directorymanager/11.1/admincenter/helpdesk/operation/search.md) topic.
3. Click the ellipsis button for the user and select **Reset Password**. For enrolled users, the
   **Reset Password** dialog box has two pages: **Authenticate** and **Reset**. Under the
   unrestricted mode, you can skip the former and move to the **Reset** page. For unenrolled users,
   only the **Reset** page is available.  
   Use the **History** button to view user history, i.e., the actions performed on the user and by
   the user. This history is specific to helpdesk functions, as listed in the
   [History in Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic.
4. The **Reset** page displays the user name, the identity store where this user resides, the last
   time the user changed his or her password, and the lock status of the account. In case the user
   has linked his or her accounts that exist in different identity stores, this page displays all
   linked accounts that require a password reset.  
   Select an account to reset its password.
5. Depending on the password reset method enforced for your role, you can reset the password and
   communicate the new password to the user, or you can generate a secure link and send it to the
   user for resetting the password.

    - The **New Password** tab is displayed if you are authorized to generate a new password and
      send it to the user.
    - The **Secure Link** tab is displayed if you are authorized to send a secure link to the user.
    - Both tabs are displayed if you are authorized to choose any password reset method.

6. On the **New Password** tab:

    - Enter a password of your choice in the **Password** box or click **Generate Password** to
      generate a random password.
    - Select the user's mobile number and/or email address in the **Select Mobile** and **Select
      Email** boxes to send the new password to the user by SMS or email or both.

7. On the **Secure Link** tab:

    - Select the user's mobile number and/or email address in the **Select Mobile** and **Select
      Email** boxes to send the secure link to the user by SMS or email or both. The user must click
      this link to reset his or her password.

8. Click **Reset Password**.

## Reset Passwords in Restricted Mode

In the restricted mode, you will not be able to reset passwords for unenrolled users. Further, you
could be restricted to:

- Reset passwords of enrolled users residing in a specific OU.
- Authenticate enrolled users through the multifactor authentication policy applicable to the user
  before resetting their passwords. The Security Questions authentication type may be mandatory.

See the [Helpdesk Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/helpdesk.md) topic.

**To reset a password in restricted mode:**

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see the[Search Users](/docs/directorymanager/11.1/admincenter/helpdesk/operation/search.md) topic.
3. Click the ellipsis button for the user and select **Reset Password**. The **Reset Password**
   dialog box has two pages: **Authenticate** and **Reset**.  
   Use the **History** button to view user history, i.e., the actions performed on the user and by
   the user. This history is specific to helpdesk functions, as listed in the
   [History in Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic.
4. The **Authenticate** page displays the authentication type(s) the user's account is enrolled
   with. You could be restricted to authenticate the user according to the authentication policy
   that applies to the user.  
   Click the plus sign for an authentication type to expand it.

    - **Security Question**

        1. Get the answers to the questions from the user and enter them in the answer boxes.
        2. Click **Verify** for each answer to verify it.

    - **Mobile**

        1. The mobile number with which the user’s account is enrolled is displayed in the box.
           Click **Send Code** to send an access code to the user’s mobile number.
        2. Get this access code from the user and enter it in the box.
        3. Click **Verify**.

    - **Email**

        1. The email address with which the user's account is enrolled is displayed in the box.
           Click **Send Code** to send an access code to the user’s email address.
        2. Get this access code from the user and enter it in the box.
        3. Click **Verify**.

    - **Authenticator**

        1. Get a valid access code from the user, as displayed to him or her in the Authenticator
           app and enter it in the box.
        2. Click **Verify**.

    :::note
    Helpdesk cannot authenticate users with the Link Account, YubiKey, and Windows Hello
    authentication types.
    :::


5. Click **Next**.
6. On the **Reset** page, you can reset the password. Follow step 4 and onwards in the Reset
   Passwords in Unrestricted Mode topic for details.