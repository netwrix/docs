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

1. Click the **Reports** tile, then click the **Actions** > **Add Compliance Report**.
2. Click the **Query Settings** tab, then select the group and template within the drop down options.
3. Once selected, click the **Update Report Title** option to automatically update the title of this report

<img width="1170" height="778" alt="image" src="https://github.com/user-attachments/assets/2bd11aa8-57cd-4a6b-883c-f539708b79a3" />

4. Click the **Schedule & Email** tab to configure the start/end date and interval:

<img width="1169" height="778" alt="image" src="https://github.com/user-attachments/assets/b866174a-6486-4b92-b7c1-ffe2bf7826df" />

5. Once completed, click **Update** on the bottom to save this report configuration. This report will now run on its scheduled interval against the specified group of devices.
