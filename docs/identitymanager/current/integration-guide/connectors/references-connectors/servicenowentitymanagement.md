---
title: "ServiceNow"
description: "ServiceNow"
sidebar_position: 260
---

# ServiceNow

This connector exports and fulfills any data, including users and roles, from/to a [ServiceNow CMDB](https://www.servicenow.com/products/servicenow-platform/configuration-management-database.html).

This page is about [ServiceNow](../../../integration-guide/connectors/references-packages/servicenow).

![Package: ITSM/ServiceNow](/images/identitymanager/integration-guide/connectors/references-connectors/servicenowentitymanagement/packages_servicenow_v603.webp)

## Overview

ServiceNow is a cloud-based company that provides software as a service (SaaS) for technical management support. The company specializes in IT service management (ITSM), IT operations management (ITOM) and IT business management (ITBM), allowing users to manage projects, teams and customer interactions via a variety of apps and plugins. This section focuses on ServiceNow Entity Management. To learn about how to use this connector to **create** tickets for other resources, see [ServiceNow Ticket](../../../integration-guide/connectors/references-packages/servicenow-ticket).

## Prerequisites

Implementing this connector requires:

- reading first the appsettings documentation;
- a service account with the **snc_platform_rest_api_access** role, as well as reading and writing
permissions on the target ServiceNow instance;
- the version ServiceNow London or later;
- the appropriate configuration in ServiceNow of authentication, Basic or OAuth.

## Export

This connector exports to CSV files ServiceNow's tables (Users, Groups, Group Memberships).

An incremental search is possible to retrieve added and updated records but a full delta (including deleted items) can't be performed.

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

> The following example retrieves from users only those that are active, and no filter is applied to
> the other tables. A single request can retrieve up to 5,000 entries, no more. This means that if
> there are 6,000 `sys_user` to retrieve, then all of them will be retrieved but with two requests.
>
> ```
> *appsettings.agent.json*
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowExportFulfillment": {
>         "Server": "https://instance.service-now.com/api/now/table",
>         "Login": "login",
>         "Password": "password",
>         "ResponseSizeLimit":"5000",
>         "Filter":"sys_user#active=true"
>     }
>   }
> }
> ```
>
> The following example is the same as above, but using OAuth Authentication:
>
> ```
> *appsettings.agent.json*
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowExportFulfillment": {
>         "Server": "https://instance.service-now.com/api/now/table",
>         "Login": "login",
>         "Password": "password",
>         "ClientId": "ClientId",
>         "ClientSecret": "ClientSecret",
>         "OAuth2Url": "https://instance.service-now.com/oauth_token.do",
>         "ResponseSizeLimit":"5000",
>         "Filter":"sys_user#active=true"
>     }
>   }
> }
> ```

#### Setting attributes

 | Name | Details | 
 | --- | --- | 
 | Server required | **Type** String **Description** URL of the ServiceNow Server Table API endpoint. [See ServiceNow Official API Reference](https://developer.servicenow.com/dev.do#see-servicenow-official-api-reference). **Info:** the URL must start with `https`. | 
 | Login required | **Type** String **Description** Username of the service account used to connect to the server. | 
 | Password required | **Type** String **Description** Password of the service account used to connect to the server. | 
 | ClientId optional | **Type** String **Description** Client Id used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html). | 
 | ClientSecret optional | **Type** String **Description** Client Secret used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html). | 
 | OAuth2Url optional | **Type** String **Description** Application endpoint used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html). | 
 | --- | --- | 
 | --- | --- | 
 | Server required | **Type** String **Description** URL of the ServiceNow Server Table API endpoint. [See ServiceNow Official API Reference](https://developer.servicenow.com/dev.do#see-servicenow-official-api-reference). **Info:** the URL must start with `https`. | 
 | Login required | **Type** String **Description** Username of the service account used to connect to the server. | 
 | Password required | **Type** String **Description** Password of the service account used to connect to the server. | 
 | ClientId optional | **Type** String **Description** Client Id used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html). | 
 | ClientSecret optional | **Type** String **Description** Client Secret used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html). | 
 | OAuth2Url optional | **Type** String **Description** Application endpoint used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html). | 

### Output details

This connector is meant to generate to the [Application Settings](../../../integration-guide/network-configuration/agent-configuration/appsettings)Export Output folder one CSV file for each table, named `<connectionIdentifier>_<tableName>.csv`.

Identity Manager lists the tables to retrieve based on [Entity Type Mapping](../../../integration-guide/toolkit/xml-configuration/connectors/entitytypemapping)'s and [Entity Association Mapping](../../../integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping)'s connection tables.

For the connector to work properly, the connection tables must follow the naming convention too: `<connectionIdentifier>_<tableName>`.

> For example, with the following configuration:
>
> ```
>
> <EntityTypeMapping Identifier="User" Connector="ServiceNow"  ConnectionTable="ServiceNowExportFulfillment_sys_user">  <Property Identifier="sys_id" ConnectionColumn="sys_id" IsPrimaryKey="true" />  <Property Identifier="name" ConnectionColumn="name" />  <Property Identifier="user_name" ConnectionColumn="user_name" />  <Property Identifier="email" ConnectionColumn="email" /></EntityTypeMapping><EntityTypeMapping Identifier="User" Connector="ServiceNow"  ConnectionTable="ServiceNowExportFulfillment_sys_group">  <Property Identifier="sys_id" ConnectionColumn="sys_id" IsPrimaryKey="true" />  <Property Identifier="name" ConnectionColumn="name" />  <Property Identifier="description" ConnectionColumn="description" /></EntityTypeMapping><EntityAssociationMapping Identifier="Group_Members" Column1="user" EntityPropertyMapping1="User:sys_id" Column2="group" EntityPropertyMapping2="Group:sys_id" Connector="ServiceNow" ConnectionTable="ServiceNowExportFulfillment_sys_user_grmember" C0="sys_user_grmember"
> />
>
> ```
>
> We would have:
>
> ```
> *ServiceNowExportFulfillment_sys_user.csv*
> sys_id,active,name,user_name,email
> ...
>
> ```
>
> *ServiceNowExportFulfillment_sys_group.csv* sys_id,name,description ...
>
> ```
> *ServiceNowExportFulfillment_sys_user_grmember.csv*
> user,group
> ...
>
> ```

## Fulfill

This connector writes to ServiceNow to **create**, **update**, and/or **delete** any data.

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
>     "ServiceNowExportFulfillment": {
>         "Server": "https://instance.service-now.com/api/now/table",
>         "Login": "login",
>         "Password": "password"
>     }
>   }
> }
> ```
>
> The following example is the same as above, but using OAuth Authentication:
>
> ```
> *appsettings.agent.json*
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowExportFulfillment": {
>         "Server": "https://instance.service-now.com/api/now/table",
>         "Login": "login",
>         "Password": "password",
>         "ClientId": "ClientId",
>         "ClientSecret": "ClientSecret",
>         "OAuth2Url": "https://instance.service-now.com/oauth_token.do"
>     }
>   }
> }
> ```

#### Setting attributes

 | Name | Details | 
 | --- | --- | 
 | Server required | **Type** String **Description** URL of the ServiceNow Server Table API endpoint. [See ServiceNow Official API Reference](https://developer.servicenow.com/dev.do#see-servicenow-official-api-reference). **Info:** the URL must start with `https`. | 
 | Login required | **Type** String **Description** Username of the service account used to connect to the server. | 
 | Password required | **Type** String **Description** Password of the service account used to connect to the server. | 
 | ClientId optional | **Type** String **Description** Client Id used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html). | 
 | ClientSecret optional | **Type** String **Description** Client Secret used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html). | 
 | OAuth2Url optional | **Type** String **Description** Application endpoint used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html). | 

## Authentication

### Password reset

See the [appsettings.agent](../../../integration-guide/network-configuration/agent-configuration/appsettings-agent) topic to learn more on how to configure password reset settings.

When setting a password for an ServiceNow user, the password attribute is defined by the password specified in the corresponding [Resource Type Mappings](../../../integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings).

### Credentials protection

Data protection can be ensured through:

- [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection), configured in
the `appsettings.encrypted.agent.json` file;
- An [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) safe;

 | Attribute | Naming Convention for the Key in Azure Key Vault | 
 | --- | --- | 
 | Server | `Connections--<identifier>--Server` | 
 | Login | `Connections--<identifier>--Login` | 
 | Password | `Connections--<identifier>--Password` | 
 | ClientId | `Connections--<identifier>--ClientId` | 
 | ClientSecret | `Connections--<identifier>--ClientSecret` | 
 | OAuth2Url | `Connections--<identifier>--OAuth2Url` | 
 | Filter | `Connections--<identifier>--Filter` | 
 | ResponseSizeLimit | `Connections--<identifier>--ResponseSizeLimit` | 

- A [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) able to store
Active Directory's `Login`, `Password`, `Server`, `ClientId` and `ClientSecret`.

Protected attributes are stored inside a safe in <b>cyberark</b>, into an account whose identifier can be retrieved by Identity Manager from `*appsettings.<b>cyberark</b>.agent.json*`.

> For example:
>
> ```
> *appsettings.<b>cyberark</b>.agent.json*
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowExportFulfillment": {
>         "Login": "ServiceNowExportFulfillment_<b>cyberark</b>Key",
>         "Password": "ServiceNowExportFulfillment_<b>cyberark</b>Key",
>         "Server": "ServiceNowExportFulfillment_<b>cyberark</b>Key",
>         "ClientId": "ServiceNowExportFulfillment_<b>cyberark</b>Key",
>         "ClientSecret": "ServiceNowExportFulfillment_<b>cyberark</b>Key"
>     }
>   }
> }
> ```

