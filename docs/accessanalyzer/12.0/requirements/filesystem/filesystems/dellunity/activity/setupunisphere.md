---
title: "Unity Initial Setup with Unisphere"
description: "Unity Initial Setup with Unisphere"
sidebar_position: 20
---

# Unity Initial Setup with Unisphere

To configure the initial setup for a Unity device with Unisphere, complete the following steps.

**Step 1 –** Edit the NAS Server > Protection and Events > Events Publishing > Select Pool settings:

- Add CEPA server – This is the server where CEE is installed. Use the same server for the Activity
  Monitor activity agent when possible.
- Enable the following events for Post Events.

Required Unity events needed for CIFS Activity:

![NAM Required Events For CIFS](/images/activitymonitor/8.0/config/dellunity/eventscifs.webp)

Required Unity events needed for NFS Activity:

![NAM Required Events For NFS](/images/activitymonitor/8.0/config/dellunity/eventsnfs.webp)

**Step 2 –** Enable Events Publishing:

- Edit the FileSystem > Advanced settings:

    - NFS Events Publishing – Enabled (required for NFS protocol monitoring)
    - SMB Events publishing – Enabled (required for SMB / CIFS protocol monitoring)

After you complete the Unity setup, configure and enable monitoring with the Activity
Monitor.
