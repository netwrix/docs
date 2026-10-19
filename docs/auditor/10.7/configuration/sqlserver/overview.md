---
title: "SQL Server"
description: "SQL Server"
sidebar_position: 110
---

# SQL Server

Netwrix Auditor relies on SQL Server traces and, optionally, triggers for collecting audit data.
Auditor configures SQL Server for monitoring automatically: on each data collection, it checks the
audit settings on the monitored instances and adjusts them if necessary. Don't change or delete the
objects that Auditor creates.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

To prepare SQL Server for monitoring:

- Prepare a Data Collecting Account as described in the
  [Permissions for SQL Server Auditing](/docs/auditor/10.7/configuration/sqlserver/permissions.md)
  topic.
- Configure required protocols and ports, as described in the
  [SQL Server Ports](/docs/auditor/10.7/configuration/sqlserver/ports.md) topic.
Auditor configures the following automatically:

- SQL Server traces that capture configuration changes, logons, and, in the **Don't use triggers**
  mode, data changes and SELECT statements.
- In the **Use triggers for detailed monitoring** mode, triggers on the audited tables and the
  _NetwrixSQLCRAudit_ database where the triggers store data changes. Auditor also sets the
  TRUSTWORTHY option to ON for the audited databases.

If you need to change the default behavior:

- To prevent Auditor from creating traces on specific instances, or to store trace files in a
  different folder, see the
  [Configuring Trace Logging](/docs/auditor/10.7/configuration/sqlserver/configuringtracelogging.md)
  topic.
- To exclude objects, logons, or other data from monitoring, see the
  [SQL Server Monitoring Scope](/docs/auditor/10.7/configuration/sqlserver/scope.md) topic.
## Before and after values for data changes

When you monitor data changes in the **Use triggers for detailed monitoring** mode, Auditor reports
the column values before and after each UPDATE. To match the old and new versions of a row, Auditor
uses the primary key or a unique constraint of the table.

If a table has neither, Auditor still reports the UPDATE, but without the before and after values.
The values are also missing when an UPDATE changes the primary key or unique constraint columns
themselves.

To get the before and after values for such a table, add a primary key or a unique constraint to
it. A unique index without a constraint isn't enough. Auditor updates its triggers for the table
automatically during data collection.

In the **Don't use triggers** mode, Auditor doesn't report column values, so the primary key
doesn't affect the results.
## SQL Server Objects

Review a full list of all object and data types Netwrix Auditor can collect on SQL Server.

### Monitored object types

The following table contains the full list of object types that Netwrix Auditor monitors on SQL
Servers. The product reports on adding and removing these object types (Application Roles, Database,
Jobs, etc.) and modifying their attributes (listed in the "_Attributes_" column).

As for logons, the product collects successful and failed logon attempts for Windows and SQL logons:

| Logon Type    | Action                            |
| ------------- | --------------------------------- |
| SQL logon     | Successful logon<br/>Failed logon |
| Windows logon | Successful logon<br/>Failed logon |

Review the full list of monitored object types and their attributes:

The attributes marked with asterisk (\*) are reported only for the SQL Server item, not for
availability groups.

<!-- vale Netwrix.FirstPerson = NO -->
<!-- vale Netwrix.OxfordComma = NO -->

| Object type | Attributes |
| ----------- | ---------- |
| Application Role | Date Created, Date Modified, Default Schema, Extended Properties, Id, Name, Owned Schemas |
| Backup | Backup name, Description, Device name, logical_device_name, Size, Type |
| Column | Allow nulls, ANSI Padding Status, Collation, Computed Text, Default Constraint, Full Text, ID, Identity, Identity increment, Identity seed, Is Computed, Length, Name, Not for replication, Numeric precision, Numeric scale, Primary Key, Rule, Rule Schema, System Type, XML Schema Namespace |
| Constraints | Date Created, Date Modified, Definition, ID, Is system named, MS shipped, Name, Published, Schema published |
| Credentials\* | Id, Identity, Date Created, Date Modified, Name |
| Database | Compatibility, Database Size, Database Space Available, Date Created, Date Modified, Extended Properties, File Id, File Group, File Name, Growth, Id, Name, Options, Owner, Permissions, Size, Usage |
| Database Role | Date Created, Date Modified, Extended Properties, Id, Name, Owner, Owned Schemas, Role Members |
| Functions | Date Created, Date Modified, Id, Name, Permissions, Type |
| Jobs\* | Automatically delete job, Category, Date Created, Date Modified, Description, Email notification, Email operator, Enabled, ID, Name, Net send notification, Net send operator, Owner, Page notification, Page operator, Schedules, Write to the Windows Application event log |
| Job Steps\* | ID, Name, On Failure, On Success, Output file, Process exit code of a successful command, Retry attempts, Retry interval (minutes), Step, Type |
| Jobs Schedules\* | Date Created, Date Modified, Enabled, ID, Name, Owner, Schedule Type, Settings |
| Indexes | Allow page locks, Name, Primary key, Ignore duplicate values, Unique constraint, Allow row locks, Type, Disabled, Included Columns, Fill factor, Data Space ID, Index Key Columns, Padded, Hypothetical, Unique |
| Keys | Name, ID, Date Created, Date Modified, MS shipped, Published, Schema published, Disabled, Not for replication, Not trusted, Delete referential action, Update referential action, Is system named |
| Login\* | Date Created, Date Modified, Default Database, Default Language, Disabled, Enforce Password Expiration, Enforce Password Policy, Id, Name, Password Hash, Server Roles |
| Restore | Type |
| Schema | Date Created, Date Modified, Extended Properties, Id, Name, Owner, Permissions |
| Server Instance\* | Ad Hoc Distributed Queries, Affinity I/O Mask, Affinity Mask, Agent XPs, Allow Updates, Awe Enabled, Blocked Process Threshold, C2 Audit Mode, Clr Enabled, Collation, Cost Threshold For Parallelism, Cross Db Ownership Chaining, Cursor Threshold, Database Mail XPs, Date Modified, Default Full-text Language, Default Language, Default Trace Enabled, Disallow Results From Triggers, Fill Factor (%), Ft Crawl Bandwidth (max), Ft Crawl Bandwidth (min), Ft Notify Bandwidth (max), Ft Notify Bandwidth (min), Id, In-doubt Xact Resolution, Index Create Memory (K), Lightweight Pooling, Locks, Max Degree Of Parallelism, Max Full-text Crawl Range, Max Server Memory (M), Max Text Repl Size (B), Max Worker Threads, Media Retention, Min Memory Per Query (K), Min Server Memory (M), Name, Nested Triggers, Network Packet Size (B), Ole Automation Procedures, Open Objects, Permissions, PH Timeout (s), Precompute Rank, Priority Boost, Query Wait (s), Query Governor Cost Limit, Recovery Interval (min), Remote Admin Connections, Remote Login Timeout (s), Remote Proc Trans, Remote Query Timeout (s), Remote Access, Replication XPs, Scan For Startup Procs, Server Trigger Recursion, Set Working Set Size, Show Advanced Options, SMO And DMO XPs, SQL Mail XPs, Status, Transform Noise Words, Two Digit Year Cutoff, User Connections, User Instances Enabled, User Instance Timeout, User Options, Web Assistant Procedures, Xp_cmdshell |
| Server Role\* | Date Created, Date Modified, Id, Name, Role Members |
| Stored Procedure | ANSI NULLs, Date Created, Date Modified, Encrypted, Execute as, FOR replication, Id, Name, Permissions, Quoted Identifier, Recompile, Schema |
| Table | ANSI NULLs, Date Created, Date Modified, Filegroup, Id, Name, Partition scheme, Permissions, Schema, Table is partitioned, Table is replicated, Text filegroup |
| Triggers | Auditor supports only DML table triggers.<br/>Date Created, Date Modified, Disabled, ID, Instead of trigger, MS shipped, Name, Not for replication |
| User | Date Created, Date Modified, Default Schema, Extended Properties, Id, Name, Owned Schemas, Roles |
| View | ANSI NULLs, Date Created, Date Modified, Encrypted, Id, Name, Permissions, Quoted Identifier, Schema, Schema bound |
| View Column | Allow nulls, ANSI Padding Status, Collation, Computed Text, Default Constraint, Full Text, ID, Identity, Identity increment, Identity seed, Is Computed, Length, Name, Not for replication, Numeric precision, Numeric scale, Rule, Rule Schema, System Type, XML Schema Namespace, XML Schema Namespace schema |
| View Index | Allow Page Locks, Allow Row Locks, ID, Data Space ID, Disabled, Fill Factor, Hypothetical, Ignore Dup Key, Name, Padindex, Primary Key, Schema Name, Type, Unique, Unique Constraint, View Name |
| View Index Column | Column ID, ID, Included Column, Index ID, Key Ordinal, Name, Partition Ordinal, Schema Name, Sort Order, View Name |

<!-- vale Netwrix.OxfordComma = YES -->
<!-- vale Netwrix.FirstPerson = YES -->

### Monitored data types

The following list contains the names of all data types monitored by Netwrix Auditor:

`bigint`, `bit`, `char`, `cursor`, `date`, `datetime2`, `datetime`, `datetimeoffset`, `decimal`,
`hierarchyid`, `int`, `float`, `money`, `nchar`, `nvarchar`, `numeric`, `real`, `smalldatetime`,
`smallint`, `smallmoney`, `table`, `time`, `timestamp`, `tinyint`, `uniqueidentifier`, `varchar`,
`xml`
