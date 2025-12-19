---
title: "Configuring Trace Logging"
description: "Configuring Trace Logging"
sidebar_position: 30
---

# Configuring Trace Logging

If trace logging is disabled in SQL Server, then changes will be reported in Netwrix Auditor as made
by _system_. To detect actual change initiator, Netwrix Auditor needs native trace logs data. During
every data collection, Netwrix Auditor will check if the internal SQL audit mechanism is enabled,
and enable it if necessary. To read more, refer to
[this Netwrix Knowledge Base article](https://kb.netwrix.com/728).

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

In some cases, however, you may need to disable trace logging on your SQL Server instance. For that,
follow the procedure below.

If you enable monitoring of SQL logons, SQL trace for these logons will be created anyway.

Follow the steps to exclude SQL Server instance from turning trace logging on automatically.

**Step 1 –** On Netwrix Auditor server, go to the _%Netwrix Auditor installation folder%\SQL Server
Auditing_ folder.

**Step 2 –** Locate the _omittracelist.txt_ file and open it for editing.

**Step 3 –** Specify SQL Server instances that you want to exclude from switching trace logging on
automatically. Syntax: `server\instance name`

Each entry must be a separate line. Lines that start with the # sign are treated as comments and
will be ignored.

With trace logging disabled, the "Who", "Workstation" and "When" values will be not reported
correctly by Netwrix Auditor (except for content changes).

By default, SQL Server trace logs will be stored in the predefined location (depending on the SQL
Server version). For example, SQL Server 2019 error logs are located at _`<drive>`:\Program
Files\Microsoft SQL Server\MSSQL13.`<InstanceName>`\MSSQL\Log_.

You can change this default location, using the _pathstotracelogs.txt_ file.

Follow the steps to change trace log location.

**Step 1 –** On Netwrix Auditor server, go to _%Netwrix Auditor installation folder%\SQL Server
Auditing_ folder.

**Step 2 –** Locate the _pathstotracelogs.txt_ file and open it for editing.

**Step 3 –** Specify SQL Server instance that you need to audit and enter a UNC path to the folder
where you want the trace logs to be stored. Syntax: `SQLServer\Instance|UNC path`

Each entry must be a separate line. Lines that start with the # sign are treated as comments and
will be ignored.

**Example:**

`SQLSRV01\MSSQL2016|C:\Logs\NA trace logs\`

If you want to change trace logs location for multiple instances of one SQL server, make sure that
specified UNC paths are unique across these instances.

Correct:

`SQLSRV01\MSSQL2014|C:\Program Files\Microsoft SQL Server\MSSQL\LOG\`

`SQLSRV01\MSSQL2019|C:\Logs\SQL trace logs\`

Incorrect:

`SQLSRV01\MSSQL2014|C:\Logs\SQL trace logs\`

`SQLSRV01\MSSQL2019|C:\Logs\SQL trace logs\`
