---
title: "Roles & the Schedule Service Account"
description: "Roles & the Schedule Service Account"
sidebar_position: 30
---

# Roles & the Schedule Service Account

Once Role-Based Access is enabled, a user or group with the appropriate access role has the ability
to schedule a job or job group as a Schedule Service Account at the **Settings** > **Schedule**
node. Multiple accounts can be added as needed.

**Who Configures This Account?**

- Administrator role
- Power User role
- Global Options Administrator role

Whose Credentials Should Be Used as the Schedule Service Account?

- A user with either:

    - Administrator role
    - Power User role
    - Job Initiator role

:::note
In order to run or schedule a Host Inventory query, the Schedule Service Account must have
an Administrator, Power User, or Host Management Administrator role. Therefore, if the account has
the Job Initiator role assigned, it must have the Host Management Administrator role as well.
:::


The Schedule Service Account is used to access the Task folders when scheduling tasks and to apply
locks on jobs.

- Schedule Tasks

    - In order to have the appropriate level of rights to schedule tasks, the credentials specified
      must at least have the following:

        - Create Files/Write Data rights on the Windows Task Folder
        - Create Files/Write Data rights on the System 32 Task folder
        - Otherwise, they should have local Administrator privileges on the Access Analyzer Console
          server

    - The user whose credentials are specified must also have a role that allows the scheduling of
      tasks – Administrator, Power User, or Job Initiator

- Apply Locks

    :::note
    If the Access Analyzer user whose credentials are used has the role of Job Initiator,
    the job must be locked in order for it to execute successfully.
    :::


    - These credentials are used to apply locks on jobs, enabling the Job Approver to have fewer
      rights on the Jobs directory. Therefore, the credentials specified must at least have the
      following:

        - Modify rights on this directory
        - Otherwise, these credentials should have local Administrator privileges on the Access
          Analyzer Console server

    - The Job Approver uses these credentials to apply locks. Therefore, the Job Approver must be
      added to the local policy **Impersonate a client after Authentication**.

Do not choose the **Use local System account to schedule tasks** option. This account does not have
the appropriate rights to apply locks on jobs. Therefore, it does not work in conjunction with Role
Based Access.

See the [Schedule](/docs/accessanalyzer/12.0/admin/settings/schedule.md) topic for additional instructions on configuring the Schedule
Service Account.

:::tip
Remember, these credentials must be for a user with local Administrator privileges or rights to
the Windows Task Folder and the System 32 Task folder on the Access Analyzer Console server.
:::
