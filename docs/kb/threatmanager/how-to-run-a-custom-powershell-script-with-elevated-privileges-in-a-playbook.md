---
description: 'Shows how to run a custom PowerShell script with elevated privileges in a playbook by using Invoke-WithImpersonation. Requires version 2.7 SP1 HF8 or later and a credential profile with elevated privileges.'
keywords:
- PowerShell
- elevated privileges
- playbook
- Invoke-WithImpersonation
- credential profile
- 2.7 SP1 HF8
- script
- Threat Manager
products:
- threat-manager
title: 'How to run a custom powershell script with elevated privileges in a playbook'
knowledge_article_id: kA04u0000000K7UCAU
---

# How to run a custom powershell script with elevated privileges in a playbook

## Summary
How to run a custom PowerShell script with elevated privileges in a playbook

## Issue
A custom PowerShell script that requires elevated privileges will not run, even if the credential profile has elevated privileges.

## Instructions
1. Upgrade the customer to `2.7 SP1 HF8` or greater
2. In the action's **Credential Profile**, select a profile that has elevated privileges.
3. Put this line of code at the start of the script, and paste the rest of the former script into the code block.

```powershell
Invoke-WithImpersonation -ScriptBlock { #Insert code in here }
```