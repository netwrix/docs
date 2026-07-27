---
title: "ResourceCorrelationRule"
description: ""
sidebar_position: 12
---

A correlation rule is used to [correlate](/docs/identitymanager/current/introduction-guide/overview/entitlement-management) the resources, i.e. link resources to their owners.


## Examples
#### Correlation based on unchanged attributes

The following example creates an Active Directory correlation rule based on the mail property:

```xml
    <ResourceCorrelationRule ResourceType="AD_Entry_To_Directory_UserRecord" TargetBinding="Directory_UserRecord:Mail" Policy="Default" SourceMatchedConfidenceLevel="100" SourceBinding="AD_Entry:mail" />
```

#### Correlation based on attributes changed by a function

The following example copies the previous example (based on unchanged attributes), but using a predefined function (`ToLower`) in source and target bindings' expressions, to compare the email attributes:

```xml
<ResourceCorrelationRule ResourceType="AD_Entry_To_Directory_UserRecord" TargetBinding="Mail" TargetExpression="ToLower" Policy="Default" SourceMatchedConfidenceLevel="100" SourceBinding="mail" SourceExpression="ToLower" />
```

:::note
A [list of predefined functions](/docs/identitymanager/current/integration-guide/toolkit/expressions/predefined-functions) is available.
:::

#### Correlation based on attributes within a C# expression

The following example creates an Active Directory correlation rule based on the comparison between the AD's simplified display name and an expression from the external system:

```xml
<ResourceCorrelationRule ResourceType="AD_Entry_NominativeUser" TargetBinding="displayName" TargetExpression="Simplify" Policy="Default" SourceMatchedConfidenceLevel="80" SourceExpression="C#:person:return (person.LastName + person.FirstName).Simplify();" />
```

This example also uses a confidence rate equals to 80%.


## Properties

|Property|Details|
|---|---|
| Policy required | **Type:** Int64 **Description:** Identifier of the policy that the rule is part of. |
| ResourceType required | **Type:** Int64 **Description:** Identifier of the resource type. |
| SourceBinding optional | **Type:** Int64 **Description:** Binding property from the source system. |
| SourceExpression optional | **Type:** String **Description:** Binding expression based on properties from the source system. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
| SourceMatchedConfidenceLevel <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Defines the correlation confidence rate of this rule. If the value is less than 100, we process a manual review step to confirm the choice. |
| TargetBinding optional | **Type:** Int64 **Description:** Binding property from the target system. |
| TargetExpression optional | **Type:** String **Description:** Binding expression based on properties from the target system. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
