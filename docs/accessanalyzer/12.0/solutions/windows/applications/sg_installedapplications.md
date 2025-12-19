---
title: "SG_InstalledApplications Job"
description: "SG_InstalledApplications Job"
sidebar_position: 20
---

# SG_InstalledApplications Job

The SG_InstalledApplications job identifies installed applications on all targeted hosts.

## Queries for the SG_InstalledApplications Job

The SG_InstalledApplications job uses the WMICollector Data Collector for the following query:

:::warning
The query is preconfigured for this job. Never modify the query.
:::


![Queries for the SG_InstalledApplications Job](/images/accessanalyzer/12.0/solutions/windows/applications/installedapplicationsquery.webp)

The query for the SG_InstalledApplications job are:

- Installed Applications – Targets all Windows servers known to Access Analyzer to determine
  installed applications

## Analysis Tasks for the SG_InstalledApplications Job

Navigate to the **Windows** > **Applications** > **SG_InstalledApplications** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SG_InstalledApplications Job](/images/accessanalyzer/12.0/solutions/windows/applications/installedapplicationsanalysis.webp)

The default analysis tasks are:

- All Installed Applications - Change Tracking – Creates the
  SA_SG_InstalledApplications_ChangeTracking table accessible under the job’s Results node
- All Installed Applications - Details – Creates the SA_SG_InstalledApplications_Details table
  accessible under the job’s Results node
- MS Applications - Details – Creates the SA_SG_InstalledApplications_MSDetails table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SG_InstalledApplications job
produces the following pre-configured reports.

| Report                     | Description                                                                                                                           | Default Tags | Report Elements                                                                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All Installed Applications | This report details all installed applications, and highlights the most common installed applications across the audited environment. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top installed applications</li><li>Table – Provides details on installed applications</li></ul> |
| MS Office Applications     | This report provides host-level details on which Microsoft Office applications are installed.                                         | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top MS Office applications</li><li>Table – Provides details on MS Office applications</li></ul> |
