---
description: >-
  This article explains why the eDiscovery Scanning Status progress bar may drop to a lower percentage during a scan and the factors affecting its recovery time.
keywords:
  - eDiscovery
  - scanning status
  - Endpoint Protector Client
sidebar_label: eDiscovery Scanning Status Progress Bar
tags:
  - features-and-operations
title: "Why Does the eDiscovery Scanning Status Progress Bar Drop to a Lower Percentage?"
knowledge_article_id: kA0Qk0000002BIlKAM
products:
  - endpoint-protector
---

# Why Does the eDiscovery Scanning Status Progress Bar Drop to a Lower Percentage?

## Question

Why does the eDiscovery Scanning Status progress bar drop to a lower percentage?

## Answer

If the **Endpoint Protector Client** is updated during a running scan, the Scanning Status progress bar may drop to a very low percentage. It can take anywhere from a few minutes to several hours for the progress bar to return to normal.

An inaccurate progress bar can also appear immediately after a computer is restarted while a scan is running.

These situations occur because the **Endpoint Protector Client** requires time to recalculate and transmit an accurate status of the files already scanned, the confidential information discovered, and related data.

The time required for the progress bar to return to normal depends on several factors, including the computer's processing power, the number of scanned files, the number of policy violations discovered, the total number of files, and available hard disk space.

> **NOTE:** It is recommended to stop any active scans on a specific computer before performing an update of the **Endpoint Protector Client**.