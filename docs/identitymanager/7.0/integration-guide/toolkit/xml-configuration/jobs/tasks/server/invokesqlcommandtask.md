---
title: "InvokeSqlCommandTask"
description: "Takes as input an SQL file or an SQL command to output several CSV files that can be used by the collection."
sidebar_position: 10
---

Takes as input an SQL file or an SQL command to output several CSV files that can be used by the collection.


## Examples
```xml
<InvokeSqlCommandTask Identifier="SQL_Command" DisplayName_L1="SQL Command" SQLCommand="SELECT id FROM uj_jobs" Agent="Local" OpenIdClient="Job" DatabaseIdentifier="UsercubeDemo" />
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| Agent optional | **Type:** String **Description:** Identifier of the agent on which the job will be launched.**Note:** when not specified, the task is to be launched on the server.**Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| ContinueOnError <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` if the execution of the Task returning an error should not stop the job machine state. |
| DatabaseIdentifier optional | **Type:** String **Description:** Identifier of the Database to connect to |
| Encoding optional | **Type:** String **Description:** Encoding for the output files. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#list-of-encodings). |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |
| IsNotAQuery <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** To know if the SQL command is a query or not |
| IsolationLevel optional | **Type:** String **Description:** Specifies the transaction locking behavior for the database connection. |
| OpenIdClient optional | **Type:** String **Description:** Connection client for the task. |
| OutputPath optional | **Type:** String **Description:** Path to save file.*Alternative definition*: If *TaskType* is:- ProvisioningPolicyTask: Path to save the LDIF file,- CollectorTask: Path of the working directory,- CollectorChangesTask: Path of the working directory,- CollectorADDirSyncTask: Path of the working directory,- ProvisionerDownloadTask: Path of the destination directory, |
| Provider optional | **Type:** String **Description:** Database provider |
| ProviderAssemblyQualifiedName optional | **Type:** String **Description:** Database provider assembly qualified name |
| SQLCommand optional | **Type:** String **Description:** SQL Command to execute |
| SQLInputFile optional | **Type:** String **Description:** Path of the SQL file |
| Timeout <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Specify the timeout if the query need more 30 sec |

