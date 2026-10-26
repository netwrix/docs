---
title: "Manage, rotate, and verify credentials"
description: "Learn how to bring accounts under management and how the Rotate, Verify, and Keep Enabled options work."
sidebar_position: 20
---

# Manage, rotate, and verify credentials

Use the **Credentials** page to bring an account under Privilege Secure management, rotate its password, and verify that the stored password still works. For the columns and filters, see [Credentials](/docs/privilegesecure/26.07/admin/credentials/overview.md).

## Toolbar buttons and row states

The toolbar buttons stay disabled until you select a row. The selected row decides which buttons are enabled.

| Selected row | Enabled buttons |
|---|---|
| **Not Managed**, managed type **Standard** or **Internal** | **Manage** |
| **Managed**, managed type **Standard**, method **Automatic** | **Unmanage**, **Rotate**, **Verify**, **View History** |
| **Managed**, managed type **Standard**, method **Manual** | **Unmanage**, **Verify**, **View History** |
| **Managed**, managed type **Internal**, method **Automatic** or **Manual** | **Unmanage**, **Rotate**, **Verify** |
| **Not Managed**, managed type **Service** | **Service Account Details** |
| **Managed**, managed type **Service** | **Unmanage**, **Service Account Details**, **Verify**, **View History** |

A button also needs the role permission for its action. **View History** isn't available for Internal accounts.

**View History** works on one managed row at a time. See [View passwords and password history](/docs/privilegesecure/26.07/admin/credentials/password-history.md).

## Prerequisites

- The account appears on the **Credentials** page.
- You're an Administrator, or you hold a custom role with the **Credentials** target and the permission for the action: **[C] Manage**, **[C] Unmanage**, **[C] Schedule Rotation** (Rotate), or **[C] Verify**. See [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md).

## Manage an account

1. In the left navigation, select **Credentials**.
2. Select the row of a **Not Managed** account. For example, select the `<local-admin>` account on `<server-name>`.
3. Select **Manage**.
4. In the **Manage Account** window, wait for Privilege Secure to search for a matching user. When it lists the account under **Found matching user:** or **Credentials:**, select **Automatic** or **Manual**. Select **Cancel** to close the window without changes. If no match exists, the window shows **No matching user found.**

The row's **Method** changes to **Automatic** or **Manual**. Both choices are available for Standard and Internal accounts.

For an Internal account, a dialog searches for a matching user. See [Manage internal service accounts](/docs/privilegesecure/26.07/admin/credentials/internal-service-accounts.md).

![The Manage Account dialog for a Standard account, with the Automatic, Manual, and Cancel buttons.](/images/privilegesecure/26.07/admin/manage-account-dialog.webp)

To stop managing an account, select its row, and then select **Unmanage**.

### Passwords of manually managed accounts

For a manually managed account, the **Set Password for Credential** window records the account's password in Privilege Secure. It doesn't change the password on the resource, so change it there first. Administrators and users who hold the **[C] Manage** permission can set the password.

When you manage an account as **Manual**, the **Set Password for Credential** window opens for it. To set the password again later, select the **Set Password** icon (a wrench) beside the account name. It appears in the **Account** column on the **Credentials** page and in the **User Name** column on the **Users** tab of a resource. It appears only for Standard accounts with method **Manual**. The toolbar has no Set Password button.

## Rotate an account

1. Select the row of a **Managed** account with method **Automatic**, or an **Internal** account with method **Manual**.
2. Select **Rotate**.

Privilege Secure schedules a rotation job that runs right away. The console shows a message such as **1 credential rotation scheduled.** If it schedules only some of the selected accounts, the message reads, for example, **1/2 rotations scheduled.** When the job changes the password on the resource, Privilege Secure stores the new value, and **Password Changed**, **Age**, and **Next Change** update. The list refreshes every 5 seconds, so the row updates after the job finishes. How long the job takes depends on the resource.

For example, rotate `<local-admin>` on `<server-name>` after a person who knew the password leaves the team.

Automatic accounts also rotate on the schedule of their platform or [credential policy override](/docs/privilegesecure/26.07/admin/credentials/policy-overrides.md).

:::note
A rotation doesn't run while a session on the account is active. This applies to manual and scheduled rotation. The console doesn't block the **Rotate** button. The rotation job stops, marks the rotation as failed, and logs that it aborted because the account has active sessions. Wait until the session ends, then select **Rotate** again.
:::

To rotate a service account that services or scheduled tasks use, see [Rotate service accounts and their dependencies](/docs/privilegesecure/26.07/admin/credentials/service-account-dependencies.md). Internal accounts rotate on the primary domain controller (PDC). See [Rotation methods](/docs/privilegesecure/26.07/admin/credentials/rotation-methods.md).

## Verify an account

1. Select the row of a managed account.
2. Select **Verify**.

Privilege Secure checks that the password on the resource matches the stored password. The **Status** and **Last Checked** columns update. For the status values, see [Credentials](/docs/privilegesecure/26.07/admin/credentials/overview.md).

For example, verify `<local-admin>` after someone reports a failed sign-in. **Status** shows **Verified** when the passwords match.

## Control the account state after a session

Privilege Secure changes the state of a managed account around a session. In a resource-based session, the account is enabled when the session starts and disabled when it ends. In a credential-release session, the account is disabled again after the release by default.

To keep the account enabled after a credential release, set **Keep Enabled** on the account:

1. Open the resource, domain, or database that holds the account.
2. Select the **Users** tab.
3. Select the row of a managed account.
4. Select **Password Reset Options**.
5. Select the options you need:
   - **Rotate on Session Start**
   - **Rotate on Session End**
   - **Keep Enabled (Credential Release only)**
6. Select **Okay**.

The **Users** tab then shows the settings in the **Rotate Start | End** and **Keep Enabled** columns. For example, an account with both rotate options selected and **Keep Enabled** cleared shows **Yes | Yes** and **No**.

A newly managed account has **Rotate on Session Start** and **Rotate on Session End** selected and **Keep Enabled** cleared.

{/* TODO screenshot: the Password Reset Options dialog */}

:::note
These options belong to the account on the resource. You can't set them for each requesting user.
:::

When the last credential-release session that uses the account ends, Privilege Secure disables the account. It doesn't disable a platform's built-in administrator account or a vaulted account. With **Keep Enabled** selected, it leaves the account enabled instead. **Keep Enabled** is cleared by default, so the account is disabled after the release. Privilege Secure reads the setting only for credential-release sessions, so it has no effect on resource-based sessions.

For how policy types treat the account, see [Key concepts](/docs/privilegesecure/26.07/getting-started/key-concepts.md) and [Create a credential-based access policy](/docs/privilegesecure/26.07/configuration/access-policies/credential-based-policy.md).
