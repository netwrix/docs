---
title: "ProfileAdministrationAccessControlRules"
description: "ProfileAdministrationAccessControlRules"
sidebar_position: 30
---

# ProfileAdministrationAccessControlRules

Gives to a given profile the rights to create, update and delete profiles.

Profiles are listed on the **Profiles** screen, from **Settings** in the **Configuration** section.

![Settings](/images/identitymanager/6.1/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

![Profiles](/images/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/profiles/profileadministrationaccesscontrolrules/accesscontrol_profiles_v603.webp)

[See more details on profiles' APIs](/docs/identitymanager/6.1/integration-guide/api/server/accesscontrol/index.md).

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
