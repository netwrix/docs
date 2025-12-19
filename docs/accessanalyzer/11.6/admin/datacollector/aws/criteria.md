---
title: "AWS: Criteria"
description: "AWS: Criteria"
sidebar_position: 50
---

# AWS: Criteria

The Criteria (Select DLP criteria for this scan) page is where criteria to be used for discovering
sensitive data during a scan is configured. It is a wizard page for the category of Collect SDD
Data.

This page requires the Sensitive Data Discovery Add-On to be been installed on the Enterprise
Auditor Console to define the criteria and enable the Criteria Editor. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
topic for additional information.

![AWS Query SDD Criteria](/images/accessanalyzer/11.6/admin/datacollector/aws/criteria.webp)

Default criteria is set at the **Global Settings** > **Sensitive Data** node. Choose between the
**Use Global Criteria** Selection and the **Use the Following Selected Criteria** radio buttons.

For custom criteria, select the checkbox for the criteria to be used to search for sensitive data.
There are **Select All** and **Clear All** buttons that can be used.

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

:::note
Until the Sensitive Data Discovery Add-On is installed, only the headers for the System
Criteria and User Criteria nodes are visible in the table.
:::


User-defined criteria is created in the Criteria Editor, accessed through the **Global Settings** >
**Sensitive Data** node. See the
[Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/sensitivedatadiscovery/overview.md)
topic for additional information.
