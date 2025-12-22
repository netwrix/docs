---
title: "ProfileContext"
description: "ProfileContext"
sidebar_position: 70
---

# ProfileContext

ProfileContext contains the dimensions values used to define the connected users scope of
responsibility. They are stored as part of Assigned Profiles and are evaluated within Access Control
Rule filters.

## Examples

The following code example declares a new profile context based on a category and a dimension.
Profile contexts don't have identifiers, so to avoid recalculation of the ProfileContext Id property
on configuration deployment, the Id should be declared manually as below. To be valid, it must be
lower or equal to -2.

```

**<ProfileContext Id="-2" Category="IT Administration" D0="ORG0003" />**

```

## Properties

| Property                         | Details                                                                                                                        |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Category optional                | **Type** Int64 **Description** Category in which the assignment is restricted.                                                 |
| CompositeRole optional           | **Type** Int64 **Description** CompositeRole in which the assignment is restricted.                                            |
| D0 optional                      | **Type** Int64 **Description** Dimension 0 Id, specifies the scope in which the assignment is restricted. Going from 0 to 127. |
| IsAutomatic default value: false | **Type** Boolean **Description** Context automatically created by task Usercube-Set-InternalUserProfiles.                      |
| ResourceType optional            | **Type** Int64 **Description** ResourceType in which the assignment is restricted.                                             |
| SingleRole optional              | **Type** Int64 **Description** SingleRole in which the assignment is restricted.                                               |
