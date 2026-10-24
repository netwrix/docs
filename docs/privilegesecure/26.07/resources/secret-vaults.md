---
title: "Secret vaults"
description: "Create a secret vault, store accounts and encrypted files in it, and let users check them out through an access policy."
sidebar_position: 100
---

# Secret vaults

A secret vault stores accounts and files that you manage by hand, and gives Netwrix Privilege Secure for Access Management (Privilege Secure) users controlled access to them. Use a vault for credentials that Privilege Secure doesn't manage on the target, such as a local account on an appliance.

{/* TODO verify: the 26.07.3 lab had no secret vault. Only the New Secret Vault form was observed. Confirm every tab, button, and column below against a vault that holds an account and a file. */}

## Prerequisites

- The account or file that you want to store.

## Create a secret vault

1. Select **Resources** in the left navigation.
1. Select **Add** and select **New Secret Vault**.
1. Enter a name in **Enter Secret Vault Name**.
1. (Optional) Enter a **Description** of the vault.
1. Select **Save**.

The **Platform** field shows **Secret Vault** and can't be changed.

For example, enter the name `Network appliance accounts` and the description `Local accounts for devices that don't accept domain accounts`.

![The New Secret Vault page with the vault name, Platform, and Description fields and the Accounts, Files, Sessions, and History tabs.](/images/privilegesecure/26.07/resources/new-secret-vault-form.webp)

## Add an account to a vault

1. Open the vault and select the **Accounts** tab.
1. Select **Add**.
1. In the **Add a Managed Account** window, enter the resource name, the username, and the secret.
1. (Optional) Enter a comment.
1. Select **Save**.

For example, enter the resource name `edge-fw01`, the username `admin`, and the account password as the secret.

Use **Edit** to change the selected account and **Delete** to remove it. A confirmation window appears before the removal. **Search** filters the table and **Refresh** reloads it.

The table has these columns: **Resource**, **Username**, and **Created**.

{/* TODO verify: the field labels in the Add a Managed Account window, and whether the Save button label matches. */}

## Add an encrypted file to a vault

1. Open the vault and select the **Files** tab.
1. Select **Add**.
1. In the **Add Encrypted File** window, drag the file onto the window, or select the window and browse for the file.
1. (Optional) Enter a comment.
1. Select **Save**.

The file limits are:

- The maximum file size is 10 MB by default. The allowed range is 1 MB to 20 MB.
- A malware scan runs on the uploaded file. The scan is on by default.

For example, upload `router-backup-key.pem` with the comment `Key for the branch router`.

Use **Edit** to change the file details and **Delete** to remove the file. In the **Action** column, select an icon to download the file or its checksum.

The table has these columns: **Action**, **File type**, **Size**, **Comment**, and **Created**.

Administrators set the maximum size and the malware scan under **System Settings** > **Encrypted Files**. See [System settings](/docs/privilegesecure/26.07/configuration/system-settings/system-settings.md).

{/* TODO verify: what message a customer sees when the scan blocks a file. */}

## Give users access to a vault

To give users access, create an access policy of type **Credential Based**. The policy lists the vault accounts and files that its users can check out. See [Create a credential-based access policy](/docs/privilegesecure/26.07/configuration/access-policies/credential-based-policy.md) and [Release files with File Release](/docs/privilegesecure/26.07/configuration/access-policies/credential-based-policy.md#release-files-with-file-release).

Update a stored secret by hand when the password changes on the device. By default, credentials in a secret vault don't change their password when a user checks them out or releases them.

{/* TODO verify: the checkout and release defaults for vault credentials on a fresh 26.07.3 install, and whether a customer can change them. */}

{/* TODO verify: the bring-your-own-vault (BYOV) workaround from the Community thread for recording SSH sessions to local-only accounts (a vault connector that points to the Secret Vault, login account set to Vault, no automatic rotation). Confirm with the product team before documenting it. */}

## Review the vault tabs

| Tab | Shows |
|---|---|
| **Accounts** | The accounts stored in the vault. |
| **Files** | The encrypted files stored in the vault. |
| **Sessions** | Earlier sessions that used the vault. Select a row and select **View Logs** to open the session log. |
| **History** | Events for the vault, with a **Status**, **Time**, **User**, **Access Policy**, **Event Message**, and **Session ID** for each. |

For session logs, see [Session logs](/docs/privilegesecure/26.07/admin/sessions/session-logs.md).

## Remove a vault

See [Remove resources](/docs/privilegesecure/26.07/resources/remove-resources.md).
