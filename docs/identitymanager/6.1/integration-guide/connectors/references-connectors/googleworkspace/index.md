---
title: "Google Workspace"
description: "Google Workspace"
sidebar_position: 70
---

# Google Workspace

This connector exports and fulfills users and groups from/to a
[Google Workspace](https://developers.google.com/workspace) instance.

This page is about
[Directory/Google Workspace](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/googleworkspace/index.md).

![Package: Directory/Google Workspace](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/googleworkspace/packages_workspace_v603.webp)

## Overview

Google Workspace provides a set of softwares and products developed by Google. The Google Workspace
connector exports and fulfills users and groups from/to a Google Workspace instance. It exports
user-group memberships too.

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md);
- a service account impersonating the following permission scopes:
  [https://www.googleapis.com/auth/admin.directory.user](https://www.googleapis.com/auth/admin.directory.user)
  and
  [https://www.googleapis.com/auth/admin.directory.group](https://www.googleapis.com/auth/admin.directory.group).

    [See Google's documentation to create the service account with the right impersonation](https://developers.google.com/workspace/guides/create-credentials#see-googles-documentation-to-create-the-service-account-with-the-right-impersonation).

    :::warning
    Google's documentation describes this procedure as optional, while the Google
    Workspace connector requires it.
    :::


## Export

This connector extracts users, groups and user-group memberships from a Google Workspace instance,
and write the output to CSV files.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
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
>
> appsettings.agent.json
> {
>     ...
>     "Connections": {
>         ...
>         "GoogleExportFulfillment": {
>             "CredentialsFilePath": "C:/identitymanagerDemo/GoogleCredentials.json",
>             "User": "B29607@acme.internal",
>             "PageSize": "100"
>         }
>     }
> }
>
> ```

#### Setting attributes

| Name                         | Details                                                                                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CredentialsFilePath required | **Type** String **Description** Path of Google Workspace's JSON credentials file. [See Google's documentation to create these credentials](https://developers.google.com/workspace/guides/create-credentials#see-googles-documentation-to-create-these-credentials). |
| User required                | **Type** String **Description** Email address of the service account mentioned in the [prerequisites](#prerequisites) section.                                                                                                                                       |
|                              |                                                                                                                                                                                                                                                                      |
| ---                          | ---                                                                                                                                                                                                                                                                  |
| PageSize default value: 50   | **Type** Int32 **Description** Number of items, i.e. users and/or groups and/or memberships, retrievable from Google Workspace by each API call (from 1 to 500).                                                                                                     |

### Output details

This connector is meant to generate to the
[ExportOutput](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
folder the following CSV files:

- `GoogleExportFulfillment_Users.csv` and `GoogleExportFulfillment_Groups.csv` whose headers come
  from the entity type mapping's `ConnectionColumn` and from the entity association mappings'
  columns which are not _members_ columns;
- `GoogleExportFulfillment_Members.csv` with the following columns:
    - **value**: ID of the group;
    - **MemberId**: ID of the group member.

If the connection column describes a sub-property, then the name should have the following pattern:
`{property}:{sub-property}`. The character `":"` should not be used in other situations.

> For example:
>
> ```
>
> <EntityType Identifier="GOOGLE_Entry" DisplayName_L1="GOOGLE - Entry" DisplayName_L2="GOOGLE - Entr�e">  <Property Identifier="AgreedToTerms" DisplayName_L1="AgreedToTerms" Type="String" />  <Property Identifier="FamilyName" DisplayName_L1="FamilyName" Type="String" /></EntityType><EntityTypeMapping Identifier="GOOGLE_Entry" Connector="GOOGLE" ConnectionTable="GOOGLE_Users">  <Property Identifier="AgreedToTerms" ConnectionColumn="AgreedToTerms" />  <Property Identifier="FamilyName" ConnectionColumn="Name:FamilyName" /></EntityTypeMapping>
>
> ```
>
> Note that we have here `AgreedToTerms` which is a single property, and `FamilyName` which is a
> sub-property of `Name`, hence the name `Name:FamilyName` as the `ConnectionColumn`.

## Fulfill

This connector can write to Google Workspace to create, update, and/or delete users and user-group
memberships.

### Configuration

Same as for export, fulfill is configured through connections.

> For example:
>
> ```
>
> appsettings.agent.json
> {
>     ...
>     "Connections": {
>         ...
>         "GoogleExportFulfillment": {
>             "CredentialsFilePath": "C:/identitymanagerDemo/GoogleCredentials.json",
>             "User": "B29607@acme.internal"
>         }
>     }
> }
>
> ```

#### Setting attributes

| Name                         | Details                                                                                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CredentialsFilePath required | **Type** String **Description** Path of Google Workspace's JSON credentials file. [See Google's documentation to create these credentials](https://developers.google.com/workspace/guides/create-credentials#see-googles-documentation-to-create-these-credentials). |
| User required                | **Type** String **Description** Email address of the service account mentioned in the [prerequisites](#prerequisites) section.                                                                                                                                       |

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

This connector has no credential attributes, and therefore does not use
[RSA encryption](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md),
nor a
[CyberArk Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md).

Still, data protection can be ensured through an
[Azure Key Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)
safe.
