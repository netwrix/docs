---
title: "AWS: Criteria"
description: "AWS: Criteria"
sidebar_position: 50
---

# AWS: Criteria

Use the Criteria (Select DLP criteria for this scan) page to configure the criteria for discovering
sensitive data during a scan. It is a wizard page for the category of Collect SDD Data.

![AWS Query SDD Criteria](/images/accessanalyzer/12.0/admin/datacollector/aws/criteria.webp)

Configure default criteria at the **Global Settings** > **Sensitive Data** node. Choose between the
**Use Global Criteria** Selection and the **Use the Following Selected Criteria** radio buttons.

For custom criteria, select the checkbox for each criterion you want to use to search for sensitive
data. Use the **Select All** and **Clear All** buttons as needed.

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

You create user-defined criteria in the Criteria Editor, accessed through the **Global Settings** >
**Sensitive Data** node. See the
[Sensitive Data Discovery](/docs/accessanalyzer/12.0/sensitivedatadiscovery/overview.md) topic for additional
information.
