---
title: "API Reference"
description: "Introduction to the Change Tracker Hub API Reference"
sidebar_position: 1
---

The Change Tracker Hub API Reference documents every REST API endpoint that the Change Tracker Hub (the central management server) exposes. This reference is generated from the Change Tracker Hub's OpenAPI 3.0 specification, which reflects the API for version 8.1.

Use this reference to:

- Explore available endpoints and their parameters
- Review request and response schemas
- Try endpoints interactively from your browser
- Download the OpenAPI spec for use in external tools

## How this reference is organized

The reference groups endpoints by tag (functional area). Each endpoint page includes the HTTP method and path, parameters (required and optional), request body schema, response schemas, and a list of possible status codes.

## Authentication

All endpoints require authentication. Before you can send requests — whether from the interactive explorer or your own code — you need a valid session.

See [Authentication](/docs/changetracker/8.1/api/authentication.md) for a PowerShell example that authenticates to the Hub and stores the session for subsequent calls.

## Use the interactive explorer

Each endpoint page includes a built-in API explorer. To use it:

1. Obtain a session token by calling `POST /auth/credentials`. See [Authentication](/docs/changetracker/8.1/api/authentication.md).
2. On any endpoint page, scroll to the **Auth** section in the right-hand panel that lists request details.
3. Enter your token in the **Bearer Token** field. The explorer applies the token automatically to all requests on the page.
4. Fill in the required parameters and click **Send API Request**.

:::tip
Before sending a request, you can edit the server URL directly in the explorer to point to your Change Tracker Hub instance.
:::

## Download the OpenAPI specification

You can download the raw OpenAPI 3.0 spec (YAML) and import it into API clients, code generators, or testing tools.

[Download the OpenAPI spec](/openapi/changetracker-hub-8.1.yaml)
