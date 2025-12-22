---
title: "Connect to a Managed System"
description: "Connect to a Managed System"
sidebar_position: 50
---

# Connect to a Managed System

How to create a new
[connector](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connector/index.md)
using the provided SaaS
[agent](/docs/identitymanager/6.1/introduction-guide/architecture/index.md).

Usercube provides demo applications
([Banking](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/demoapp-banking/index.md)
and
[HR](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/demoapp-hr/index.md))
to help set up connectors, test them, and understand Usercube's abilities towards external systems.

## Overview

Connectors are the mechanisms that enable Usercube to read and write data to/from your
organization's systems. The
[feedback](/docs/identitymanager/6.1/introduction-guide/more-info/index.md) mechanism
ensures Usercube's reliability.

In this documentation, we talk about managed systems (sometimes called external systems) to refer to
third-party applications, i.e. the applications used in your organization, such as Active Directory,
ServiceNow, EasyVista, SAP, SharePoint, etc.

A connector, therefore, acts as an interface between Usercube and a managed system.

![Connector Schema](/images/identitymanager/6.1/user-guide/set-up/connect-system/connectorcreation_connectorschema.webp)

NETWRIX strongly recommends the creation of one connector for one application.

> For example, integrators may create an `AD` connector with the goal of importing an Active
> Directory's data into Usercube, and writing to the Active Directory from Usercube, either manually
> for administration accounts, or automatically for basic accounts.
>
> Integrators may create a `SharePoint` connector in order to manage read and write entitlements for
> users in SharePoint.

### Data Flows

In the early steps of a project, we'll consider most of our connectors to be outbound, i.e. Usercube
will feed data into connected managed systems.

![Outbound System=](/images/identitymanager/6.1/user-guide/set-up/connect-system/connectorcreation_outbound.webp)

In this case, data flows between Usercube and the managed system are also called:

- [synchronization](/docs/identitymanager/6.1/integration-guide/synchronization/index.md)
  in the "managed system-to-Usercube" direction;
- [provisioning](/docs/identitymanager/6.1/integration-guide/provisioning/index.md) in
  the "Usercube-to-managed system" direction.

For a connector's synchronization, Usercube provides tools to perform a basic extraction of the
system's data in the form of CSV files. These files are cleaned and loaded into Usercube. In other
words, synchronizing means taking a snapshot of the managed system's data and loading into Usercube.

For provisioning, Usercube generates provisioning orders and the connector provides tools to either
automatically write these orders to the managed system or to create a ticket for manual
provisioning.

> For example, we can use the data from Usercube's
> [identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md)
> to fill in later the AD's fields, such as users' display names based on their first names and last
> names from the repository.

Usercube can also benefit from inbound connectors, that will write data to Usercube's central
identity repository. While both inbound and outbound connectors allow data to flow both ways, they
do not work in the same manner.
[See more details about this advanced topic](/docs/identitymanager/6.1/user-guide/optimize/hr-connector-creation/index.md).

### Technical principles

Usercube's connectors all operate on the same basic principles. Technically speaking:

> For example, let's say that we want to connect Usercube to our Active Directory, or AD.

- a
  [connector](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connector/index.md)
  must be created, first as a named container which will include the connections and entity types
  related to one managed system;

    > We create a connector named `AD` (so far, an empty shell).

- a connector is linked to an
  [agent](/docs/identitymanager/6.1/introduction-guide/architecture/index.md) which acts
  as the go-between for Usercube's server and the managed system;

    > Our `AD` connector uses the provided SaaS agent.

- a
  [connection](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)
  describes the technology used that enables data to flow back and forth between Usercube and the
  managed system;

    > We want to use a connection `Directory/Active Directory` to perform synchronization and
    > automated provisioning, and a second connection `Ticket/identitymanager` to perform manual
    > provisioning through Usercube.

    You can find standard connections dedicated to one application (AD, Microsoft Entra ID, etc.),
    and generic connections to communicate with any application (CSV, Powershell, RobotFramework,
    SQL, etc.).

- the shape of the extracted managed system's data is modeled by
  [entity types](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
  (we will use the term resource to refer to an entity type that has been instantiated);

    > We create a single entity type `AD - Entry` which contains all the attributes that will
    > describe its resources, i.e. AD groups and users. The attributes include the department, the
    > employee identifier, the manager, the group membership (`member`/`memberOf`), the dn, the
    > parent dn, etc.

- the intent of resources within the managed system is made clear by categorizing resources into
  [resource types](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md).
  More details are given when tackling
  [categorization](/docs/identitymanager/6.1/user-guide/set-up/categorization/index.md).

    > We categorize AD resources into distinct resource types: `AD User (nominative)` for basic
    > accounts, which we want Usercube to provision automatically; `AD User (administration)` for
    > sensitive administration accounts, which we want to provision manually through Usercube.

![Connector Technical Schema](/images/identitymanager/6.1/user-guide/set-up/connect-system/connectorcreation_connectortechnicalschema.webp)

A connector requires at least one connection and one entity type.

When provisioning a managed system, the corresponding connector also needs at least one resource
type.

**Local vs. Saas agents:** To simplify things, Usercube has made it possible to start configuring
connectors without installing a local
[agent](/docs/identitymanager/6.1/introduction-guide/architecture/index.md) in your
organization's network. Instead, you can use the agent integrated with Usercube's server in the
Cloud (SaaS agent).

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
functional and technical details of the application.

| Input                                                                                                                                                                                                                                                                                                                                                                                                                           | Output                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Administrator account for the [development environment](/docs/identitymanager/6.1/user-guide/set-up/development-environment-installation/index.md) (required) [Identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md) (required) [User profiles](/docs/identitymanager/6.1/user-guide/set-up/user-profile-configuration/index.md) (required) | Connector Connected System |

## Create a Target Connector

For one managed system, create a connector by proceeding as follows:

1. Outside Usercube,
   [model](/docs/identitymanager/6.1/user-guide/set-up/connect-system/connector-modeling/index.md)
   the system's data structure.
2. [Create a connector](/docs/identitymanager/6.1/user-guide/set-up/connect-system/connector-declaration/index.md)
   for said managed system.
3. Enable the technical transfer of data by
   [creating and configuring connections](/docs/identitymanager/6.1/user-guide/set-up/connect-system/connection-creation/index.md).
4. [Set up entity types](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/index.md)
   to represent the data model decided upon in step 1.

**Connector modification:** The process for modifying a connector is not so different from the
process for creating a connector, as you mainly modify the fields specified during creation.
However, keep in mind that a connector must be deactivated before modification, in order to withdraw
the connector's synchronization- and provisioning-related tasks from any jobs. See below this note.

You can activate the connector again at any time using the same button.

![Jobs Results Dashboard](/images/identitymanager/6.1/user-guide/set-up/synchronization/synchro_dashboard_v522.webp)

## Next Steps

Once the connector has been created, you can start
[configuring synchronization](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md).
