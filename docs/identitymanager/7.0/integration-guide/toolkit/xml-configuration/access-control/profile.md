---
title: "Profile"
description: ""
sidebar_position: 6
---

Profile defines a user profile linked to permissions in Identity Manager. Profiles work with Access Control Rule and Profile Rule to describe who can do what.


## Examples
```xml
<Profile Identifier="Administrator" DisplayName_L1="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 optional | **Type:** String **Description:** Display name of the profile in language 1 (up to 16). |
| Identifier required | **Type:** String **Description:** Profile identifier |
| IsComponent <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** If true, assess the profile as being a component profile. That means it can be used to build a new profile through the composite profile method. |
