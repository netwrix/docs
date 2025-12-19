---
description: >-
  Instructions to create a scheduled job in Oracle Database to remove old
  Unified Auditing events using DBMS_SCHEDULER and DBMS_AUDIT_MGMT.
keywords:
  - oracle
  - audit
  - DBMS_SCHEDULER
  - DBMS_AUDIT_MGMT
  - unified auditing
  - cleanup
  - scheduler job
  - Netwrix Auditor
products:
  - auditor
sidebar_label: How to remove old Oracle Database audit events
tags: []
title: "How to remove old Oracle Database audit events"
knowledge_article_id: kA00g000000H9T3CAK
---

# How to remove old Oracle Database audit events

How to remove old audit events when auditing Oracle Database?

---

Netwrix recommends removing old audit events periodically to reduce load on the database server while auditing. You can use the following Oracle Database packages:

- `DBMS_SCHEDULER` — Refer to the following Oracle Database online documentation: https://docs.oracle.com/database/121/ARPLS/d_sched.htm#ARPLS72235
- `DBMS_AUDIT_MGMT` — Refer to the following Oracle Database online documentation: https://docs.oracle.com/database/121/ARPLS/d_audit_mgmt.htm#ARPLS241

The example below describes how to create the job to remove audit events by the following criteria:

- **Audit type** — Unified Auditing
- **Event Age** — Older than one day

The job is triggered once a day. Review the example:

```plsql
BEGIN
 DBMS_SCHEDULER.create_job(
   job_name => 'cleanup_unified_audit_job',
   job_type => 'PLSQL_BLOCK',
   job_action => 'BEGIN DBMS_AUDIT_MGMT.SET_LAST_ARCHIVE_TIMESTAMP( audit_trail_type => DBMS_AUDIT_MGMT.AUDIT_TRAIL_UNIFIED, last_archive_time => TRUNC(SYSDATE)-1); DBMS_AUDIT_MGMT.CLEAN_AUDIT_TRAIL( audit_trail_type => DBMS_AUDIT_MGMT.AUDIT_TRAIL_UNIFIED, use_last_arch_timestamp => TRUE); END;',
   start_date => SYSTIMESTAMP,
   auto_drop => FALSE,
   enabled => TRUE,
   repeat_interval => 'FREQ=DAILY;INTERVAL=1'
 );
END;
```

Run the following queries to review results:

- ```sql
  SELECT * FROM USER_SCHEDULER_JOB_RUN_DETAILS where JOB_NAME = 'CLEANUP_UNIFIED_AUDIT_JOB';
  ```
- ```sql
  SELECT * FROM DBA_SCHEDULER_JOBS WHERE JOB_NAME = 'CLEANUP_UNIFIED_AUDIT_JOB';
  ```
