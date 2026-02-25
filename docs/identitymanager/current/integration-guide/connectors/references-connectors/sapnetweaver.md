---
title: "SAP Netweaver"
description: "SAP Netweaver"
sidebar_position: 240
---

# SAP Netweaver

This connector exports and fulfills users and roles from/to an [SAP Netweaver](https://www.sap.com/france/products/technology-platform/hana/what-is-sap-hana.html) instance.

This page is about [SAP S/4 HANA](../../../integration-guide/connectors/references-packages/saphana).

![Package: ERP/SAP S/4 HANA](/images/identitymanager/integration-guide/connectors/references-connectors/sapnetweaver/packages_sap_v603.webp)

## Overview

SAP ERP is an enterprise resource planning software developed by the German company SAP SE. The software incorporates the key business functions of an organization. ERP software includes programs in all core business areas, such as procurement, production, materials management, sales, marketing, finance, and human resources (HR).

## Prerequisites

Implementing this connector requires:

- reading first the
[appsettings.agent](../../../integration-guide/network-configuration/agent-configuration/appsettings-agent)documentation;
- a service account with reading and writing permissions on the SAP server.

## Export

This connector exports users, roles, role memberships and groups from an SAP instance and writes the output to CSV files.

### Configuration

This process is configured through a [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

```json
appsettings.agent.json
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
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "SAPExportFulfillment": {
>         "Server": "serverUrl",
>         "Login": "login",
>         "Password": "password"
>     }
>   }
> }
> ```

#### Setting attributes

 | Name | Details | 
 | --- | --- | 
 | Server required | **Type** String **Description** URL of the SAP server. | 
 | Login required | **Type** String **Description** Login to authenticate to the specified server. | 
 | Password required | **Type** String **Description** Password to authenticate to the specified server. | 

### Output details

This connector is meant to generate to the [Application Settings](../../../integration-guide/network-configuration/agent-configuration/appsettings)Export Output folder the following CSV files:

- `sap_users.csv` with the following columns:

``` sap_users.csv Command,logonname,isserviceuser,firstname,lastname,salutation,title,jobtitle,mobile,displayname,description,email,fax,locale,timezone,validfrom,validto,lastmodifydate,islocked,isaccountlocked,ispasswordlocked,ispassworddisabled,telephone,department,id,securitypolicy,datasource,company,streetaddress,city,zip,pobox,country,state,orgunit,accessibilitylevel,passwordchangerequired Insert,value1,value2,...,valueN ```
- `sap_groups.csv` with the following columns:
``` sap_groups.csv Command,uniquename,displayname,description,lastmodifydate,id,datasource,distinguishedname Insert,value1,value2,...,valueN ```

- `sap_roles.csv` with the following columns:

``` sap_roles.csv Command,uniquename,displayname,description,lastmodifydate,id,datasource,scopes,actions Insert,value1,value2,...,valueN ```
- `sap_roles_member.csv` with the following columns:
``` sap_roles_member.csv Command,id,member Insert,value1,value2,...,valueN ```

## Fulfill

This connector writes to SAP to create, update, and/or delete users, groups, roles and group memberships.

### Configuration

Same as for export, fulfill is configured through connections.

#### Setting attributes

 | Name | Details | 
 | --- | --- | 
 | Server required | **Type** String **Description** URL of the SAP server. | 
 | Login required | **Type** String **Description** Login to authenticate to the specified server. | 
 | Password required | **Type** String **Description** Password to authenticate to the specified server. | 

> For example:
>
> ```
> appsettings.agent.json
> {
>  "Connections": {
>     "SAPExportFulfillment": {
>         "Server": "serverUrl",
>         "Login": "login",
>         "Password": "password"
>     }
>   }
> }
> ```

## Authentication

### Password reset

See the [appsettings.agent](../../../integration-guide/network-configuration/agent-configuration/appsettings-agent) topic to learn more on how to configure password reset settings.

When setting a password for an SAP user, the password attribute is defined by the password specified in the corresponding [Resource Type Mappings](../../../integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings).

### Credential protection

Data protection can be ensured through:

- [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection), configured in
the `appsettings.encrypted.agent.json` file;
- An [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) safe;

 | Attribute | Naming Convention for the Key in Azure Key Vault | 
 | --- | --- | 
 | Server | `Connections--<identifier>--Server` | 
 | Login | `Connections--<identifier>--Login` | 
 | Password | `Connections--<identifier>--Password` | 

- A [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) able to store
Active Directory's `Login`, `Password` and `Server`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

> For example:
>
> ```
> appsettings.cyberark.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "SAPExportFulfillment": {
>         "Login": "SAPExportFulfillment_CyberArkKey",
>         "Password": "SAPExportFulfillment_CyberArkKey",
>         "Server": "SAPExportFulfillment_CyberArkKey"
>     }
>   }
> }
> ```

