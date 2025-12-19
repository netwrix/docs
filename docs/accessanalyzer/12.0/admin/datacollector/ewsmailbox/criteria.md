---
title: "EWSMailbox: Criteria"
description: "EWSMailbox: Criteria"
sidebar_position: 60
---

# EWSMailbox: Criteria

The Select DLP criteria for this scan page is where to select the criteria to use for the sensitive
data scan are selected. It is a wizard page for the Sensitive Data category.

![EWS Mailbox Data Collector Wizard Criteria page](/images/accessanalyzer/12.0/admin/datacollector/ewsmailbox/criteria.webp)

The options on the Criteria page are:

- Use Global Criterion Selection – Select this option to inherit sensitive data criteria settings
  from the **Settings** > **Sensitive Data** node. See the
  [Sensitive Data](/docs/accessanalyzer/12.0/admin/settings/sensitivedata/overview.md) topic for additional information.
- Use the following selected criteria – Select this option to use the table to select which
  sensitive data criteria to scan for
- Select All - Click **Select All** to enable all sensitive data criteria for scanning
- Clear All - Click **Clear All** to remove all selections from the table
- Select the checkboxes next to the sensitive data criteria options to enable it to be scanned for
  during job execution

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

    Use the Sensitive Data Criteria Editor in **Settings** > **Sensitive Data** to create and edit
    user-defined criteria. See the
    [Sensitive Data Criteria Editor](/docs/accessanalyzer/12.0/sensitivedatadiscovery/criteriaeditor/overview.md)
    topic for additional information.
