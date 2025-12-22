---
title: "SG_MicrosoftLAPS Job"
description: "SG_MicrosoftLAPS Job"
sidebar_position: 20
---

# SG_MicrosoftLAPS Job

The SG_MicrosoftLAPS job assesses the Local Administrator Password Solution (LAPS) local policies on
all targeted hosts. This offers insight into LAPS enablement and configuration across an
environment. LAPS allows for centralized local administrator password management within Active
Directory. See the Microsoft
[Local Administrator Password Solution](https://learn.microsoft.com/en-us/previous-versions/mt227395(v=msdn.10))
article for additional information.

## Queries for the SG_MicrosoftLAPS Job

The SG_MicrosoftLAPS job uses the Registry Data Collector for the following query:

:::warning
The query is preconfigured for this job. Never modify the query.
:::


![Queries for the SG_MicrosoftLAPS Job](/images/accessanalyzer/11.6/solutions/windows/privilegedaccounts/localadministrators/microsoftlapsquery.webp)

The query for the SG_MicrosoftLAPS job is:

- Registry Check – Checks for LAPS related registry keys

## Analysis Tasks for the SG_MicrosoftLAPS Job

Navigate to the **Windows** > **Privileged Accounts** > **Local Administrators** >
**SG_MicrosoftLAPS** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the SG_MicrosoftLAPS Job](/images/accessanalyzer/11.6/solutions/windows/privilegedaccounts/localadministrators/microsoftlapsanalysis.webp)

The default analysis task is:

- List LAPS details – Creates the SG_MicrosoftLAPS_Details table accessible under the job’s Results
  node

In addition to the tables created by the analysis tasks, the SG_MicrosoftLAPS job produces the
following pre-configured report.

| Report                  | Description                                                                                                                                                             | Default Tags | Report Elements                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft LAPS Overview | This report gives an overview of LAPS policies in the audited environment. LAPS allows for centralized local administrator password management within Active Directory. | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays LAPS status by host</li><li>Table – Provides LAPS policy details</li></ul> |
