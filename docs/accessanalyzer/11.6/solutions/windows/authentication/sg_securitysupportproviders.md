---
title: "SG_SecuritySupportProviders Job"
description: "SG_SecuritySupportProviders Job"
sidebar_position: 40
---

# SG_SecuritySupportProviders Job

The SG_SecuritySupportProviders job identifies security support providers on all targeted hosts,
highlighting potentially malicious SSPs.

## Queries for the SG_SecuritySupportProviders Job

The SG_SecuritySupportProviders job uses the Registry Data Collector for the following queries:

:::warning
The queries are preconfigured for this job. Never modify the queries.
:::


![Queries for the SG_SecuritySupportProviders Job](/images/accessanalyzer/11.6/solutions/windows/authentication/securitysupportprovidersqueries.webp)

The queries for the SG_SecuritySupportProviders job are:

- Security Support Providers LSA – Determines security support providers in the LSA Key
- Security Support Providers OSConfig – Determines security support providers in the OSConfig key

## Analysis Tasks for the SG_SecuritySupportProviders Job

Navigate to the **Windows** > **Authentication** > **SG_SecuritySupportProviders** > **Configure**
node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SG_SecuritySupportProviders Job](/images/accessanalyzer/11.6/solutions/windows/authentication/securitysupportprovidersanalysis.webp)

The default analysis tasks are:

- Track changes – Creates the SG_SecuritySupportProviders_ChangeTracking table accessible under the
  job’s Results node
- List security support provider details – Creates the SG_SecuritySupportProviders_Details table
  accessible under the job’s Results node
- Summarize security support provider details – Creates an interim processing table in the database
  for use by downstream analysis and report generation

The optional analysis tasks are:

- Bring changes from last run to console – Creates the SG_SecuritySupportProviders_LastRun table
  accessible under the job’s Results node
- Notify on changes – Creates the SG_SecuritySupportProviders_LastRun_NOTIFICATION table accessible
  under the job’s Results node

In addition to the tables created by the data collector, the SG_SecuritySupportProviders job
produces the following pre-configured report.

| Report                     | Description                                                                           | Default Tags | Report Elements                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security Support Providers | This report lists non-standard security support providers in the audited environment. | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays malicious security support providers by host</li><li>Table – Provides malicious security support providers details</li></ul> |
