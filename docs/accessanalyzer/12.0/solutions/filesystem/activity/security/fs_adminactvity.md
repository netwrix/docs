---
title: "FS_AdminActvity Job"
description: "FS_AdminActvity Job"
sidebar_position: 10
---

# FS_AdminActvity Job

The FS_AdminActivity job is designed to report on administrator related activity event information
from targeted file servers.

## Analysis Tasks for the FS_AdminActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Security** >
**FS_AdminActivity** > **Configure** node and select Analysis.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_AdminActivity Job](/images/accessanalyzer/12.0/solutions/filesystem/activity/security/adminactivityanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Create Admin Activity View** – Creates an interim processing view in the database for use by
       downstream analysis and report generation
-   **2. Effective Access to Locations with Admin Activity** – Creates an interim processing table in
       the database for use by downstream analysis and report generation
-   **3. Suspicious Admin Activity** – Creates the SA_FS_AdminActivity_SuspiciousActivity table
       accessible under the job’s Results node
-   **4. Operations Overview** – Creates an interim processing table in the database for use by
       downstream analysis and report generation
-   **5. Rank admins by activity** – Creates an interim processing table in the database for use by
       downstream analysis and report generation
-   **6. Pivot Admin Activity for Details Report** – Creates an interim processing table in the database
       for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_AdminActivity job produces
the following pre-configured reports:

| Report                          | Description                                                                                    | Default Tags                                          | Report Elements                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Administrator Activity Details  | This report shows the details of administrator activity on file shares.                        | None                                                  | This report is comprised of one element: <ul><li>Table – Provides details on last 30 days of administrator activity</li></ul>                                                      |
| Administrator Activity Overview | This report identifies the types of actions administrators are performing across your network. | None                                                  | This report is comprised of two elements: <ul><li>Pie Chart – Displays last 30 days of administrator activity</li><li>Table – Provides details on types of actions</li></ul>       |
| Most Active Administrators      | This report ranks administrators by number of shares they have activity in.                    | None                                                  | This report is comprised of two elements: <ul><li>Bar Chart – Displays last 30 days of administrator activity</li><li>Table – Provides details on administrator activity</li></ul> |
| Suspicious Admin Activity       | This report highlights all administrator reads in shares where they do not have access.        | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of one element: <ul><li>Table – Provides details on last 30 days of administrator activity</li></ul>                                                      |
