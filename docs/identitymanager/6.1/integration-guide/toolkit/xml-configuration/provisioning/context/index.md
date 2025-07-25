---
title: "Context"
description: "Context"
sidebar_position: 50
---

# Context

A context is the result of the combination of all identity-related entities, for example personal
data, contracts or positions, so that all dimension values contained in a given context are valid
for a given user on a given period of time.

Contexts define the resources' scopes of responsibility. They are used during provisioning to
simplify the application of the role model's rules based on dimensions.

[See more information about context generation](/docs/identitymanager/6.1/integration-guide/identity-management/joiners-movers-leavers/position-change/index.md).

## Properties

| Property                       | Details                                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Automatic default value: false | **Type** Boolean **Description** Specifies the automatic assignments.                                                                 |
| D0 optional                    | **Type** Int64 **Description** Dimension0 identifier, specifies the scope in which the assignment is restricted. Going from 0 to 127. |
