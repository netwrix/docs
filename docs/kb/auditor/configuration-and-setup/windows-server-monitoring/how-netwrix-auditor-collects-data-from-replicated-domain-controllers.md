---
description: >-
  Explains how Netwrix Auditor collects and displays data from replicated Domain
  Controllers, and how event log replication affects search results, reports,
  alerts, and emails.
keywords:
  - domain controllers
  - replication
  - event logs
  - Netwrix Auditor
  - monitoring plan
  - alerts
  - reports
  - search
  - collection time
products:
  - auditor
sidebar_label: 'How Netwrix Auditor Collects Data from Replicated '
tags: []
title: "How Netwrix Auditor Collects Data from Replicated Domain Controllers?"
knowledge_article_id: kA04u000001111HCAQ
---

# How Netwrix Auditor Collects Data from Replicated Domain Controllers?

## Question

Is Netwrix Auditor able to show data collected from one of several replicated Domain Controllers in search, reports, alerts, and emails?

Example deployment scenario:

1. There are two Domain Controllers within a domain. The replication configured successfully between these Domain Controllers, and neither one is read-only.
2. A monitoring plan is configured to collect data **only from a single Domain Controller**.

## Answer

Yes, Netwrix Auditor can show these events with some considerations.  
Netwrix collects data, including but not limited to Windows Security Event Logs that are not replicated from one Domain Controller to another. Even if an action itself was replicated, the product will not be able to show correctly all issue details in search, reports, alerts, and emails since event log entries are not replicated. Review the following for additional information:

| Detail       | How the product report it                                                                 |
|--------------|-------------------------------------------------------------------------------------------|
| What         | Actual information                                                                        |
| Object type  | Actual information                                                                        |
| Who          | System                                                                                    |
| Where        | Unknown                                                                                   |
| Workstation  | —                                                                                         |
| When         | This detail shows the time when the action was collected by the product rather than the time when it actually happened.
