---
title: "FSAA: SDD Criteria Settings"
description: "FSAA: SDD Criteria Settings"
sidebar_position: 120
---

# FSAA: SDD Criteria Settings

The SDD Criteria Settings page is where criteria to be used for discovering sensitive data during a
scan is configured. It is a wizard page for the category of Sensitive Data Scan.

This page requires the Sensitive Data Discovery Add-On to be been installed on the Enterprise
Auditor Console to define the criteria and enable the Sensitive Data Criteria Editor. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
topic for additional information.

![FSAA Data Collector Wizard SDD Criteria Settings page](/images/accessanalyzer/11.6/admin/datacollector/fsaa/sddcriteria.webp)

The options on the SDD Criteria Settings page are:

- Use Global Criterion Selection – Select this option to inherit sensitive data criteria settings
  from the **Settings** > **Sensitive Data** node. See the
  [Sensitive Data](/docs/accessanalyzer/11.6/admin/settings/sensitivedata/overview.md)
  topic for additional information.
- Use the following selected criteria – Select this option to use the table to select which
  sensitive data criteria to scan for
- Select All - Click **Select All** to enable all sensitive data criteria for scanning
- Clear All - Click **Clear All** to remove all selections from the table
- Select the checkboxes next to the sensitive data criteria options to enable them to be scanned for
  during job execution

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

    Use the Sensitive Data Criteria Editor in the **Settings** > **Sensitive Data** to create and
    edit user-defined criteria. See the
    [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
    topic for additional information.

:::note
Until the Sensitive Data Discovery Add-On is installed, only the headers for the System
Criteria and User Criteria nodes are visible in the table.

:::
