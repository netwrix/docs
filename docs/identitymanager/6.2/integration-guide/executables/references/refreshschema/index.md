---
title: "Usercube-RefreshSchema"
description: "Usercube-RefreshSchema"
sidebar_position: 330
---

# Usercube-RefreshSchema

## Examples

`Usercube-RefreshSchema` can be used as an executable file as follows:

```
dotnet Usercube-RefreshSchema.dll --api-url myserver.usercube.com --api-client-id myclientid --api-secret myclient secret --connection-id -2

```

The credentials used to connect to the connection come from the
[appsettings.agent](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).

## Arguments

| Name                       | Details                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --connection-id \*required | **Type** Integer **Description** Id of a connection whose schemas are updated. See the [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) topic for additional information.                                                                                                                   |
|                            |                                                                                                                                                                                                                                                                                                                              |
| ---                        | ---                                                                                                                                                                                                                                                                                                                          |
| --api-client-id required   | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenIdClient](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions.    |
| --api-secret required      | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenIdClient](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required         | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                              |
|                            |                                                                                                                                                                                                                                                                                                                              |
| ---                        | ---                                                                                                                                                                                                                                                                                                                          |
| --log-level optional       | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                                                                            |
