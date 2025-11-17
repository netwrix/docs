---
description: >-
  Health Log shows error 0x800706D3 (The authentication service is unknown) for
  file server monitoring plans in Netwrix Auditor after installing Microsoft
  updates KB5003646/KB5003638; upgrade to v10.5.11059 or later to resolve the
  issue.
keywords:
  - 2147944147
  - authentication service is unknown
  - file server monitoring
  - KB5003646
  - KB5003638
  - Netwrix Auditor
  - Windows Server 2019
  - event log
  - 8007060000
products:
  - auditor
sidebar_label: 0x800706D3 Error − Authentication Service Is Unkno
tags: []
title: "0x800706D3 Error − Authentication Service Is Unknown"
knowledge_article_id: kA04u000000PdInCAK
---

# 0x800706D3 Error − Authentication Service Is Unknown

## Symptom

Either of the following errors is prompted in Health Log for file server monitoring plans in Netwrix Auditor:

```
Source:	File Storage Audit Service
Event ID:6104
Description:Monitoring plan: %File_Servers_Monitoring_Plan% 
Item: %item_name%
Unable to process item: Cannot connect to file server (0x800706D3 The authentication service is unknown).
```

```
Backup event log seek failed. Error details: Access is denied
```

```
Failed to open the event log. Error details: The requested operation is not supported. Error code: 800706e4
```

## Cause

Microsoft released security updates KB5003646/KB5003638 to fix security vulnerabilities. These updates installed in Windows Server 2019 servers would affect the Netwrix Auditor data collection. Learn more about the updates in [KB5003646 · Microsoft Support](https://support.microsoft.com/en-us/topic/june-8-2021-kb5003646-os-build-17763-1999-81e2ff5a-0769-4e56-8762-059dd6e0d6bb).

## Resolution

Upgrade your Netwrix Auditor instance to `v10.5.11059` or the latest version available. Refer to the following article for additional information on the upgrade process: Installation − Upgrade to the Latest Version · v10.6.

## Related articles

- [KB5003646 · Microsoft Support](https://support.microsoft.com/en-us/topic/june-8-2021-kb5003646-os-build-17763-1999-81e2ff5a-0769-4e56-8762-059dd6e0d6bb)
- Installation − Upgrade to the Latest Version · v10.6
- [Netwrix Auditor v10.5 Bug Fix List](https://helpcenter-be.netwrix.com/bundle/Auditor_10.5_ReleaseNotes/raw/resource/enus/Netwrix_Auditor_10.5_BugFixList.pdf)
