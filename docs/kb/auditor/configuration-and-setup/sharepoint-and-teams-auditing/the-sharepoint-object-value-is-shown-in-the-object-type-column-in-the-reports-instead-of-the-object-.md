---
description: >-
  When Netwrix Auditor collects permission change data for SharePoint, it uses
  the native SharePoint audit (SPaudit) to determine object types. If an object
  is deleted within 30 minutes after its permissions were modified, the report
  shows "SharePoint Object" in the "Object Type" column because the object ID is
  unknown.
keywords:
  - SharePoint
  - SPaudit
  - Object Type
  - SharePoint Object
  - permissions
  - Netwrix Auditor
  - audit
  - deleted object
products:
  - auditor
sidebar_label: The "SharePoint Object" value is shown in the "Obj
tags: []
title: >-
  The "SharePoint Object" value is shown in the "Object Type" column in the
  reports instead of the object itself.
knowledge_article_id: kA00g000000H9SACA0
---

# The "SharePoint Object" value is shown in the "Object Type" column in the reports instead of the object itself.

When collecting data on permission changes, Netwrix Auditor employs the native SharePoint audit (`SPaudit`) to get the object type by its ID. If an object is deleted within 30 minutes after its permissions were modified, permission modifications will be reported with the "SharePoint Object" value in the **"Object Type"** column because the object ID is unknown.
