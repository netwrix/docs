---
title: "SPAA: Select DLP Criteria"
description: "SPAA: Select DLP Criteria"
sidebar_position: 100
---

# SPAA: Select DLP Criteria

The Select Criteria page is where criteria to be used for discovering sensitive data are configured.
It is a wizard page for the category of Scan For Sensitive Content. This page requires the Sensitive
Data Discovery Add-On to be been installed on the Enterprise Auditor Console to define the criteria
and enable the Criteria Editor. If the SharePoint Agent is used, then it must also be installed on
the application server that hosts the Central Administration component. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
topic for additional information.

:::warning
Users should not change scans in a way that would result in less data being returned on
a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a
shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in
the Tier 2 database and subsequently removed from the Tier 1 database.
:::


![Select DLP criteria for this scan page](/images/accessanalyzer/11.6/admin/datacollector/spaa/selectdlpcriteria.webp)

The options on the Select DLP Criteria page are:

- Use Global Criterion Selection – Check this option to inherit sensitive data criteria settings
  from the **Settings** > **Sensitive Data** node. See the
  [Sensitive Data](/docs/accessanalyzer/11.6/admin/settings/sensitivedata/overview.md)
  topic for additional information.
- Use the following selected criteria – Check this option to use the table to select which sensitive
  data criteria to scan for
- Select All - Click **Select All** to enable all sensitive data criteria for scanning
- Clear All - Click **Clear All** to remove all selections from the table
- Check the boxes next to the sensitive data criteria options to enable it to be scanned for during
  job execution

The table contains the following types of criteria:

:::note
Until the Sensitive Data Discovery Add-On is installed, only the headers for the System
Criteria and User Criteria nodes are visible in the table.
:::


- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

    Use the Sensitive Data Criteria Editor in **Settings** > **Sensitive Data** to create and edit
    user-defined criteria. See the
    [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)topic
    for additional information.
