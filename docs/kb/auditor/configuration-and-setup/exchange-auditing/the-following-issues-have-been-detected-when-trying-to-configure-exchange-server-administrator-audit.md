---
description: >-
  Explains how to resolve the AdminAuditLogParameters error by setting
  AdminAuditLogParameters to "*" and provides the exact Set-AdminAuditLogConfig
  command to run in Exchange PowerShell.
keywords:
  - Exchange
  - AdminAuditLogParameters
  - Set-AdminAuditLogConfig
  - Administrator Audit Logging
  - PowerShell
  - AdminAuditLogCmdlets
products:
  - auditor
sidebar_label: 'The following issues have been detected when trying to configure Exchange Server Administrator Audit Logging'
tags: []
title: 'The following issues have been detected when trying to configure Exchange Server Administrator Audit Logging settings: Parameter "AdminAuditLogParameters" of cmdlet "Set-AdminAuditLogConfig" must be set to "*"'
knowledge_article_id: kA00g000000H9ZRCA0
---

# The following issues have been detected when trying to configure Exchange Server Administrator Audit Logging settings: Parameter 'AdminAuditLogParameters' of cmdlet 'Set-AdminAuditLogConfig' must be set to '*'

## Issue

You receive the follow error:

The following issues have been detected when trying to configure Exchange Server Administrator Audit Logging settings: Parameter 'AdminAuditLogParameters' of cmdlet 'Set-AdminAuditLogConfig' must be set to '*'

---

The AdminAuditLogParameter needs to be set to *

---

## Resolution

1. Run the following command within your Exchange PowerShell environment:

```powershell
Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets * -AdminAuditLogParameters *
```
