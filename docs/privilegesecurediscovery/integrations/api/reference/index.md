---
title: "API Reference"
description: "Browse every documented Netwrix Privilege Secure for Discovery REST API endpoint, with parameters, request and response schemas, and status codes."
sidebar_position: 1
---

The Netwrix Privilege Secure for Discovery API Reference documents the REST API endpoints that customers use to automate the product. The reference comes from the product's OpenAPI 3.0 specification for release 26.09.1.

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

See [Authenticate with an API key](/docs/privilegesecurediscovery/integrations/api/authenticate-with-an-api-key.md) for a worked example. The token lifetime is set by the administrator, and the API has no refresh endpoint, so sign in again when the token expires.

## Understand roles

Each endpoint states the role that it requires: `superadmin`, `admin`, or `user`. Administrator endpoints accept `superadmin` and `admin`. User endpoints accept all three roles.

## Query lists

Many list endpoints accept paging, sorting, and the `advanced` query. See [Advanced API reference](/docs/privilegesecurediscovery/integrations/api/advanced-api-reference.md) for the query syntax.

## Download the OpenAPI specification

You can download the OpenAPI 3.0 specification (YAML) and import it into API clients, code generators, or testing tools.

[Download the OpenAPI specification](/openapi/privilegesecurediscovery-26.09.1.yaml)
