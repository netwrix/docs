---
description: >-
  Explains how to resolve 0x80040605 "Connection failed" errors in Netwrix
  Auditor when the target server is unreachable, including likely causes and
  remediation steps. Provides guidance about required services and disk space
  considerations for the Long-Term Archive.
keywords:
  - 2147747333
  - Connection failed
  - Health Log
  - Netwrix Auditor
  - services
  - Long-Term Archive
  - disk space
  - audit data collection
products:
  - auditor
sidebar_label: 0x80040605 Error − Connection Failed
tags: []
title: "0x80040605 Error − Connection Failed"
knowledge_article_id: kA00g000000H9YWCA0
---

# 0x80040605 Error − Connection Failed

## Symptoms

Either of the following error messages is prompted in your Health Log or upon the Netwrix Auditor launch:

```text
Connection failed
0x80040605 Failed to process a request because the target server is unreachable
```

```text
An error occurred while sending email:
0x80040605 Failed to process a request because the target server is unreachable
```

## Causes

One (or more) of the following services has stopped in the Netwrix Auditor server:

- Netwrix Auditor Archive Service
- Netwrix Auditor Configuration Server Service
- Netwrix Auditor Core Service
- Netwrix Auditor Data Collection Service

## Resolution

Review the services running in the Netwrix Auditor server − make sure the services are running with their startup type set to **Automatic**.

> **IMPORTANT:** If the disk storing Long-Term Archive is running out of space, you'll corresponding events in Health Log. When the free disk space is below 3GB, the Netwrix services responsible for audit data collection will be stopped, preventing the data collection. For additional information on reducing disk space consumption, refer to the following article: [Netwrix Auditor Consumes Disk Space — Recommendations](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/netwrix-auditor-consumes-disk-space-recommendations).

## Related articles

- [Netwrix Auditor Consumes Disk Space — Recommendations](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/netwrix-auditor-consumes-disk-space-recommendations)
