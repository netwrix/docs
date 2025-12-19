---
description: >-
  Explains that Inactive User Tracking does not alert you before taking actions,
  and that Netwrix Auditor will refrain from actions if it cannot gather
  timestamps from domain controllers.
keywords:
  - Inactive User Tracking
  - inactive users
  - domain controllers
  - timestamps
  - Netwrix Auditor
  - data collection
  - DC availability
  - automation
  - alerts
products:
  - auditor
sidebar_label: Does Inactive User Tracking alert before it perfor
tags: []
title: "Does Inactive User Tracking alert before it performs any actions on accounts?"
knowledge_article_id: kA00g000000H9WBCA0
---

# Does Inactive User Tracking alert before it performs any actions on accounts?

Although Inactive User Tracking does not alert you prior to performing actions on a user based on the configuration you selected, it will, as a precaution, choose to not perform any actions on an account or computer if there were any errors gathering the necessary timestamps from domain controllers. Specifically, Netwrix Auditor will NOT perform any actions if any DC was unavailable at the time of data collection.
