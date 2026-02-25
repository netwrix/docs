---
title: "Create a Connector"
description: "Create a Connector"
sidebar_position: 70
---

# Create a Connector

How to implement a [Connector](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connector/index.md) via XML to connect Identity Manager to an external system.

See an example on how to register [For Microsoft Entra ID](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/create-connector/entra-ID/index.md).

Netwrix Identity Manager (formerly Usercube) strongly recommends configuring as much as possible via
the UI instead of XML files. See the
[Connect to a Managed System](/docs/identitymanager/6.2/user-guide/set-up/connect-system/index.md) topic to
learn how to create a connector via the UI.

## Prerequisites

### Configure the external system

Some systems need additional configuration for Identity Manager to connect.

### Configure Identity Manager

Identity Manager's agent must be set up to access the system's data via the related connector.

Netwrix Identity Manager (formerly Usercube) recommends performing the configuration via Identity
Manager's configuration files like `appsettings.json` and `appsettings.agent.json`. However, these
settings can also be input through environment variables. See the
[Network Configuration](/docs/identitymanager/6.2/integration-guide/network-configuration/index.md) topic for additional information.

This process is configured through a
[Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

                    ```

**appsettings.agent.json**

{ ... "Connections": { ... "<ConnectionIdentifier>": { ... } } }

````


The identifier of the connection and thus the name of the subsection must:

- Be unique.

- Not begin with a digit.

- Not contain ```<```, ```>```, ```:```, ```"```, ```/```, ```\```, ```|```, ```?```, ```*``` and ```_```.

Netwrix Identity Manager (formerly Usercube) recommends completing this guide without credential protection, and once the configuration works switch to a more secure way of storing credentials.

See the [
Microsoft Entra ID](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/microsoftentraid/index.md) topic to learn how to protect Microsoft Entra ID's credentials.

## Build the Connector

See the [Connect to a Managed System](/docs/identitymanager/6.2/user-guide/set-up/connect-system/index.md) topic to learn how to build a connector via the UI, with its connections, entity types and mappings.

When exporting the configuration, a ```<connectorName>``` connector should be found in the ```Conf/<connectorName>/<connectorName> Connector.xml``` file.

All XML files must start with the ```<?xml>``` and ```<ConfigurationFile>``` elements.

### Entity model

The [Entity Model](/docs/identitymanager/6.2/integration-guide/entity-model/index.md) of the connector defines how the exported data will be written to Identity Manager's repository. It should match as closely as possible the structure of the relevant data from the external system, and be aligned with Identity Manager's repository.

The entity model is configured by entity type and entity association containing scalar and navigation properties. See the [Entity Model](/docs/identitymanager/6.2/integration-guide/entity-model/index.md)[Entity Association](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md), and [Entity Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) topics for additional information.

The entity model can be refined later in the project.

### Entity mapping

Each property of the entity type must be mapped to an attribute from among those exported from the system.

Entity mapping is configured through [Entity Type Mapping](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) and [Entity Association Mapping](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md).

So each element of an entity type mapping is meant to link a property from the result of the CSV export file containing the exported attributes to a property from the entity type.

In the mapping, the CSV file is identified by the ```ConnectionTable``` and the entity type by the ```Identifier```.

An association mapping is the equivalent of an entity type mapping, but for the properties of an entity association instead of an entity type.

## Display the Connector in the UI

### Menu items

Identity Manager provides a menu item to list all connectors in the dashboard's left menu.

![Menu Item - Connectors](/images/identitymanager/user-guide/set-up/synchronization/home_entitytypes_v602.webp)

> It is usually written like this:
>
>                         ```
>
>                             Runtime/Bootstrap/Nav.xml
>
> <MenuItem Identifier="Nav_Connectors" DisplayName_L1="Connectors" ParentMenuItem="Nav" />
>
> ```

Then each connector should be configured with a menu item, which is created automatically when working via the UI.

### Displayed resources

See the [Organize Resources' Datasheets](/docs/identitymanager/6.2/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/index.md) to learn more on how to set the display properties via the UI.

In the XML configuration, scalar properties are automatically displayed in the datasheets of the connector's resources. But navigation properties must be declared explicitly.

The properties to be displayed are configured through [Display Entity Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/displayentitytype/index.md).

Microsoft Entra ID's resources are listed in a table.

The resources are displayed in a table configurable through a [Display Table](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/user-interface/displaytable/index.md).

### Resources' display names

See the [Set Resources' Display Names](/docs/identitymanager/6.2/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/index.md) to learn how to set resources' display names via the UI.

Each resource is displayed in the UI with a display name.

Resources' display names are customizable through [Entity Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
property expression.

### Permissions

In order to access the connector, a user must have the right permissions.

Permissions within Identity Manager are configured through [Access Control Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/index.md).
````
