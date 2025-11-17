---
description: >-
  Explains how to exclude the Windows `SYSTEM` account from Event Logs by
  applying a filter or changing the audit policy.
keywords:
  - SYSTEM account
  - Event Log
  - Windows Event Viewer
  - filter events
  - audit policy
  - exclude SYSTEM
  - Netwrix Auditor
products:
  - auditor
sidebar_label: How to Exclude System Account From Event Log
tags: []
title: "How to Exclude System Account From Event Log"
knowledge_article_id: kA04u00000111DNCAY
---

# How to Exclude System Account From Event Log

## Question

In some cases, for example, if an Antivirus running under the `SYSTEM` account generates multiple events and saturates the Windows logs, you might want to exclude the `SYSTEM` account from being shown in the Windows Event Logs or got monitored at all.

This article answers the question on how to exclude the `SYSTEM` account from logs.

## Answer

You can do that in two ways:

- Set a filter for the `SYSTEM` account to not show in the event logs. Learn more in [Windows Event Viewer — How to Filter Events ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/host-integration-server/core/how-to-filter-events2)
- Change the audit policy for the `SYSTEM` account to not get monitored. Learn more in [Windows Event Viewer ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/host-integration-server/core/windows-event-viewer1)
