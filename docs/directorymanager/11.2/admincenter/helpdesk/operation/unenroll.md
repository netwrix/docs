---
title: "Unenroll a User from an Authentication Type"
description: "Remove a user account's enrollment for one authentication type in Directory Manager Helpdesk while keeping its other enrollments."
keywords:
  - Directory Manager
  - unenroll user
  - authentication type
  - Helpdesk operations
  - YubiKey
sidebar_position: 60
---

# Unenroll a User from an Authentication Type

Users enroll in an identity store with one or more authentication types. You can unenroll a user account from any authentication type it is enrolled with.

For example, a user's account is enrolled with the Security Questions, Email, and YubiKey authentication types. If you unenroll the account from YubiKey, it remains enrolled with Security Questions and Email.

## Unenroll a user for an authentication type

1. In Admin Center, click **Helpdesk** in the left pane. The **Helpdesk** page opens to the **Helpdesk Operations** tab.
2. Locate the user. To search for a user, see the [Search Users in Directory Manager Helpdesk](/docs/directorymanager/11.2/admincenter/helpdesk/operation/search.md) topic.
3. Click the ellipsis button for the user and select **Unenroll Account**. The **Unenroll Account** dialog box displays the authentication types the user account is enrolled with.
4. Select the checkboxes for the authentication types you want to unenroll the user account from.
5. Click **Unenroll**, and then click **Unenroll** in the confirmation dialog box.
