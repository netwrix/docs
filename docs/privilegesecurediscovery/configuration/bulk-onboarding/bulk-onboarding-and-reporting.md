---
title: "Bulk onboarding and reporting"
description: "Decide when to use the Quickstart tool or Bulk Actions to report on many systems, change their policies, and register Linux systems."
sidebar_position: 10
---

The Quickstart tool is a command-line tool that ships with Netwrix Privilege Secure for Discovery. It exports your systems and their administrator accounts to an Excel workbook. You edit the workbook and upload it to change many systems in one run. The tool calls the product REST API and authenticates with an API key.

## Choose between Bulk Actions and the Quickstart tool

Bulk Actions in the interface need no extra software. On the **Management** > **Systems** page, select the systems by filter or by file, and then select an action. The actions include Scan Policy, Protect Policy, Set EDR Configuration, Set Offline Access, Set Accounts Persistent, Add/Update Account, and Remove Account. For the procedure, see [Run bulk actions on systems](../../admin/systems/bulk-actions.md).

Use the Quickstart tool when you need something that Bulk Actions don't offer:

- A review step. You export the current state, review it in Excel, and then upload your edits.
- A preview. The `--dry-run` argument lists every change without applying it.
- Linux settings. The tool sets the directory bridging strategy and assigns a sudoers file to many Linux systems at once.
- Linux registration. The tool registers many Linux systems from an Excel file.

## Workflow

1. [Install the Quickstart tools](./install-the-quickstart-tools.md) on a computer that can reach the product.
2. Export a report for the systems that you want to change. See [Report and update systems](./report-and-update-systems.md).
3. Edit the report. The [report field reference](./report-field-reference.md) describes each column.
4. Preview the changes with `--dry-run`, and then upload the report without it.

To register Linux systems, see [Register Linux systems by using the API](./register-linux-systems.md). To track how standing privilege decreases as you move systems into Protect mode, see [Measure standing privilege reduction](./measure-standing-privilege-reduction.md).
