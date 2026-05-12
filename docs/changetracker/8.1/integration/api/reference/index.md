---
title: "API Reference"
description: "Introduction to the Change Tracker Hub API Reference"
sidebar_position: 1
---

The Change Tracker Hub API Reference documents every REST API endpoint that the Change Tracker Hub (the central management server) exposes. The Hub generates this reference directly from its OpenAPI 3.0 specification, which reflects the API for version 8.1.

Use this reference to:

- Explore available endpoints and their parameters
- Review request and response schemas
- Try endpoints interactively from your browser
- Download the OpenAPI spec for use in external tools

## How this reference is organized

The reference groups endpoints by tag (functional area). Each endpoint page includes the HTTP method and path, parameters (required and optional), request body schema, response schemas, and a list of possible status codes.

## Authentication

All endpoints require authentication. Before you can send requests — whether from the interactive explorer or your own code — you need a valid session.

See [Authentication](/docs/changetracker/8.1/integration/api/authentication.md) for a PowerShell example that authenticates to the Hub and stores the session for subsequent calls.

## Use the interactive explorer

Each endpoint page includes a built-in API explorer. To use it:

1. Obtain a session token by calling `POST /auth/credentials`. See [Authentication](/docs/changetracker/8.1/integration/api/authentication.md).
2. Click **Authorize** at the top of any endpoint page.
3. Enter your token in the **Bearer** field and click **Authorize**.
4. Open an endpoint, fill in the required parameters, and click **Send API Request**.

:::tip
Before sending a request, you can edit the server URL directly in the explorer to point to your Change Tracker Hub instance.
:::

## Download the OpenAPI specification

The raw OpenAPI 3.0 spec (YAML) is available for download. You can import it into API clients, code generators, or testing tools.

[Download the OpenAPI spec](/openapi/changetracker-hub-8.1.yaml)
