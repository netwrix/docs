---
title: "Create a credential-based access policy"
description: "Create a credential-based access policy so users can check out credentials and files that are stored in a secret vault."
sidebar_position: 30
---

# Create a credential-based access policy

A credential-based access policy lets users check out managed credentials, and credentials and files that are stored in a secret vault. For an overview of policies, see [Access policies](overview.md).

## Prerequisites

- A secret vault with the credentials or files that users need. See [Secret vaults](../../resources/secret-vaults.md).
- A [connection profile](connection-profiles.md). The **Connection Profile** field is required on every policy.
- The users and groups that you want to include.

## Create the policy

1. Select **Access Policy** in the left navigation.
2. Click the plus (**+**) button above the policy list.
3. Enter a **Name**. This field is required.
4. (Optional) Enter a **Description**.
5. Select **Credential Based** in the **Type** list. A new policy uses **Resource Based** by default.
6. Select a profile in the **Connection Profile** list. **Save** is blocked while the list shows `<none>`.
7. Click **Save**.

For example, to let a team check out a shared service account, enter the name `Shared service accounts`, select **Credential Based**, and select a connection profile. Then add the team's group and the credential on the tabs.

When you select **Credential Based**, the **Resources** tab is replaced by the **Credentials** and **Files** tabs. Save the policy before you add credentials or files. If you change **Type** on a saved policy, the **Confirm policy type change** dialog warns that the associated credentials or resources, and the policy's access certifications, will be removed.

The **Credentials** and **Files** tabs appear for administrators and for the Admin View Read Only role.

## Add users and groups

The **Users** tab works the same way as it does on a resource-based policy. See [Add users and groups](resource-based-policy.md#add-users-and-groups).

## View the activities

The **Activities** tab of a credential-based policy is read-only. It shows that users can access the credentials and files listed on the other tabs.

## Add credentials

The **Credentials** tab lists the credentials and credential groups that users can check out.

- **Add** opens the **Add Credentials** window, which lists credentials and credential groups that aren't on the policy yet. A credential appears only when Privilege Secure manages it and it has no service account dependencies. Credentials held in a secret vault don't appear unless the service is configured to release vault credentials.

{/* TODO verify: how a customer enables the release of vault credentials (the ReleaseVaultCredentials setting), since no shipped configuration sets it. */}
- **Remove** removes the selected items from the policy.
- **Search** filters the list.
- The type filter offers **All**, **Credential**, and **Credential Group**.
- **Refresh** reloads the table.

The table has these columns:

| Column | Description |
|---|---|
| **NAME** | The name of the account or credential group. |
| **TYPE** | An icon for the type of item. |
| **RESOURCE** | The resource that the account is on. |
| **OPERATING SYSTEM** | The operating system of the resource. |
| **ACTIVE SESSION COUNT** | The number of active sessions on the resource. |

## What users see after checkout

The connection profile on the policy controls how users view a checked-out password:

- **Allow User to Access Password** lets users view or copy the password.
- **View Password Timeout (seconds)** limits how long users can view the password on the sign-in page.

See [Connection profiles](connection-profiles.md#credential-management).

A credential can change its password when a user checks it out, when the user releases it, or both. Websites, Microsoft Entra ID tenants, and managed credentials change the password on both by default. Credentials in a secret vault don't change it on either by default.

To change this for any of these credential types, select the account on the **Users** tab of its resource (the website, Entra ID tenant, managed resource, or secret vault) and click **Password Reset Options**. Select **Rotate on Session Start** to change the password on checkout and **Rotate on Session End** to change it on release.

The account state after a session, including the **Keep Enabled** option, is described in [Manage, rotate, and verify credentials](/docs/privilegesecure/26.07/admin/credentials/manage-credentials.md). Resource-based sessions and credential-release sessions treat the account differently, so read that section before you choose a policy type.

## Release files with File Release

A File Release task lets users download an encrypted file from a secret vault. First add the file to a secret vault. See [Add an encrypted file to a vault](../../resources/secret-vaults.md#add-an-encrypted-file-to-a-vault).

- The maximum file size is 10 MB by default, with an allowed range of 1 MB to 20 MB. Change it in **Max Filesize (mb)**.
- **File Malware Scanning** scans encrypted files that you upload. It is on by default.

Both settings are under **System Settings** > **Encrypted Files**. See [System settings](../system-settings/system-settings.md#encrypted-files).

The **Files** tab lists the files that belong to the policy. The tab has **Add**, **Remove**, **Search**, and **Refresh**, as on the **Credentials** tab. The table has these columns:

| Column | Description |
|---|---|
| **FILE** | The name of the file. |
| **ACTION** | Download the file or its checksum. |
| **RESOURCE** | The vault that holds the file. |
| **FILE TYPE** | The type of file, such as text, DOCX, or PDF. |
| **SIZE** | The size of the file. |
| **COMMENT** | Notes or metadata entered when the file is added or edited. |
| **CREATED** | The date the file was added to the vault. |

Files attach to the policy through the **Files** tab:

- **Add** opens the **Add Encrypted Files** window, which lists the vault files that aren't on the policy yet.
- **Remove** detaches the selected files from the policy. It doesn't delete them from the vault.

File Release is a built-in activity. The console hides it from the **Activity Type** list and from the **Activities** page, so you don't create or edit it. A user whose credential-based policy has files sees a card on the dashboard that shows the number of files, such as "2 Encrypted Files". The files become available to download when the user starts the session. The console writes the download to the event log with the user name, the file name, and the ID of the secret vault. A locked session or a locked account can't download the file.

## Related topics

- [Access policies](overview.md)
- [Secret vaults](../../resources/secret-vaults.md)
- [Connection profiles](connection-profiles.md)

{/* TODO screenshot: the tabs of a credential-based policy, including Users, Activities, Credentials, and Files. */}
