---
title: "GroupID APIs"
description: "Learn how the GroupID REST APIs let you integrate applications, create groups, and run lifecycle operations over HTTP."
keywords:
  - GroupID API
  - REST API
  - HTTP methods
  - JSON response
  - Active Directory identity store
sidebar_position: 90
unlisted: true
---

# GroupID APIs

GroupID APIs enable developers to quickly integrate their applications with GroupID
to "perform actions" such as group creation and lifecycle operations by using a relevant
GroupID API.

You can perform various GroupID functions by using these APIs. The response can be
returned in JSON format.

These URLs represent various resources — any information or content accessed at that location, which
can be returned in JSON format. Often, resources have one or more methods that can be performed on
them over HTTP, such as `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. The action represented by the
first and last of these is clear, but `POST` and `PATCH` have specific meanings. How they are
defined is confusing, but the general rule is to use `POST` to create resources and `PUT` and `PATCH` to
update resources.

:::note
All the APIs documented in the API section are for an Active Directory-based identity store.
In each API, the **Sample Request Syntax** and the **Sample Response Syntax** sections have
attributes that are supported in an Active Directory-based identity store.

:::

See Also

- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
