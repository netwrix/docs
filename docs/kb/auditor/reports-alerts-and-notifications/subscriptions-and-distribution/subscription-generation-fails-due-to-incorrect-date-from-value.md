---
description: >-
  Subscription generation fails for reports with date/time fields when a
  non-English system locale is set; changing the system locale to English
  (United States) resolves the error.
keywords:
  - subscription
  - Date_From
  - system locale
  - report parameter
  - Netwrix Auditor
  - subscription generation
  - locale
  - date
  - time
products:
  - auditor
sidebar_label: Subscription Generation Fails Due To Incorrect Dat
tags: []
title: "Subscription Generation Fails Due To Incorrect Date_From Value"
knowledge_article_id: kA04u00000111KECAY
---

# Subscription Generation Fails Due To Incorrect Date_From Value

## Symptom

The subscription generation fails and the subscription history contains the following error:

```text
The value provided for the report parameter 'Date_From' is not valid for its type.
```

## Cause

The issue occurs for subscriptions based on reports with date and time fields when a non-English locale has been enabled in the OS on the computer that hosts Netwrix Auditor Server.

## Resolution

Change the system locale to English (United States). To do that:

1. On the computer that hosts Netwrix Auditor Server, navigate to **Control Panel** > **Region** > **Administrative** tab.
2. Click the **Change system locale ...** button and select **English (United States)** in the *Current system locale:* field.
3. Change the system locale for the system accounts. To do that:
   - Navigate to **Control Panel** > **Region** > **Administrative** tab.
   - Click **Copy settings ...** and tick *Welcome screen and system accounts*.
4. Reboot Netwrix Auditor Server.
