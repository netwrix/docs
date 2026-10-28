---
title: "API Reference"
description: "Browse every documented Netwrix Privilege Secure for Discovery REST API endpoint, with parameters, request and response schemas, and status codes."
sidebar_position: 1
---

The Netwrix Privilege Secure for Discovery API Reference documents the REST API endpoints that customers use to automate the product. The reference comes from the product's OpenAPI 3.0 specification.

Use this reference to:

- Look up the endpoints, parameters, and required roles
- Review request and response schemas
- Check the status codes and error bodies each endpoint can return
- Download the OpenAPI specification for use in external tools

## How this reference is organized

The reference groups endpoints by tag, which is a functional area such as Computers, Users, or Configuration. Each endpoint page shows the HTTP method and path, the required role, parameters, the request body schema, response schemas, and the possible status codes.

## Authenticate

Every endpoint except the health checks needs an access token. Get a token by calling `POST /login` with a user name and password, or `POST /api-keys/auth` with an API key. Then send the token on each request:

```text
Authorization: Bearer <access-token>
```

See [Authenticate with an API key](/docs/privilegesecurediscovery/integrations/api/authenticate-with-an-api-key.md) for a worked example. The administrator sets the token lifetime, and the API has no refresh endpoint, so sign in again when the token expires.

## Understand roles

Each endpoint states the role that it requires: `superadmin`, `admin`, or `user`. Administrator endpoints accept `superadmin` and `admin`. User endpoints accept all three roles.

## Query lists

Many list endpoints accept paging, sorting, and the `advanced` query. See [Advanced API reference](/docs/privilegesecurediscovery/integrations/api/advanced-api-reference.md) for the query syntax.

## Use the reference with scripts and coding assistants

The OpenAPI specification is the complete, machine-readable form of this reference. Give it to a coding assistant or a code generator so that the code you generate uses the real endpoints, parameters, and schemas.

- **Specification:** `/openapi/privilegesecurediscovery.yaml` on this site. It's OpenAPI 3.0.3 in YAML.
- **Server URL:** `https://<server-fqdn>/api/v1`, where `<server-fqdn>` is the fully qualified domain name of your Netwrix Privilege Secure for Discovery server.
- **Authentication:** send `Authorization: Bearer <access-token>` on every request except the health checks.
- **Operation IDs:** each operation has a unique `operationId`, such as `listComputers`, that you can use as a function name.
- **Roles:** each operation description states the required role.
- **Responses:** each operation lists its error responses. Error bodies come in four shapes, so check the status code before you parse the body.

## Download the OpenAPI specification

You can download the OpenAPI 3.0 specification (YAML) and import it into API clients, code generators, or testing tools.

[Download the OpenAPI specification](/openapi/privilegesecurediscovery.yaml)
