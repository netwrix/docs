---
title: "SCIM v2.0"
description: "SCIM v2.0"
sidebar_position: 261
---

# SCIM v2.0

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
- **Attribute/schema handling**: extension schema URNs, sub-attribute naming, and multi-valued attribute replacement semantics (RFC 7644 §3.5.2) aren't always implemented as specified — e.g., some servers merge on update instead of replacing.
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
      "PageSize": 100,
      "SecuredHeaders": {
        "User-Agent": "MyOrg/1.0"
      }
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
| PageSize default: `100` | Int32 | Number of resources requested per page (minimum 1; rejected otherwise). Automatically capped to the server's advertised `maxPageSize` when it declares one and it is smaller. |
| Filter optional | String | Per-resource-type SCIM filter expressions applied to every list request. Syntax: `ResourceType1|expression1*ResourceType2|expression2`. Example: `Users|active eq true*Groups|displayName sw "Eng"`. If the server declares `filter.supported: false` (see Capabilities below) and a `Filter` is configured for a resource type, export fails at startup rather than silently ignoring the filter and exporting an unfiltered set. |
| SecuredHeaders optional | Object | Custom HTTP headers added to every request, as a flat key/value JSON object (e.g. `{"User-Agent": "MyOrg/1.0"}`). Values are encrypted at rest — see [Configure Secured Options](../configuration-details/configure-secured-options.md). |
| Capabilities optional | Object | Forces server capabilities instead of relying on `GET /ServiceProviderConfig` auto-detection, as a flat key/value JSON object. Keys: `Patch`, `Filter`, `ChangePassword`. Values: `Supported` or `Unsupported`. A key absent from the object defaults to `Auto` (detected from the server). |

### Output details

NIM generates the following CSV files in the export output folder:

- One file per SCIM resource type, named `<ConnectionIdentifier>_<ResourceType>.csv`, with one column per mapped attribute.
- One membership file per linked resource type, named `<ConnectionIdentifier>_<association>_<ResourceType>.csv` (e.g. `MyConn_members_Groups.csv`, `MyConn_entitlements_Users.csv`), with columns `Command`, the column-1 identifier, and the column-2 identifier.

Column naming conventions for mapped attributes:

- Simple attribute: `attributeName` (e.g. `userName`)
- Sub-attribute: `attribute:subAttribute` (e.g. `name:familyName`, `emails:value`)
- Extension schema attribute: `urn:<schema>¤<attribute>` (e.g. `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User¤employeeNumber`).
- Common attributes are always offered even when the target schema doesn't declare them explicitly: `externalId`, `meta:created`, `meta:lastModified`.
- Attributes marked `mutability: writeOnly` or `returned: never` in the discovered schema (e.g. `password`) are never exposed as mappable columns — `password` is handled exclusively by password reset (see Password reset below).
- Multi-valued attributes (`emails`, `phoneNumbers`, …) are exported/read as a single text value using NIM's `\n`-separated multi-valued convention, not commas — a comma inside a value would otherwise corrupt the export. The `primary` entry (if any) is always first in the list; on write, the first entry is treated as primary when none is explicitly flagged.

Connection table names must follow: `<identifier>_<ResourceType>` for resource files and `<identifier>_<association>_<ResourceType>` for membership files, where `<association>` matches the SCIM property name (e.g. `members`, `entitlements`, `roles`).

See [Entity Type Mapping](../../../integration-guide/toolkit/xml-configuration/connectors/entitytypemapping) for additional information.

### Limitations

- Incremental export uses `meta.lastModified ge "<cookie>"` filtering when the server can filter. Otherwise NIM lists every resource and classifies each one from its `meta.created` and `meta.lastModified` timestamps, so the export stays incremental at the cost of transferring every page. A warning is logged per resource type when this happens.
- The `Filter` setting passes expressions verbatim — compound logical expressions are supported only if the target server supports them. If the server declares filtering unsupported and a `Filter` is configured for that resource type, export fails rather than silently exporting an unfiltered set — remove the `Filter` or force `Capabilities.Filter=Supported` if the self-description is wrong.
- Filter capability is determined from the server's behavior, not only from its self-description. NIM reads `filter.supported` from `GET /ServiceProviderConfig` once per export run (or from the `Capabilities` override, see above).
- A successful filtered request doesn't prove the server applied the filter. Servers that silently ignore an unsupported expression return the full collection with a success status, and no probe can detect that. When a `Filter` expression is configured, compare the exported counts against the source.

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
| SecuredHeaders optional | Object | Custom HTTP headers added to every request, as a flat key/value JSON object (e.g. `{"User-Agent": "MyOrg/1.0"}`). Values are encrypted at rest — see [Configure Secured Options](../configuration-details/configure-secured-options.md). |
| Capabilities optional | Object | Forces server capabilities instead of relying on `GET /ServiceProviderConfig` auto-detection, as a flat key/value JSON object. Keys: `Patch`, `Filter`, `ChangePassword`. Values: `Supported` or `Unsupported`. A key absent from the object defaults to `Auto` (detected from the server). |

```json
"Capabilities": {
  "Patch": "Supported",
  "ChangePassword": "Unsupported"
}
```

Keys set to `Supported`/`Unsupported` use the forced value; any key left out of the object is auto-detected from `GET /ServiceProviderConfig`.

The OAuth2 token is refreshed automatically at 95% of `expires_in` or on a 401 response.

### EntityTypeMapping configuration

The `EntityTypeMapping` element controls how NIM maps resource types to SCIM endpoints.

| Attribute | Description |
| --- | --- |
| `ConnectionTable` | `<ConnectionIdentifier>_<endpoint>` (e.g. `MyConn_Users`). The endpoint segment is used as the HTTP path for all SCIM calls. |
| `C0` | Primary SCIM schema URN for this resource type. Required for any resource type other than `Users`/`Groups`; optional for `Users` and `Groups`, which default to the standard SCIM 2.0 URNs (`urn:ietf:params:scim:schemas:core:2.0:User` / `...:Group`). |

`C0` is mandatory for any custom resource type — there is no invented fallback. NIM will not guess a schema URN for an object class it doesn't recognize; fulfill fails fast, before any HTTP call, with "C0 (primary schema URN) is required on the EntityTypeMapping for resource type '`{objectClass}`'" when it's missing.

This is a schema-URN default, not a restriction on which resource types NIM can fulfill: any endpoint the server exposes can be targeted (`Roles`, `Entitlements`, a fully custom resource type) as long as `C0` is set. `Users`/`Groups` only get a free default because we registers exactly those two core schema URNs.

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

#### Object class vs primary schema URN

These control two independent things and aren't derived from each other:

| | Controls | Configured via |
| --- | --- | --- |
| Object class | Which REST endpoint NIM calls (`POST /<objectClass>`, `PATCH /<objectClass>/{id}`, …) | Export: the endpoint segment of `EntityTypeMapping.ConnectionTable`. Fulfill: `ResourceTypeMapping.DefaultObjectClass`. |
| Primary schema URN (`C0`) | What goes in `schemas[0]` of the JSON body, and which schema definition NIM uses to type/validate core (non-extension) attributes | `EntityTypeMapping.C0` |

A custom object class doesn't need a custom schema URN, and vice versa — a `Widgets` object class can point at any URN, matching or not.

A schema *extension* is a third, separate mechanism: it doesn't touch object class or `C0` at all. It adds attributes to an existing resource type via a second URN declared in `schemas[]`, namespaced per-attribute with `¤` in `ConnectionColumn`. For example, adding a custom HR extension to the standard `Users` object class — object class stays `Users`, `C0` stays unset (defaults to the core User URN):

```xml
<EntityTypeMapping Identifier="MyUser" ConnectionTable="MyConn_Users" Connector="MyConn">
  <Property Identifier="userName"       ConnectionColumn="userName" />
  <Property Identifier="employeeNumber" ConnectionColumn="urn:mycompany:params:scim:schemas:extension:hr:2.0:User¤employeeNumber" />
  <Property Identifier="costCenter"     ConnectionColumn="urn:mycompany:params:scim:schemas:extension:hr:2.0:User¤costCenter" />
</EntityTypeMapping>
```

### Fulfill capabilities

- **Create**: NIM sends `POST /<ResourceType>` with all mapped attributes, except `id`, `schemas`, and any `meta`/`meta:*` column (these are protocol/server-assigned attributes a client MUST NOT set). Null attributes are omitted from the body rather than sent as `null`. The `schemas` array includes the primary schema URN (from `EntityTypeMapping.C0`) plus any extension schema URNs derived from column names. An absent `id` in a 2xx response is treated as a silent failure and reported as an error. If the account is created but linking group membership fails, the order is still reported as executed (with a logged error) — the next synchronization reconciles the membership.
- **Update**: NIM reads `patch.supported` from `GET /ServiceProviderConfig` once per fulfill run (or the `Capabilities` override). When `true`, NIM sends `PATCH` operations for changed attributes only — one scoped `replace`/`remove` per leaf attribute, so changing one sub-attribute (e.g. `name:givenName`) never clears its siblings. Clearing a value (null/empty) sends a `remove` operation, not a `replace` with `null`. When `false`, NIM fetches the full current resource, merges the changed attributes (dropping cleared ones), and sends a full `PUT`.
- **Delete**: NIM sends `DELETE`. Some systems don't remove the resource; they interpret `DELETE` as deactivation and return a success status.
- **Group membership**: add and remove members via `PATCH /Groups/{id}` with `members` `add`/`remove` operations.
- **Multi-valued attributes**: NIM replaces the full multi-valued attribute on update.
- **Extension schema attributes**: column names using the `urn:<schema>¤<attribute>` notation are serialized under the correct extension schema URN in all create and update payloads.
- **Read-only/immutable/required warnings**: NIM logs (never blocks) a warning when a mapped attribute the order is about to write is marked `readOnly` (any write) or `immutable` (Modify only), or when a `required` attribute has no mapped value on Create.

## Authentication

At least one authentication method must be configured: a pre-acquired `OAuthToken`, OAuth2 client credentials (`ApplicationId` + `ApplicationKey`), OAuth2 password flow / HTTP Basic (`Login` + `Password`), or a non-empty `SecuredHeaders` (e.g. a static API-key header, for gateways that front SCIM without OAuth2/Basic). NIM rejects the connection configuration otherwise.

### Password reset

NIM sends a `PATCH` on `<Endpoint>/{id}` (`Endpoint` defaults to `Users`, or follows the resource type's `EntityTypeMapping.DefaultObjectClass` for a custom resource type) setting the `password` attribute. Before dispatching it, NIM checks `changePassword.supported` from `GET /ServiceProviderConfig`. When `false`, the reset request is skipped and a warning is logged instead.

Limitations:
- ChangePassword (requires the current password) isn't supported.
- UnlockAccount isn't supported.

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
