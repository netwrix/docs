---
description: >-
  Step-by-step instructions to apply a compliance template to a group in Netwrix
  Change Tracker for automated reporting.
keywords:
  - compliance template
  - scheduled reports
  - groups
  - Netwrix Change Tracker
  - automated reporting
  - report schedule
  - passing score
  - compliance policy
products:
  - changetracker
knowledge_article_id: ka04u000000Hd9YAAS
sidebar_label: Applying a Compliance Template to a Group
tags: [kb, configuration-and-setup]
title: Applying a Compliance Template to a Group for Automated Reporting
---

# Applying a Compliance Template to a Group for Automated Reporting

## Overview

A compliance template defines a hardened build standard that Netwrix Change Tracker uses to score devices for compliance. Applying a template to a device group lets you schedule automated compliance reports against that standard.

This article describes how to apply a compliance template to a device group and schedule automated reporting. Identify the template you want to apply and the group of devices you want to apply it to, then follow the steps below.

> **NOTE:** If you need to upload a template, refer to [Adding or Replacing Compliance Report Templates](./add-replace-compliance-report-templates.md).

## Instructions

1. Click the **Settings** tile, then click the **Groups** tab on the left navigation menu.
2. Select the group that you want the template applied to by clicking it.

   > **NOTE:** If you attach a template to a parent group, all child objects also inherit this template.

3. On the right side of the screen, select the **Scheduled Reports** tab.
4. Click **+Schedule a New Report**.
5. Select your compliance report policy.
6. Define a start and end date.

   > **IMPORTANT:** Leaving these fields blank makes the schedule open-ended, and the schedule runs indefinitely.

7. Select a **Schedule** increment: **Hourly**, **Daily**, **Weekly**, or a custom interval in minutes.
8. Enter a passing score percentage. Reports pass or fail depending on whether the score is above or below this percentage.
9. Click **Update**.

<!-- Image removed: Schedule a New Report dialog showing compliance policy, start/end date, schedule interval, and passing score fields -->

The report appears in the **Scheduled Reports** list and runs automatically according to the schedule you defined.
