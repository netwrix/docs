---
title: "PingCastle Pro troubleshooting"
description: "Diagnose and fix common PingCastle Pro installation and startup problems."
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Troubleshooting

## Viewing application logs and errors

When troubleshooting issues with PingCastle Pro, you need to view error messages and logs to diagnose problems.

<Tabs>
<TabItem value="debug" label="Debug logging" default>

Enable persistent debug logging to capture detailed application behavior:

1. Log in to the PingCastle Pro server.

2. Locate the **appsettings.json** file (usually at `C:\PingCastlePro`).

3. Edit the **appsettings.json** file so the Logging section matches the following:

   ```json
   "Logging": {
       "IncludeScopes": false,
       "LogLevel": {
           "Default": "Debug",
           "System": "Information",
           "Microsoft": "Information"
       }
   }
   ```

4. From the same directory, open the **web.config** file and edit the **aspNetCore** tag so **stdoutLogEnabled** is `true`:

   ```xml
   <aspNetCore processPath="dotnet" arguments=".\PingCastlePro.dll" stdoutLogEnabled="true" stdoutLogFile=".\logs\stdout" hostingModel="InProcess" />
   ```

5. Open PowerShell as Administrator and run `IISRESET` to restart the web services.

6. Log in and perform actions in the PingCastle Pro web portal. Check `C:\PingCastlePro\logs\` to confirm PingCastle Pro is writing logs.

</TabItem>
<TabItem value="manual" label="Run the application manually">

Run the application manually from the command line to view error output immediately, such as a TCP port already in use or an invalid connection string:

```bash
dotnet.exe PingCastlePro.dll
```

By default, `dotnet.exe` is in `C:\Program Files\dotnet`.

To open the application on the network, use the `--server.urls` parameter:

```bash
dotnet.exe PingCastlePro.dll --server.urls=http://*:8080
```

:::note
Running manually has limitations. Database permission errors might not appear because the application runs under your user context rather than the IIS application pool identity (typically `IIS APPPool\<app-name>`). To grant rights to the application pool account on SQL Server, see [How to add the ApplicationPoolIdentity to a SQL Server login](https://blogs.msdn.microsoft.com/ericparvin/2015/04/14/how-to-add-the-applicationpoolidentity-to-a-sql-server-login).
:::

</TabItem>
</Tabs>

### Platform-specific logs

<Tabs>
<TabItem value="windows" label="Windows" default>

- **Event Viewer** stores application errors and warnings.
- PingCastle Pro writes debug logs to `C:\PingCastlePro\logs\` when you enable them.

</TabItem>
<TabItem value="linux" label="Linux">

- Run `service <name-of-service> status` to check whether the service is running.
- If an error prevents the service from starting, the command shows the log.

![Linux service status output showing a startup error](/images/pingcastlepro/4.1/proinstall/image56.webp)

When no log is available, run the program manually outside of the service scope to get a more detailed error message.

![Command-line output showing a detailed startup error](/images/pingcastlepro/4.1/proinstall/image57.webp)

</TabItem>
</Tabs>

## Common errors and solutions

Here are common errors, their causes, and how to fix them.

<details>
<summary>Incorrect ASP.NET Core middleware version</summary>

These error messages appear when the application runs under a service and the wrong version of ASP.NET Core is installed:

![ASP.NET Core error message when running under a service](/images/pingcastlepro/4.1/proinstall/image58.webp)

![ASP.NET Core error displayed in the browser](/images/pingcastlepro/4.1/proinstall/image59.webp)

![ASP.NET Core error details](/images/pingcastlepro/4.1/proinstall/image60.webp)

This message appears when running on the command line:

![Command-line error showing an incorrect .NET middleware version when running PingCastlePro.dll](/images/pingcastlepro/4.1/proinstall/image61.webp)

![Command-line error caused by a missing Windows update](/images/pingcastlepro/4.1/proinstall/image62.webp)

**Solution:**

Identify the correct version of the ASP.NET Core framework and install it. If you're installing on IIS, install the ASP.NET Core Hosting Bundle.

:::note
The last error was related to the missing KB KB2533623.
:::

</details>

<details>
<summary>Missing web.config</summary>

If the **web.config** file is missing or doesn't load the .NET module correctly, the web server treats the application as a static file and returns a 404 error.

**Solution:**

Download the correct **web.config** file from the PingCastle website and replace the existing one.

</details>

<details>
<summary>Application startup errors</summary>

When the application can't start, generic error messages appear in the browser and event log:

![Browser error displayed when the application fails to start](/images/pingcastlepro/4.1/proinstall/image63.webp)

![Event log entry with event ID 1000 shown when the application fails to start](/images/pingcastlepro/4.1/proinstall/image64.webp)

A more detailed message appears in the event log or when you run the application manually:

![Event log entry with event ID 1026 showing an invalid license error](/images/pingcastlepro/4.1/proinstall/image65.webp)

**Common causes:**

- Invalid license in **appsettings.Production.json**
- Missing or misconfigured application settings
- Runtime dependencies not installed

**Solution:**

Check the detailed error message and correct the issue. If you see a license error, replace the license in **appsettings.Production.json**.

</details>

<details>
<summary>Database permissions</summary>

When the database doesn't contain the tables the application needs, the application tries to create them. If you haven't granted the permissions, PingCastle Pro generates a message and the application can't start.

![SQL authentication error shown when the account lacks permission to create database tables](/images/pingcastlepro/4.1/proinstall/image66.webp)

**Requirements:**

- Permission to create tables (required on first run)
- Permission to add, change, and remove records
- TCP/IP enabled on SQL Server
- A firewall that allows remote connections, if SQL Server is on a different computer

The application pool identity needs these permissions, not your user account. When the application runs under IIS, the identity is typically `IIS APPPool\<app-name>`. If you're running PingCastle Pro against another SQL Server, the default identity the application pool uses doesn't have access.

Confirm you can connect from a computer other than the SQL Server host. By default, a firewall can block remote connections and the database might not be exposed over TCP. In the following example, remote access is blocked because TCP/IP is disabled:

![SQL Server configuration with TCP/IP disabled](/images/pingcastlepro/4.1/proinstall/image67.webp)

**Solution 1: Change the application pool identity**

Configure the IIS application pool to run as an Active Directory user that has database permissions:

![IIS application pool advanced settings](/images/pingcastlepro/4.1/proinstall/image68.webp)

![Application pool identity dialog](/images/pingcastlepro/4.1/proinstall/image69.webp)

![Custom account credentials dialog](/images/pingcastlepro/4.1/proinstall/image70.webp)

**Solution 2: Use SQL Server authentication**

Add SQL Server credentials to the connection string in **appsettings.Production.json**:

```text
;User ID=sa;Password=pass123
```

![Connection string in the application settings file](/images/pingcastlepro/4.1/proinstall/image71.webp)

![SQL Server connection with authentication](/images/pingcastlepro/4.1/proinstall/image72.webp)

**Alternative:** If you prefer not to grant table creation permissions, contact support to obtain a SQL script that creates the required tables manually.

</details>
