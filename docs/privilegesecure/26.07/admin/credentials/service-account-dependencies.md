---
title: "Rotate service accounts and their dependencies"
description: "Rotate the password of a service account and see the Windows services and scheduled tasks that depend on it in the Account Dependencies dialog."
sidebar_position: 40
---

# Rotate service accounts and their dependencies

A service account is an account that Windows services or scheduled tasks run as. Its managed type is **Service**. When the password of such an account changes, each dependent must receive the new password. Use the **Account Dependencies** dialog to rotate the account and see its dependents.

## Prerequisites

- The account appears on the **Credentials** page with managed type **Service**. {/* TODO verify: how dependents are discovered (resource scan) */}
- You're an Administrator, or you hold a custom role with the **[C] Rotate Services** permission. See [Create a custom role](/docs/privilegesecure/26_07/admin/roles/custom-roles).
- No session is active on the account. Manual rotation is blocked while a session is active. See [Manage, rotate, and verify credentials](/docs/privilegesecure/26_07/admin/credentials/manage-credentials).

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
| **Credential Status** | The verification status. See [Credentials](/docs/privilegesecure/26_07/admin/credentials/overview). |

The buttons are **Rotate**, **Rollback**, and **Cancel**. **Cancel** stops a service rotation that's in progress. It isn't a close button. **Rollback** returns the account and its dependents to the previous password. {/* TODO verify: when Rollback and Cancel become enabled (both were disabled in the lab before any rotation) */}

The **Dependencies** tab lists what uses the account. Use **Search Dependencies...** to filter the list and **Refresh** to reload it.

| Column | Shows |
|---|---|
| **Resource** | The resource that holds the dependent. |
| **Type** | **Service** or **ScheduledTask**. |
| **Name** | The name of the service or task. |
| **Last Scan** | When Privilege Secure last scanned the resource. |
| **Last Change** | When the dependent last received a password. |
| **Status** | The status of the dependent, as an icon. |

The **Resources** tab lists the resources to scan for dependents. Its columns are **Name** and **Operating System**. It has a **Scan** button, a **Search Resources...** box, and a **Refresh** button. {/* TODO verify: when Scan becomes enabled and what it scans. It was disabled in the lab. */}

For example, `<domain>\svc-example` can show one **Service** dependent on `<server-name>` and one **ScheduledTask** dependent on `<server-name>`.

## Rotate a service account

1. Open the **Account Dependencies** dialog. See [Open the Account Dependencies dialog](#open-the-account-dependencies-dialog).
2. Check the **Dependencies** tab for the services and tasks that run as the account.
3. Click **Rotate**.

Privilege Secure changes the password and updates the dependents. {/* TODO verify: the order of the steps, the result message, and how a failed dependent is shown */}

The **Dependents** count on the **Credentials** page leaves out dependents on resources that were retired or deleted. If a retired dependent still appears, rescan the domain. See [Active Directory domains](/docs/privilegesecure/26_07/resources/domains#run-a-synchronization). {/* TODO verify: the count after retiring a resource in 26.07.3 (PSAM-1315 open) */}

## Roll back a rotation

Click **Rollback** to return the account to its previous password. {/* TODO verify: whether Rollback also updates each dependent */}

For how the account types differ, see [Rotation methods](/docs/privilegesecure/26_07/admin/credentials/rotation-methods).
