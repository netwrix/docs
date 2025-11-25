---
description: >-
  You receive Event ID 6103 when snapshot files fail to update during
  collection; this article explains the cause and instructs you to add antivirus
  and EDR/XDR exclusions for Netwrix Auditor.
keywords:
  - Event ID 6103
  - Netwrix Auditor
  - snapshot saving
  - antivirus exclusions
  - EDR
  - EDR/XDR
  - file share
  - File Storage Audit Service
products:
  - general
sidebar_label: 'Netwrix Auditor Health Log Error Event ID: 6103 Su'
tags:
  - documentation-and-reference
title: "Netwrix Auditor Health Log Error Event ID: 6103 Suggests Contacting Netwrix Technical Support"
knowledge_article_id: kA0Qk0000001LK9KAM
---

# Netwrix Auditor Health Log Error Event ID: 6103 Suggests Contacting Netwrix Technical Support

## Symptom

You receive the following error message while collecting snapshot files:

```text
Source:File Storage Audit Service 
Event ID:6103 
Computer:XXXX.XXX.local 
User:N/A 
Description:Monitoring plan: XXXX. 
Item: XXX.XX.X.XXX. 
             
An error has occurred during the data processing: Snapshot saving process was interrupted. Some snapshot files failed to be updated and are non-consistent. Data collection will be performed as initial. 
Windows-based computers: XXX.XX.X.XXX 
File shares:\\XXX.XX.X.XXX\XXXScan$
Contact Netwrix technical support at <a href="https://www.netwrix.com/support.html" target="_blank">www.netwrix.com/support.html</a>.
```

## Cause

An antivirus or EDR/XDR solution in your environment affects the operation of your Netwrix Auditor instance.

## Resolution

Add antivirus exclusions to both your Netwrix Auditor monitoring plan and to targets by referring to the following article: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor).

## Related Articles

- [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
