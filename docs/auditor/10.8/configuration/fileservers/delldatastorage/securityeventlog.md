---
title: "Configure Security Event Log Maximum Size"
description: "Configure Security Event Log Maximum Size"
sidebar_position: 20
---

# Configure Security Event Log Maximum Size

Follow the steps to configure Event Log maximum size:

**Step 1 –** On your file server, create a new file system where the security log will be stored.

**Step 2 –** Mount this file system on a mount point, e.g., **/events**.

**Step 3 –** Make sure that it is accessible via the **\\`<file_server_name>`\C$\events** UNC path.

**Step 4 –** On the computer where Auditor Server is installed, open **Registry Editor**: navigate
to **Start → Run** and type _"regedit"_.

**Step 5 –** Navigate to **File → Connect Network Registry** and specify the file server name.

**Step 6 –** Navigate to **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security**
and set the **File** value to _"C:\events\security.evt"_.

**Step 7 –** Set the **MaxSize** value to _"4 000 000 000 (decimal)"_.
