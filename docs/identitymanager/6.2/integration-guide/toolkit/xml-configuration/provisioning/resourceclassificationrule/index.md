---
title: "Resource Classification Rule"
description: "Resource Classification Rule"
sidebar_position: 110
---

# Resource Classification Rule

In Identity Manager, this type of rule is used to classify the resources based on a C# expression.

## Examples

The following example declares a rule to classify the Active Directory accounts based on the dn
values.

```

    <ResourceClassificationRule ResourceType="AD_Entry_TechnicalEntry" Policy="Default" ResourceTypeIdentificationConfidenceLevel="100"
        TargetExpression="C#:resource:return resource.dn.Contains(",CN=Roles,");" />

```

## Properties

| Property                                                   | Details                                                                                                                                                                          |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Policy required                                            | **Type** Int64 **Description** Identifier of the policy that the rule is part of.                                                                                                |
| ResourceType required                                      | **Type** Int64 **Description** Represents the resource type definition.                                                                                                          |
| ResourceTypeIdentificationConfidenceLevel default value: 0 | **Type** Int32 **Description** Defines the confidence level used to match the resources.                                                                                         |
| SourceMatchedConfidenceLevel default value: false          | **Type** Boolean **Description** Defines the confidence level used to match the sources.                                                                                         |
| TargetExpression optional                                  | **Type** String **Description** Defines the C# expression used to classify the resources. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information. |
