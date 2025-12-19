---
title: "Configure Trace Logging"
description: "Configure Trace Logging"
sidebar_position: 30
---

# Configure Trace Logging

By default, the SQL Server trace logs are stored to the predefined location (depending on the SQL
Server version). For example, SQL Server 2019 error logs are located at
`<drive>:\Program Files\Microsoft SQL Server\MSSQL13.<InstanceName>\MSSQL\Log`.

You can change this default location using the _pathstotracelogs.txt_ file.

Follow the steps to change trace log location.

**Step 1 –** On Netwrix Auditor server, go to
`<drive>:\Program Files\Netwrix Cloud Agent\SQL Server Auditing`.

**Step 2 –** Locate the _pathstotracelogs.txt_ file and open it for editing.

**Step 3 –** Specify the SQL Server instance that you need to audit and enter a UNC path to the
folder where you want to store the trace logs. Syntax: `SQLServer\Instance|UNC path`. Each entry
must be a separate line. Lines that start with the # sign are treated as comments and will be
ignored.

**Example:**

`SQLSRV01\MSSQL2016|C:\Logs\1Secure trace logs\`

To change trace logs location for multiple instances of one SQL server, make sure that the UNC paths
are unique across these instances.

Correct:

`SQLSRV01\MSSQL2014|C:\Program Files\Microsoft SQL Server\MSSQL\LOG\`

`SQLSRV01\MSSQL2019|C:\Logs\SQL trace logs\`

Incorrect:

`SQLSRV01\MSSQL2014|C:\Logs\SQL trace logs\`

`SQLSRV01\MSSQL2019|C:\Logs\SQL trace logs\`
