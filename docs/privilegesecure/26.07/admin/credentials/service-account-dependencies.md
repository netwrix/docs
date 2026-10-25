---
title: "Rotate service accounts and their dependencies"
description: "Rotate the password of a service account and see the Windows services and scheduled tasks that depend on it in the Account Dependencies dialog."
sidebar_position: 40
---

# Rotate service accounts and their dependencies

A service account is an account that Windows services or scheduled tasks run as. Its managed type is **Service**. When the password of such an account changes, each dependent must receive the new password. Use the **Account Dependencies** dialog to rotate the account and see its dependents.

## Prerequisites

- The account appears on the **Credentials** page with managed type **Service**. Privilege Secure finds the dependents when it scans a resource: the host scan reads the Windows services and scheduled tasks on the resource and records the account each one runs as. Scan the resource before you rotate so the **Dependencies** tab is current. See [Scan resources for dependents](#scan-resources-for-dependents).
- You're an Administrator, or you hold a custom role with the **Rotate Services** permission. See [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md).
- No session is active on the account. Manual rotation is blocked while a session is active. See [Manage, rotate, and verify credentials](/docs/privilegesecure/26.07/admin/credentials/manage-credentials.md).

## Open the Account Dependencies dialog

1. In the left navigation, click **Credentials**.
2. Set the **Managed type** filter to **Service**.
3. Select the row of the account. For example, select `<domain>\svc-example`.
4. Click **Service Account Details**.

The **Account Dependencies** dialog opens.

{/* TODO screenshot: the Account Dependencies dialog on the Dependencies tab */}

## Read the dialog

The top of the dialog shows these fields:

| Field | Shows |
|---|---|
| **Account Name** | The account. |
| **Last Changed** | When the password last changed. |
| **Last Checked** | When Privilege Secure last verified the password. |
| **Age** | The number of days since the password changed. |
| **Credential Status** | The verification status. See [Credentials](/docs/privilegesecure/26.07/admin/credentials/overview.md). |

The buttons are **Rotate**, **Rollback**, and **Cancel**. **Cancel** stops a service rotation that's in progress. It isn't a close button. **Rollback** returns the account and its dependents to the previous password.

- **Rotate** is disabled while a rotation or rollback is queued or running for the account.
- **Rollback** is enabled when the account has a previous password on record and no rotation or rollback is queued or running. Before the first rotation there's no previous password, so it's disabled.
- **Cancel** is enabled only while a rotation or rollback is queued or running.

The **Dependencies** tab lists what uses the account. Use **Search Dependencies...** to filter the list and **Refresh** to reload it.

| Column | Shows |
|---|---|
| **Resource** | The resource that holds the dependent. |
| **Type** | **Service** or **ScheduledTask**. |
| **Name** | The name of the service or task. |
| **Last Scan** | When Privilege Secure last scanned the resource. |
| **Last Change** | When the dependent last received a password. |
| **Status** | The status of the dependent, as an icon. |

The **Resources** tab lists the resources to scan for dependents. Its columns are **Name** and **Operating System**. It has a **Scan** button, a **Search Resources...** box, and a **Refresh** button.

### Scan resources for dependents

Select one or more rows on the **Resources** tab and click **Scan**. **Scan** is enabled only when at least one row is selected and you're an Administrator. Privilege Secure schedules a host scan for each selected resource. When the scan finishes, the **Last Scan** column on the **Dependencies** tab updates, and any new or removed services and scheduled tasks appear in the list.

For example, `<domain>\svc-example` can show one **Service** dependent on `<server-name>` and one **ScheduledTask** dependent on `<server-name>`.

## Rotate a service account

1. Open the **Account Dependencies** dialog. See [Open the Account Dependencies dialog](#open-the-account-dependencies-dialog).
2. Check the **Dependencies** tab for the services and tasks that run as the account.
3. Click **Rotate**.

Privilege Secure changes the account password first. When that succeeds, it schedules an update for each dependent in the list. The console shows the message "N service rotate(s) scheduled", where N is the number of dependents. {/* TODO verify: what the console shows and whether the password changes when the account has no dependents. The release code suggests a "Failed to rotate services" error and no password change. */} If the password change itself fails or is cancelled, Privilege Secure doesn't update any dependent. The **Rotation Status** field and the **Status** column on the **Dependencies** tab show the progress. For each dependent, the **Status** column shows the state of its last update, such as Queued, Running, Complete, or Failed. Failed, Completed With Errors, and Completed Not Run show in red.

The **Rotate** button on the **Credentials** page doesn't rotate an account that has dependents. Rotate a service account from this dialog so that its dependents are updated.

The **Dependents** count on the **Credentials** page leaves out services and scheduled tasks that a later host scan found removed, and services on resources that were deleted from Privilege Secure. If a removed dependent still appears, run a host scan on its resource from the **Resources** tab. {/* TODO verify: whether retiring (as opposed to deleting) a resource removes its managed_resource row, so that its services leave the count */}

## Roll back a rotation

Click **Rollback** to return the account to its previous password. Privilege Secure restores the most recent previous password first, then schedules an update for each dependent so that they use it again, the same way as a rotation. Click **Cancel** to stop a rollback that's in progress.

For how the account types differ, see [Rotation methods](/docs/privilegesecure/26.07/admin/credentials/rotation-methods.md).
