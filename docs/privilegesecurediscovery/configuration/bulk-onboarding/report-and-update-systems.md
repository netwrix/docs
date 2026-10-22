---
title: "Report and update systems"
description: "Export an Excel report by OU or system list with the Quickstart tool, edit it, and upload changes to Protect mode, scan mode, EDR, OAM, and Linux settings."
sidebar_position: 30
---

The Quickstart tool exports an Excel report of systems and their administrator accounts. You edit the report and upload it to change Protect mode, scan mode, persistence, inventory accounts, endpoint detection and response (EDR) integrations, Offline Access Management (OAM), directory bridging, and sudoers for many systems at once.

Before you use the tool, complete [Install the Quickstart tools](./install-the-quickstart-tools.md). For a description of every column, see [Report field reference](./report-field-reference.md).

## Command-line arguments

The examples use `python reports.py`. On Linux, use `python3` or the Python in your virtual environment.

| Argument | Description |
| --- | --- |
| `--ou <OU>` | Distinguished name (DN) of the organizational unit (OU) to report on. |
| `--ou-file <file>` | Text file with one OU DN per line. |
| `--input-file <file>` | Text file with one system per line in `DOMAIN\Computer` format. Use it instead of OU filtering. |
| `--file <file>` | File name for the report. The default is `s1_report.xlsx`. |
| `--protect-mode-file <file>` | Edited report to upload. |
| `--dry-run` | List the changes without applying them. |
| `--scan` | Scan each changed system after the upload. |
| `--linux-reg-file <file>` | Excel file that lists Linux systems to register. |
| `--max-worksheet-rows <number>` | Maximum number of administrator rows on one worksheet. The tool starts a new **Admin List** worksheet after that. The default is 1,000,000. |
| `--rm-api-key` | Remove the API key that the tool saved in the operating system keyring. |
| `--no-save-api` | Don't save the API key. |
| `--insecure` | Skip TLS certificate verification. |
| `--legacy` | Fallback download method. Use it if the normal download fails. |

By default, the tool verifies the TLS certificate of the server. If the server uses a self-signed certificate, the tool stops with the message `Use --insecure option to ignore certificate checks`.

:::warning
Use `--insecure` only with a self-signed certificate on a network that you trust. It turns off certificate verification, so an attacker who intercepts the connection can read the API key and the data that the tool exchanges. Prefer a certificate that your computers trust. For more information, see [Certificate files](../certificates/certificate-files.md).
:::

## Export a report

Without `--ou`, `--ou-file`, or `--input-file`, the tool exports every system. The tool saves the workbook as `s1_report.xlsx` in the current folder unless you set `--file`.

### Report on one OU

Pass the DN of the OU to `--ou`. The tool matches the text against the DN of each system and ignores case, so the report also includes systems in child OUs.

```bash
python reports.py --ou "OU=Servers,DC=example,DC=com"
```

Example output:

```text
 [+] API key loaded from secure storage
Processing OU: OU=Servers,DC=example,DC=com
Processing 16 of 16 systems
File successfully saved to s1_report.xlsx
```

### Report on several OUs

1. Create a text file with one OU DN per line, for example `OUs.txt`:

   ```text
   OU=Servers,DC=example,DC=com
   OU=Database,OU=Servers,DC=example,DC=com
   OU=Web,OU=Servers,DC=example,DC=com
   ```

2. Run the report with `--ou-file`:

   ```bash
   python reports.py --ou-file OUs.txt
   ```

   Example output:

   ```text
    [+] API key loaded from secure storage
   Processing OU: OU=Servers,DC=example,DC=com
   Processing 16 of 16 systems
   Processing OU: OU=Database,OU=Servers,DC=example,DC=com
   Processing 3 of 3 systems
   Processing OU: OU=Web,OU=Servers,DC=example,DC=com
   Processing 4 of 4 systems
   File successfully saved to s1_report.xlsx
   ```

   A system in a child OU appears once for each listed OU that matches it. Don't list both a parent and its child OU.

### Report on a list of systems

1. Create a text file with one system per line. Use the NetBIOS domain name, a backslash, and the computer name. For example, `target_computers.txt`:

   ```text
   EXAMPLE\SERVER01
   EXAMPLE\SERVER02
   EXAMPLE\SERVER03
   ```

2. Run the report with `--input-file`:

   ```bash
   python reports.py --input-file target_computers.txt
   ```

   Example output:

   ```text
    [+] API key loaded from secure storage
   Processing 3 systems
   File successfully saved to s1_report.xlsx
   ```

   The tool prints `Unable to lookup resource: <DOMAIN\Computer>` for each line that doesn't match exactly one system.

## Edit the report

Open the report in Excel. The workbook has a **Computer Data** sheet and one or more **Admin List** sheets. Fill in only the columns that start with **Set** or **Enable** on **Computer Data**, plus **Provision Account**, and the **Persistent** and **Delete from Inventory** columns on **Admin List**. Find columns by their headers, because column positions can differ between releases.

Follow these rules, because the tool changes only what it finds in the file:

- Leave the column headers and sheet names as they are. The tool identifies data by header. A missing header stops the upload with a `KeyError` message.
- Leave a cell blank to change nothing. The tool skips blank cells.
- Delete the rows for systems or accounts that you don't want to change. The tool also skips rows and columns that Excel hides, for example through a filter, but deleting rows is easier to review.
- Enter `TRUE` or `FALSE` in true-or-false columns. The tool ignores other text in the **Persistent** and **Enable Scan** columns without an error.
- Save the file as `.xlsx`.

:::warning
The **Delete from Inventory** column removes the account from the system inventory when it contains any value, including `FALSE`. Leave the cell blank for accounts that you want to keep.
:::

### Preview the changes

Use `--dry-run` to list the proposed changes without applying them. The preview still connects to the product, so it needs a valid API key.

```bash
python reports.py --protect-mode-file s1_report.xlsx --dry-run
```

Example output:

```text
 [+] API key loaded from secure storage
 [!] DRY RUN ONLY - displaying proposed changes only.
 [*] Updating 1 Users Persistence:
  [+] User: EXAMPLE\jsmith System: SERVER01 Persistent: False
 [*] Removing 0 Users from Inventory:
 [*] Adding 1 Users to Inventory:
  [+] User: EXAMPLE\mjones System: SERVER01 Persistent: false
 [*] Updating Protect Mode on 2 systems:
  [+] System: SERVER01 Protect: New Accounts - JITA
  [+] System: SERVER02 Protect: New Accounts - Deny
 [*] Updating Scan Mode on 0 systems:
 [*] Updating Directory Bridging Strategy on 0 systems:
 [*] Updating EDR Integration on 0 systems:
 [*] Updating Sudoers Representation on 0 systems:
 [*] Updating Offline Access Management on 0 systems:
```

The tool always processes the changes in this order: account persistence, inventory removals, inventory additions, Protect mode, scan mode, directory bridging, EDR integration, sudoers, and OAM.

### Apply the changes

Run the same command without `--dry-run`:

```bash
python reports.py --protect-mode-file s1_report.xlsx
```

The tool prints ` [!] Protect mode enabled - updates in progress!` and the same list as the preview. For each request that the product rejects, the tool prints the URL, the HTTP response code, and the response body, and continues with the next change.

The product applies a change to the endpoint at the next scan of that system. To scan each changed system right away, add `--scan`:

```bash
python reports.py --protect-mode-file s1_report.xlsx --scan
```

With `--scan`, the tool prints `[*] Scanning <system>...` for each changed system and waits up to 45 seconds for the result. If the scan takes longer, the tool prints `Operation timed out after 45 seconds` and moves on. The scan continues in the product.

## Set the Protect mode and scan mode

Set **Enable Protect** to `JITA`, `DENY`, `TRUE`, or `FALSE`. The values aren't case sensitive.

- `JITA` sets **New Accounts: JITA**. The product removes administrator accounts that aren't persistent and lets users request access through just-in-time administration (JITA).
- `DENY` sets **New Accounts: Deny**. The product doesn't add newly found administrator accounts to its inventory.
- `TRUE` is the same as `JITA`.
- `FALSE` turns Protect mode off.

For more information about the modes, see [Add a test system to Protect mode](../onboard-systems/add-a-test-system-to-protect-mode.md).

Set **Enable Scan** to `TRUE` or `FALSE` to include or exclude the system from permission scans. A system must have scan mode on before you enable OAM on it, and you can't turn scan mode off while OAM is on.

## Change persistence and inventory accounts

On the **Admin List** sheet, the lowercase `persistent` column shows the current value, and the upload ignores it. Enter `TRUE` or `FALSE` in the **Persistent** column, which is the upload column at the right of the sheet. An account that is persistent stays in the local administrators group when the system is in Protect mode.

To add accounts to the inventory of a system, enter them in **Provision Account** on the **Computer Data** sheet. Use the `DOMAIN\sAMAccountName` format and separate accounts with commas. Add `;true` after an account name to make it persistent. For a computer account, end the name with `$`.

```text
EXAMPLE\jsmith;true, EXAMPLE\IT-Admins
```

The account must already exist in the product directory. If it doesn't, the tool prints `Specific user/group/computer not found: <account>`. The preview doesn't check this. If the account is already in the inventory, the product rejects the request with `Administrator already exists in inventory`.

On a Linux system that uses lightweight directory bridging, a domain account can't be persistent. The product rejects the change with `Domain account on SecureONE bridged can not be set as persistent`.

## Change the EDR integration

The **edr_integration** column shows the endpoint detection and response (EDR) integration of each system, or `Disabled`. To change it, enter the name of an integration in **Set EDR Integration**. Enter `Disabled` to turn the integration off.

The name must match the name of an EDR provider configuration exactly. To find the names, select **Configure** > **Server** and open **EDR Provider Configuration**.

If a name doesn't match, the tool stops and prints `Invalid EDR Configuration Name` followed by the valid names. Changes that the tool already applied in that run stay in place, so run `--dry-run` first.

```text
 [*] Updating EDR Integration on 2 systems:
  [+] System: SERVER01 EDR Integration: <integration-name>
  [+] System: SERVER02 EDR Integration: Disabled
```

## Change the Offline Access Management policy

The **Computer Data** sheet reports the OAM policy in the columns that start with **OAM**. To change the policy, set **Set OAM Enabled** to `TRUE` or `FALSE`. The tool uploads the other **Set OAM** columns only when you fill them in. For more information about OAM, see [Manage offline access to local administrator accounts](../../admin/systems/offline-access-management.md).

| Column | Values |
| --- | --- |
| **Set OAM Enabled** | `TRUE` or `FALSE`. A row without a value changes nothing. |
| **Set OAM Strategy** | `OS-BEST-PRACTICE`, `MANAGED-BUILT-IN`, or `CUSTOM`. The value isn't case sensitive. |
| **Set OAM Name Template** | Name of the alternate administrator account, with `?` characters as wildcards, for example `S1_ALT_??????`. The default is `S1_ALT_ADMIN`. |
| **Set OAM JITA User Can Access PW** | `TRUE` or `FALSE`. |
| **Set OAM Use Alt Admin** | `TRUE` or `FALSE`. |
| **Set OAM Manage Built-in PW** | `TRUE` or `FALSE`. |
| **Set OAM Disable Built-in Admin** | `TRUE` or `FALSE`. |

The strategy decides which of the other options you can set:

| Option | OS-BEST-PRACTICE | MANAGED-BUILT-IN | CUSTOM |
| --- | --- | --- | --- |
| Use Alt Admin | `TRUE` | `FALSE` | You set it |
| Manage Built-in PW | `TRUE` | `TRUE` | You set it |
| Disable Built-in Admin | `TRUE` | `FALSE` | You set it |
| JITA User Can Access PW | `FALSE` | `FALSE` by default, or you set it | `FALSE` by default, or you set it |

Follow these rules:

- If a system already has an OAM policy and you fill in only **Set OAM Enabled**, the product changes only the enabled state and keeps every other value.
- If a system has no policy and you leave **Set OAM Strategy** blank, the product uses `OS-BEST-PRACTICE`.
- To change **Set OAM Name Template** on a system that has a policy, also set **Set OAM Strategy**. Without a strategy, the product ignores the template.
- For a named strategy, a value that differs from the table gets the error `One or more conflict with named strategy: [<option>]`.
- For `CUSTOM`, set **Set OAM Use Alt Admin**, **Set OAM Manage Built-in PW**, and **Set OAM Disable Built-in Admin**. You can't set both **Use Alt Admin** and **Manage Built-in PW** to `FALSE`, and you can't set **Disable Built-in Admin** to `TRUE` without **Use Alt Admin**.
- OAM isn't available on domain controllers or Linux systems. The product rejects the request on a domain controller with `Offline Access Management is not supported on Active Directory domain controllers.`
- The system must have scan mode on. Otherwise the product rejects the request with `Cannot enable Offline Access Management policy when Scan is disabled.` To turn scan mode off for a system, turn OAM off in an earlier upload.

## Set the directory bridging strategy

Use these columns on the **Computer Data** sheet for Linux systems. The product rejects the change on other systems.

| Column | Values |
| --- | --- |
| **Set Directory Bridging Strategy** | `secureone` (lightweight directory bridging), `centrify`, `powerbroker`, or `sssd`. Enter the value in lowercase. |
| **Set Directory Bridging Domain** | The fully qualified domain name (FQDN) of a domain that you added to the product. Fill it in on every row where the strategy is `centrify`, `powerbroker`, or `sssd`. |

The `centrify`, `powerbroker`, and `sssd` strategies need a domain. If the domain cell is blank or names a domain that the product doesn't know, the product rejects the change with `Invalid domain specified for the system`. The **Grant Access** screen requires a domain for these strategies, too. For `secureone`, the product treats the system as not joined to the domain and ignores the domain cell.

## Assign a sudoers file to Linux systems

Enter the ID of an existing sudoers file in **Set Sudoers Representation**. The report doesn't show the current sudoers file of a system. For the procedure, see [Replicate sudo permissions to many systems](../endpoint-preparation/linux-replicate-sudo-permissions.md).

## Register Linux systems from a file

To register Linux systems from an Excel file, use `--linux-reg-file`. See [Register Linux systems by using the API](./register-linux-systems.md).
