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
| Publisher               | Usercube                |

When creating a connection to a database which is not handled by Usercube's packages, you'll need to
fill in the `ProviderDllName` and `ProviderClassFullName` properties of the
[SQL connector using the procedure given in the example](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/sql/index.md).
