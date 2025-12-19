---
title: "ConnectionTable"
description: "ConnectionTable"
sidebar_position: 30
---

# ConnectionTable

A ConnectionTable, linked to its ConnectionColumns, represents a potential Export output.

## Properties

| Property             | Details                                                                             |
| -------------------- | ----------------------------------------------------------------------------------- |
| Connection required  | **Type** Int64 **Description** The Id of the Connection having the ConnectionTable. |
| DisplayName optional | **Type** String **Description** The name displayed for the ConnectionTable.         |
| Identifier required  | **Type** String **Description** The identifier of the ConnectionTable.              |
| Path optional        | **Type** String **Description** Path to the schema of the ConnectionTable.          |

## Child Element: Column

Connection columns correspond to the attributes existing in a specific external system and retrieved
through its schema. They are linked to a connection table which can hold several connection columns.
Connection columns provide an assistance to the input of properties in entity types to ensure that
the attribute names are valid.

### Properties

| Property                           | Details                                                                                                                                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName optional               | **Type** String **Description** Name displayed for the column.                                                                                                                                                             |
| ForeignColumn optional             | **Type** Int64 **Description** Defines the id of the foreign key if provided by the system.                                                                                                                                |
| Identifier required                | **Type** String **Description** Identifier of the column.                                                                                                                                                                  |
| IsMultivalued default value: false | **Type** Boolean **Description** Defines if the attribute is multi-valued.                                                                                                                                                 |
| KeyType default value: 0           | **Type** ConnectionColumnKeyType **Description** Defines the key type of the column. - 0: not a key - 1: primary key - 2: unique key                                                                                       |
| Path optional                      | **Type** String **Description** Allows to regroup columns based on a criteria. For example, for an LDAP system, the path is the value of the attribute objectClass.                                                        |
| ValueLength default value: 0       | **Type** Int32 **Description** Maximum length of the attribute value.                                                                                                                                                      |
| ValueType default value: 0         | **Type** ConnectionColumnValueType **Description** Defines the format of the attribute value. - 0: String - 1: Bytes - 2: Int32 - 3: Int64 - 4: DateTime - 5: Bool - 6: Guid - 7: Double - 8: Binary - 9: Byte - 10: Int16 |
