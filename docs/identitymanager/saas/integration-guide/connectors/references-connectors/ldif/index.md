---
title: "LDIF"
description: "LDIF"
sidebar_position: 130
---

# LDIF

This connector exports entries from an
[LDIF](https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format) file.

This page is about [LDIF](/docs/identitymanager/saas/integration-guide/connectors/references-packages/ldif/index.md).

![Package: Directory/LDIF](/images/identitymanager/saas/integration-guide/connectors/references-connectors/ldif/packages_ldif_v603.webp)

## Overview

The LDAP Data Interchange Format (LDIF) is a standard plain text data interchange format for
representing LDAP (Lightweight Directory Access Protocol) directory content and update requests.
LDIF conveys directory content as a set of records, one record for each object (or entry). It also
represents update requests, such as Add, Modify, Delete, and Rename, as a set of records, one record
for each update request.

## Prerequisites

Implementing this connector requires no particular prerequisites.

## Export

This connector generates a CSV file from an input LDIF file containing entries to be exported.

### Configuration

This process is configured through a
[Connection](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "LdifExport": {
>         "LDIFFile": "C:/identitymanagerContoso/Contoso/contoso.ldif",
>         "FilterAttribute": "objectClass",
>         "FilterValues": "user organizationalUnit",
>         "Attributes": ["dn", "objectClass", "cn", "SAMAccountName", "Name", "userprincipalname"],
>         "LdifEncoding": "UTF-8",
>     }
>   }
> }
> ```

#### Setting attributes

| Name                              | Details                                                                                                                                                                                                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LDIFFile required                 | **Type** String **Description** Path of the LDIF input file.                                                                                                                                                                                                                 |
| FilterAttribute required          | **Type** String **Description** Property from the connector's configuration whose value is to be compared with the values from `FilterValues`, in order to filter the entries to export.                                                                                     |
| FilterValues required             | **Type** String **Description** List of values to be compared with the value of `FilterAttribute`, in order to filter the entries to export. Identity Manager will export only the entries matching the filter. **Note:** multiple values must be separated by white spaces. |
| Attributes required               | **Type** String List **Description** List of properties from the connector's configuration to be exported.                                                                                                                                                                   |
| LdifEncoding default value: UTF-8 | Encoding of the file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                          |

### Output details

This connector is meant to generate to the
[Application Settings](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings/index.md)Export
Output folder a CSV file named `LdifExport.csv`, with the following columns:

```
LdifExport.csv
Command,dn,objectClass,cn,SAMAccountName,Name,userprincipalname
Insert,value1,value2,...,valueN
```

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Credential protection

This connector has no credential attributes, and therefore does not use
[](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)[Connection](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connection/index.md),
nor a [Connection](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)Vault.

Still, data protection can be ensured through an
[Connection](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) safe.
