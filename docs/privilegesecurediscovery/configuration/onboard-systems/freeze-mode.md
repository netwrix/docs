---
title: "Freeze mode"
description: "Roll out protect mode one Active Directory group at a time by first making all accounts persistent."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the Quickstart spreadsheet column names and the persistence values used in the Computer Data and Admin List tabs at 26.09.1. Evidence: none; see the Quickstart pages under configuration/bulk-onboarding.

TODO: Confirm that the action button names for setting and removing persistence on the Grant Access page are unchanged at 26.09.1. Evidence: none.
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: The screenshots from 4412001676439_screenshot_2022-03-30_* come from an earlier release and can show old branding. Re-capture all of them on the current release.

TODO: 4412001676439_screenshot_2022-03-30_210819, 210915, 211054, 211126, 211156, 211436, 211501, 211527, and 211553 can show a staff member's workstation name and user name in a terminal prompt or system and group names. Redact or replace them.
:::

Freeze mode is a way to roll out protect mode with little impact on users. You place systems in protect mode with every account persistent, then remove persistence one Active Directory (AD) group at a time as you inform and train the members of each group. This page explains the rollout approach and the steps to apply it in the interface and with the Quickstart reporting tool.

## Rollout approaches

You can roll out Privilege Secure for Discovery by system or by group.

### By system

You roll out by system through the interface for individual systems or in bulk with the Quickstart reporting tool. Everyone who needs administrator access to a system must know how to get access through Privilege Secure for Discovery. This adds to the logistics of the rollout.

### By group

Freeze mode rolls out by group. All systems are protected, but all access remains persistent. You then remove persistence group by group, across all systems, as users are informed and trained. Users in other groups keep their current access until you remove it.

## Desired state of a system

The following describes the target state of a system that Privilege Secure for Discovery manages.

![A protected system on the Grant Access page showing its protect mode and account list](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_205811_915x409.webp)

The system is in protect mode with just-in-time access (JITA). A user who needs privileged access to the system must go through Privilege Secure for Discovery.

![Protect mode control set to JITA for the system](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210054_233x33.webp)

Service accounts are persistent, including the Privilege Secure for Discovery service accounts. A persistent account stays on the system and isn't affected by the product. Set these accounts to non-interactive in AD. Only service accounts are persistent.

![Service accounts marked as persistent in the account list of the system](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210309_385x111.webp)

The built-in Administrator (RID 500) account is locked, and the product manages its password.

![Built-in Administrator account in the account list with the locked and password-rotation icons](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210530_344x54.webp)

The following icons appear next to an account:

- ![Lock icon](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210620_48x46.webp) The account is locked.
- ![Rotation icon](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210557_49x50.webp) Privilege Secure for Discovery rotates the account password.

An alternative local administrator account exists for Offline Access Management (OAM), and the product also manages its password.

![Local administrator account for Offline Access Management in the account list](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210643_257x36.webp)

Groups that need privileged access aren't persistent.

![Group that requires privileged access in the account list with persistence turned off](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210715_284x43.webp)

## Freeze mode state

In freeze mode, a system is in protect mode, but all of its accounts are persistent.

![A system in protect mode with all accounts shown as persistent](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210750.webp)

A persistent account stays on the system, and a user doesn't need Privilege Secure for Discovery to use it for administrator access.

![Account list with every account set to persistent](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210819_473x123.webp)

The product ingests any new account or group that is added to the system, and the new account or group isn't persistent. Users of those accounts must go through Privilege Secure for Discovery. Current access isn't affected by freeze mode.

## Enable freeze mode in the interface

1. Open the system on the **Access** > **Grant Access** page.
1. Use the action button to set all accounts to persistent.

   ![Action button menu with the option to set all accounts to persistent](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210852_189x104.webp)

1. Add the system to protect mode with JITA.

   ![Protect mode menu with the JITA option](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_210915_261x95.webp)

## Enable freeze mode with Quickstart

Use the Quickstart reporting tool to place many systems in freeze mode. Install the tool first. See [Install the Quickstart tools](../bulk-onboarding/install-the-quickstart-tools.md). The tool requires Python 3.10 or later and authenticates with an API key.

1. In a terminal window, open the Quickstart reporting folder.
1. Run the following command to export the systems to a spreadsheet:

   ```bash
   python reports.py --insecure
   ```

1. In the spreadsheet, filter the systems to those that aren't in protect mode and have a scan date. These are the systems to target for protect mode. To limit the rollout to workstations or servers, filter further.

   ![Spreadsheet filtered to systems that aren't in protect mode](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211054_255x145.webp)

   ![Spreadsheet filtered to systems that have a scan date](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211126_267x142.webp)

1. For each target system, add protect mode JITA and set persistence to true for all accounts. The following example uses one target system.

   On the Computer Data tab, set the protect mode values.

   ![Computer Data tab of the spreadsheet with the target system selected](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211156_253x163.webp)

   On the Admin List tab, set persistence to true for all accounts of the target system.

   ![Admin List tab of the spreadsheet with persistence set to true for every account of the target system](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211225.webp)

1. Remove all filters, and save the file with a name you can identify, for example `Freeze_Mode_Upload.xlsx`. Only the entries that you changed are updated.
1. Run the following command to preview the upload:

   ```bash
   python reports.py --insecure --protect-mode-file Freeze_Mode_Upload.xlsx --dry-run
   ```

   ![Terminal output of a dry run that lists the changes to be applied](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211254.webp)

1. If the preview is correct, run the command again without `--dry-run`:

   ```bash
   python reports.py --insecure --protect-mode-file Freeze_Mode_Upload.xlsx
   ```

1. Export the systems again and confirm that all target systems are in protect mode:

   ```bash
   python reports.py --insecure
   ```

## Remove persistence

Removing a user or group from persistence forces users to go through Privilege Secure for Discovery to get privileged access. This drives toward zero standing privilege (ZSP) and reduces the attack surface.

Remove persistence one group at a time, and repeat the process while you notify and train the members of each group.

1. Notify the members of the targeted AD group. The following example uses a group named `DBA_Admins`. Include the training resources, such as cheat sheets, videos, and the URL for Privilege Secure for Discovery, the date of the change, and contact information for problems.

   ![Example notification to the members of the targeted group](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211410.webp)

1. Remove persistence for the group.

   - To change one system in the interface, use the action button on the **Grant Access** page to remove persistence.

     ![Action button menu with the option to remove persistence](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211436_199x110.webp)

     This forces the members of the group to use Privilege Secure for Discovery on this one system only. The group then uses the product for some systems and not others. Remove persistence on all systems that have the group instead. Use Quickstart to do this.

   - To change all systems with Quickstart, export the systems, filter the Admin List tab on the group, and set persistence to false for all systems that have the group.

     ![Admin List tab filtered on the group with persistence set to false](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211501.webp)

1. Save the upload file in the Quickstart reporting folder with a name you can identify, for example `DBA_Admins_COMPLETED.xlsx`.
1. Preview the change:

   ```bash
   python reports.py --insecure --protect-mode-file DBA_Admins_COMPLETED.xlsx --dry-run
   ```

   ![Terminal output of a dry run for the group change](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211527.webp)

1. Apply the change:

   ```bash
   python reports.py --insecure --protect-mode-file DBA_Admins_COMPLETED.xlsx
   ```

   ![Terminal output of the applied group change](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211553.webp)

1. Inform the members of the group of the change, and again provide the training and the contact information for problems.

In the interface, the members of the group must now request administrator access through Privilege Secure for Discovery on every system that the group has access to.

![Grant Access page for a system where the group must now request elevated access](/images/privilegesecure/4.2/discovery/4412001676439_screenshot_2022-03-30_211625.webp)

Optionally, review the users in the targeted group with the group owner and approve them. You can share the list of systems that the group applies to with the group and system owners.

## Repeat for all groups

Repeat the process for all groups that have privileged access. Start with the main group of each team, such as desktop administrators, help desk, and application developers. Most users then move to Privilege Secure for Discovery early in the rollout, which reduces standing privilege most efficiently. Combine smaller groups into batches.

After each wave, export a new Quickstart spreadsheet, because it is the current source of truth. Keep a record of the groups that you moved away from persistence. Continue until no group has persistence. The only persistent accounts or groups that remain should be non-interactive service accounts or service account groups.

## Add new systems

Organizations build new servers and workstations continually. Add new systems to protect mode immediately, or on a regular cycle. Make the groups on a new system persistent at the same time if you haven't yet removed persistence for those groups.

## Tips for large spreadsheets

When you delete rows that you don't need from an upload file, such as systems that haven't been scanned, Excel can run slowly or stop responding if many rows are involved. Sort the spreadsheet by the column that the deletion is based on, for example `last_scanned`, and then delete the rows together.
