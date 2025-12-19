---
title: "5.2.X to 6.0"
description: "5.2.X to 6.0"
sidebar_position: 10
---

# 5.2.X to 6.0

These instructions are for migrating from 5.2.1 (or higher) to version 6.0. If migrating from a
version older than 5.2.1, see the instructions at the bottom of this page. Note that the
configuration and the agent can be migrated independently of one another.

In the following migration examples `--version` always refers to the _starting_ version. Make sure
to reference either 5.2.1, 5.2.2 or 5.2.3 as is appropriate.

**Choose the set(s) of instructions that correspond to your installation type:**

For SaaS environments, choose:

- [Upgrade Agent Only](#upgrade-agent-only)

For On Premises integrated environments, choose :

- [Upgrade Server and Integrated Agent](#upgrade-server-and-integrated-agent)

For On Premises separated/remote environments, the server should be upgraded before the agent. Use
the following instructions:

- [Upgrade Server Only](#upgrade-server-only)
- [Upgrade Agent Only](#upgrade-agent-only)

## Upgrade Server and Integrated Agent

1. Install the new .NET 6.0 Framework hosting bundle from
   [https://dotnet.microsoft.com/en-us/download/dotnet/6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
2. Stop server
3. Backup and Install

    1. Backup the database.
    2. Rename the Runtime folder to create a backup, for example `RuntimeOld`
    3. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine
    4. Copy all the original appsettings json files from `RuntimeOld` to the new `Runtime`
    5. In the appsettings.json file, at the end of the connection string add `;Encrypt=false` or
       `;Encrypt=true` depending on the database configuration.
        > For example:
        >
        > ```
        >
        > "ConnectionString": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
        >
        > ```

4. Migrate the database

    1. Backup the existing database
    2. Start the database upgrade utility:
        > For example:
        >
        > ```
        >
        > ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
        >
        > ```

5. Recompute all property expressions and correlation keys by using the
   [`Update-EntityPropertyExpressions`](/docs/identitymanager/6.1/integration-guide/executables/references/update-entitypropertyexpressions/index.md)
   and
   [`Compute-CorrelationKeys`](/docs/identitymanager/6.1/integration-guide/executables/references/compute-correlationkeys/index.md)
   executables from the `Runtime` folder.

    > For example:
    >
    > ```
    >
    > ./identitymanager-Update-EntityPropertyExpressions.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a
    > ./identitymanager-Compute-CorrelationKeys.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a
    >
    > ```

6. Restart the server
7. Optional: Migrate the configuration (This allows new features to be taken into account.)

    1. Make sure the XML configuration has already been imported to the database. If not, import the
       configuration with the old Runtime into the database.
    2. Rename the Conf folder to create a backup, for example `ConfOld`.
    3. Run the utility to migrate the configuration.
        > For example:
        >
        > ```
        >
        > ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.2.3" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/"
        >
        > ```
    4. Optional: update the configuration version now that it has been migrated. **NOTE: Change
       nothing else in the configuration except what is needed for the migration. The newly migrated
       conf should be the functional equivalent of the one already in the database.**
    5. Deploy the configuration, correcting any warnings or new errors (that appear because the
       configuration import tool is smarter).
    6. Restart the server

## Upgrade Server Only

1. Install the new .NET 6.0 Framework hosting bundle from
   [https://dotnet.microsoft.com/en-us/download/dotnet/6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
2. Stop server and remote agent(s)
3. Backup and Install

    1. Backup the database.
    2. Rename the Runtime folder to create a backup, for example `RuntimeOld`
    3. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine
    4. Copy all the original appsettings json files from `RuntimeOld` to the new `Runtime`
    5. In the appsettings.json file, at the end of the connection string add `;Encrypt=false` or
       `;Encrypt=true` depending on the database configuration.
        > For example:
        >
        > ```
        >
        > "ConnectionString": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
        >
        > ```

4. Migrate the Database

    1. Backup the existing database
    2. Start the database upgrade utility:
        > For example:
        >
        > ```
        >
        > ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
        >
        > ```

5. Recompute all property expressions and correlation keys by using the
   [`Update-EntityPropertyExpressions`](/docs/identitymanager/6.1/integration-guide/executables/references/update-entitypropertyexpressions/index.md)
   and
   [`Compute-CorrelationKeys`](/docs/identitymanager/6.1/integration-guide/executables/references/compute-correlationkeys/index.md)
   executables from the `Runtime` folder.

    > For example:
    >
    > ```
    >
    > ./identitymanager-Update-EntityPropertyExpressions.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a
    > ./identitymanager-Compute-CorrelationKeys.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a
    >
    > ```

6. Restart the server.
7. Restart the remote agent(s).
8. **Do not upgrade or deploy the configuration until the agent has also been upgraded.**

## Upgrade Agent Only

This installation should be performed only after the server has been upgraded.

1. Install the new .NET 6.0 Framework hosting bundle from
   [https://dotnet.microsoft.com/en-us/download/dotnet/6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
2. Stop the agent.
3. Backup and Install

    1. Rename the Runtime folder to create a backup, for example `RuntimeOld`
    2. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine
    3. Copy all the original appsettings json files from `RuntimeOld` to the new `Runtime`

4. Restart the agent.
5. Optional: Migrate the configuration (This allows new features to be taken into account.)

    1. Make sure the XML configuration has already been imported to the database. If not, import the
       configuration with the old Runtime into the database.
    2. Rename the Conf folder to create a backup, for example `ConfOld`.
    3. Run the utility to migrate the configuration.
        > For example:
        >
        > ```
        >
        > ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.2.3" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/"
        >
        > ```
    4. Optional: update the configuration version now that it has been migrated. **NOTE: Change
       nothing else in the configuration except what is needed for the migration. The newly migrated
       conf should be the functional equivalent of the one already in the database.**
    5. Deploy the configuration, correcting any warnings or new errors (that appear because the
       configuration import tool is smarter).
    6. Restart the server

## Migrating from a version older than 5.2.1?

Because of breaking changes introduced in 5.2.0, migration from older versions can't be handled by
the process described above.

Please follow these guides to handle migrations from older versions.

- [5.1.0 to 5.1.1](/docs/identitymanager/6.1/migration-guide/5.1.0to5.1.1/index.md)
- [5.0 to 5.1](/docs/identitymanager/6.1/migration-guide/5.0.x-to-5.1/index.md)
- [5.1.1 to 5.1.7](/docs/identitymanager/6.1/migration-guide/5.1.1to5.1.7/index.md)
- [5.1.7 to 5.2.3](/docs/identitymanager/6.1/migration-guide/5.1.7to5.2.3/index.md)
