---
title: "SQL Server Monitoring Scope"
description: "Exclude SQL Server activity, objects, logons, and errors from Netwrix Auditor monitoring by editing the omit list files."
sidebar_position: 40
---

# SQL Server Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the SQL Server
monitoring scope.

## Exclude data from the monitoring scope

**Step 1 –** Navigate to the _%Netwrix Auditor install folder%\SQL Server Auditing_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- You can use a wildcard (\*) to replace any number of characters.
- Auditor ignores lines that start with the # sign; use them for comments.

| File                   | Description                                                                                                                                                    | Syntax and example                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitarlist.txt         | Activity records to hide from reports, search, and Activity Summaries. Doesn't affect the triggerless mode, SELECT statement auditing, and logon monitoring. | `monitoring plan,instance,object type,account,workstation,application`<br/>`SQLPlan,Ent-SQL,Table,guest,WksSQL,MyInternalApp`                         |
| omitdcpathlist.txt     | Objects whose data categories to hide in search and reports.                                                                                                   | `instance:resource path`<br/>`njsrv54:Databases\*\Tables\*`                                                                                           |
| omiterrorlist.txt      | Errors and warnings to exclude from the Netwrix Auditor System Health event log.                                                                               | `monitoring plan,item,error text`<br/>`*,sqlserver1.corp.local,*Access is denied*`                                                                    |
| omitlogonlist.txt      | Logons to exclude from monitoring. Logon types: `NtLogon`, `SqlLogon`, `NtFailedLogon`, `SqlFailedLogon`.                                                      | `monitoring plan,instance,logon type,account,workstation,application`<br/>`SQLPlan,Ent-SQL,SqlFailedLogon,guest,WksSQL,MyInternalApp`                 |
| omitobjlist.txt        | Object types to hide from reports, search, and Activity Summaries. Auditor still collects the data.                                                            | `object type`, as shown in the "_Object type_" column<br/>`Database`                                                                                   |
| omitpathlist.txt       | Objects to hide from reports, search, and Activity Summaries. Auditor still collects the data. Doesn't affect the triggerless mode.                           | `instance:resource path`, as shown in the "_What_" column<br/>`PROD.SQL2012:Databases\tmp*`                                                            |
| omitproplist.txt       | Attributes to exclude from monitoring and from the Long-Term Archive.                                                                                          | `object type.property.attribute`; use \* if there's no attribute<br/>`Database.Database File.Size`                                                    |
| omitreadaccesslist.txt | SELECT statements to exclude from auditing. The third field is always `ReadAccess`.                                                                            | `monitoring plan,instance,ReadAccess,account,workstation,application`<br/>`SQLPlan,Ent-SQL,ReadAccess,guest,WksSQL,MyInternalApp`                     |
| omitsitpathlist.txt    | Objects to exclude from state-in-time data collection. Don't exclude the _master_ database.                                                                    | `instance:resource path`<br/>`njsrv54:Databases\tmp*`                                                                                                 |
| omitstorelist.txt      | Objects to exclude from data collection and reporting. Doesn't affect the triggerless mode, SELECT statement auditing, and logon monitoring.                   | `instance:resource path`<br/>`njsqlsrv23*:Security\Server Roles\*`                                                                                    |
| omittracelist.txt      | Instances on which Auditor doesn't enable SQL tracing. See [Configuring Trace Logging](/docs/auditor/10.8/configuration/sqlserver/configuringtracelogging.md). | `server\instance`<br/>`*\SQLExpress`                                                                                                                  |
| propnames.txt          | Friendly names for object types and properties in change reports.                                                                                              | `object type.property=friendly name`<br/>`*.Date modified=Modification Time`                                                                          |
