---
description: >-
  Instructions to enable GPO software installation logging to troubleshoot Logon
  Prompt Extension deployment failures and how to collect and submit the
  diagnostic log.
keywords:
  - Logon Prompt Extension
  - GPO
  - AppMgmtDebugLevel
  - Appmgmt.log
  - troubleshooting
  - Windows registry
  - deployment
products:
  - auditor
sidebar_label: Logon Prompt Extension deployment problems
tags: []
title: "Logon Prompt Extension deployment problems"
knowledge_article_id: kA00g000000PbdXCAS
---

# Logon Prompt Extension deployment problems

## Problem
Logon Prompt Extension is not being deployed via GPO.

There could be several different reasons for this issue. You must collect additional information to support the investigation.

## Resolution
To investigate further, enable GPO software installation logging as described in the Microsoft KB article: http://support.microsoft.com/kb/249621

Follow these steps on the problematic client computer:

1. Launch `regedit` and navigate to the following key:
   - `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Diagnostics`
   - You may have to create the `Diagnostics` registry subkey if it is not present.

2. In the `Diagnostics` key create a new value:
   - Type: `DWORD`
   - Name: `AppMgmtDebugLevel`
   - Value: `4b (HEX)`

3. Reproduce the issue — try to install the Logon Prompt Extension via GPO.

4. Create a new ticket on our site (https://www.netwrix.com/support_ticket.html) and send the diagnostic file:
   - ` %SystemRoot%\DebugUserMode\Appmgmt.log `

**NOTE:** We recommend that you delete the `AppMgmtDebugLevel` registry value to avoid performance degradation after sending the log files to us.
