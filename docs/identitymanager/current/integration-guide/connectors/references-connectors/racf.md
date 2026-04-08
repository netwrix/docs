---
title: "RACF"
description: "RACF"
sidebar_position: 210
---

# RACF

This connector exports users and profiles from a [RACF](https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-what-is-racf) file.

This page is about [RACF](../../../integration-guide/connectors/references-packages/racf).

![Package: MainFrame/RACF](/images/identitymanager/integration-guide/connectors/references-connectors/racf/packages_racf_v603.webp)

## Overview

Resource Access Control Facility (RACF) is a security program from IBM OS/390 used to protect users' resources by controlling their accesses. The RACF connector exports the information saved by RACF about users, groups and access authorities.

## Prerequisites

Implementing this connector requires the input file to be in the RACF format, but it can have any extension.

## Export

This connector extracts the information found in a RACF file and transforms it into CSV files in Identity Manager format.

Be aware that Identity Manager supports only the RACF records represented by the following codes:

- [0100; 0120; 0101; 0102](https://www.ibm.com/docs/en/zos/2.1.0?topic=records-record-formats-produced-by-database-unload-utility#0100-0120-0101-0102)
(groups);
- [0200; 0203](https://www.ibm.com/docs/en/zos/2.1.0?topic=utility-user-record-formats) (users);
- [0500; 0503](https://www.ibm.com/docs/en/zos/2.1.0?topic=utility-general-resource-record-formats)
(general resources).

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

> The following example reads RACF data from the `C:/identitymanagerContoso/RacfFile.csv` iso-8859-1 file
> and exports it to CSV files in Identity Manager format:
>
> ```
> *appsettings.agent.json*
> {
>   ...
>   "Connections": {
>     ...
>     "RACF": {
>       "Path": "C:/identitymanagerContoso/RacfFile.csv",
>       "Encoding": "iso-8859-1",
>     }
>   }
> }
> ```

#### Setting attributes

 | Name | Details | 
 | --- | --- | 
 | Path required | **Type** String **Description** Path of the RACF file to be exported. | 
 | --- | --- | 
 | --- | --- | 
 | Encoding default value: UTF-8 | **Type** String **Description** Encoding of the input file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings). | 

### Output details

This connector is meant to generate to the [Application Settings](../../../integration-guide/network-configuration/agent-configuration/appsettings)Export Output folder one CSV file per record type (0100, 0200, etc.), named `<connectionIdentifier>_<type>.csv`.

> For example, consider an export with a connection named `ExportRacf`, and a source file containing
> the record types 0100, 0120, 0203. Then we will have three output files named
> `ExportRacf_0100.csv`, `ExportRacf_0120.csv` and `ExportRacf_0203.csv`.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

This connector has no credential attributes, and therefore does not use [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection), nor a [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection).

Still, data protection can be ensured through an [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) safe.

