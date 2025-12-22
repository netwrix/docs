---
title: "AD_LAPSPermissions Job"
description: "AD_LAPSPermissions Job"
sidebar_position: 20
---

# AD_LAPSPermissions Job

The AD_LAPSPermissions Job identifies Active Directory objects that have access to LAPS attributes
and access to computer objects that may lead to unintended access to LAPS attributes.

## Analysis Tasks for the AD_LAPSPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **4.Computers** >
**AD_LAPSPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_LAPSPermissions Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/computers/lapspermissionsanalysis.webp)

The default analysis tasks are:

- LAPS Permissions – Identifies potential indirect LAPS permissions. Creates the
  SA_AD_LAPSPermissions_Results table accessible under the job’s Results node.
- LAPS Attribute Permissions – Identifies permissions on the LAPS attributes in Active Directory for
  each computer. Creates the SA_AD_LAPSPermissions_Attributes table accessible under the job’s
  Results node.

In addition to the tables and views created by the analysis tasks, the AD_LAPSPermissions Job
produces the following pre-configured reports.

| Report           | Description                                                                                                                                           | Default Tags | Report Elements                                                                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LAPS Attributes  | Identify Active Directory objects that have access to LAPS attributes on Computers within your organization.                                          | None         | This report is comprised of three elements: <ul><li>Pie Chart – Displays top attribute permissions by trustee</li><li>Table – Provides details on attribute permissions by trustee</li><li>Table – Provides details on attributes</li></ul> |
| LAPS Permissions | Identify Active Directory objects that have access to computers objects within your organization that may lead to indirect access to LAPS attributes. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays LAPS permissions by domain</li><li>Pie Chart – Displays LAPS permissions by type</li><li>Table – Provides details on LAPS permissions</li></ul>                    |
