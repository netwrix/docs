---
title: "AD_CertificateAuthorityRights Job"
description: "AD_CertificateAuthorityRights Job"
sidebar_position: 10
---

# AD_CertificateAuthorityRights Job

The AD_CertificateAuthorityRights job provides details on certificate enrollment permissions,
specifically risky permissions where users have write or higher access.

#### Analysis Tasks for the AD_CertificateAuthorityRights Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** >
**AD_CertificateAuthorityRights** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_CertificateAuthorityRights Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/domains/certificateauthorityrightsanalysis.webp)

The default analysis tasks are:

- Certificate Enrollment Rights – Creates a view to show all certificate enrollment permissions
- General Audit – Audits certificate template settings
- Risky Template Permissions – Identifies write and higher permissions on templates, which are
  considered risky. Creates the SA_AD_CertificateConfiguration_TemplateRiskyPermissions table
  accessible under the job’s Results node.
- Risky Permissions Summary – Summarizes the count of risky permissions by principal and permission
  type

In addition to the tables and views created by the analysis tasks, the AD_CertificateAuthorityRights
job produces the following pre-configured report.

| Report                 | Description                                                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enrollment Permissions | This report highlights vulnerable Access control Lists (ACLs) with permissions or owners assigned to open groups and non-standard ACLs with owners that are not domain or enterprise admins. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays risky permissions by principal</li><li>Pie Chart – Displays risky permissions by count</li><li>Table – Provides details on risky permissions</li></ul> |
