---
sidebar_position: 5073
title: SG_SecuritySupportProviders Job
---

# SG\_SecuritySupportProviders Job

The SG\_SecuritySupportProviders job identifies security support providers on all targeted hosts, highlighting potentially malicious SSPs.

## Queries for the SG\_SecuritySupportProviders Job

The SG\_SecuritySupportProviders job uses the Registry Data Collector for the following queries:

**CAUTION:** The queries are preconfigured for this job. Never modify the queries.

![Queries for the SG_SecuritySupportProviders Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/Authentication/SecuritySupportProvidersQueries.png "Queries for the SG_SecuritySupportProviders Job")

The queries for the SG\_SecuritySupportProviders job are:

* Security Support Providers LSA – Determines security support providers in the LSA Key
* Security Support Providers OSConfig – Determines security support providers in the OSConfig key

## Analysis Tasks for the SG\_SecuritySupportProviders Job

Navigate to the **Windows** > **Authentication** > **SG\_SecuritySupportProviders** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_SecuritySupportProviders Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/Authentication/SecuritySupportProvidersAnalysis.png "Analysis Tasks for the SG_SecuritySupportProviders Job")

The default analysis tasks are:

* Track changes – Creates the SG\_SecuritySupportProviders\_ChangeTracking table accessible under the job’s Results node
* List security support provider details – Creates the SG\_SecuritySupportProviders\_Details table accessible under the job’s Results node
* Summarize security support provider details – Creates an interim processing table in the database for use by downstream analysis and report generation

The optional analysis tasks are:

* Bring changes from last run to console – Creates the SG\_SecuritySupportProviders\_LastRun table accessible under the job’s Results node
* Notify on changes – Creates the SG\_SecuritySupportProviders\_LastRun\_NOTIFICATION table accessible under the job’s Results node

In addition to the tables created by the data collector, the SG\_SecuritySupportProviders job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Security Support Providers | This report lists non-standard security support providers in the audited environment. | None | This report is comprised of two elements:   * Pie Chart – Displays malicious security support providers by host * Table – Provides malicious security support providers details |