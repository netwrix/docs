---
title: "EPP REST API Specification"
description: "Where to find the complete endpoint reference of the EPP REST API, which each Endpoint Protector Server includes."
sidebar_position: 40
---

# EPP REST API Specification

Starting with version 2611, each Endpoint Protector Server includes the complete reference of its REST API. The reference describes every endpoint with its parameters, filters, and responses. It matches the version of your server and includes the changelog of the API.

Upgrade your Endpoint Protector Server to version 2611 or later to use all the API capabilities. Earlier versions offer a smaller API, without the full reference on the server.

Open the reference in a browser:

```
https://<epp-server>/api/v1/doc
```

For tools and code generators, use the OpenAPI document at `https://<epp-server>/api/v1/doc.json`.

In the reference, you can:

- Browse the endpoints by area, such as Device Control, Content Aware Protection, eDiscovery, Enforced Encryption, and System Administration.
- Check the parameters and responses of each endpoint.
- Send test requests with the access token of an API client.
- Read the changelog, which maps the deprecated unversioned `/api/...` paths to their `/api/v1` paths.

For an overview of the API, authentication, and conventions, see [EPP REST API](/docs/endpointprotector/admin/epp_rest_api/eppapi.md). To create the API clients that your integrations use, see [API Clients](/docs/endpointprotector/admin/systemconfiguration/apiclients.md).
