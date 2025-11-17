---
description: >-
  If changes have incorrect timestamps or Change Summaries are sent outside the
  schedule, check the computer time settings and restart the Netwrix Auditor
  Service for SharePoint. Restarting the service resolves issues that occur
  after timezone or manual date/time updates.
keywords:
  - Netwrix Auditor
  - timestamps
  - Change Summaries
  - timezone
  - service restart
  - SharePoint
  - monitoring plan
  - schedule
products:
  - auditor
sidebar_label: Changes are reported with incorrect timestamps and
tags: []
title: "Changes are reported with incorrect timestamps and Change Summaries are sent outside the schedule"
knowledge_article_id: kA00g000000H9ZdCAK
---

# Changes are reported with incorrect timestamps and Change Summaries are sent outside the schedule

- Сhanges are reported with incorrect timestamps.
- Change Summaries are sent outside the schedule.

On the computer where **Netwrix Auditor** is installed:

- The timezone settings were updated.
- The date and time settings were manually updated.

You must restart the **Netwrix Auditor Service for SharePoint**. To do this:

1. Navigate to **Control Panel** → **System and Security** → **Administrative Tools** → **Services**.
2. Locate the **Netwrix Auditor Service for SharePoint** (`<Monitoring Plan name>`) and restart it.
