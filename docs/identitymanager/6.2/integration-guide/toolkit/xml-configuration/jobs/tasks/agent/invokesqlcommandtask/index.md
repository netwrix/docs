---
title: "Invoke Sql Command Task"
description: "Invoke Sql Command Task"
sidebar_position: 80
---

# Invoke Sql Command Task

Takes as input an SQL file or an SQL command to output several CSV files that can be used by the
collection.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<InvokeSqlCommandTask Identifier="SQL_Command" DisplayName_L1="SQL Command" SQLCommand="SELECT id FROM uj_jobs" Agent="Local" OpenIdClient="Job" DatabaseIdentifier="UsercubeDemo" />
```

:::note
The database Identifier attribute has a specific location where the connection strings for
the database identifiers need to be defined. See the
[appsettings.agent](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)topic
for additional information.
:::


## Properties

| Property                               | Type    | Description                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required                | String  | Display name of the task in language 1 (up to 16).                                                                                                                                                                                                                                                                                             |
| Agent optional                         | String  | Identifier of the agent on which the job will be launched. **NOTE:** When not specified, the task is to be launched on the server. _Remember,_ all jobs containing the task must be launched on the same agent or on the server.                                                                                                               |
| ContinueOnError default value: false   | Boolean | True if the execution of the Task returning an error should not stop the job machine state.                                                                                                                                                                                                                                                    |
| DatabaseIdentifier optional            | String  | Identifier of the Database to connect to                                                                                                                                                                                                                                                                                                       |
| Encoding optional                      | String  | Encoding for the output files. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                                                                                   |
| Identifier optional                    | String  | Unique identifier of the task.                                                                                                                                                                                                                                                                                                                 |
| IsNotAQuery default value: false       | Boolean | To know if the SQL command is a query or not.                                                                                                                                                                                                                                                                                                  |
| IsolationLevel optional                | String  | Specifies the transaction locking behavior for the database connection.                                                                                                                                                                                                                                                                        |
| OpenIdClient optional                  | String  | Connection client for the task.                                                                                                                                                                                                                                                                                                                |
| OutputPath optional                    | String  | Path to save file. Alternative definition: If TaskType is: - ProvisioningPolicyTask: Path to save the LDIF file, - CollectorTask: Path of the working directory, - CollectorChangesTask: Path of the working directory, - CollectorADDirSyncTask: Path of the working directory, - ProvisionerDownloadTask: Path of the destination directory, |
| Provider optional                      | String  | The database provider.                                                                                                                                                                                                                                                                                                                         |
| ProviderAssemblyQualifiedName optional | String  | Database provider assembly qualified name.                                                                                                                                                                                                                                                                                                     |
| SQLCommand optional                    | String  | SQL Command to execute.                                                                                                                                                                                                                                                                                                                        |
| SQLInputFile optional                  | String  | Path of the SQL file.                                                                                                                                                                                                                                                                                                                          |
| Timeout default value: 0               | Int32   | Specify the timeout if the query need more 30 sec.                                                                                                                                                                                                                                                                                             |
