---
title: "SP_UnresolvedSIDs Job"
description: "SP_UnresolvedSIDs Job"
sidebar_position: 60
---

# SP_UnresolvedSIDs Job

This job identifies Unresolved SIDs that have permissions to any SharePoint resources. Unresolved
SIDs can be safely cleaned up without affecting user access.

## Analysis Tasks for the SP_UnresolvedSIDs Job

Navigate to the **Jobs** > **SharePoint** > **1.Direct Permissions** > **SP_UnresolvedSIDs** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_UnresolvedSIDs Job](/images/accessanalyzer/12.0/solutions/sharepoint/directpermissions/unresolvedsidsanalysis.webp)

They need to remain in the default order:

-   **1. Create Function** – Creates an interim processing table in the database for use by downstream
       analysis and report generation
-   **2. Find Unresolved SID ACLs** – Creates the SA_SP_UnresolvedSIDs_DirectPermissions table
       accessible under the job’s Results node
-   **3. Find Affected Resource Count per SID** – Creates the SA_SP_UnresolvedSIDs_ResourceCount table
       accessible under the job’s Results node
-   **4. Rank Resources by SID Count** – Creates the SA_SP_UnresolvedSIDs_DirectPermissions table
       accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display direct permissions for
unresolved SIDs, the SP_UnresolvedSIDs Job produces the following pre-configured report:

| Report                     | Description                                                             | Default Tags | Report Elements                                                                                                                                                                                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unresolved SID Permissions | Unresolved SIDs can be safely cleaned up without affecting user access. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top 5 unresolved SIDs by affected resources</li><li>Table – Provides details on resources with unresolved SIDs applied</li><li>Table – Provides details on unresolved SIDs by affected resources</li></ul> |
