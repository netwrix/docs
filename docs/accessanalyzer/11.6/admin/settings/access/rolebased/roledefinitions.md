---
title: "Role Definitions"
description: "Role Definitions"
sidebar_position: 10
---

# Role Definitions

The following is a list of all roles leveraged within Enterprise Auditor once Role Based Access is
enabled, including their intended functionality. A user may have more than one role assigned to
them.

:::note
When a job is moved or copied to a separate job group, it inherits the assigned roles at
the parent and global level from the new job group. Any previous role inheritance is overwritten.
:::


- OS Administrator – Used only for installation purposes

    - This is not not a configured role, but rather the access required during installation

- Administrator – At least one must be set before any other roles are assigned

    - Full functionality from all roles within the Enterprise Auditor Console
    - Rights to view all reports, tags, and report permissions within the Web Console
    - Rights to preform an upgrade on Enterprise Auditor

:::note
In order to use Role Base Access with the Exchange Solution, all Exchange users must be
assigned the Administrator role. This is because the solution requires local Administrator rights on
the Enterprise Auditor Console server.
:::


- Power User

    - Rights to add, modify, and delete global settings, except for the **Setting** > **Access**
      node
    - Not able to view or modify Roles at the global level
    - Has rights to add and break inheritance on report viewers at the job group, job, and report
      configuration levels
    - Rights to modify host management settings as well as run host inventory queries
    - Rights to create, modify, and delete jobs as well as view the results of a job. They need to
      be able to manage all configuration settings related to those jobs.
    - Rights to view previously configured jobs and approve them to be run. They are also able to
      view the results of a job.
    - Rights to run jobs which have been approved, as well as disable or enable jobs and job groups
    - Rights to view all reports, tags, and report permissions within the Web Console

- Access Administrator

    - Rights to add, modify, and delete global roles except for own roles. This is to restrict
      Access Administrators from stepping outside intended rights.
    - Not able to view or modify report roles at any other level
    - Rights to view report Tags within the Web Console but not report content or permissions

- Global Options Administrator

    - Able to modify global settings, except for the **Setting** > **Access** node
    - The Exchange node is the exception due to its requirements. Therefore, this node cannot be
      modified by the Global Options Administrator.
    - Rights to view report Tags within the Web Console but not report content or permissions

- Host Management Administrator

    - Rights to modify host management settings as well as run host inventory queries
    - Rights to view report Tags within the Web Console but not report content or permissions

- Job Builder

    - Rights to create, modify, and delete jobs as well as view the results of a job. They need to
      be able to manage all configuration settings related to those jobs.
    - Rights to view or modify report viewers at the job group, job, and report levels but not the
      global level
    - Rights to view all reports and tags within the Web Console but not the report permissions

- Job Approver

    - Rights to view previously configured jobs and approve them to be run. They are also able to
      view the results of a job.
    - Rights to view all reports and tags within the Web Console but not the report permissions

- Job Initiator

    - Rights to start jobs which have been approved as well as view the results of a job
    - Rights to disable and enable job and job groups
    - Rights to view all reports and tags within the Web Console but not the report permissions

- Job Initiator (No Actions)

    - Rights to start jobs which have been approved as long as there are no configured Actions in
      the job. They are also able to view the results of a job.
    - Rights to disable and enable job and job groups
    - Rights to view all reports and tags within the Web Console but not the report permissions

- Job Viewer

    - Only able to view the results of a job
    - Rights to view all reports and tags within the Web Console but not the report permissions

- Web Administrator

    - Not able to access the Enterprise Auditor Console
    - Rights to view all reports, tags, and report permissions within the Web Console

- Report Viewer

    - Not able to access the Enterprise Auditor Console
    - Only able to view reports and tags within the Web Console but not the report permissions
    - Access to reports is restricted according to where the Report Viewer role is assigned:

        - Assigned at the Global level (**Settings** > **Roles**) – Able to view all published
          reports
        - Assigned at the Job Group level (**Jobs** > **[Job Group]** > **Settings**  >
          **Reporting**) – Able to view all reports published by the jobs within this job group
        - Assigned at the Job level (**Jobs** > **[Job Group]** > **[Job]** > **Job Properties** >
          **Report Roles** tab) – Able to view all reports published by this job
        - Assigned at the Report configuration level (**Jobs** >**[Job Group]** >**[Job]** >
          **Configure** > **Reports**> **Configure** > **Publish Security** page) – Able to view
          only this report

By default, many roles are granted rights to view all reports and report content. The inheritance of
the Report Viewer role can be broken at the job group, job, or report configuration levels. See the
[Report Viewer Inheritance](#report-viewer-inheritance) topic for additional information.

## Enterprise Auditor Console Roles & Rights

These tables show the rights granted to different user levels to the Enterprise Auditor Console.

### Administrators

This table identifies the rights granted to administrative users to the Enterprise Auditor Console.

| Action                                                                                                                              | Administrator | Global Options Administrator | Access Administrator | Host Management Administrator | OS Administrator |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------- | -------------------- | ----------------------------- | ---------------- |
| View Reports within the Web Console                                                                                                 | Yes           | No                           | No                   | No                            | No               |
| View Report Tags within the Web Console                                                                                             | Yes           | Yes                          | Yes                  | Yes                           | No               |
| View Report Permissions within the Web Console                                                                                      | Yes           | No                           | No                   | No                            | No               |
| Access the Enterprise Auditor Console (after Role Based Access is enabled)                                                          | Yes           | Yes                          | Yes                  | Yes                           | No               |
| Read All Configuration Logs                                                                                                         | Yes           | Yes                          | Yes                  | Yes                           | No               |
| Manage / Edit Access Roles                                                                                                          | Yes           | No                           | Yes                  | No                            | No               |
| Manage Global Settings (includes Connection Profiles)                                                                               | Yes           | Yes                          | No                   | No                            | No               |
| Manage / Edit Hosts in Job                                                                                                          | Yes           | No                           | No                   | No                            | No               |
| Manage / Edit Job Definitions                                                                                                       | Yes           | No                           | No                   | No                            | No               |
| Run Jobs                                                                                                                            | Yes           | No                           | No                   | No                            | No               |
| Manage / Edit Job Schedules                                                                                                         | Yes           | No                           | No                   | No                            | No               |
| Manage Host Management Settings (includes scheduling and running of host discovery, but not host related nodes in Global  Settings) | Yes           | No                           | No                   | Yes                           | No               |
| Lock / Unlock Jobs                                                                                                                  | Yes           | No                           | No                   | No                            | No               |
| Enable/Disable Jobs                                                                                                                 | Yes           | No                           | No                   | No                            | No               |
| Install / Uninstall Data Collectors (or other tool components)                                                                      | Yes           | No                           | No                   | No                            | Yes              |
| Upgrade Enterprise Auditor Console                                                                                                  | Yes           | No                           | No                   | No                            | No               |

### Users

This table identifies the rights granted to users who have access to the Enterprise Auditor Console.

| Action                                                                                                                             | Power User | Job Builder | Job Approver | Job Initiator | Job Initiator (No Actions) | Job Viewer |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- | ------------ | ------------- | -------------------------- | ---------- |
| View Reports within the Web Console                                                                                                | Yes        | Yes         | Yes          | Yes           | Yes                        | Yes        |
| View Report Tags within the Web Console                                                                                            | Yes        | Yes         | Yes          | Yes           | Yes                        | Yes        |
| View Report Permissions within the Web Console                                                                                     | Yes        | No          | No           | No            | No                         | No         |
| Access the Enterprise Auditor Console (after Role Based Access is enabled)                                                         | Yes        | Yes         | Yes          | Yes           | Yes                        | Yes        |
| Read All Configuration Logs                                                                                                        | Yes        | Yes         | Yes          | Yes           | Yes                        | Yes        |
| Manage / Edit Access Roles                                                                                                         | No         | No          | No           | No            | No                         | No         |
| Manage Global Settings (includes Connection Profiles)                                                                              | Yes        | No          | No           | No            | No                         | No         |
| Manage / Edit Hosts in Job                                                                                                         | Yes        | Yes\*       | No           | No            | No                         | No         |
| Manage / Edit Job Definitions                                                                                                      | Yes        | Yes\*       | No           | No            | No                         | No         |
| Run Jobs                                                                                                                           | Yes        | No          | No           | Yes\*\*       | Yes\*\*\*                  | No         |
| Manage / Edit Job Schedules                                                                                                        | Yes        | No          | No           | Yes\*\*       | Yes\*\*\*                  | No         |
| Manage Host Management Settings (includes scheduling and running of host discovery, but not host related nodes in Global Settings) | Yes        | No          | No           | No            | No                         | No         |
| Lock / Unlock Jobs                                                                                                                 | Yes        | No          | Yes          | No            | No                         | No         |
| Enable/Disable Jobs                                                                                                                | Yes        | No          | No           | Yes           | Yes                        | No         |
| Install / Uninstall Data Collectors (or other tool components)                                                                     | Yes        | No          | No           | No            | No                         | No         |
| Upgrade Enterprise Auditor Console                                                                                                 | No         | No          | No           | No            | No                         | No         |

**\*When jobs are unlocked**

\*\*When jobs are locked

**\*\*\*When jobs are locked and have no actions**

## Web Console Roles & Rights

This table identifies the rights granted to users who have access only to the Web Console.

| Action                                         | Web Administrator | Report Viewer |
| ---------------------------------------------- | ----------------- | ------------- |
| View Reports within the Web Console            | Yes               | Yes\*         |
| View Report Tags within the Web Console        | Yes               | Yes\*         |
| View Report Permissions within the Web Console | Yes               | No            |

**\*According to where the role is assigned**

## SQL Server Database Roles & Rights

This table describes the roles that will be created within the SQL Server database and what rights
they will have to the Enterprise Auditor database. It also describes which Enterprise Auditor roles
they are mapped to.

| Database Role(s)                              | Enterprise Auditor Role                                      | Rights                                                                                                                                                                      | Role Description                                                                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SMP Administrator db_datareader db_datawriter | Administrator Job Initiator Job Initiator (No Actions)       | On the dbo schema: ALTER, EXECUTE, INSERT, UPDATE, REFERENCES On the Enterprise Auditor database: CREATE TABLE, CREATE VIEW, CREATE PROCEDURE, CREATE FUNCTION, CREATE TYPE | This role is used by full Administrators and Job Initiators who must run the 2-FSAA Bulk Import Job which requires manipulation of the Enterprise Auditor database |
| SMP Builder                                   | Job Builder Host Management Administrator                    | On the dbo schema: ELECT, INSERT, DELETE On the Enterprise Auditor database: CREATE TABLE                                                                                   | This role is used by the Job Builder who must be able to create/delete tables, view data, and insert and delete hosts from the Enterprise Auditor Console          |
| SMP Viewer                                    | Job Viewer Access Administrator Job Approver All other roles | On the dbo schema: SELECT                                                                                                                                                   | This role is used by all roles who do not require anything more than just reading data and information from the database                                           |

## Report Viewer Inheritance

When Role-Based Access is enabled, users assigned the following roles inherit rights to view all
reports and their content:

- Administrator role
- Power User role
- Job Builder role
- Job Approver role
- Job Initiator role
- Job Initiator (No Actions) role
- Job Viewer
- Web Administrator

Additional users can be assigned the Report Viewer role at the global, job group, job, or report
configuration levels. These rights are inherited down through child objects. However, the Report
Viewer role inheritance can be broken at any level. Break inheritance to remove the right to view
specific reports at:

- Job Group level – **[Job Group]** >**Settings** > **Reporting** node
- Job level – **[Job]** > **Properties** >**Report Roles** tab
- Report Configuration level – **[Job]** > **Configure** > **Reports** node. Click **Configure**
  next to the report, and navigate to the Publish Security page of the Report Configuration wizard.
  See the
  [Publish Security Page](/docs/accessanalyzer/11.6/admin/report/wizard/publishsecurity.md) topic
  for additional information.

| ![Job Group Level](/images/accessanalyzer/11.6/admin/settings/access/rolebased/reportviewerjobgroup.webp) | ![Job Level](/images/accessanalyzer/11.6/admin/settings/access/rolebased/reportviewerjob.webp) | ![Report Configuration Level](/images/accessanalyzer/11.6/admin/settings/access/rolebased/reportviewerreport.webp) |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Job Group Level                                                                                                                           | Job Level                                                                                                                      | Report Configuration Level                                                                                                                         |

There are two options that control inheritance for Report Viewers when selected:

- Include Report Viewers from this object’s parent – Automatically removes any user with the Report
  Viewer role inherited from a parent object at the lower levels
- Set all the child objects to inherit these settings – Only available at the Job Group level. Sets
  all Jobs and Reports to inherit group settings for all child objects by automatically selecting
  the **Include Report Viewers from this object’s parent** option. Any previous configurations are
  overwritten once **Yes** is selected in the confirmation window.
