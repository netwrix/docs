---
title: "SQL: Criteria"
description: "SQL: Criteria"
sidebar_position: 40
---

# SQL: Criteria

The Criteria page is where criteria to be used for discovering sensitive data are configured. It is
a wizard page for the Sensitive Data Collection category.

![SQL Data Collector Wizard Criteria page](/images/accessanalyzer/12.0/admin/datacollector/sql/criteria.webp)

The options on the Criteria page are:

- Use Global Criterion Selection – Select this option to inherit sensitive data criteria settings
  from the **Settings > Sensitive Data** node. See the
  [Sensitive Data](/docs/accessanalyzer/12.0/admin/settings/sensitivedata/overview.md) topic for additional information.
- Use the following selected criteria – Select this option to use the table to select which
  sensitive data criteria to scan for

    - Select All– Click **Select All** to enable all sensitive data criteria for scanning
    - Clear All – Click **Clear All** to remove all selections from the table
    - Select the checkboxes next to the sensitive data criteria options to enable it to be scanned
      for during job execution

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

    Use the Sensitive Data Criteria Editor in the **Settings > Sensitive Data** to create and edit
    user-defined criteria. See the
    [Sensitive Data Criteria Editor](/docs/accessanalyzer/12.0/sensitivedatadiscovery/criteriaeditor/overview.md)
    topic for additional information.

:::note
Adding unnecessary criteria can adversely impact the scanner performance and can cause the
scanning job to take a long time. If performance is adversely affected, revisit the sensitive data
scanning criteria and remove criteria that is not required.

:::
