---
title: "For Microsoft Entra ID"
description: "For Microsoft Entra ID"
sidebar_position: 10
---

# For Microsoft Entra ID

See the[ Microsoft Entra ID](/docs/identitymanager/saas/integration-guide/connectors/references-connectors/microsoftentraid/index.md) topic for
additional information about creating a connector.

## Prerequisites

The following are prerequisites for the connector creation.

**Configure the external system**

See the [Register for Microsoft Entra ID](/docs/identitymanager/saas/integration-guide/connectors/configuration-details/azuread-register/index.md) topic for additional
information on how to register Identity Manager.

**Configure Identity Manager**

See the [ Microsoft Entra ID](/docs/identitymanager/saas/integration-guide/connectors/references-connectors/microsoftentraid/index.md) topic for
additional information on the connection.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "MicrosoftEntraIDContosoNYExport": {
      "ApplicationId": "<contosoAzure897>",
      "ApplicationKey": "<25d408a1925d4c081925b\d40819>",
      "TenantId": "<25d40819-f23f-4837-9d50-a9a52da50b8c>",
      "MicrosoftGraphPathApi": "<https://graph.microsoft.com/v1.0/>",
    }
  }
}
```

## Build the Connector

See the [Connect to a Managed System](/docs/identitymanager/saas/user-guide/set-up/connect-system/index.md)
topic for additional information on how to build a connector via the UI, with its connections,
entity types and mappings.

This example declares the MicrosoftEntraID connector on the Local agent:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml
<?xml version="1.0" encoding="utf-8"?>
<ConfigurationFile xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="urn:schemas-usercube-com:configuration">
    ...
    <Connector Identifier="MicrosoftEntraID" DisplayName_L1="MicrosoftEntraID" Agent="Local" />
    ...
</ConfigurationFile>

```

### Entity model

The entity model should match as closely as possible the structure of the relevant Microsoft Entra
ID data, and be aligned with Identity Manager's repository. See the
[Entity Model](/docs/identitymanager/saas/integration-guide/entity-model/index.md) topic for additional information.

For example, Microsoft Entra ID's Users and Groups can be described by entity types, and group
memberships by entity associations.

The following example defines an entity type named MicrosoftEntraID_DirectoryObject to match the
attributes selected for extraction from the Microsoft Entra ID instance:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml
...
<EntityType Identifier="MicrosoftEntraID_DirectoryObject" DisplayName_L1="MicrosoftEntraID - Object">
    <Property Identifier="accountEnabled" DisplayName_L1="accountEnabled" TargetColumnIndex="17" Type="String" />
    <Property Identifier="city" DisplayName_L1="city" TargetColumnIndex="47" Type="String" />
    <Property Identifier="companyName" DisplayName_L1="companyName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="country" DisplayName_L1="country" TargetColumnIndex="7" Type="String" />
    <Property Identifier="createdDateTime" DisplayName_L1="createdDateTime" TargetColumnIndex="8" Type="String" />
    <Property Identifier="dataType" DisplayName_L1="dataType" TargetColumnIndex="5" Type="String" />
    <Property Identifier="department" DisplayName_L1="department" TargetColumnIndex="10" Type="String" />
    <Property Identifier="displayName" DisplayName_L1="displayName" TargetColumnIndex="11" Type="String" IsKey="true" />
    <Property Identifier="employeeId" DisplayName_L1="employeeId" TargetColumnIndex="12" Type="String" />
    <Property Identifier="externalUserState" DisplayName_L1="externalUserState" TargetColumnIndex="13" Type="String" />
    <Property Identifier="externalUserStateChangeDateTime" DisplayName_L1="externalUserStateChangeDateTime" TargetColumnIndex="14" Type="String" />
    <Property Identifier="givenName" DisplayName_L1="givenName" TargetColumnIndex="15" Type="String" />
    <Property Identifier="objectid" DisplayName_L1="id" TargetColumnIndex="4" Type="String" IsKey=&> quot;true" />
    <Property Identifier="isResourceAccount" DisplayName_L1="isResourceAccount" TargetColumnIndex="18" Type="String" />
    <Property Identifier="jobTitle" DisplayName_L1="jobTitle" TargetColumnIndex="19" Type="String" />
    <Property Identifier="mail" DisplayName_L1="mail" TargetColumnIndex="20" Type="String" />
    <Property Identifier="mailNickname" DisplayName_L1="mailNickname" TargetColumnIndex="21" Type="String" />
    <Property Identifier="mobilePhone" DisplayName_L1="mobilePhone" TargetColumnIndex="22" Type="String" />
    <Property Identifier="officeLocation" DisplayName_L1="officeLocation" TargetColumnIndex="23" Type="String" />
    <Property Identifier="onPremisesDistinguishedName" DisplayName_L1="onPremisesDistinguishedName" TargetColumnIndex="24" Type="String" />
    <Property Identifier="onPremisesDomainName" DisplayName_L1="onPremisesDomainName" TargetColumnIndex="25" Type="String" />
    <Property Identifier="onPremisesImmutableId" DisplayName_L1="onPremisesImmutableId" TargetColumnIndex="26" Type="String" />
    <Property Identifier="onPremisesLastSyncDateTime" DisplayName_L1="onPremisesLastSyncDateTime" TargetColumnIndex="27" Type="String" />
    <Property Identifier="onPremisesSamAccountName" DisplayName_L1="onPremisesSamAccountName" TargetColumnIndex="28" Type="String" />
    <Property Identifier="onPremisesSecurityIdentifier" DisplayName_L1="onPremisesSecurityIdentifier" TargetColumnIndex="29" Type="String" />
    <Property Identifier="onPremisesSyncEnabled" DisplayName_L1="onPremisesSyncEnabled" TargetColumnIndex="30" Type="String" />
    <Property Identifier="onPremisesUserPrincipalName" DisplayName_L1="onPremisesUserPrincipalName" TargetColumnIndex="31" Type="String" />
    <Property Identifier="preferredLanguage" DisplayName_L1="preferredLanguage" TargetColumnIndex="32" Type="String" />
    <Property Identifier="proxyAddresses" DisplayName_L1="proxyAddresses" TargetColumnIndex="33" Type="String" />
    <Property Identifier="showInAddressList" DisplayName_L1="showInAddressList" TargetColumnIndex="34" Type="String" />
    <Property Identifier="state" DisplayName_L1="state" TargetColumnIndex="35" Type="String" />
    <Property Identifier="streetAddress" DisplayName_L1="streetAddress" TargetColumnIndex="36" Type="String" />
    <Property Identifier="surname" DisplayName_L1="surname" TargetColumnIndex="37" Type="String" />
    <Property Identifier="usageLocation" DisplayName_L1="usageLocation" TargetColumnIndex="38" Type="String" />
    <Property Identifier="userPrincipalName" DisplayName_L1="userPrincipalName" TargetColumnIndex="39" Type="String" />
    <Property Identifier="userType" DisplayName_L1="userType" TargetColumnIndex="40" Type="String" />
    <Property Identifier="allowExternalSenders" DisplayName_L1="allowExternalSenders" TargetColumnIndex="41" Type="String" />
    <Property Identifier="description" DisplayName_L1="description" TargetColumnIndex="42" Type="String" />
    <Property Identifier="expirationDateTime" DisplayName_L1="expirationDateTime" TargetColumnIndex="43" Type="String" />
    <Property Identifier="groupTypes" DisplayName_L1="groupTypes" TargetColumnIndex="44" Type="String" />
    <Property Identifier="securityEnabled" DisplayName_L1="securityEnabled" TargetColumnIndex="45" Type="String" />
    <Property Identifier="visibility" DisplayName_L1="visibility" TargetColumnIndex="46" Type="String" />
    <Property Identifier="members" DisplayName_L1="members" Type="ForeignKey" />
    <Property Identifier="memberOf" DisplayName_L1="memberOf" Type="ForeignKey" />
    <Property Identifier="SharePointObject" DisplayName_L1="SharePointObject" Type="ForeignKey" />
</EntityType>
...

```

Notice the omitted TargetColumnIndex attribute for the members and memberOf properties. This means
that these properties are navigation properties.

The following example declares an n-n association between two MicrosoftEntraID_DirectoryObjects,
where:

- memberOf is a collection of Groups IDs of which this MicrosoftEntraID_DirectoryObject is a member;
- members from a Group is a collection of MicrosoftEntraID_DirectoryObjects IDs which are members of
  this Group.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml
...
<EntityAssociation Identifier="MicrosoftEntraID_DirectoryObject_members" DisplayName_L1="members" IsProperty1Collection="true" IsProperty2Collection="true" Property1="MicrosoftEntraID_DirectoryObject:members" Property2="MicrosoftEntraID_DirectoryObject:memberOf" />
...

```

Notice the format of the Property1 and Property2 XML attributes: the name of the entity type is
followed by a colon (:) and the name of an entity property. It is a binding describing in one
expression, the target entity type and property. See
the[Binding](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/metadata/binding/index.md) topic for additional
information.

**Entity mapping**

Each property of the entity type must be mapped to an attribute among those exported from Microsoft
Entra ID.

So each element of an entity type mapping is meant to link a property from the CSV file containing
the exported Microsoft Entra ID attributes to a property from the entity type.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml
...
<EntityTypeMapping Identifier="MicrosoftEntraID_DirectoryObject" Connector="MicrosoftEntraID" ConnectionTable="MicrosoftEntraIDContosoNYExport_directoryobjects">
    <Property Identifier="accountEnabled" ConnectionColumn="accountEnabled" />
    <Property Identifier="city" ConnectionColumn="city" />
    <Property Identifier="companyName" ConnectionColumn="companyName" />
    <Property Identifier="country" ConnectionColumn="country" />
    <Property Identifier="createdDateTime" ConnectionColumn="createdDateTime" />
    <Property Identifier="dataType" ConnectionColumn="@odata.type" />
    <Property Identifier="department" ConnectionColumn="department" />
    <Property Identifier="displayName" ConnectionColumn="displayName" />
    <Property Identifier="employeeId" ConnectionColumn="employeeId" />
    <Property Identifier="externalUserState" ConnectionColumn="externalUserState" />
    <Property Identifier="externalUserStateChangeDateTime" ConnectionColumn="externalUserStateChangeDateTime" />
    <Property Identifier="givenName" ConnectionColumn="givenName" />
    <Property Identifier="objectid" ConnectionColumn="id" IsPrimaryKey="true" />
    <Property Identifier="isResourceAccount" ConnectionColumn="isResourceAccount" />
    <Property Identifier="jobTitle" ConnectionColumn="jobTitle" />
    <Property Identifier="mail" ConnectionColumn="mail" />
    <Property Identifier="mailNickname" ConnectionColumn="mailNickname" />
    <Property Identifier="mobilePhone" ConnectionColumn="mobilePhone" />
    <Property Identifier="officeLocation" ConnectionColumn="officeLocation" />
    <Property Identifier="onPremisesDistinguishedName" ConnectionColumn="onPremisesDistinguishedName" />
    <Property Identifier="onPremisesDomainName" ConnectionColumn="onPremisesDomainName" />
    <Property Identifier="onPremisesImmutableId" ConnectionColumn="onPremisesImmutableId" />
    <Property Identifier="onPremisesLastSyncDateTime" ConnectionColumn="onPremisesLastSyncDateTime" />
    <Property Identifier="onPremisesSamAccountName" ConnectionColumn="onPremisesSamAccountName" />
    <Property Identifier="onPremisesSecurityIdentifier" ConnectionColumn="onPremisesSecurityIdentifier" />
    <Property Identifier="onPremisesSyncEnabled" ConnectionColumn="onPremisesSyncEnabled" />
    <Property Identifier="onPremisesUserPrincipalName" ConnectionColumn="onPremisesUserPrincipalName" />
    <Property Identifier="preferredLanguage" ConnectionColumn="preferredLanguage" />
    <Property Identifier="proxyAddresses" ConnectionColumn="proxyAddresses" />
    <Property Identifier="showInAddressList" ConnectionColumn="showInAddressList" />
    <Property Identifier="state" ConnectionColumn="state" />
    <Property Identifier="streetAddress" ConnectionColumn="streetAddress" />
    <Property Identifier="surname" ConnectionColumn="surname" />
    <Property Identifier="usageLocation" ConnectionColumn="usageLocation" />
    <Property Identifier="userPrincipalName" ConnectionColumn="userPrincipalName" />
    <Property Identifier="userType" ConnectionColumn="userType" />
    <Property Identifier="allowExternalSenders" ConnectionColumn="allowExternalSenders" />
    <Property Identifier="description" ConnectionColumn="description" />
    <Property Identifier="expirationDateTime" ConnectionColumn="expirationDateTime" />
    <Property Identifier="groupTypes" ConnectionColumn="groupTypes" />
    <Property Identifier="securityEnabled" ConnectionColumn="securityEnabled" />
    <Property Identifier="visibility" ConnectionColumn="visibility" />
  </EntityTypeMapping>
...
```

As a result, synchronization updates Identity Manager's UR_Resource table based on the data of the
exported CSV files. Considering that AzureAD_DirectoryObject has never been synchronized, the
UR_Resource table receives a new line for which the 47th column (City) is filled in with the city
column from the `C:/identitymanagerDemo/Temp/ExportOutput/AzureADContosoNYExport_directoryobjects.csv`
file.

An association mapping is the equivalent of an entity type mapping, but for the properties of an
entity association instead of an entity type.

The following example describes the "actual group/member" associations between
MicrosoftEntraID_DirectoryObjects.

These associations are exported from the Microsoft Entra ID system into the
`C:/identitymanagerDemo/Temp/ExportOutput/MicrosoftEntraIDContosoNYExport_members_group.csv` file,
containing, for each group, a list of members in the following format, with id being the id of an
Microsoft Entra ID object and groupId the matching Group's id to which the object belongs:

| Id  | GroupId |
| --- | ------- |
| 12  | 454     |
| 3   | 454     |
| 4   | 454     |
| 5   | 333     |
| 2   | 333     |

The following entity association mapping maps the properties from the
MicrosoftEntraID_DirectoryObject_members entity association:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml
...
<EntityAssociation Identifier="MicrosoftEntraID_DirectoryObject_members" DisplayName_L1="members" IsProperty1Collection="true" IsProperty2Collection="true" Property1="MicrosoftEntraID_DirectoryObject:members" Property2="MicrosoftEntraID_DirectoryObject:memberOf" />
<EntityAssociationMapping Identifier="MicrosoftEntraID_DirectoryObject_members" Column1="groupId" Column2="id" ConnectionTable="MicrosoftEntraIDContosoNYExport_members_group" EntityPropertyMapping1="MicrosoftEntraID_DirectoryObject:objectid" EntityPropertyMapping2="MicrosoftEntraID_DirectoryObject:objectid" Connector="MicrosoftEntraID" />
...

```

Here the members property of the MicrosoftEntraID_DirectoryObject entity (written to the Property1
attribute of the MicrosoftEntraID_DirectoryObject_members entity association) is filled in by values
from the groupId column (written to the Column1 attribute of the
MicrosoftEntraID_DirectoryObject_members entity association mapping) of the CSV file.

And the membersOf property of the MicrosoftEntraID_DirectoryObject entity (written to the Property2
attribute of the MicrosoftEntraID_DirectoryObject_members entity association) is filled in by values
from the Id column (written to the Column2 attribute of the MicrosoftEntraID_DirectoryObject_members
entity association mapping) of the CSV file.

## Display the Connector in the UI

This is how the connectors are displayed on the UI.

**Menu items**

Each connector should be configured with a menu item, which is created automatically when working
via the UI.

![Menu Item - Azure AD Connector](/images/identitymanager/saas/integration-guide/connectors/how-tos/create-connector/azuread/howtos_azure_menuitem_v603.webp)

In XML, it should look like this:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Nav.xml
<MenuItem Identifier="Nav_Connectors_MicrosoftEntraID_DirectoryObject" DisplayName_L1="MicrosoftEntraID Objects" EntityType="MicrosoftEntraID_DirectoryObject" ParentMenuItem="Nav_Connectors" />
```

**Displayed resources**

See the
[Organize Resources' Datasheets](/docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/index.md)
topic for additional information on how to set the display properties via the UI.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID UI.xml
<DisplayEntityType Identifier="MicrosoftEntraID_DirectoryObject">
    <Property OutputType="BasicCollection" Identifier="members" />
    <Property OutputType="BasicCollection" Identifier="groups" />
</DisplayEntityType>

```

![Navigation Properties - Azure AD Connector](/images/identitymanager/saas/integration-guide/connectors/how-tos/create-connector/azuread/howtos_azure_navproperties_v603.webp)

Microsoft Entra ID's resources are listed in a table.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID UI.xml
<DisplayTable Identifier="MicrosoftEntraID_DirectoryObject" EntityType="MicrosoftEntraID_DirectoryObject" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">
    <Column DefaultSortPriority="1" DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />
    <Column DisplayBinding="mail" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
    <Column DisplayBinding="dataType" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
</DisplayTable>

```

![Display Table - Azure AD Connector](/images/identitymanager/saas/integration-guide/connectors/how-tos/create-connector/azuread/howtos_azure_table_v603.webp)

This is how the resources are displayed on the UI.

**Resources' display names**

See the
[Set Resources' Display Names](/docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/index.md)
topic for additional information on how to set resources' display names via the UI.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID UI.xml
<EntityPropertyExpression Identifier="MicrosoftEntraID_DirectoryObject_InternalDisplayName" Expression="C#:resource:return resource.userPrincipalName ?? resource.mail ?? resource.displayName ?? resource.Id.ToString();" EntityType="MicrosoftEntraID_DirectoryObject" Property="InternalDisplayName" />
```

**Permissions**

In order to access the connector, any user must have the right permissions.

The following example sets the permissions to access the Microsoft Entra ID connector and resources
for the Administrator profile.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Profile Administrator.xml
<AccessControlRule Profile="Administrator" EntityType="ResourceType" Identifier="Administrator_ResourceTypeSelector_resourceType_MicrosoftEntraID" DisplayName_L1="Administrator_ResourceTypeSelector_resourceType_MicrosoftEntraID">
    <Entry Permission="/Custom/Resources/MicrosoftEntraID_DirectoryObject/View" CanExecute="true" />
    <Entry Permission="/Custom/Resources/MicrosoftEntraID_DirectoryObject/ResetPassword" CanExecute="true" />
</AccessControlRule>
<AccessControlRule Profile="Administrator" EntityType="Category" Identifier="Administrator_ResourceTypeSelector_category_MicrosoftEntraID" DisplayName_L1="Administrator_ResourceTypeSelector_category_MicrosoftEntraID">
    <Entry Permission="/Custom/Resources/MicrosoftEntraID_DirectoryObject/View" CanExecute="true" />
</AccessControlRule>

```
