---
title: "SQL Server Monitoring Scope"
description: "Exclude SQL Server activity, objects, logons, and errors from Netwrix Auditor monitoring by editing the omit list files."
sidebar_position: 20
---

# SQL Server Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the SQL Server
monitoring scope.

## Exclude data from the monitoring scope

**Step 1 –** Navigate to the _%Netwrix Auditor install folder%\SQL Server Auditing_ folder.

**Step 2 –** Edit the \*.txt files listed in the following table, based on these guidelines:

- Each entry must be a separate line.
- You can use a wildcard (\*) to replace any number of characters.
- Auditor ignores lines that start with the # sign; use them for comments.

**Step 3 –** Save the file. The changes take effect on the next data collection.

The following table lists the files and what they affect. The sections after the table describe
each file in detail.

| File                                                    | Purpose                                                                  |
| ------------------------------------------------------- | ------------------------------------------------------------------------ |
| [omitarlist.txt](#omitarlisttxt)                        | Hide activity records from reports, search, and Activity Summaries       |
| [omitdcpathlist.txt](#omitdcpathlisttxt)                | Hide data categories for SQL Server objects in search and reports        |
| [omiterrorlist.txt](#omiterrorlisttxt)                  | Exclude errors and warnings from the Netwrix Auditor System Health log   |
| [omitlogonlist.txt](#omitlogonlisttxt)                  | Exclude logons from monitoring                                           |
| [omitobjlist.txt](#omitobjlisttxt)                      | Hide object types from reports, search, and Activity Summaries           |
| [omitpathlist.txt](#omitpathlisttxt)                    | Hide objects by path from reports, search, and Activity Summaries        |
| [omitproplist.txt](#omitproplisttxt)                    | Exclude attributes from monitoring and from the Long-Term Archive        |
| [omitreadaccesslist.txt](#omitreadaccesslisttxt)        | Exclude SELECT statements from auditing                                  |
| [omitsitpathlist.txt](#omitsitpathlisttxt)              | Exclude objects from state-in-time data collection                       |
| [omitstorelist.txt](#omitstorelisttxt)                  | Exclude objects from data collection and reporting                       |
| [omittracelist.txt](#omittracelisttxt)                  | Prevent Auditor from enabling SQL tracing on specific instances          |
| [propnames.txt](#propnamestxt)                          | Set friendly names for object types and properties in change reports     |

### omitarlist.txt

Lists activity records to exclude from reports, search, and Activity Summaries.

This omit list doesn't affect the triggerless data collection mode, SELECT statement auditing, and
SQL logon monitoring. To exclude SQL logons, use _omitlogonlist.txt_. To exclude SELECT statements,
use _omitreadaccesslist.txt_.

Syntax:

```text
monitoring plan name,SQL Server instance,object type,account,workstation,application name
```

For the account, workstation, and application name fields, you can specify a mixed expression that
contains both a value and a wildcard, for example, `Admin*`.

Example:

```text
SQLPlan,Ent-SQL,Table,guest,WksSQL,MyInternalApp
```

### omitdcpathlist.txt

Lists paths to SQL Server objects whose data categories Auditor hides in search and reports.

Syntax:

```text
server_instance:resource_path
```

Where:

- `server_instance` — SQL Server instance. Use \* for all instances.
- `resource_path` — Resource path as shown in the "_What_" column in reports. A wildcard can
  replace any part of the path.

Example — exclude tables on the _njsrv54_ instance:

```text
njsrv54:Databases\*\Tables\*
```

### omiterrorlist.txt

Lists errors and warnings to exclude from logging to the Netwrix Auditor System Health event log.

Syntax:

```text
monitoring plan name,item name,error text
```

Example:

```text
*,sqlserver1.corp.local,*Access is denied*
```

### omitlogonlist.txt

Lists logons to exclude from monitoring.

Syntax:

```text
monitoring plan name,SQL Server instance,logon type,account,workstation,application name
```

For the account, workstation, and application name fields, you can specify a mixed expression that
contains both a value and a wildcard, for example, `Admin*`.

Supported logon types:

- `NtLogon` — Successful logon attempt made through Windows authentication.
- `SqlLogon` — Successful logon attempt made through SQL Server authentication.
- `NtFailedLogon` — Failed logon attempt made through Windows authentication.
- `SqlFailedLogon` — Failed logon attempt made through SQL Server authentication.

Example:

```text
SQLPlan,Ent-SQL,SqlFailedLogon,guest,WksSQL,MyInternalApp
```

### omitobjlist.txt

Lists object types to exclude from reports, search results, and Activity Summaries. Auditor still
collects the audit data and saves it to the Long-Term Archive.

This omit list doesn't affect SELECT statement auditing, data change auditing, and logon activity
auditing. To exclude logons, use _omitlogonlist.txt_. To exclude SELECT statements, use
_omitreadaccesslist.txt_.

Syntax:

```text
object_type_name
```

You can find the available object types in the "_Object type_" column in reports.

Example:

```text
Database
Column
```

### omitpathlist.txt

Lists resource paths to objects to exclude from search, reports, and Activity Summaries. Auditor
still collects the audit data and saves it to the Long-Term Archive.

This omit list doesn't affect the triggerless data collection mode, SELECT statement auditing, and
logon activity auditing. To exclude logons, use _omitlogonlist.txt_. To exclude SELECT statements,
use _omitreadaccesslist.txt_.

Syntax:

```text
server_instance:resource_path
```

Where:

- `server_instance` — SQL Server instance. Use \* for all instances.
- `resource_path` — Resource path as shown in the "_What_" column of SQL Server reports or in
  search results. A wildcard can replace any part of the path.

Example — exclude databases whose names start with _tmp_ on the _PROD.SQL2012_ instance:

```text
PROD.SQL2012:Databases\tmp*
```

### omitproplist.txt

Lists attributes to exclude from monitoring and from the Long-Term Archive.

Syntax:

```text
object_type_name.property_name.attribute_name
```

Where:

- `object_type_name` — Shown in the "_Object type_" column in change reports.
- `property_name` — Shown in the "_Details_" column, in bold.
- `attribute_name` — Shown in the "_Details_" column, not in bold. If an object doesn't have an
  attribute name, use \*.

Example — exclude the _Size_ attribute of the _Database File_ property in all databases:

```text
Database.Database File.Size
```

### omitreadaccesslist.txt

Lists SELECT statements to exclude from auditing.

Syntax:

```text
monitoring plan name,SQL Server instance,ReadAccess,account,workstation,application name
```

The third field must always be `ReadAccess`. For the account, workstation, and application name
fields, you can specify a mixed expression that contains both a value and a wildcard, for example,
`Admin*`.

Example:

```text
SQLPlan,Ent-SQL,ReadAccess,guest,WksSQL,MyInternalApp
```

### omitsitpathlist.txt

Lists paths to SQL Server objects to exclude from state-in-time data collection.

Syntax:

```text
server_instance:resource_path
```

Where:

- `server_instance` — SQL Server instance. Use \* for all instances.
- `resource_path` — Resource path as shown in the "_What_" column in SQL Server state-in-time
  reports. A wildcard can replace any part of the path.

:::warning
Don't exclude the _master_ database: it contains information that state-in-time data collection
requires. Check the syntax of each entry; an incorrect exclusion can break object relationships
and cause collection errors.
:::

Example — exclude databases whose names start with _tmp_ on the _njsrv54_ instance:

```text
njsrv54:Databases\tmp*
```

### omitstorelist.txt

Lists SQL Server objects to exclude from data collection and reporting.

This list applies only to operations with SQL Server objects. It doesn't affect the triggerless data
collection mode, SELECT statement auditing, and logon activity auditing. To exclude logons, use
_omitlogonlist.txt_. To exclude SELECT statements, use _omitreadaccesslist.txt_.

Syntax:

```text
server_instance:resource_path
```

Where:

- `server_instance` — SQL Server instance. Use \* for all instances.
- `resource_path` — Path as shown in the "_What_" column of SQL Server reports or in search
  results.

Example — exclude server roles on the instances whose names start with _njsqlsrv23_:

```text
njsqlsrv23*:Security\Server Roles\*
```

### omittracelist.txt

Lists SQL Server instances on which Auditor doesn't enable SQL tracing. For these instances, Auditor
doesn't report the "_Who_", "_Workstation_", and "_When_" values correctly, except for content
changes. See [Configuring Trace Logging](/docs/auditor/10.7/configuration/sqlserver/configuringtracelogging.md)
for details.

This omit list doesn't affect the triggerless data collection mode, SELECT statement auditing, and
logon activity auditing.

Syntax:

```text
server\instance
```

Examples:

```text
*
*\SQLExpress
MYSERVER\*
```

### propnames.txt

Lists human-readable names for object types and properties to display in change reports.

Syntax:

```text
object_type_name.property_name=friendlyname
```

To set a friendly name for a property of all object types, use \* as the object type name.

Example:

```text
*.Date modified=Modification Time
```
