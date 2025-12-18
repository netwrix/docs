---
description: >-
  Explains how to modify the scheduled Task Scheduler job used by Netwrix
  Auditor to change the frequency of data collections for File Server auditing.
keywords:
  - file server auditing
  - Task Scheduler
  - scheduled task
  - Netwrix Auditor
  - File Server Change Reporter
  - collection frequency
  - triggers
  - Windows
products:
  - auditor
sidebar_label: How to change the frequency of data collections fo
tags: []
title: "How to change the frequency of data collections for File Server auditing?"
knowledge_article_id: kA00g000000H9WDCA0
---

# How to change the frequency of data collections for File Server auditing?

In order to change the frequency of data collections please perform the following:

1. Go to **Control Panel** -> **Administrative Tools** -> **Task Scheduler** -> **Task Scheduler Library**;
2. Double click task **Netwrix Management Console - File Server Change Reporter your_collection**;
3. Then **Triggers** tab, then click **New** and choose **Daily** and set `Repeat task every N hours` (type your selection if it is not available to pick from the drop down).
