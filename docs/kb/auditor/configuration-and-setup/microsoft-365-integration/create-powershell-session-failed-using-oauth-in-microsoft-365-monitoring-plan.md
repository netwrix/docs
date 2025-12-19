---
description: >-
  Netwrix Auditor shows an error in the Health Log that a PowerShell session
  creation failed using OAuth for a Microsoft 365-based monitoring plan. This
  article explains the cause and the steps to enable basic authentication for
  WinRM on the affected server.
keywords:
  - WinRM
  - basic authentication
  - OAuth
  - Microsoft 365
  - PowerShell
  - Health Log
  - Office 365 Audit Service
  - Event ID 2002
products:
  - auditor
sidebar_label: Create Powershell Session Failed Using OAuth in Mi
tags: []
title: "Create Powershell Session Failed Using OAuth in Microsoft 365 Monitoring Plan"
knowledge_article_id: kA04u000000wnlWCAQ
---

# Create Powershell Session Failed Using OAuth in Microsoft 365 Monitoring Plan

## Symptom

The following error is prompted in Health Log for your Microsoft 365-based monitoring plan in Netwrix Auditor:

```
Source: Office 365 Audit Service
Event ID: 2002
Computer: %affected_server%
Monitoring Plan: %Microsoft_365-based_plan_name%
Cannot execute the PowerShell command.
Error: Create Powershell Session is failed using OAuth
```

## Cause

Basic authentication for Windows Remote Management is disabled in your environment.

## Resolution

Enable basic authentication for WinRM in the affected server:

1. Run the following line in the elevated Command Prompt to review the authentication methods in your environment:

```text
winrm get winrm/config/client/auth
```

2. If the `Basic` option equals `false`, run the following line to enable it:

```text
winrm set winrm/config/client/auth @{Basic="true"}
```

> **IMPORTANT:** If basic authentication is disabled via GPO in your environment, you can create a separate GPO to enable it for the affected server specified in the error message.
