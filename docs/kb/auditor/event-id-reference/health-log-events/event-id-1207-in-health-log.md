---
description: >-
  Explains how to resolve Event ID 1207 in the Health Log when SharePoint
  monitoring reports an automatic SharePoint Core Service deployment failure.
  Describes the cause and the manual uninstall/reinstall steps for the Netwrix
  Auditor for SharePoint Core Service.
keywords:
  - Event ID 1207
  - Health Log
  - SharePoint Core Service
  - Netwrix Auditor
  - deployment failed
  - SharePoint monitoring
  - core service version mismatch
  - installation
products:
  - auditor
sidebar_label: Event ID 1207 in Health Log
tags: []
title: "Event ID 1207 in Health Log"
knowledge_article_id: kA00g000000H9d8CAC
---

# Event ID 1207 in Health Log

## Symptom

Your SharePoint monitoring plan prompts the following error message under Event ID 1207 in Health Log:

```text
Automatic Netwrix Auditor for SharePoint Core Service deployment failed.
```

## Cause

The Netwrix Auditor for SharePoint Core Service version is different from the current Netwrix Auditor server version.

## Resolution

1. Manually uninstall the Netwrix Auditor for SharePoint Core Service from the server hosting SharePoint Central Administration.
2. The Netwrix Auditor server automatically detects the missing core service and installs it on target servers.
3. To manually install the SharePoint Core Service, refer to the following article: Installation — Install for SharePoint Core Service · v10.6.

## Related articles

- Installation — Install for SharePoint Core Service · v10.6
