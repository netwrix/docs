---
title: "SQL: Filter"
description: "SQL: Filter"
sidebar_position: 50
---

# SQL: Filter

Use the Filter page to scope the query to target specific databases or instances. It is a
wizard page for the categories of:

- Permissions > Permissions Collection
- Server Audits > Server Audit Events Collection
- Sensitive Data > Sensitive Data Collection
- Microsoft SQL Server:

    - Discovery
    - Custom SQL Query
    - Infrastructure
    - Operations
    - Utilities > Remove Storage Tables
    - Legacy Queries

- Oracle:

    - Custom Oracle Query
    - Infrastructure
    - Operations
    - Utilities > Remove Storage Tables

- MySQL:

    - Custom MySQL Query
    - Utilities > Remove Storage Tables

- PostgreSQL:

    - Custom PostgreSQL Query
    - Utilities > Remove Storage Tables

- Db2LUW:

    - Custom Db2LUW Query
    - Utilities > Remove Storage Tables
    - Db2LUW Permissions Scan

- Utilities – Remove Storage Data

You must populate the SA_SQL_Instances table before available databases/instances
can populate the Available Server audits list. For Oracle and SQL, Access Analyzer populates the SA_SQL_Instances table
through an instance discovery query. See the
[0-SQL_InstanceDiscovery Job](/docs/accessanalyzer/12.0/solutions/databases/sql/collection/0-sql_instancediscovery.md)
topic for additional information. For PostgreSQL and MySQL Scans, you populate the SA_SQL_Instances table
manually in the Manage Connections window. See the
[Manage Connections Window](#manage-connections-window) topic for additional information. After you
populate the table, you can scope a query.

![SQL Data Collector Wizard Filter page](/images/accessanalyzer/12.0/admin/datacollector/sql/filter.webp)

The configurable filter options are:

- Connections — Opens the Manage Connections window to add or modify database instances. See the
  [Manage Connections Window](#manage-connections-window) topic for additional information.
- Filter options

    - All database objects — No scoping
    - Only select database objects — Scope to specific databases

        - Click **Retrieve** to display available server audits

- Available database objects — Displays known databases and instances for query scoping

    - Select from the available list and click **Add**

- Selected databases or instances — Displays selected database objects scoped for the query.
  Additional options include:

    - Remove — Removes the selected database/instance from the query
    - Include — Reverts an exclusion. By default, all sub tables are included.
    - Exclude — Excludes selected databases/instances and displays them in red
    - Add Custom Filter — Opens the Add custom filter window to build a custom filter to apply
      to the selected databases/instances. See the
      [Add Custom Filter Window](#add-custom-filter-window) topic for additional information.
    - Import CSV — Import a list of databases/instances from a CSV file
    - Export CSV — Exports the list of databases/instance to a CSV file through the Save As window

## Manage Connections Window

Use the Manage Connections window to add database instances to search. Click the
**Connections** button to open it.

![Manage Connections window](/images/accessanalyzer/12.0/admin/datacollector/sql/manageconnections.webp)

The Manage Connections table lists the previously added database instances and their attributes.
Select a row in the table to edit that instance, or create a new instance to add to the table:

- Is Active — Select the checkbox to include the database on the Servers Pane on the Filter page
- Instance Label — The name of the server
- Database System — Select from a list of available databases
- Service Name — Name of the service
- Host — Name or IP address of the host where the database is located
- Port Number — Port number for the database. If you use a non-default port, specify it in the
  Port Number section.
- Default Database — Account used to access the database. Admin is recommended.
- Enable impersonation — Select to enable impersonation
- Service Type— If applicable, select whether the service type is **Service** or **SID**

In the Manage Connections Table, the following information is also listed:

- Was Inspected — Indicates whether Access Analyzer validated the connection information. **Y**
  indicates Access Analyzer validated the information. **N** indicates it hasn't.
- Last Inspected — Indicates the date and time Access Analyzer last inspected the connection
  information. If blank, Access Analyzer hasn't validated the information yet.

The Manage Connections window has the following buttons:

- Test Connection — Click to verify the connection to the database with the connection profile
  applied to the job group
- Edit Connection — Click to edit information for the selected connection
- Delete Connection — Click to delete the selected connection
- Create New — Click to create a new connection

#### Add Custom Filter Window

The Add custom filter window opens from the Filter page of the SQL Data Collector Wizard. It enables
you to apply a custom scoping filter to the query.

![Add custom filter window](/images/accessanalyzer/12.0/admin/datacollector/sql/addcustomfilter.webp)

Enter the filter in the window and click Save. You can use the following characters in the filter:

- Forward slash (/) – Path separator
- Asterisk (\*) – Wild card for any combination of characters
- Question mark (?) – Wild card for a single character

Use the following format to add a custom filter for a server:

- SQL:

    [SQL Server Name]/[Host or IP Address]/[Database Name]/[TableName]

- Oracle:

    [Oracle Server Name]/[Host or IP Address]/[Container Name]/[Schema]/[Table Name]

- Azure SQL:

    [Azure SQL Server Name]/[Host or IP Address]/[Database Name]/[Table Name]

- MySQL:

    [MySQL Server Name]/[Host or IP Address]/[DastabaseName]/[TableName]

- PostgreSQL:

    [PostgreSQL Server Name]/[Host or IP Address]/[DastabaseName]/[Schema]/[TableName]

- Db2:

    [Db2LUW Server Name]/[Host or IP Address]/[DastabaseName]/[TableName]
