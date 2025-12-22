---
title: "AD_CertificateTemplates Job"
description: "AD_CertificateTemplates Job"
sidebar_position: 20
---

# AD_CertificateTemplates Job

The AD_CertificateTemplates job provides details on certificate template settings.

#### Analysis Tasks for the AD_CertificateTemplates Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** >
**AD_CertificateTemplates** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_CertificateTemplates Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/domains/certificatetemplatesanalysis.webp)

The default analysis tasks are:

- Certificate Templates – Provides details on certificate templates. Creates the
  SA_AD_CertificateAudit_Templates table accessible under the job’s Results node.
- Templates Summary – Summarizes the counts of templates for each Certificate Authority and
  permission

In addition to the tables and views created by the analysis tasks, the AD_CertificateTemplates job
produces the following pre-configured report.

| Report                             | Description                                                                                                 | Default Tags | Report Elements                                                                                                                                                                                                                            |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Certificate Template Configuration | This report highlights certificate templates and their configurations in the audited Certificate Authority. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays templates by Certificate Authority</li><li>Pie Chart – Displays templates by permission count</li><li>Table – Provides details on certificate templates</li></ul> |
