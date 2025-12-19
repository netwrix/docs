---
title: "AD_DuplicateUsers Job"
description: "AD_DuplicateUsers Job"
sidebar_position: 30
---

# AD_DuplicateUsers Job

The AD_DuplicateUsers Job helps to identify multiple user accounts which may be owned by a single
employee. A user may have accounts in multiple domains or administrative accounts with greater
access than their normal account.

## Analysis Tasks for the AD_DuplicateUsers Job

Navigate to the **Active Directory** > **2.Users** > **AD_DuplicateUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_DuplicateUsers Job](/images/accessanalyzer/12.0/solutions/activedirectory/users/duplicateusersanalysis.webp)

The default analysis tasks are:

- Potential Duplicates Details – Creates the SA_AD_DuplicateUsers_Details table accessible under the
  job’s Results node
- User Details – Creates the SA_AD_DuplicateUsers_DomainSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_DuplicateUsers Job
produces the following pre-configured report:

| Report                  | Description                                                                                                          | Default Tags | Report Elements                                                                                                                                                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicate User Accounts | This report identifies user accounts which may belong to a single employee, based on a variety of common attributes. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays a domain summary</li><li>Table – Provides details on matches</li><li>Table – Provides details on duplicate user accounts by domain</li></ul> |
