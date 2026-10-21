---
title: "PingCastle Pro troubleshooting"
description: "Diagnose and fix common PingCastle Pro installation and startup problems."
sidebar_position: 10
---

# Troubleshooting

:::note
PingCastle Pro 4.0 isn't yet released. This documentation describes the planned 4.0 behavior and can change before release. For the current release, see the 3.5 version of this documentation.
:::

Netwrix recommends starting the application manually to view any problem such
as:

- TCP port already used

- connection string invalid

The method to run the application manually is to run the command:

```bash
dotnet.exe PingCastlePro.dll
```

**(By default, dotnet.exe is in c:\\program files\\dotnet)**

Additionally, you can open the application on the network by
specifying the `--server.urls` parameter:

```bash
dotnet.exe PingCastlePro.dll --server.urls=http://*:8080
```

However, if a permission problem exists in the database, this method
won\'t display an error because the database connects under the user
context, not the system context. Typically on Windows, the IIS
service connect under IIS APPPool\\AppName. To grant rights to the application pool account on SQL Server, see [How to add the ApplicationPoolIdentity to a SQL Server login](https://blogs.msdn.microsoft.com/ericparvin/2015/04/14/how-to-add-the-applicationpoolidentity-to-a-sql-server-login).

Then, depending on the platform, PingCastle can store additional logs.

On Windows, you can edit the web.config file at the root to generate
debug logs. The event viewer can also store debugging data.

On Linux, the command `service <name-of-service> status` can indicate if
the service is running or not. If an error prevents the service from
starting, the command shows the log.

![](/images/pingcastlepro/4.0/proinstall/image56.webp)

When no log is available, you can run the program manually outside of the
service scope to get a more detailed error message.

Example:

![](/images/pingcastlepro/4.0/proinstall/image57.webp)

Here are a couple of well-known errors, their description and their
solution

## Incorrect version of the asp.net core middleware

Here are the messages that appear when the application runs under a service:

![](/images/pingcastlepro/4.0/proinstall/image58.webp)

![](/images/pingcastlepro/4.0/proinstall/image59.webp)

![](/images/pingcastlepro/4.0/proinstall/image60.webp)

And the message when running on the command line:

![Command-line error showing an incorrect .NET middleware version when running PingCastleEnterprise.dll](/images/pingcastlepro/4.0/proinstall/image61.webp)

![](/images/pingcastlepro/4.0/proinstall/image62.webp)Solution:

identify the correct version of the framework and install it. Install
the IIS middleware if you are installing on IIS.

:::note
The last error was related to the missing KB KB2533623
:::

## Error at the application startup

When the application can't start, the following messages
appear:

![Browser error displayed when the application fails to start](/images/pingcastlepro/4.0/proinstall/image63.webp)

![Event log entry with event ID 1000 shown when the application fails to start](/images/pingcastlepro/4.0/proinstall/image64.webp)

A more detailed message appears in the event log or directly on the
command line:

![Event log entry with event ID 1026 showing an invalid license error](/images/pingcastlepro/4.0/proinstall/image65.webp)

In this case, the license was invalid and you must replace it in the
file appsettings.Production.json.

## Accurate permissions on the database

When the database doesn\'t contain the tables it needs, the application
tries to create them. If you haven't granted the permissions, PingCastle
generates a message and the application can't start.

![SQL authentication error shown when the account lacks permission to create database tables](/images/pingcastlepro/4.0/proinstall/image66.webp)

Solution:

Grant the right to create tables in the database or run a SQL script to
create this table. This script is available on demand.

The inability to create tables is a symptom of insufficient permissions. If the application pool identity can't add or remove records in the database, the application can't start.

If you're running PingCastle from another SQL Server, the default
identity the application pool uses won't have access.

Be sure you can connect from another computer than your SQL
database server. Indeed, by default you have a firewall preventing
remote connection and that the database may not be exposed. Be sure that
it is available through TCP. (in the following case, remote access is
forbidden because TCP/IP is disabled)

![](/images/pingcastlepro/4.0/proinstall/image67.webp)

You have 2 solutions to grant PingCastle an identity allowed on SQL
Server:

- Changing the application pool identity to match an Active Directory
  user that has permissions to the database

![](/images/pingcastlepro/4.0/proinstall/image68.webp)

![](/images/pingcastlepro/4.0/proinstall/image69.webp)

![](/images/pingcastlepro/4.0/proinstall/image70.webp)

- You can use a SQL Server local account and specify its login password
  in the connection string

Edit the application.setting file and locate the connection string. Then
add `;User ID=sa;Password=pass123`

![](/images/pingcastlepro/4.0/proinstall/image71.webp)

![](/images/pingcastlepro/4.0/proinstall/image72.webp)

## Enable Debug Logging

1.  Log in to the PingCastle Pro Server.

2.  Locate the appsettings.json file.

3.  This is usually located at: C:\\PingCastlePro

4.  Edit the **Appsettings.json** file so the Logging section matches the following:

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

5.  From the same directory, open the **web.config** file and edit the
    **aspNetCore** tag so **stdoutLogEnabled=true**.

**Example**

```xml
<aspNetCore processPath="dotnet" arguments=".\PingCastlePro.dll" stdoutLogEnabled="true" stdoutLogFile=".\logs\stdout" hostingModel="InProcess" />
```

6.  Open PowerShell as Administrator and type in **IISRESET** to restart
    the web services.

7.  Log in and perform actions in the PingCastle Pro web portal. Check
    C:\\PingCastlePro\\logs\\ to ensure PingCastle Pro is writing logs.
