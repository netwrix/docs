---
title: "5.1.7 to 5.2.3"
description: "5.1.7 to 5.2.3"
sidebar_position: 20
---

# Migrating from 5.1.7 to 5.2.3

**IMPORTANT: BEFORE YOU BEGIN, PLEASE NOTE**:  
The file paths in the appsettings.agent.json file must correspond with the file paths that are in
the version of the configuration that is currently loaded into the database in order to undertake a
migration. Additionally, if any files use relative paths, a warning will be displayed asking that
the `--runtime-path` argument be used.  
If your installation has several agents, the "InformationSystems" section should be concatenated
into one appsettings.agent.json that is used when the instructions below indicate that the agent's
appsettings.agent.json should be copied into a new temporary folder.  
The starting version for this migration must be a version 5.1.7.X.  
CyberArk and Azure Key Vault integrations cannot be automatically migrated.  
SAP and SharePoint connectors cannot be automatically migrated.

In the following migration examples, `--version` always refers to the starting version. In this case
it will be 5.1.7.

**Choose the set(s) of instructions that correspond to your installation type:**

- Upgrade Server and Agent (Integrated Agent Installation)
- Upgrade Server Only (Remote Agent Installation)
- Upgrade Agent Only (Remote Agent Installation)

## Upgrade Server and Agent (Integrated Agent Installation)

1. Verify your starting version, if it's not already 5.1.7.X, please migrate to the most recent
   5.1.7 before proceeding.
2. Stop server
3. Backup and Install

    1. Backup the database.
    2. Rename the Runtime folder to create a backup, for example `RuntimeOld`
    3. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine

4. Migrate the database

    1. Backup the existing database
    2. Create a temporary folder accessible by the Usercube server. Example:
       `C:/identitymanagerExamplePath/AppSettingsFolder`
    3. Copy all the old appsettings (appsettings.agent.json, appsettings.encrypted.agent.json,
       appsettings.json) and paste them into the newly created folder.
    4. Copy all the old appsettings (appsettings.agent.json, appsettings.encrypted.agent.json,
       appsettings.json) and paste them into the new Runtime folder.
    5. Start the database upgrade utility:  
       Example 1:

        ```
        ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json"
        ```

        Example 2:

        ```
        ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json" --runtime-path C:/identitymanagerExampleAgent/Runtime
        ```

5. Move File Locations

    1. Optional: If you don't want to locate the Temp and Work folders in the default location
       (example: C:/identitymanagerExamplePath"), add the following arguments to the original
       appsettings.json file and update the two folder values with the desired locations instead of
       the default values shown here:
        - "TempFolderPath": `"_../Temp_"`,
        - "WorkFolderPath": `"_../Work_"`
    2. Delete the folder C:/identitymanagerExamplePath/Temp/Collect
    3. Run the move files utility.

        If encryption is activated in your Usercube then add the settings corresponding to your
        certificate (see Usercube-Encrypt-File
        [generic arguments](/docs/identitymanager/6.1/integration-guide/executables/references/encrypt-file/index.md)).

        Example with encryption
        deactivated:`./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent`Example with
        certificate:`./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent --file-cert-file "certificateFile" --file-cert-password "certificatePassword"`or```
        ./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent --file-cert-thumbprint
        "certificateThumbprint" --file-cert-store-location "certificateStoreLocation"
        --file-cert-store-name "certificateStoreName"

        ```

        ```

6. Prepare the appsettings migration

    1. Start the Usercube _server_ with the new 5.2 version and the original appsettings files.
    2. Run the appsettings preparation tool to create a new files named "520.json" and "522.json"
       inside the temporary appsettings folder which is output path.  
       Example 1:

        ```
        ./identitymanager-Prepare-UpgradeAppsettings.exe --version "5.1.7" --output-path "C:/identitymanagerExamplePath/AppSettingsFolder"
        ```

        or, if the database is available and/or the agent identifer is not the default value of
        "Local", use a variation of

        Example 2:

        ```
        ./identitymanager-Prepare-UpgradeAppsettings.exe --version "5.1.7" --output-path "C:/identitymanagerExamplePath/AppSettingsFolder" --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --agent-identifier "Remote"
        ```

7. Migrate the appsettings.agent.json

    1. From the server's `Work` folder (by default it's located at the same level as the `Runtime`
       folder) , copy the newly created `appsettings.connection.json` to the output path used in the
       previous step.
    2. Migrate the `appSettings` agent file.  
       Example:

        ```
        ./identitymanager-Upgrade-Appsettings.exe --version "5.1.7" --input-path "C:/identitymanagerExamplePath/AppSettingsFolder/" --migrate-only-agent
        ```

    3. The new appsettings files should now already be copied to the current Runtime folder.

8. Restart the server
9. Optional: Migrate the configuration (This allows new features to be taken into account.)

    1. Rename the Conf folder to create a backup, for example `ConfOld`.
    2. Make sure the temporary appsettings folder still has the old, pre-migration
       appsettings.agent.json.
    3. Run the utility to migrate the configuration.  
       Example 1:`./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.7" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json"`Example
       2:``` ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.7" --xml-path
       "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/" --appsettings-path
       "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json" --runtime-path
       "C:/identitymanagerExamplePath/Runtime"

        ```

        ```

    4. Optional: update the configuration version now that it has been migrated. **NOTE: Change
       nothing else in the configuration except what is needed for the migration. The newly migrated
       conf should be the functional equivalent of the one already in the database.**
    5. Execute these three delete queries in the database:

        ```sql
        DELETE  FROM UJ_TaskResourceTypes
        DELETE  FROM UJ_JobSteps
        ```

    6. Deploy the configuration. Since the new configuration import tool is smarter:
        - Errors may be shown indicating that xml attributes are unknown. This simply means that
          they should be deleted from the xml tag because they are not used.
        - Errors may be shown indicating that permissions do not exist. In most cases, this will be
          because a state was added at the end of the permission that is no longer necessary. For
          example: `/Custom/WorkflowsNotifications/Self_ChangeName/Review/Approved` should become
          `/Custom/WorkflowsNotifications/Self_ChangeName/Review`
    7. Restart the server
    8. To use the new Connector pages, go to each connector and click `Refresh all schemas`

## Upgrade Server Only (Remote Agent Installation)

1. Verify your starting version, if it's not already 5.1.7.X, please migrate to the most recent
   5.1.7 before proceeding.
2. Stop server and remote agent(s)
3. Backup and Install

    1. Backup the database.
    2. Rename the Runtime folder to create a backup, for example `RuntimeOld`
    3. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine
    4. Copy all the original appsettings\* files from `RuntimeOld` to the new `Runtime`

4. Migrate the Database

    1. Backup the existing database
    2. Obtain the appsettings.agent.json file from the agent
    3. Create a temporary folder accessible by the Usercube server. Example:
       `C:/identitymanagerExamplePath/AppSettingsFolder`
    4. Copy the agent's appsettings.agent.json (and the appsettings.encrypted.agent.json if it
       exists) to the newly created folder.
    5. Copy the server's old appsettings.json into the new Runtime folder.
    6. Start the database upgrade utility:  
       Example 1:`./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json"`Example
       2:``` ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data
       source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --appsettings-path
       "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json" --runtime-path
       "C:/identitymanagerExampleAgent/Runtime"

        ```

        ```

5. Move File Locations

    1. Optional: If you don't want to locate the Temp and Work folders in the default location
       (example: C:/identitymanagerExamplePath"), add the following arguments to the original
       appsettings.json file and update the two folder values with the desired locations instead of
       the default values shown here:
        - "TempFolderPath": `"_../Temp_"`,
        - "WorkFolderPath": `"_../Work_"`
    2. Delete the folder C:/identitymanagerExamplePath/Temp/Collect
    3. Run the move files utility.

        ```
          This case represents a Server Only migration so encryption settings are never required because encrypted agent files will not be migrated.

        ```

        Example:``` ./identitymanager-Upgrade-Files.exe --version "5.1.7"

        ```

        ```

6. Restart the server.
7. Restart the remote agent(s).
8. **Do not upgrade or deploy the configuration until the agent has also been upgraded.**

## Upgrade Agent Only (Remote Agent Installation)

This installation should be performed only after the server has been upgraded.

1. Verify your starting version, if it's not already 5.1.7.X, please migrate to the most recent
   5.1.7 before proceeding.
2. Stop the agent.
3. Backup and Install

    1. Rename the Runtime folder to create a backup, for example `RuntimeOld`
    2. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine

4. Move File Locations

    1. Optional: If you don't want to locate the Temp and Work folders in the default location
       (example: C:/identitymanagerExamplePath"), add the following arguments to the original
       appsettings.json file and update the two folder values with the desired locations instead of
       the default values shown here:
        - "TempFolderPath": `"_../Temp_"`,
        - "WorkFolderPath": `"_../Work_"`
    2. Delete the folder C:/identitymanagerExamplePath/Temp/Collect
    3. Run the move files utility.

        ```
          If encryption is activated in your Usercube then add the settings corresponding to your certificate (see Usercube-Encrypt-File [generic arguments](/docs/identitymanager/6.1/integration-guide/executables/references/encrypt-file/index.md)).

        ```

        Example with encryption
        deactivated:`./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent`Example with
        certificate:`./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent --file-cert-file "certificateFile" --file-cert-password "certificatePassword"`or```
        ./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent --file-cert-thumbprint
        "certificateThumbprint" --file-cert-store-location "certificateStoreLocation"
        --file-cert-store-name "certificateStoreName"

        ```

        ```

    4. Copy the file(s) "./tracked-accounts-`{system-identifier}`.csv" from the old Runtime (if they
       exist) to the new `WorkFolderPath` location (the default is "../Work")

5. Prepare appsettings migration

    1. Create a new temporary folder for the appsettings files, for example `AppSettingsFolder`
    2. Copy all the appsettings files from the old (agent) runtime to the newly created folder and
       to the new Runtime
    3. If you use IIS, copy the web.config from the old (agent) runtime to the new Runtime
    4. Start the server (with the new runtime)
    5. Run the appsettings preparation tool to create a new files named "520.json" and "522.json"
       inside the output path.  
       Example 1:``` ./identitymanager-Prepare-UpgradeAppsettings.exe --version "5.1.7" --output-path
       "C:/identitymanagerExamplePath/AppSettingsFolder"
        ````or, if the database is available and/or the agent identifier is not the default value of "Local", use a variation of
        Example 2:```
        ./identitymanager-Prepare-UpgradeAppsettings.exe --version "5.1.7" --output-path "C:/identitymanagerExamplePath/AppSettingsFolder" --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --agent-identifier "Remote"
        ````

6. Migrate the appsettings

    1. From the `Work` folder (by default it's located at the same level as the `Runtime` folder) ,
       copy the `appsettings.connection.json` to the temporary appsettings folder.
    2. Migrate the `appSettings` agent file.  
       Example:

        ```
        ./identitymanager-Upgrade-Appsettings.exe --version "5.1.7" --input-path "C:/identitymanagerExamplePath/AppSettingsFolder/" --migrate-only-agent
        ```

    3. The new appsettings files should now already be copied to the current Runtime folder.

7. Restart the agent.
8. Optional: Migrate the configuration (This allows new features to be taken into account.)

    1. Rename the Conf folder to create a backup, for example `ConfOld`.
    2. Make sure the temporary appsettings folder still has the old, pre-migration
       appsettings.agent.json.
    3. Run the utility to migrate the configuration. Example 1:

        ```
        ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.7" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json"
        ```

        Example 2:

        ```
        ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.7" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json" --runtime-path "C:/identitymanagerExampleAgent/Runtime"
        ```

    4. Optional: update the configuration version now that it has been migrated. **NOTE: Change
       nothing else in the configuration except what is needed for the migration. The newly migrated
       conf should be the functional equivalent of the one already in the database.**
    5. Execute these three delete queries in the database:

        ```sql
        DELETE  FROM UJ_TaskEntityTypes
        DELETE  FROM UJ_TaskResourceTypes
        DELETE  FROM UJ_JobSteps
        ```

    6. Deploy the configuration. Since the new configuration import tool is smarter:

        - Errors may be shown indicating that xml attributes are unknown. This simply means that
          they should be deleted from the xml tag because they are not used.
        - Errors may be shown indicating that permissions do not exist. In most cases, this will be
          because a state was added at the end of the permission that is no longer necessary. For
          example: `/Custom/WorkflowsNotifications/Self_ChangeName/Review/Approved` should become
          `/Custom/WorkflowsNotifications/Self_ChangeName/Review`

    7. Restart the server
    8. To use the new Connector pages, go to each connector and its connections and refresh each
       schema
