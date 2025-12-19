---
title: "0-Create Schema Job"
description: "0-Create Schema Job"
sidebar_position: 10
---

# 0-Create Schema Job

The 0-Create Schema job within the 0.Collection job group creates and updates the schema for the
tables, views, and functions used by the rest of the File System Solution. This job needs to run
prior to the other jobs in the 0.Collection job group for both new installations and upgrades. The
job can be scheduled with any of the collections. Do not delete the job from the job tree.

:::info
This job does not need to be moved. Leave it to run as part of the 0.Collection
job group.
:::


## Analysis Tasks for the 0-Create Schema Job

View the analysis task by navigating to the **FileSystem** > **0.Collection** > **0-Create
Schema** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection for the 0-Create Schema Job](/images/accessanalyzer/11.6/solutions/filesystem/collection/createschemaanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Create Tables** – Creates all tables prefaced with SA*FSAA*
-   **2. Create DFS Tables** – Creates all tables prefaced with SA*FSDFS*
-   **3. Create DLP Tables** – Creates all tables prefaced with SA*FSDLP*
-   **4. Create FSAC Tables** – Creates all tables prefaced with SA*FSAC*
-   **5. Create Rename Targets** – Creates the SA_FSAC_Rename Targets tables
-   **6. Create Paths View** – Creates the SA_FSAA_Paths view
-   **7. Update data types** – Enterprise Auditor uses custom SQL data types to render data. This
       analysis creates updates to those data types.
-   **8. Import new functions** – Creates functions used in the File System Solution that only reference
       the .Active Directory Inventory job group data
-   **9. Import new functions** – Creates the FSAA functions used in the File System Solution that
       reference the 0.Collection job group data
-   **10. Create exception types** – Creates the SA_FSAA_ExceptionTypes table
-   **11. Create views** – Creates the SA_FSAA_DirectPermissionsView
-   **12. Create Exceptions Schema** – Creates the SA_FSAC_Exception table and the
        SA_FSAC_ExceptionTypes table
-   **13. Create FSAC Views** – Creates all views prefaced with SA*FSAC*
-   **14. Create Functions** – Creates the FSAC functions used in the File System Solution that
        reference the 0.Collection job group data
-   **15. Create FSDLP Views** – Creates all views prefaced with SA*FSDLP*
-   **16. Create DFS Functions** – Creates the FSDFS functions used in the File System Solution that
        reference the 0.Collection job group data
