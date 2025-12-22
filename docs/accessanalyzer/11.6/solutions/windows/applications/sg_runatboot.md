---
title: "SG_RunAtBoot Job"
description: "SG_RunAtBoot Job"
sidebar_position: 30
---

# SG_RunAtBoot Job

The SG_RunAtBoot job lists applications which are set to **Run** or **Run Once** on all targeted
hosts.

## Queries for the SG_RunAtBoot Job

The SG_RunAtBoot job uses the Registry Data Collector for the following queries:

:::warning
The queries are preconfigured for this job. Never modify the queries.
:::


![Queries for the SG_RunAtBoot Job](/images/accessanalyzer/11.6/solutions/windows/applications/runatbootqueries.webp)

The queries for the SG_RunAtBoot job are:

- Run – Targets all Windows servers known to Enterprise Auditor to run at boot applications
- Run Once – Targets all Windows servers known to Enterprise Auditor to run once at boot
  applications

## Analysis Tasks for the SG_RunAtBoot Job

Navigate to the **Windows** > **Applications** > **SG_RunAtBoot** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SG_RunAtBoot Job](/images/accessanalyzer/11.6/solutions/windows/applications/runatbootanalysis.webp)

The default analysis tasks are:

- Track Changes – Creates the SA_SG_RunAtBoot_ChangeTracking table accessible under the job’s
  Results node
- List application details – Creates the SA_SG_RunAtBoot_Details table accessible under the job’s
  Results node
- Summarize details by host – Creates the SA_SG_RunAtBoot_HostSummary table accessible under the
  job’s Results node
- Summarize details by application – Creates the SA_SG_RunAtBoot_AppSummary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the SG_RunAtBoot job produces the
following pre-configured reports.

| Report      | Description                                                                                      | Default Tags | Report Elements                                                                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Run at Boot | This report enumerates applications which are set to run at boot across the audited environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays Top Hosts by Applications Run at Boot</li><li>Table – Provides details on Top Hosts by Applications Run at Boot bar chart</li><li>Table – Provides details on Run / Run Once Applications</li></ul> |
