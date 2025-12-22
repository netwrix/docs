---
title: "FS_HighRiskActivity Job"
description: "FS_HighRiskActivity Job"
sidebar_position: 20
---

# FS_HighRiskActivity Job

The FS_HighRiskActivity job is designed to report on high risk activity event information from
targeted file servers.

## Analysis Tasks for the FS_HighRiskActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Security** >
**FS_HighRiskActivity** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_HighRiskActivity Job](/images/accessanalyzer/12.0/solutions/filesystem/activity/security/highriskactivityanalysis.webp)

-   **0. Drop Tables** – Drops tables from previous runs
-   **1. Analyze for High Risk Activity** – Creates the SA_FS_HighRiskActivity_HighRiskUserActivity
       table accessible under the job’s Results node
-   **2. Pivot High Risk Activity** – Creates the SA_FS_HighRiskActivity_HighRiskDetails table
       accessible under the job’s Results node
-   **3. Summarize Share Activity** – Creates the SA_FS_HighRiskActivity_ShareSummary table accessible
       under the job’s Results node
-   **4. Global User Activity** – Creates an interim processing table in the database for use by
       downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_HighRiskActivity job
produces the following pre-configured report:

| Report             | Description                                                                                                                                                                                                                                                                           | Default Tags                                          | Report Elements                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High Risk Activity | High Risk Activity is any action performed by a user who has access to a particular resource only through a High Risk Trustee (for example, Everyone, Authenticated Users, or Domain Users). Unless action is taken, these users will lose access once the open access is remediated. | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: <ul><li>Pie Chart – Displays last 30 days of activity</li><li>Table – Provides details on activity by user</li><li>Table – Provides details on activity by share</li></ul> |
