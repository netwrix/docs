---
description: >-
  Fix the "Timeout during reading attempt" error during Entra ID synchronization
  in Privilege Secure by increasing the Command Timeout to 3600.
keywords:
  - Entra ID
  - Azure Active Directory
  - timeout
  - NPS.DbCfg.exe
  - Command Timeout
  - Netwrix Privilege Secure
  - synchronization
  - Stealthbits
  - NPS Database Configuration Tool
  - Timeout during reading attempt
products:
  - privilegesecure
sidebar_label: Timeout During Reading Attempt Error
tags:
  - kb
  - database-and-backend
title: "Timeout During Reading Attempt Error"
knowledge_article_id: kA0Qk0000000XC5KAM
---

# Timeout During Reading Attempt Error

## Symptom

Netwrix Privilege Secure for Access Management prompts the following error in Entra ID (formerly Azure Active Directory) event logs:

```
Data processing error: Exception while reading from stream,
Timeout during reading attempt
```

## Cause

In larger Entra ID environments (for example, with 9000 users or more), timeouts may hinder Entra ID synchronization.

## Resolution

Adjust the timeout setting to prevent the synchronization from being interrupted prematurely:

1. On the Privilege Secure server, locate the NPS Database Configuration Tool in ` %ProgramFiles%\Stealthbits\PAM\DatabaseConfig\DatabaseConfigUI` by default.
2. Run the `NPS.DbCfg.exe` tool.
3. Locate the **Command Timeout** line and increase the value to `3600`. The extended timeout should allow the Entra ID synchronization to complete.
4. Click **Save** to save changes.
