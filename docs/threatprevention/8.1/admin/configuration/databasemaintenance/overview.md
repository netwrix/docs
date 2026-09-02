---
title: "Database Maintenance Window"
description: "Database Maintenance Window"
sidebar_position: 20
---

# Database Maintenance Window

The database maintenance function grooms the NVMonitorData database to optimize performance. It
automatically deletes or archives data aged beyond a specified threshold. You can set the threshold
per Event Type, per Analytics, and/or per Policy. Although you can enable all three options with
different retention periods, the Event Type maintenance settings take precedence over Policy
maintenance settings where the selected policy employs that event type.

If you choose to archive data rather than delete it, you must specify a database for data
archiving. For this database, you can also define settings to delete data aged beyond a specified
threshold.

:::tip
See the Database Maintenance Permission details in the
[Database Maintenance Feature Requirements](/docs/threatprevention/8.1/requirements/sqlserver/dbmaintenance.md) topic.
:::


See the [Stored Procedures](/docs/threatprevention/8.1/admin/configuration/databasemaintenance/storedprocedures.md) topic for additional information on stored
procedures Threat Prevention uses on its SQL Server databases.

To configure database maintenance:

**Step 1 –** Click **Configuration** > **Database** > **Maintenance** on the menu. The Database
Maintenance window opens.

This window is only available to Threat Prevention administrators.

![Threat Prevention WinConsole Warning window](/images/threatprevention/8.1/admin/configuration/databasemaintenance/warning.webp)

The database maintenance feature is only available if the SQL Server Agent service is running on the
SQL Server host. A warning message displays instead of the Database Maintenance window if this
service isn't running.

To enable the service, go to **Start** > **Administrative Tools** > **Services** interface and start
the SQL Server Agent (MSSQLSERVER).

When the SQL Server Agent service is running, the Database Maintenance window opens.

![Database Maintenance window](/images/threatprevention/8.1/admin/configuration/databasemaintenance/databasemaintenance.webp)

The top of the window displays the following information:

- Database Information:

> - Server – SQL Server where Threat Prevention performs database maintenance
> - Database – Name of the database
> - Database Size – Current size of the database
> - Oldest Data – Date of the oldest data in the database

- Job Information:
  - Last run – Date timestamp when the last database maintenance job ran
  - Status – Status of the job. Different statuses are:
    - Idle – Indicates that no database maintenance task is running
    - Succeeded – Indicates that the most recent job finished without error
    - Running – Indicates that a job is running
    - Error – Indicates that the job started but terminated on an error
  - Running Step – During job execution, this field populates with the current step
  - Elapsed Time – Overall elapsed time of job execution

The Refresh button in the upper-right corner refreshes this database and job information.

**Step 2 –** On the Event Type, Analytics, and/or Policy tabs, enable maintenance for all or some of
the options. See the [Enable Database Maintenance](/docs/threatprevention/8.1/admin/configuration/databasemaintenance/enable.md) topic for additional information.

**Step 3 –** On the Schedule tab, set the frequency and time when the database maintenance job runs.
See the [Schedule Database Maintenance](/docs/threatprevention/8.1/admin/configuration/databasemaintenance/schedule.md) topic for additional information.

**Step 4 –** To use the Move operation, you must specify a database on the Archive DB tab. You can
also define settings to delete data aged beyond a specified threshold from the archive database. See
the [Archive Data](/docs/threatprevention/8.1/admin/configuration/databasemaintenance/archive.md) topic for additional information.

**Step 5 –** Click **Save** to save the changes.

:::info
Configure the SQL Server databases to use 'Simple Recovery Mode' as described in
the [SQL Server Requirements](/docs/threatprevention/8.1/requirements/sqlserver/sqlserver.md). This configuration has a direct
impact on the size of the transaction log during database maintenance delete tasks. If the databases
don't use Simple Recovery Mode, the transaction log may get quite large during
delete tasks.
:::


## Event Type Tab

The Event Type tab displays by default when the Database Maintenance window opens.

![Database Maintenance window - Event Type tab](/images/threatprevention/8.1/admin/configuration/databasemaintenance/eventtype.webp)

Check the **Enabled** box at the top to set database maintenance by event type. The table contains
the following information:

- Enable – Checked box indicates database maintenance is enabled for the event type
- Event Type – Threat Prevention groups data by the following event types:
  - Active Directory – Configure maintenance for all event data collected by the Active Directory
    Changes, Active Directory Lockdown, Active Directory Read Monitoring, AD Replication
    Monitoring, AD Replication Lockdown, Effective Group Membership, FSMO Role Monitoring, GPO
    Setting Lockdown, GPO Setting Changes, LSASS Guardian – Monitor, LSASS Guardian – Protect, and
    Password Enforcement Event Types
  - Authentications – Configure maintenance for all event data collected by the Authentication
    Monitoring and Authentication Lockdown Event Types. This doesn't apply to Analytics policy
    data
  - Exchange – Configure maintenance for all event data collected by the Exchange Changes and
    Exchange Lockdown Event Types
  - File System – Configure maintenance for all event data collected by the File System Changes,
    File System Lockdown, and File System Enterprise Auditor Event Types
  - LDAP – Configure maintenance for all event data collected by the LDAP Monitoring, LDAP
    Lockdown, and LDAP Bind Monitoring Event Types
- Operation – The operation set for the event type: Move (for archiving) or Delete
- Retention Period – The age of data to retain when the database maintenance job runs
  for the event type

## Analytics Tab

Click the **Analytics** tab on the Database Maintenance window.

![Database Maintenance window - Analytics tab](/images/threatprevention/8.1/admin/configuration/databasemaintenance/analytics.webp)

Check the **Enabled** box at the top to set database maintenance by analytic. The table contains the
following information:

- Enable – Checked box indicates database maintenance is enabled for the analytic
- Analytic Name – Name of each analytic
- Operation – The operation set for the analytic: Move (for archiving) or Delete
- Retention Period – The age of data to retain when the database maintenance job runs
  for the analytic
- Incident Count – The number of incidents recorded in the database for each analytic
- Event Count – The number of events for the recorded incidents in the database for each analytic

You can sort the rows in the table alphanumerically by the Analytic Name, Incident Count, or Event
Count column.

Above the table is a cumulative count of:

- Total Incidents – The number of incidents recorded in the database for all analytics
- Total Events – The number of events for the recorded incidents in the database for all analytics

## Policy Tab

Click the **Policy** tab on the Database Maintenance window.

![Database Maintenance window - Policy tab](/images/threatprevention/8.1/admin/configuration/databasemaintenance/policy.webp)

Check the **Enabled** box at the top to set database maintenance by policy. The table contains the
following information:

- Enable – Checked box indicates database maintenance is enabled for the policy
- Policy – Name of each policy you created. The tab lists policies in alphanumeric order, showing
  live policies (whether or not they are enabled) first and deleted policies last
- Operation – The operation set for the policy: Move (for archiving) or Delete
- Retention Period – The age of data to retain when the database maintenance job runs
  for the policy
- Event Count – The number of events for the recorded incidents in the database for each policy

Above the table is a cumulative count of:

- Total Events – The number of events for the recorded incidents in the database for all policies

You can sort the rows in the table alphanumerically by the Policy or Event Count column. Deleted
policies always appear after all other policies.
