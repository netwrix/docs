---
title: "ResourceClassificationRule"
description: ""
sidebar_position: 11
---

In Identity Manager, this type of rule is used to classify the resources based on a C# expression.


## Examples
The following example declares a rule to classify the Active Directory accounts based on the dn values.
```xml
    <ResourceClassificationRule ResourceType="AD_Entry_TechnicalEntry" Policy="Default" ResourceTypeIdentificationConfidenceLevel="100"
        TargetExpression="C#:resource:return resource.dn.Contains(&quot;,CN=Roles,&quot;);" />
```


## Properties

|Property|Details|
|---|---|
| Policy required | **Type:** Int64 **Description:** Identifier of the policy that the rule is part of. |
| ResourceType required | **Type:** Int64 **Description:** Represents the resource type definition. |
| ResourceTypeIdentificationConfidenceLevel <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Defines the confidence level used to match the resources. |
| SourceMatchedConfidenceLevel <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Defines the confidence level used to match the sources. |
| TargetExpression optional | **Type:** String **Description:** Defines the C# expression used to classify the resources. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
