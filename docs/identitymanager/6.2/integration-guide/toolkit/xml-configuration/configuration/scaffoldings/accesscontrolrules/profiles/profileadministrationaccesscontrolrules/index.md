---
title: "Profile Administration Access Control Rules"
description: "Profile Administration Access Control Rules"
sidebar_position: 30
---

# Profile Administration Access Control Rules

Gives to a given profile the rights to create, update and delete profiles.

Profiles are listed on the **Profiles** screen, from **Settings** in the **Configuration** section.

![Settings](/images/identitymanager/home_settings_v523.webp)

![Profiles](/images/identitymanager/AccessControl_Profiles_V603.webp)

See more details on profiles' APIs.

## Examples

The following example gives to the `Administrator` profile the rights to create, update and delete
profiles.

```

**<ProfileAdministrationAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Profile_AccessControl_Profile" DisplayName_L1="Administrator - Profile Configuration" DisplayName_L2="Administrator - Configuration des profils" EntityType="Profile" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessControl/Profile/Create" />  <Entry CanExecute="true" Permission="/AccessControl/Profile/Delete" />  <Entry CanExecute="true" Permission="/AccessControl/Profile/Update" /></AccessControlRule>

```
