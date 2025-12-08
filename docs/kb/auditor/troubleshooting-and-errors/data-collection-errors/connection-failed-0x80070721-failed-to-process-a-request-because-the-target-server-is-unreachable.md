---
description: >-
  You see the "Connection failed -0x80070721" error when connecting to a
  remotely installed Netwrix Auditor Client because the Netwrix Auditor Core
  Service must run under the NETWORK SERVICE account on the server. This article
  explains the cause and the steps to fix the service account.
keywords:
  - Connection failed
  - 2147944225
  - Netwrix Auditor
  - Core Service
  - NETWORK SERVICE
  - Services snap-in
  - Log On tab
products:
  - auditor
sidebar_label: 'Connection failed -0x80070721 - Failed to process '
tags: []
title: "Connection failed -0x80070721 - Failed to process a request because the target server is unreachable"
knowledge_article_id: kA04u00000110tmCAA
---

# Connection failed -0x80070721 - Failed to process a request because the target server is unreachable

## Symptom

You see this error message when you try to connect to the Netwrix Auditor Client installed remotely (not on the computer that hosts the Netwrix Auditor Server).

```text
Connection failed -0x80070721 - Failed to process a request because the target server is unreachable. A security package specific error occurred.
```

## Cause

This error occurs because the Netwrix Auditor Core Service should run under the `NETWORK SERVICE` account on the computer that hosts the Netwrix Auditor Server.

## Resolution

To resolve the issue, check the account the service uses. To do that:

1. On the computer where the Netwrix Auditor Server resides, navigate to the **Services** snap-in.
2. Right-click the **Netwrix Auditor Core Service** and select **Properties**.
3. Switch to the **Log On** tab and make sure that the **Log on as** option is set to `NETWORK SERVICE`. If not, browse for the `NETWORK SERVICE` account and click **Apply**.
