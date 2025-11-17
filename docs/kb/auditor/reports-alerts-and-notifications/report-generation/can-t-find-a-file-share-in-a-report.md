---
description: >-
  Explains why file shares with spaces or hidden shares (ending with `$`) may
  not appear in activity reports and how to add them to a monitoring plan.
keywords:
  - file share
  - hidden share
  - monitoring plan
  - activity report
  - report
  - share name
  - dollar sign
  - \\fileserver
products:
  - auditor
sidebar_label: Can't Find a File Share in a Report
tags: []
title: Can't Find a File Share in a Report
knowledge_article_id: kA0Qk0000000NmDKAU
---

# Can't Find a File Share in a Report

## Question

Two file shares have been added to a monitoring plan. However, When I run a report, I can't see them. Both file shares have a space in their names: `\fileserver\<share name\>$`. I'm wondering if the space is the issue.

## Answer

Spaces in item names don't affect their visibility in reports.

When adding a hidden share to the monitoring plan, don't forget to add the `$` sign at the end of the share's name.

Another way to monitor hidden shares is as follows:

1. Go to the **Monitoring Plans** section and select a monitoring plan.
2. Click **Add item**, select the **Computer** item type and enter a target server name where your hidden shares are located.
3. In the **Scope** section, select **Monitor user-defined hidden shares**.

Note that if a share has no activity during a reporting period it will not be in an activity report. Feel free to perform a test action, wait for the data collection to complete, and check the report again.
