---
title: "API"
description: "API"
sidebar_position: 170
---

# API

Agent and server expose a REST API.

## OpenAPI Definition

This feature is optional and must be activated by the
[Swagger settings section](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/general-purpose/index.md)

The page `[Usercube application's URL]/swagger` can be used to explore and test the API.

This page is built by the [Swagger UI tool](https://swagger.io/tools/swagger-ui/) from the Usercube
[OpenAPI](https://swagger.io/specification/) definition.

![Usercube server swagger page](/images/identitymanager/6.1/integration-guide/api/swagger.webp)

A function can have several versions. This is why the API description is split into several OpenAPI
definition files.

Each definition file is accessible in JSON format on URL
`[Usercube application's URL]/swagger/{version}/swagger.json`.

The Swagger UI page is accessible anonymously but each call from this page to the API must have an
authenticated context. To do so, you only need to be logged to the application from the same browser
instance (Authentication is carried by a cookie).
