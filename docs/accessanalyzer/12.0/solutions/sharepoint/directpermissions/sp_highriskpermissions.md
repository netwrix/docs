---
title: "SP_HighRiskPermissions Job"
description: "SP_HighRiskPermissions Job"
sidebar_position: 30
---

# SP_HighRiskPermissions Job

The SP_HighRiskPermissions Job identifies where Authenticated Users, Everyone Except External Users,
Anonymous Logon, or Domain users have been directly assigned permissions

## Analysis Tasks for the SP_HighRiskPermissions Job

Navigate to the **Jobs** > **SharePoint** > **1.Direct Permissions** > **SP_HighRiskPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_HighRiskPermissions Job](/images/accessanalyzer/12.0/solutions/sharepoint/directpermissions/highriskpermissionsanalysis.webp)

The default analysis tasks are:

-   **1. Detailed View** – Creates the SA_SP_HighRiskPermissions_Details table accessible under the
       job’s Results node
-   **2. Permissions Matrix. Resource counts by Permission Level and Trustee** – Creates the
       SA_SP_HighRiskPermissions_Details table (SP_HighRiskPermissions_Matrix) accessible under the
       job’s Results node
-   **3.Open Manage Rights** – Creates the SA_SP_HighRiskPermissions_ManageRights table accessible under
  the job’s Results node
-   **4. Pivot Permissions by Resource Type** – Creates the
       SA_SP_HighRiskPermissions_SiteCollectionSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display information on open resources
from directly applied permissions, the SP_HighRiskPermissions Job produces the following
pre-configured report:

| Report                | Description                                                                                                                                                           | Default Tags                                                  | Report Elements                                                                                                                                                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High Risk Permissions | This report shows permissions of Authenticated Users, Anonymous Logon, or Domain users. Applying these trustees to permissions may inadvertently open security holes. | GDPR, SOX, HIPAA, PCI-DSS, GLBA, ITAR, FERPA, FISMA, ISO27001 | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays Open Resources</li><li>Table – Provides details on resource counts by permissions and high risk trustees</li><li>Table – Provides details top resources with open manage rights</li></ul> |
