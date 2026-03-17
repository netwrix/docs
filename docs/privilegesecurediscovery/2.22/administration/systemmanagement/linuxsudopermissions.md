---
title: "Linux: Replicate Sudo Permissions to Many Systems Using QuickStart"
description: "Linux: Replicate Sudo Permissions to Many Systems Using QuickStart"
sidebar_position: 30
---

# Linux: Replicate Sudo Permissions to Many Systems Using QuickStart

Linux: Replicate Sudo Permissions to Many Systems Using QuickStart

# Linux: Replicate Sudo Permissions to Many Systems Using QuickStart

Privilege Secure can replicate sudo permissions stored for one system to many systems using
QuickStart.

**Step 1 –** Backup the /etc/sudoers files on the target systems.  Example:

- ```sudo cp /etc/sudoers /etc/sudoers.`date +%Y.%m.%d````

**Step 2 –** Do a targeted QuickStart download, or filter a full QuickStart spreadsheet to the
desired systems.  With the exception of header rows, you can delete all unnecessary rows in the
Computer Data sheet and all rows from the Admin List sheet.

**Step 3 –** In the Privilege Secure UI -> Grant Access:

- Find the system with the sudoers permission that are to be replicated to other systems.
- Click the 'Sudoers' button.
- At the top of page showing the sudo permissions set, you'll see an informational ( i ) that you
  can click to copy the ID for this sudo permissions set.

**Step 4 –** On the QuickStart spreadsheet with the desired systems.

- Paste the ID in column "Set Sudoers Representation" for systems you want to user that sudoers file
  with. Columns are hidden in screenshot below for a more concise example.
- Save the QuickStart spreadsheet.
- Perform a QuickStart `--dry-run` to verify that the correct Sudoers Representation will be applied
  to the desired systems:
- Run the QuickStart upload. The sudoers will be altered on the next automatic or manual scan.
- **NOTE:** You can apply immediately with `--scan` option, but that does lengthen the QS upload
  time.
- Verify updated system in the Privilege Secure UI -> Grant Access page using the 'sudoers' button.
