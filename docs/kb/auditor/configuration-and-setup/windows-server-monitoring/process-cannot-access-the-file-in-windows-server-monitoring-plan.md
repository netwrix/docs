---
description: >-
  When configuring a Windows Server monitoring plan, Netwrix Auditor may log an
  Event ID 1016 indicating that a file is in use. This article explains the
  cause and shows how to resolve it by specifying the computer FQDN.
keywords:
  - Windows Server monitoring
  - Netwrix Auditor
  - Event ID 1016
  - process cannot access the file
  - FQDN
  - NetBIOS
products:
  - auditor
sidebar_label: Process Cannot Access the File in Windows Server M
tags: []
title: "Process Cannot Access the File in Windows Server M"
knowledge_article_id: kA04u00000110yrCAA
---

# Process Cannot Access the File in Windows Server M

## Symptom

While configuring a Windows Server monitoring plan, the following error is prompted in Netwrix Auditor System Health Log:

```text
Event ID: 1016
The collector Registry data provider gathering data on the server (server name) due to the following error:
The process cannot access the file because it is being uses by another process
```

## Cause

A FQDN name of the computer item should be specified instead of NetBIOS format.

## Resolution

1. Navigate to your Windows Server monitoring plan and click **Edit**.
2. On your plan editing wizard, select your computer item and click **Edit item** on the right.
3. Provide a FQDN name of the computer. For example, `DC.corp.local`.
