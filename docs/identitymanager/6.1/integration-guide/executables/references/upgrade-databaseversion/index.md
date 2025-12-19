---
title: "Usercube-Upgrade-DatabaseVersion"
description: "Usercube-Upgrade-DatabaseVersion"
sidebar_position: 380
---

# Usercube-Upgrade-DatabaseVersion

This tool is used to run the necessary migration scripts in order to upgrade the database structure
from its current version to the most recent version.

## Examples

To upgrade a database with the connection string `databaseConnectionString`, go to the Runtime
folder of the newest version and launch the tool with the following argument:

```

**./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString"**

```

If the database has been correctly upgraded, the following message should appear:
`Database has been upgraded to version X.X.X`, with "X.X.X" being the newest version to which the
migration was made.

### With a Mode

The following example runs the database upgrade tool only for backward compatible changes.

```

**./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString" --mode BackwardCompatibleChanges**

```

### With the Execute Predefined

The following example runs the database upgrade tool only for backward compatible changes and the
predefined script. As the predefined script is always executed in the other modes, this option is
useful only when specifying `--mode BackwardCompatibleChanges`.

```

**./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString" --mode BackwardCompatibleChanges --execute-predefined**

```

## Arguments

| Argument Name                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --connection-string (-s) required | **Type** String **Description** Connection string to the database. **Example** `--connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"`                                                                                                                                                                                                                                                |
| --execute-predefined optional     | **Type** No Value **Description** Indicates that the predefined SQL file must be executed, when using the `BackwardCompatibleChanges` mode.                                                                                                                                                                                                                                                                                                    |
| --mode default value: All         | **Type** Enum **Description** `All` - run all the script types. `BackwardCompatibleChanges` - only execute backward compatible scripts. **Note:** the previous runtime can still work. `BreakingChanges` - only execute breaking scripts. **Note:** the server must be stopped. `CleanupChanges` - only execute cleanup scripts, to cleanup the database after the server restarted with the new runtime. **Example** `--mode BreakingChanges` |
| --force-version optional          | **Type** String **Description** Forces the database version instead of using the current one to replay the migration scripts.                                                                                                                                                                                                                                                                                                                  |
