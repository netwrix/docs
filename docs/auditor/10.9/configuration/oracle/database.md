---
title: "Configure Oracle Database for Auditing"
description: "Configure Oracle Database for Auditing"
sidebar_position: 20
---

# Configure Oracle Database for Auditing

This topic explains how to configure Oracle Database for the following versions of the Oracle
Database Software:

- Configure Oracle Database 12c, 18c, 19c for Auditing
- Configure Oracle Database 11g for Auditing

## Configure Oracle Database 12c, 18c, 19c for Auditing

The following auditing modes are available for Oracle Database 12c, 18c, 19c:

- Unified Auditing—Recommended. See the following Oracle technical article for detailed instructions
  on how to enable Unified Auditing:
  [Enabling Unified Auditing](http://www.oracle.com/webfolder/technetwork/tutorials/obe/db/12c/r1/security/sec_uni_audit/sec_uni_audit.html).

    Perform the following steps to configure Unified Auditing on your Oracle Database:

    1. Create and enable an audit policy to audit specific parameters across your Oracle Database.

        After an audit policy has been enabled or disabled, Netwrix Auditor starts collecting data
        after a successful logon session.

    2. If needed, create and enable specific audit policies to audit successful data access and
       changes, user actions, component actions, etc.

- Mixed Mode—Default auditing in a newly installed database. It enables both traditional and the new
  **Unified Auditing** facilities. Netwrix recommends using **Unified Auditing** mode if you do not
  have any trail audit facilities in your infrastructure.

    The product does not log any errors on these events to the Netwrix Auditor System Health log.

To configure Oracle Database 12c, 18c, 19c Unified Auditing

1. On the computer where your database is deployed, run the sqlplus tool.
2. Connect to your Oracle Database—use Oracle account with the `SYSDBA` privilege. For example:

    `OracleUser as sysdba`

    Enter your password.

3. Create and enable audit policies. You can set them to audit the following:

    - Configuration changes
    - Successful and failed data access and changes
    - `Oracle Data Pump`, `Oracle Recovery Manager (RMAN)` and `Oracle SQL*Loader Direct Path Load`
      components | To monitor... | Execute the command... | | --- | --- | | Configuration changes
      | - Create an audit policy (e.g., `nwx_actions_pol`) for any user:
      `CREATE AUDIT POLICY nwx_actions_pol ACTIONS      CREATE TABLE,DROP TABLE,ALTER TABLE,GRANT,REVOKE,     CREATE VIEW,DROP VIEW,CREATE PROCEDURE,     ALTER PROCEDURE,RENAME,AUDIT,NOAUDIT,     ALTER DATABASE,ALTER USER,ALTER SYSTEM,     CREATE USER,CREATE ROLE,SET ROLE,DROP USER,     DROP ROLE,CREATE TRIGGER,ALTER TRIGGER,     DROP TRIGGER,CREATE PROFILE,DROP PROFILE,     ALTER PROFILE,DROP PROCEDURE,     CREATE MATERIALIZED VIEW,DROP MATERIALIZED VIEW,     ALTER ROLE,TRUNCATE TABLE,CREATE FUNCTION,     ALTER FUNCTION,DROP FUNCTION,CREATE PACKAGE,     ALTER PACKAGE,DROP PACKAGE,CREATE PACKAGE BODY,     ALTER PACKAGE BODY,DROP PACKAGE BODY,LOGON,LOGOFF,     CREATE DIRECTORY,DROP DIRECTORY,CREATE JAVA,     ALTER JAVA,DROP JAVA,PURGE TABLE,     CREATE PLUGGABLE DATABASE,ALTER PLUGGABLE DATABASE,     DROP PLUGGABLE DATABASE,CREATE AUDIT POLICY,     ALTER AUDIT POLICY,DROP AUDIT POLICY,     CREATE FLASHBACK ARCHIVE,ALTER FLASHBACK ARCHIVE,     DROP FLASHBACK ARCHIVE;` -
      Enable the audit policy: `AUDIT POLICY nwx_actions_pol;` To disable audit policy, use the
      following command: `NOAUDIT POLICY nwx_actions_pol;` | | Data access and changes (successful
      and failed) | - Create the audit policy (e.g., `nwx_actions_obj_pol`):
      `CREATE AUDIT POLICY nwx_actions_obj_pol ACTIONS      DELETE on hr.employees, INSERT on hr.employees,      UPDATE on hr.employees, SELECT on hr.employees, FLASHBACK on hr.employees CONTAINER = CURRENT;` -
      Enable the audit policy (e.g., `nwx_actions_obj_pol`): `AUDIT POLICY nwx_actions_obj_pol;` | |
      Component actions: `Oracle Data Pump`, `Oracle Recovery Manager`, and
      `Oracle SQL*Loader Direct Path Load` | - Create the audit policies (e.g.,
      `nwx_sqlloader_dp_pol`, etc.): No special configuration required to audit RMAN events.
      `CREATE AUDIT POLICY nwx_datapump_exp_pol ACTIONS COMPONENT=DATAPUMP EXPORT;`
      `CREATE AUDIT POLICY nwx_datapump_imp_pol ACTIONS COMPONENT=DATAPUMP IMPORT;`
      `CREATE AUDIT POLICY nwx_sqlloader_dp_pol ACTIONS COMPONENT=DIRECT_LOAD LOAD;` - Enable these
      policies: `AUDIT POLICY nwx_datapump_exp_pol;` `AUDIT POLICY nwx_datapump_imp_pol;`
      `AUDIT POLICY nwx_sqlloader_dp_pol;` |

4. If necessary, enable more granular audit policies.

    | To...                                                                             | Execute the command...                                                  |
    | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
    | Apply audit policy to selected users                                              | `AUDIT POLICY nwx_actions_pol BY SYS, SYSTEM, <user_name>; `            |
    | Exclude user actions from being audited (e.g., exclude failed `Operator` actions) | `AUDIT POLICY nwx_actions_pol EXCEPT Operator WHENEVER NOT SUCCESSFUL;` |
    | Audit successful actions of selected user (e.g., `Operator`)                      | `AUDIT POLICY nwx_actions_pol BY Operator WHENEVER SUCCESSFUL;`         |

For additional information on `CREATE AUDIT POLICY` and `AUDIT POLICY` parameters, see the following
Oracle Database administration documents:

- `[CREATE AUDIT POLICY](https://docs.oracle.com/database/121/SQLRF/statements_5001.htm#create-audit-policy)`
- `[AUDIT POLICY](http://docs.oracle.com/database/121/SQLRF/statements_4008.htm#audit-policy)`

Currently, Netwrix Auditor checks audit settings for Unified Auditing when accomptability is enabled
for `ACTIONS`. If any of your current settings conflict with the audit configuration required for
Netwrix Auditor, these conflicts will be listed in the Netwrix Auditor System Health event log.

Also, remember to do the following:

- Configure Data Collecting Account as described in
  [Permissions for Oracle Database Auditing](/docs/auditor/10.9/configuration/oracle/permissions.md) topic.
- Configure ports as described in [Oracle Database Ports](/docs/auditor/10.9/configuration/oracle/ports.md) topic.

**NOTE:** Traditional auditing is deprecated in Oracle Database 21c. Oracle recommends using Unified
Auditing, which enables selective and more effective auditing within Oracle Database. See the
[Oracle website](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/AUDIT-Traditional-Auditing.html#oracle-website)
for more information.

## Configure Oracle Database 11g for Auditing

This section explains how to configure **Standard Auditing** on your Oracle Database 11g, preparing
for monitoring with the product.

Starting with version 10.5, Auditor provides limited support of Oracle Database 11g. See the
[Considerations for Oracle Database 11g](overview.md#considerations-for-oracle-database-11g) topic
for additional information.

Verify that Oracle Data Provider for .NET and Oracle Instant Client are installed and properly
configured on the computer where Auditor Server is installed. The product does not provide any
special notification for that.

Follow the steps to configure **Standard Auditing** on your Oracle Database 11g:

**Step 1 –** Select the audit trail to store audit records. Oracle Database has the following
options:

- **Database audit trail**— Set by default.
- **XML audit trail**— Recommended.
- **OS files**—Not supported by current version of Netwrix Auditor.

**Step 2 –** Enable auditing of Oracle Database changes, using the corresponding command.

### Store Oracle Audit Records

Follow the steps to select Audit Trail to store Oracle Audit Records:

**Step 1 –** On the computer where your database is deployed, run the sqlplus tool.

**Step 2 –** Connect to your Oracle Database using Oracle account with the `SYSDBA` privilege. For
example:

`OracleUser as sysdba`

**Step 3 –** Enter your password.

Depending on where you want to store audit records, execute the required command.

| Store to...                                                                                                                                                                                                                      | Execute...                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Store audit records to XML audit trail (recommended). Use this audit trail if you want Netwrix Auditor to report on actions performed by users with SYSDBA and SYSOPER privileges. Otherwise, these actions will not be audited. | `ALTER SYSTEM SET audit_trail=XML SCOPE=SPFILE;` If you want to enable auditing of actions performed by SYS user and by users connecting with SYSDBA and SYSOPER privileges, execute: `ALTER SYSTEM SET audit_sys_operations=TRUE SCOPE=SPFILE;` |
| Database audit trail (default setting) In this case, actions performed by user SYS and users connecting with SYSDBA and SYSOPER privileges will not be audited.                                                                  | `ALTER SYSTEM SET audit_trail=DB SCOPE=SPFILE;`                                                                                                                                                                                                  |
| Store audit records to XML or database audit trail and keep full text of SQL-specific query in audit records. Only ALTER actions will be reported.                                                                               | For database audit trail: `ALTER SYSTEM SET audit_trail=DB, EXTENDED SCOPE=SPFILE;` For XML audit trail: ` ALTER SYSTEM SET audit_trail=XML, EXTENDED SCOPE=SPFILE;`                                                                             |

**Step 4 –** If you turned auditing on or off, you will need to restart the database. For that, run
the following:

`SHUTDOWN IMMEDIATE`

`STARTUP`

If you only changed auditing settings, database restart is not required.

If you are using Oracle Real Application Clusters (RAC), see the
[Starting and Stopping Instances and Oracle RAC Databases](https://docs.oracle.com/cd/E11882_01/rac.112/e41960/admin.htm#starting-and-stopping-instances-and-oracle-rac-databases)
section in Real Application Clusters Administration and Deployment Guide for additional information
on restarting your instances.

### Enable Auditing of Oracle Database Changes

Follow the steps to enable auditing of Oracle Database changes:

**Step 1 –** On the computer where your database is deployed, run the sqlplus tool.

**Step 2 –** Connect to your Oracle Database—use Oracle account with the `SYSDBA` privilege. For
example:

`OracleUser as sysdba`

**Step 3 –** Enter your password.

**Step 4 –** Depending on your monitoring requirements, enable auditing of the database parameters
with the related command.

| To monitor for...                                                                                                                             | Execute...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Configuration changes                                                                                                                         | - For any user: `AUDIT ALTER SYSTEM,SYSTEM AUDIT,SESSION,TABLE,USER,   VIEW,ROLE,PROCEDURE,TRIGGER,PROFILE,DIRECTORY,   MATERIALIZED VIEW,SYSTEM GRANT,NOT EXISTS,   ALTER TABLE,GRANT DIRECTORY,GRANT PROCEDURE,   GRANT TABLE;` `AUDIT ALTER DATABASE, FLASHBACK ARCHIVE ADMINISTER;` If you want to disable configuration auditing, use the following commands: `NOAUDIT ALTER SYSTEM,SYSTEM AUDIT,SESSION,   TABLE,USER,VIEW,ROLE,PROCEDURE,TRIGGER,PROFILE,   DIRECTORY,MATERIALIZED VIEW,SYSTEM GRANT,   NOT EXISTS,ALTER TABLE,GRANT DIRECTORY,   GRANT PROCEDURE,GRANT TABLE;` `NOAUDIT ALTER DATABASE,   FLASHBACK ARCHIVE ADMINISTER;` |
| - For specific user: `AUDIT SYSTEM GRANT, SESSION, TABLE, PROCEDURE BY <USER_NAME>``````;` You can specify several users separated by commas. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Successful data access and changes                                                                                                            | `AUDIT SELECT,INSERT,DELETE,UPDATE,RENAME,    FLASHBACK ON <TABLE_NAME> BY ACCESS WHENEVER SUCCESSFUL;`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Failed data access and change                                                                                                                 | `AUDIT SELECT,INSERT,DELETE,UPDATE,RENAME,    FLASHBACK ON <TABLE_NAME>    BY ACCESS WHENEVER NOT SUCCESSFUL;`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Successful and failed data access and changes                                                                                                 | `AUDIT SELECT,INSERT,DELETE,UPDATE,RENAME,   FLASHBACK ON <TABLE_NAME>;`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

For additional information on `ALTER SYSTEM` and `AUDIT` parameters, see the following Oracle
database administration documents:

- `[AUDIT_TRAIL](https://docs.oracle.com/cd/E11882_01/server.112/e40402/initparams017.htm#audit_trail)`
- `[AUDIT](http://docs.oracle.com/cd/E11882_01/server.112/e41084/statements_4007.htm#audit)`

After an audit parameter has been enabled or disabled, Auditor will start collecting data after
successful logon session.

Also, remember to do the following:

- Configure Data Collecting Account. See the
  [Permissions for Oracle Database Auditing](/docs/auditor/10.9/configuration/oracle/permissions.md) topic for additional information.
- Configure ports. See the [Oracle Database Ports](/docs/auditor/10.9/configuration/oracle/ports.md) topic for additional information about
  ports and protocols required for auditing.
