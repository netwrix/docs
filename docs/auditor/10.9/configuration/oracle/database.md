---
title: "Configure Oracle Database for Auditing"
description: "Configure Oracle Database for Auditing"
sidebar_position: 20
---

# Configure Oracle Database for Auditing

This topic explains how to configure Oracle Database 12c, 18c, 19c, 21c, 23c for Auditing.

## Configure Oracle Database 12c, 18c, 19c, 21c, 23c for Auditing

The following auditing modes are available for Oracle Database:

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

To configure Unified Auditing for Oracle Database 12c, 18c, 19c, 21c, and 23c:

1. On the computer where your database is deployed, run the sqlplus tool.
2. Connect to your Oracle Database—use Oracle account with the `SYSDBA` privilege. For example:

    `OracleUser as sysdba`

    Enter your password.

3. Create and enable audit policies. You can set them to audit the following:

    - Configuration changes
    - Successful and failed data access and changes
    - Oracle Data Pump, Oracle Recovery Manager (RMAN) and Oracle SQL*Loader Direct Path Load components

    <table>
      <thead>
        <tr>
          <th>To monitor...</th>
          <th>Execute the command...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Configuration changes</td>
          <td>
            <ul>
              <li>
                <p>Create an audit policy (for example, <code>nwx_actions_pol</code>) for any user:</p>
                <pre><code>CREATE AUDIT POLICY nwx_actions_pol ACTIONS
    CREATE TABLE,DROP TABLE,ALTER TABLE,GRANT,REVOKE,
    CREATE VIEW,DROP VIEW,CREATE PROCEDURE,
    ALTER PROCEDURE,RENAME,AUDIT,NOAUDIT,
    ALTER DATABASE,ALTER USER,ALTER SYSTEM,
    CREATE USER,CREATE ROLE,SET ROLE,DROP USER,
    DROP ROLE,CREATE TRIGGER,ALTER TRIGGER,
    DROP TRIGGER,CREATE PROFILE,DROP PROFILE,
    ALTER PROFILE,DROP PROCEDURE,
    CREATE MATERIALIZED VIEW,DROP MATERIALIZED VIEW,
    ALTER ROLE,TRUNCATE TABLE,CREATE FUNCTION,
    ALTER FUNCTION,DROP FUNCTION,CREATE PACKAGE,
    ALTER PACKAGE,DROP PACKAGE,CREATE PACKAGE BODY,
    ALTER PACKAGE BODY,DROP PACKAGE BODY,LOGON,LOGOFF,
    CREATE DIRECTORY,DROP DIRECTORY,CREATE JAVA,
    ALTER JAVA,DROP JAVA,PURGE TABLE,
    CREATE PLUGGABLE DATABASE,ALTER PLUGGABLE DATABASE,
    DROP PLUGGABLE DATABASE,CREATE AUDIT POLICY,
    ALTER AUDIT POLICY,DROP AUDIT POLICY,
    CREATE FLASHBACK ARCHIVE,ALTER FLASHBACK ARCHIVE,
    DROP FLASHBACK ARCHIVE;</code></pre>
              </li>
              <li>
                <p>Enable the audit policy:</p>
                <p><code>AUDIT POLICY nwx_actions_pol;</code></p>
                <p><strong>Note:</strong> To disable audit policy, use the following command: <code>NOAUDIT POLICY nwx_actions_pol;</code></p>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Data access and changes (successful and failed)</td>
          <td>
            <ul>
              <li>
                <p>Create the audit policy (for example, <code>nwx_actions_obj_pol</code>):</p>
                <pre><code>CREATE AUDIT POLICY nwx_actions_obj_pol ACTIONS
    DELETE on hr.employees, INSERT on hr.employees,
    UPDATE on hr.employees, SELECT on hr.employees,
    FLASHBACK on hr.employees CONTAINER = CURRENT;</code></pre>
              </li>
              <li>Enable the audit policy (for example, <code>nwx_actions_obj_pol</code>): <code>AUDIT POLICY nwx_actions_obj_pol;</code></li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Component actions: Oracle Data Pump, Oracle Recovery Manager, and Oracle SQL*Loader Direct Path Load</td>
          <td>
            <ul>
              <li>
                <p>Create the audit policies (for example, <code>nwx_sqlloader_dp_pol</code>, etc.):</p>
                <p><strong>Note:</strong> No special configuration required to audit RMAN events.</p>
                <pre><code>CREATE AUDIT POLICY nwx_datapump_exp_pol ACTIONS COMPONENT=DATAPUMP EXPORT;
CREATE AUDIT POLICY nwx_datapump_imp_pol ACTIONS COMPONENT=DATAPUMP IMPORT;
CREATE AUDIT POLICY nwx_sqlloader_dp_pol ACTIONS COMPONENT=DIRECT_LOAD LOAD;</code></pre>
              </li>
              <li>
                <p>Enable these policies:</p>
                <pre><code>AUDIT POLICY nwx_datapump_exp_pol;
AUDIT POLICY nwx_datapump_imp_pol;
AUDIT POLICY nwx_sqlloader_dp_pol;</code></pre>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

4. If necessary, enable more granular audit policies.

    | To...                                                                             | Execute the command...                                                  |
    | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
    | Apply audit policy to selected users                                              | `AUDIT POLICY nwx_actions_pol BY SYS, SYSTEM, <user_name>; `            |
    | Exclude user actions from being audited (for example, exclude failed `Operator` actions) | `AUDIT POLICY nwx_actions_pol EXCEPT Operator WHENEVER NOT SUCCESSFUL;` |
    | Audit successful actions of selected user (for example, `Operator`)                      | `AUDIT POLICY nwx_actions_pol BY Operator WHENEVER SUCCESSFUL;`         |

For additional information on `CREATE AUDIT POLICY` and `AUDIT POLICY` parameters, see the following
Oracle Database administration documents:

- `[CREATE AUDIT POLICY](https://docs.oracle.com/database/121/SQLRF/statements_5001.htm#create-audit-policy)`
- `[AUDIT POLICY](http://docs.oracle.com/database/121/SQLRF/statements_4008.htm#audit-policy)`

Currently, Netwrix Auditor checks audit settings for Unified Auditing when compatibility is enabled
for `ACTIONS`. If any of your current settings conflict with the audit configuration required for
Netwrix Auditor lists these conflicts in the System Health event log.

Also, remember to do the following:

- Configure Data Collecting Account as described in
  [Permissions for Oracle Database Auditing](/docs/auditor/10.9/configuration/oracle/permissions.md) topic.
- Configure ports as described in [Oracle Database Ports](/docs/auditor/10.9/configuration/oracle/ports.md) topic.

**NOTE:** Traditional auditing is deprecated in Oracle Database 21c. Oracle recommends using Unified
Auditing, which enables selective and more effective auditing within Oracle Database. See the
[Oracle website](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/AUDIT-Traditional-Auditing.html#oracle-website)
for more information.
