---
description: >-
  Certain SharePoint changes may be reported with the "Unknown" value in the
  "Who Changed" column, for example automatic creation of SharePoint groups on
  site creation and actions performed by the "Anonymous" user when permitted by
  security policy.
keywords:
  - SharePoint
  - Unknown
  - Who Changed
  - Anonymous
  - SharePoint groups
  - permissions
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'The changes are reported with the "Unknown" value '
tags: []
title: >-
  The changes are reported with the "Unknown" value in the "Who Changed"
  column for SharePoint
knowledge_article_id: kA00g000000H9STCA0
---

# The changes are reported with the `Unknown` value in the **Who Changed** column for SharePoint

The following changes are reported with the `Unknown` value in the **Who Changed** column:

- Automatic creation of SharePoint groups on site creation if it uses unique permissions instead of inheriting them
- All changes made by the `Anonymous` user if the security policy permits such changes
