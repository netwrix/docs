---
title: "Permissions for Oracle Database Auditing"
description: "Permissions for Oracle Database Auditing"
sidebar_position: 70
---

# Permissions for Oracle Database Auditing

When creating a monitoring plan for your Oracle Database, you must specify an account with
sufficient privileges to collect audit data. You can either grant the required privileges
individually or assign the default DBA role to the account.

## Prerequisites

- The `sqlplus` tool is installed and accessible on the computer where the database is deployed.
- You have an Oracle account with the `SYSDBA` privilege.

## Grant CREATE SESSION and SELECT Privileges

At minimum, the following privileges are required:

- `CREATE SESSION` — allows the account to connect to the database.
- `SELECT` — allows the account to retrieve data from the required objects.

1. On the computer where your database is deployed, run the `sqlplus` tool.

2. Connect to your Oracle Database using an account with the `SYSDBA` privilege. For example:

    `OracleUser as sysdba`

3. Enter the account password.

4. Decide on the account to use for audit data collection. You can use an existing account or
   create a new one. To create a new account, execute:

    `CREATE USER <account_name> IDENTIFIED BY <password>;`

5. Grant the `CREATE SESSION` system privilege to the account:

    `GRANT CREATE SESSION TO <account_name>;`

6. Grant the `SELECT` privilege on the required objects to the account. See
   [Required Object Privileges](#required-object-privileges) for the full list. For example:

    `GRANT SELECT ON aud$ TO <account_name>;`

## Grant the DBA Role

As an alternative to granting individual privileges, you can assign the default administrator role
to the account:

`GRANT DBA TO <account_name>;`

**CAUTION:** The DBA role grants broad administrative access to the database. Use this option only
where your security policy permits it.

## Required Object Privileges

Before creating a monitoring plan, ensure the data collecting account has the `CREATE SESSION`
system privilege and `SELECT` privilege on the objects listed below, depending on your Oracle
Database version.

| Version | Required SELECT privileges |
| --- | --- |
| Oracle Database 12c, 18c, 19c, 21c, 23c | - `aud$` |
| | - `gv_$xml_audit_trail` |
| | - `dba_stmt_audit_opts` |
| | - `v_$parameter` |
| | - `dba_obj_audit_opts` |
| | - `dba_audit_policies` |
| | - `dba_audit_mgmt_clean_events` |
| | - `gv_$instance` |
| | - `fga_log$` |
| | - `gv_$unified_audit_trail` |
| | - `all_unified_audit_actions` |
| | - `audit_unified_policies` |
| | - `audit_unified_enabled_policies` |
| | - `audsys.aud$unified` (Oracle Database 12c Release 2 (12.2.0.1) and later) |
