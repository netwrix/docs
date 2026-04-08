---
title: "Okta"
description: "Okta"
sidebar_position: 170
---

# Okta

This connector exports and fulfills entries from/to Okta application.

![okta](/images/identitymanager/integration-guide/connectors/references-connectors/okta/okta.webp)

## Overview

Okta is an access management solution that provides SSO and federation capabilities for single sign-on, multi-factor authentication, and API access management. Okta's platform is widely used by organizations to protect accesses for digital identities in an increasingly complex and interconnected digital world.

### Prerequisites

Implementing this connector requires:

- Reading first the appsettings documentation
- An Okta Token with specific permissions on the target instance

See the [appsettings.agent](../../../integration-guide/network-configuration/agent-configuration/appsettings-agent) topic for additional information.

### Configuration

To configure the Okta connector it is necessary to:

**Step 1 –** Create a new user for Netwrix Identity Manager (formerly Usercube).

In order to do so you must connect to the Okta administration console `https://myexample-admin.okta.com` and create a new Netwrix Identity Manager (formerly Usercube) user.

:::note
 For some Okta deployments it is possible to create a service account or to Manage an Okta user account as a service account. 
:::
**Step 2 –** Assign administrator role and permissions to the Netwrix Identity Manager (formerly Usercube) user.

**Step 3 –** Generate a Token for the Netwrix Identity Manager (formerly Usercube) user.

See the [Okta documentation](https://help.okta.com/en-us/content/topics/users-groups-profiles/service-accounts/service-accounts-overview.htm) for additional information.

### Export

This connector exports a list of users, groups, applications with their attributes specified in the connector's configuration, to CSV files.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the appsettings.agent.json > Connections section.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

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

- Be unique
- Not begin with a digit
- Not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```json
appsettings.agent.json
{
    "Connections": {
        ...
        "OktaExportFulfillment": {
            "Server": " https://<YourCompany>.okta.com",
            "ApiKey": "<GeneratedUserToken>",
        }
    }
}
```

### Setting attributes

 | Name | Type | Description | 
 | --- | --- | --- | 
 | Server required | String | URI of the data system. | 
 | ApiKey required | String | User token value. | 

### Output details

This connector can create, delete and update users, groups and applications, and is meant to generate the following to the ExportOutput folder :

- A CSV file, named `<connectionIdentifier>`\_users.csv, with one column for each property either
having a ConnectionColumn or which is used in an entity association;
- A CSV file, named `<connectionIdentifier>`\_groups.csv, with one column for each property either
having a ConnectionColumn or which is used in an entity association;
- A CSV file, named `<connectionIdentifier>`\_apps.csv, with one column for each property either
having a ConnectionColumn or which is used in an entity association;
- A CSV file, named `<connectionIdentifier>`\_groupsapps.csv, with one column for each property
either having a ConnectionColumn or which is used in an entity association;
- A CSV file, named `<connectionIdentifier>`\_groupsusers.csv, with one column for each property
either having a ConnectionColumn or which is used in an entity association;

For example, with the following entity type mapping for users:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```xml
<EntityType Identifier="User" DisplayName_L1="User">
    <Property Identifier="Groups" DisplayName_L1="Groups" Type="ForeignKey" />
    <Property Identifier="OktaSyncPrpov_users_id" DisplayName_L1="id" IsKey="true" TargetColumnIndex="6" Type="String" />
    <Property Identifier="UserType" DisplayName_L1="User Type" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="activated" DisplayName_L1="activated" TargetColumnIndex="4" Type="String" />
    <Property Identifier="created" DisplayName_L1="created" TargetColumnIndex="5" Type="String" />
    <Property Identifier="lastLogin" DisplayName_L1="lastLogin" TargetColumnIndex="7" Type="String" />
    <Property Identifier="lastUpdated" DisplayName_L1="lastUpdated" TargetColumnIndex="8" Type="String" />
    <Property Identifier="passwordChanged" DisplayName_L1="passwordChanged" TargetColumnIndex="9" Type="String" />
    <Property Identifier="profile_city" DisplayName_L1="City" TargetColumnIndex="10" Type="String" />
    <Property Identifier="profile_costCenter" DisplayName_L1="Cost center" TargetColumnIndex="11" Type="String" />
    <Property Identifier="profile_countryCode" DisplayName_L1="Country code" TargetColumnIndex="12" Type="String" />
    <Property Identifier="profile_department" DisplayName_L1="Department" TargetColumnIndex="13" Type="String" />
    <Property Identifier="profile_displayName" DisplayName_L1="Display name" TargetColumnIndex="14" Type="String" />
….  
</EntityType>
  <EntityTypeMapping Identifier="User" ConnectionTable="OktaExportFulfillment_users" Connector="Okta">
    <Property Identifier="OktaExportFulfillment_users_id" ConnectionColumn="id" IsPrimaryKey="true" IsUniqueKey="true" />
    <Property Identifier="activated" ConnectionColumn="activated" />
    <Property Identifier="created" ConnectionColumn="created" />
    <Property Identifier="lastLogin" ConnectionColumn="lastLogin" />
    <Property Identifier="lastUpdated" ConnectionColumn="lastUpdated" />
    <Property Identifier="passwordChanged" ConnectionColumn="passwordChanged" />
    <Property Identifier="profile_city" ConnectionColumn="profile.city" />
    <Property Identifier="profile_costCenter" ConnectionColumn="profile.costCenter" />
    <Property Identifier="profile_countryCode" ConnectionColumn="profile.countryCode" />
    <Property Identifier="profile_department" ConnectionColumn="profile.department" />
    <Property Identifier="profile_displayName" ConnectionColumn="profile.displayName" />
  </EntityTypeMapping>
```

And the following entity type mapping for groups:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```text
  <EntityType Identifier="Group" DisplayName_L1="Group">
    <Property Identifier="Applications" DisplayName_L1="Applications" Type="ForeignKey" />
    <Property Identifier="OktaSyncPrpov_groups_id" DisplayName_L1="id" IsKey="true" TargetColumnIndex="5" Type="String" />
    <Property Identifier="Users" DisplayName_L1="Users" Type="ForeignKey" />
    <Property Identifier="created" DisplayName_L1="created" TargetColumnIndex="4" Type="String" />
    <Property Identifier="lastMemberShipUpdated" DisplayName_L1="lastMemberShipUpdated" TargetColumnIndex="6" Type="String" />
    <Property Identifier="lastUpdated" DisplayName_L1="lastUpdated" TargetColumnIndex="7" Type="String" />
    <Property Identifier="profile_description" DisplayName_L1="Description" TargetColumnIndex="8" Type="String" />
    <Property Identifier="profile_name" DisplayName_L1="Name" TargetColumnIndex="9" Type="String" />
    <Property Identifier="type" DisplayName_L1="type" TargetColumnIndex="10" Type="String" />
  </EntityType>
  <EntityTypeMapping Identifier="Group" ConnectionTable="OktaExportFulfillment_groups" Connector="Okta">
    <Property Identifier="OktaExportFulfillment_groups_id" ConnectionColumn="id" IsPrimaryKey="true" IsUniqueKey="true" />
    <Property Identifier="created" ConnectionColumn="created" />
    <Property Identifier="lastMemberShipUpdated" ConnectionColumn="lastMemberShipUpdated" />
    <Property Identifier="lastUpdated" ConnectionColumn="lastUpdated" />
    <Property Identifier="profile_description" ConnectionColumn="profile.description" />
    <Property Identifier="profile_name" ConnectionColumn="profile.name" />
    <Property Identifier="type" ConnectionColumn="type" />
  </EntityTypeMapping>
```

And the following entity type mapping for applications:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```text
 <EntityType Identifier="Application" DisplayName_L1="Application">
    <Property Identifier="Groups" DisplayName_L1="Groups" Type="ForeignKey" />
    <Property Identifier="OktaSyncPrpov_apps_id" DisplayName_L1="id" IsKey="true" TargetColumnIndex="5" Type="String" />
    <Property Identifier="created" DisplayName_L1="created" TargetColumnIndex="4" Type="String" />
    <Property Identifier="label" DisplayName_L1="label" TargetColumnIndex="6" Type="String" />
    <Property Identifier="lastUpdated" DisplayName_L1="lastUpdated" TargetColumnIndex="7" Type="String" />
    <Property Identifier="name" DisplayName_L1="name" TargetColumnIndex="8" Type="String" />
    <Property Identifier="status" DisplayName_L1="status" TargetColumnIndex="9" Type="String" />
  </EntityType>
  <EntityTypeMapping Identifier="Application" ConnectionTable="OktaExportFulfillment_apps" Connector="Okta">
    <Property Identifier="OktaExportFulfillment_apps_id" ConnectionColumn="id" IsPrimaryKey="true" IsUniqueKey="true" />
    <Property Identifier="created" ConnectionColumn="created" />
    <Property Identifier="label" ConnectionColumn="label" />
    <Property Identifier="lastUpdated" ConnectionColumn="lastUpdated" />
    <Property Identifier="name" ConnectionColumn="name" />
    <Property Identifier="status" ConnectionColumn="status" />
  </EntityTypeMapping>
```

Then we will have `C:/identitymanagerContoso/Sources/OktaExportFulfillment_users.csv` as follows:

```text
id, status, created, activated, statusChanged, lastLogin, lastUpdated, passwordChanged, type.id, profile.city, profile.costCenter, profile.countryCode, profile.department, profile.displayName
```

And `C:/identitymanagerContoso/Sources/OktaExportFulfillment_groups.csv` as follows:

```
id, created, lastUpdated, lastMemberShipUpdated, type, profile.description, profile.name
```

And `C:/identitymanagerContoso/Sources/OktaExportFulfillment_apps.csv` as follows:

```text
id, created, lastUpdated, status, name, label
```

### Fulfill

The Okta connector writes to Okta to create, update and delete entries, initiated manually through the UI or automatically by enforcing the policy. See the [Evaluate Policy](../../../integration-guide/role-assignment/evaluate-policy) topic for additional information.

### Configuration

Same as for export, fulfill is configured through connections.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```json
appsettings.agent.json
{
    "Connections": {
        ...
        "OktaExportFulfillment": {
            "Server": " https://<YourCompany>.okta.com",
            "ApiKey": "<GeneratedUserToken>",
        }
    }
}
```

### Password reset

The password reset settings configuration is described in the appsettings.agent.json file. See the [appsettings.agent](../../../integration-guide/network-configuration/agent-configuration/appsettings-agent) topic for additional information.

### Credential protection

Data protection can be ensured through:

- [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection), configured in
the appsettings.encrypted.agent.json file
- An [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection)
- A [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection)Vault able to
store Okta Login, Password, Account and Server.

