---
description: >-
  When Netwrix Privilege Secure synchronizes with Entra ID, you may see a
  "Timeout during reading attempt" error in event logs. This article explains
  the cause and steps to increase the command timeout to allow synchronization
  to complete.
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
products:
  - privilege-secure-access-management
sidebar_label: Timeout During Reading Attempt Error
tags: []
title: "Timeout During Reading Attempt Error"
knowledge_article_id: kA0Qk0000000XC5KAM
---

# Timeout During Reading Attempt Error

## Symptom

Netwrix Privilege Secure prompts the following error in Entra ID (formerly Azure Active Directory) event logs:

```
Data processing error: Exception while reading from stream,
Timeout during reading attempt
```

## Cause

In larger Entra ID environments (e.g., with 9000 users or more), timeouts may hinder Entra ID synchronization.

## Resolution

Adjust the timeout setting to prevent the synchronization from being interrupted prematurely:

1. On the NPS server, locate the NPS Database Configuration Tool in ` %ProgramFiles%\Stealthbits\PAM\DatabaseConfig\DatabaseConfigUI` by default.
2. Run the `NPS.DbCfg.exe` tool.
3. Locate the **Command Timeout** line and increase the value to `3600`. The extended timeout should allow the Entra ID synchronization to complete.
4. Click **Save** to save changes.
