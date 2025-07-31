# SQL Server-Level Roles

This report shows the server-level fixed and custom roles for the selected SQL Server instance,
grouped by role name. The details for each role include its name, type, and a list of the effective
role members and member types. Use this report to control role membership and permissions.

To read more about SQL server-level roles, refer to
[this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15).

To instruct Netwrix Auditor to collect data needed for this report, make sure that **Collect data
for state-in-time reports** option is selected in the monitoring plan properties. See Settings for
Data Collection in the monitoring plan documentation.

![sqlserverlevelroles](/images/auditor/10.7/admin/reports/types/stateintime/sqlserverlevelroles.webp)

## Reported data

The report has a summary section with general information on the selected SQL Server object, and the
details section presented in the table format.

The summary section shows:

- **Role name**
- **Role type** — _Fixed server role_ or _Custom role_

The detailed information under summary includes the list of effective members for this role, where:

- **Member** — role member name.
- **Member type** —possible values:
    - Windows Account
    - Login SQL Authentication
    - DB SQL User with password

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically. time zone where Netwrix Auditor server is located, for example,
  UTC-08:00.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in the SQL Server monitoring plan
  documentation.
- **Item**— name of the SQL Server instance monitored with selected monitoring plan.
- **Server-level role** —select the role that you want to explore.
- **Role type** — _Fixed server role_ or _Custom role_.
- **Member**— role member name.

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.

## Related reports

- Clicking a role member (account) link opens the
  [Account Permissions in SQL Server](/docs/auditor/10.8/admin/reports/types/stateintime/sqlserveroverview/sqlaccountpermissions.md) report.

## Usage example

Database administrators in the _Corp_ organization need to discover what fixed server roles a
certain user has on the **SQLSrv01\SQLServer2016** instance. This instance is included in the
monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they generated the **SQL Server-Level Roles** report with the filters
set as follows:

- **Monitoring plan:\_**SQL Servers Monitoring\_
- **Snapshot date:\_**Current Session\_
- **Item:\_**SQLSrv01\SQLServer2016\_
- **Server-level role:** %
- **Role type:** Fixed server role
- **Member:\_**Corp\Jim.White\_
