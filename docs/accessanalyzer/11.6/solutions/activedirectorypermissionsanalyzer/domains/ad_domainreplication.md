---
title: "AD_DomainReplication Job"
description: "AD_DomainReplication Job"
sidebar_position: 20
---

# AD_DomainReplication Job

The AD_DomainReplication Job highlights all Active Directory permissions applied to domain objects
within the targeted domains.

## Analysis Tasks for the AD_DomainReplication Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** >
**AD_DomainReplication** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_DomainReplication Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/domains/domainreplicationanalysis.webp)

The default analysis tasks are:

- List domain replication permissions – Creates the SA_AD_DomainReplication_Details table accessible
  under the job’s Results node
- Summarize replication permission details – Creates an interim processing table in the database for
  use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_DomainReplication Job
produces the following pre-configured report.

| Report                         | Description                                                                                          | Default Tags | Report Elements                                                                                                                                                                                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Replication Permissions | This report highlights domain replication permissions applied to domain objects in active directory. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays replication permission summary by domain</li><li>Table – Provides details on replication permissions</li><li>Table – Provides details on top users by replication permissions</li></ul> |
