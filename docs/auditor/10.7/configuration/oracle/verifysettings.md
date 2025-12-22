---
title: "Verify Your Oracle Database Audit Settings"
description: "Verify Your Oracle Database Audit Settings"
sidebar_position: 60
---

# Verify Your Oracle Database Audit Settings

You can verify your Oracle Database audit settings manually. Do one of the following, depending on
your Oracle Database version and edition.

| Oracle Database version/edition                                                                                                                                         | Command                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Database 19c (Unified Auditing)                                                                                                                                  | `select ENTITY_NAME, ENABLED_OPTION, SUCCESS, FAILURE from AUDIT_UNIFIED_ENABLED_POLICIES; `                                                                          |
| Oracle Database 12c, 18c, 19c (Unified Auditing)                                                                                                                        | `select USER_NAME, ENABLED_OPT, SUCCESS, FAILURE from AUDIT_UNIFIED_ENABLED_POLICIES;`                                                                                |
| Oracle Database Enterprise Edition (Fine Grained Auditing)                                                                                                              | `SELECT POLICY_NAME, ENABLED from DBA_AUDIT_POLICIES;`                                                                                                                |
| Oracle Database 11g(Standard Auditing) Starting with version 10.5, Netwrix Auditor provides limited support of Oracle Database 11g and trail auditing mode accordingly. | `SELECT audit_option, success, failure FROM dba_stmt_audit_opts;` To review your initialization parameters, execute the following command: `SHOW PARAMETERS audit%r;` |

If you want to clean your audit settings periodically, refer to the following Oracle Help Center
article for more information:
[Database PL/SQL Packages and Types Reference.](https://docs.oracle.com/database/121/ARPLS/d_audit_mgmt.htm#database-plsql-packages-and-types-reference)
