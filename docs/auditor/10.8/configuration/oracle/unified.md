---
title: "Migrate to Unified Audit"
description: "Migrate to Unified Audit"
sidebar_position: 30
---

# Migrate to Unified Audit

Starting with 10.5 version, Netwrix Auditor provides limited support of Oracle Database 11g and
trail auditing mode accordingly. See
[Considerations for Oracle Database Auditing for more information.](overview.md#considerations-for-oracle-database-11g)

When planning your migration, consider that you can select the following scenario:

- Migration to pure unified auditing. See the corresponding Oracle documentation article:
  [Migrating to Unified Auditing for Oracle Database](https://docs.oracle.com/database/121/UPGRD/afterup.htm#migrating-to-unified-auditing-for-oracle-database).
- Use a mixed-mode audit facility (not recommended).

Perform the following steps according to official Oracle documentation:

1. To migrate to Unified Auditing for Oracle Database
2. [Manage Earlier Audit Records After You Migrate to Unified Auditing](https://docs.oracle.com/database/121/UPGRD/afterup.htm#manage-earlier-audit-records-after-you-migrate-to-unified-auditing)

To migrate to Unified Auditing for Oracle Database

The procedure contains basic migration steps. Refer to
[Oracle_Database_Upgrade_Guide](https://docs.oracle.com/database/121/UPGRD/toc.htm) for more
detailed upgrade scenario.

1. On the computer where your database is deployed, run the sqlplus tool.
2. Connect to your Oracle Database—use Oracle account with the `SYSDBA` privilege. For example:

    sqlplus sys as sysdba

    Enter password: password

3. Check if your Oracle database has already been migrated to unified auditing:

    SQL> SELECT VALUE FROM V$OPTION WHERE PARAMETER = 'Unified Auditing';

    If the `value` is `true`, unified auditing mode is already enabled in your database.

    In this case, you can ignore further steps and start managing your earlier audit records. Refer
    to Oracle documentation for more information:
    [Managing Earlier Audit Records After You Migrate to Unified Auditing](https://docs.oracle.com/database/121/UPGRD/afterup.htm#managing-earlier-audit-records-after-you-migrate-to-unified-auditing).

    If the `value` is `false`, proceed with the steps below.

4. Stop the database. Do the following, depending on your environment:

    | For...                       | Do...                                                                             |
    | ---------------------------- | --------------------------------------------------------------------------------- |
    | Single-instance environments | In sqlplus tool, execute the following command: SQL> SHUTDOWN IMMEDIATE SQL> EXIT |
    | Windows systems              | Stop the Oracle service: net stop OracleService%ORACLE_SID%                       |
    | Oracle RAC installations     | Shut down each database instance as follows: srvctl stop database -db db_name     |

5. Stop the listener. Stopping the listener is not necessary for Oracle RAC and Grid Infrastructure
   listeners.

    lsnrctl stop listener_name

    To find your listener name, execute the following command:

    lsnrctl status

    The `Alias `parameter shows listener name.

6. Navigate to `$ORACLE_HOME /rdbms/lib` directory.
7. Enable the unified auditing executable. Do the following depending on your infrastructure:

    | For...             | Do...                                                                                           |
    | ------------------ | ----------------------------------------------------------------------------------------------- |
    | Windows systems    | Rename the `%ORACLE_HOME%/bin/orauniaud12.dll.dbl` file to `%ORACLE_HOME%/bin/orauniaud12.dll.` |
    | UNIX-based systems | Execute the following command: make -f ins_rdbms.mk uniaud_on ioracle ORACLE_HOME=$ORACLE_HOME  |

8. Restart the listener.

    lsnrctl start listener_name

9. Restart the database. Do the following, depending on your environment:

    | For...                       | Do...                                                                                                        |
    | ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
    | Single-instance environments | In sqlplus tool, execute the following command: sqlplus sys as sysoper Enter password: password SQL> STARTUP |
    | Windows systems              | Start the Oracle service: net start OracleService%ORACLE_SID%                                                |
    | Oracle RAC installations     | Start each database instance as follows: srvctl start database -db db_name                                   |

See also:

1. [Manage Earlier Audit Records After You Migrate to Unified Auditing](https://docs.oracle.com/database/121/UPGRD/afterup.htm#manage-earlier-audit-records-after-you-migrate-to-unified-auditing)
2. [Remove the Unified Auditing Functionality](https://docs.oracle.com/database/121/UPGRD/afterup.htm#remove-the-unified-auditing-functionality)
