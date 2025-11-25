---
description: >-
  This article describes the "The request is not supported" error (Event ID
  2009) for a Windows Server monitoring plan and provides possible causes and
  step-by-step resolutions including firewall, antivirus exclusions, gMSA
  configuration, and enabling network traffic compression.
keywords:
  - Windows Server
  - Event ID 2009
  - The request is not supported
  - gMSA
  - network traffic compression
  - firewall
  - antivirus exclusions
  - Netwrix Auditor
  - HRESULT 0x80070032
products:
  - auditor
sidebar_label: Request Is Not Supported — Windows Server Auditing
tags: []
title: "Request Is Not Supported — Windows Server Auditing"
knowledge_article_id: kA04u00000110xeCAA
---

# Request Is Not Supported — Windows Server Auditing

## Symptom

The following error for Windows Server monitoring plan in Health Log:

```text
Source:Windows Server Audit Service
Event ID:2009
Description:Monitoring plan: %Windows_Server_MP_name% 
Item: %item_name%
The following error has occurred while processing '%item_name%': 
The Scheduled Tasks data provider failed to get information on task ? due to the following error:
The request is not supported. (Exception from HRESULT: 0x80070032)
```

## Causes

- Firewall permissions are misconfigured.
- Antivirus exclusions are not set up.
- gMSA account used for data collection is misconfigured.
- Network traffic compression is disabled for your monitoring plan.

## Resolution

- Review the firewall permissions:
  - Refer to the list of protocols and ports required for Netwrix Auditor for Windows Server: Protocols and Ports — Windows Server.
  - Refer to the list of inbound connection rules to be configured: Windows Servers — Windows Firewall Inbound Connection Rules.

- Review the recommended antivirus exclusions — refer to the following article for additional information: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor).

- Review the gMSA configuration — refer to the following article for additional information: Data Collection Account — Group Managed Service Account (gMSA).

> **NOTE:** It is required to add the data collection gMSA account to the Local Admins group on the Netwrix Auditor server.

- Enable network traffic compression for your Windows Server monitoring plan:

  1. In the main Netwrix Auditor screen, select **Monitoring plans** under the **Configuration** tab.
  2. Select the affected Windows Server monitoring plan and click **Edit**.
  3. Review the list of affected data sources — in the right pane, click **Edit data source**, and check the **Enable network traffic compression** checkbox for each item. Click **Save** to save changes.
