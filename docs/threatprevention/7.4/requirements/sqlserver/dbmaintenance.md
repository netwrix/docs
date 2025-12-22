---
title: "Database Maintenance Feature Requirements"
description: "Database Maintenance Feature Requirements"
sidebar_position: 10
---

# Database Maintenance Feature Requirements

All operations to configure database maintenance on the
[Database Maintenance Window](/docs/threatprevention/7.4/admin/configuration/databasemaintenance/overview.md)
are executed by the Enterprise Manager. Therefore, either the SQL Server account supplied during
Threat Prevention installation or the Windows account configured to run the Enterprise Manager (for
Windows Authentication to the SQL Server) must have enough rights to execute the Database
Maintenance feature.

:::note
If the account used to run Database Maintenance is changed, it is necessary to manually
delete the DBMaintenance SQL Agent Job in the SQL Server Management Studio.
:::


**Permissions Summary**

The database user must have the following rights to run Database Maintenance:

- Read/Write permissions in the NVMonitorData database
- Read/Write permissions in the NVMonitorConfig database
- Query SQL Agent status
- Create/Delete/Modify SQL Agent job
- Query Database size information
- Execute sp_updatestats for the NVMonitorData database
- Create Server Link

**Database Permissions**

The following rights are required to run database maintenance:

- In the master database:

  - VIEW SERVER STATE permission
  - ALTER ANY LOGIN permission
  - ALTER ANY LINKED SERVER permission

- In the msdb database:

  - SQLAgentOperatorRole role
  - Permission to select from msdb.dbo.sysjobs

- In the NVMonitorConfig database:

  - db_datareader role
  - db_datawriter role

- In the NVMonitorData database:

  - Be owner of this database

    :::note
    There is a least privilege option for this requirement. See the
    [Less Privilege Model for NVMonitorData Database Permission](#less-privilege-model-for-nvmonitordata-database-permission)
    topic for additional information.
    :::


See the
[Database Components](/docs/threatprevention/7.4/admin/overview.md#database-components)
topic for a discussion of these databases.

**Archive Database Permissions**

If the **Move** option is selected on the
[Archive Data](/docs/threatprevention/7.4/admin/configuration/databasemaintenance/archive.md)
tab of the Database Maintenance window, an additional account must be provided for the destination
server/database. This account must have rights to:

- Create the database on the specified server
- Modify the schema
- Read/write data from the archive database

## Less Privilege Model for NVMonitorData Database Permission

:::note
If this less privileged model is used, then the last step in the Database Maintenance
process, executing sp_updatestats, will fail. However, all other steps in the process will complete
successfully and all data will be deleted/moved as configured.
:::


If it is not possible to grant the ‘user’ owner rights to the NVMonitorData database, grant the
following instead:

- db_datareader role
- db_datawriter role
- ALTER ON SCHEMA :: dbo
- Execute

## Sample Script to Grant Database Maintenance Rights

Here is a sample script to give the necessary rights for Database Maintenance.

```
/* 
*  Script creates user with a set of minimum required rights to run 
*  Database Maintenance in StealthINTERCEPT (now Threat Prevention) product version 4.1 or newer
*   
*  Prerequisites: Corresponding Windows account must already exist
*   
*/ 
declare @usr varchar (50) = 'DomainName\UserName'; 
declare 
@q varchar(8000),
@id int;  
begin -- CLEAN 
use NVMonitorData;
if exists(select 1 from sys.database_principals where name = @usr)
begin
set @q = 'exec sp_dropuser [' + @usr +']';
exec(@q);
end; 
use NVMonitorConfig;
if exists(select 1 from sys.database_principals where name = @usr)
begin    
set @q = 'exec sp_dropuser [' + @usr + ']';
exec(@q);
end; 
use master;
if exists(select 1 from sys.database_principals where name = @usr)
begin    
set @q = 'exec sp_dropuser [' + @usr + ']';
exec(@q);
end; 
use msdb;
if exists(select 1 from msdb.sys.database_principals where name = @usr)
begin   
set @q = 'exec sp_dropuser [' + @usr + ']';
exec(@q);
end; 
if exists(select * from master.sys.server_principals where name = @usr)
begin   
while(1=1)
begin
set @id = null;
select @id=session_id from master.sys.dm_exec_sessions where login_name = @usr;
if @id is null
break; 
set @q = 'kill '+ cast(@id as varchar);
exec(@q);
end; 
exec('drop login [' + @usr + ']');
end;
end; 
set @q = 'CREATE LOGIN [' + @usr + '] FROM WINDOWS WITH DEFAULT_DATABASE = [NVMonitorData]'
exec(@q); 
use master;
set @q = 'CREATE USER [' + @usr + '] FOR LOGIN [' + @usr + ']';
exec(@q);
set @q = 'GRANT VIEW SERVER STATE TO [' + @usr + ']';
exec(@q);
set @q = 'GRANT ALTER ANY LOGIN TO [' + @usr + ']';
exec(@q);
set @q = 'GRANT ALTER ANY LINKED SERVER TO [' + @usr + ']';
exec(@q); 
use msdb;
set @q = 'CREATE USER ['+ @usr + '] FOR LOGIN [' + @usr + ']';
exec(@q);
set @q = 'exec sp_addrolemember ''SQLAgentOperatorRole'',[' + @usr + ']';
exec(@q);
set @q = 'GRANT select ON msdb.dbo.sysjobs TO [' + @usr + ']';
exec(@q); 
use NVMonitorConfig;
-- Uncomment next line on error: The login already has an account under a different user name.
-- exec sp_changedbowner 'sa' 
set @q = 'CREATE USER [' + @usr + '] FOR LOGIN [' + @usr + ']';
exec(@q);
set @q = 'exec sp_addrolemember ''db_datareader'',['+@usr+']';
exec(@q);
set @q = 'exec sp_addrolemember ''db_datawriter'',['+@usr+']';
exec(@q); 
use NVMonitorData;
/*
* To use this list of DB permissions the issue with 'sp_updatestats' should be resolved first
*
-- Uncomment next line on error: The login already has an account under a different user name.
-- exec sp_changedbowner 'sa'
set @q = 'CREATE USER [' + @usr + '] FOR LOGIN [' + @usr + '];';
exec(@q);
set @q = 'exec sp_addrolemember ''db_datareader'',['+@usr+']';
exec(@q);
set @q = 'exec sp_addrolemember ''db_datawriter'',['+@usr+']';
exec(@q);
set @q = 'GRANT ALTER ON SCHEMA::dbo TO ['+ @usr +']';
exec(@q); 
set @q = 'GRANT EXECUTE TO ['+ @usr +']';
exec(@q);
*/ 
set @q = 'ALTER AUTHORIZATION ON DATABASE::NVMonitorData TO [' + @usr + ']'
exec(@q);
```

:::warning
Errors may occur if this script designates an existing user for granting Less Privilege
Model permissions for database maintenance. This happens because the user is directed to be dropped
and subsequently recreated.
:::


:::info
Rather than using this script as it is, create a dedicated role for this user
with required permission based on the recommended best practices.

:::
