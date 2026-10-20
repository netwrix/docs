---
title: "SCIM v2.0"
description: "SCIM v2.0"
sidebar_position: 261
---

# SCIM v2.0

:::caution Preview
This connector is in **preview** in NIM 7.1. Do not use in production without explicit Netwrix approval.
:::

:::note
Looking for the first-generation SCIM connector? See [SCIM](./scim.md).
:::

NIM exports and provisions identities to any RFC 7643/7644-compliant SCIM 2.0 endpoint.

## Overview

SCIM 2.0 (RFC 7643/7644) is a REST-based standard for reading and writing identity data across web applications. NIM uses it to synchronize users and groups bidirectionally: export pulls the current state into the NIM repository; fulfill pushes NIM-computed changes back to the managed system.

## SCIM Compatibility

RFC 7643/7644 define the SCIM 2.0 baseline, but implementations vary widely. Before assuming a NIM connector defect, check your target application's own SCIM documentation.

### Where implementations diverge

- **Capability flags**: `filter.supported`, `patch.supported`, and `changePassword.supported` from `GET /ServiceProviderConfig` are sometimes misreported or the endpoint itself is unavailable. See Limitations and Password reset sections below.
- **Filter expressions**: partial support for SCIM filter operators (eq, sw, compound and/or) is common; some servers reject valid expressions or silently ignore filters entirely.
- **Attribute/schema handling**: extension schema URNs, sub-attribute naming, and multi-valued attribute replacement semantics (RFC 7644 §3.5.2) are not always implemented as specified — e.g., some servers merge on update instead of replacing.
- **Error responses**: RFC 7644 §3.12 defines a standard SCIM error body; some servers return vendor-specific JSON, which affects how failures surface in NIM logs.

The first diagnostic step for unexpected behavior is to inspect the target's `GET /ServiceProviderConfig` response and compare it against NIM's assumptions.

## Prerequisites

The target system must expose a SCIM 2.0 endpoint. No additional prerequisites.

## Export

NIM reads resources from the SCIM endpoint and writes them to CSV files for synchronization.

### Configuration

Configure the connection in the UI or under the `Connections` property in `appsettings.agent.json`. See the [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) topic for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```json
appsettings.agent.json
{
  "Connections": {
    "<ConnectionIdentifier>": {
      "Server": "<Server>",
      "ApplicationId": "<clientId>",
      "ApplicationKey": "<clientSecret>",
      "OAuth2Url": "<OAuth2Url>",
      "Scope": "scim",
      "PageSize": 100
    }
  }
}
```

#### Setting attributes

| Name | Type | Description |
| --- | --- | --- |
| Server **required** | String | Full SCIM base URL including the version path segment (e.g. `https://idp.example.com/scim/v2`). |
| OAuthToken optional | String | Pre-acquired bearer token. Takes priority over all other authentication methods; never refreshed. |
| OAuth2Url optional | String | OAuth2 token endpoint URL. |
| ApplicationId optional | String | OAuth2 client ID. |
| ApplicationKey optional | String | OAuth2 client secret. |
| Login optional | String | Login for password-flow OAuth2 or HTTP Basic auth. |
| Password optional | String | Password for password-flow OAuth2 or HTTP Basic auth. |
| Scope optional | String | Space-separated OAuth2 scopes. |
| Resource optional | String | OAuth2 resource indicator (RFC 8707). |
| PageSize default: `100` | Int32 | Number of resources returned per page request. |
| Filter optional | String | Per-resource-type SCIM filter expressions applied to every list request. Syntax: `ResourceType1|expression1*ResourceType2|expression2`. Example: `Users|active eq "true"*Groups|displayName sw "Eng"`. When combined with incremental export (cookie), NIM ANDs the cookie filter and the entity filter automatically. |

### Output details

NIM generates the following CSV files in the export output folder:

- One file per SCIM resource type, named `<ConnectionIdentifier>_<ResourceType>.csv`, with one column per mapped attribute.
- One membership file per linked resource type, named `<ConnectionIdentifier>_<association>_<ResourceType>.csv` (e.g. `MyConn_members_Groups.csv`, `MyConn_entitlements_Users.csv`), with columns `Command`, the column-1 identifier, and the column-2 identifier.

Column naming conventions for mapped attributes:

- Simple attribute: `attributeName` (e.g. `userName`)
- Sub-attribute: `attribute:subAttribute` (e.g. `name:familyName`, `emails:value`)
- Extension schema attribute: `urn:<schema>¤<attribute>` (e.g. `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User¤employeeNumber`)

Connection table names must follow: `<identifier>_<ResourceType>` for resource files and `<identifier>_<association>_<ResourceType>` for membership files, where `<association>` matches the SCIM property name (e.g. `members`, `entitlements`, `roles`).

See [Entity Type Mapping](../../../integration-guide/toolkit/xml-configuration/connectors/entitytypemapping) for additional information.

### Limitations

- Incremental export uses `meta.lastModified ge "<cookie>"` filtering and is only reliable on SCIM servers that implement RFC 7644 §3.4.2.2 date filtering. Servers that ignore `filter` fall back silently to a full export.
- The `Filter` setting passes expressions verbatim — compound logical expressions are supported only if the target server supports them.
- NIM reads `filter.supported` from `GET /ServiceProviderConfig` once per export run (assumed `true` if the endpoint is unreachable, matching prior behavior). When `false`, NIM omits the `filter` query parameter entirely — both the incremental `meta.lastModified` filter and any configured `Filter` expression are skipped, and the export falls back to a full unfiltered listing on every run. A warning is logged per resource type when this happens.

## Fulfill

NIM creates, updates, and deletes resources on the SCIM endpoint based on provisioning orders.

### Configuration

Same connection settings as export.

```json
appsettings.agent.json
{
  "Connections": {
    "<ConnectionIdentifier>": {
      "Server": "<Server>",
      "ApplicationId": "<clientId>",
      "ApplicationKey": "<clientSecret>",
      "OAuth2Url": "<OAuth2Url>"
    }
  }
}
```

#### Setting attributes

| Name | Type | Description |
| --- | --- | --- |
| Server **required** | String | Full SCIM base URL including the version path segment. |
| OAuthToken optional | String | Pre-acquired bearer token. Takes priority over all other authentication methods. |
| OAuth2Url optional | String | OAuth2 token endpoint URL. |
| ApplicationId optional | String | OAuth2 client ID. |
| ApplicationKey optional | String | OAuth2 client secret. |
| Login optional | String | Login for password-flow OAuth2 or HTTP Basic auth. |
| Password optional | String | Password for password-flow OAuth2 or HTTP Basic auth. |
| Scope optional | String | Space-separated OAuth2 scopes. |
| Resource optional | String | OAuth2 resource indicator (RFC 8707). |
| AccountDeletionBehavior default: `Delete` | String | Controls how NIM handles deletion orders. `Delete` (default): sends HTTP DELETE. `Deactivate`: sends PATCH `active=false`, preserving the account for reactivation. |

The OAuth2 token is refreshed automatically at 95% of `expires_in` or on a 401 response.

### EntityTypeMapping configuration

The `EntityTypeMapping` element controls how NIM maps resource types to SCIM endpoints.

| Attribute | Description |
| --- | --- |
| `ConnectionTable` | `<ConnectionIdentifier>_<endpoint>` (e.g. `MyConn_Users`). The endpoint segment is used as the HTTP path for all SCIM calls. |
| `C0` | Primary SCIM schema URN for this resource type (e.g. `urn:ietf:params:scim:schemas:core:2.0:EnterpriseUser`). Required for custom resource types; optional for `Users` and `Groups`, which default to the standard SCIM 2.0 URNs. |

Set `C0` whenever the primary schema URN does not follow the `urn:ietf:params:scim:schemas:core:2.0:<ResourceType-without-trailing-s>` pattern — for example, for enterprise extensions or vendor-specific schemas.

```xml
<EntityTypeMapping Identifier="MyUser"
                   ConnectionTable="MyConn_Users"
                   C0="urn:ietf:params:scim:schemas:core:2.0:User"
                   Connector="MyConn">
  ...
</EntityTypeMapping>

<!-- Custom resource type: C0 is required -->
<EntityTypeMapping Identifier="MyWidget"
                   ConnectionTable="MyConn_Widgets"
                   C0="urn:example:schemas:1.0:Widget"
                   Connector="MyConn">
  ...
</EntityTypeMapping>
```

### Fulfill capabilities

- **Create**: NIM sends `POST /<ResourceType>` with all mapped attributes. The `schemas` array includes the primary schema URN (from `EntityTypeMapping.C0`) plus any extension schema URNs derived from column names. An absent `id` in a 2xx response is treated as a silent failure and reported as an error.
- **Update**: NIM reads `patch.supported` from `GET /ServiceProviderConfig` once per fulfill run. When `true`, NIM sends `PATCH` operations for changed attributes only. When `false`, NIM fetches the current resource, merges the changed attributes, and sends a full `PUT` — for servers that do not implement `PATCH`.
- **Delete**: when `AccountDeletionBehavior` is `Delete` (default), NIM sends `DELETE`. Some systems do not remove the resource; they interpret `DELETE` as deactivation and return a success status.
- **Deactivate**: when `AccountDeletionBehavior` is `Deactivate`, NIM sends `PATCH` setting `active` to `false`. The account is preserved and can be reactivated.
- **Reactivation**: when `Deactivate` mode is active and NIM issues a create order for an existing account, NIM sends `PATCH` setting `active` to `true` instead of creating a duplicate.
- **Group membership**: add and remove members via `PATCH /Groups/{id}` with `members` `add`/`remove` operations.
- **Multi-valued attributes**: NIM replaces the full multi-valued attribute on update.
- **Extension schema attributes**: column names using the `urn:<schema>¤<attribute>` notation are serialized under the correct extension schema URN in all create and update payloads.

## Authentication

### Password reset

NIM sends a `PATCH` on `Users/{id}` setting the `password` attribute. Before dispatching a password reset, NIM checks `changePassword.supported` from `GET /ServiceProviderConfig`. When `false`, the reset request is skipped and a warning is logged instead.

Limitations:
- ChangePassword (requires the current password) is not supported.
- UnlockAccount is not supported.

### Credential protection

Data protection can be ensured through:

- RSA encryption, configured in the `appsettings.encrypted.agent.json` file. See the
[RSA Encryption](../../../integration-guide/network-configuration/agent-configuration/rsa-encryption) topic for additional information.
- An Azure Key Vault safe; See the
[Azure Key Vault](../../../integration-guide/network-configuration/agent-configuration/azure-key-vault) topic for additional information.
- A CyberArk Vault able to store the SCIM v2 connection's ApplicationId, ApplicationKey, Login, Password, and OAuthToken. See the
[CyberArk's AAM Credential Providers](../../../integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers) topic for additional information.

| Attribute | Naming Convention for the Key in Azure Key Vault |
| --- | --- |
| ApplicationId | Connections--`<identifier>`--ApplicationId |
| ApplicationKey | Connections--`<identifier>`--ApplicationKey |
| Login | Connections--`<identifier>`--Login |
| OAuthToken | Connections--`<identifier>`--OAuthToken |
| Password | Connections--`<identifier>`--Password |
| Server | Connections--`<identifier>`--Server |

See the [RSA Encryption](../../../integration-guide/network-configuration/agent-configuration/rsa-encryption) and [Azure Key Vault](../../../integration-guide/network-configuration/agent-configuration/azure-key-vault) topics for additional information.
