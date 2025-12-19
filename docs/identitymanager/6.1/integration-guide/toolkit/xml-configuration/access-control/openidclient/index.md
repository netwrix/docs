---
title: "OpenIdClient"
description: "OpenIdClient"
sidebar_position: 50
---

# OpenIdClient

OpenIdClient declares an Open Id Connect clientId/secret to call the Usercube API. All the
configurations need at least one clientId used by all the jobs on the agent side to call the server.

Only the hashed secret is kept in the configuration. The clear version is only known by the API
callers.

The secret must be strong enough to protect access to the API.

The good practice is generating a random secret, for example a 32 characters string, from a tool
like KeePass. Each clientId must have it's own secret. The tool
[Usercube-New-OpenIDSecret](/docs/identitymanager/6.1/integration-guide/executables/references/new-openidsecret/index.md)
can be used to generate secrets and their hashes.

Each clientId must have a scope of responsibility. The _Profile_ and _ContextId_ properties assign a
required Profile and an optional Profile Context.

## Examples

The following code declares a clientId with the Administrator profile.

```

**<OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" DisplayName_L1="ClientId for Jobs" Profile="Administrator" />**

```

The following code example declares a clientId with the RoleOfficerByCategory profile, restricted to
the profile context defined below. The ContextId property must reference the Id of an existing
Profile Context. Profile contexts don't have identifiers, so to avoid recalculation of the
ProfileContext's Id property on configuration deployment, the Id should be declared manually as
below. To be valid, it must be lower or equal to -2.

```

<OpenIdClient Identifier="RoleOfficerByCategory" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" DisplayName_L1="Role Officer by Category" Profile="RoleOfficerByCategory" ContextId="-2" /><ProfileContext Id="-2" Category="IT Administration" D0="ORG0003" />

```

## Properties

| Property                | Details                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Context optional        | **Type** Int64 **Description** Id of the ProfileContext used to further restrict the client scope of responsibility |
| DisplayName_L1 required | **Type** String **Description** Name that will be Displayed on the screen                                           |
| ExpirationDate optional | **Type** DateTime **Description** After this date, the client is no longer usable                                   |
| HashedSecret required   | **Type** String **Description** HashedPassword of client                                                            |
| Identifier required     | **Type** String **Description** Client login name and name                                                          |
| Profile required        | **Type** Int64 **Description** Profile linked with the client                                                       |
