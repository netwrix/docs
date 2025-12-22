---
title: "3-AD_Exceptions Job"
description: "3-AD_Exceptions Job"
sidebar_position: 40
---

# 3-AD_Exceptions Job

The 3-AD_Exceptions Job identifies toxic conditions that exist within Active Directory which may
leave your environment at risk or add unnecessary administrative overhead. It is dependent on
running the 1-AD_Scan Job, also located in the .Active Directory Inventory Job Group.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The 3-AD_Exceptions Job has the following configurable parameters:

- Threshold of group members
- Threshold of nesting
- Threshold necessary to identify a stale group (0-100%)
- Whether to include disabled users that are stale
- Whether to include expired users that are stale
- Threshold for token size
- List of administrative groups

See the
[Customize Analysis Parameters for the 3-AD_Exceptions Job](#customize-analysis-parameters-for-the-3-ad_exceptions-job)
topic for additional information.

## Analysis Tasks for the 3-AD_Exceptions Job

View the analysis tasks by navigating to the **.Active Directory Inventory** > **3-AD_Exceptions** >
**Configure** node and select **Analysis**. Analysis tasks with configuration parameters that define
the security concerns within them can be modified.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the 3-AD_Exceptions Job](/images/accessanalyzer/11.6/solutions/activedirectoryinventory/exceptionsanalysis.webp)

The following analysis tasks are selected by default:

- Large Groups

    - Identifies groups that exceeded the defined threshold for effective group membership
    - Populates processing tables in the database for use by downstream analysis and report
      generation
    - Definition of a large group can be customized

- Deeply Nested Groups

    - Identifies groups that exceeded the defined threshold of deep levels of membership nesting
    - Populates processing tables in the database for use by downstream analysis and report
      generation
    - Definition of a deeply nested group can be customized

- Circular Nesting

    - Identifies groups with circular references in their effective membership
    - Populates processing tables in the database for use by downstream analysis and report
      generation

- Empty Groups

    - Identifies groups with no membership
    - Populates processing tables in the database for use by downstream analysis and report
      generation

- Single Member Groups

    - Identifies groups with a single direct member
    - Populates processing tables in the database for use by downstream analysis and report
      generation

- Stale Users

    - Identifies user accounts that are expired, are disabled, or have exceeded the defined
      threshold of inactivity
    - Populates processing tables in the database for use by downstream analysis and report
      generation
    - Definition of a stale user can be customized

- Stale Membership

    - Identifies groups with a high percentage of effective members that are stale users
    - Populates processing tables in the database for use by downstream analysis and report
      generation
    - Definition of stale membership can be customized

- Large Token

    - Identifies users that exceeded the defined threshold for effective membership in authorization
      groups
    - Populates processing tables in the database for use by downstream analysis and report
      generation
    - Definition of a large token can be customized

- Historical SID Tampering

    - Identifies users that have a historical SID from their current domain
    - Populates processing tables in the database for use by downstream analysis and report
      generation

- Admin Historical SID

    - Identifies users that have a historical SID from an administrator account
    - Populates processing tables in the database for use by downstream analysis and report
      generation
    - Definition of an administrator group can be customized

- Display Exceptions View – Creates the SA_ADInventory_ExceptionsView accessible under the job’s
  Results node
- Summarize Exceptions Count – Generates data used in the Exceptions report

In addition to the tables and views created by the analysis tasks, the 3-AD_Exceptions Job produces
the following pre-configured report:

| Report                                    | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exceptions Summary (A.K.A. AD Exceptions) | This report summarizes common issues with user accounts and group membership | None         | This report is comprised of three elements: <ul><li>Pie Chart – Displays exceptions by class</li><li>Table – Provides exceptions by count</li><li>Table – Provides details on exceptions</li></ul> |


### Customize Analysis Parameters for the 3-AD_Exceptions Job

Exception definitions that can be customized have the following default values for the customizable
parameters:

| Analysis Task        | Customizable Parameter Name | Default Value                                                                   | Value Indicates                                                       |
| -------------------- | --------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Large Groups         | @LARGE_THRESHOLD            | 10                                                                              | A group object with 10 members or more                                |
| Deeply Nested Groups | @NESTING_THRESHOLD          | 1                                                                               | A group object nested 1 level or deeper within another group object   |
| Stale Users          | @STALE_THRESHOLD            | 60                                                                              | A user object that has been inactive for 60 days or more              |
|                      | @INCLUDE_DISABLED           | True                                                                            | A user object that has been disabled                                  |
|                      | @INCLUDE_EXPIRED            | True                                                                            | A user object that has expired                                        |
| Stale Membership     | @STALE_THRESHOLD            | 10                                                                              | A group with 10% of its effective members are stale users             |
| Large Token          | @TOKEN_THRESHOLD            | 10                                                                              | A user object with effective membership in more than 10 group objects |
| Admin Historical SID | #ADMIN_GROUPS               | <ul><li>Domain Admins</li><li>Enterprise Admins</li><li>Schema Admins</li></ul> | List of administrative groups                                         |


See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for instructions to modify the parameters. See the
[AD Exception Types Translated](/docs/accessanalyzer/11.6/admin/datacollector/adinventory/standardtables.md#ad-exception-types-translated)
topic for an explanation of Exception Types.
