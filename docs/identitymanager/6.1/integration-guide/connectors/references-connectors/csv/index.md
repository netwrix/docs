---
title: "CSV"
description: "CSV"
sidebar_position: 40
---

# CSV

This connector exports data from a [CSV file](https://en.wikipedia.org/wiki/Comma-separated_values).

This page is about
[File/CSV](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/csv/index.md).

![Package: File/CSV](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/csv/packages_csv_v603.webp)

## Overview

Files in CSV format are commonly used to store information.

## Prerequisites

Implementing this connector requires the source file to be in CSV format.

## Export

This export copies the information found in a CSV file and transforms it into a new CSV file in the
Usercube's format.

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
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "HRContoso": {
>       "Path": "C:/identitymanagerContoso/Contoso/hr_conto(.*?).csv",
>       "PathIncremental": "C:/identitymanagerContoso/Contoso/hr_delta_conto(.*?).csv",
>       "Encoding": "UTF-16",
>       "Separator": ";",
>       "IsFileNameRegex": true,
>       "NumberOfLinesToSkip": 1,
>       "ValuesToTrim": [>         "*",
>         "%"
>]
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                             | Details                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path Required if PathIncremental is not defined. | **Type** String **Description** Path of the input file to be used for complete synchronization.                                                                                                                                                                                                                                                                        |
| PathIncremental Required if Path is not defined. | **Type** String **Description** Path of the input file to be used for incremental synchronization.                                                                                                                                                                                                                                                                     |
| IsFileNameRegex optional                         | **Type** Boolean **Description** `True` to enter a regex instead of a normal string for `Path` and `PathIncremental`. **Note:** if several files correspond to the regex, then the export will use the last created file. **Info:** useful when the filename is only partially known, for example when using a generated file.                                         |
| ValuesToTrim optional                            | **Type** String List **Description** Ordered list of the characters to trim at the beginning and at the end of the headers and values of the input file. **Note:** the second value will be trimmed after the first, the order is important. **Example** When writing `---
title: "CSV"
description: "CSV"
sidebar_position: 40
---

# CSV

This connector exports data from a [CSV file](https://en.wikipedia.org/wiki/Comma-separated_values).

This page is about
[File/CSV](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/csv/index.md).

![Package: File/CSV](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/csv/packages_csv_v603.webp)

## Overview

Files in CSV format are commonly used to store information.

## Prerequisites

Implementing this connector requires the source file to be in CSV format.

## Export

This export copies the information found in a CSV file and transforms it into a new CSV file in the
Usercube's format.

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
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "HRContoso": {
>       "Path": "C:/identitymanagerContoso/Contoso/hr_conto(.*?).csv",
>       "PathIncremental": "C:/identitymanagerContoso/Contoso/hr_delta_conto(.*?).csv",
>       "Encoding": "UTF-16",
>       "Separator": ";",
>       "IsFileNameRegex": true,
>       "NumberOfLinesToSkip": 1,
>       "ValuesToTrim": [>         "*",
>         "%"
>]
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                             | Details                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path Required if PathIncremental is not defined. | **Type** String **Description** Path of the input file to be used for complete synchronization.                                                                                                                                                                                                                                                                        |
| PathIncremental Required if Path is not defined. | **Type** String **Description** Path of the input file to be used for incremental synchronization.                                                                                                                                                                                                                                                                     |
| IsFileNameRegex optional                         | **Type** Boolean **Description** `True` to enter a regex instead of a normal string for `Path` and `PathIncremental`. **Note:** if several files correspond to the regex, then the export will use the last created file. **Info:** useful when the filename is only partially known, for example when using a generated file.                                         |
 first and then `%` in `ValuesToTrim`, then "$%I am an example$%" becomes "I am an example$". |
|                                                  |                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                              | ---                                                                                                                                                                                                                                                                                                                                                                    |
| Encoding default value: UTF-8                    | **Type** String **Description** Encoding of the input file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                                                                              |

| Separator
default value: , | **Type**
String
**Description**

Separator used in the input file.

| | | | | --- | --- | | NumberOfLinesToSkip default value: 0 | **Type** Int32 **Description** Number
of lines to skip in order to reach the line used as data header. |

### Output details

This connector is meant to generate a CSV file, named `<connectionIdentifier>.csv`, to the
[`ExportOutput`](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
folder.

> For example, when exporting a connection named `HRCountries`, the output file will be named
> `HRCountries.csv`.

The file's columns come from the header line from the input CSV file.

All columns with headers, even empty ones, will be written to the output. However, columns without
headers will not be written.

## Fulfill

There are no fulfill capabilities for this connector.

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
