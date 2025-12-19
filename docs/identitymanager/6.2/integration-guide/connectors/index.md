---
title: "Connectors"
description: "Connectors"
sidebar_position: 40
---

# Connectors

Connectors are Identity Manager's links to the managed systems, the technical representation of the
entity model. A connector is used to export data as CSV source files for Identity Manager's
synchronization process and to fulfill entitlement assignments to a given managed system. See the [Connector](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connector/index.md),[Entity Model](/docs/identitymanager/6.2/integration-guide/entity-model/index.md),
and [Upward Data Synchronization](/docs/identitymanager/6.2/integration-guide/synchronization/upward-data-sync/index.md) topics for
additional information.

## Overview

Connectors are the mechanisms that enable Identity Manager to read and write data to/from your
organization's systems. The feedback mechanism ensures Identity Manager's reliability.

In this documentation, we talk about managed systems (sometimes called external systems) to refer to
third-party applications, i.e. the applications used in your organization, such as Active Directory,
ServiceNow, EasyVista, SAP, SharePoint, etc.

A connector, therefore, acts as an interface between Identity Manager and a managed system.

![Connector Schema](/images/identitymanager/saas/user-guide/set-up/connect-system/connectorcreation_connectorschema.webp)

Netwrix Identity Manager (formerly Usercube)strongly recommends the creation of one connector for
each application.

> For example, integrators may create an `AD` connector with the goal of importing an Active
> Directory's data into Identity Manager, and writing to the Active Directory from Identity Manager,
> either manually for administration accounts, or automatically for basic accounts.
>
> Integrators may create a `SharePoint` connector in order to manage read and write entitlements for
> users in SharePoint.

### Data Flows

In the early steps of a project, we'll consider most of our connectors to be outbound, i.e. Identity
Manager will feed data into connected managed systems.

![Outbound System=](/images/identitymanager/saas/user-guide/set-up/connect-system/connectorcreation_outbound.webp)

In this case, data flows between Identity Manager and the managed system are also called:

- Synchronization in the managed system-to-Identity Manager direction
- Provisioning in the Identity Manager-to-managed system direction

For a connector's synchronization, Identity Manager provides tools to perform a basic extraction of
the system's data in the form of CSV files. These files are cleaned and loaded into Identity
Manager. In other words, synchronizing means taking a snapshot of the managed system's data and
loading into Identity Manager.

For provisioning, Identity Manager generates provisioning orders and the connector provides tools to
either automatically write these orders to the managed system or to create a ticket for manual
provisioning.

> For example, we can use the data from Identity Manager's identity repository to fill in later the
> AD's fields, such as users' display names based on their first names and last names from the
> repository. See the
> [Create the Workforce Repository](/docs/identitymanager/6.2/user-guide/set-up/initial-identities-loading/index.md)
> topic for additional information.

Identity Manager can also benefit from inbound connectors, that will write data to Identity
Manager's central identity repository. While both inbound and outbound connectors allow data to flow
both ways, they do not work in the same manner. See the
[Create an HR Connector](/docs/identitymanager/6.2/user-guide/optimize/hr-connector-creation/index.md) topic for
additional information.

### Technical principles

Identity Manager's connectors all operate on the same basic principles. Technically speaking:

> For example, let's say that we want to connect Identity Manager to our Active Directory, or AD:

- A connector must be created, first as a named container which will include the connections and
  entity types related to one managed system; See the
  [Connector](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connector/index.md) topic for additional
  information.

    > We create a connector named `AD` (so far, an empty shell).

- A connector is linked to an agent which acts as the go-between for Identity Manager's server and
  the managed system; See the [Architecture](/docs/identitymanager/6.2/introduction-guide/architecture/index.md) topic
  for additional information.

    > Our `AD` connector uses the provided SaaS agent.

- A connection describes the technology used that enables data to flow back and forth between
  Identity Manager and the managed system; See the
  [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) topic for additional
  information.

    > We want to use a connection `Directory/Active Directory` to perform synchronization and
    > automated provisioning, and a second connection `Ticket/identitymanager` to perform manual
    > provisioning through Identity Manager.

    You can find standard connections dedicated to one application (AD, Microsoft Entra ID, etc.),
    and generic connections to communicate with any application (CSV, Powershell, RobotFramework,
    SQL, etc.).

- The shape of the extracted managed system's data is modeled by entity types (we will use the term
  resource to refer to an entity type that has been instantiated); See the
  [Entity Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) topic for additional
  information.

    > We create a single entity type `AD - Entry` which contains all the attributes that will
    > describe its resources, i.e. AD groups and users. The attributes include the department, the
    > employee identifier, the manager, the group membership (`member`/`memberOf`), the dn, the
    > parent dn, etc.

- The intent of resources within the managed system is made clear by categorizing resources into
  resource types. See the
  [Resource Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md) and
  [Categorize Resources](/docs/identitymanager/6.2/user-guide/set-up/categorization/index.md) topics for additional
  information.

    > We categorize AD resources into distinct resource types: `AD User (nominative)` for basic
    > accounts, which we want Identity Manager to provision automatically;
    > `AD User (administration)` for sensitive administration accounts, which we want to provision
    > manually through Identity Manager.

![Connector Technical Schema](/images/identitymanager/saas/user-guide/set-up/connect-system/connectorcreation_connectortechnicalschema.webp)

A connector requires at least one connection and one entity type.

When provisioning a managed system, the corresponding connector also needs at least one resource
type.

**Local vs. Saas agents** — To simplify things, Identity Manager has made it possible to start
configuring connectors without installing a local agent in your organization's network. Instead, you
can use the agent integrated with Identity Manager's server in the Cloud (SaaS agent). See the
[Architecture](/docs/identitymanager/6.2/introduction-guide/architecture/index.md) topic for additional information.

## Configure a Connector

Netwrix Identity Manager (formerly Usercube)recommends creating and configuring a connector via the
UI. See the [Connect to a Managed System](/docs/identitymanager/6.2/user-guide/set-up/connect-system/index.md) topic
for additional information.

## Supported Systems

| Connector                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Synchronization | Provisioning |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------ |
| Active Directory                                 | Exports and fulfills data from/to an Active Directory instance. See the [Active Directory](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/activedirectory/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                              | √               | √            |
| Azure                                            | Exports Azure resources, role definitions and role assignments. See the [Azure](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/azure/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                 | √               | X            |
| Microsoft Entra ID (formerly Microsoft Azure AD) | Exports and fulfills data from/to a Microsoft Entra ID instance. See the Microsoft Entra ID, [For Microsoft Entra ID](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/create-connector/entra-ID/index.md), and [For Microsoft Entra ID](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/setup-incremental-sync/entra-ID/index.md) topics for additional information.                                                                                                                                                                                             | √               | X            |
| CSV                                              | Exports data from a CSV file. See the [CSV](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/csv/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                       | √               | X            |
| EasyVista                                        | Exports data from an EasyVista-compliant system. See the [EasyVista](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/easyvista/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                        | √               | √            |
| EasyVista Ticket                                 | Creates tickets in an EasyVista instance. See the [EasyVista Ticket](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/easyvistaticket/index.md) and [Write a Template for a Ticket Connector](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/write-ticket-template/index.md) topics for additional information.                                                                                                                                                                                                                                         | X               | √            |
| Google Workspace                                 | Exports and fulfills users and groups from/to a Google Workspace instance. See the [Google Workspace](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/googleworkspace/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                 | √               | √            |
| Home Folder                                      | Export home folders from input directories. See the [Home Folder](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/homefolder/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                          | √               | X            |
| InternalResources                                | Opens manual provisioning tickets in Identity Manager. See the [Internal Resources](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/internalresources/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                   | X               | √            |
| InternalWorkflow                                 | Retrieves provisioning order files from a connector or a resource type list, and starts a workflow accordingly. See the [InternalWorkflow](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/internalworkflow/index.md) topic for additional information.                                                                                                                                                                                                                                                             | X               | √            |
| Json                                             | Generates JSON files for each provisioning order. See the [JSON](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/json/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                   | X               | √            |
| LDAP                                             | Exports and fulfills data from/to an LDAP-compliant system. See the [LDAP](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/ldap/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                       | √               | √            |
| LDIF                                             | Generates CSV source files from an LDIF file. See the [LDIF](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/ldif/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                       | √               | X            |
| Microsoft Excel                                  | Exports data from an XLSX file. See the [Microsoft Excel](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/excel/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                       | √               | X            |
| Microsoft Exchange                               | Exports data from a Microsoft Exchange instance. See the [Microsoft Exchange](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/microsoftexchange/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                       | √               | √            |
| OData                                            | Exports entities from an OData instance. See the [OData](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/odata/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                        | √               | X            |
| OpenLDAP                                         | Exports and fulfills from/to an OpenLDAP directory. See the [OpenLDAP](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/openldap/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                       | √               | √            |
| PowerShell                                       | Executes PowerShell scripts to generate CSV source files from otherwise unsupported sources. See the [PowerShellProv](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/powershellprov/index.md), [Write a PowerShell Script for Provisioning](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/write-fulfill-powershell-script/index.md), and [Fulfill Microsoft Exchange via PowerShell](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/powershell-fulfill/index.md) topics for additional information.                                                                                       | X               | √            |
| RACF                                             | Exports data from a RACF file. See the [RACF](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/racf/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                    | √               | X            |
| Robot Framework                                  | Executes Robot Framework scripts to fulfill data to external systems. See the [Robot Framework](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/robotframework/index.md), [Write a Robot Framework Script](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/write-fulfill-robotframework-script/index.md), [Interact with a Web Page via Robot Framework](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/interact-web-page-robotframework/index.md), and [Interact with a GUI Application via Robot Framework](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/interact-gui-robotframework/index.md) topics for additional information. | X               | √            |
| SAP                                              | Exports and fulfills data from/to an SAP system. See the [SAP Netweaver](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/sapnetweaver/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                 | √               | X            |
| SAP ERP 6.0                                      | Exports and fulfills data from/to an SAP ERP 6.0 system. See the [SAP ERP 6.0 and SAP S4/HANA](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/saperp6/index.md) topics for additional information.                                                                                                                                                                                                                                                                                                                 | √               | √            |
| SCIM                                             | Exports and fulfills data from/to a SCIM-compliant web application. See the [SCIM](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/scim/index.md), [Export CyberArk Data via SCIM](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/scim-cyberark-export/index.md) and [Provision Salesforce Users' Profiles via SCIM](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/scim-salesforce-provisioning-entitlements/index.md) topics for additional information.                                                                                                                                    | √               | √            |
| ServiceNow Entity Management                     | Manages ServiceNow entities. See the [ServiceNow](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/servicenowentitymanagement/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                          | √               | √            |
| ServiceNow Ticket                                | Creates tickets in ServiceNow. See the [ServiceNowTicket](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/servicenowticket/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                            | X               | √            |
| SharedFolder                                     | Scans a Windows file directory and exports a list of folders, files, users and their associated permissions. See the [SharedFolders](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/sharedfolder/index.md) topic for additional information.                                                                                                                                                                                                                                                                     | √               | X            |
| SharePoint                                       | Exports a SharePoint's list of objects, users, groups, roles and their relationships. See the [SharePoint](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/sharepoint/index.md) and [Set up SharePoint's Export and Synchronization](/docs/identitymanager/6.2/integration-guide/connectors/configuration-details/sharepoint-export/index.md) topics for additional information.                                                                                                                                                                                                          | √               | √            |
| SQL                                              | Exports data from various Database Management Systems. See the [Sql](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/sql/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                              | √               | X            |
| SQL Server Entitlements                          | Exports server and database principals from Microsoft SQL Server. See the [Sql Server Entitlements](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/sqlserverentitlements/index.md) topic for additional information.                                                                                                                                                                                                                                                                                             | √               | X            |
| Top Secret                                       | Exports the Top Secret (TSS) users and profiles. See the [Top Secret](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/topsecret/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                       | √               | X            |
| Workday                                          | Exports data from a Workday instance. See the [Workday](/docs/identitymanager/6.2/integration-guide/connectors/references-connectors/workday/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                       | √               | X            |
