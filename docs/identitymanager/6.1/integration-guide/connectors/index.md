---
title: "Connectors"
description: "Connectors"
sidebar_position: 40
---

# Connectors

[Connectors](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connector/index.md)
are Usercube's links to the managed systems, the technical representation of the
[entity model](/docs/identitymanager/6.1/integration-guide/entity-model/index.md). A
connector is used to export data as CSV source files for Usercube's
[synchronization process](/docs/identitymanager/6.1/integration-guide/synchronization/upward-data-sync/index.md)
and to fulfill entitlement assignments to a given managed system.

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

## Configure a Connector

NETWRIX recommends
[creating and configuring a connector via the UI](/docs/identitymanager/6.1/user-guide/set-up/connect-system/index.md).

## Supported Systems

|                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Active Directory**                                 | Exports and fulfills data from/to an Active Directory instance. [Active Directory References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/activedirectory/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Azure**                                            | Exports Azure resources, role definitions and role assignments. [Azure References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/azure/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Microsoft Entra ID** (formerly Microsoft Azure AD) | Exports and fulfills data from/to a Microsoft Entra ID instance. [Microsoft Entra ID References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/azuread/index.md) How to create a Microsoft Entra ID connector How to set up incremental synchronization for Entra ID                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **CSV**                                              | Exports data from a CSV file. [CSV References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/csv/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **EasyVista**                                        | Exports data from an EasyVista-compliant system. [EasyVista References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/easyvista/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **EasyVista Ticket**                                 | Creates tickets in an EasyVista instance. [EasyVista Ticket References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/easyvistaticket/index.md) [How to Write a Template for a Ticket Connector](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/write-ticket-template/index.md)                                                                                                                                                                                                                                                                                                                                                                                          |
| **Google Workspace**                                 | Exports and fulfills users and groups from/to a Google Workspace instance. [Google Workspace References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/googleworkspace/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Home Folder**                                      | Export home folders from input directories. [Home Folder References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/homefolder/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **InternalResources**                                | Opens manual provisioning tickets in Usercube. [InternalResources References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/internalresources/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **InternalWorkflow**                                 | Retrieves provisioning order files from a connector or a resource type list, and starts a workflow accordingly. [InternalWorkflow References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/internalworkflow/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Json**                                             | Generates JSON files for each provisioning order. [ToFile References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/json/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **LDAP**                                             | Exports and fulfills data from/to an LDAP-compliant system. [LDAP References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/ldap/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **LDIF**                                             | Generates CSV source files from an LDIF file. [LDIF References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/ldif/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Microsoft Excel**                                  | Exports data from an XLSX file. [Microsoft Excel References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/excel/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Microsoft Exchange**                               | Exports data from a Microsoft Exchange instance. [Microsoft Exchange References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/microsoftexchange/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **OData**                                            | Exports entities from an OData instance. [OData References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/odata/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **OpenLDAP**                                         | Exports and fulfills from/to an OpenLDAP directory. [OpenLDAP References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/openldap/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **PowerShell**                                       | Executes PowerShell scripts to generate CSV source files from otherwise unsupported sources. [PowerShell References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/powershellprov/index.md) [How to Write a Powershell Script](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/write-fulfill-powershell-script/index.md) [How to Fulfill a PowerShell-compliant system via PowerShell](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/powershell-fulfill/index.md)                                                                                                                                                                            |
| **RACF**                                             | Exports data from a RACF file. [RACF References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/racf/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Robot Framework**                                  | Executes Robot Framework scripts to fulfill data to external systems. [Robot Framework References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/robotframework/index.md) [How to Write a Robot Framework Script](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/write-fulfill-robotframework-script/index.md) [How to Interact with a Web Page via Robot Framework](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/interact-web-page-robotframework/index.md) [How to Interact with a GUI application via Robot Framework](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/interact-gui-robotframework/index.md) |
| **SAP**                                              | Exports and fulfills data from/to an SAP system. [SAP References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/saphana/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **SAP ERP 6.0**                                      | Exports and fulfills data from/to an SAP ERP 6.0 system. [SAP ERP 6.0 References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/saperp6/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **SCIM**                                             | Exports and fulfills data from/to a SCIM-compliant web application. [SCIM References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/scim/index.md) [How to Export CyberArk Data via SCIM](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/scim-cyberark-export/index.md) [How to Provision Salesforce Users' Profiles via SCIM](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/scim-salesforce-provisioning-entitlements/index.md)                                                                                                                                                                                                            |
| **ServiceNow Entity Management**                     | Manages ServiceNow entities. [ServiceNow Entity Management References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/servicenowentitymanagement/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **ServiceNow Ticket**                                | Creates tickets in ServiceNow. [ServiceNow Ticket References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/servicenowticket/index.md) [How to Write a Template for a Ticket Connector](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/write-ticket-template/index.md)                                                                                                                                                                                                                                                                                                                                                                                                   |
| **SharedFolder**                                     | Scans a Windows file directory and exports a list of folders, files, users and their associated permissions. [SharedFolder References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/sharedfolder/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **SharePoint**                                       | Exports a SharePoint's list of objects, users, groups, roles and their relationships. [SharePoint References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/sharepoint/index.md) [How to Set up SharePoint's Export and Synchronization](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/sharepoint-export/index.md)                                                                                                                                                                                                                                                                                                                                                      |
| **SQL**                                              | Exports data from various Database Management Systems. [SQL References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/sql/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **SQL Server Entitlements**                          | Exports server and database principals from Microsoft SQL Server. [SQL Server Entitlements References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/sqlserverentitlements/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Top Secret**                                       | Exports the Top Secret (TSS) users and profiles. [TSS References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/topsecret/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Workday**                                          | Exports data from a Workday instance. [Workday References](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/workday/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
