---
title: "EntityPropertyExpression"
description: ""
sidebar_position: 5
---

An entity property expression is a property computed from a binding and/or [C#](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions) or [literal](/docs/identitymanager/current/integration-guide/toolkit/expressions#literal-expression) expressions.


## Examples
The following example computes the record display name.
```xml
<EntityPropertyExpression Identifier="Directory_UserRecord_InternalDisplayName" Expression="C#:person:return person.LastName + &quot; &quot; + person.FirstName;"
    EntityType="Directory_UserRecord" Property="InternalDisplayName" />
```


## Properties

|Property|Details|
|---|---|
| Binding optional | **Type:** Int64 **Description:** References the binding used to compute the result. |
| EntityType required | **Type:** Int64 **Description:** Identifier of the referenced entity type |
| Expression optional | **Type:** String **Description:** References the C# or literal expression used to compute the result. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
| Identifier required | **Type:** String **Description:** Unique identifier of the expression. |
| Priority <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Specifies the execution priority. |
| Property required | **Type:** Int64 **Description:** Identifier of the referenced entity property |
| PropertyCriteria optional | **Type:** Int64 **Description:** References the property criteria used to compute navigation properties. |
