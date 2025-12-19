---
title: "SP_TrusteeAudit Job"
description: "SP_TrusteeAudit Job"
sidebar_position: 20
---

# SP_TrusteeAudit Job

The SP_TrusteeAudit Job runs analysis tasks and generates a report on effective access of specified
trustees. This job provides functionality similar to the Access Information Center by allowing
scoped audits of user access across the targeted SharePoint environment.

## Analysis Tasks for the SP_TrusteeAudit Job

Navigate to the **Jobs** > **SharePoint** > **Effective Access Audits** > **SP_TrusteeAudit** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_TrusteeAudit Job](/images/accessanalyzer/12.0/solutions/sharepoint/effectiveaccessaudits/trusteeauditanalysis.webp)

The default analysis tasks are:

-   **1. Find Effective Access. Returns Only Site Collections** – Creates the SA_SP_TrusteeAudit_Results
       table accessible under the job’s Results node
-   **2. Find Direct Permissions. Unscoped - All Resource Types** – Creates the
       SA_SP_TrusteeAudit_DirectPermissions table accessible under the job’s Results node
-   **3. Summarize Access** – Creates an interim processing table in the database for use by downstream
       analysis and report generation

In addition to the tables created by the analysis tasks which display effective access for the
specified trustees, the SP_TrusteeAudit Job produces the following pre-configured report:

| Report                 | Description                                                                                                                                     | Default Tags | Report Elements                                                                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Site Collection Access | This report shows what site collections a domain user has effective and direct access to. Audited users are scoped in the SP_TrusteeAccess job. | None         | This report is comprised of three elements: <ul><li>Table – Provides user summary details</li><li>Table – Provides details on site collections with effective access</li><li>Table – Provides details on direct permissions</li></ul> |
