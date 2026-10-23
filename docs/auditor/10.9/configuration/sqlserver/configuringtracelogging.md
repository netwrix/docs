---
title: "Configuring Trace Logging"
description: "Learn how Netwrix Auditor uses SQL Server traces and how to exclude instances from tracing or change the trace file location."
sidebar_position: 30
---

# Configuring Trace Logging

Netwrix Auditor creates and maintains its own SQL Server trace automatically. On every data
collection, Auditor checks whether the trace exists on each monitored SQL Server instance and
creates it if needed. **You don't need to configure anything manually.**

Auditor uses the trace data to report the actual "Who", "Workstation", and "When" values for
changes to SQL Server configuration and objects. Without the trace, Auditor reports these changes
as made by _system_. For more information, see
[this Netwrix Knowledge Base article](https://kb.netwrix.com/728).

The settings on this page are optional. Use them only if you need to:

- Prevent Auditor from creating the trace on specific SQL Server instances. See
  [Exclude instances from trace logging](#exclude-instances-from-trace-logging).
- Store trace files in a folder other than the default one. See
  [Change the trace log location](#change-the-trace-log-location).

Both files are in the _%Netwrix Auditor installation folder%\SQL Server Auditing_ folder on the
Auditor server. In both files, each entry must be on a separate line, and Auditor ignores lines
that start with the # sign.

## Exclude instances from trace logging

If you exclude an instance, Auditor doesn't report the "Who", "Workstation", and "When" values
correctly for changes on that instance, except for content changes.

The exclusion applies only to the trace used for configuration and object changes. Auditor still
creates traces for the following features if you enable them in the monitoring plan:

- Logon activity monitoring
- Data change monitoring in the **Don't use triggers** mode
- Auditing of successful SELECT statements

To exclude a SQL Server instance from trace logging:

**Step 1 –** On the Auditor server, go to the _%Netwrix Auditor installation folder%\SQL Server
Auditing_ folder.

**Step 2 –** Open the _omittracelist.txt_ file for editing.

**Step 3 –** Add the SQL Server instances to exclude. Use the `server\instance` format. The
wildcard (\*) is supported and replaces any number of characters.

**Examples:**

```text
SQLSRV01\MSSQL2019
*\SQLEXPRESS
SQLSRV02\*
```

To exclude all instances, enter `*`.

**Step 4 –** Save the file. The change takes effect on the next data collection.

## Change the trace log location

By default, Auditor stores trace files in the log folder of the SQL Server instance, the same folder
where SQL Server stores its default trace. For example, for a default SQL Server 2019 instance,
this folder is _C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\Log_.

The SQL Server service writes the trace files, so the path refers to the computer where SQL Server
runs, not to the Auditor server. You can specify a local folder on that computer or a UNC path to a
network share. The account that runs the SQL Server service must have write access to the folder.

To change the trace log location:

**Step 1 –** On the Auditor server, go to the _%Netwrix Auditor installation folder%\SQL Server
Auditing_ folder.

**Step 2 –** Open the _pathstotracelogs.txt_ file for editing.

**Step 3 –** Add a line for each SQL Server instance in the `server\instance|path` format.
This file doesn't support wildcards; specify the exact instance name.

**Example:**

```text
SQLSRV01\MSSQL2019|D:\SQL trace logs\
```

**Step 4 –** Save the file. The change takes effect on the next data collection.

If several instances run on the same SQL Server computer, specify a unique folder for each
instance.

Correct:

```text
SQLSRV01\MSSQL2017|D:\SQL trace logs\MSSQL2017\
SQLSRV01\MSSQL2019|D:\SQL trace logs\MSSQL2019\
```

Incorrect:

```text
SQLSRV01\MSSQL2017|D:\SQL trace logs\
SQLSRV01\MSSQL2019|D:\SQL trace logs\
```
