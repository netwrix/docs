---
title: "Connector Mappings"
description: "Connector Mappings"
sidebar_position: 10
---

# Connector Mappings

This scaffolding allows the user to generate the mapping of an entity in a given connector.

The identifiers of the connector and the entity type must be provided to the scaffolding through the
attributes `Connector` and `EntityType` to make the link between these two elements and create the
mapping. This scaffolding needs to have an argument to know the location of the file to be retrieved
during the collection. This file must be a CSV file with "Command" as the first column and then the
rest of the columns for scalar and mono-navigation properties. This file must be named after the
entity type. If there are multi-valued navigation properties, it is necessary to create a file with
"Command" as first property and the key of the two entities to link. This file must be named after
the identifier of the starting entity type + "\_" + the identifier of the navigation property.

If you are using a CSV connector with files in incremental mode, you must specify the attribute
`IsIncremental` to `true`.

## Examples

```

**<ConnectorMappings Connector="Directory" EntityType="Directory_UserRecord" IsIncremental="true" Package="Usercube.Excel@0000001"/>**

```

## Properties

| Property               | Details                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector required     | **Type** String **Description** Identifier of the connector involved in the job to be generated.                                                |
| EntityType required    | **Type** String **Description** Identifier of the entity type involved in the scaffolding.                                                      |
| IsIncremental optional | **Type** Boolean **Description** `true` to perform an incremental synchronization.                                                              |
| Package optional       | **Type** ConnectionPackage **Description** For a `ConnectorMappings` scaffolding, identifier of the package for the connection to be generated. |

## Child Elements

- Excluded Property (optional) to ignore a given property of the specified entity type.
- Mapping Path (optional) Define the path for csv EntityType mapping

### Excluded Property

| Property          | Details                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Property required | **Type** String **Description** Property of the specified entity type that is to be ignored for the generation of entity instances and association instances. |

A scaffolding does not use filters, but a part of the entity model can be excluded with the
`ExcludedProperty` argument.

The following example generates a universe `U8_Users` based on the entity type `Directory_User`,
like our U1 but without the `Guests` property:

```

<Universe Identifier="U8_Users" DisplayName_L1="U8 - Users" ColumnNamesMode="Identifier" /><UniverseDataModel Universe="U8_Users" EntityType="Directory_User" >
    <ExcludedProperty Property="Guests"/>
</UniverseDataModel>

```

When getting Identity Manager
[Connect Power BI to Identity Manager](/docs/identitymanager/6.2/integration-guide/governance/reporting/how-tos/connect-powerbi/index.md),
we see the following:

![Universe (ExcludedProperty)](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_excluded.webp)

### Mapping Path

| Property                           | Details                                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| IsIncremental default value: false | **Type** Boolean **Description** Defines if the CSV connector files uses the incremental mode |

## Generated XML

Our example generates the following configuration:

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" /><EntityTypeMapping Identifier="Directory_UserRecord" ConnectionTable="Directory_UserRecord" Connector="Directory">  <Property Identifier="BirthDate" ConnectionColumn="BirthDate" />  <Property Identifier="BirthName" ConnectionColumn="BirthName" />  <Property Identifier="ContractEndDate" ConnectionColumn="ContractEndDate" />  <Property Identifier="ContractStartDate" ConnectionColumn="ContractStartDate" />  <Property Identifier="Email" ConnectionColumn="Email" />  <Property Identifier="EmailAliases" ConnectionColumn="EmailAliases" />  <Property Identifier="EmployeeId" ConnectionColumn="EmployeeId" />  <Property Identifier="EndDate" ConnectionColumn="EndDate" />  <Property Identifier="FirstName" ConnectionColumn="FirstName" />  <Property Identifier="LastName" ConnectionColumn="LastName" />  <Property Identifier="Login" ConnectionColumn="Login" />  <Property Identifier="MobileNumber" ConnectionColumn="MobileNumber" />  <Property Identifier="PhoneNumber" ConnectionColumn="PhoneNumber" />  <Property Identifier="PositionEndDate" ConnectionColumn="PositionEndDate" />  <Property Identifier="PositionIdentifier" ConnectionColumn="PositionIdentifier" IsPrimaryKey="true" />  <Property Identifier="PositionStartDate" ConnectionColumn="PositionStartDate" />  <Property Identifier="StartDate" ConnectionColumn="StartDate" />  <Property Identifier="Suspended" ConnectionColumn="Suspended" />  <Property Identifier="VIP" ConnectionColumn="VIP" /></EntityTypeMapping><EntityAssociationMapping Identifier="Directory_UserRecord_ExternalCompany" Column1="PositionIdentifier" Column2="ExternalCompany" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_ExternalCompany:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_IGAManager" Column1="PositionIdentifier" Column2="IGAManager" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_User:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Manager" Column1="PositionIdentifier" Column2="Manager" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_User:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Organization" Column1="PositionIdentifier" Column2="Organization" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_Organization:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_PersonalTitle" Column1="PositionIdentifier" Column2="PersonalTitle" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_PersonalTitle:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Site" Column1="PositionIdentifier" Column2="Site" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_Site:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Subsidiary" Column1="PositionIdentifier" Column2="Subsidiary" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_Subsidiary:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Title_User_Records" Column1="PositionIdentifier" Column2="Title" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_Title:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_User" Column1="PositionIdentifier" Column2="User" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_User:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_UserType" Column1="PositionIdentifier" Column2="UserType" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_UserType:Identifier" />

```
