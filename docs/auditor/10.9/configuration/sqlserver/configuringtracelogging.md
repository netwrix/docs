---
title: "Configuring Trace Logging"
description: "Configuring Trace Logging"
sidebar_position: 30
---

# Configuring Trace Logging

If trace logging is disabled in SQL Server, Netwrix Auditor reports changes as made by _system_. To
detect the actual change initiator, Netwrix Auditor needs native trace logs data. During every data
collection, Netwrix Auditor checks if the internal SQL audit mechanism is enabled, and enables it if
necessary. For more information, see
[this Netwrix Knowledge Base article](https://kb.netwrix.com/728).

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

In some cases, however, you may need to disable trace logging on your SQL Server instance.

If you enable monitoring of SQL logons, Netwrix Auditor creates SQL trace for these logons anyway.

To exclude a SQL Server instance from turning trace logging on automatically:

**Step 1 –** On Netwrix Auditor server, go to the _%Netwrix Auditor installation folder%\SQL Server
Auditing_ folder.

**Step 2 –** Locate the _omittracelist.txt_ file and open it for editing.

**Step 3 –** Specify SQL Server instances that you want to exclude from switching trace logging on
automatically. Syntax: `server\instance name`

Each entry must be a separate line. Netwrix Auditor treats lines that start with the # sign as
comments and ignores them.

With trace logging disabled, Netwrix Auditor doesn't correctly report the "Who", "Workstation", and
"When" values, except for content changes.

By default, SQL Server stores trace logs in a predefined location, depending on the SQL Server
version. For example, SQL Server 2019 error logs are located at _`<drive>`:\Program
Files\Microsoft SQL Server\MSSQL13.`<InstanceName>`\MSSQL\Log_.

You can change this default location using the _pathstotracelogs.txt_ file. To change the trace log
location:

**Step 1 –** On Netwrix Auditor server, go to _%Netwrix Auditor installation folder%\SQL Server
Auditing_ folder.

**Step 2 –** Locate the _pathstotracelogs.txt_ file and open it for editing.

**Step 3 –** Specify SQL Server instance that you need to audit and enter a UNC path to the folder
where you want the trace logs to be stored. Syntax: `SQLServer\Instance|UNC path`

Each entry must be a separate line. Netwrix Auditor treats lines that start with the # sign as
comments and ignores them.

**Example:**

`SQLSRV01\MSSQL2016|C:\Logs\NA trace logs\`

If you want to change trace logs location for multiple instances of one SQL server, ensure that
specified UNC paths are unique across these instances.

Correct:

`SQLSRV01\MSSQL2014|C:\Program Files\Microsoft SQL Server\MSSQL\LOG\`

`SQLSRV01\MSSQL2019|C:\Logs\SQL trace logs\`

Incorrect:

`SQLSRV01\MSSQL2014|C:\Logs\SQL trace logs\`

`SQLSRV01\MSSQL2019|C:\Logs\SQL trace logs\`
