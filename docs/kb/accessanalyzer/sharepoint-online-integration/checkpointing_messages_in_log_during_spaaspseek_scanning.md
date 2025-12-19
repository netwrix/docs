---
description: >-
  This article explains the meaning of the "Checkpointing" entry message found in the DEBUG log during SPAA/SPSEEK System Scanning.
keywords:
  - checkpointing
  - SPAA
  - SPSEEK
  - DEBUG log
  - system scan
sidebar_label: Checkpointing Messages in Log
tags:
  - sharepoint-online-integration
title: "Checkpointing Messages in Log During SPAA/SPSEEK Scanning"
knowledge_article_id: kA0Qk0000002lxJKAQ
products:
  - access-analyzer
---

# Checkpointing Messages in Log During SPAA/SPSEEK Scanning

## Question

What does this `Checkpointing` entry message, in the DEBUG log for my SPAA/SPSEEK System Scan, mean?

```plaintext
DEBUG  SHAREPOINTACCESS  Stealthbits.StealthAUDIT.DataCollectors.SPAA.Tasks.ScanSharePointAccessTask.InternalProcessRecord  "[C:1894] Checkpointing..."  REDACTED.SHAREPOINT.COM
```

## Answer

Checkpointing refers to the process of writing any pending data to the Tier 2 database. This happens throughout the scan and is handled by the main thread, while other types of processing may still be ongoing. Seeing a checkpoint does not necessarily indicate a specific event—the system is just flushing data.

> **NOTE:** In general, checkpoint messages in the logs are positive. They indicate that the scan is active and not stalled, even if there is no other visible progress at that moment.