---
description: >-
  Netwrix Auditor may not reflect some SharePoint events in reports and Change
  Summaries under certain conditions, such as manual trimming of the ContentDB,
  restores within 30 minutes after backup, or deletion within 30 minutes of
  changes.
keywords:
  - SharePoint
  - events
  - reports
  - Change Summaries
  - ContentDB
  - site collection
  - backup
  - restore
  - deletion
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Some SharePoint events may be lost and not reflect
tags: []
title: "Some SharePoint events may be lost and not reflected in reports and Change Summaries"
knowledge_article_id: kA00g000000H9SRCA0
---

# Some SharePoint events may be lost and not reflected in reports and Change Summaries

Some SharePoint events may be lost and not reflected in reports and Change Summaries when:

- The `ContentDB` database of the designated site collection was manually trimmed.
- The site collection was restored within 30 minutes after backup. The information on changes made within this period will be lost.
- The site collection was deleted. The information on changes made to the site collection within 30 minutes before its deletion will be lost.
