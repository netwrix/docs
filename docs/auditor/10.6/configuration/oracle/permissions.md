---
title: "Permissions for Oracle Database Auditing"
description: "Permissions for Oracle Database Auditing"
sidebar_position: 70
---

# Permissions for Oracle Database Auditing

When creating a monitoring plan for your Oracle Database, you should specify the account that has
sufficient privileges to collect data from the database. At least, the following privileges are
required:

- CREATE SESSION — Allows an account to connect to a database.
- SELECT — Allows an account to retrieve data from one or more tables, views, etc.

Alternatively, you can assign the default administrator role to that account.

You can grant the required privileges to the existing account, or create a new one. Follow the
procedure described below.

Follow the steps to grant CREATE SESSION and SELECT privileges to the account.

**Step 1 –** On the computer where your database is deployed, run the sqlplus tool.

**Step 2 –** Connect to your Oracle Database.

**NOTE:** Use Oracle account with the `SYSDBA` privilege, for example:

`OracleUser as sysdba`

**Step 3 –** Enter the account password.

**Step 4 –** Decide on the account that will be used to access this database for audit data
collection. You can:

- Use the account that already exists

    - OR -

- Create a new account. To create a new account, use the following command::  
  `CREATE USER <account_name> IDENTIFIED BY PASSWORD;`

**Step 5 –** Grant `CREATE SESSION` system privilege to that account. For that, execute:  
`GRANT CREATE SESSION TO <account_name>;`

**Step 6 –** Grant `SELECT` privilege on the required object to that account. See the
[For Oracle Database Auditing](#for-oracle-database-auditing) topic for the detailed object list.
For that, execute: `GRANT SELECT ON <object> TO <account_name>;`  
For example:  
`GRANT SELECT ON aud$ TO OracleUser;`

CREATE SESSION and SELECT privileges now granted to the account.

Alternatively, you can grant the default administrator role to that account. For that, execute:  
`GRANT DBA TO <account_name>; `

## For Oracle Database Auditing

Before you start creating a monitoring plan to audit your Oracle Database, plan for the account that
will be used for data collection – it should meet the requirements listed below. Then you will
provide this account in the monitoring plan wizard.

1. The `CREATE SESSION` system privilege must be granted to the account used to connect to Oracle
   Database for data collection.
2. Depending on your Oracle Database version, the `SELECT` privilege on the certain objects must be
   granted to that account: | | | | --- | --- | | Oracle Database 12c, 18c, 19c | Grant `SELECT`
   privilege on the following objects: - `aud$ ` - `gv_$xml_audit_trail` - `dba_stmt_audit_opts` -
   `v_$parameter` - `dba_obj_audit_opts` - `dba_audit_policies` - `dba_audit_mgmt_clean_events` -
   `gv_$instance` - `fga_log$` - `gv_$unified_audit_trail` - `all_unified_audit_actions` -
   `audit_unified_policies` - `audit_unified_enabled_policies` - `audsys.aud$unified` (for Oracle
   Database 12c Release 2 and higher) | | Oracle Database 11g Starting with version 10.5, Netwrix
   Auditor provides limited support of Oracle Database 11g. | Grant `SELECT` privilege on the
   following objects: - `aud$ ` - `gv_$xml_audit_trail` - `dba_stmt_audit_opts` - `v_$parameter` -
   `dba_obj_audit_opts` - `dba_audit_policies` - `dba_audit_mgmt_clean_events` - `gv_$instance` -
   `fga_log$` |
    - You can grant the default **Administrator** role to the account.
    - If you are going to configure Fine Grained Auditing, make sure that you are using Oracle
      Database _Enterprise Edition_. Then grant privileges depending on your Oracle Database
      version.
