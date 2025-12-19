---
description: >-
  The Netwrix Auditor User Activity Audit Service fails to start and shows Error
  1053. This article lists possible causes and resolutions to restore User
  Activity monitoring.
keywords:
  - Netwrix Auditor
  - User Activity
  - Error 1053
  - service did not respond
  - antivirus exclusions
  - ports
  - .NET Framework 4.8
products:
  - auditor
sidebar_label: Service Did Not Respond to the Start or Control Re
tags: []
title: "Service Did Not Respond to the Start or Control Request Error in User Activity Service"
knowledge_article_id: kA0Qk0000000ajRKAQ
---

# Service Did Not Respond to the Start or Control Request Error in User Activity Service

## Symptoms

Your Netwrix Auditor instance exhibits the following symptoms:

- The User Activity monitoring plan is not collecting any data.
- **Netwrix Auditor User Activity Audit Service is stopped**. When you attempt to start the service manually, the service prompts the following error:

```text
Windows could not start the Netwrix Auditor User Activity Audit Service service on Local Computer.

Error 1053: The service did not respond to the start or control request in a timely fashion.
```

- **Optional:** The change in behavior occurred after the recent Netwrix Auditor upgrade (e.g., v10.5 to v10.6).

## Causes

Refer to the following possible causes for the symptoms:

1. The antivirus suite in your environment hinders the Netwrix Auditor User Activity Audit Service operation.
2. Incorrectly configured ports in your environment hinder the Netwrix Auditor User Activity Audit Service operation.
3. The .NET Framework version installed in your environment (i.e., both on the target and Netwrix Auditor servers) is outdated.

## Resolutions

Depending on the cause, implement the corresponding resolution to address the issue:

1. Exclude Netwrix Auditor-related folders from the monitoring scope of your antivirus solution. Refer to the following article to learn more about recommended antivirus exclusions: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor).
2. Verify the open ports in both the target and Netwrix Auditor servers. Refer to the following article to learn more about the ports required for correct User Activity operation: Data Source Configuration − User Activity Ports · v10.6.
3. Verify that the .NET Framework v4.8 is installed on both the target and Netwrix Auditor servers. Refer to the following article to learn more about software requirements in Netwrix Auditor v10.6: Requirements − Software Requirements · v10.6.

## Related Articles

- [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
- Data Source Configuration − User Activity Ports · v10.6
- Requirements − Software Requirements · v10.6
