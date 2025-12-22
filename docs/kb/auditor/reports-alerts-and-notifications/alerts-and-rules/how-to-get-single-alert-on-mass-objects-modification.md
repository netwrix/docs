---
description: >-
  Shows how to configure an alert threshold in Netwrix Auditor so a single alert
  triggers for mass object modifications, such as deleting a folder that
  contains many files.
keywords:
  - Netwrix Auditor
  - alert threshold
  - mass objects modification
  - alerts
  - folder deletion
  - activity records
  - alert settings
products:
  - auditor
sidebar_label: How to Get Single Alert on Mass Objects Modificati
tags: []
title: "How to Get Single Alert on Mass Objects Modification?"
knowledge_article_id: kA04u000000wnsrCAA
---

# How to Get Single Alert on Mass Objects Modification?

## Question

How to configure settings of a single alert to be triggered by mass objects modification? For example, if a folder got deleted containing many files.

## Answer

To get notified about mass objects modification with one Netwrix Alert, configure alert threshold.

For additional information on alerts thresholds, refer to the following article: Alerts — Create Alerts — v10.6.

1. On the Netwrix Auditor home page, click the **Alerts setings** link.
2. Select the alert you want to be triggered by mass objects removal and click **Edit**.
3. Navigate to **Thresholds**. When enabled, a single alert will be sent instead of many alerts. This can be helpful when Netwrix Auditor detects many activity records matching the filters you specified.
4. Configure threshold parameters as needed.
