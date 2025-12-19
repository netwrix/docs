---
title: "SharePointResourceTypeMapping"
description: "SharePointResourceTypeMapping"
sidebar_position: 90
---

# SharePointResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<SharePointResourceTypeMapping Identifier="SharePoint_Entity_NominativeUser" Connection="SharePointExportFulfillment">  <Property Property="Name" IsDNProperty="true" />  <Property Property="Collection" IsParentProperty="true" /></SharePointResourceTypeMapping>

```
