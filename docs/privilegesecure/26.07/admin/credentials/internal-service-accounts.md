---
title: "Manage internal service accounts"
description: "Bring an internal service account under management so Privilege Secure can rotate its password automatically or you can set it manually."
sidebar_position: 50
---

# Manage internal service accounts

An internal service account is an account that Privilege Secure itself uses. It has no dependencies, which means no Windows services or scheduled tasks use it. On the **Credentials** page, these accounts have the **Managed type** value **Internal**.

When you manage an internal account, Privilege Secure searches for a matching user and offers you a choice of management method.

:::note
Internal accounts rotate on the primary domain controller (PDC) of the domain.
:::

## Prerequisites

- Add the service account on the **Service Accounts** page. See [Service accounts](/docs/privilegesecure/26_07/configuration/service-accounts).
- Ensure the user exists in Active Directory in the expected domain.

## Manage an internal service account

1. In the left navigation, click **Credentials**.
2. Open the **Managed type** filter and select **Internal**.
3. Select the checkbox for the account.
4. Click **Manage**.

   {/* TODO screenshot: the Manage dialog for an internal service account */}

   {/* TODO verify: the Manage dialog wasn't opened in the lab. Confirm the dialog title, the search for a matching user, and the options. */}

5. If Privilege Secure finds a matching user, choose one of these options:

   - **Automatic**: Privilege Secure manages the account and its password.
   - **Manual**: You manage the account and its password. A dialog opens so you can set the password.
   - **Cancel**: Closes the dialog without changes.

For example, select an internal account named `<internal-account>` and click **Manage**. Choose **Automatic** to let Privilege Secure rotate the password on the schedule that applies to the account.

## Resolve "No matching user found"

If the dialog shows the message "No matching user found", Privilege Secure can't find a matching user in Active Directory. Try these fixes:

- Run an Active Directory sync to collect the latest data from the domain. See [Active Directory domains](/docs/privilegesecure/26_07/resources/domains#run-a-synchronization).
- Check that the user is added to the console. See [Users and groups](/docs/privilegesecure/26_07/admin/users-groups/add-users-groups).
- Check the spelling of the user name on the service account. See [Service accounts](/docs/privilegesecure/26_07/configuration/service-accounts).
- Check that the user is in Active Directory in the expected domain.

## Set the password manually

If you choose **Manual**, a dialog opens to set the password for the credential.

1. Enter the password.
2. Click **Save**.

{/* TODO verify: field names and the dialog title of the password dialog. The 26.03 page names it "Set Password for Credential". */}

For example, enter the password that `<internal-account>` already has in Active Directory.

After you save, the account shows these icons next to its name:

- **Copy Password to Clipboard**: Copies the current password.
- **View Password**: Opens a dialog to view and copy the password. See [View passwords and password history](/docs/privilegesecure/26_07/admin/credentials/password-history).

{/* TODO verify: whether a Set Password icon appears on the account row after manual management, as the 26.03 page describes. The lab found no Set Password button on the toolbar. */}

## Related topics

- [Manage, rotate, and verify credentials](/docs/privilegesecure/26_07/admin/credentials/manage-credentials)
- [Rotation methods](/docs/privilegesecure/26_07/admin/credentials/rotation-methods)
