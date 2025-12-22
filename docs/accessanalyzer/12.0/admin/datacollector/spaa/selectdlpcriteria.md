---
title: "SPAA: Select DLP Criteria"
description: "SPAA: Select DLP Criteria"
sidebar_position: 100
---

# SPAA: Select DLP Criteria

The Select Criteria page is where criteria to be used for discovering sensitive data are configured.
It is a wizard page for the category of Scan For Sensitive Content.

:::warning
Users should not change scans in a way that would result in less data being returned on
a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a
shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in
the Tier 2 database and subsequently removed from the Tier 1 database.
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
- Select the checkboxes next to the sensitive data criteria options to enable it to be scanned for
  during job execution

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

    Use the Sensitive Data Criteria Editor in **Settings** > **Sensitive Data** to create and edit
    user-defined criteria. See the
    [Sensitive Data Criteria Editor](/docs/accessanalyzer/12.0/sensitivedatadiscovery/criteriaeditor/overview.md)
    topic for additional information.
