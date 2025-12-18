---
description: >-
  This article explains which Netwrix Access Analyzer data collectors support running under a Group Managed Service Account (gMSA).
keywords:
  - Access Analyzer
  - gMSA
  - data collectors
sidebar_label: gMSA Support in Access Analyzer
tags: []
title: "Determining Which Access Analyzer Collectors Support gMSA"
knowledge_article_id: kA0Qk00000033UPKAY
products:
  - accessanalyzer
---

# Determining Which Access Analyzer Collectors Support gMSA

## Related Queries

- "Which collectors support gMSA in Access Analyzer?"
- "Can I run Access Analyzer collectors with gMSA?"
- "Is SmartLog compatible with gMSA?"

## Question

Which Netwrix Access Analyzer (formerly Enterprise Auditor) data collectors support running under a **Group Managed Service Account (gMSA)**?

## Answer

Not all data collectors in Netwrix Access Analyzer are compatible with gMSA. gMSAs are used to enhance security and simplify password management for services running on Windows, but they require explicit support within the collector's implementation.

The following Netwrix Access Analyzer data collectors have been tested and confirmed to support execution under a **gMSA**:

- **ADActivity**
- **ADInventory**
- **ADPermissions**
- **FSAA**
- **PasswordSecurity**
- **SmartLog** (only when using **Network Query** mode)
- **SPAA**

> **NOTE:** The **SmartLog** collector supports gMSA only when it is configured to use **Network Query**. It does **not** support gMSA in other modes.

Ensure that the gMSA account is granted all required permissions as described in the Help Center:

[Configure a gMSA Account for Collector Connections](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/connection/gmsa)

## Related Link

- [Configure a gMSA Account for Collector Connections](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/settings/connection/gmsa)