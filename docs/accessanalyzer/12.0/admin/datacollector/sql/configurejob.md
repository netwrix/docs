---
title: "SQL Custom Connection Profile & Default Dynamic Host List"
description: "SQL Custom Connection Profile & Default Dynamic Host List"
sidebar_position: 10
---

# SQL Custom Connection Profile & Default Dynamic Host List

The SQL Data Collector requires a custom Connection Profile and Host List. The **SQL SERVERS**
default host list can be used with this data collector for the SQL Solution. The host inventory
option during host list creation makes it necessary to configure the Connection Profile first.

## Connection Profile

Create a Connection Profile and set the following information on the User Credentials window.

- For an Active Directory account:

    - Select Account Type – Active Directory Account
    - Domain – Drop-down menu with available trusted domains will appear. Either type the short
      domain name in the textbox or select a domain from the menu.
    - User name – Type the user name
    - Password Storage – Choose the desired option for credential password storage:

        - Application – Uses the configured Profile Security setting as selected at the
          **Settings** > **Application** node. See the
          [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md) topic for additional information.
        - CyberArk – Uses the CyberArk Enterprise Password Vault. See the
          [CyberArk Integration](/docs/accessanalyzer/12.0/admin/settings/connection/cyberarkintegration.md) topic for
          additional information. The password fields do not apply for CyberArk password storage.

    - Password – Type the password
    - Confirm – Re-type the password

- For a SQL account:

    - Select Account Type – SQL Authentication
    - User name – Enter user name
    - Password Storage – Application (Uses the configured Profile Security setting as selected at
      the **Settings** > **Application** node. See the
      [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md) topic for additional information.)
    - Password – Type the password
    - Confirm – Re-type the password

See the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional information.

## Host List

The required host list depends on the database that the SQL data collector is being used for.

### Default Dynamic Host List (SQL)

Jobs using the SQL Data Collector can use the SQL Servers default host list. This is a dynamic host
list that is populated from hosts in the Host Master Table which meet the host inventory criteria
for the list, `IsSQLServer = True`. Since the SQL Servers host list is default, it is available to
jobs and job groups for host assignment. See the [Host Management](/docs/accessanalyzer/12.0/admin/hostmanagement/overview.md)
topic for additional information.

### Oracle / MySQL / PostgreSQL / Db2

Jobs in the Oracle, MySQL, Postgre SQL, or Db2 solution using the SQL Data Collector must be
configured to query a host list with the servers containing the target databases. Setup the list of
hosts that needs to be monitored. Be sure to use a specific host name (if forcing the connection to
a secondary host) or just the server name if connecting to the server. See the
[Host Management](/docs/accessanalyzer/12.0/admin/hostmanagement/overview.md) topic for additional information.

Additionally, the database instances must be added to the Filter page in the query configuration.
See the [SQL: Filter](/docs/accessanalyzer/12.0/admin/datacollector/sql/filter.md) topic for additional information.
