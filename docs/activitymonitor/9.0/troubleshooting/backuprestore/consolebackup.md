---
title: "Console Backup"
description: "Console Backup"
sidebar_position: 30
---

# Console Backup

Follow the steps to back up the list of agents managed on the Activity Monitor Console.

**Step 1 –** Back up the configuration file:

**%ALLUSERSPROFILE%\Netwrix\Activity Monitor\Console\Agents.ini**

**Step 2 –** Back up the license file:

**%ALLUSERSPROFILE%\Netwrix\Activity Monitor\Console\FileMonitor.lic**

**Step 3 –** Back up passwords.

Credentials for the agents are stored in the `Agents.ini` file in an encrypted form using PSAPI.
They can only be decrypted on the same Windows workstation. To be able to restore the configuration
on a different workstation, back up the passwords separately.

All key components necessary for data recovery have now been backed up for the console.
