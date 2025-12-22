---
description: >-
  This article explains how to resolve the "Cannot establish a connection to a
  Compression Service" (Event ID 6104) error by restarting the Netwrix Auditor
  Application Deployment Service on the audited computer.
keywords:
  - compression service
  - Event ID 6104
  - Netwrix Auditor
  - Application Deployment Service
  - services.msc
  - 2147943458
  - restart service
  - monitoring plan
products:
  - auditor
sidebar_label: Cannot Establish Connection to Compression Service
tags: []
title: "Cannot Establish Connection to Compression Service"
knowledge_article_id: kA04u00000111FTCAY
---

# Cannot Establish Connection to Compression Service

## Symptom

Error message:

```text
Source: File Storage Audit Service
Event ID: 6104
Description: Monitoring plan: <Monitoring Plan's Name>
Error: Unable to process item. Cannot establish a connection to a Compression Service
0x80070422 
The service cannot be started, either because it is disabled or because it has no enabled devices associated with it.
```

## Cause

The Netwrix Auditor Application Deployment Service is not running on the audited computer.

## Resolution

To restart the Netwrix Auditor Application Deployment Service:

1. Open Windows Services from the Run dialog box using `services.msc` or access it with the Search.
2. Right click on the **Netwrix Auditor Application Deployment Service** and select **Restart**.

   > **IMPORTANT:** Make sure you use the **Restart** command, not **Refresh**.

3. Wait for some time. This may take several hours in large environments.
4. Check that the restart is successful:
   - Go to a monitoring plan that was mentioned in the error message and confirm that its status has changed to **Ready**.
   - Ensure that activity records are being collected again.
