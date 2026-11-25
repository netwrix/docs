---
title: "Unlock User Accounts in Directory Manager Helpdesk"
description: "Unlock locked user accounts in an identity store from Admin Center Helpdesk, in restricted or unrestricted mode."
keywords:
  - Directory Manager
  - unlock account
  - Helpdesk
  - account lockout
  - restricted mode
  - unrestricted mode
sidebar_position: 20
---

# Unlock User Accounts in Directory Manager Helpdesk

Administrators can enforce an account lockout policy for a domain that locks a user account after a
certain number of failed sign-in attempts. This secures a machine from unauthorized access. However,
legitimate users can also get locked out, typically because of a typo or because they couldn't recall
their password correctly.

In this situation, helpdesk users can unlock user accounts in an identity store.

Helpdesk might have to authenticate users before unlocking their accounts. See the
[Helpdesk Policy](/docs/directorymanager/11.1/admincenter/helpdesk/overview.md#helpdesk-policy) topic.

:::note
You can unlock the account of unenrolled users if (a) the **Unlock Any Account** permission
is granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted
mode.
:::


## Unlock User Accounts in Unrestricted Mode

Step 1 – In Admin Center, click **Helpdesk** in the left pane.

Step 2 – The Helpdesk page opens to the Helpdesk Operations tab. Locate your required user. To
search for a user, see the [Search Users in Directory Manager Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/operation/search.md) topic.

Step 3 – Click the ellipsis button for the user and select **Unlock Account**. For enrolled users,
the Unlock Account dialog box has two pages: Authenticate and Unlock. Under the unrestricted mode,
you can skip the former and move to the **Unlock** page. For unenrolled users, only the Unlock page
is available.  
Use the **History** button to view user history: the actions performed on the user and by
the user. This history is specific to helpdesk functions, as listed in the
[View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic.

Step 4 – The Unlock page displays the user name, the identity store where this user resides, the
last time the user changed their password, and the lock status of the account. In case the user
has linked their accounts that exist in different identity stores, this page displays all
linked accounts that are locked.  
To unlock an account, select the checkbox for it and click **Unlock**.

## Unlock User Accounts in Restricted Mode

Step 1 – In Admin Center, click **Helpdesk** in the left pane.

Step 2 – The Helpdesk page opens to the Helpdesk Operations tab. Locate your required user. To
search for a user, see the [Search Users in Directory Manager Helpdesk](/docs/directorymanager/11.1/admincenter/helpdesk/operation/search.md) topic.

Step 3 – Click the ellipsis button for the user and select **Unlock Account**. The Unlock Account
dialog box has two pages: Authenticate and Unlock.  
Use the **History** button to view user history: the actions performed on the user and by
the user. This history is specific to helpdesk functions, as listed in the
[View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic.

Step 4 – The Authenticate page displays the authentication types the user's account is enrolled
with. To authenticate the user, follow Step 4 in the
[Reset Passwords in Restricted Mode](resetpassword.md#reset-passwords-in-restricted-mode) topic.

Step 5 – After authenticating the user, click **Next**.

Step 6 – The Unlock page displays the user name, the identity store where this user resides, the
last time the user changed their password, and the lock status of the account. In case the user
has linked their accounts that exist in different identity stores, this page displays all
linked accounts that are locked.  
To unlock an account, select the checkbox for it and click **Unlock**.
