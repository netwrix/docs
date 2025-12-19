---
title: "5.1.1 to 5.1.7"
description: "5.1.1 to 5.1.7"
sidebar_position: 30
---

# Migrating from 5.1.1 (or any newer version) to 5.1.7

Since version 5.1.1, migrating your Usercube installation to a newer version is as simple as
following these steps.

These steps must absolutely be followed in the given order.

1. Stop server
2. Rename the existing Runtime folder to

    `RuntimeOld`

3. Install the new runtime from

    `Runtime_XXXX.zip`

4. Migrate the database

    Example:
    `./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;"`

5. Migrate the

    `appSettings`

    Example:
    `./identitymanager-Upgrade-Appsettings.exe --version 5.X.X --input-path "C:/identitymanagerDemo/RuntimeOld/" --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;"`

    where 5.X.X is the _MigrateFrom_ version

6. Migrate the configuration

    Example:
    `./identitymanager-Upgrade-ConfigurationVersion.exe --version 5.X.X --xml-path "C:/identitymanagerDemo/ConfOld/" --output "C:/identitymanagerDemo/Conf/"`

    where 5.X.X is the _MigrateFrom_ version

7. Deploy-Configuration (optional) This allows new features to be taken into account, if relevant.
8. Start server
