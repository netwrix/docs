---
description: >-
  This article explains how to resolve Event ID 2002 when Netwrix Auditor cannot
  copy snapshots to the Long-Term Archive due to denied access to the Short-Term
  Archive path. It outlines symptoms, cause, and step-by-step resolution.
keywords:
  - long-term archive
  - short-term archive
  - Event ID 2002
  - permissions
  - service account
  - Netwrix Auditor
  - Health Log
  - snapshot
products:
  - auditor
sidebar_label: Cannot Copy Snapshot to Long-Term Archive − Access
tags: []
title: "Cannot Copy Snapshot to Long-Term Archive − Access to Short-Term Archive Is Denied"
knowledge_article_id: kA04u00000111ATCAY
---

# Cannot Copy Snapshot to Long-Term Archive − Access to Short-Term Archive Is Denied

## Symptoms

- The following error is prompted in Health Log for one or multiple monitoring plans set up:

```text
Event ID: 2002
Cannot copy the %name% snapshot to the Long-Term Archive
Access to the path %ShortTerm% is denied.
```

- Statuses for items and data sources in affected monitoring plans state **Working**/**Take Action** and do not change.

- No data is collected in the affected monitoring plans.

## Cause

Write permissions for the custom Long-Term Archive service account are misconfigured.

## Resolution

1. Review the permissions settings for the affected Long-Term Archive service account. Refer to the following article for additional information: Installation − Configure Long-Term Archive Account ⸱ v10.5 https://docs.netwrix.com/docs/auditor/10_8/requirements/longtermarchive).

2. Allow Full Control permissions to the affected Long-Term Archive service account for the following 2 folders:

   1. Long-term Archive — you can establish the location by following **Settings** > **Long-Term Archive** > **Write audit data to**. The default location is `%PROGRAMDATA%\Netwrix Auditor\Data`.

   2. Short-Term Archive — you can establish the location by following **Health Status** > **Open diagnostic logs folder** under **Working folder** > parent folder of the **Logs** folder. The default location is `C:\ProgramData\Netwrix Auditor\ShortTerm`.

## Related articles

- Installation − Configure Long-Term Archive Account ⸱ v10.5  
  https://docs.netwrix.com/docs/auditor/10_8/requirements/longtermarchive
