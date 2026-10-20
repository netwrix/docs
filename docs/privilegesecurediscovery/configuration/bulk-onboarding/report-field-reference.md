---
title: "Report field reference"
description: "Look up every column in the Quickstart report: the Admin List and Computer Data sheets, what each field means, and which fields you can change."
sidebar_position: 50
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the exact accepted text for Set EDR Integration (integration name or Disabled), and the Provision Account behavior for accounts that don't exist in the inventory. Evidence: deploy/tools/quickstart/reports.py (release/26.09.1-rc) lines 800-935 describe the parsing; no product documentation exists.

TODO: Confirm whether Delete from Inventory accepts values other than TRUE. Evidence: update_admin_changes in reports.py wasn't reviewed in full.
:::

The Quickstart report is an Excel workbook with the **Computer Data** sheet and one or more **Admin List** sheets. Columns have one of two types:

- Pulled data. The tool downloads these values. Don't edit them.
- Change to push. You fill in these columns to change the product when you upload the file with `--protect-mode-file`.

The tables use the column header names. Find columns by header, because the column positions can change. For the procedures, see [Report and update systems](./report-and-update-systems.md).

## Admin List sheet

The tool starts a new sheet (**Admin List 2**, and so on) when the number of rows exceeds the `--max-worksheet-rows` value.

| Column | Type | Description |
| --- | --- | --- |
| `is` | Pulled | Identifier of the system that the account belongs to. |
| `system` | Pulled | Name of the computer, from LDAP or Active Directory (AD). |
| `domain` | Pulled | NetBIOS name of the account domain. |
| `user` | Pulled | User name of the account (the AD `sAMAccountName` attribute). |
| `sid` | Pulled | Security identifier (SID) of the account. |
| `type` | Pulled | Type of account: `1` for a user, `2` for a group. |
| `local` | Pulled | `TRUE` for a local computer account, which is the case when the computer name equals the account domain. |
| `onHost` | Pulled | `TRUE` if the account is in the local administrators group on the computer. |
| `persistent` | Pulled | `TRUE` if the account is marked as persistent. Privilege Secure for Discovery doesn't remove persistent accounts from the local administrators group. |
| `default_admin` | Pulled | `TRUE` if the account is the built-in administrator account of a Windows endpoint, for example `Administrator`. If the product manages this account, you can retrieve the current and previous passwords with the Computer Local Account Password API. |
| `inserted_ts` | Pulled | Time at which the record was created in the product database. |
| Intentionally Blank | None | Separator column. |
| Filtered | Pulled | Copy of the **Filtered** value of the system on the **Computer Data** sheet. |
| Persistent | Push | `TRUE` to make the account persistent, or `FALSE` to make it non-persistent. |
| Delete from Inventory | Push | `TRUE` to delete the account from the administrator inventory of the computer. |

## Computer Data sheet

### Pulled columns

| Column | Description |
| --- | --- |
| `id` | Identifier of the computer. |
| `cn` | Computer `cn` attribute, from LDAP or AD. |
| `domain_fqdn` | Fully qualified domain name (FQDN) of the computer domain. |
| `distinguishedName` | Distinguished name of the computer. |
| `OU` | OU of the computer, derived from its distinguished name. |
| `operatingSystem` | Operating system of the computer, from LDAP or AD. |
| `Last Logon` | Last logon timestamp of the computer. |
| `Last Scanned` | Time of the last scan attempt by Privilege Secure for Discovery. |
| `prev_scan_success` | Time at which the computer was last scanned successfully. |
| `prev_scan_msg` | Message from the last scan attempt. |
| `Scanned in last 2 weeks` | `TRUE` if the computer was scanned in the last two weeks, based on the **Last Scanned** value. |
| `protect_mode` | Protect mode of the computer: `JITA`, `DENY`, or `FALSE` (disabled). |
| `scan_mode` | `TRUE` if the computer is included in active permission scans. |
| `directory_bridging_strategy` | Directory bridging provider that is set for a Linux computer. |
| `edr_integration` | Name of the EDR integration that is set for the computer, or `Disabled`. |
| `registered` | `TRUE` if the computer has a registered service account. |
| `<provisionUser>` | A column named after the `provisionUser` value of the tool configuration. `TRUE` if the computer has a matching administrator account. |
| Intentionally Blank | Separator column. |
| `Filtered` | `TRUE` if the operating system is Windows Server or isn't Windows. `FALSE` for a Windows operating system without `server` in its name. |
| `OAM (Offline Access Management) Enabled` | `TRUE` if Offline Access Management (OAM) is managed on the computer. |
| `OAM Strategy` | Current OAM strategy of the computer. |
| `OAM Name Template` | Name template of the OAM alternate administrator account. Question marks (`?`) are wildcards. The default is `S1_ALT_ADMIN`. |
| `OAM JITA User Can Access PW` | `TRUE` if users with JITA or persistent access to the system can access OAM passwords. |
| `OAM Use Alt Admin` | `TRUE` if Privilege Secure for Discovery creates and uses an alternate administrator account that is named according to the OAM name template. |
| `OAM Manage Built-in PW` | `TRUE` if the product manages the password of the built-in local administrator account (RID 500). |
| `OAM Disable Built-in Admin` | `TRUE` if the product disables the built-in local administrator account (RID 500). |

### Columns that push changes

| Column | Values and description |
| --- | --- |
| `Enable Protect` | Protect mode: `JITA`, `DENY`, `TRUE` (same as `JITA`), or `FALSE` (disabled). |
| `Enable Scan` | `TRUE` to include the computer in active permission scans, or `FALSE`. |
| `Set EDR Integration` | Name of the EDR integration to use. The name must match the name of the integration in the product. Enter `Disabled` to turn the integration off. |
| `Provision Account` | Accounts to add to the inventory of the computer, in `DOMAIN\sAMAccountName` format, separated by commas. To make an account persistent, add `;true` after the name. |
| `Set OAM Enabled` | `TRUE` to manage the computer with OAM, or `FALSE` to turn it off. If you set `FALSE` and leave the other OAM columns blank, the product keeps the other OAM values and changes only the enabled state. |
| `Set OAM Strategy` | `OS-BEST-PRACTICE`, `MANAGED-BUILT-IN`, or `CUSTOM`. Values aren't case sensitive. If blank, the strategy keeps its current value, or becomes `OS-BEST-PRACTICE` if no policy exists. |
| `Set OAM Name Template` | Name template for the OAM alternate administrator account. Use question marks as wildcards, for example `MY_ADMIN_???`. If blank, the template keeps its current value, or becomes `S1_ALT_ADMIN`. |
| `Set OAM JITA User Can Access PW` | `TRUE` to let users with JITA or persistent access to the system access OAM passwords, or `FALSE`. |
| `Set OAM Use Alt Admin` | `TRUE` to create and use an alternate administrator account, or `FALSE`. |
| `Set OAM Manage Built-in PW` | `TRUE` to manage the password of the built-in local administrator account (RID 500), or `FALSE`. |
| `Set OAM Disable Built-in Admin` | `TRUE` to disable the built-in local administrator account (RID 500), or `FALSE`. |
| `Set Directory Bridging Strategy` | Directory bridging provider for a Linux computer: `secureone` (lightweight directory bridging), `centrify`, `powerbroker`, or `sssd`. |
| `Set Directory Bridging Domain` | Domain for the bridging provider. Required for third-party providers. |
| `Set Sudoers Representation` | ID of a sudoers file from another computer, to replicate that file to this computer. |
