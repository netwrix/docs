---
title: "Usercube-Fulfill-Scim-2.0"
description: "Usercube-Fulfill-Scim-2.0"
sidebar_position: 181
---

# Usercube-Fulfill-Scim-2.0

This executable creates, updates, and deletes entries in an application using the SCIM 2.0 API (RFC 7644).

## Examples

### Connector specified

When specifying `--connector`, there is no need to specify `--resource-types`:

```text
--connector "SCIMv2" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --server "https://scim-server.com/scim/v2" --application-id "clientId" --application-key "clientSecret"
```

### Resource types specified

When specifying `--resource-types`, there is no need to specify `--connector`:

```text
--resource-types "SCIMv2_User" "SCIMv2_Group" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --server "https://scim-server.com/scim/v2" --oauth-token "MyToken"
```

## Arguments

 | Argument Name | Details |
 | --- | --- |
 | --api-client-id required | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenIdClient](../../../integration-guide/toolkit/xml-configuration/access-control/openidclient) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
 | --api-secret required | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenIdClient](../../../integration-guide/toolkit/xml-configuration/access-control/openidclient) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
 | --api-url required | **Type** String **Description** URL of Identity Manager server. |
 | --- | --- |
 | --server required | **Type** String **Description** Full SCIM base URL including the version path segment (e.g. `https://idp.example.com/scim/v2`). |
 | --oauth-token optional | **Type** String **Description** Pre-acquired bearer token. Takes priority over OAuth2 and Basic auth. |
 | --oauth2-url optional | **Type** String **Description** OAuth2 token endpoint URL. OIDC discovery is attempted against `--server` when omitted. |
 | --application-id optional | **Type** String **Description** OAuth2 client ID. |
 | --application-key optional | **Type** String **Description** OAuth2 client secret. |
 | --login optional | **Type** String **Description** Login for password-flow OAuth2 or HTTP Basic auth. |
 | --password optional | **Type** String **Description** Password for password-flow OAuth2 or HTTP Basic auth. |
 | --scope optional | **Type** String **Description** Space-separated OAuth2 scopes to request. |
 | --resource optional | **Type** String **Description** RFC 8707 resource indicator. |
 | --account-deletion-behavior default: `Delete` | **Type** String **Description** Controls how deletion orders are sent. `Delete` (default): HTTP DELETE. `Deactivate`: PATCH `active=false`. |
