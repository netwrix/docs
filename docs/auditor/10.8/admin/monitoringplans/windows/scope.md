---
title: "Windows Server Monitoring Scope"
description: "Windows Server Monitoring Scope"
sidebar_position: 10
---

# Windows Server Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Windows
Server monitoring scope.

Follow the steps to exclude data from the Windows Server monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Windows Server Auditing_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- Wildcards (\* and ?) are supported. A backslash (\) must be put in front of (\*), (?), (,), and
  (\) if they are a part of an entry value.
- Lines that start with the # sign are treated as comments and are ignored.

| File                   | Description                                                                                                                                                                                                            | Syntax                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitcollectlist.txt    | Contains a list of objects and their properties to be excluded from being monitored. If you want to restart monitoring these objects, remove them from the omitcollectlist.txt and run data collection at least twice. | `monitoring plan name,server name,class name,property name,property value` `class name` is a mandatory parameter, it cannot be replaced with a wildcard. `property name` and `property value` are optional, but cannot be replaced with wildcards either. For example: `#*,server,MicrosoftDNS_Server `````` #*,*,StdServerRegProv` |
| omiterrors.txt         | Contains a list of errors/warnings to be omitted from logging to the Netwrix Auditor System Health event log.                                                                                                          | `monitoring plan name,server name,error text` For example: `*,productionserver1.corp.local,*Access is denied*`                                                                                                                                                                                                                      |
| omitreportlist.txt     | Contains a list of objects to be excluded from reports and Activity Summary emails. In this case audit data is still being collected.                                                                                  | `monitoring plan name,who,where,object type,what,property name` For example: `*,CORP\\jsmith,*,*,*,*`                                                                                                                                                                                                                               |
| omitsitcollectlist.txt | Contains a list of objects to be excluded from State-in-time reports.                                                                                                                                                  | `monitoring planname,server name,class name,property name,property value` `class name` is a mandatory parameter, it cannot be replaced with a wildcard. `property name` and `property value` are optional, but cannot be replaced with wildcards either. For example: `*,server,MicrosoftDNS_Server` `*,*,StdServerRegProv`         |
| omitstorelist.txt      | Contains a list of objects to be excluded from being stored to the Audit Archive and showing up in reports. In this case audit data is still being collected.                                                          | `monitoring plan name,who,where,object type,what,property name` For example: `*,*,*,Scheduled task,Scheduled Tasks\\User_Feed_Synchronization*,*`                                                                                                                                                                                   |
