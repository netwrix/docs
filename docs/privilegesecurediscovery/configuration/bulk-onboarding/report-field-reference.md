---
title: "Report field reference"
description: "Look up every column in the Quickstart report: the Admin List and Computer Data sheets, what each field means, and which fields you can change."
sidebar_position: 50
---

The Quickstart report is an Excel workbook with the **Computer Data** sheet and one or more **Admin List** sheets. Columns have one of two types:

- Pulled data. The tool downloads these values. Don't edit them. The upload uses the identifier columns to find the system or account to change, and ignores the rest.
- Change to push. You fill in these columns to change the product when you upload the file with `--protect-mode-file`.

The tables use the column header names. Find columns by header, because the column positions can change. For the procedures, see [Report and update systems](./report-and-update-systems.md).

## Admin List sheet

The tool starts a new sheet (**Admin List 2**, and so on) when the number of rows exceeds the `--max-worksheet-rows` value.

| Column | Type | Description |
| --- | --- | --- |
| `is` | Pulled | Identifier of the system that the account belongs to. The header is `is`, not `id`. The upload needs this value. |
| `system` | Pulled | Name of the computer, from Active Directory (AD). |
| `domain` | Pulled | NetBIOS name of the account domain. For a local account, this is the computer name. |
| `user` | Pulled | User name of the account (the AD `sAMAccountName` attribute). |
| `sid` | Pulled | Security identifier (SID) of the account. The upload needs this value. |
| `type` | Pulled | Type of account: `user` or `group`. |
| `local` | Pulled | `TRUE` for a local account, which is the case when the account domain equals the computer name. |
| `onHost` | Pulled | `TRUE` if the account is in the local administrators group on the computer. |
| `persistent` | Pulled | `TRUE` if the account is persistent. The product doesn't remove persistent accounts from the local administrators group. The upload ignores this column. |
| `default_admin` | Pulled | `TRUE` if the account is the built-in administrator account of a Windows endpoint, for example `Administrator`. |
| `inserted_ts` | Pulled | Time at which the product added the account to the inventory. |
| Intentionally Blank | None | Separator column. |
| Filtered | Pulled | Copy of the **Filtered** value of the system on the **Computer Data** sheet. |
| Persistent | Push | `TRUE` to make the account persistent, or `FALSE` to make it non-persistent. Leave the cell blank to change nothing. |
| Delete from Inventory | Push | Any value, including `FALSE`, removes the account from the administrator inventory of the computer. Leave the cell blank to keep the account. |

## Computer Data sheet

### Pulled columns

| Column | Description |
| --- | --- |
| `id` | Identifier of the computer. The upload needs this value. |
| `cn` | Computer `cn` attribute, from AD. |
| `domain_fqdn` | Fully qualified domain name (FQDN) of the computer domain. |
| `distinguishedName` | Distinguished name of the computer. |
| `OU` | OU of the computer, derived from its distinguished name. |
| `operatingSystem` | Operating system of the computer, from AD. |
| `Last Logon` | Last logon timestamp of the computer. |
| `Last Scanned` | Time of the last scan of the computer. |
| `prev_scan_success` | `TRUE` if the last scan succeeded. |
| `prev_scan_msg` | Message from the last scan, for example `Scan complete`. |
| `Scanned in last 2 weeks` | `TRUE` if the **Last Scanned** value is within the last 14 days. |
| `protect_mode` | Protect mode of the computer: `JITA`, `DENY`, or `FALSE` (disabled). |
| `scan_mode` | `TRUE` if scan mode is on for the computer. |
| `directory_bridging_strategy` | Directory bridging provider of a Linux computer. |
| `edr_integration` | Name of the EDR integration of the computer, or `Disabled`. |
| `registered` | `TRUE` if the computer has a registered service account. |
| `<provisionUser>` | A column named after the `provisionUser` value of the tool configuration. `TRUE` if the computer has an administrator account whose name contains that value, ignoring case. |
| Intentionally Blank | Separator column. |
| `Filtered` | `TRUE` if the operating system is Windows Server or isn't Windows. `FALSE` for a Windows operating system without `server` in its name, such as Windows 10 or Windows 11. |
| `OAM (Offline Access Management) Enabled` | `TRUE` if Offline Access Management (OAM) is on for the computer. |
| `OAM Strategy` | Current OAM strategy of the computer. |
| `OAM Name Template` | Name template of the OAM alternate administrator account. Question marks (`?`) are wildcards. The default is `S1_ALT_ADMIN`. |
| `OAM JITA User Can Access PW` | `TRUE` if users with just-in-time administration (JITA) or persistent access to the system can read OAM passwords. |
| `OAM Use Alt Admin` | `TRUE` if Privilege Secure for Discovery creates and uses an alternate administrator account that matches the OAM name template. |
| `OAM Manage Built-in PW` | `TRUE` if the product manages the password of the built-in local administrator account (RID 500). |
| `OAM Disable Built-in Admin` | `TRUE` if the product disables the built-in local administrator account (RID 500). |

### Columns that push changes

| Column | Values and description |
| --- | --- |
| `Enable Protect` | Protect mode: `JITA`, `DENY`, `TRUE` (same as `JITA`), or `FALSE` (disabled). Values aren't case sensitive. |
| `Enable Scan` | `TRUE` to include the computer in permission scans, or `FALSE`. |
| `Set EDR Integration` | Name of the EDR integration to use. The name must match the name of an EDR provider configuration exactly. Enter `Disabled` to turn the integration off. The tool stops if the name doesn't match. |
| `Provision Account` | Accounts to add to the inventory of the computer, in `DOMAIN\sAMAccountName` format, separated by commas. To make an account persistent, add `;true` after the name. End a computer account name with `$`. The account must exist in the product directory. |
| `Set OAM Enabled` | `TRUE` to turn OAM on for the computer, or `FALSE` to turn it off. The OAM columns apply only when this column has a value. If you leave the other OAM columns blank, the product keeps the other OAM values and changes only the enabled state. |
| `Set OAM Strategy` | `OS-BEST-PRACTICE`, `MANAGED-BUILT-IN`, or `CUSTOM`. Values aren't case sensitive. If blank, the product uses `OS-BEST-PRACTICE` when no policy exists. |
| `Set OAM Name Template` | Name template for the OAM alternate administrator account. Use question marks as wildcards, for example `MY_ADMIN_???`. If blank, the template keeps its current value, or becomes `S1_ALT_ADMIN`. Set the strategy as well, or the product ignores the template on a computer that has a policy. |
| `Set OAM JITA User Can Access PW` | `TRUE` to let users with JITA or persistent access to the system access OAM passwords, or `FALSE`. |
| `Set OAM Use Alt Admin` | `TRUE` to create and use an alternate administrator account, or `FALSE`. |
| `Set OAM Manage Built-in PW` | `TRUE` to manage the password of the built-in local administrator account (RID 500), or `FALSE`. |
| `Set OAM Disable Built-in Admin` | `TRUE` to disable the built-in local administrator account (RID 500), or `FALSE`. |
| `Set Directory Bridging Strategy` | Directory bridging provider for a Linux computer: `secureone` (lightweight directory bridging), `centrify`, `powerbroker`, or `sssd`. Enter the value in lowercase. |
| `Set Directory Bridging Domain` | FQDN of a domain that you added to the product. Required for `centrify`, `powerbroker`, and `sssd`. |
| `Set Sudoers Representation` | ID of a sudoers file from another computer, to replicate that file to this computer. |
