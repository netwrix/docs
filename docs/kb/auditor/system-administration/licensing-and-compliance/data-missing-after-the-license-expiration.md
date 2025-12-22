---
description: >-
  Explains why activity records are missing for the period when a Netwrix
  Auditor license was expired and what to check in event log retention settings
  to prevent data loss.
keywords:
  - license expiration
  - activity records
  - event logs
  - retention
  - Netwrix Auditor
  - downtime
  - event log size
  - overwritten events
products:
  - auditor
sidebar_label: Data Missing After the License Expiration
tags: []
title: "Data Missing After the License Expiration"
knowledge_article_id: kA04u000000wnrZCAQ
---

# Data Missing After the License Expiration

## Question

Your Netwrix Auditor license has recently expired − a new license has since been applied. Why do activity records from the downtime period are missing?

## Answer

Netwrix Auditor stops monitoring corresponding data sources after the license expiration. Once a new license is applied, Auditor will collect all the data present in event logs as of the moment of the license application. This behavior is expected − the event logs are set up to be overwritten to prevent the extra space consumption. Any events that were overwritten will not have activity records generated for them.

Depending on the size of your environment and the amount of Activity Records generated per day, you might need to increase the event log size. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 Event Log Size and Retention Settings ⸱ v10.6).

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8 Event Log Size and Retention Settings ⸱ v10.6)
