---
title: "Run bulk actions on systems"
description: "Select systems on the Systems screen, by filter or by file, and apply one action such as JITA, scan policy, Protect Mode, or account changes to all of them."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: The **Scan Policy** bulk action shows the warning "Disabling scan mode on systems with OAM enabled will disable OAM on them." The executor only sets `policy.scan` to `false`, and the single-system API rejects the same change while Offline Access Management (OAM) is enabled. Confirm what the bulk action does to OAM on those systems. Evidence: selectBulkActionsView.html (scan policy section), executors/database_policy_executor.py (SetScanExecutor sets only `policy.scan` and no other code path changes OAM), lib-api-common/route-handlers/computers/single.js:67.
:::

Bulk actions apply one change to many systems at once. In Netwrix Privilege Secure for Discovery, use them to set scan and Protect Mode policies, request just-in-time administration (JITA) sessions, manage accounts, and archive systems without opening each system.

Administrators can run every bulk action. Other users see only **JITA**, **Expire**, and **Extend**.

## Select the systems

1. Select **Management** > **Systems**.
1. Select **Show Filters**, and then filter the list by system name, domain, organizational unit (OU), operating system, active JITA sessions, Offline Access settings, or time since the system was added, last logged on, or last scanned.
1. To find the systems that one user or group can reach, enter the account in **Account with access**. Use **Access Path** and **Access Type** to narrow the result.
1. Select the check box for each system, or select the check box in the table header to select every system in the table.

   ![The Systems screen with filters open and three systems selected](/images/privilegesecurediscovery/admin/systems-filters-and-selection.webp)

The table loads up to 1,000 systems, and the counter over the table reads `<n> systems selected of 1000 limit`. If you need more than 1,000 systems, select them in groups, for example by OU.

### Select every system that matches a filter

When you apply at least one filter and select all 1,000 systems in the table, an administrator sees the message **All 1000 systems on this table are selected** and the link **Select all systems based on this filter**. Select the link to run the action on every system that matches the filter, not only the systems in the table. Select **Clear selection** to undo it.

If no filter is active, the message tells you to apply filters to select more systems.

The following limits still apply to a selection by filter:

- **JITA**, **Expire**, **Extend**, and **Scan Systems** stop with an error when the filter matches more systems than the limits in [Change the bulk action limits](#change-the-bulk-action-limits). For example, `Filter matches to 120 systems which is above the maximum of 50 for jita requests`.
- The other actions apply to every match.

### Select systems from a file

Select **Select By File** to upload a list of systems. The file can be a CSV or Excel export from the **Systems** screen, or a Quickstart report. See [Install the Quickstart tools](../../configuration/bulk-onboarding/install-the-quickstart-tools.md).

The accepted file types are `.csv` and `.xlsx`. The product matches each row to a system by name and domain:

| File type | Columns that the product reads |
|---|---|
| `.csv` | A quoted header row with `"Name"` and `"Domain"`. |
| `.xlsx` | The first worksheet, with `Name` and `Domain`, or `cn` and `domain_fqdn`. |

Edit a CSV file only in a text editor. Saving it in Excel can change the header quoting, and the upload then fails with `The file does not have a header with value "Name"`. You can save the file as `.xlsx` and upload that file instead.

After the upload, the screen shows the number of systems found. A warning reports the number of rows that match no system. The upload fails when the file holds more systems than the **Maximum number of bulk JITA (start, extend, or expire) per request** setting allows (50 by default).

## Choose and run a bulk action

1. Select the systems, and then select **Bulk Actions**.
1. In **Title**, keep the generated name or enter a name that identifies the job.
1. Select **Select Action**, and then select the action.

   ![The Select Action menu on the Bulk Action screen](/images/privilegesecurediscovery/admin/bulk-action-select-action.webp)

1. Set the options for the action, and then select **Save**. Select **Edit** to change a saved action, or **Delete** to discard it.
1. Select **Execute Bulk Action**.

The product creates the job and opens **Monitor** > **Jobs** after about two seconds. You can run one bulk action at a time.

:::warning
A bulk action changes every selected system as soon as you select **Execute Bulk Action**. Review the **Details** list of selected systems first.
:::

## Bulk actions reference

| Action | What it does | What it skips |
|---|---|---|
| **JITA** | Starts a JITA session for you on each selected system. | Systems where you aren't in the account inventory, systems where you already have a session, and domain controllers. |
| **Expire** | Ends your JITA session on each selected system. | Systems where you have no active session. |
| **Extend** | Extends your JITA session by the time you choose. | Systems where you have no session, and sessions that have more than 60 minutes left. |
| **Scan Systems** | Queues a scan of each selected system. | None. |
| **Scan Policy** | Enables or disables **Scan Mode**. | Domain controllers. |
| **Protect Policy** | Sets **Protect Mode** to **New Accounts: Deny**, **New Accounts: JITA**, or **Disable**. | Domain controllers, and systems that no scan has reached when you enable Protect Mode. |
| **Set EDR Configuration** | Assigns an endpoint detection and response (EDR) configuration to each system, or disables EDR. | Domain controllers. |
| **Set Offline Access** | Sets the Offline Access Management policy on each system. | Domain controllers, and systems that don't run Windows or that no scan has reached when you enable Offline Access. The menu entry appears only to administrators, and only when Offline Access Management is enabled on **Configure** > **Server**. |
| **Set Accounts Persistent** | Sets every account in each system's inventory to persistent. | Systems that no scan has reached. |
| **Add/Update Account** | Adds a user or group to the inventory, or updates it. | Systems that don't run Windows. |
| **Remove Account** | Removes a user or group from the inventory. | Systems where the account isn't in the inventory. |
| **Archive Systems** | Moves each system to **Retired Systems**. | Domain controllers. |

### Start, extend, and expire sessions

**JITA**, **Expire**, and **Extend** act on your own sessions. The user shown on the screen is the signed-in user, and the product rejects a request for another user. To act for someone else, see [Start and manage JITA sessions for another user](./start-and-manage-jita-sessions.md).

For **JITA**, set the access duration with the options, the slider, or the minutes box. The duration can't exceed the maximum session duration on **Configure** > **Server**. Select **Add Comment** to enter a comment. If any selected system is a Linux system that uses Privilege Secure for Discovery directory bridging, selecting **Save** can open the section **Set the password for SecureONE Bridged Linux Systems**. In **Please enter your password**, enter your Active Directory password for the account that the screen names, in the form `<DOMAIN>\<user>`, and select **Submit**. The screen then saves the action.

The job reports the result in plain text, for example:

```text
JITA requested for 3 systems:
Attempting 2;
Skipping 1 - Insufficient permission, existing session found, or JITA requested on domain controller.
```

### Change scan and Protect Mode

**Scan Policy** and **Protect Policy** change the policy on each selected system without a rescan. The default choice for **Protect Policy** is **Disable**. Before you disable **Scan Mode**, set Offline Access Management to **Unmanaged** on systems that use it.

When you enable Protect Mode, the product skips systems that it never scanned and reports `Not enabling Protect Mode on 2 unscanned systems.` Scan those systems first. To plan a rollout, see [Add multiple systems to Protect Mode](../../configuration/onboard-systems/add-multiple-systems-to-protect-mode.md).

### Add, update, and remove accounts

**Add/Update Account** applies to Windows systems only. The heading reads **Add or Update Account (Windows Only)**, and the menu entry shows how many selected systems run Windows. If you select Linux systems too, the screen warns that the action skips them.

1. In **User or Group**, enter at least two characters, and then select the account.
1. For **Access Permission**, select **Just-In-Time** or **Persistent**.
1. Select **Save**.

![The Add or Update Account bulk action with the Access Permission options](/images/privilegesecurediscovery/admin/bulk-action-add-update-account.webp)

On a system that already has the account, the action updates the **Persistent** setting. On a system that doesn't have the account, it adds the account. To remove persistence for a group on many systems, see [Remove persistence on machines](../../configuration/domains-and-ad/remove-persistence.md).

**Remove Account** removes the account that you select from the inventory of every selected system. If you filtered by **Account with access**, the screen fills in that account for you.

### Archive systems

**Archive Systems** moves each selected system to the **Retired Systems** view and shows the label **Permanently Archive**. An archived system stays archived even if it still exists in Active Directory, until an administrator restores it. See [Restore a system](./restore-a-system.md).

## Follow a job

**Monitor** > **Jobs** lists every bulk action job, newest first. Select **Management** > **Monitor** to open it at any time. Administrators see all jobs, and other users see their own.

| Column | Content |
|---|---|
| **Job Name** | The title that you entered. |
| **Job Type** | The action, for example **Protect Policy Change** or **JITA Request**. |
| **Message** | The result of the action, such as `Enabled Protect-JITA Mode on 5 systems.` |
| **Status** | For a JITA job, the counts of **Pending**, **Active**, **Expired**, and **Error(s)** sessions. For the other jobs, `not-started`, `in-progress`, or `done`. |
| **Created At** and **Created By** | When the job ran and who ran it. |

Select **Back to Systems** to return to the **Systems** screen.

## Change the bulk action limits

Two limits protect the system from large requests. Change them on **Configure** > **Server**.

![The bulk action limits on the Server screen](/images/privilegesecurediscovery/admin/server-bulk-action-limits.webp)

| Setting | Default | Maximum | Applies to |
|---|---|---|---|
| **Maximum number of bulk JITA (start, extend, or expire) per request** | 50 | 1,000 | **JITA**, **Expire**, **Extend**, and the number of systems in an uploaded file. |
| **Maximum systems scanned per bulk request** | 50 | 1,000 | **Scan Systems**. |

The other actions have no separate limit. The selection limit of 1,000 systems in the table still applies.

## Limits

- Bulk actions work on systems that the product knows by name and domain. The product skips a file row that matches no system and shows a warning.
- **Add/Update Account** changes Windows systems only.
- **Scan Policy**, **Protect Policy**, **Set EDR Configuration**, **Set Offline Access**, **JITA**, and **Archive Systems** skip domain controllers.
