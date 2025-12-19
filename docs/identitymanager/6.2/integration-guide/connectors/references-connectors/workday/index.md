---
title: "Workday"
description: "Workday"
sidebar_position: 330
---

# Workday

This connector exports users and groups from a
[Workday](https://www.workday.com/en-us/products/talent-management/overview.html) instance.

This page is about [Workday](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/workday/index.md).

![Package: ERP/Workday](/images/identitymanager/saas/integration-guide/connectors/references-connectors/workday/packages_workday_v603.webp)

## Prerequisites

Implementing this connector requires:

- using Workday Web Services (WWS) Directory
  [v34.2](https://community.workday.com/sites/default/files/file-hosting/productionapi/versions/v34.2/index.html)
  or later;

    > For example, the
    > [Human Resources](https://community.workday.com/sites/default/files/file-hosting/productionapi/Human_Resources/v34.2/Human_Resources.html)
    > Web Service contains operations that expose Workday Human Capital Management Business Services
    > data, including Employee, Contingent Worker and Organization information.

- access to the Web Services that are to be used;
- the [XPath](https://www.w3.org/TR/1999/REC-xpath-19991116/) syntax to configure and select the
  attributes to export.

## Export

This connector exports any entity available in WWS.

### Configuration

This process is configured through a
[Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or
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

> The following example connects Identity Manager to Workday and exports `Worker_ID` and `User_ID`
> from the entity Workers returned in
> [Get_Workers_Response](https://community.workday.com/sites/default/files/file-hosting/productionapi/Human_Resources/v34.2/samples/Get_Workers_Response.xml):
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "WorkdayExport": {
>         "InputFilePath": "C:/identitymanagerContoso/Temp/bodies.json",
>         "Login": "USERCUBE@contoso",
>         "Password": "contoso1996",
>         "Server": "https://workday.com/ccx/service/contoso"
>     }
>   }
> }
> ```

#### Setting attributes

| Name                   | Details                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| InputFilePath required | **Type** String **Description** Path of the JSON file defining which entities and attributes are to be exported. See more details below.                           |
| Login required         | **Type** String **Description** Login used to authenticate to Workday.                                                                                             |
| Password required      | **Type** String **Description** Password used to authenticate to Workday.                                                                                          |
| Server required        | **Type** String **Description** URL of the targeted Workday instance. **Syntax:**`https://####.workday.com/ccx/service/tenantName` (without the Web Service part). |

##### InputFilePath

The file specified in `InputFilePath` must have a specific structure, with a section for each entity
to be exported.

> For example:
>
> ```
> bodies.json
> {
>   "Requests": [>     {
>       "XmlBody": "<soapenv:Body> <bsvc:Get_Workers_Request> </bsvc:Get_Workers_Request> </soapenv:Body>",
>       "EntityName": "workers",
>       "IncrementalTag": "Transaction_Log_Criteria_Data",
>       "WebService": "Human_Resources/v34.2"
>     }
>]
> }
> ```

| Name                    | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| XmlBody required        | **Type** String **Description** Request to send to the Web Service. **Syntax:** `"XmlBody": "<soapenv:Body> <bsvc:Get_Entity_1_Request> ... </bsvc:Get_Entity_1_Request> </soapenv:Body>"` - the request body must begin with `<soapenv:Body>` and end with `</soapenv:Body>`; - inside the body, the entity request must use the namespace `bsvc`; - the body must fit on a single line. **Tip:** write the body in a separate XML file and use [TextFixer](https://www.textfixer.com/tools/remove-line-breaks.php) to remove line breaks. **Tip:**[see an example](https://community.workday.com/sites/default/files/file-hosting/productionapi/Human_Resources/v34.2/samples/Get_Workers_Request.xml).                      |
| XPaths optional         | **Type** String Pair List **Description** One or several key-value pairs, where: - the key is the attribute name that will be the column name in the output CSV file; - the value is the XPath used in the response to get the attribute value. **Info:** useless most of the time because the information is provided by entity type mappings and entity association mappings. Still useful when using the exe directly. **Note:** Netwrix Identity Manager (formerly Usercube)recommends using an **XPath** to the property `WID`, because it helps logs (in Trace mode) find entities with multi-valued properties. **Syntax:** `"XPaths": {    "Attribute_1_Name": "XPath 1",    ...    "Attribute_N_Name": "XPath N"   }` |
| EntityName required     | **Type** String **Description** Name of the entity, which conditions the name of the output file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| IncrementalTag optional | **Type** String **Description** XML tag associated with the incremental request. **Note:** in the xml request, `<bsvc:IncrementalTag>` must be the parent of `<bsvc:Transaction_Date_Range_Data>` which is the parent of `<bsvc:Updated_From>` and `<bsvc:Updated_Through>`. **Note:** when not specified, this entity is always exported in complete mode. **Warning:** the `IncrementalTag` part must not be added manually in `XmlBody` because the connector adds it automatically when exporting in incremental mode.                                                                                                                                                                                                     |
| WebService required     | **Type** String **Description** Name and version of the Web Service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Output details

This connector is meant to generate to the
[Application Settings](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings/index.md)Export
Output folder:

- one CSV file for each entity, named `<connectionIdentifier>_<entityName>.csv`, with the following
  columns:

    - **Command**: used for
      [Prepare Synchronization Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md);
    - one column for each XPath found in the
      [Entity Type Mapping](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md)'
      connection columns and
      [Entity Association Mapping](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md)'
      columns.
      [See Workday's documentation to compute XPaths](https://community.workday.com/sites/default/files/file-hosting/productionapi/Human_Resources/v34.2/samples/Get_Workers_Response.xml).``` `<connectionIdentifier>\_<entityName>.csv`

**Command,Key_XPath_1,Key_XPath_2,...,Key_XPath_N Add,value1,value2,...,valueN**

    ```

    ```

- a cookie file named `workday_<connectionIdentifier>_cookie.bin`, containing the time of the last
  export in order to perform an incremental export.

    Most exports can be run in complete mode, where the CSV files will contain all entries, or in
    incremental mode, where CSV files will contain only the entries which have been modified since
    the last synchronization.

    A task can use the `IgnoreCookieFile` boolean property, and a command line (with an executable)
    can use the option `--ignore-cookies`.

> For example, with the following configuration:
>
> ```
>
> <EntityTypeMapping Identifier="Workday_Worker" Connector="Workday" ConnectionTable="WorkdayExport_workers">  <Property Identifier="Worker_ID" ConnectionColumn="bsvc:Worker_Data/bsvc:Worker_ID" IsUniqueKey="true" />  <Property Identifier="User_ID" ConnectionColumn="bsvc:Worker_Data/bsvc:User_ID" IsUniqueKey="true" /></EntityTypeMapping>
>
> ```
>
> We choose to export only the entity `workers`, so the output is generated to
> `WorkdayExport_workers.csv` in the
> [Application Settings](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings/index.md)Export
> Output directory .
>
> The CSV file will include three columns: `Command`; `bsvc:Worker_Data/bsvc:Worker_ID` and
> `bsvc:Worker_Data/bsvc:User_ID`.

## Authentication

### Credential protection

Data protection can be ensured through:

- [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md), configured in
  the `appsettings.encrypted.agent.json` file;
- An [Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) safe;

| Attribute     | Naming Convention for the Key in Azure Key Vault |
| ------------- | ------------------------------------------------ |
| InputFilePath | `Connections--<identifier>--InputFilePath`       |
| Login         | `Connections--<identifier>--Login`               |
| Password      | `Connections--<identifier>--Password`            |
| Server        | `Connections--<identifier>--Server`              |

- A
  [](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)[Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)
  able to store Workday's `Login`, `Password` and `Server`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

> For example:
>
> ```
> appsettings.cyberark.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "WorkdayExport": {
>         "Login": "WorkdayExport_Account",
>         "Password": "WorkdayExport_Account"
>     }
>   }
> }
> ```
