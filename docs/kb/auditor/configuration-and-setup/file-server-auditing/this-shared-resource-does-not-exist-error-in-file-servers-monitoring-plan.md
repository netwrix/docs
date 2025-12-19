---
description: >-
  Explains how to resolve the "This shared resource does not exist" (0x80070906)
  error in a File Servers monitoring plan in Netwrix Auditor, including causes
  and step-by-step resolutions.
keywords:
  - shared resource does not exist
  - 2147944710
  - file servers monitoring
  - Netwrix Auditor
  - snapshot processing
  - permissions
  - UNC path
  - monitoring plan
products:
  - auditor
sidebar_label: 'This Shared Resource Does Not Exist Error in File '
tags: []
title: "This Shared Resource Does Not Exist Error in File Servers Monitoring Plan"
knowledge_article_id: kA00g000000H9bHCAS
---

# This Shared Resource Does Not Exist Error in File Servers Monitoring Plan

## Symptom

The following message is prompted in Health Log for your File Servers monitoring plan in Netwrix Auditor:

```text
Snapshot processing for the server %affected_server% completed with errors:
Object: %share%, Error: 0x80070906 This shared resource does not exist.
```

## Causes

1. Misconfigured permissions for the Auditor data collecting account.
2. The affected share is specified incorrectly in the coresponding monitoring plan.

## Resolutions

1. Verify the permissions for the data collecting account used in the File Servers monitoring plan. Refer to the following article for additional information: Windows File Server − Permissions for Windows File Server Auditing · v10.6.
2. In the affected monitoring plan, select the affected item and click **Edit item** to verify the UNC path or file server name.

## Related articles

- Windows File Server − Permissions for Windows File Server Auditing · v10.6
