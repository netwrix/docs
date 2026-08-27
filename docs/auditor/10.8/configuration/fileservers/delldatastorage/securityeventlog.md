---
title: "Configure Security Event Log Maximum Size"
description: "Configure Security Event Log Maximum Size"
sidebar_position: 20
---

# Configure Security Event Log Maximum Size

1. On your file server, create a new file system where the security log will be stored.
2. Mount this file system on a mount point, e.g., **/events**.
3. Ensure that it is accessible via the **\\`<file_server_name>`\C$\events** UNC path.
4. On the computer where Auditor Server is installed, open **Registry Editor**: navigate to **Start → Run** and type `regedit`.
5. Navigate to **File → Connect Network Registry** and specify the file server name.
6. Navigate to **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security** and set the **File** value to `C:\events\security.evt`.
7. Set the **MaxSize** value to `4 000 000 000 (decimal)`.
