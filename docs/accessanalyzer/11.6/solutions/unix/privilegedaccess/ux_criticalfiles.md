---
title: "UX_CriticalFiles Job"
description: "UX_CriticalFiles Job"
sidebar_position: 20
---

# UX_CriticalFiles Job

The UX_CriticalFiles job provides visibility into owners of critical files within audited Unix and
Linux environments such as passwd, shadow, sudoers, hosts.deny, and more.

## Queries for the UX_CriticalFiles Job

The UX_CriticalFIles job uses the Unix Data Collector for the following query:

:::warning
The query is preconfigured for this job. Never modify the query.
:::


![Queries for the UX_CriticalFiles Job](/images/accessanalyzer/11.6/solutions/unix/privilegedaccess/criticalfilesquery.webp)

The query for the UX_CriticalFiles job is:

- Critical File Owners – Finds critical file ownership

## Analysis Tasks for the UX_CriticalFiles Job

Navigate to the **Unix** > **2.Privileged Access** > **UX_CriticalFiles** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the UX_CriticalFiles Job](/images/accessanalyzer/11.6/solutions/unix/privilegedaccess/criticalfilesanalysis.webp)

The default analysis task is:

- Details critical file ownership, highlights top users

    - Creates SA_UX_PrivilegedAccess_CriticalFileOwnership table accessible under the job’s Results
      node
    - Creates SA_UX_PrivilegedAccess_CriticalFileOwners table accessible under the job’s Results
      node

In addition to the tables and views created by the analysis task, the UX_CriticalFiles job produces
the following preconfigured report:

| Report                  | Description                                                                                                                                                       | Default Tags | Report Elements                                                                                                                                                                                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical File Ownership | This report lists the ownership of critical files across the audited environment. The top non-root users and groups with critical file ownership are highlighted. | None         | This report is comprised of three elements: <ul><li>Table – Provides details on Top 5 Critical File Owners (Users)</li><li>Table – Provides details on Top 5 Critical File Owners (Groups)</li><li>Table – Provides information on Critical File Ownership Details</li></ul> |
