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

This article shows how to apply a compliance template to a group in Netwrix Change Tracker for automated reporting.

> **NOTE:** If you need to upload a template, refer to the article "How to Upload a Compliance Template to Netwrix Change Tracker". <!-- link removed: kb.netwrix.com/8187 -->

## Instructions

Identify a template you want to apply and the group of devices you want to apply it to, then follow these steps:

1. Click the **Settings** tile.
2. On the left navigation menu, click the **Groups** tab.
3. Select the group that you want the template applied to by clicking it.

   > **NOTE:** If you attach a template to a parent group, all child objects also inherit this template.

4. On the right side of the screen, select the **Scheduled Reports** tab.
5. Click **+Schedule a New Report**.
6. Select your compliance report policy.
7. Define a start and end date.

   > **NOTE:** Leaving these fields blank makes the schedule open-ended, and the schedule runs indefinitely.

8. Select the **Schedule** increment in minutes. Preset options exist for Hourly, Daily, and Weekly. If none of these suit your needs, enter an interval in minutes.
9. Define the passing score by typing in a percentage. The system provides a pass or fail result depending on whether the report scores higher or lower than the defined percentage.
10. Click **Update**.

<!-- Image removed: Schedule a New Report dialog showing compliance policy, start/end date, schedule interval, and passing score fields -->
