---
title: "Configure Security Event Log"
description: "Configure Security Event Log"
sidebar_position: 20
---

# Configure Security Event Log

Follow the steps to configure Event Log file path, maximum size, and retention:

**Step 1 -** On your file server, create a new file system (e.g., with name _events_) where the security log will be stored
with a minimum size of `4GiB`: **Unisphere Web UI -> Storage -> File -> File System Tab** and press "+"

**Step 2 -** Make sure that it is accessible with DPA via the **\\<file_server_name>\C$\events** UNC path.

**Step 3 -** On the computer where Auditor Server is installed, open **Registry Editor**: navigate
to **Start → Run** and type _"regedit"_.

**Step 4 -** Navigate to **File → Connect Network Registry** and specify the _"file server name"_.

**Step 5 -** Navigate to **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security**

**Step 6 -** Set the **File** value to _"C:\events\security.evt"_.

**Step 7 -** Set the **MaxSize** value to _ffff0000 (hex) or 4 294 901 760 (decimal)_.

**Step 8 -** Set the **Retention** value to _0 (hex or decimal)_


You can also verify Event Log settings using **Computer Management** console:

**Step 1 -** On the computer where Auditor Server is installed, open **Registry Editor**: navigate
to **Start → Run** and type _"compmgmt.msc /computer=<file_server_name>"_ or right-click _Start_
and select _"Computer Management"_ in the menu.

**Step 2 -** Navigate to **System tools -> Event Viewer -> Classic Event Viewer**, expand the "Global Log" list and
right-click _Security_ and select _Properties_


**NOTE:**
- You can't change the **"Log name"** (_File_ in the registry) in the **"Security Properties"**,
set it using **Registry Editor**
- **Maximum log size** corresponds to _MaxSize_ in the registry and shows in KBytes in the **"Security Properties"**,
whereas in **"Registry Editor"** it shows in Bytes: _4 294 901 760 Bytes = 4 194 240 KB_
- **"Override events as needed"** switch corresponds to _Retention = 0_ in the registry