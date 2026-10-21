---
title: "Freeze mode"
description: "Roll out protect mode one Active Directory group at a time by first making all accounts persistent."
sidebar_position: 60
---

Freeze mode is a way to roll out protect mode with little impact on users. You place systems in protect mode with every account persistent, then remove persistence one Active Directory (AD) group at a time as you inform and train the members of each group. This page explains the rollout approach and the steps to apply it in the interface and with the Quickstart reporting tool.

## Rollout approaches

You can roll out Privilege Secure for Discovery by system or by group.

### By system

You roll out by system with the interface for individual systems, with Bulk Actions, or with the Quickstart reporting tool. Everyone who needs administrator access to a system must know how to get access through Privilege Secure for Discovery. This adds to the logistics of the rollout.

### By group

Freeze mode rolls out by group. All systems are protected, but all access remains persistent. You then remove persistence group by group, across all systems, as you inform and train users. Users in other groups keep their current access until you remove it.

## Desired state of a system

The following describes the target state of a system that Privilege Secure for Discovery manages. Open the system on the **Access** > **Grant Access** page to see it.

![The Grant Access page for a protected system, with its scan mode, protect mode, and administrator accounts](/images/privilegesecurediscovery/onboard-systems/onboard-grant-access.webp)

- The system is in protect mode with just-in-time access (JITA). A user who needs privileged access to the system must go through Privilege Secure for Discovery.
- Service accounts are persistent, including the Privilege Secure for Discovery service accounts. A persistent account stays on the system and the product doesn't change it. Set these accounts to non-interactive in AD. Only service accounts are persistent.
- The built-in Administrator (RID 500) account has the type **Built-in Admin**, and the product manages its password.
- An alternative local administrator account exists for Offline Access Management (OAM), and the product also manages its password.
- Groups that need privileged access aren't persistent.

## Freeze mode state

In freeze mode, a system is in protect mode, but all of its accounts are persistent. A persistent account stays on the system, and a user doesn't need Privilege Secure for Discovery to use it for administrator access.

The product ingests any account or group that someone adds to the system later, and that new account or group isn't persistent. Users of those accounts must go through Privilege Secure for Discovery. Freeze mode doesn't change current access.

## Enable freeze mode in the interface

Use Bulk Actions to place many systems in freeze mode. Set the accounts to persistent first, so that no account loses access when protect mode starts.

1. Select **Management** > **Systems**.
1. Select the systems that you want to protect. You can select up to 1,000 systems at a time. Use the views and filters to find them.
1. Select **Bulk Actions**, and then select **Select Action** > **Set Accounts Persistent**.

   ![The Set Accounts Persistent bulk action for three systems](/images/privilegesecurediscovery/onboard-systems/onboard-bulk-set-persistent.webp)

1. Select **Execute Bulk Action**, and wait for the job to finish on **Monitor** > **Jobs**. The action sets every account in the inventory of each system to persistent, and it skips systems that the product hasn't scanned. The job message names the number of skipped systems.
1. Select the same systems again. Select **Bulk Actions** > **Select Action** > **Protect Policy**, set **Protect Mode** to **New Accounts: JITA**, and select **Save**.

   ![The Change Protect Policy bulk action](/images/privilegesecurediscovery/onboard-systems/onboard-bulk-protect-policy.webp)

1. Select **Execute Bulk Action**.

For a single system, open it on the **Grant Access** page. For each account, select **Action** > **Set Persistent**. Then set **Protect Mode** to **New Accounts: JITA**. See [Add a test system to protect mode](./add-a-test-system-to-protect-mode.md).

## Enable freeze mode with Quickstart

Use the Quickstart reporting tool to place many systems in freeze mode from a spreadsheet. Install the tool first. See [Install the Quickstart tools](../bulk-onboarding/install-the-quickstart-tools.md). The tool requires Python 3.10 or later and authenticates with an API key.

1. In a terminal window, open the Quickstart reporting folder.
1. Run the following command to export the systems to a spreadsheet:

   ```bash
   python reports.py --insecure
   ```

1. In the spreadsheet, filter the systems to those that aren't in protect mode and have a scan date. These are the systems to target for protect mode. To limit the rollout to workstations or servers, filter further.
1. For each target system, change two sheets:

   | Sheet | Column | Value |
   | --- | --- | --- |
   | **Computer Data** | **Enable Protect** | `TRUE` |
   | **Admin List** | **Persistent** | `TRUE`, on every row of the target system |

1. Remove all filters, and save the file with a name you can identify, for example `Freeze_Mode_Upload.xlsx`. The upload changes only the entries that you edited.
1. Run the following command to preview the upload. The output lists each change without applying it.

   ```bash
   python reports.py --insecure --protect-mode-file Freeze_Mode_Upload.xlsx --dry-run
   ```

1. If the preview is correct, run the command again without `--dry-run`:

   ```bash
   python reports.py --insecure --protect-mode-file Freeze_Mode_Upload.xlsx
   ```

1. Export the systems again and confirm that all target systems are in protect mode:

   ```bash
   python reports.py --insecure
   ```

For every column of the report, see [Report field reference](../bulk-onboarding/report-field-reference.md).

## Remove persistence

Removing a user or group from persistence forces users to go through Privilege Secure for Discovery to get privileged access. This drives toward zero standing privilege (ZSP) and reduces the attack surface.

Remove persistence one group at a time, and repeat the process while you notify and train the members of each group. For the steps, with Bulk Actions or with Quickstart, see [Remove persistence on machines](../domains-and-ad/remove-persistence.md).

1. Notify the members of the targeted AD group. The following example uses a group named `DBA_Admins`. Include the training resources, such as cheat sheets, videos, and the URL for Privilege Secure for Discovery, the date of the change, and contact information for problems.
1. Remove persistence for the group on all systems that have it. See [Remove persistence on machines](../domains-and-ad/remove-persistence.md).
1. Inform the members of the group of the change, and again provide the training and the contact information for problems.

The members of the group must now request administrator access through Privilege Secure for Discovery on every system that the group has access to.

Optionally, review the users in the targeted group with the group owner and approve them. You can share the list of systems that the group applies to with the group and system owners.

## Repeat for all groups

Repeat the process for all groups that have privileged access. Start with the main group of each team, such as desktop administrators, help desk, and application developers. Most users then move to Privilege Secure for Discovery early in the rollout. This reduces standing privilege most efficiently. Combine smaller groups into batches.

After each wave, export a new Quickstart spreadsheet, because it is the current source of truth. Keep a record of the groups that you moved away from persistence. Continue until no group has persistence. The only persistent accounts or groups that remain should be non-interactive service accounts or service account groups.

## Add new systems

Organizations build new servers and workstations continually. Add new systems to protect mode immediately, or on a regular cycle. Make the groups on a new system persistent at the same time if you haven't yet removed persistence for those groups.

## Tips for large spreadsheets

When you delete rows that you don't need from an upload file, such as systems with no scan date, Excel can run slowly or stop responding if the file has many rows. Sort the spreadsheet by the column that the deletion is based on, for example `last_scanned`, and then delete the rows together.
