---
description: >-
  Explains the cause and resolution of the "Snapshot saving process was
  interrupted" error when collecting snapshot files in Netwrix Auditor, and
  recommends adding antivirus exclusions.
keywords:
  - snapshot saving
  - snapshot
  - antivirus exclusions
  - EDR
  - XDR
  - File Storage Audit Service
  - Netwrix Auditor
  - data collection
  - snapshot files
products:
  - auditor
sidebar_label: 'Error: Snapshot Saving Process Was Interrupted'
tags: []
title: 'Error: Snapshot Saving Process Was Interrupted'
knowledge_article_id: kA0Qk0000001LdVKAU
---

# Error: Snapshot Saving Process Was Interrupted

## Symptom

You receive the following error message while collecting snapshot files:

```text
Source:File Storage Audit Service 
             
An error has occurred during the data processing: Snapshot saving process was interrupted.
Some snapshot files failed to be updated and are non-consistent.
Data collection will be performed as initial. .
```

## Cause

An antivirus or EDR/XDR solution in your environment affects the operation of your Netwrix Auditor instance.

## Resolution

Add antivirus exclusions to both your Netwrix Auditor monitoring plan and to targets by referring to the following article: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor).

## Related Articles

- [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
