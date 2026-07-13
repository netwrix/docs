---
description: >-
  Resolving "System Error" messages when running event queries with text
  search in Netwrix Change Tracker by switching to regex search and
  increasing query timeouts.
keywords:
  - text search
  - event query
  - timeout
  - TextSearchMethod
  - regex
  - MaxEventQueryTimeMs
  - System Error
  - event filter timeout
  - MaxEventCountTimeMs
products:
  - change-tracker
sidebar_label: System Error When Running Event Queries
tags:
  - kb
  - troubleshooting-and-errors
title: System Error When Running Event Queries
knowledge_article_id: ""
---

# System Error When Running Event Queries

## Symptom

In Netwrix Change Tracker, when an Events query includes a text search, a "System Error" message appears in the lower-right corner of the screen, indicating the query cannot complete successfully or that it will time out.

## Cause

The default `TextSearchMethod` setting is `Text`, which cannot handle the complexity of the query.

## Resolution

1. Log in to Change Tracker.
2. Navigate to **Settings** > **System Settings**.
3. Scroll down and click **Show Advanced Options** at the bottom of the page.
4. Scroll down to **Configuration Settings** and click **Add Config Item**.
5. Add the following configuration items:

   | Description | Value |
   |---|---|
   | `TextSearchMethod` | `regex` |
   | `MaxEventQueryTimeMs` | `600000` |
   | `MaxEventCountTimeMs` | `5000` |

6. Click **Update**.
