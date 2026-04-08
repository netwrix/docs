---
title: "ProfileAdministrationAccessControlRules"
description: "Gives to a given profile the rights to create, update and delete profiles."
sidebar_position: 3
---

Gives to a given profile the rights to create, update and delete profiles.

Profiles are listed on the **Profiles** screen, from **Settings** in the **Configuration** section.

![Settings](/images/identitymanager/buttons/Home_settings_V523.webp)

![Profiles](/images/identitymanager/integration-guide/toolkit/xml-configuration/scaffoldings/AccessControl_Profiles_V603.webp)

[See more details on profiles' APIs](/docs/identitymanager/current/integration-guide/api/server/accesscontrol).



## Examples
The following example gives to the `Administrator` profile the rights to create, update and delete profiles.

```xml
  <ProfileAdministrationAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Profile_AccessControl_Profile" DisplayName_L1="Administrator - Profile Configuration" DisplayName_L2="Administrator - Configuration des profils" EntityType="Profile" Profile="Administrator">
  <Entry CanExecute="true" Permission="/AccessControl/Profile/Create" />
  <Entry CanExecute="true" Permission="/AccessControl/Profile/Delete" />
  <Entry CanExecute="true" Permission="/AccessControl/Profile/Update" />
</AccessControlRule>

```