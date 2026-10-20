---
title: "Bulk onboarding and reporting"
description: "Decide when to use the Quickstart tool or the Bulk Actions UI to report on systems and onboard many systems, including Linux, in bulk."
sidebar_position: 10
---

The Quickstart tool is a command-line tool that is released with Netwrix Privilege Secure for Discovery. It generates data for deploying Protect mode, and it pushes changes to many systems at once. The tool reads from and writes to the product through the REST API, and it authenticates with an API key.

## When to use the UI instead

For many bulk changes, the **Bulk Actions** feature in the UI is simpler, because it needs no extra software. Use Bulk Actions to select systems by filter or by file and to change scan modes, Protect modes, persistence, EDR policies, Offline Access Management (OAM) policies, and accounts in the inventory. For more information, see [Bulk actions](../../admin/systems/bulk-actions.md).

## What the Quickstart tool covers that the UI doesn't

- An Excel report of systems and their administrator accounts, built from an organizational unit (OU), a list of OUs, or a list of systems. You edit the report and upload it again, which is a round trip. For more information, see [Report and update systems](./report-and-update-systems.md).
- Bulk registration of Linux systems from an Excel file. For more information, see [Register Linux systems by using the API](./register-linux-systems.md).
- Setting the directory bridging strategy for Linux systems.
- Assigning a sudoers file to many Linux systems at once.
- A preview mode (`--dry-run`) that shows the changes before it applies them.

## Workflow

1. [Install the Quickstart tools](./install-the-quickstart-tools.md) on a computer that can reach the product.
2. Generate a report for the systems that you want to roll out.
3. Edit the report. The [report field reference](./report-field-reference.md) describes each column.
4. Preview the changes with `--dry-run`, and then apply them.

To track how standing privilege decreases as you move systems into Protect mode, see [Measure standing privilege reduction](./measure-standing-privilege-reduction.md).
