---
title: "Manage, rotate, and verify credentials"
description: "Learn how to bring accounts under management and how the Rotate, Verify, and Keep Enabled options work."
sidebar_position: 20
---

# Manage, rotate, and verify credentials

Use the **Credentials** page to bring an account under Privilege Secure management, rotate its password, and verify that the stored password still works. For the columns and filters, see [Credentials](/docs/privilegesecure/26_07/admin/credentials/overview).

## Toolbar buttons and row states

The toolbar buttons stay disabled until you select a row. The selected row decides which buttons are enabled.

| Selected row | Enabled buttons |
|---|---|
| **Not Managed**, managed type **Standard** | **Manage** |
| **Managed**, method **Automatic** | **Unmanage**, **Rotate**, **Verify**, **View History** |
| **Not Managed**, managed type **Service** | **Service Account Details** |

{/* TODO verify: the enabled buttons for these rows, which the lab didn't select: Managed with method Manual, Managed with managed type Service, and Internal accounts */}

**View History** works on one managed row at a time. See [View passwords and password history](/docs/privilegesecure/26_07/admin/credentials/password-history).

## Prerequisites

- The account appears on the **Credentials** page.
- You're an Administrator, or you hold a custom role with the **Credentials** target and the permission for the action: **[C] Manage**, **[C] Unmanage**, **[C] Schedule Rotation** (Rotate), or **[C] Verify**. See [Create a custom role](/docs/privilegesecure/26_07/admin/roles/custom-roles).

## Manage an account

1. In the left navigation, click **Credentials**.
2. Select the row of a **Not Managed** account. For example, select the `<local-admin>` account on `<server-name>`.
3. Click **Manage**.
4. Complete the dialog. {/* TODO verify: the fields of the Manage dialog, including the Automatic and Manual choice for Standard accounts. The dialog wasn't opened in the lab. */}

The row's **Method** changes to **Automatic** or **Manual**. {/* TODO verify: that a Standard account can be managed as Manual from this dialog */}

For an Internal account, a dialog searches for a matching user. See [Manage internal service accounts](/docs/privilegesecure/26_07/admin/credentials/internal-service-accounts).

{/* TODO screenshot: the Manage dialog for a Standard account */}

To stop managing an account, select its row and click **Unmanage**.

### Passwords of manually managed accounts

For a manually managed account, the **Set Password** dialog records the account's password in Privilege Secure. It doesn't change the password on the resource, so change it there first. Administrators and users who hold the **[C] Manage** permission can set the password.

{/* TODO verify: where Set Password opens in 26.07 (the toolbar and the host Users tab have no Set Password button; 26.03 showed an icon beside the account name on Manual rows) */}

## Rotate an account

1. Select the row of a **Managed** account with method **Automatic**.
2. Click **Rotate**.

Privilege Secure changes the password on the resource and stores the new value. **Password Changed**, **Age**, and **Next Change** update. {/* TODO verify: the result message the console shows after Rotate, and the delay before the row updates */}

For example, rotate `<local-admin>` on `<server-name>` after a person who knew the password leaves the team.

Automatic accounts also rotate on the schedule of their platform or [credential policy override](/docs/privilegesecure/26_07/admin/credentials/policy-overrides).

:::note
You can't rotate an account manually while a session on the account is active. Wait until the session ends, then click **Rotate** again.
:::

{/* TODO verify: whether scheduled rotation is also blocked during an active session, and the message the console shows when manual rotation is blocked */}

To rotate a service account that services or scheduled tasks use, see [Rotate service accounts and their dependencies](/docs/privilegesecure/26_07/admin/credentials/service-account-dependencies). Internal accounts rotate on the primary domain controller (PDC). See [Rotation methods](/docs/privilegesecure/26_07/admin/credentials/rotation-methods).

## Verify an account

1. Select the row of a managed account.
2. Click **Verify**.

Privilege Secure checks that the password on the resource matches the stored password. The **Status** and **Last Checked** columns update. For the status values, see [Credentials](/docs/privilegesecure/26_07/admin/credentials/overview).

For example, verify `<local-admin>` after someone reports a failed sign-in. **Status** shows **Verified** when the passwords match.

## Control the account state after a session

Privilege Secure changes the state of a managed account around a session. In a resource-based session, the account is enabled when the session starts and disabled when it ends. In a credential-release session, the account is disabled again after the release by default.

To keep the account enabled after a credential release, set **Keep Enabled** on the account:

1. Open the resource, domain, or database that holds the account.
2. Select the **Users** tab.
3. Select the row of a managed account.
4. Click **Password Reset Options**.
5. Select the options you need:
   - **Rotate on Session Start**
   - **Rotate on Session End**
   - **Keep Enabled (Credential Release only)**
6. Click **Okay**.

The **Users** tab then shows the settings in the **Rotate Start | End** and **Keep Enabled** columns. For example, an account with both rotate options selected and **Keep Enabled** cleared shows **Yes | Yes** and **No**.

{/* TODO verify: the default Password Reset Options for a newly managed account */}

{/* TODO screenshot: the Password Reset Options dialog */}

:::note
These options belong to the account on the resource. You can't set them for each requesting user.
:::

{/* TODO verify: how Keep Enabled maps to the account state after release (disable, enable, or return to the previous state) and whether Keep Enabled has any effect on resource-based sessions */}

For how policy types treat the account, see [Key concepts](/docs/privilegesecure/26_07/getting-started/key-concepts) and [Create a credential-based access policy](/docs/privilegesecure/26_07/configuration/access-policies/credential-based-policy).
