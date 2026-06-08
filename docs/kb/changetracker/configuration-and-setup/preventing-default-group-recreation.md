---
description: >-
  Preventing Netwrix Change Tracker from recreating default OS groups after
  deletion by adding the CreateDefaultGroups configuration item.
keywords:
  - default groups
  - CreateDefaultGroups
  - IIS
  - application pool
  - configuration settings
  - Add Config Item
  - System Settings
  - Show Advanced Options
  - IIS application pool recycle
  - default OS groups
  - group recreation
products:
  - change-tracker
sidebar_label: Preventing Default Group Recreation
tags:
  - kb
  - configuration-and-setup
title: Preventing Change Tracker from Recreating Deleted Default Groups
knowledge_article_id: ""
---

# Preventing Change Tracker from Recreating Deleted Default Groups

## Overview

The Netwrix Change Tracker console recreates default groups and their attached configuration templates and compliance reports whenever IIS recycles the application pool, which occurs every 29 hours by default.

## Instructions

To prevent default groups from being recreated:

1. Log in to Netwrix Change Tracker.
2. Navigate to **Settings** > **System Settings**.
3. Click **Show Advanced Options**.
4. Click **Add Config Item**.
5. In the **Description** field, enter `CreateDefaultGroups`. In the **Value** field, enter `No`.
6. Click **Update**.
