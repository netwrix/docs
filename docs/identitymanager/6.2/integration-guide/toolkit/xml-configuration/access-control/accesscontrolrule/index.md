---
title: "Access Control Rule"
description: "Access Control Rule"
sidebar_position: 30
---

# Access Control Rule

An access control rule gives to a profile a set of permissions on a data set represented by an
entity type.

The rule contains filters to restrict its application, and entries to grant or deny the permissions.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Profile="Administrator" EntityType="Resource" Identifier="Administrator_Resource" DisplayName_L1="Administrator_Resource">  <Entry Permission="/Connectors/SynchronizeSession" CanExecute="true" />  <Entry Permission="/Connectors/ProvisioningSession" CanExecute="true" /></AccessControlRule><AccessControlRule Profile="Administrator" EntityType="Connector" Identifier="Administrator_Connector" DisplayName_L1="Administrator_Connector">  <Entry Permission="/Connectors/Connector/Query" CanExecute="true" />  <Entry Permission="/" /></AccessControlRule><AccessControlRule Profile="Administrator" EntityType="WorkflowInstance" Identifier="Administrator_WorkflowInstance" DisplayName_L1="Administrator_WorkflowInstance">  <Entry Permission="/Workflows/WorkflowInstanceData/Query" CanExecute="true" />  <Entry Permission="/Workflows/WorkflowInstance/Query" CanExecute="true" />  <Entry Permission="/" /></AccessControlRule>

```

## Properties

| Property                | Type   | Description                                                                                                                                                                                                                                                                                                            |
| ----------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required | String | Display name of the access control rule in language 1 (up to 16).                                                                                                                                                                                                                                                      |
| EntityType required     | Int64  | Identifier of the entity type that forms the data set on which the rule's permissions are applied. **NOTE:** The entity type can be part of the custom entity model, e.g. `Directory_User` or `AD_Entry`, or part of the built-in entity model, e.g. `AssignedSingleRole` or `Workflows` or `AccessCertificationItem`. |
| Identifier required     | String | Unique identifier of the access control.                                                                                                                                                                                                                                                                               |
| Profile required        | Int64  | The id of the profile to which the permissions will be given.                                                                                                                                                                                                                                                          |

## Child Element: Entry

AccessControlEntry grants or denies a permission to a user. Access Control Entries are part of an
Access Control Rule that defines the users scope of responsibility in the Identity Manager
UI/Workflows.

:::note
If your configuration contains an access control entry with `Permission="/"` and
`CanExecute="true"` then an error will occur during the configuration deployment, as a profile
should not possess such a big permission.
:::


### Properties

| Property                                  | Type    | Description                                                                                                                |
| ----------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| CanExecute default value: false           | Boolean | Gives permission to execute permission.                                                                                    |
| FullAccessProperties default value: false | Boolean | Gives full access to all properties.                                                                                       |
| IsPostCondition default value: true       | Boolean | If true, the rule is evaluated on the entity after modification.                                                           |
| IsPreCondition default value: true        | Boolean | If true, the rule is evaluated on the entity before modification.                                                          |
| Notify default value: true                | Boolean | True to send notification emails to the rule's recipient profile when executing tasks related to the specified Permission. |
| Permission required                       | Int64   | Linked Permission.                                                                                                         |
| Priority default value: 0                 | Int32   | When a user has several contexts giving him access to the same right, the one with the highest priority is elected.        |
| PropertyGroup optional                    | Int64   | Gives the right to read for the PropertyGroup.                                                                             |

## Child Element: Filter

An access control filter restricts the application of the access control rule to a given subset of
the data set. The rule will give the specified permissions to the profile only on the parts of the
rule's data set for which the filter's condition is met.

:::tip
Remember, the ViewHistory permission (/Custom/Resources/Entity_Type/ViewHistory) does not work if
a filter is added.
:::


Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Profile="Manager" EntityType="Directory_User" Identifier="Administrator_LDAP_Entry_History__" DisplayName_L1="Administrator_LDAP_Entry_History_">
    <Entry Permission="/Custom/Resources/Directory_User/ViewHistory" CanExecute="true" />
  </AccessControlRule>
```

This condition is actually a comparison expression between two elements:

- The value of a property which is originating from an entity targeted by the rule
- A comparison value that can be constant, or originating from the user profile

![Access Control Filter Schema](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/accesscontrolfilter_schema.webp)

### Examples

**Filter on a constant value**

The following example gives to the `Administrator` profile certain permissions on user data, but
only concerning users working in the marketing department.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Profile="Administrator" EntityType="Directory_User" Identifier="Administrator_Directory_User_Marketing" DisplayName_L1="Administrator_Directory_User_Marketing">
  <Filter Binding="MainOrganization.Code" Value="Marketing" />
  <Entry Permission="..." ... />  ...
</AccessControlRule>

```

Technically speaking, the filter here says that the rule's permissions apply only on users from
`Directory_User` whose `Code` of `MainOrganization` is `Marketing`.

**Filter on the account of the current user**

The following example gives to the `Manager` profile certain permissions on user data, but only
concerning users from the team managed by the current user.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Profile="Manager" EntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Managers" DisplayName_L1="Directory_UserRecord_Managers">
  <Filter Binding="Manager.Id" CurrentUser="true" />
  <Entry Permission="..." ... />  ...
</AccessControlRule>

```

Technically speaking, the filter here says that the rule's permissions apply only on the users'
records from `Directory_UserRecord` whose `Id` of `Manager` is the identifier of the account used by
the current user to authenticate to Identity Manager.

Filter on the context(s) of the assigned profile(s) of the current user

The following example gives to the `Manager` profile certain permissions on user data, but only
concerning users working in the same department as the current user.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Profile="Manager" EntityType="Directory_User" Identifier="Manager_MainDepartment_Directory_UserRecord" DisplayName_L1="Administrator_MainDepartment_Directory_UserRecord">
  <Filter Binding="MainDepartment.Id" Dimension="Department" />
  <Entry Permission="..." ... />  ...
</AccessControlRule><Dimension Identifier="Department" DisplayName_L1="Department" EntityType="Directory_Department" ColumnMapping="3" />

```

Technically speaking, the filter here says that the rule's permissions apply only on the users from
`Directory_User` whose `Id` of `MainDepartment` is the same identifier as the value set for the
`Department` dimension of the current user, in at least one of their assigned profiles.

For example, Timothy Callahan is here assigned the `Manager` profile with the `Department` dimension
set to `Treasury/Chief Economist`.

![Matching Assigned Profile](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/assignedprofile_example_v603.webp)

Thus, with the previous access control rule, Timothy Callahan will get certain permissions on users
whose main department is `Treasury/Chief Economist`.

The following example gives to the `RoleOfficerByCategory` profile certain permissions on assigned
single roles, but only concerning the roles of a category assigned to the current user.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Identifier="RoleOfficerByCategory_AssignedSingleRole_ReviewRoles" DisplayName_L1="Role Officer - Review Roles" EntityType="AssignedSingleRole" Profile="RoleOfficerByCategory">
  <Filter Binding="SingleRole.Category.Id" Category="true" />
  <Entry Permission="..." ... />  ...
</AccessControlRule>

```

Technically speaking, the filter here says that the rule's permissions apply only on the assigned
single roles whose `Id` of the `Category` of the `SingleRole` is the same identifier as the value
set for the `Category` property of the current user, in at least one of their assigned profiles.

**Multiple filters**

The following example gives to the `RoleOfficerByCategory` profile the permission to review the
roles of users from `Directory_User`, but only the roles of a category assigned to the current user,
and whose assignment is stated as pending the first approval out of 1, 2 or 3.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Identifier="RoleOfficerByCategory_AssignedSingleRole_ReviewRoles_Directory_User_8" DisplayName_L1="Role Officer - Review Roles" EntityType="AssignedSingleRole" Profile="RoleOfficerByCategory">
  <Filter Binding="Role.Category.Id" Category="true" />  <Filter Binding="WorkflowState" Value="8" />
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="RoleOfficerByCategory_AssignedSingleRole_ReviewRoles_Directory_User_9" DisplayName_L1="Role Officer - Review Roles" EntityType="AssignedSingleRole" Profile="RoleOfficerByCategory">
  <Filter Binding="Role.Category.Id" Category="true" />  <Filter Binding="WorkflowState" Value="9" />
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="RoleOfficerByCategory_AssignedSingleRole_ReviewRoles_Directory_User_11" DisplayName_L1="Role Officer - Review Roles" EntityType="AssignedSingleRole" Profile="RoleOfficerByCategory">
  <Filter Binding="Role.Category.Id" Category="true" />  <Filter Binding="WorkflowState" Value="11" />
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule>
```

Technically speaking, the filter here says that the rule's permissions apply only on the assigned
single roles:

- Whose `Id` of the `Category` of the `SingleRole` is the same identifier as the value set for the
  `Category` property of the current user, in at least one of their assigned profiles, and
- Whose `WorkflowState` is set to 8 or 9 or 11, which mean respectively pending approval 1/1, 1/2
  and 1/3.

### Properties

| Property                           | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required                   | Int64                       | Binding of the property whose value is to be checked to restrict the application of the rule's permissions. **NOTE:** The binding must be based on the entity type defined in the access control rule.                                                                                                                                                                                                  |
| Category default value: false      | Boolean                     | True to compare the value specified by the binding to the categories of the current user's assigned profiles.                                                                                                                                                                                                                                                                                           |
| CompositeRole default value: false | Boolean                     | True to compare the value specified by the binding to the composite roles of the current user's assigned profiles. See the [Assigned Profile](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/assignedprofile/index.md) topic for additional information.                                                                                                                                                                                          |
| CurrentUser default value: false   | Boolean                     | True to compare the value specified by the binding to the identifier of the account used by the current user to authenticate to Identity Manager. **NOTE:** The current user is the owner of the profile, allowed by the access control rule to perform an action and/or receive a notification. `CurrentUser` is tightly linked to the configuration of the `SelectUserByIdentityQueryHandlerSetting`. |
| Dimension optional                 | Int64                       | Identifier of the dimension whose value(s), from the user's assigned profiles, are to be compared to the value specified by the binding. See [Dimension](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/dimension/index.md) and [Assigned Profile](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/assignedprofile/index.md) topics for additional information.                                                                                                                  |
| Group optional                     | String                      | Group that the filter is part of. The access control rule filters the permissions by using the union (OR) of all filter groups, and the intersection (AND) of all filters within a group. **NOTE:** When not specified, the filter is part of the default group.                                                                                                                                        |
| Operator default value: 0          | AccessControlFilterOperator | Comparison operator. 0 - Equals. 1 - NotEquals.                                                                                                                                                                                                                                                                                                                                                         |
| ResourceType default value: false  | Boolean                     | True to compare the value specified by the binding to the resource types of the current user's assigned profiles. See the [Assigned Profile](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/assignedprofile/index.md) topic for additional information.                                                                                                                                                                                           |
| SingleRole default value: false    | Boolean                     | True to compare the value specified by the binding to the single roles of the current user's assigned profiles. See the [Assigned Profile](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/assignedprofile/index.md) topic for additional information.                                                                                                                                                                                             |
| Value optional                     | String                      | Hard coded value to be compared to the value specified by the binding.                                                                                                                                                                                                                                                                                                                                  |
