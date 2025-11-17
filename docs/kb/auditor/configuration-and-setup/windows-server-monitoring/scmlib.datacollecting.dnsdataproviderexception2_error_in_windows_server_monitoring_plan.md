---
description: >-
  This article addresses the SCMLib.DataCollecting.DNSDataProviderException2 error encountered in the Health Log for Windows Server monitoring plans and provides resolutions to fix the issue.
keywords:
  - SCMLib.DataCollecting.DNSDataProviderException2
  - Windows Server
  - monitoring plan
  - advanced audit settings
  - TLS protocols
sidebar_label: SCMLib.DataCollecting.DNSDataProviderException2 Error
tags: []
title: "SCMLib.DataCollecting.DNSDataProviderException2 Error in Windows Server Monitoring Plan"
knowledge_article_id: kA0Qk0000000KDFKA2
products:
  - auditor
---

# SCMLib.DataCollecting.DNSDataProviderException2 Error in Windows Server Monitoring Plan

## Symptom

The following error is prompted in the Health Log for your Windows Server monitoring plan:

```
Monitoring plan: %monitoring_plan_name%
The following error has occurred while processing '%FQDN%': 
The DNS data provider failed to process data from \\%FQDN%\Root\MicrosoftDNS:MicrosoftDNS_Server.Path="%FQDN%" due to the following error:
Exception of type 'SCMLib.DataCollecting.DNSDataProviderException2' was thrown.
```

## Causes

- Advanced audit settings for Windows Server are misconfigured.
- TLS protocols in your environment are mismatched, causing the inability to communicate.
- The path stated in the error message is incorrect or cannot be resolved.

## Resolutions

### Step 1 − Configure Advanced Audit Settings

1. In the main **Netwrix Auditor** menu, select **Monitoring Plans**.
2. In the left pane, select the affected monitoring Windows Server plan, and click **Edit**.
3. In the right pane, select **Edit data source** > uncheck the **Adjust audit settings automatically** checkbox under the **Configure audit settings** section.
4. Configure advanced audit settings for your Windows Server plan − refer to the following article for additional information: [Windows Server − Configure Advanced Audit Policies · v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/windowsserver/advancedpolicy).

### Step 2 − Configure Auditor and Monitored Servers to Support a Common Protocol

Review your environment to verify a common TLS protocol can be selected for incoming and outgoing communication. Refer to the following article for additional information: Connection Issue when TLS 1.2 Is Required.

### Step 3 − Review the Path

Review the path stated in the error message to verify it can be resolved and is specified correctly.

## Related Articles

- [Windows Server − Configure Advanced Audit Policies · v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/windowsserver/advancedpolicy)
- Connection Issue when TLS 1.2 Is Required