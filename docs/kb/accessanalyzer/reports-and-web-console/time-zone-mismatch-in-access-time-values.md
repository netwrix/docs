---
description: >-
  Explains why access time values displayed in the Activity Details report in
  Netwrix Access Information Center (AIC) differ from those in exported reports
  due to server and local time zone handling.
keywords:
  - time zone
  - access time
  - AIC
  - Activity Details
  - Access Analyzer
  - export
  - time zone mismatch
  - local time
  - UTC
products:
  - access-analyzer
  - access_info_center
sidebar_label: Time Zone Mismatch in Access Time Values
tags:
  - reports-and-web-console
title: "Time Zone Mismatch in Access Time Values"
knowledge_article_id: kA0Qk0000001JF7KAM
---

# Time Zone Mismatch in Access Time Values

## Related Query

- "In AIC, under **Activity Details**, I see the access time, which looks like it is in EST format. If I export that, it is 6 hours ahead. Why does this happen?"

## Question

In the **Activity Details** report in Netwrix Access Information Center (AIC), the access time values mismatch the access time values in the exported AIC reports. Why do the values mismatch?

## Answer

Netwrix Access Analyzer collects access time data from the target server. To order the collected data, Netwrix Access Analyzer assigns access time values to events in the time zone of the target server. When you export the collected data via AIC, the access time gets converted to your local time zone.
