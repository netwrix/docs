---
title: "Report and update systems"
description: "Generate Excel reports by OU or system list with the Quickstart tool, edit them, and push changes for Protect mode, EDR, OAM, and Linux systems."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: The sample dry-run output for EDR changes is modeled on the previous page. Confirm the exact output text of the current tool for the EDR step. Evidence: deploy/tools/quickstart/reports.py (release/26.09.1-rc) prints the other sections but the EDR print statement wasn't reviewed.

TODO: Confirm which values the API accepts for Set Directory Bridging Strategy on systems other than Linux and whether sssd needs Set Directory Bridging Domain. Evidence: docker/web/common/common/views/directoryBridgingCentrifyOptionsModal.html (domain required for the third-party providers in the UI); no API validation was found.
:::

The Quickstart tool generates an Excel report of systems and their administrator accounts. You can edit the report and upload it to change Protect mode, scan mode, persistence, EDR policies, Offline Access Management (OAM) policies, directory bridging, and sudoers for many systems at once.

Before you use the tool, complete [Install the Quickstart tools](./install-the-quickstart-tools.md). For a description of every column in the report, see [Report field reference](./report-field-reference.md).

## Command-line arguments

The script is `reports.py`. The examples in this page use `python reports.py`. On Linux, use `python3`.

| Argument | Description |
| --- | --- |
| `--ou <OU>` | Distinguished name (DN) of the OU to report on. |
| `--ou-file <file>` | Text file that contains a list of OU DNs, one per line. |
| `--input-file <file>` | Text file that contains a list of systems in `DOMAIN\Computer` format, used instead of OU filtering. |
| `--file <file>` | File name for the report. The default is `s1_report.xlsx`. |
| `--protect-mode-file <file>` | Report file that contains edits to push to the systems and administrator accounts. |
| `--scan` | Scan each changed system immediately after the changes are applied. |
| `--linux-reg-file <file>` | Excel file that lists Linux systems to register. |
| `--dry-run` | Display the changes without making them. |
| `--max-worksheet-rows <number>` | Maximum number of administrator rows per worksheet before the tool starts a new worksheet. |
| `--rm-api-key` | Remove the API key that the tool saved in the operating system keyring. |
| `--no-save-api` | Don't save the API key. |
| `--insecure` | Skip TLS certificate verification. |
| `--legacy` | Fallback download method. Use it if the normal download fails. |

By default, the tool verifies the TLS certificate of the server. If the server uses a self-signed certificate and verification fails, the tool suggests the `--insecure` argument.

:::warning
Use `--insecure` only with a self-signed certificate on a network that you trust. It turns off certificate verification, so an attacker who intercepts the connection can read the API key and the data that the tool exchanges. Prefer installing a certificate that your computers trust. For more information, see [Certificate files](../certificates/certificate-files.md).
:::

## Generate a report

### Report on a single OU

Pass the DN of the OU to the `--ou` argument:

```bash
python reports.py --ou "OU=Servers,DC=example,DC=com"
```

Example output:

```text
[+] API key loaded from secure storage
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

2. Run the report with the `--ou-file` argument:

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
   File successfully saved to s1_report.xlsx
   ```

### Report on a list of systems

1. Create a text file with one system per line in `DOMAIN\Computer` format, for example `target_computers.txt`:

   ```text
   EXAMPLE\SERVER01
   EXAMPLE\SERVER02
   EXAMPLE\SERVER03
   ```

2. Run the report with the `--input-file` argument:

   ```bash
   python reports.py --input-file target_computers.txt
   ```

   Example output:

   ```text
   [+] API key loaded from secure storage
   Processing 3 systems
   File successfully saved to s1_report.xlsx
   ```

## Make changes to systems

Edit the report in Excel. Fill in the columns that start with **Set** or **Enable** on the **Computer Data** sheet, and the **Persistent** and **Delete from Inventory** columns on the **Admin List** sheet. Use the column headers to find a column, because the column positions can differ between releases. Then pass the edited file to `--protect-mode-file`.

:::caution
Don't change or remove the column headers. The tool uses the headers to identify the data in the sheet.
:::

### Preview the changes

Use `--dry-run` to display the proposed changes without applying them:

```bash
python reports.py --protect-mode-file s1_report.xlsx --dry-run
```

Example output:

```text
[+] API key loaded from secure storage
 [!] DRY RUN ONLY - displaying proposed changes only.
 [*] Adding 1 Users to Inventory:
  [+] User: EXAMPLE\jsmith System: SERVER01 Persistent: false
 [*] Updating Protect Mode on 2 systems:
  [+] System: SERVER01 Protect: New Accounts - JITA
  [+] System: SERVER02 Protect: New Accounts - JITA
```

### Apply the changes

Run the same command without `--dry-run`:

```bash
python reports.py --protect-mode-file s1_report.xlsx
```

The output lists any failures with the HTTP response code and message.

By default, Privilege Secure for Discovery applies a change to the target host the next time it scans the host. The scan runs during the normal scan process, or when you scan the system manually in the UI or through the API. To scan each changed system immediately, add the `--scan` argument. This makes the tool run more slowly.

```bash
python reports.py --protect-mode-file s1_report.xlsx --scan
```

## Manage the EDR integration of a system

Privilege Secure for Discovery supports multiple integrations with one or more endpoint detection and response (EDR) providers. The **edr_integration** column of the **Computer Data** sheet shows the current integration for each system. To change it, enter the name of an EDR integration in the **Set EDR Integration** column. Enter `Disabled` to turn the integration off. The name must match the name that you used when you created the integration in the product.

Example dry run for EDR changes:

```text
python reports.py --dry-run --protect-mode-file s1_report.xlsx

[+] API key loaded from secure storage
 [!] DRY RUN ONLY - displaying proposed changes only.
 [*] Updating EDR Integration on 3 systems:
  [+] System: SERVER01 EDR Integration: Carbon Black Cloud 1
  [+] System: SERVER02 EDR Integration: CrowdStrike Falcon 1
  [+] System: SERVER03 EDR Integration: SentinelOne 1
```

## Manage the Offline Access Management policy of a system

The **Computer Data** sheet contains the following columns that report the OAM policy of a system:

| Column | Values |
| --- | --- |
| **OAM (Offline Access Management) Enabled** | `TRUE`, `FALSE` |
| **OAM Strategy** | `OS-BEST-PRACTICE`, `MANAGED-BUILT-IN`, `CUSTOM` |
| **OAM Name Template** | Alphanumeric characters with `?` wildcards, for example `S1_ALT_??????` |
| **OAM JITA User Can Access PW** | `TRUE`, `FALSE` |
| **OAM Use Alt Admin** | `TRUE`, `FALSE` |
| **OAM Manage Built-in PW** | `TRUE`, `FALSE` |
| **OAM Disable Built-in Admin** | `TRUE`, `FALSE` |

To change the policy, set **Set OAM Enabled** to `TRUE` or `FALSE`, and fill in the other **Set OAM** columns that you want to change. If you leave **Set OAM Strategy** blank, it keeps the current value, or `OS-BEST-PRACTICE` if no policy exists. If you leave **Set OAM Name Template** blank, it keeps the current value, or `S1_ALT_ADMIN`.

The following table lists the default settings for each strategy:

| Option | OS-BEST-PRACTICE | MANAGED-BUILT-IN | CUSTOM |
| --- | --- | --- | --- |
| JITA User Can Access PW | `FALSE` | `FALSE` | `FALSE` |
| Use Alt Admin | `TRUE` | `FALSE` | Required |
| OAM Manage Built-in PW | `TRUE` | `TRUE` | Required |
| Disable Built-in Admin | `TRUE` | `FALSE` | Required |

## Set the directory bridging strategy for Linux systems

Use the following columns of the **Computer Data** sheet to set the directory bridging strategy for Linux systems:

| Column | Values |
| --- | --- |
| **Set Directory Bridging Strategy** | `secureone` (lightweight directory bridging), `centrify`, `powerbroker`, or `sssd` |
| **Set Directory Bridging Domain** | Name of the domain. Required for third-party strategies. |

## Assign a sudoers file to Linux systems

To assign a sudoers file to a set of systems, enter the ID of an existing sudoers file in the **Set Sudoers Representation** column. For the procedure, see [Replicate sudo permissions to many systems](../endpoint-preparation/linux-replicate-sudo-permissions.md).

The report doesn't show the current sudoers value of a system.

## Register Linux systems from a file

You can register Linux systems from an Excel file with the `--linux-reg-file` argument. For the file layout, the columns, and a sample file, see [Register Linux systems by using the API](./register-linux-systems.md).

## Excel file layout

The following image shows the layout of the full report.

![The layout of the Quickstart Excel report with the Computer Data and Admin List sheets](/images/privilegesecure/4.2/discovery/admin/configuration/360042878654_oam-s1-1824_941x297.webp)
