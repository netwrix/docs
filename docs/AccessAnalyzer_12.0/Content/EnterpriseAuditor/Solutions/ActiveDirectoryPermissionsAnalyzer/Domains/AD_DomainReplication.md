---
sidebar_position: 5045
title: AD_DomainReplication Job
---

# AD\_DomainReplication Job

The AD\_DomainReplication Job highlights all Active Directory permissions applied to domain objects within the targeted domains.

## Analysis Tasks for the AD\_DomainReplication Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** > **AD\_DomainReplication** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DomainReplication Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Domains/DomainReplicationAnalysis.png "Analysis Tasks for the AD_DomainReplication Job")

The default analysis tasks are:

* List domain replication permissions – Creates the SA\_AD\_DomainReplication\_Details table accessible under the job’s Results node
* Summarize replication permission details – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD\_DomainReplication Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain Replication Permissions | This report highlights domain replication permissions applied to domain objects in active directory. | None | This report is comprised of three elements:   * Bar Chart – Displays replication permission summary by domain * Table – Provides details on replication permissions * Table – Provides details on top users by replication permissions |