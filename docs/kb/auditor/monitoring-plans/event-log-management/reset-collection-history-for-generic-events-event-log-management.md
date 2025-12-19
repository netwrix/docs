---
description: >-
  Describes how to reset the Generic Event (Event Log Management) collection
  history in Netwrix Auditor so the system re-collects event logs that were
  previously collected.
keywords:
  - Generic Events
  - Event Log Management
  - collection history
  - audit archive
  - Logs folder
  - Managed Object
  - Netwrix Auditor
  - reset collection history
  - event logs
  - archive
products:
  - auditor
sidebar_label: Reset collection history for Generic Events (Event
tags: []
title: "Reset collection history for Generic Events (Event Log Management)"
knowledge_article_id: kA00g000000H9WCCA0
---

# Reset collection history for Generic Events (Event Log Management)

How to reset the Generic Event (Event Log Management) collections in order to collect data that had been collected in the past.

---

In cases where Netwrix Auditor - Generic Events (Event Log Management) is not being used to archive event data but rather collect it "on demand" you must remove prior collection history for the server you are trying to collect from so that event logs are collected that were already collected in the past.

In order to do this please perform the following:

1) Navigate to the **audit archive** location (location specified under **Settings -> Audit Archive**) and drill down into the **Logs** folder. In this folder find the **name of the Managed Object** and inside that there is a folder for **each of the computers** the product is collecting from. **Delete** the folder for the computer in question.
