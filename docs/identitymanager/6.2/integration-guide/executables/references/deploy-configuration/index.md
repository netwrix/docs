---
title: "Usercube-Deploy Configuration"
description: "Usercube-Deploy Configuration"
sidebar_position: 80
---

# Usercube-Deploy Configuration

Retrieves all XML configuration files from a given folder, in order to calculate the configuration
items to insert, update or delete in the application.

## Examples

**Locally**

The following example deploys an on-premise configuration via a direct connection to the database
through its connection string:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Deploy-Configuration.exe -d "C:/identitymanager/Conf" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
```

**Remotely**

The following example deploys a SaaS configuration via an HTTP POST request to the server of the
remote configuration:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Deploy-Configuration.exe -d "C:/identitymanager/Conf" --api-url https://my_usercube_instance.com
```

:::info
To be able to deploy a SaaS configuration, you must first provide your Identity
Manager administrator with identity information. See the
[Deploy the Configuration](/docs/identitymanager/6.2/integration-guide/toolkit/deploy-configuration/index.md) topic for
additional information.
:::


## Arguments

The table below displays the arguments for the Identity Manager configuration deployment.

| Argument Name                             | Type           | Description                                                                                                                                                                                                                                           |
| ----------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --configuration-directory (-d) required   | String         | Path to the configuration folder.                                                                                                                                                                                                                     |
| --continuous-deployment (-a) optional     | No Value       | Enables automatic deployment when saving an XML file.                                                                                                                                                                                                 |
| --deployment-slot optional                | DeploymentSlot | Type of the targeted server among the slot names provided by Netwrix' SaaS team. For example: Development, Staging, Production. it is required when working in a SaaS production environment.                                                         |
| --dump-changes-directory optional         | String         | Path to a directory that will receive the logs of all modifications made to the database. _Remember,_ it can be used with --simulate-only for an additional security before deploying to production.                                                  |
| --enable-saas-checks optional             | No Value       | Enables the checks necessary to deploy in a SaaS environment. _Remember,_ it is enabled automatically when working in SaaS. This argument can be used when deploying locally in order to anticipate a future SaaS deployment.                         |
| --force-bindings (-bi) optional           | No Value       | Forces the recomputation of binding paths in the database.                                                                                                                                                                                            |
| --force-cascade-delete optional           | No Value       | Enables the deletion or archiving of XML configuration items that require extra care and/or approval, usually for dependency issues. _Remember,_ Netwrix recommends using this option only when prompted by the deployment tool.                      |
| --force-categories (-c) optional          | No Value       | Forces the recomputation of the counters for role categories in the database.                                                                                                                                                                         |
| --force-expressions (-e) optional         | No Value       | Forces the recomputation of C# expressions in the database.                                                                                                                                                                                           |
| --force-permissions (-p) optional         | No Value       | Forces the recomputation of access permissions in the database.                                                                                                                                                                                       |
| --force-translations optional             | No Value       | Forces the recomputation of the translations for the activity template states and the internal display name properties in the database.                                                                                                               |
| --http-client-timeout-supplement optional | Int32          | Duration (in minutes) after which the deployment command times out, in addition to the default 30 minutes.                                                                                                                                            |
| --no-create-index optional                | No Value       | Disables the creation of indexes related to the configuration. _Remember,_ Netwrix recommends using this option only when advised by the support team.                                                                                                |
| --reset-database optional                 | No Value       | Deletes the whole database and creates an empty one before deploying.                                                                                                                                                                                 |
| --resource-identity-property optional     | String         | Overrides the resource identity property used by the **SelectUserByIdentityQueryHandler** settings.                                                                                                                                                   |
| --simulate-only optional                  | No Value       | Computes and previews on the screen all the changes to be made, but without editing the database.                                                                                                                                                     |
| --api-client-id optional                  | String         | Login of the account authorized by Netwrix for configuration export/deployment in a SaaS environment. **NOTE:** It will be deprecated soon, rather contact the support team.                                                                          |
| --api-secret optional                     | String         | Password of the account authorized by Netwrix for configuration export/deployment in a SaaS environment. **NOTE:** It will be deprecated soon, rather contact the support team.                                                                       |
| --api-url optional                        | String         | URL of the server to export/deploy the configuration to, for remote changes. _Remember,_ it is required when --database-connection-string is not specified.                                                                                           |
| --database-connection-string optional     | String         | Connection string of the database. _Remember,_ it is required when --api-url is not specified.                                                                                                                                                        |
| --product-translation optional            | No Value       | Path of the JSON file that contains the application's translations. See the [Import Product Translations into Identity Manager](/docs/identitymanager/6.2/integration-guide/ui/producttranslations/index.md) topic for more details on how to import the product's translations. |
| --log-level optional                      | LogLevel       | Level of log information among: Verbose; Debug; Information; Warning; Error; Fatal.                                                                                                                                                                   |
