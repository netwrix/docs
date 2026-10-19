---
title: "SPAA: Select DLP Criteria"
description: "SPAA: Select DLP Criteria"
sidebar_position: 100
---

# SPAA: Select DLP Criteria

Use the Select Criteria page to configure criteria for discovering sensitive data. It's a wizard
page for the category of Scan For Sensitive Content.

:::warning
Don't change scans in a way that results in returning less data on a subsequent scan (i.e.
scanning fewer web applications, scanning fewer site collections, or a shallower depth scan).
Access Analyzer marks resources not included in a subsequent scan as deleted in the Tier 2
database and later removes them from the Tier 1 database.
:::


![Select DLP criteria for this scan page](/images/accessanalyzer/12.0/admin/datacollector/spaa/selectdlpcriteria.webp)

The options on the Select DLP Criteria page are:

- Use Global Criterion Selection – Select this option to inherit sensitive data criteria settings
  from the **Settings** > **Sensitive Data** node. See the
  [Sensitive Data](/docs/accessanalyzer/12.0/admin/settings/sensitivedata/overview.md) topic for additional information.
- Use the following selected criteria – Select this option to use the table to select which
  sensitive data criteria to scan for
- Select All – Click **Select All** to enable all sensitive data criteria for scanning
- Clear All – Click **Clear All** to remove all selections from the table
- Select the checkboxes next to the sensitive data criteria options to include them in job
  execution scans

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

    Use the Sensitive Data Criteria Editor in **Settings** > **Sensitive Data** to create and edit
    user-defined criteria. See the
    [Sensitive Data Criteria Editor](/docs/accessanalyzer/12.0/sensitivedatadiscovery/criteriaeditor/overview.md)
    topic for additional information.
