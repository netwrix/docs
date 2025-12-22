---
title: "GroupID APIs"
description: "GroupID APIs"
sidebar_position: 90
---

# GroupID APIs

GroupID APIs enable developers to quickly intergrate their applications with GroupID to "perform
actions" such as group creation and lifecycle operations using a relevant GroupID API.

Various GroupID functions can be performed using these APIs. The response can be returned in JSON
format.

These URLs represent various resources — any information or content accessed at that location, which
can be returned in JSON format. Often resources have one or more methods that can be performed on
them over HTTP, like `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. The action represented by the
first and last of these is clear, but `POST` and `PATCH` have specific meanings. How they are
defined is confusing, but the general rule is: use `POST` to create resources, `PUT` and `PATCH` to
update resources.

NOTE: All the APIs documented in the API section are for an Active Directory based identity store.
In each API, the **Sample Request Syntax** and the **Sample Response Syntax** sections have
attributes that are supported in an Active Directory based identity store.

See Also

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
