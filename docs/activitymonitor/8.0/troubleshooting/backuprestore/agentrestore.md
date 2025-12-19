---
title: "Agent Restoration"
description: "Agent Restoration"
sidebar_position: 20
---

# Agent Restoration

Follow the steps to restore the configuration, Active Directory configuration file, and activity log
files for Activity Monitor Agents deployed on file system servers, SharePoint servers, and domain
controllers.

:::warning
Restore the agent before restoring the console to ensure connectivity and monitoring
functionality
:::


**Step 1 –** Reinstall the Activity Monitor Agents.

**Step 2 –** Replace the `SBFileMon.ini` file with the backed up configuration file.

**Step 3 –** Replace the `SAMConfig.xml` file with the backed up Active Directory event data file.

**Step 4 –** Disable all activity monitoring on the Monitored Hosts and Monitored Domains page.

**Step 5 –** Use the Console to update the passwords if the agent is restored on a different server.

**Step 6 –** Use the Console to update the archive password, or the archive location if the location
is moved.

**Step 7 –** Restore the log files with the backed up activity log files.

**Step 8 –** Enable all activity monitoring.

The configuration, Active Directory event data file, and activity log files are now restored on the
Activity Monitor Agents.
