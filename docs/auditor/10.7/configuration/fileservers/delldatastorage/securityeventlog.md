---
title: "Configure Security Event Log"
description: "Configure Event Log path, maximum size, and retention on Dell Data Storage devices"
sidebar_position: 20
---

# Configure Security Event Log

## Configure Event Log path, maximum size, and retention using "Registry Editor"

**Step 1 -** On your file server, create a new file system (e.g., with name _events_) where the security log will be stored
with a minimum size of `4GiB`: **Web UI -> Storage -> File -> File System Tab** and press "+".

**Step 2 -** Ensure it's accessible with the account for collecting data via
the **"\file_server_name\C$\events"** UNC path.

**Step 3 -** On the computer where Auditor Server is installed, open **Registry Editor**: navigate
to **Start -> Run** and type _"regedit"_.

**Step 4 -** Navigate to **File → Connect Network Registry** and specify the _"file server name"_.

**Step 5 -** Navigate to **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security**.

**Step 6 -** Set the **File** value to _"C:\events\security.evt"_.

**Step 7 -** Set the **MaxSize** _ffff0000 (hexadecimal)_ or _4,294,901,760 (decimal)_. Select the matching Base option in the _"Edit DWORD Value"_ dialog before entering the value.

**Step 8 -** Set the **Retention** value to _0 (hex or decimal)_. This configures the log to overwrite events as needed instead of retaining them.


## Verify Event Log settings using **Computer Management** console

**Step 1 -** On the computer where Auditor Server is installed, open **Computer Managment**: navigate
to **Start -> Run** and type _"compmgmt.msc /computer=file_server_name"_ or right-click _Start_
and select _"Computer Management"_ in the menu.

**Step 2 -** Navigate to **System tools -> Event Viewer -> Classic Event Viewer**, expand the "Global Log" list and
right-click _Security_ and select _Properties_.


**NOTE:** Set the **"Log name"** (_File_ in the registry) using **Registry Editor**. The **"Security Properties"** dialog doesn't let you change it.

**NOTE:** **Maximum log size** corresponds to _MaxSize_ in the registry. Security Properties displays it in KB, whereas **Registry Editor** displays it in bytes: _4,294,901,760 Bytes = 4,194,240 KB_

**NOTE:** **"Override events as needed"** switch corresponds to _Retention = 0_ in the registry
