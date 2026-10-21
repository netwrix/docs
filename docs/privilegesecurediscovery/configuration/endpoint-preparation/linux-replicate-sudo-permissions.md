---
title: "Replicate sudo permissions to many systems"
description: "Apply the sudoers content that Privilege Secure for Discovery stores for one Linux system to many other Linux systems with the Quickstart tool."
sidebar_position: 80
---

You can copy the sudoers content that Netwrix Privilege Secure for Discovery stores for one Linux system to many systems with the Quickstart tool. The product stages the content on each target system. It writes the content to the system at the next scan when **Protect Mode** is **New Accounts: JITA** or **New Accounts: Deny**. For how staged content works, see [Edit sudoers with granular sudo control](./linux-granular-sudo.md).

## Prerequisites

- You installed the Quickstart tool. See [Install the Quickstart tools](../bulk-onboarding/install-the-quickstart-tools.md).
- The target systems are Linux systems that the product has registered.
- You backed up `/etc/sudoers` and `/etc/sudoers.d` on each target system, for example:

  ```bash
  sudo cp /etc/sudoers /etc/sudoers.$(date +%Y.%m.%d)
  ```

## Replicate the sudoers content

1. Generate a Quickstart report for the target systems, or filter a full report to those systems. In the **Computer Data** worksheet, delete the rows of the systems that you don't want to change. Keep the header row. In the **Admin List** worksheet, delete every row except the header row.
2. In the UI, go to **Access** > **Grant Access** and find the system with the content you want to copy.
3. Click **Sudoers**.
4. Click the information icon at the top of the page to copy the ID of the content.
5. In the report, paste the ID in the **Set Sudoers Representation** column of each target system.
6. Save the report.
7. Preview the changes:

   ```bash
   python reports.py --protect-mode-file <report-file>.xlsx --dry-run
   ```

   The output lists `Updating Sudoers Representation on <count> systems` and one line for each system.
8. Run the same command without `--dry-run`. Add `--scan` to scan each changed system right away. Without it, the next scheduled or manual scan applies the change.
9. For each target system, open **Access** > **Grant Access** and click **Sudoers** to confirm the content.

If a system is not a Linux system, or the ID doesn't exist, the product skips the system and reports the reason. For all command options, see [Report and update systems](../bulk-onboarding/report-and-update-systems.md).
