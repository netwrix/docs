---
title: "Profile"
description: "Profile"
sidebar_position: 60
---

# Profile

Profile defines a user profile linked to permissions in Usercube. Profiles work with Access Control
Rule and Profile Rule to describe who can do what.

## Examples

```

**<Profile Identifier="Administrator" DisplayName_L1="Administrator"/>**

```

## Properties

| Property                         | Details                                                                                                                                                                           |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional          | **Type** String **Description** Display name of the profile in language 1 (up to 16).                                                                                             |
| Identifier required              | **Type** String **Description** Profile identifier                                                                                                                                |
| IsComponent default value: false | **Type** Boolean **Description** If true, assess the profile as being a component profile. That means it can be used to build a new profile through the composite profile method. |
