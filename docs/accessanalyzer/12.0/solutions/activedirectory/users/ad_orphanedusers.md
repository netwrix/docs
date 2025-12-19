---
title: "AD_OrphanedUsers Job"
description: "AD_OrphanedUsers Job"
sidebar_position: 40
---

# AD_OrphanedUsers Job

The AD_OrphanedUsers Job identifies users whose managers are stale or disabled. These user accounts
should be reviewed and appropriate management should be assigned.

## Analysis Tasks for the AD_OrphanedUsers Job

Navigate to the **Active Directory** > **2.Users** > **AD_OrphanedUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_OrphanedUsers Job](/images/accessanalyzer/12.0/solutions/activedirectory/users/orphanedusersanalysis.webp)

The default analysis tasks are:

- Details – Creates the SA_AD_OrphanedUsers_Details table accessible under the job’s Results node
- Domain Summary – Creates the SA_AD_OrphanedUsers_DomainSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_OrphanedUsers Job produces
the following pre-configured report:

| Report         | Description                                                           | Default Tags | Report Elements                                                                                                                                                                                                               |
| -------------- | --------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orphaned Users | A user is considered orphans when their manager is disabled or stale. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top domains by orphaned users</li><li>Table – Provides details on orphaned users</li><li>Provides details on top domains by orphaned users</li></ul> |
