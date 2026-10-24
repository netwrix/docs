---
title: "Create a credential-based access policy"
description: "Create a credential-based access policy so users can check out credentials and files that are stored in a secret vault."
sidebar_position: 30
---

# Create a credential-based access policy

A credential-based access policy lets users check out managed credentials, and credentials and files that are stored in a secret vault. For an overview of policies, see [Access policies](overview.md).

{/* TODO verify: which credential types the Add Credentials window lists */}

{/* TODO verify: the credential-based policy editor and its tab set weren't observed in the 26.07.3 lab, because no credential-based policy existed in it. Confirm every tab, column, and button on this page against a policy with Type set to Credential Based (lab task 1C). */}

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

{/* TODO verify: confirm that changing Type to Credential Based on the new-policy form replaces the Resources tab with the credential tabs. */}

## Add users and groups

The **Users** tab works the same way as it does on a resource-based policy. See [Add users and groups](resource-based-policy.md#add-users-and-groups).

## View the activities

The **Activities** tab of a credential-based policy is read-only. It shows that users can access the credentials and files listed on the other tabs.

## Add credentials

The **Credentials** tab lists the credentials and credential groups that users can check out.

- **Add** opens a window to select credentials.
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

{/* TODO verify: where an administrator sets change on checkout and change on release in the 26.07 console, and whether the defaults above apply to a fresh install. */}

The account state after a session, including the **Keep Enabled** option, is described in [Manage, rotate, and verify credentials](../../admin/credentials/manage-credentials.md). Resource-based sessions and credential-release sessions treat the account differently, so read that section before you choose a policy type.

## Release files with File Release

A File Release task lets users download an encrypted file from a secret vault. First add the file to a secret vault. See [Add an encrypted file to a vault](../../resources/secret-vaults.md#add-an-encrypted-file-to-a-vault).

- The maximum file size is 10 MB by default, with an allowed range of 1 MB to 20 MB. Change it in **Max Filesize (mb)**.
- **File Malware Scanning** scans encrypted files that you upload. It is on by default.

Both settings are under **System Settings** > **Encrypted Files**. See [System settings](../system-settings/system-settings.md#encrypted-files).

The **Files** tab lists the files that belong to the policy. The tab has **Add**, **Remove**, **Search**, and **Refresh**, as on the **Credentials** tab. The table has these columns:

| Column | Description |
|---|---|
| **NAME** | The name of the file. |
| **ACTION** | Download the file or its checksum. |
| **RESOURCE** | The vault that holds the file. |
| **FILE TYPE** | The type of file, such as text, DOCX, or PDF. |
| **SIZE** | The size of the file. |
| **COMMENTS** | Notes or metadata entered when the file is added or edited. |
| **CREATED** | The date the file was added to the vault. |

{/* TODO verify: whether a file attaches to the access policy (the code stores a policy-to-file join and the 26.03 Files tab lists vault files), how you add a file to the policy, and which permissions a user needs to download it. */}
{/* TODO verify: the File Release activity type isn't offered in the Activity Type list of the 26.07.3 lab. Confirm that File Release ships and how users start it. */}

## Related topics

- [Access policies](overview.md)
- [Secret vaults](../../resources/secret-vaults.md)
- [Connection profiles](connection-profiles.md)

{/* TODO screenshot: the tabs of a credential-based policy, including Users, Activities, Credentials, and Files. */}
