---
description: >-
  Users cannot save reports as Excel, Word, or PowerPoint files with SSRS 2019
  due to a registry access error. This article describes the symptom, cause, and
  steps to grant the required registry permission.
keywords:
  - SSRS 2019
  - Avalon.Graphics
  - registry
  - rrRenderingError
  - ReportingServicesService.exe
  - Excel
  - Word
  - PowerPoint
products:
  - auditor
sidebar_label: Unable to Save Reports as Office Document with SSRS 2019
tags: []
title: "Unable to Save Reports as Office Document (Excel, Word, or PowerPoint) with SSRS 2019"
knowledge_article_id: kA0Qk0000000WRJKA2
---

# Unable to Save Reports as Office Document (Excel, Word, or PowerPoint) with SSRS 2019

## Symptom

Users are unable to save any reports as Excel, Word, or PowerPoint files with SSRS 2019. PDFs and some other formats work, but the Office-specific ones fail with the following error:

```text
An error occurred during rendering of the report. (rrRenderingError)
An error occurred during rendering of the report.
The type initializer for 'MS.Utility.EventTrace' threw an exception.
Requested registry access is not allowed.
```

## Cause

The **ReportingServicesService.exe** process is getting an ACCESS DENIED error for the **Avalon.Graphics** (Microsoft) registry key.

## Resolution

To resolve the issue, you need to grant the the execution account (not the account that runs the service) **Read access** to the **Avalon.Graphics** registry key:

1. On the computer that hosts your SQL Server instance, open **Registry Editor**.
2. Navigate to `HKEY_LOCAL_MACHINE\Software\Microsoft\Avalon.Graphics`.
3. Assign the **Read** permission to all occurrences of the **Avalon.Graphics** key in the registry.
