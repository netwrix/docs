---
description: >-
  A Logon Activity monitoring plan fails with Event ID 5004 and the error "The
  system cannot find the path specified", preventing data collection. This
  article explains the cause and provides steps to upgrade or repair Netwrix
  Auditor to resolve the issue.
keywords:
  - logon activity
  - Event ID 5004
  - data collection failed
  - The system cannot find the path specified
  - Netwrix Auditor
  - Logon Activity Audit Service
  - repair installation
  - upgrade
products:
  - auditor
sidebar_label: System Cannot Find the Path Specified in Logon Act
tags: []
title: "System Cannot Find the Path Specified in Logon Activity Monitoring Plan"
knowledge_article_id: kA04u00000111CeCAI
---

# System Cannot Find the Path Specified in Logon Activity Monitoring Plan

## Symptoms

- The following error is prompted in Health Log for the Logon Activity monitoring plan:

```
Source: Active Directory Logon Activity Audit Service
Event ID: 5004
Monitoring plan: %monitoring_plan_name%
Data collection has failed. Error: The system cannot find the path specified
```

- No data is collected in your affected monitoring plan.

## Causes

Netwrix Auditor Logon Activity Audit Service is corrupted or cannot be found.

## Resolutions

- Upgrade your Netwrix Auditor instance to the latest version to repair the corrupted service. Refer to the following article for additional information: Installation — Upgrade to the Latest Version ⸱ v10.6.

- If the latest Netwrix Auditor version is installed in your environment, you can repair your Netwrix Auditor instance. Refer to the following article for additional information: [How to Repair Netwrix Auditor Installation](/docs/kb/auditor/configuration-and-setup/general-configuration/how-to-repair-netwrix-auditor-installation).

### Related articles

- Installation — Upgrade to the Latest Version ⸱ v10.6

- [How to Repair Netwrix Auditor Installation](/docs/kb/auditor/configuration-and-setup/general-configuration/how-to-repair-netwrix-auditor-installation)
