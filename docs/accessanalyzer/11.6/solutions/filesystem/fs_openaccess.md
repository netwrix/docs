---
title: "1.Open Access > FS_OpenAccess Job"
description: "1.Open Access > FS_OpenAccess Job"
sidebar_position: 30
---

# 1.Open Access > FS_OpenAccess Job

The FS_OpenAccess job is designed to report on Open Access information from targeted file servers.
The definition of Open Access is when a security principal, such as Everyone, Authenticated Users,
or Domain Users, have permissions on a resource.

![1.Open Access > FS_OpenAccess Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/filesystem/openaccessjobstree.webp)

The FS_OpenAccess job is located in the 1.Open Access job group.

## Analysis Tasks for the FS_OpenAccess Job

View the analysis tasks by navigating to the **FileSystem** > **1.Open Access** >
**FS_OpenAccess** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_OpenAccess Job](/images/accessanalyzer/11.6/solutions/filesystem/openaccessanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Find Open Access** – Creates the SA_FS_OpenAccess_OpenResources table accessible under the
       job’s Results node
-   **2. Sum by Host - Summarized Access Sprawl** – Creates the SA_FS_OpenAccess_HostsRanked table
       accessible under the job’s Results node
-   **3. Sum by Share** – Creates the SA_FS_OpenAccess_SharesRanked table accessible under the job’s
       Results node
-   **4. Content Type in Share - Categorizes shared content:**

    - Creates an interim processing view in the database for use by downstream analysis and report
      generation
    - Creates the SA_FS_OpenAccess_ShareContent view accessible under the job’s Results node

-   **5. Content by Host** – Updates the SA_FS_OpenAccess_HostsRanked table accessible under the job’s
       Results node
-   **6. Remediation Tracking - Track Status of Shares Throughout Time** – Creates an interim processing
       view in the database for use by downstream analysis and report generation
-   **7. Track Remediation by Months - Track Status of Shares Throughout Time** – Creates an interim
       processing view in the database for use by downstream analysis and report generation
-   **8. Assign Risk Ratings to Hosts and Shares** – Updates the SA_FS_OpenAccess_HostsRanked and the
       SA_FS_OpenAccess_SharesRanked tables accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_OpenAccess job produces
the following pre-configured reports:

| Report                               | Description                                                                                                                                                           | Default Tags                                          | Report Elements                                                                                                                                                                   |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Folder Details (Open Folder Details) | This report identifies all open folders within the targeted environment.                                                                                              | None                                                  | This report is comprised of one element: <ul><li>Table – Provides details on open folders</li></ul>                                                                               |
| Hosts with Open Access               | This report identifies hosts with the highest number of open folders.                                                                                                 | None                                                  | This report is comprised of two elements: <ul><li>Bar Chart – Displays top hosts by open folder count</li><li>Table – Provides details on hosts with open folder access</li></ul> |
| Open Shares                          | This report identifies shares with open resources. The Open Access column shows the highest levels of access given to all users in any one resource inside the share. | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: <ul><li>Bar Chart – Displays largest open shares by folder count</li><li>Table – Provides details on open shares</li></ul>              |
| Remediation Status                   | This report identifies the historical success of the organization's share management effort.                                                                          | None                                                  | This report is comprised of two elements: <ul><li>Column Chart – Displays the remediation status</li><li>Table – Provides details on remediation status</li></ul>                 |
