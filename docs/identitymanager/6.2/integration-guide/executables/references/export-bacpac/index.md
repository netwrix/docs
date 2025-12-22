---
title: "Usercube-Export-Bacpac"
description: "Usercube-Export-Bacpac"
sidebar_position: 10
---

# Usercube-Export-Bacpac

This tool exports the database to a bacpac file, as a backup.

## Examples

The following example generates to `C:/identitymanagerDemo` a bacpac file from the Identity
Manager database with the given connection string and based on the bacpac template from the SQL
folder.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Export-Bacpac.exe --database "<Usercube>" -s "<data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;>" --bacpac-path 0 --template-bacpac-path "<C:/identitymanagerDemo/SQL>"

```

## Arguments

The list of arguments:

| Argument Name                                     | Type     | Description                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --database-connection-string (-s) required        | String   | Connection string of the database.                                                                                                                                                                                                                                                                                    |
| --database required                               | String   | Name of the database.                                                                                                                                                                                                                                                                                                 |
| --template-bacpac-path required                   | String   | Path of the empty bacpac file or dacpac file containing the database schema. The database export tool includes a .dacpac file, `<Usercube.SqlServer.dacpac>`, in the Runtime folder and should be used as the value for this parameter. It can be generated manually by exporting an empty Identity Manager database. |
| --temp-bacpac-path optional                       | String   | Path of the temporary folder storing the database's data.                                                                                                                                                                                                                                                             |
| --bacpac-path required                            | String   | Path of the generated bacpac file.                                                                                                                                                                                                                                                                                    |
| --without-history default value: false            | Boolean  | True to exclude history data.                                                                                                                                                                                                                                                                                         |
| --without-job-instances default value: false      | Boolean  | True to exclude job and task instances.                                                                                                                                                                                                                                                                               |
| --without-workflow-instances default value: false | Boolean  | True to exclude workflow instances.                                                                                                                                                                                                                                                                                   |
| --without-campaign-instances default value: false | Boolean  | True to exclude access certification campaign items.                                                                                                                                                                                                                                                                  |
| --without-temp default value: false               | Boolean  | True to exclude the data of temporary tables.                                                                                                                                                                                                                                                                         |
| --without-all default value: false                | Boolean  | True to exclude history data, job and task instances, workflow instances and access certification campaign items. _Remember,_ this option represents the usual use-case.                                                                                                                                              |
| --log-level optional                              | LogLevel | Level of log information among: Verbose; Debug; Information; Warning; Error; Fatal.                                                                                                                                                                                                                                   |
