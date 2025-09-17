---
description: >-
  After restarting the Netwrix Auditor for Windows Server Compression Service,
  the monitored item may show Ready but still require action; the System Health
  log can contain Event IDs 1015 and 1016 indicating registry audit permission
  issues and registry data provider errors. This article explains the cause and
  how to grant the necessary registry permissions.
keywords:
  - Netwrix Auditor
  - System Health
  - Event 1015
  - Event 1016
  - Windows Registry audit
  - registry permissions
  - Windows Server 2019
products:
  - auditor
sidebar_label: Netwrix Auditor System Health Log Contains Event I
tags: []
title: "Netwrix Auditor System Health Log Contains Event IDs 1015 and 1016"
knowledge_article_id: kA0Qk0000000RJZKA2
---

# Netwrix Auditor System Health Log Contains Event IDs 1015 and 1016

## Symptoms

You see the corresponding item shows a Ready status after restarting the Netwrix Auditor for Windows Server Compression Service on a target server running Windows Server 2019. However, when clicking the **Update** option next to the monitoring plan, the item shows **Take Action**.

In addition, the **Netwrix Auditor System Health** log contains the following event IDs:

```text
Event ID 1016: Windows Registry audit permissions are not enabled for this server. Adjust Windows Registry audit permissions automatically or manually.
```

and

```text
Event ID 1015: Multiple errors of the same type have occurred on the Registry data provider.
```

## Cause

The **Everyone** group should have permission to access the necessary registry keys rather than the data collection service account.

## Resolution

Grant the necessary permissions to access the registry keys to the **Everyone** group.

Review the complete list of the required registry keys and learn more about configuring permissions in the following article: https://docs.netwrix.com/docs/auditor/10_8 Source Configuration — Configure Windows Registry Audit Settings — v10.6).
