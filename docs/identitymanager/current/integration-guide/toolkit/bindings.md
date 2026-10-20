---
title: "Bindings"
description: "Bindings"
sidebar_position: 30
---

# Bindings

Some configuration's XML attribute must respect the Identity Manager's binding syntax. This syntax allow to specify a _path_ in the entity model.

Binding expression starts by the starting entity type name followed by the `:` character and a sequence of property references separated by a `.` character.

```
type:propertyA.propertyB.propertyC
```

For exemple, to bind to the manager's first name of a user, the binding expression will be:

```
User:Manager.FirstName
```

In the case of type inheritance, we must specify the type owning the property.

```
AssignedResourceType:Owner.User:FirstName
```

In this sample, the property `Owner` of `AssignedResourceType` targets the base type `Resource`. Type `User` inherits of `Resource` and owns the `FirstName` property. So, the `FirstName` section of the binding expression must be prefixed by `User:`.
