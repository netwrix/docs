---
description: >-
  Explains why an alert email may show "System" in the WHO field and how Netwrix
  Auditor later populates WHO and WHEN data from security event logs for daily
  reports and SQL reports.
keywords:
  - System
  - WHO field
  - alert email
  - Activity Summary
  - security event log
  - WHEN field
  - Netwrix Auditor
  - data collection
products:
  - auditor
sidebar_label: Alert Reported Change Made by System
tags: []
title: "Alert Reported Change Made by System"
knowledge_article_id: kA00g000000H9S1CAK
---

# Alert Reported Change Made by System

## Question

Why was System stated in the WHO field in alert email instead of a user?

## Answer

Alerts may contain System in the WHO field while daily Activity Summary emails or SQL reports will show the correct user.

Once a change is received, the WHO or WHEN field might be missing. After collecting the change data, Netwrix Auditor will immediately check for the corresponding event in security event logs to collect WHO and WHEN fields data. Depending on the timing of the change and the collection process, this event might be missing from the security event log, e.g. due to a delayed queue of events written at the time for a particular domain controller.
To ensure timely delivery, the alert is sent out with as much data collected at the time.

During the next quick data collection Netwrix Auditor will attempt to find the corresponding security event to collect data for missing fields of that change as well as new ones. If your Activity Summary report contains the WHO or WHEN data, the security event was properly written and collected. This won't be reflected in the alert, but data will be present for the activity stated in your daily review or in SQL Server report.
