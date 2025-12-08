---
description: >-
  Netwrix Auditor can log system-created SharePoint objects with their system
  names (for example, after enabling the Publishing feature), which can cause
  incorrect display names to appear in the "What" column of reports and Change
  Summaries.
keywords:
  - Netwrix Auditor
  - SharePoint
  - Spaudit
  - Publishing
  - ContentDB
  - What column
  - Change Summaries
  - display name
products:
  - auditor
sidebar_label: Incorrecty Display Names in the "What Changed" col
tags: []
title: Incorrecty Display Names in the "What Changed" column
knowledge_article_id: kA00g000000H9dOCAS
---

# Incorrecty Display Names in the "What Changed" column

## Details

When collecting data on permission changes, **Netwrix Auditor** employs native SharePoint audit (**SPaudit**) and also runs data collections on SharePoint ContentDB every 30 minutes. In some cases (for example, after enabling the **Publishing** feature on the site collection) objects are created and therefore logged by **Netwrix Auditor** with their system names. For example, `$Resources:cmscore,RoleNameViewer`. That is why the display name of the system-created objects can be reported incorrectly in the **"What"** column in reports and Change Summaries.
