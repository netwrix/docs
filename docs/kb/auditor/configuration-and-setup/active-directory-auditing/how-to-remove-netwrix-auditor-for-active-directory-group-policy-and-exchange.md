---
description: >-
  Step-by-step instructions to completely uninstall Netwrix Auditor for Active
  Directory, Group Policy and Exchange Servers, including removing files,
  scheduled tasks, registry keys, and SQL databases. Includes instructions to
  remove the Lightweight Agent from domain controllers.
keywords:
  - uninstall
  - Netwrix Auditor
  - Active Directory
  - Group Policy
  - Exchange
  - audit archive
  - registry
  - scheduled tasks
  - SQL Server
products:
  - auditor
sidebar_label: How to remove Netwrix Auditor for Active Directory
tags: []
title: 'How to remove Netwrix Auditor for Active Directory, Group Policy and Exchange?'
knowledge_article_id: kA00g000000Pbd1CAC
---

# How to remove Netwrix Auditor for Active Directory, Group Policy and Exchange?

How can I remove **Netwrix Auditor for Active Directory, Group Policy and Exchange**?

To completely uninstall **Netwrix Auditor for Active Directory, Group Policy and Exchange Servers**, perform the following steps:

1. Remove the program using Control Panel.
2. Delete the entire contents of the Netwrix Auditor Audit Archive folder (to locate the folder correctly see **Netwrix Auditor console -> Settings -> Audit Archive**). By default, `C:\ProgramData\NetWrix\ManagementConsole\Data`.
3. Delete the following directory:
   - **Vista or above**: `C:\ProgramData\NetWrix`
   - **Windows XP, 2003 Server**: `C:\Documents and Settings\All Users\Application Data\NetWrix` and `C:\Program Files\Common Files\NetWrix`.
4. Delete all scheduled Tasks that start with "NetWrix".
5. Delete the program installation folder.
6. Launch `regedit` and remove the following directory:
   - **for 32-bit OS**: `HKEY_LOCAL_MACHINE\SOFTWARE\NetWrix`
   - **for 64-bit OS**: `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\NetWrix`
7. To remove all historical data from your SQL Server, remove all NetWrix databases using MS SQL Server Management Studio.
8. To remove Netwrix Auditor Lightweight Agent from Domain Controllers, refer to this [KB article](http://www.netwrix.com/knowledge_base.html?mode=sol&solution=00000818).
