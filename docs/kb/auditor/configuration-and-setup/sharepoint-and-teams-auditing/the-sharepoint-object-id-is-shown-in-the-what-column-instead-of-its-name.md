---
description: >-
  Explains why SharePoint group or permission level names may appear as object
  IDs in the "What" column in Netwrix Auditor reports and Change Summaries, and
  describes the condition that causes it.
keywords:
  - SharePoint
  - object ID
  - What column
  - cache
  - group
  - permission level
  - Netwrix Auditor
  - SharePoint Native Audit
  - Editing Users and Permissions
products:
  - auditor
sidebar_label: The SharePoint object ID is shown in the "What" co
tags: []
title: The SharePoint object ID is shown in the "What" column instead of its name
knowledge_article_id: kA00g000000H9SeCAK
---

# The SharePoint object ID is shown in the "What" column instead of its name

Netwrix Auditor saves group and permission level names in cache every 30 minutes to be able to retrieve it in case the object is deleted. Nevertheless, the name of the group or permission level will fail to be saved in cache in the following situation:

If you create a group or role while **SharePoint Native Audit (Editing Users and Permissions)** is turned off and delete this object or change its settings later when it is on, the **"What"** column in the reports and Change Summaries will show the object ID instead of its name.
