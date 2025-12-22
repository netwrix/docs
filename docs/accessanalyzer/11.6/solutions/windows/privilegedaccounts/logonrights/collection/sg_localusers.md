---
title: "SG_LocalUsers Job"
description: "SG_LocalUsers Job"
sidebar_position: 30
---

# SG_LocalUsers Job

The SG_LocalUsers job audits local user accounts from all targeted hosts.

## Queries for the SG_LocalUsers Job

The SG_LocalMembership job uses the UsersGroups Data Collector for the following query:

:::warning
The query is preconfigured for this job. Never modify the query.
:::


![Queries for the SG_LocalUsers Job](/images/accessanalyzer/11.6/solutions/windows/privilegedaccounts/logonrights/collection/localusersquery.webp)

The query for the SG_LocalUsers job is:

- LocalUsers – Collects local user information

## Analysis Tasks for the SG_LocalUsers Job

Navigate to the **Windows** > **Privileged Accounts** > **Logon Rights** > **Collection** >
**SG_LocalUsers** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the SG_LocalUsers Job](/images/accessanalyzer/11.6/solutions/windows/privilegedaccounts/logonrights/collection/localusersanalysis.webp)

The default analysis tasks is:

- Update LocalUsers – Creates an interim processing table in the database for use by downstream
  analysis and report generation
