---
title: "Configure Fine Grained Auditing"
description: "Configure Fine Grained Auditing"
sidebar_position: 40
---

# Configure Fine Grained Auditing

When configuring Fine Grained Auditing, you need to create an audit policy with required parameters
set. The section below explains how to create, disable and delete such audit policies.

Fine Grained audit policies can be configured for Oracle Database Enterprise Edition only. Keep in
mind that if you have Fine Grained policies configured, you will receive a permanent error in the
Netwrix Auditor System Health log because Netwrix Auditor cannot detect it. Use Unified and Standard
audit policies to keep track of data changes.

To configure Fine Grained Auditing:

Below is an example of Fine Grained audit policy that enables auditing of audit statements
`(INSERT, UPDATE, DELETE,` and `SELECT`) on table `hr.emp` to audit any query that accesses the
`salary` column of the employee records that belong to `sales` department.

| To...                   | Execute the following command...                                                                                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| To create audit policy  | `EXEC DBMS_FGA.ADD_POLICY(object_schema => 'hr', object_name => 'emp', policy_name => 'chk_hr_emp', audit_condition => 'dept = ''SALES'' ', audit_column => 'salary', statement_types => 'INSERT,UPDATE,DELETE,SELECT');` |
| To disable audit policy | `EXEC DBMS_FGA.DISABLE_POLICY(object_schema => 'hr', object_name =>'emp', policy_name => 'chk_hr_emp');`                                                                                                                  |
| To delete audit policy  | `EXEC DBMS_FGA.DROP_POLICY(object_schema => 'hr', object_name =>'emp', policy_name => 'chk_hr_emp');`                                                                                                                     |

Refer to Oracle documentation for additional information on
[Working with Oracle Fine Grained Auditing](https://docs.oracle.com/cd/F28299_01/pt857pbr3/eng/pt/tadm/task_WorkingwithOracleFineGrainedAuditing-4f7f7a.html?pli=ul_d90e208_tadm#working-with-oracle-fine-grained-auditing).
