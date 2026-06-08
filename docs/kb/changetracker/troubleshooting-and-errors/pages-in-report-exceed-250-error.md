---
description: >-
  Resolving the "Number of pages in the report will exceed 250" error in
  Netwrix Change Tracker by increasing the MaxPagesInReport configuration
  setting.
keywords:
  - MaxPagesInReport
  - report pages
  - page count
  - QueryError
  - report limit
  - 250 pages
  - configuration settings
  - Show Advanced Options
  - Add Config Item
  - report page limit exceeded
products:
  - change-tracker
sidebar_label: Pages in Report Exceed 250 Error
tags:
  - kb
  - troubleshooting-and-errors
title: Pages in Report Exceed 250 Error
knowledge_article_id: ""
---

# Pages in Report Exceed 250 Error

## Symptom

When attempting to run a report in Netwrix Change Tracker, the following error appears:

```text
TemplateId: <template_name>
Results State: QueryError
Number of pages in the report will exceed 250 - Estimated Total Page Count <page_count>
```

## Cause

The estimated page count for the report exceeds the predefined limit.

## Resolution

Increase the maximum allowed page count:

1. In Netwrix Change Tracker, navigate to **Settings** > **System Settings** > **Show Advanced Options**.
2. In the **Configuration Settings** section, click **Add Config Item**. In the **Description** field, enter `MaxPagesInReport`. In the **Value** field, enter `2000`.

   > **NOTE:** You can enter any value to cover the required target page count. The value `2000` is used as an example.

3. Click **Update**. Run the affected report again.
