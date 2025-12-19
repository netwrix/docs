---
title: "Usercube-Deploy-Configuration"
description: "Usercube-Deploy-Configuration"
sidebar_position: 80
---

# Usercube-Deploy-Configuration

Retrieves all XML configuration files from a given folder, in order to calculate the configuration
items to insert, update or delete in the application.

## Examples

### Locally

The following example deploys an on-premise configuration via a direct connection to the database
through its connection string:

```

./identitymanager-Deploy-Configuration.exe -d "C:/identitymanager/Conf" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"

```

### Remotely

The following example deploys a SaaS configuration via an HTTP POST request to the server of the
remote configuration:

```

**./identitymanager-Deploy-Configuration.exe -d "C:/identitymanager/Conf" --api-url https://my_usercube_instance.com**

```

To be able to deploy a SaaS configuration, you must first provide your Usercube administrator with
identity information.
[See how to deploy a SaaS configuration](/docs/identitymanager/6.1/integration-guide/toolkit/how-tos/deploy-configuration/index.md)
for the first time.

## Arguments

| Argument Name                             | Details                                                                                                                                                                                                                                                                |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --configuration-directory (-d) required   | **Type** String **Description** Path to the configuration folder.                                                                                                                                                                                                      |
| --continuous-deployment (-a) optional     | **Type** No Value **Description** Enables automatic deployment when saving an XML file.                                                                                                                                                                                |
| --deployment-slot optional                | **Type** DeploymentSlot **Description** Type of the targeted server among the slot names provided by NETWRIX' SaaS team. For example: `Development`, `Staging`, `Production`. **Note:** required when working in a SaaS production environment.                        |
| --dump-changes-directory optional         | **Type** String **Description** Path to a directory that will receive the logs of all modifications made to the database. **Note:** can be used with `--simulate-only` for an additional security before deploying to production.                                      |
| --enable-saas-checks optional             | **Type** No Value **Description** Enables the checks necessary to deploy in a SaaS environment. **Note:** enabled automatically when working in SaaS. This argument can be used when deploying locally in order to anticipate a future SaaS deployment.                |
| --force-bindings (-bi) optional           | **Type** No Value **Description** Forces the recomputation of binding paths in the database.                                                                                                                                                                           |
| --force-cascade-delete optional           | **Type** No Value **Description** Enables the deletion or archiving of XML configuration items that require extra care and/or approval, usually for dependency issues. **Warning:** NETWRIX recommends using this option only when prompted by the deployment tool.    |
| --force-categories (-c) optional          | **Type** No Value **Description** Forces the recomputation of the counters for role categories in the database.                                                                                                                                                        |
| --force-expressions (-e) optional         | **Type** No Value **Description** Forces the recomputation of C# expressions in the database.                                                                                                                                                                          |
| --force-permissions (-p) optional         | **Type** No Value **Description** Forces the recomputation of access permissions in the database.                                                                                                                                                                      |
| --force-translations optional             | **Type** No Value **Description** Forces the recomputation of the translations for the activity template states and the internal display name properties in the database.                                                                                              |
| --http-client-timeout-supplement optional | **Type** Int32 **Description** Duration (in minutes) after which the deployment command times out, in addition to the default 30 minutes.                                                                                                                              |
| --no-create-index optional                | **Type** No Value **Description** Disables the creation of indexes related to the configuration. **Warning:** NETWRIX recommends using this option only when advised by the support team.                                                                              |
| --reset-database optional                 | **Type** No Value **Description** Deletes the whole database and creates an empty one before deploying.                                                                                                                                                                |
| --resource-identity-property optional     | **Type** String **Description** Overrides the resource identity property used by the `SelectUserByIdentityQueryHandler` settings.                                                                                                                                      |
| --simulate-only optional                  | **Type** No Value **Description** Computes and previews on the screen all the changes to be made, but without editing the database.                                                                                                                                    |
|                                           |                                                                                                                                                                                                                                                                        |
| ---                                       | ---                                                                                                                                                                                                                                                                    |
| --api-client-id optional                  | **Type** String **Description** Login of the account authorized by NETWRIX for configuration export/deployment in a SaaS environment. **Note:** soon deprecated, rather contact the support team.                                                                      |
| --api-secret optional                     | **Type** String **Description** Password of the account authorized by NETWRIX for configuration export/deployment in a SaaS environment. **Note:** soon deprecated, rather contact the support team.                                                                   |
| --api-url optional                        | **Type** String **Description** URL of the server to export/deploy the configuration to, for remote changes. **Note:** required when `--database-connection-string` is not specified.                                                                                  |
|                                           |                                                                                                                                                                                                                                                                        |
| ---                                       | ---                                                                                                                                                                                                                                                                    |
| --database-connection-string optional     | **Type** String **Description** Connection string of the database. **Note:** required when `--api-url` is not specified.                                                                                                                                               |
| --product-translation optional            | **Type** No Value **Description** Path of the JSON file that contains the application's translations. [See more details on how to import the product's translations](/docs/identitymanager/6.1/integration-guide/ui/how-tos/producttranslations/index.md). |
| --scope optional                          | **Type** String **Description** Path of a folder or file to export/deploy, instead of exporting/deploying the whole configuration.                                                                                                                                     |
|                                           |                                                                                                                                                                                                                                                                        |
| ---                                       | ---                                                                                                                                                                                                                                                                    |
| --log-level optional                      | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                      |
