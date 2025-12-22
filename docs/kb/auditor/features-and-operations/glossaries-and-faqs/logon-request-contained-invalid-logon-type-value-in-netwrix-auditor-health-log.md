---
description: >-
  Explains the causes and step-by-step resolution for the Health Log error "A
  logon request contained an invalid logon type value" in Netwrix Auditor,
  including how to verify data collecting account credentials and permissions.
keywords:
  - Health Log
  - invalid logon type
  - data collecting account
  - monitoring plan
  - Netwrix Auditor
  - gMSA
  - Local Administrator
  - no data collected
products:
  - auditor
sidebar_label: Logon Request Contained Invalid Logon Type Value i
tags: []
title: "Logon Request Contained Invalid Logon Type Value in Netwrix Auditor Health Log"
knowledge_article_id: kA04u00000111EVCAY
---

# Logon Request Contained Invalid Logon Type Value in Netwrix Auditor Health Log

## Symptom

- The following errors are prompted in your Health Log:

```text
Monitoring plan: %affected_monitoring_plan_name%
Item: %affected_item%
The following error has occurred:
Failed to get a list of audited computers in %affected_item% due to the following error:
A logon request contained an invalid logon type value
```

```text
Monitoring plan: %affected_monitoring_plan_name%
Your monitoring plan does not contain items of this data source type.
```

- No data is collected in the affected monitoring plan.

## Causes

- The data collecting account credentials were specified incorrectly.
- The data collecting account permissions are misconfigured.
- The gMSA account was not assigned a Local Administrator role.

## Resolution

To verify the data collection account credentials were specified correctly, refer to the following steps:

1. In the main Netwrix Auditor menu, select **Monitoring Plans**.
2. In the left pane, select the affected monitoring plan, and click **Edit**.
3. In the left pane, click **Edit settings** under the **Monitoring Plan** section.
4. In the left pane, select the **Data Collection** tab, and review the data collecting account credentials.

> **NOTE:** Make sure the data collecting account is specified in the `domain\account` name format.

5. Save changes and allow the monitoring plan some time to collect data.

Alternatively, you might have a particular data collecting account set up for a specific item. You can review the corresponding data collecting account credentials by clicking **Edit Item** under the **Item** section.

For additional information on configuring your data collecting account, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 (Monitoring Plans — Data Collecting Account ⸱ v10.6).

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8 (Monitoring Plans — Data Collecting Account ⸱ v10.6)
