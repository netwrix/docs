---
description: >-
  When the Netwrix Auditor for Windows Server Audit Service fails to run on the
  host, EventID 2007 appears in the System Health log and the service stops
  shortly after start. This article explains the cause and shows how to remove
  the invalid certificate to restore the service.
keywords:
  - EventID 2007
  - NwWsaHostSvc
  - Windows Server Audit Service
  - certificate
  - service stops
  - System Health log
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'Netwrix Auditor for Windows Servers: EventID 2007:'
tags: []
title: "Netwrix Auditor for Windows Servers: EventID 2007: Could Not Connect to Windows Server Audit Service"
knowledge_article_id: kA04u000001110YCAQ
---

# Netwrix Auditor for Windows Servers: EventID 2007: Could Not Connect to Windows Server Audit Service

## Symptom

The Netwrix Auditor for Windows Server Audit Service fails to run on the computer that hosts Netwrix Auditor Server. Upon starting the service, it would immediately stop. Any subsequent attempts to re-start the service would result in the service stopping again within ~10 seconds. For each attempt, the Netwrix Auditor System Health log contains EventID 2007:

```text
 Could not connect to Windows Server Audit Service. Check if NwWsaHostSvc service is running.
```

## Cause

This error occurs due to invalid Netwrix Auditor certificate.

## Resolution

1. On the computer that hosts Netwrix Auditor Server, open the **Services** snap-in and stop the **Netwrix Auditor for Windows Server** service.
2. On the same workstation, open the **Microsoft Management Console (MMC)**.
3. Navigate to **Add or Remove Snap-ins** -> **Certificates** -> **Computer account** -> **Local computer** -> **ok** -> **open** `certificates\Netwrix Auditor for Windows Server` -> **Certificates**.
4. Remove the **Netwrix Auditor** certificate.
5. Start the the **Netwrix Auditor for Windows Server** service you stopped on the step 1.
