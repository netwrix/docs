---
title: "EWSPublicFolder: Critieria"
description: "EWSPublicFolder: Critieria"
sidebar_position: 40
---

# EWSPublicFolder: Critieria

Use the Select DLP criteria for this scan page to select criteria for the sensitive data scan. It is
a wizard page for the Sensitive Data category.

The Sensitive Data Discovery Add-on is required to use the sensitive data collection option and
enable the Criteria Editor. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
for additional information.

![EWS Public Folder Data Collector Wizard Criteria page](/images/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/criteria.webp)

The options on the Criteria page are:

- Use Global Criterion Selection – Select this option to inherit sensitive data criteria settings
  from the **Settings** > **Sensitive Data** node. See the
  [Sensitive Data](/docs/accessanalyzer/11.6/admin/settings/sensitivedata/overview.md)
  topic for additional information.
- Use the following selected criteria – Select this option to use the table to select which
  sensitive data criteria to scan for
- Select All - Click **Select All** to enable all sensitive data criteria for scanning
- Clear All - Click **Clear All** to remove all selections from the table
- Select the checkboxes next to the sensitive data criteria options to enable it to be scanned for
  during job execution

The table contains the following types of criteria:

:::note
Until the Sensitive Data Discovery Add-On is installed, only the headers for the System
Criteria and User Criteria nodes are visible in the table.
:::


- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

    Use the Sensitive Data Criteria Editor in **Settings** > **Sensitive Data** to create and edit
    user-defined criteria. See the
    [Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/overview.md)
    topic for additional information.
