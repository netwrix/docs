---
description: >-
  This article explains the cause of the "A logon request contained an invalid
  logon type value" error in Netwrix Auditor and shows how to resolve it by
  specifying the collecting account in the correct domain\\username format.
keywords:
  - logon
  - logon type
  - monitoring plan
  - data collection
  - domain\\username
  - Netwrix Auditor
  - error
  - troubleshooting
  - account
products:
  - auditor
sidebar_label: Logon Request Contained an Invalid Logon Type Valu
tags: []
title: "Logon Request Contained an Invalid Logon Type Value"
knowledge_article_id: kA04u0000000Hh5CAE
---

# Logon Request Contained an Invalid Logon Type Value

## Symptom and Cause

You've encountered the following error:

```
A logon request contained an invalid logon type value
```

This error may occur in case the account name wasn't specified correctly during the configuration process for a monitoring plan.

## Resolution

Specify the account for collecting data of the affected monitoring plan in the `domain\\username` format:

1. In the main **Netwrix Auditor** menu, click the **Monitoring plans** button.
2. In the left pane, select the affected monitoring plan and click **Edit**. You can check all the monitoring plans set up in case you're unsure about the particular affected plan.
3. In the right pane, select **Edit settings** in the **Monitoring Plan** section.
4. In the left pane, select the **Data Collection** tab and edit the **User name** field contents to suit the `domain\\username` format.

Alternatively you can check the account configured in **Netwrix Auditor**:

1. In the top right corner of the main **Netwrix Auditor** screen, select **Settings**.
2. In the **General** tab of the left pane, click **Manage** under **Accounts and passwords** section.

> **NOTE:** If the error persists after you've checked all monitoring plans, contact [Netwrix Technical Support](https://www.netwrix.com/open_a_ticket.html).
