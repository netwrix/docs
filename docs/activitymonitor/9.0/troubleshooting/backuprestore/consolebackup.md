---
title: "Console Backup"
description: "Console Backup"
sidebar_position: 30
---

# Console Backup

**Step 1 –** Back up the configuration file:

**%ALLUSERSPROFILE%\Netwrix\Activity Monitor\Console\Agents.ini**

**Step 2 –** Back up the license file:

**%ALLUSERSPROFILE%\Netwrix\Activity Monitor\Console\FileMonitor.lic**

**Step 3 –** Back up passwords.

The `Agents.ini` file stores agent credentials in an encrypted form using PSAPI. You can only decrypt them on the same Windows workstation. To restore the configuration on a different workstation, back up the passwords separately.

All key components necessary for data recovery have now been backed up for the console.
