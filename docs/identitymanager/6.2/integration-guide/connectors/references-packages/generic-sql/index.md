---
title: "Generic SQL"
description: "Generic SQL"
sidebar_position: 120
---

# Generic SQL

Exports data from a SQL database.

| Package Characteristics | Value                   |
| ----------------------- | ----------------------- |
| Display Name            | Database/Generic SQL    |
| Identifier              | Usercube.SQL@0000001    |
| Export                  | Usercube-Export-Sql.dll |
| Fulfill                 | NONE                    |
| Has Incremental Mode    | False                   |
| Publisher               | Identity Manager        |

When creating a connection to a database which is not handled by Identity Manager's packages, you'll
need to fill in the `ProviderDllName` and `ProviderClassFullName` properties of the
[Sql](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/sql/index.md) connector using the procedure given in the
example.
