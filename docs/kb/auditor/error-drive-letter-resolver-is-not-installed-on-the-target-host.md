---
description: >-
  Explains the "Drive letter resolver is not installed on the target host" error
  for Windows file servers and how to resolve it by deploying the Network
  Traffic Compression Service.
keywords:
  - drive letter resolver
  - Network Traffic Compression Service
  - file server
  - Netwrix Auditor
  - monitored objects
  - SACL
  - data collection
  - network load
  - error message
products:
  - auditor
sidebar_label: 'Error: Drive Letter Resolver is not Installed on t'
tags: []
title: 'Error: Drive Letter Resolver is not Installed on the Target Host'
knowledge_article_id: kA00g000000H9WtCAK
---

# Error: Drive Letter Resolver is not Installed on the Target Host

## Symptom
Netwrix Auditor returns the following error for Windows File Servers:

```text
Drive letter resolver is not installed on the target host
```

## Cause
The component responsible for collecting information about the drive letter was not installed on the target file server. It is Network Traffic Compression Service that collects this information to map data in the security events.

## Resolution
To solve the issue, deploy Network Traffic Compression Service on the audited file server:

1. In the Netwrix Auditor client, select the corresponding Monitoring Plan.
2. In the **Data source** section on the right, select **Edit data source**.
3. In the dialog displayed, locate the **Specify data collection method** section and select the **Enable network traffic compression** check box.
4. Network Traffic Compression Service will be automatically deployed and launched on the target file server during the next data collection (scheduled or ad hoc), collecting and pre-filtering data.
5. Click **Save & Close**.

Consider that using this service will also minimize network load and speed up state-in-time snapshot collection and SACL configuration. See also:

- Monitored Object Types, Actions, and Attributes: File Servers ⸱ v10.5: https://docs.netwrix.com/docs/auditor/10_8
- Monitored Object Types, Actions, and Attributes: File Servers ⸱ v10.6: https://docs.netwrix.com/docs/auditor/10_8
