---
title: "Fulfill Microsoft Exchange via PowerShell"
description: "Fulfill Microsoft Exchange via PowerShell"
sidebar_position: 100
---

# Fulfill Microsoft Exchange via PowerShell

This guide shows how to set up a PowerShell connector to fulfill data in Microsoft Exchange Server.
It will focus on registering Identity Manager within the target Microsoft Exchange instance, configuring the connector, and building the job to perform a regularly scheduled fulfillment. Of course, any other system compatible with PowerShell can be chosen.

## Prerequisites

### External System Configuration

Check the following prerequisites:

- [PowerShellProv](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/powershellprov/index.md)
- [Microsoft Exchange](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/microsoftexchange/index.md)
- [Active Directory](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/activedirectory/index.md)

Let's consider a simplified system, including three parts:

1. Identity Manager
2. Microsoft Exchange Server
3. Active Directory

For more details on the complete system, see
[Exchange architecture](https://docs.microsoft.com/en-us/exchange/network-configuration/architecture?view=exchserver-2016).

Identity Manager can:

- export and fulfill AD entries independently of Microsoft Exchange.
- export mailboxes from Microsoft Exchange independently of AD.
- fulfill a mailbox but Identity Manager needs first to fulfill an AD entry and then, launch the
  Microsoft Exchange Fulfill.

### Identity Manager Configuration

This step sets up the Identity Manager Agent to use the Active Directory and PowerShell connectors
in order to fulfill the Microsoft Exchange mailboxes.

The settings must be entered in `appsettings.agent.json > Connections`. For more details, see the [Active Directory](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/activedirectory/index.md) and
[PowerShellProv](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/powershellprov/index.md) sections.

#### Add Sections

As explained previously, the simplified system consists of Identity Manager and two other systems.
It means that settings are required in `appsettings.agent.json` to connect with the systems. See the
[Microsoft Exchange](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/microsoftexchange/index.md),
[PowerShellProv](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/powershellprov/index.md),
and [Active Directory](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/activedirectory/index.md) topics for additional information.

> This example contains export and fulfillment settings for the Active Directory and for Microsoft
> Exchange:
>
> ```
> appsettings.agent.json
> {
>     "Connections": {
>     ...
>     "ADFulfillment": {
>       "Servers": [>         {
>           "Server": "...",
>           "BaseDN": "..."
>         },
>         {
>           "Server": "paris.contoso.com",
>           "BaseDN": "DC=defense,DC=paris,DC=com"
>         }
>],
>       "AuthType": "Basic",
>       "Login": "...",
>       "Password": "...",
>       "Filter": "(objectclass=*)",
>       "EnableSSL": true,
>     }
>     "MicrosoftExchangeExportFulfillment": {
>       // Export Microsoft Exchange settings
>       ...
>       // Fulfillment Microsoft Exchange settings
>       "PowerShellScriptPath": "C:/identitymanagerDemo/Scripts/Fulfill-Exchange.ps1",
>       "Options": {
>         "AuthType": "Basic",
>         "Server": "http://ex-server1/powershell",
>         "Login": "PIXELABS\\Administrateur",
>         "Password": "Secret123"
>       }
>     },
>   }
> }
> ```

As this guide focuses on the fulfillment of an external system, export settings will be omitted.

The Fulfill-PowerShell needs a script whose path is defined by the attribute
**PowerShellScriptPath**. Identity Manager provides a script in the SDK in
`Usercube.Demo/Scripts/Fulfill-Exchange.ps1`.See the
[Write a PowerShell Script for Provisioning](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/write-fulfill-powershell-script/index.md) topic for additional information on how to write a customized script.

To define and apply additional settings when authenticating to an external system, we can set the attribute Options and add required parameters for authentication.

In the example above, the `Basic` AuthType was chosen to show how to fill the credentials, but it isn't mandatory to use this. See the
[Microsoft Exchange](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/microsoftexchange/index.md) topic for additional information.

For pedagogical reasons, this guide focuses on the simplest way to set up the fulfillment, but it's not the most secure. Hence, it is strongly recommended to use Kerberos AuthType or credentials protection via Azure Key Vault or CyberArk in a production environment. See the [PowerShellProv](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/powershellprov/index.md) topic for additional information.
Netwrix Identity Manager (formerly Usercube) recommends completing this guide once, testing the configuration, and only then, switching to a more secure way of storing credentials.

## Build the Connector

To be used for export tasks, a connector must be declared in the applicative configuration and linked to an Agent. See the [Toolkit for XML Configuration](/docs/identitymanager/6.2/integration-guide/toolkit/index.md) topic for additional information.

It is strongly recommended that the applicative configuration be stored in the working directory Conf folder as a set of xml files organized by connector. To follow this structure, create a MicrosoftExchange directory in the Conf folder.

### Declare a Connector

In the `MicrosoftExchange` directory, create a `MicrosoftExchange Connector.xml` file. This file contains the declaration of the connector and the associated [Entity Model](/docs/identitymanager/6.2/integration-guide/entity-model/index.md).

> This example declares the
> `MicrosoftExchange`[Connector](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connector/index.md)
> on the `Local` agent, and the
> [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) linked to the
> previously defined `MicrosoftExchangeExportFulfillment` JSON section (see the example above):
>
> ```
> Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
> <?xml version="1.0" encoding="utf-8"?><ConfigurationFile xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="urn:schemas-usercube-com:configuration">    ...
>     <Connector Identifier="MicrosoftExchange" DisplayName_L1="Microsoft Exchange" Agent="Local" />    <Connection Connector="MicrosoftExchange" DisplayName_L1="Connection Microsoft Exchange" Identifier="MicrosoftExchangeExportFulfillment" Package="Usercube.MicrosoftExchange@0000001"/>    <Category Policy="Default" Identifier="MicrosoftExchange" DisplayName_L1="Microsoft Exchange"/>    ...
> </ConfigurationFile>
>
> ```

### Write Entity Types

The [Entity Model](/docs/identitymanager/6.2/integration-guide/entity-model/index.md) should match as closely as possible the structure
of the Microsoft Exchange data relevant for Identity Manager. It is designed by analyzing the
Microsoft Exchange data structure, and describing said data with Entity Types and
[Entity Association](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md).

Eventually, it is up to the integration team to design the
[Entity Model](/docs/identitymanager/6.2/integration-guide/entity-model/index.md) that best serves the Role Model needs. It will most
likely be refined iteratively throughout the project integration. See the
[Assignment Policy](/docs/identitymanager/6.2/integration-guide/role-assignment/role-model-rules/index.md) topic for additional information.

A good starting point for the Entity Model is to mirror the shape of the Microsoft Exchange
mailboxes and databases.

##### Example

This example defines the entity types named MicrosoftExchange_Database and
MicrosoftExchange_Mailbox.

Notice the omitted **TargetColumnIndex** attribute and the presence of Type="ForeignKey" for the
Mailboxes and Database properties. If omitted, this attribute indicates that the properties are
navigation properties.

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
<EntityType Identifier="MicrosoftExchange_Database" DisplayName_L1="Microsoft Exchange - Database">  <Property Identifier="Name" DisplayName_L1="Name" TargetColumnIndex="4" Type="String" />  <Property Identifier="Server" DisplayName_L1="Server" TargetColumnIndex="5" Type="String" />  <Property Identifier="Mounted" DisplayName_L1="Mounted" TargetColumnIndex="7" Type="String" />  <Property Identifier="ObjectCategory" DisplayName_L1="ObjectCategory" TargetColumnIndex="1" Type="String" />  <Property Identifier="Guid" DisplayName_L1="Guid" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="WhenChangedUTC" DisplayName_L1="WhenChangedUTC" TargetColumnIndex="2" Type="String" />  <Property Identifier="WhenCreatedUTC" DisplayName_L1="WhenCreatedUTC" TargetColumnIndex="3" Type="String" />  <Property Identifier="ObjectState" DisplayName_L1="ObjectState" TargetColumnIndex="6" Type="String" />  <Property Identifier="Mailboxes" DisplayName_L1="Mailboxes" Type="ForeignKey" /></EntityType><EntityType Identifier="MicrosoftExchange_Mailbox" DisplayName_L1="Microsoft Exchange - Mailbox">  <Property Identifier="EmailAddresses" DisplayName_L1="EmailAddresses" TargetColumnIndex="8" Type="String" />  <Property Identifier="UseDatabaseRetentionDefaults" DisplayName_L1="UseDatabaseRetentionDefaults" TargetColumnIndex="34" Type="String" />  <Property Identifier="RetainDeletedItemsUntilBackup" DisplayName_L1="RetainDeletedItemsUntilBackup" TargetColumnIndex="27" Type="String" />  <Property Identifier="DeliverToMailboxAndForward" DisplayName_L1="DeliverToMailboxAndForward" TargetColumnIndex="28" Type="String" />  <Property Identifier="ExchangeGuid" DisplayName_L1="ExchangeGuid" TargetColumnIndex="5" Type="String" />  <Property Identifier="ExchangeUserAccountControl" DisplayName_L1="ExchangeUserAccountControl" TargetColumnIndex="35" Type="String" />  <Property Identifier="ForwardingAddress" DisplayName_L1="ForwardingAddress" TargetColumnIndex="40" Type="String" />  <Property Identifier="ForwardingSmtpAddress" DisplayName_L1="ForwardingSmtpAddress" TargetColumnIndex="41" Type="String" />  <Property Identifier="IsMailboxEnabled" DisplayName_L1="IsMailboxEnabled" TargetColumnIndex="36" Type="String" />  <Property Identifier="ProhibitSendQuota" DisplayName_L1="ProhibitSendQuota" TargetColumnIndex="19" Type="String" />  <Property Identifier="ProhibitSendReceiveQuota" DisplayName_L1="ProhibitSendReceiveQuota" TargetColumnIndex="20" Type="String" />  <Property Identifier="RecoverableItemsQuota" DisplayName_L1="RecoverableItemsQuota" TargetColumnIndex="9" Type="String" />  <Property Identifier="RecoverableItemsWarningQuota" DisplayName_L1="RecoverableItemsWarningQuota" TargetColumnIndex="10" Type="String" />  <Property Identifier="CalendarLoggingQuota" DisplayName_L1="CalendarLoggingQuota" TargetColumnIndex="11" Type="String" />  <Property Identifier="IsResource" DisplayName_L1="IsResource" TargetColumnIndex="29" Type="String" />  <Property Identifier="IsLinked" DisplayName_L1="IsLinked" TargetColumnIndex="30" Type="String" />  <Property Identifier="IsShared" DisplayName_L1="IsShared" TargetColumnIndex="31" Type="String" />  <Property Identifier="SamAccountName" DisplayName_L1="SamAccountName" TargetColumnIndex="21" Type="String" />  <Property Identifier="AntispamBypassEnabled" DisplayName_L1="AntispamBypassEnabled" TargetColumnIndex="32" Type="String" />  <Property Identifier="ServerName" DisplayName_L1="ServerName" TargetColumnIndex="26" Type="String" />  <Property Identifier="UseDatabaseQuotaDefaults" DisplayName_L1="UseDatabaseQuotaDefaults" TargetColumnIndex="37" Type="String" />  <Property Identifier="UserPrincipalName" DisplayName_L1="UserPrincipalName" TargetColumnIndex="7" Type="String" />  <Property Identifier="WhenMailboxCreated" DisplayName_L1="WhenMailboxCreated" TargetColumnIndex="14" Type="String" />  <Property Identifier="IsInactiveMailbox" DisplayName_L1="IsInactiveMailbox" TargetColumnIndex="33" Type="String" />  <Property Identifier="AccountDisabledIsDirSynced" DisplayName_L1="AccountDisabledIsDirSynced" TargetColumnIndex="42" Type="String" />  <Property Identifier="Alias" DisplayName_L1="Alias" TargetColumnIndex="22" Type="String" />  <Property Identifier="OrganizationalUnit" DisplayName_L1="OrganizationalUnit" TargetColumnIndex="3" Type="String" />  <Property Identifier="DisplayName" DisplayName_L1="DisplayName" TargetColumnIndex="12" Type="String" />  <Property Identifier="MaxSendSize" DisplayName_L1="MaxSendSize" TargetColumnIndex="23" Type="String" />  <Property Identifier="MaxReceiveSize" DisplayName_L1="MaxReceiveSize" TargetColumnIndex="24" Type="String" />  <Property Identifier="PrimarySmtpAddress" DisplayName_L1="PrimarySmtpAddress" TargetColumnIndex="6" Type="String" />  <Property Identifier="RecipientType" DisplayName_L1="RecipientType" TargetColumnIndex="17" Type="String" />  <Property Identifier="RecipientTypeDetails" DisplayName_L1="RecipientTypeDetails" TargetColumnIndex="18" Type="String" />  <Property Identifier="Identity" DisplayName_L1="Identity" TargetColumnIndex="2" Type="String" />  <Property Identifier="IsValid" DisplayName_L1="IsValid" TargetColumnIndex="38" Type="String" />  <Property Identifier="Name" DisplayName_L1="Name" TargetColumnIndex="13" Type="String" />  <Property Identifier="DistinguishedName" DisplayName_L1="DistinguishedName" TargetColumnIndex="1" Type="String" />  <Property Identifier="Guid" DisplayName_L1="Guid" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="ObjectCategory" DisplayName_L1="ObjectCategory" TargetColumnIndex="4" Type="String" />  <Property Identifier="WhenChangedUTC" DisplayName_L1="WhenChangedUTC" TargetColumnIndex="15" Type="String" />  <Property Identifier="WhenCreatedUTC" DisplayName_L1="WhenCreatedUTC" TargetColumnIndex="16" Type="String" />  <Property Identifier="ObjectState" DisplayName_L1="ObjectState" TargetColumnIndex="25" Type="String" />  <Property Identifier="Database" DisplayName_L1="Database" Type="ForeignKey" TargetColumnIndex="128" /></EntityType>...

```

### Write the Entity Type Mapping

The entity type must be mapped, on a property by property basis, to the exported attributes of
Microsoft Exchange mailboxes and databases (namely, the columns of the CSV source files generated by
the export). The
[Entity Type Mapping](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md)
element maps scalar properties from a CSV source file to an EntityType.

##### Example

In this example, the CSV source files are microsoftexchange_databases.csv and
microsoftexchange_mailboxes.csv located in the
[Application Settings](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
folder.

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
<EntityTypeMapping Identifier="MicrosoftExchange_Database" Connector="MicrosoftExchange" ConnectionTable="microsoftexchange_databases">  <Property Identifier="Name" ConnectionColumn="Name" IsUniqueKey="true" />  <Property Identifier="Server" ConnectionColumn="Server" />  <Property Identifier="Mounted" ConnectionColumn="Mounted" />  <Property Identifier="ObjectCategory" ConnectionColumn="ObjectCategory" />  <Property Identifier="Guid" ConnectionColumn="Guid" IsPrimaryKey="true" />  <Property Identifier="WhenChangedUTC" ConnectionColumn="WhenChangedUTC" />  <Property Identifier="WhenCreatedUTC" ConnectionColumn="WhenCreatedUTC" />  <Property Identifier="ObjectState" ConnectionColumn="ObjectState" /></EntityTypeMapping><EntityTypeMapping Identifier="MicrosoftExchange_Mailbox" Connector="MicrosoftExchange" ConnectionTable="microsoftexchange_mailboxes">  <Property Identifier="EmailAddresses" ConnectionColumn="EmailAddresses" />  <Property Identifier="UseDatabaseRetentionDefaults" ConnectionColumn="UseDatabaseRetentionDefaults" />  <Property Identifier="RetainDeletedItemsUntilBackup" ConnectionColumn="RetainDeletedItemsUntilBackup" />  <Property Identifier="DeliverToMailboxAndForward" ConnectionColumn="DeliverToMailboxAndForward" />  <Property Identifier="ExchangeGuid" ConnectionColumn="ExchangeGuid" />  <Property Identifier="ExchangeUserAccountControl" ConnectionColumn="ExchangeUserAccountControl" />  <Property Identifier="ForwardingAddress" ConnectionColumn="ForwardingAddress" />  <Property Identifier="ForwardingSmtpAddress" ConnectionColumn="ForwardingSmtpAddress" />  <Property Identifier="IsMailboxEnabled" ConnectionColumn="IsMailboxEnabled" />  <Property Identifier="ProhibitSendQuota" ConnectionColumn="ProhibitSendQuota" />  <Property Identifier="ProhibitSendReceiveQuota" ConnectionColumn="ProhibitSendReceiveQuota" />  <Property Identifier="RecoverableItemsQuota" ConnectionColumn="RecoverableItemsQuota" />  <Property Identifier="RecoverableItemsWarningQuota" ConnectionColumn="RecoverableItemsWarningQuota" />  <Property Identifier="CalendarLoggingQuota" ConnectionColumn="CalendarLoggingQuota" />  <Property Identifier="IsResource" ConnectionColumn="IsResource" />  <Property Identifier="IsLinked" ConnectionColumn="IsLinked" />  <Property Identifier="IsShared" ConnectionColumn="IsShared" />  <Property Identifier="SamAccountName" ConnectionColumn="SamAccountName" />  <Property Identifier="AntispamBypassEnabled" ConnectionColumn="AntispamBypassEnabled" />  <Property Identifier="ServerName" ConnectionColumn="ServerName" />  <Property Identifier="UseDatabaseQuotaDefaults" ConnectionColumn="UseDatabaseQuotaDefaults" />  <Property Identifier="UserPrincipalName" ConnectionColumn="UserPrincipalName" />  <Property Identifier="WhenMailboxCreated" ConnectionColumn="WhenMailboxCreated" />  <Property Identifier="IsInactiveMailbox" ConnectionColumn="IsInactiveMailbox" />  <Property Identifier="AccountDisabledIsDirSynced" ConnectionColumn="AccountDisabledIsDirSynced" />  <Property Identifier="Alias" ConnectionColumn="Alias" />  <Property Identifier="OrganizationalUnit" ConnectionColumn="OrganizationalUnit" />  <Property Identifier="DisplayName" ConnectionColumn="DisplayName" />  <Property Identifier="MaxSendSize" ConnectionColumn="MaxSendSize" />  <Property Identifier="MaxReceiveSize" ConnectionColumn="MaxReceiveSize" />  <Property Identifier="PrimarySmtpAddress" ConnectionColumn="PrimarySmtpAddress" />  <Property Identifier="RecipientType" ConnectionColumn="RecipientType" />  <Property Identifier="RecipientTypeDetails" ConnectionColumn="RecipientTypeDetails" />  <Property Identifier="Identity" ConnectionColumn="Identity" />  <Property Identifier="IsValid" ConnectionColumn="IsValid" />  <Property Identifier="Name" ConnectionColumn="Name" />  <Property Identifier="DistinguishedName" ConnectionColumn="DistinguishedName" />  <Property Identifier="Guid" ConnectionColumn="Guid" IsPrimaryKey="true" />  <Property Identifier="ObjectCategory" ConnectionColumn="ObjectCategory" />  <Property Identifier="WhenChangedUTC" ConnectionColumn="WhenChangedUTC" />  <Property Identifier="WhenCreatedUTC" ConnectionColumn="WhenCreatedUTC" />  <Property Identifier="ObjectState" ConnectionColumn="ObjectState" /></EntityTypeMapping>...

```

### Write Entity Associations

Entity types are associated through their navigation properties with
[Entity Association](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md) elements.

##### Example

The following example declares a `1:n` (`'one-to-many'`) association. One
`MicrosoftExchange_Database` may be referenced by any number of `MicrosoftExchange_Mailbox`_(es)_,
but each `MicrosoftExchange_Mailbox` can only reference one `MicrosoftExchange_Database`.

The properties used for the association must be `Primary` or `Unique` keys.

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
<EntityAssociation Identifier="MicrosoftExchange_Mailbox_Database" DisplayName_L1="Database" IsProperty1Collection="true" Property1="MicrosoftExchange_Database:Mailboxes" Property2="MicrosoftExchange_Mailbox:Database" />...

```

### Write the Entity Association Mapping

The [Entity Association Mapping](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md)
element maps column values from a CSV source file to an EntityType navigation property.

##### Example

This example describes the mailbox/database associations between MicrosoftExchange_Mailbox and
MicrosoftExchange_Database. Thanks to the **Export** Microsoft Exchange job, the file
microsoftexchange_mailboxes.csv is generated. This file looks like:

```

Command;Property_1;Property_2;...;Property_N
Add;value1;value2;...;valueN

```

Each line of the CSV file corresponds to a `MicrosoftExchange_Mailbox`. The properties used in the
association are:

- `Guid`: the Guid of the `MicrosoftExchange_Mailbox`.
- `Name`: the name of the `MicrosoftExchange_Database` referencing the `MicrosoftExchange_Mailbox`
  (name is unique among the databases).

The following table can be extracted from the CSV file:

| Guid                                 | Name                        |
| ------------------------------------ | --------------------------- |
| 4ecbdba7-e984-409a-a9ac-6027ac81fa42 | Mailbox Database 1882404652 |
| 1d3e67a2-7d44-46f1-a300-afa73ae120f4 | DB1                         |
| aab57e15-847b-4e16-96f1-82ebc54c01e2 | DB1                         |
| ea513604-3758-463f-9b72-6c42ea949260 | DB2                         |

It means that the MicrosoftExchange_Mailbox with Guid ? 4ecbdba7-e984-409a-a9ac-6027ac81fa42 is
contained in the MicrosoftExchange_Database with Name ? Mailbox Database 1882404652. This
association is created for every line in the CSV file, and therefore also for every line in the
table above.

This can be enabled with an **EntityAssociationMapping** like in the following XML:

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
<EntityAssociationMapping Identifier="MicrosoftExchange_Mailbox_Database" Column1="Database" Column2="Guid" Connector="MicrosoftExchange" ConnectionTable="microsoftexchange_mailboxes" EntityPropertyMapping1="MicrosoftExchange_Database:Name" EntityPropertyMapping2="MicrosoftExchange_Mailbox:Guid" />...

```

The CSV file `microsoftexchange_mailboxes.csv` must be exported to the export output folder. See the [Application Settings](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
topic for additional information.

## Build the Role Model

An [Entitlement Management](/docs/identitymanager/6.2/introduction-guide/overview/entitlement-management/index.md)
must be created with the following elements:

- `ResourceType`
- `ResourceTypeMapping`
- `ResourceCorrelationRule`
- `SingleRole` (optional)

### Resource Type

A [Resource Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md) is a
conceptual model of an information system object, here a mailbox.

The resource type contains several rules:

- Type Rule which assigns a resource to a user
- which specifies the value to be set to an assigned resource scalar property
- Resource Type which specifies a value to be set to an assigned resource multi-valued navigation
  property

#### Example

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
<ResourceType Identifier="MicrosoftExchange_Mailbox_NominativeUser" DisplayName_L1="Microsoft Exchange Mailbox (nominative)" DisplayName_L2="Bo�te Microsoft Exchange (nominative)" Policy="Default" TargetEntityType="MicrosoftExchange_Mailbox" Category="MicrosoftExchange" SourceEntityType="Directory_User" ApprovalWorkflowType="One" MaximumUpdatePercent="100" MaximumInsertPercent="100">  <ScalarRule Property="SamAccountName" Binding="Login" />  <ScalarRule Property="PrimarySmtpAddress" Binding="Mail" />  <ScalarRule Property="EmailAddresses" Expression="C#:person:return String.IsNullOrEmpty(person.ProxyAddress) ? &quot;SMTP:&quot; + person.Mail : &quot;smtp:&quot; + person.ProxyAddress + &quot; SMTP:&quot; + person.Mail;" />  <NavigationRule Property="Database" Resource="24679385-b2dd-461d-aebf-42a77e0c620e" SingleRole="Mailbox Database 1882404652" />  <NavigationRule Property="Database" Resource="9c512155-d912-4fcb-9448-0755fbaf1b96" SingleRole="DB1" />  <NavigationRule Property="Database" Resource="d1d81888-3ad3-4256-a621-2273aba7c48f" SingleRole="DB2" /></ResourceType>...

```

The TargetEntityType is MicrosoftExchange_Mailbox and the SourceEntityType is Directory_User.

This Resource Type allows Identity Manager to compute the values used when fulfilling the external system.

Finally, the Navigation Rule sets the property Database of the entity MicrosoftExchange_Mailbox. See
the Fulfill Microsoft Exchange via PowerShell topic for additional information.

### Resource Type Mapping

A [Resource Type Mappings](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/index.md)
element contains all the resource types (sharing the same Identifier) that can be provisioned into targeted platforms, applications, and systems.

#### Example

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
<ResourceTypeMapping Identifier="MicrosoftExchange_Mailbox_NominativeUser" Connection="MicrosoftExchangeExportFulfillment" />...

```

In this example, `Fulfill-PowerShell` requires only a simple `ResourceTypeMapping` (including only
one `Identifier` and one `Connection`):

- The **Identifier** attribute is `MicrosoftExchange_Mailbox_NominativeUser` which corresponds to
  the identifier of the resource type defined earlier.
- The **Connection** attribute is `MicrosoftExchangeExportFulfillment` which corresponds to the
  section in `appsettings.agent.json` containing the parameters used to provision the external
  system.

### Resource Correlation Rule

A [Resource Correlation Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/resourcecorrelationrule/index.md)
is used to correlate the resource `MicrosoftExchange_Mailbox_NominativeUser` with the
`Directory_User`.

#### Example

```
Conf/MicrosoftExchange/NotImplementInAutoTest/Directory User Role Model MicrosoftExchange.xml"
...
<ResourceCorrelationRule ResourceType="MicrosoftExchange_Mailbox_NominativeUser" TargetBinding="SamAccountName" Policy="Default" SourceMatchedConfidenceLevel="100" SourceBinding="Login" />...

```

This rule means if the `SamAccountName` (`MicrosoftExchange_Mailbox`) is equal to the `Login`
(`Directory_User`) then, the `ResourceType` can be linked to the `User` with a confidence rate of
100%.

### Single Role (optional)

A [Single Role](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/singlerole/index.md) encapsulates system entitlements.

#### Example

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
<SingleRole Identifier="Mailbox Database 1882404652" DisplayName_L1="Mailbox Database 1882404652" DisplayName_L2="Base de donn�e pour bo�te mail 1882404652" Category="MicrosoftExchange" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" /><SingleRole Identifier="DB1" DisplayName_L1="DB1" DisplayName_L2="DB1" Category="MicrosoftExchange" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" /><SingleRole Identifier="DB2" DisplayName_L1="DB2" DisplayName_L2="DB2" Category="MicrosoftExchange" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" />...

```

This single role was previously used in one of the navigation rules defined in the `ResourceType`.

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
<NavigationRule Property="Database" Resource="24679385-b2dd-461d-aebf-42a77e0c620e" SingleRole="Mailbox Database 1882404652" /><NavigationRule Property="Database" Resource="9c512155-d912-4fcb-9448-0755fbaf1b96" SingleRole="DB1" /><NavigationRule Property="Database" Resource="d1d81888-3ad3-4256-a621-2273aba7c48f" SingleRole="DB2" />...

```

If a `Directory_User` is assigned the SingleRole `DB1` then, the `NavigationRule` indicates that the
property `Database` (in `MicrosoftExchange_Mailbox`) will have the value
`9c512155-d912-4fcb-9448-0755fbaf1b96` (unique id of a `MicrosoftExchange_Database`).

## Display

This step focuses on configuring a nice display for the synchronized list of resources in the UI.

### Navigation

A [Menu Item](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/menuitem/index.md) can be added to
include a link to the resources list in the left menu on the UI home screen.

It is strongly recommended that you gather synchronized resources menu items under parent menu
items. This is usually declared in the `Nav.xml` file in the configuration root folder.

NETWRIX also advises to use a new `MicrosoftExchange Nav.xml` file in the `MicrosoftExchange`
connector's folder to add a `mailboxes` and `databases` menu item.

#### Example

```
Conf/MicrosoftExchange/MicrosoftExchange Nav.xml
...
<MenuItem Identifier="Nav_Connectors_MicrosoftExchange" DisplayName_L1="Microsoft Exchange" DisplayName_L2="Microsoft Exchange" ParentMenuItem="Nav_Connectors">  <MenuItem Identifier="Nav_Connectors_ADMicrosoftExchange_Entry" DisplayName_L1="AD Entries" DisplayName_L2="Entr�es AD" EntityType="ADMicrosoftExchange_Entry" />  <MenuItem Identifier="Nav_Connectors_MicrosoftExchange_Database" DisplayName_L1="Databases" DisplayName_L2="Bases de donn�es" EntityType="MicrosoftExchange_Database" />  <MenuItem Identifier="Nav_Connectors_MicrosoftExchange_Mailbox" DisplayName_L1="Mailboxes" DisplayName_L2="Boites mails" EntityType="MicrosoftExchange_Mailbox" /></MenuItem>...

```

This example adds a new menu item under the `Nav_Connectors` menu item declared in the root
`Conf/Nav.xml` file. This new menu item gives access to the list of synchronized Microsoft Exchange
entities.

![Microsoft Exchange Menu Items](/images/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_menu_item_5.1.7.webp)

### Configuration

It is strongly recommended that the display configuration be written to a new
`MicrosoftExchange UI.xml` file in the `MicrosoftExchange` connector's folder.

#### All-in-One Scaffolding

The
[View Target Resource Template](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/viewtargetresourcetemplate/index.md)
generates all the required elements to be seen by the user.

##### Example

The documentation explains what is generated by the following scaffolding:

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
<ViewTargetResourceTemplate EntityType="MicrosoftExchange_Database" Profile="Administrator" /><ViewTargetResourceTemplate EntityType="MicrosoftExchange_Mailbox" Profile="Administrator" />...

```

The following sections show how to override the elements generated by this scaffolding in order to
provide a more precise display.

#### Display Entity Type

The
[Display Entity Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/displayentitytype/index.md)
describes how a single resource should be displayed.

##### Example

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
<DisplayEntityType Identifier="MicrosoftExchange_Database">  <Property OutputType="BasicCollection" Identifier="Mailboxes" /></DisplayEntityType>...

```

This example configures the following display for
[wolfgang.abendroth@acme.com](mailto:wolfgang.abendroth@acme.com).

![Microsoft Exchange Display Entity Type](/images/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_display_entity_type_5.1.7.webp)

The scalar properties require no configuration: they are automatically displayed. The only
information that the
[Display Entity Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/displayentitytype/index.md)
adds here, is that the property `BasicCollection` is a navigation property. An eye icon will be
displayed to take you directly to the matching page.

#### Display Table

The [Display Table](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/displaytable/index.md)
elements describe how a list of resources should be displayed.

The [Display Table](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/displaytable/index.md)
contains a list of
[Display Table](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/displaytable/index.md) columns
elements that identify which properties should be included in the list display.

##### Example

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
<DisplayTable Identifier="MicrosoftExchange_Database" EntityType="MicrosoftExchange_Database" DisplayTableDesignElement="table" IsEntityTypeDefault="true">  <Column DefaultSortPriority="1" DisplayBinding="Guid" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />  <Column DisplayBinding="Name" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />  <Column DisplayBinding="Server" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /></DisplayTable><DisplayTable Identifier="MicrosoftExchange_Mailbox" EntityType="MicrosoftExchange_Mailbox" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">  <Column DefaultSortPriority="1" DisplayBinding="Guid" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />  <Column DisplayBinding="ServerName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />  <Column DisplayBinding="UserPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /></DisplayTable>...

```

This example configures the following list display:

![Microsoft Exchange Display Table](/images/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_display_table_5.1.7.webp)

#### Internal Display Name

An `InternalDisplayName` can also be declared as an
[Entity Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) property
expression. The `InternalDisplayName` is used in several UI screens to identify a resource for the
user.

With no custom `InternalDisplayName`, a default value is used (instead of the first property of the
identity) containing the string **name**. If no such property is found, the first declared property
of the entity type is used.

##### Example

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
<EntityPropertyExpression Identifier="MicrosoftExchange_Database_InternalDisplayName" Expression="C#:item:return item.Name;" EntityType="MicrosoftExchange_Database" Property="InternalDisplayName" /><EntityPropertyExpression Identifier="MicrosoftExchange_Mailbox_InternalDisplayName" Expression="C#:item:return item.Name;" EntityType="MicrosoftExchange_Mailbox" Property="InternalDisplayName" />...

```

This example adds the `InternalDisplayName` to the `MicrosoftExchange_Mailbox` entity type to be
used by the UI.

### Permissions

This step focuses on setting up permissions for Identity Manager's end-users granting them access to
the connector.

The
[Access Control Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/index.md)
and Access Control Entry elements define
[AccessControlPermission](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/accesscontrolpermission/index.md)
for end-user profiles to read and write the connector's data (such as resources of a given entity
type). It is used by the UI when displaying data such as resources and available roles.

It is strongly recommended that permissions be written to a new file. For example, the administrator
profile permissions can be written to the `MicrosoftExchange Profile Administrator.xml` file.

#### Example

```
Conf/MicrosoftExchange/MicrosoftExchange Profile Administrator.xml
...
<ViewAccessControlRules Profile="Administrator" EntityType="MicrosoftExchange_Database"/><ViewAccessControlRules Profile="Administrator" EntityType="MicrosoftExchange_Mailbox"/>...

```

This example sets permissions for the `Administrator` profile.

It entitles an administrator to display Microsoft Exchange resources (`mailboxes` and `databases`) and role categories from the UI.

## Jobs

### Construction

This step focuses on writing a Complete Synchronization Job.

Netwrix Identity Manager (formerly Usercube) recommends writing Jobs associated with the
MicrosoftExchange connector to the Conf/MicrosoftExchange/MicrosoftExchange Jobs.xml file.

#### Example

```
Conf/MicrosoftExchange/MicrosoftExchange Jobs.xml
...
<CreateConnectorSynchroComplete Connector="MicrosoftExchange" DisplayName_L1="01: Microsoft Exchange - Synchronization Complete (scaffolding)" JobIdentifier="MicrosoftExchange_Synchronize_Complete_Scaffolding">  <OpenIdIdentifier Identifier="Job"/>  <NoSynchronization/></CreateConnectorSynchroComplete>...

```

This job will be executed on Microsoft Exchange's connector agent.

Notice the **Identifier** attribute with the value `Job` in the `OpenIdIdentifier` tag. It refers to
the `ClientId` written to the
[appsettings.agent](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
technical configuration. The Tasks will authenticate with the profile associated with this
`ClientId` in the `<OpenIdClient>` xml configuration element.

There is also the tag `<NoSynchronization/>` which means that the export will not be executed.
Removing the tag will launch export-related tasks before fulfillment-related tasks. Export tasks
need the same XML configuration and additional settings in Fulfill Microsoft Exchange via PowerShell.

All the job steps generated by the scaffolding can be found in the
[Create Connector Synchro Complete](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index.md) scaffolding.

Check [Create Connector Synchro Incremental](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchroincremental/index.md)
for incremental synchronization.

### Permissions

The execution of a Job entails the execution of Tasks, reading/writing to the Database and sending
files over to the Server. These operations are protected by an authorization mechanism.

A [Profile](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/profile/index.md) is required and
must have the proper permissions for the associated Job or Task to perform.

Here, jobs use the default `OpenId`.

### Job Launch

Scheduling the job execution can rely either on Identity Manager's scheduler or an external
scheduler.

#### With Scheduler

Use the [Job](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/job/index.md) Cron Tab Expression attribute.

#### With an external scheduler

An external scheduler would rely on the
[Usercube-Invoke-Job](/docs/identitymanager/6.2/integration-guide/executables/references/invoke-job/index.md) tool.

## Validation

### Deploy Configuration

The configuration is written to the database using the
[Deploy Configuration Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/deployconfigurationtask/index.md)
tool.

### Test

#### ADMicrosoftExchange Prerequisites

An Active Directory configuration is required for Microsoft Exchange to work. Fill the AD Microsoft
Exchange Export Fulfillment settings in accordance with the configuration.

To reset the password, if **AuthType** is `Basic`, then **EnableSSL** must be `true`.
Otherwise, if **AuthType** is `Kerberos`, then **EnableSSL** is not required.

#### Mailbox Creation

To create a new mailbox, apply the following procedure:

1. Select a user and validate both resource types `ADMicrosoftExchange_Entry_NominativeUser` and
   `MicrosoftExchange_Mailbox_NominativeUser`.
2. In the Provisioning Review, confirm both resource types.
3. First, launch the job AD Microsoft Exchange Synchronization.
4. Then, launch the job Microsoft Exchange Synchronization.

In fact, an `ADMicrosoftExchange_Entry` is required to create a mailbox. To update or delete an
existing mailbox, the Active Directory part can be skipped.

#### Interface display

The Synchronization job should be found in the UI, under the **Job Execution** menu, with the name
input in the Job's **DisplayName_Li** attribute.

![Microsoft Exchange Jobs](/images/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_jobs_5.1.7.webp)

From there, the Synchronization job can be launched and debugged (if needed).

After execution, Microsoft Exchange resources and databases should be in the `UR_Resources` table of
the SQL Server database.

The results can also be viewed on the UI:

![Microsoft Exchange Menu Items](/images/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_menu_item_5.1.7.webp)

![Microsoft Exchange Display Entity Type](/images/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_display_entity_type_5.1.7.webp)

![Microsoft Exchange Display Table](/images/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_display_table_5.1.7.webp)
