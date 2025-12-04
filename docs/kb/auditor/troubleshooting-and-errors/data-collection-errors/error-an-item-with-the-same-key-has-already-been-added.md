---
description: >-
  When the Overview dashboard shows data but reports return "no data found", you
  may see an error saving an Active Directory State-in-Time snapshot to the
  Audit Database. This article explains the symptom, a common cause (duplicate
  Active Directory objects), and points you to Microsoft guidance for finding
  and fixing the duplicates.
keywords:
  - Active Directory
  - state-in-time
  - snapshot
  - Audit Database
  - duplicate object
  - same key
  - mangled entries
  - no data found
products:
  - auditor
sidebar_label: 'Error: An Item with the Same Key Has Already Been '
tags: []
title: 'Error: An Item with the Same Key Has Already Been Added'
knowledge_article_id: kA0Qk0000000RjNKAU
---

# Error: An Item with the Same Key Has Already Been Added

## Symptoms

The Overview dashboard shows data, but when you drill down to a report, it says **no data found**.

When you try to upload a State-in-Time snapshot manually, the following error appears:

```text
 
Cannot apply changes.
Error saving the Active Directory state-in-time snapshot to Audit Database: An item with the same key has already been added.
```

## Cause

There are duplicated items in the monitored environment which led to "mangled" entries.

It is not the only possible root cause, but it is becoming increasingly more common, especially in customer environments with several organizations within Active Directory or hybridized environments.

## Resolution

Review the following Microsoft article that describes how these "mangled" entries are handled by the system, how to find them, and how to fix the duplicates: https://learn.microsoft.com/en-us/archive/technet-wiki/15435.active-directory-duplicate-object-name-resolution (Active Directory: Duplicate Object Name Resolution ⸱ Microsoft 🤝).
