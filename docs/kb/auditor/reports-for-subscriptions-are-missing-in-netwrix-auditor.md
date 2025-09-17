---
description: >-
  A scheduled report subscription sometimes does not send a report because the
  subscription is configured not to send empty reports when no activity
  occurred; enable the setting or adjust the schedule to include multiple days
  to resolve the issue.
keywords:
  - subscriptions
  - reports
  - empty subscriptions
  - schedule
  - Netwrix Auditor
  - notifications
  - recipients
  - Send empty subscriptions when no activity occurred
products:
  - auditor
sidebar_label: Reports for Subscriptions Are Missing in Netwrix Auditor
tags: []
title: "Reports for Subscriptions Are Missing in Netwrix Auditor"
knowledge_article_id: kA04u00000111AYCAY
---

# Reports for Subscriptions Are Missing in Netwrix Auditor

## Symptom

A subscription to a report was previously set up, but on some days no report for the set up subscription is sent to specified recipients.

## Cause

The affected subscription has the **Send empty subscriptions when no activity occurred** setting turned off.

## Resolution

Enable the **Send empty subscriptions when no activity occurred** setting to receive empty reports on no activity:

1. In the main Netwrix Auditor menu, select **Subscriptions**.
2. Select the affected subscription, and click **Edit**.
3. In the **General** tab, enable the **Send empty subscriptions when no activity occurred** switch, and click **Save & Close**.

Refer to the following article for additional information on subscriptions in Netwrix Auditor: https://docs.netwrix.com/docs/auditor/10_8 — Create Subscriptions ⸱ v10.6).

> NOTE: Alternatively, you can alter the schedule to include records from multiple days:
>
> 1. In the main Netwrix Auditor menu, select **Subscriptions**.
> 2. Select the affected subscription, and click **Edit**.
> 3. In the left pane, select **Schedule** − select the appropriate time window to build reports for, and click **Save & Close**.

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8 — Create Subscriptions ⸱ v10.6)
