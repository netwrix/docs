---
title: "Microsoft Excel"
description: "Microsoft Excel"
sidebar_position: 140
---

# Microsoft Excel

This connector exports datasheets from a
[Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel) (XLSX) file.

This page is about
[File/Microsoft Excel](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/excel/index.md).

![Package: File/Microsoft Excel](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/excel/packages_excel_v603.webp)

## Overview

Microsoft Excel files using the XLSX file format are commonly used to store information.

## Prerequisites

Implementing this connector requires the input file to be in the XLSX format.

## Export

This connector copies the information from an XLSX file into CSV files, one per spreadsheet, while
filtering out spreadsheets and trimming values if needed.

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
>       "Path": "C:/identitymanagerContoso/Contoso/hr_conto(.*?).xlsx",
>       "PathIncremental": "C:/identitymanagerContoso/Contoso/hr_delta_conto(.*?).xlsx",
>       "IsFileNameRegex": "true",
>       "SheetOptions": [>         {
>           "SheetIgnored": "false",
>           "NumberOfLinesToSkip": 1
>         },
>         {
>           "SheetIgnored": "true"
>         }
>],
>       "ValuesToTrim": [>         "$",
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
title: "Microsoft Excel"
description: "Microsoft Excel"
sidebar_position: 140
---

# Microsoft Excel

This connector exports datasheets from a
[Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel) (XLSX) file.

This page is about
[File/Microsoft Excel](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/excel/index.md).

![Package: File/Microsoft Excel](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/excel/packages_excel_v603.webp)

## Overview

Microsoft Excel files using the XLSX file format are commonly used to store information.

## Prerequisites

Implementing this connector requires the input file to be in the XLSX format.

## Export

This connector copies the information from an XLSX file into CSV files, one per spreadsheet, while
filtering out spreadsheets and trimming values if needed.

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
>       "Path": "C:/identitymanagerContoso/Contoso/hr_conto(.*?).xlsx",
>       "PathIncremental": "C:/identitymanagerContoso/Contoso/hr_delta_conto(.*?).xlsx",
>       "IsFileNameRegex": "true",
>       "SheetOptions": [>         {
>           "SheetIgnored": "false",
>           "NumberOfLinesToSkip": 1
>         },
>         {
>           "SheetIgnored": "true"
>         }
>],
>       "ValuesToTrim": [>         "$",
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
| SheetOptions optional                            | **Type** SheetOption List **Description** List of options for each sheet of the input file. The first element of the list sets the options for the first sheet, the second element for the second sheet, etc.                                                                                                                                                          |

##### SheetOptions

| Name                                 | Details                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| SheetIgnored required                | **Type** Boolean **Description** `True` to exclude the sheet from export.                              |
|                                      |                                                                                                        |
| ---                                  | ---                                                                                                    |
| NumberOfLinesToSkip default value: 0 | **Type** Int32 **Description** Number of lines to skip in order to reach the line used as data header. |

### Output details

This connector is meant to generate to the
[`ExportOutput`](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
folder a CSV file per spreadsheet included in the export, named `<connectionIdentifier>_<index>.csv`
where `<index>` is the spreadsheet's index.

Note that `0` is the first index, not `1`.

> For example, when exporting the content of a 2-sheet Excel file with a connection named
> `HRContoso`, the output files will be named `HRContoso_0.csv` for the first spreadsheet, and
> `HRContoso_1.csv` for the second.

The file's columns come from the header line from the input Excel file.

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
