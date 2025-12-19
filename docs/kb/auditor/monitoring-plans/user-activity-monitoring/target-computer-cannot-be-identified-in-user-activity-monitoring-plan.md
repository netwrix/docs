---
description: >-
  You see "The target computer cannot be identified" for a User Activity
  monitoring plan in Netwrix Auditor; this article lists possible causes and
  step-by-step resolutions to restore connectivity.
keywords:
  - User Activity
  - Remote Registry
  - SMBv2
  - SMBv3
  - ports
  - antivirus exclusions
  - User Activity Core Service
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Target Computer Cannot Be Identified in User Activ
tags: []
title: "Target Computer Cannot Be Identified in User Activity Monitoring Plan"
knowledge_article_id: kA04u000000wnknCAA
---

# Target Computer Cannot Be Identified in User Activity Monitoring Plan

## Symptom

You see the following error in the Health Log for your User Activity monitoring plan in Netwrix Auditor:

```text
Source:User Activity Audit Service
The following error has occurred while processing '%monitored_client%':   
The target computer cannot be identified.
Make sure that it is online and reachable, Remote Registry service is enabled.
```

## Causes

- The Remote Registry service is disabled in the affected client.
- Ports required for User Activity monitoring are blocked.
- The antivirus suite used in your environment is blocking access to Netwrix-related folders.
- The SMB v2/v3 protocol is disabled in your environment.
- User Activity Core Service is not installed in the target server or does not match the Auditor server version.

> IMPORTANT: While SMB v1 can be disabled in your environment, the SMB v2/v3 protocol is required to be enabled for Netwrix Auditor to be operating correctly.

## Resolutions

- Enable the Remote Registry service in the affected client — refer to the following article for additional information: Windows File Servers − Enable Remote Registry Service ⸱ v10.6.
- Review the allowed connections in the affected server in accordance with the following article guidelines: User Activity − User Activity Ports ⸱ v10.6.
- Exclude the Netwrix-related folders from the monitoring scope of your antivirus suite — refer to the following article for additional information: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor).
- Enable the SMB v2/v3 protocol in both the client and server — learn more in [Detect, Enable and Disable SMBv1, SMBv2, and SMBv3 ⸱ Windows Learn](https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3?tabs=server#how-to-detect-status-enable-and-disable-smb-protocols).
- Review the list of apps installed in the affected server. If User Activity Core Service is either missing or is outdated, refer to the following articles for additional information: Installation − Install for User Activity Core Service · v10.6 and [Manually Update User Activity Core Service](/docs/kb/auditor/monitoring-plans/user-activity-monitoring/manually-update-user-activity-core-service).

## Related articles

- Windows File Servers − Enable Remote Registry Service ⸱ v10.6
- User Activity − User Activity Ports ⸱ v10.6
- [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
- [Detect, Enable and Disable SMBv1, SMBv2, and SMBv3 ⸱ Windows Learn](https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3?tabs=server#how-to-detect-status-enable-and-disable-smb-protocols)
- Installation − Install for User Activity Core Service · v10.6
- [Manually Update User Activity Core Service](/docs/kb/auditor/monitoring-plans/user-activity-monitoring/manually-update-user-activity-core-service)
