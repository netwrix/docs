---
description: >-
  Explains why empty Event ID 5356/5536 appears and why the CSV file referenced
  in the Test Run message is missing; clarifies storage and deletion behavior
  for the Event Log Export Add-on in Netwrix Auditor.
keywords:
  - Event 5356
  - Event 5536
  - CSV
  - Event Log Export Add-on
  - Netwrix Auditor
  - Test Run
  - '%ProgramData% path'
  - Csv file missing
products:
  - auditor
sidebar_label: Empty Event ID 5356 − CSV File Missing in Event Log Export Add-on
tags: []
title: "Empty Event ID 5356 − CSV File Missing in Event Log Export Add-on"
knowledge_article_id: kA04u000000wnpsCAA
---

# Empty Event ID 5356 − CSV File Missing in Event Log Export Add-on

## Questions

1. Empty Events 5356 are logged in Event Log when using Event Log Export Add-on for Netwrix Auditor − is this intended?

2. Upon a Test Run completion, a message is prompted with the ` %ProgramData%\Netwrix Auditor\AuditCore\AuditArchive\AlertsToolLauncher\Csv\*.csv` path − no `.csv` file is available when browsing the path. Where could I find the `.csv` file?

## Answers

1. Upon the Test Run completion, an empty Event 5536 is created logging the **When** timestamp of the run − this behavior is intended.

2. The path specified in the message is used as a short-term data storage to allow Netwrix Auditor to process data and send an alert. Once completed, the `.csv` file is deleted. The contents of the `.csv` file are logged in Event Log.
