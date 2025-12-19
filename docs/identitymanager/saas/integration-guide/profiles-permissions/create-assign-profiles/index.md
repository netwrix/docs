---
title: "Create and Assign Profiles"
description: "Create and Assign Profiles"
sidebar_position: 20
---

# Create and Assign Profiles

This guide shows how to create in the XML configuration profiles and the appropriate rules to assign
these profiles automatically.

## Create a Profile

Here is the xml configuration to create a profile in Identity Manager. See the
[Profile](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/access-control/profile/index.md) topic for additional
information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Profile Identifier="User" DisplayName_L1="Basic User" DisplayName_L2="Utilisateur de base" />
```

## Automatically Assign Profiles

To automatically assign profiles it is necessary to manipulate the ProfileRuleContext and
ProfileRule. See the
[Access Control Rule](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/index.md)
and
[Profile Rule Context](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/access-control/profilerulecontext/index.md)
topics for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ProfileRuleContext ResourceType="AD_Entry_NominativeUser" SubBinding="Directory_User:Records" IsAppliedToRoot="false">  <ProfileRule Profile="User" /></ProfileRuleContext>
```

## Configure the Set InternalUserProfiles Task

The Identity Manager-Set-InternalUserProfiles task is mandatory to automatically assign the profile.
The task can be selected from the Job provisioning list. See the
[Set Internal User Profiles Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/server/setinternaluserprofilestask/index.md)
topic for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<SetInternalUserProfilesTask Identifier="SetInternalUserProfiles" DisplayName_L1="Set Internal User Profiles" >    <TaskEntityType EntityType="Referentiel_User"/>    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  </SetInternalUserProfilesTask>
```

Here the TaskEntityType is the reference to connect to Identity Manager and the ResourceType is the
same as in the ProfileRuleContext. Once this configuration is done you can add the task in the job
which provisions the Connector AD.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Job Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning" DisplayName_L2="AD - Provisioning" Agent="Local">    ...
<SetInternalUserProfilesTask Identifier="SetInternalUserProfiles" DisplayName_L1="Set Internal User Profiles" >       <TaskEntityType EntityType="Referentiel_User"/>       <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>    </SetInternalUserProfilesTask>  </Job>
```
