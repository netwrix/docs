---
description: >-
  When the Risk Assessment Overview dashboard shows unexpected infrastructure
  issues but the linked reports return no results, verify data collection and
  State-in-Time snapshots in Netwrix Auditor to resolve discrepancies.
keywords:
  - Risk Assessment Overview
  - dashboard
  - Server Inventory Report
  - State-in-Time snapshots
  - Monitoring Plan
  - unauthorized antivirus
  - Windows Server
  - Netwrix Auditor
  - snapshot
  - data refresh
products:
  - auditor
sidebar_label: 'Why does Risk Assessment Overview Dashboard Shows '
tags: []
title: "Why does Risk Assessment Overview Dashboard Shows Unexpected Issues for Windows Server?"
knowledge_article_id: kA04u000000wns8CAA
---

# Why does Risk Assessment Overview Dashboard Shows Unexpected Issues for Windows Server?

## Overview

When you review the **Risk Assessment Overview** dashboard, some infrastructure items show incorrect values. For example, an unexpected number of **Servers with unauthorized antivirus software**. However, when you drill down to the linked report, it returns no results. Is this normal behavior for Netwrix Auditor?

## Instructions

1. First, you need to run the **Server Inventory Report** to validate that data was being retrieved.
2. If the report does not contain any data about the issues showed on the dashboard, you need to check an out-of-date State-in-Time snapshots for the Monitoring Plan in which those servers are listed.
3. For that, navigate to a problematic monitoring plan, click **Edit Data Source** -> **Manage State-in-Time Snapshots**.
4. The date of the current snapshot should be today's date. If not, wait a day or two for the data to update.
