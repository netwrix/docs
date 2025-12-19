---
title: "SQL Server Activity Auditing Configuration"
description: "SQL Server Activity Auditing Configuration"
sidebar_position: 70
---

# SQL Server Activity Auditing Configuration

In order for the Netwrix Activity Monitor to monitor SQL Server activity, a SQL login with certain
server permissions, and must be mapped to user databases.

## SQL Database Server Permissions

- ALTER ANY EVENT SESSION

    - Allows agent to start or stop an event session or change an event session configuration.

- VIEW ANY DEFINITION

    - Allows agent to view the SQL Server object definitions.

- VIEW SERVER STATE

    - Allows agent to access dynamic management views.

## Windows Authentication

Use the following command to create a new login:

```
create login [DOMAIN\USER] from WINDOWS
```

Use the following command to grant server permissions:

```
grant alter any event session to [DOMAIN\USER]
grant view any definition to [DOMAIN\USER]
grant view server state to [DOMAIN\USER]
```

Use the following command to create a user in each database:

```
declare @s varchar(max)='';select @s=@s+(case when @s<>'' then char(13)+char(10) else '' end)+'use ['+name+'];create user [DOMAIN\USER] for login [DOMAIN\USER];' from sys.databases;exec(@s)
```

## SQL Authentication

Use the following command to create a new login:

```
create login [USER] with password='[PUT_PASSWORD_HERE]'
```

Use the following command to grant server permissions:

```
grant alter any event session to [USER]
grant view any definition to [USER]
grant view server state to [USER]
```

Use the following command to create a user in each database:

```
declare @s varchar(max)='';select @s=@s+(case when @s<>'' then char(13)+char(10) else '' end)+'use ['+name+'];create user [USER] for login [USER];' from sys.databases;exec(@s)
```

## Logon Trigger (Optional)

The logon trigger is required to obtain IP Addresses of client connections. Run the following script
in order to allow the Activity Monitor to report client IP Addresses.

```
CREATE TRIGGER SBAudit_LOGON_Trigger ON ALL SERVER FOR LOGON AS BEGIN declare @str varchar(max)=cast(EVENTDATA() as varchar(max));raiserror(@str,1,1);END
```
