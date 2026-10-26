---
title: "APIs"
description: "Directory Manager (formerly GroupID) APIs"
sidebar_position: 100
---

# Directory Manager APIs

Directory Manager APIs enable developers to quickly integrate their applications with Directory
Manager to "perform actions" such as group creation and lifecycle operations using a relevant
Directory Manager API.

Various Directory Manager functions can be performed using these APIs. The response can be returned
in JSON format.

These URLs represent various resources — any information or content accessed at that location, which
can be returned in JSON format. Often resources have one or more methods that can be performed on
them over HTTP, like `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. The action represented by the
first and last of these is clear, but `POST` and `PATCH` have specific meanings. How they are
defined is confusing, but the general rule is: use `POST` to create resources, `PUT` and `PATCH` to
update resources.

:::note
All the APIs documented in the API section are for an Active Directory based identity store.
In each API, the **Sample Request Syntax** and the **Sample Response Syntax** sections have
attributes that are supported in an Active Directory based identity store.

:::
