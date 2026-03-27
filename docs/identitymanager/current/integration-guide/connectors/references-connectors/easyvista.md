---
title: "EasyVista"
description: "EasyVista"
sidebar_position: 50
---

# EasyVista

This connector exports and fulfills users from/to an [EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/?language=en)-compliant system.

This page is about EasyVista .

![Package: ITSM/EasyVista](/images/identitymanager/integration-guide/connectors/references-connectors/easyvista/packages_easyvista_v603.webp)

## Overview

EasyVista is an IT Service Manager that provides a service to organize IT resources in a company by using tickets. This allows users to manage projects, materials and teams through a customizable interface.

## Prerequisites

Implementing this connector requires:

- Reading first the
[appsettings.agent](../../../integration-guide/network-configuration/agent-configuration/appsettings-agent) topic;
- An EasyVista account with reading/writing permissions on the target instance;
- A view to be created in EasyVista for each type of entity to export.

## Export

This connector exports a list of users, with their attributes specified in the connector's configuration, to CSV files.

It can also export any custom entity, provided that a view exists for it in EasyVista.

### Configuration

This process is configured through a [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) in the UI and/or the XML configuration, and in the `*appsettings.agent.json* > Connections` section:

```json
*appsettings.agent.json*
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> *appsettings.agent.json*
> {
>     "Connections": {
>         ...
>         "ExportEasyVista": {
>             "Server": "https://easy-vista.instance.com/",
>             "Account": "11111",
>             "Login": "username",
>             "Password": "userPassword",
>             "ExportSettingsOptions": {
>                 "Profiles": "https://easy-vista.instance.com/api/v1/11111/internalqueries?queryguid={019B0523-F1C4-4G84-AA04-47BA16F16EB2}&filterguid={Z8A61D04-EZEC-42F1-A3E1-E9E09654BE68}&viewguid={2740V37A-A0ZC-4E50-A1F1-CF0987B9EFEA}"
>             }
>         }
>     }
> }
> ```

The `ExportSettingsOptions` attribute is necessary only if custom entities are exported. It is not required if only the users are exported. Besides, `"Profiles"` is used here as an example and corresponds to a name to identify the exported entities.

#### Setting attributes

 | Name | Details | 
 | --- | --- | 
 | Server required | **Type** String **Description** URI of the server to connect to. | 
 | Account required | **Type** String **Description** Account to use to connect to the EasyVista instance. | 
 | Login required | **Type** String **Description** Username to use to connect to the EasyVista instance. | 
 | Password required | **Type** String **Description** Password to use to connect to the EasyVista instance. | 
 | --- | --- | 
 | --- | --- | 
 | ExportSettingsOptions optional | **Type** List **Description** List of entities to retrieve from the EasyVista instance. **Note:** for any customized entity to be exported, this argument must contain its REST API URL. **Get REST API URLs** Access the relevant view in EasyVista and click on **...** > **Rest API Url** to copy the URL. For example: ![EasyVista Profiles View](/images/identitymanager/integration-guide/connectors/references-connectors/easyvista/easyvista_view_v523.webp) | 

### Output details

This connector is meant to generate to the [Application Settings](../../../integration-guide/network-configuration/agent-configuration/appsettings) export output folder:

- a CSV file, named `<connectionIdentifier>_Employees.csv`, with one column for each property having
a `ConnectionColumn` and each property without it but used in an entity association;
- a CSV file for each customized entity, named `<connectionIdentifier>_<EntityName>.csv`.

> For example, with the following entity type mapping for employees:
>
> ```
>
> <EntityType Identifier="EasyVista_User" DisplayName_L1="EasyVista User">  <Property Identifier="lastName" DisplayName_L1="lastName" TargetColumnIndex="0" Type="String" /></EntityType><EntityTypeMapping Identifier="EasyVista_User" Connector="ExportEasyVista" ConnectionTable="EasyVistaExport_Employees">  <Property Identifier="lastName" <b>ConnectionColumn="last_name"</b> /></EntityTypeMapping>
>
> ```
>
> And the following entity type mapping for profiles:
>
> ```
>
> EntityType Identifier="EasyVista_Profiles" DisplayName_L1="EasyVista Profiles"  Property Identifier="NAME_EN" DisplayName_L1="NAME_EN" TargetColumnIndex="23" Type="String" Type="String" IsKey="true" //EntityTypeEntityTypeMapping Identifier="EVProfiles" Connector="ExportEasyVista" ConnectionTable="EasyVistaExport_Profiles"  Property Identifier="PROFILE_GUID">>>> ><<<<<<ConnectionColumn="PROFILE_GUID" IsPrimaryKey="true" /  Property Identifier="NAME_EN" ConnectionColumn="NAME_EN" IsPrimaryKey="true" /></EntityTypeMapping>
>
> ```
>
> Then we will have `C:/identitymanagerContoso/Sources/*EasyVistaExport_Employees.csv*` as follows:
>
> ```
> *EasyVistaExport_Employees.csv*
> last_name
> Talma Bart
> Tanner Carol
> Taverner David
> Taylor Eric
> Telemann Franck
> Thomson Georges
> ...
>
> ```
>
> Then we will have `C:/identitymanagerContoso/Sources/*EasyVistaExport_Profiles.csv*` as follows:
>
> ```
> *EasyVistaExport_Profiles.csv*
> NAME_EN, PROFILE_GUID
> Administration {value of the PROFILE_GUID}
> LOB Manager {value of the PROFILE_GUID}
> Product Team {value of the PROFILE_GUID}
> Project Manager {value of the PROFILE_GUID}
> ...
>
> ```

Users created from the API are retrieved by Identity Manager only after a complete synchronization.

## Fulfill

The EasyVista connector writes to EasyVista to **create**, **archive** (delete from Identity Manager's point of view) and **update** employees, initiated manually through the UI or automatically by reinforcing the policy. See the [Evaluate Policy](../../../integration-guide/role-assignment/evaluate-policy) topic for additional information.

### Configuration

Same as for export, fulfill is configured through connections.

> For example:
>
> ```
> *appsettings.agent.json*
> {
>   ...
>   "Connections": {
>     ...
>     "FulfillEasyVista": {
>         "Server": "https://easy-vista.instance.com/",
>         "Account": "11111",
>         "Login": "username",
>         "Password": "userPassword"
>     }
>   }
> }
> ```

#### Setting attributes

 | Name | Details | 
 | --- | --- | 
 | Server required | **Type** String **Description** URI of the server to connect to. | 
 | Account required | **Type** String **Description** Account to use to connect to the EasyVista instance. | 
 | Login required | **Type** String **Description** Username to use to connect to the EasyVista instance. | 
 | Password required | **Type** String **Description** Password to use to connect to the EasyVista instance. | 

### Output details

This connector can:

- **create** and **update** employees and their profiles, but is limited by
[API limitations](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20Create%20an%20employee/);

In particular, this connector cannot set dates nor the `employee_id` property.

- **archive** employees, i.e. set the `CONTRACT_END_DATE` to the date of the fulfill execution.

This action is performed when Identity Manager fulfills a provisioning order with a `Deleted` change type.

## Authentication

### Password reset

See the [appsettings.agent](../../../integration-guide/network-configuration/agent-configuration/appsettings-agent) topic to find out more on how to configure password reset settings.

### Credential protection

Data protection can be ensured through:

- [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection),
configured in the `appsettings.encrypted.agent.json` file;
- [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) safe;

- A
[CyberArk's AAM Credential Providers ](../../../integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers) able to store EasyVista's `Login`, `Password`, `Account` and `Server`.

