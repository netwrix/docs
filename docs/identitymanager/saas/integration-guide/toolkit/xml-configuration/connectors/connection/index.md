---
title: "Connection"
description: "Connection"
sidebar_position: 20
---

# Connection

A connection represents a link between a [Connector](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connector/index.md) and a connection
package.

## Examples

The following example creates a connection for the previously created connector `AD`, using the
package `Usercube.AD@0000001` with only the export task and not the fulfill task.

```

**<Connection Connector="AD" DisplayName_L1="Connection Active Directory" Identifier="ADExportFulfillment" Package="Usercube.AD@0000001" DeactivationExportFulfill="Fulfill"/>**

```

We will need to configure the connection settings in the `appsettings.agent.json` file, by adding a
`ADExportFulfillment` part in the `Connections` section, for example:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "ADExportFulfillment": {
      "Servers": [{
          "Server": "contoso.server.com",
          "BaseDN": "DC=contoso,DC=com"
        }],
      "AuthType": "Basic",
      "Login": "Contoso",
      "Password": "ContOso$123456789",
      "Filter": "(objectclass=*)",
      "EnableSSL": "true"
    },
    ...
  }
}
```

Details about these settings can be found in Identity Manager's
[References: Connectors](/docs/identitymanager/saas/integration-guide/connectors/references-connectors/index.md).

## Properties

| Property                                   | Details                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector required                         | **Type** Int64 **Description** Identifier of the linked connector. **Note:** a connection can be used by one and only one connector.                                                                                                                                                                                                |
| DeactivationExportFulfill default value: 0 | **Type** DeactivationExportFulfill **Description** For a connection having a package which implements both export and fulfill, this option can deactivate either the export or the fulfill part. `0` - **None**: keeps both parts. `1` - **Export**: deactivates export. `2` - **Fulfill**: deactivates fulfill.                    |
| DisplayName_L1 required                    | **Type** String **Description** Display name of the connection in language 1 (up to 16).                                                                                                                                                                                                                                            |
| Identifier required                        | **Type** String **Description** Unique identifier of the connection. It must start with a letter followed by up to 441 characters, chosen from the following set: point, dash, letter, or number. **Warning:** identifiers are case insensitive, for example the identifiers `adexport` and `ADEXPORT` cannot exist simultaneously. |
| Package required                           | **Type** Enumeration **Description** Identifier of the linked connection package which defines the connection's capabilities and technologies to export and/or fulfill data.                                                                                                                                                        |

## Child Element: Transformation

A connection transformation is optional, but can be needed to adjust the Excel files, output of
[Export Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exporttask/index.md) from Excel export connections, before
[Prepare Synchronization Task](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md). The
following operations are possible:

- filtering out given rows;
- adding/removing days from specific date properties;
- merging columns together.

### Examples

#### Edit dates

The following example sets all users' end dates to the end of the day instead of the morning. This
way, the end dates of users' permissions will be managed more easily.

Technically speaking, Identity Manager implements a sort of extra-task between the export and
prepare-synchronization tasks of HR synchronization. The CSV files produced by the export task of
the connection `Directory` are to be transformed: Identity Manager will add 1 day to all dates
between 1900 and 2100, contained in the `ContractEndDate`, `PositionEndDate` and `EndDate` columns
of the `Directory_UserRecord` table.

This date edition goes the other way around when loading data back to your systems: if Identity
Manager adds a few days when synchronizing, then it removes the same few days when using the
synchronized data.

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" >
    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="ContractEndDate" AddedDays="1" MinYear="1900" MaxYear="2100" />    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="PositionEndDate" AddedDays="1" MinYear="1900" MaxYear="2100" />    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="EndDate" AddedDays="1" MinYear="1900" MaxYear="2100" />
</Connection>

```

#### Filter out rows

The following example filters the CSV files produced by the export of the `Directory` connection, in
order to keep only German sites, i.e. the rows where `Identifier` starts with `DE_`.

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" >
    <Transformation Type="WhereValue" Table="Directory_Site" Column="Identifier" WhereOperator="StartsWith" WhereValue="DE_" />
</Connection>

```

#### Merge columns together

Consider the situation where users' organizations are defined in 4 levels.

The following example merges the `Company`, `Subsidiary`, `Department` and `Team` columns of the
`Directory_UserRecord` table, output of the export of the `Directory` connection, in order to
concatenate the 4 properties into a single `FullOrganization` property.

Setting `RemoveEmpty` to `true` means that rather than having an organization such as
`Contoso//HR/Payroll`, we will have `Contoso/HR/Payroll`.

Setting `RemoveDuplicates` to `true` means that rather than having an organization such as
`Contoso/Contoso/HR/Payroll`, we will have `Contoso/HR/Payroll`.

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" >
    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="FullOranization" InputColumn="Company" InputColumn2="Subsidiary" InputColumn3="Department" InputColumn4="Team" ConcatSeparator="/" RemoveEmpty="true" RemoveDuplicates="true" />
</Connection>

```

### Properties

| Property                  | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddedDays optional        | **Type** Float **Description** Number of days to add to the date column to be transformed, specified in `Column`, when the transformation type is `TransformDate`. The value can be negative, for example `-0.5` removes 12 hours from the date.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Column optional           | **Type** String **Description** Column (case-sensitive) used as input of the filtering and the date editing transformations, and as output of the merging transformation. When defining an output, `Column` can be an existing column or a column to be created.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ConcatSeparator optional  | **Type** String **Description** Separator used between the concatenated values, when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| DatePattern optional      | **Type** String **Description** Format of the transformed dates to be stored when the original object is not a date, when the transformation type is `TransformDate`. **Note:** for example we could need this property when using CSV files which store everything as strings, including dates.                                                                                                                                                                                                                                                                                                                                                                                            |
| InputColumn optional      | **Type** String **Description** Column (case-sensitive) used as input when the transformation type is `TransformDate`, and as part of the input when the transformation type is `ConcatColumns`. **Note:** required for `ConcatColumns`. **Note:** when not specified for `TransformDate`, `Column` is used as input.                                                                                                                                                                                                                                                                                                                                                                       |
| InputColumn2 optional     | **Type** String **Description** Second (up to fifth) input column (case-sensitive) when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| MaxYear optional          | **Type** Int32 **Description** Year after which the date contained in the input of the transformation of type `TransformDate` is ignored by the transformation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| MinYear optional          | **Type** Int32 **Description** Year before which the date contained in the input of the transformation of type `TransformDate` is ignored by the transformation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| RemoveDuplicates optional | **Type** Boolean **Description** `true` to keep only one of two identical and successive values, when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| RemoveEmpty optional      | **Type** Boolean **Description** `true` to ignore empty values, when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| SortValues optional       | **Type** Boolean **Description** `true` to sort the concatenated values by alphabetical order, when the transformation type is `ConcatColumns`. **Note:** concatenated values are sorted after duplicates are removed, when relevant.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Table optional            | **Type** String **Description** Table on which the transformation is to be applied. **Note:** must be of the format `<connectionIdentifier>_<datasetName>` (case-sensitive).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Type required             | **Type** ConnectionTransformationType **Description** Type of the transformation: **ConcatColumns**: concatenates `InputColumn` columns into `Column` with a separator defined in `ConcatSeparator`, potentially with additional transformation options among `RemoveDuplicates`, `RemoveEmpty`, `SortValues`. **TransformDate**: adds or removes a given number of days defined in `AddedDays` to/from the date stored in `InputColumn` or `Column`, only for dates between `MinYear` and `MaxYear`, in order to be stored in `Column` in the format defined by `DatePattern`. **WhereValue**: filters the rows based on a comparison with the `WhereOperator` and `WhereValue` arguments. |
| WhereOperator optional    | **Type** ConnectionTransformationWhereValueOperator **Description** Operator of the comparison that filters out rows from the CSV file(s), when the transformation type is `WhereValue`: `Equals`; `NotEquals`; `Contains`; `CotContains`; `StartsWith`; `EndsWith`; `Regex`.                                                                                                                                                                                                                                                                                                                                                                                                               |
| WhereValue optional       | **Type** String **Description** Value (case-sensitive) that the content of `Column` will be compared to, when the transformation type is `WhereValue`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
