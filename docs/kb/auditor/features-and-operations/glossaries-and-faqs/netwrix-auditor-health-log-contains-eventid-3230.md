---
description: >-
  Netwrix Auditor System Health Log may contain EventID 3230 for a SharePoint
  Online monitoring plan when a personal site collection is locked with a 'No
  access' status; this article explains the cause and provides a workaround to
  exclude such site collections from auditing.
keywords:
  - Netwrix Auditor
  - EventID 3230
  - SharePoint Online
  - OmitSitScStoreList.txt
  - personal site collection
  - No access
  - health log
  - monitoring scope
products:
  - auditor
sidebar_label: Netwrix Auditor Health Log Contains EventID 3230
tags: []
title: "Netwrix Auditor Health Log Contains EventID 3230"
knowledge_article_id: kA04u00000111ELCAY
---

# Netwrix Auditor Health Log Contains EventID 3230

## Symptom

Netwrix Auditor (NA) System Health Log contains EventID 3230 for a SharePoint Online monitoring plan:

```text
3230: Failed to collect state‑in‑time snapshot data: site collection has 'No access' lock status.
```

## Cause

The lock status for a site collection means that this is a personal site collection that has been locked. Personal site collections are not intended to be collected, and the error with `No access` lock status can be fixed by unlocking the site. Netwrix Auditor for SharePoint is intended as an enterprise solution and would be best to be configured for public documents only.

> **IMPORTANT:** Please consider that this event does not affect data collection.

## Resolution

As a workaround, you can exclude personal site collections from being audited by editing the `OmitSitScStoreList.txt` file located in the following default path:

```
%Working Folder%\Netwrix Auditor for SharePoint Online\Configuration\%GUID%\OmitSitScStoreList.txt
```

> **NOTE:** To determine your Working Folder location, you can run the following PowerShell command.
>
> ```powershell
> Get-ItemPropertyValue -Path "HKLM:\SOFTWARE\WOW6432Node\Netwrix Auditor\DataPathOverride" -Name "(Default)”
> ```
>
> If this script does not return a value, then your Working Folder is our default location of `C:\ProgramData\Netwrix Auditor\`.

For additional information on how to configure your SharePoint Online monitoring scope, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 (SharePoint Online Monitoring Plans — Monitoring Scope — v10.6).

## Related Articles

- SharePoint Online Monitoring Plans — Monitoring Scope — v10.6: https://docs.netwrix.com/docs/auditor/10_8
