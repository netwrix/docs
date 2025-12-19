---
title: "AccessControlPropertyGroup"
description: "AccessControlPropertyGroup"
sidebar_position: 20
---

# AccessControlPropertyGroup

AccessControlPropertyGroup is used to hide properties based on the connected users profiles and
scopes of responsibility. It allows applying visibility rules on groups of entity properties.

The AccessControlPropertyGroup on itself is only a marker. The groups are assigned to properties by
using Access Control Entity Type and Access Control Entity Property.

A group can contain properties from several entity types by adding as many AccessControlEntityType
as needed.

An Access Control Rule can then define the profiles and the scopes of responsibility allowed to view
the properties in the two groups.

When an API call is performed on a resource, the values of the properties that belong to
AccessControlPropertyGroup will not be returned unless the calling user has the right permissions.

## Examples

The following example shows two property groups. The first one for HR sensitive properties like the
start and exit dates. The other one contains administration properties like the login or the
compliance grace period.

```

<AccessControlPropertyGroup Identifier="Directory_User_Sensitive" DisplayName_L1="User - Sensitive Properties" /><AccessControlPropertyGroup Identifier="Directory_User_Technical" DisplayName_L1="User - Technical Properties" /><AccessControlEntityType Identifier="Directory_UserRecord">  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="EmployeeType" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="VIP" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="StartDate" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="EndDate" />  <Property VisibilityGroup="Directory_User_Technical" Identifier="Login" />  <Property VisibilityGroup="Directory_User_Technical" Identifier="HasUnusedAccess" />  <Property VisibilityGroup="Directory_User_Technical" Identifier="GracePeriod" /></AccessControlEntityType>

```

Here, the Administrator profile is given access to all the properties. The Manager profile can view
all the HR sensitive fields for people in his department.

```

<AccessControlRule Profile="Administrator" EntityType="Directory_User" Identifier="Administrator_Resources_User" DisplayName_L1="Administrator_Resources_User">  <Entry Permission="/Custom/Resources/Directory_User/View" FullAccessProperties="true" CanExecute="true" />  <Entry Permission="/" PropertyGroup="Directory_User_Sensitive" />  <Entry Permission="/" PropertyGroup="Directory_User_Technical" /></AccessControlRule><AccessControlRule Profile="Manager" EntityType="Directory_User" Identifier="Manager_Resources_User" DisplayName_L1="Manager_Resources_User">  <Filter Binding="MainRecord.Department.Id" Dimension="Department" />  <Entry Permission="/" PropertyGroup="Directory_User_Sensitive" /></AccessControlRule>

```

## Properties

| Property                | Details                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the group in language 1 (up to 16). |
| Identifier required     | **Type** String **Description** Identifier of the group.                            |
