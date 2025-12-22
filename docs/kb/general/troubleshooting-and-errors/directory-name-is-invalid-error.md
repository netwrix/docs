---
description: >-
  Netwrix Data Classification reports "The directory name is invalid" when a
  configured file share is unavailable or inaccessible. This article explains
  the symptom, likely causes, and recommended resolutions.
keywords:
  - Directory name is invalid
  - file share
  - network share
  - Netwrix Data Classification
  - Error refreshing source
  - '%share_path%'
  - FileSystemConfigManager.Refresh
  - conceptCollector
products:
  - general
sidebar_label: Directory Name Is Invalid Error
tags:
  - troubleshooting-and-errors
title: "Directory Name Is Invalid Error"
knowledge_article_id: kA0Qk0000000bIvKAI
---

# Directory Name Is Invalid Error

## Symptom

Netwrix Data Classification prompts the following error:

```text
Component: conceptCollector
Level: Error
FileSystemConfigManager.Refresh()
Error refreshing source %share_path%: The directory name %share_path% is invalid.
```

## Cause

A file share is unavailable.

- The affected share does not exist or was removed. The source is still added in Netwrix Data Classification.
- The Netwrix Data Classification service account does not have permissions to access the source.

## Resolutions

- Review the path and verify the share is still available. If the affected share is not available, delete the source to stop the error.
- Review the path and verify the Netwrix Data Classification service account has Full Control permissions to access the shared folder.
