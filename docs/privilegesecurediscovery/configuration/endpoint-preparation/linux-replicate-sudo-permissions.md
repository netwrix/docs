---
title: "Replicate sudo permissions to many systems"
description: "Copy the sudo permissions that Privilege Secure for Discovery stores for one Linux system to many other systems by using the Quickstart tool."
sidebar_position: 80
---

Privilege Secure for Discovery can replicate the sudo permissions that it stores for one system to many systems with the Quickstart tool. This procedure assumes that you installed the tool. For more information, see [Install the Quickstart tools](../bulk-onboarding/install-the-quickstart-tools.md).

## Replicate the sudo permissions

1. Back up the `/etc/sudoers` file on each target system. For example:

   ```bash
   sudo cp /etc/sudoers /etc/sudoers.$(date +%Y.%m.%d)
   ```

2. Generate a targeted Quickstart report, or filter a full Quickstart spreadsheet to the systems you want. In the **Computer Data** sheet, delete all unnecessary rows except the header row. Delete all rows from the **Admin List** sheet except its header row.
3. In the UI, go to **Access** > **Grant Access** and find the system whose sudoers permissions you want to replicate.
4. Click **Sudoers**.
5. At the top of the page that shows the sudo permissions, click the information icon to copy the ID of this sudo permissions set.
6. In the Quickstart spreadsheet, paste the ID in the **Set Sudoers Representation** column for each system that should use this sudoers file.
7. Save the spreadsheet.
8. Run the Quickstart tool with `--dry-run` to verify that the correct sudoers representation will be applied to the systems:

   ```bash
   python reports.py --protect-mode-file <report-file>.xlsx --dry-run
   ```

9. Run the same command without `--dry-run` to upload the changes.

   The sudoers file changes at the next automatic or manual scan. To apply it immediately, add the `--scan` option. This option lengthens the upload time.

10. In the UI, open each system on the **Grant Access** screen and click **Sudoers** to verify the update.

For the complete command options, see [Report and update systems](../bulk-onboarding/report-and-update-systems.md).
