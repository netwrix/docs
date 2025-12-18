---
description: >-
  Explains how to resolve the scheduled task logon session error 0x80070520 by
  disabling the Windows policy that prevents storing credentials on the affected
  computer.
keywords:
  - 2147943712
  - scheduled task
  - Network access
  - store credentials
  - Netwrix Auditor
  - rsop.msc
  - Resultant Set of Policy
products:
  - auditor
sidebar_label: 'Error: "The new task has been created but may not '
tags: []
title: "Error: "The new task has been created but may not run because of an error:" Exception from HRESULT: 0x80070520.""
knowledge_article_id: kA00g000000H9ZBCA0
---

# Error: "The new task has been created but may not run because of an error: Exception from HRESULT: 0x80070520."

## Problem

The Netwrix Auditor scheduled task does not start and the following error occurs:

**"The new task has been created but may not run because of an error: A specified logon session does not exist. It may already have been terminated. (Exception from HRESULT: 0x80070520)."**

---

## Cause

The "**Network access: Do not allow storage of credentials or .NET Passports for network authentication**" policy does not allow to store passwords and credentials in the Netwrix Auditor scheduled task.

---

## Resolution

Disable the "**Network access: Do not allow storage of passwords and credentials for network authentication**" policy on the computer where this issue appears.

To disable the policy, please perform the following steps:

1. Select **Start -> Run** and type `rsop.msc`.
2. In the Resultant Set of Policy dialog, navigate to **Computer Configuration -> Windows Settings -> Security Settings -> Local Policies -> Security Options**.
3. Select the policy on the right and change the Source GPO accordingly.
