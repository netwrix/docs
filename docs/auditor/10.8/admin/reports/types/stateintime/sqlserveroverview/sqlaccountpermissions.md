---
title: "Account Permissions in SQL Server"
description: "Account Permissions in SQL Server"
sidebar_position: 10
---

# Account Permissions in SQL Server

Details the effective permissions that the specified account has on the SQL Server objects of the
selected type. Use this report to review the permissions granted to users through your SQL Server
objects.

![accountpermissionssqlserver_thumb_0_0](/images/auditor/10.7/admin/reports/types/stateintime/accountpermissionssqlserver_thumb_0_0.webp)

## Reported data

The report has a summary section with general information on the selected account, and the details
section presented in the table format.

The summary section shows:

- **User account**— name or SID of the account
- **Account type** —possible values:
    - Windows Account
    - Login SQL Authentication
    - DB SQL User with password
- **Job title** —reported for Active Directory users as set in their corresponding attribute. If not
  set, _`<not set>`_ is reported.
- **Total objects count** — total number of objects that this account has access to.

The detailed information under summary includes:

- **Object path** — monitored object path as formatted by Netwrix Auditor in the activity records
  (see '_What_' field in the reports, search results and activity summaries). For example, if
  reporting on the database hosted on selected SQL Server, the path will be as follows:
  _Databases\database_name_.
- **Object type** — monitored object type; for the full list of supported object types, refer to
  [SQL Server](/docs/auditor/10.8/configuration/sqlserver/overview.md) topic.
- **Means granted** —how access permissions were granted to this account, e.g., _Direct permissions_
  or _Server role permissions_.
- **Effective grant** —the effective set of permissions granted to this account on the selected
  object.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [SQL Server](/docs/auditor/10.8/admin/monitoringplans/sqlserver/overview.md)
- **Item**— name of the SQL Server instance monitored with selected monitoring plan.
- **Object path** — path to the monitored object, as formatted by Netwrix Auditor in the activity
  records (see '_What_' field in the reports, search results and activity summaries). Wildcard (\*)
  is supported. For example, to report on the database hosted on selected SQL Server, specify the
  path as follows: _Databases\database_name_.
- **Object type**— type of the monitored object that provided data for this report. Possible values:
  _Database_, _Server Instance_.
- **Permissions** —access permissions whose assignment you want to be reported for selected account.
- **Means granted** —how access permissions were granted to this account. You can select _Directly_,
  _Inherited_, or both (default setting).
- **Account type** —possible values: _Windows Account_, _Login SQL Authentication_, _DB SQL User
  with password_.
- **User account**—name or SID of the account whose permission assignments are reported.

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.
- Permissions for INFORMATION*SCHEMA granted via \_master db* will not be reported.
- The report will not show the RESTORE capability for the database owner.

- When calculating effective rights and permissions, the following will not be considered:

    - Ownership chaining
    - Cross DB ownership chaining
    - Trustworthy database
    - SQL Server agent fixed database roles

## Related reports

- Clicking a Object permissions link opens the
  [Object Permissions in SQL Server](/docs/auditor/10.8/admin/reports/types/stateintime/sqlserveroverview/sqlobjectpermissions.md) report.
- Clicking a Means granted link opens the **[SQL Server Means Granted](/docs/auditor/10.8/admin/reports/types/stateintime/sqlserveroverview/sqlmeansgranted.md)** report.

## Usage example

Database administrators in the _Corp_ organization need to discover what kind of permissions a
certain user has on the **SQLSrv01\SQLServer2016** instance. This instance is included in the
monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they generated the **Account Permissions in SQL Server** report with
the filters set as follows:

- **Monitoring plan:\_**SQL Servers Monitoring\_
- **Snapshot date:\_**Current Session\_
- **Item:\_**SQLSrv01\SQLServer2016\_
- **User account:** _Corp\Ian.Harris_

The report revealed that this user has access permissions for the master database. To discover how
they were granted, click the link in the **Means granted** field.
