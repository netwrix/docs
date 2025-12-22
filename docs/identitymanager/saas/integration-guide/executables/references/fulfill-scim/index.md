---
title: "Usercube-Fulfill-Scim"
description: "Usercube-Fulfill-Scim"
sidebar_position: 180
---

# Usercube-Fulfill-Scim

This executable creates, updates and deleles entries in an application using the SCIM API.

## Examples

### Connector specified

When specifying `--connector`, there is no need to specify `--resource-types`:

`--connector "3" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifier can be also given instead of the id:

`--connector "SCIM" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

### Resource types specified

When specifying `--resource-types`, there is no need to specify `--connector`:

`--resource-types "40" "41" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifiers can be also given instead of the id:

`--resource-types "SCIM_NominativeUser" "SCIM_Administrator" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret"--url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

## Arguments

| Argument Name              | Details                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --api-client-id required   | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenIdClient](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions.    |
| --api-secret required      | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenIdClient](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required         | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                              |
|                            |                                                                                                                                                                                                                                                                                                                              |
| ---                        | ---                                                                                                                                                                                                                                                                                                                          |
| --server required          | **Type** String **Description** URL of the SCIM endpoints of your application, not including the v2.                                                                                                                                                                                                                         |
| --login optional           | **Type** String **Description** Specifies the login of the account you may need.                                                                                                                                                                                                                                             |
| --password optional        | **Type** String **Description** Specifies the password of the account you may need.                                                                                                                                                                                                                                          |
| --application-id optional  | **Type** String **Description** Specifies the application connection login or the login of your application's id provider.                                                                                                                                                                                                   |
| --application-key optional | **Type** String **Description** Specifies the application connection password or the password of your application's id provider.                                                                                                                                                                                             |
| --oauth-url optional       | **Type** String **Description** The server's url when using OAuth2 authentication.                                                                                                                                                                                                                                           |
| --oauth-token optional     | **Type** String **Description** Specifies the OAuth token to connect to the application.                                                                                                                                                                                                                                     |
| --scim-syntax optional     | **Type** Enum **Description** Specifies the syntax used for requests body. Has to be one of those values: Salesforce (default value) or CyberArk                                                                                                                                                                             |
