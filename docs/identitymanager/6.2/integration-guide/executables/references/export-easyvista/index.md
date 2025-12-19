---
title: "Usercube-Export-EasyVista"
description: "Usercube-Export-EasyVista"
sidebar_position: 130
---

# Usercube-Export-EasyVista

This tool is made to export entities from an EasyVista instance to CSV files.

The hardcoded entities named `Employees` can be fetched directly using the URL of the EasyVista
instance. To export other entities, you have to create a view of your data on EasyVista to be able
to fetch an `internalquery`.

## Examples

### Exporting entities by specifying attributes

It is possible to export data by specifying the attribute names to fetch, for each exported table:

```

--url "https://test-fr-vp-01.easyvista-training.com" --login "usercube" --password "usercube2021" --connection-identifier "ConnectionEasyVista" --attributes "table1=[NAME_FR, LOGIN]|table2=[NAME_EN, PROFIL]|Employee=[EMPLOYEE_ID]"  --output-path "C:/EasyVistaExport" --account "{account}" --cookie-path "C:/EasyVistaExport" --log-level Verbose --fetching-urls "HTTPS://test-fr-vp-01.easyvista-training.com/api/v1/50011/internalqueries?queryguid={3226F4FE-F3FC-4301-965A-32E546707BD0}&filterguid={9F3146C5-4EE0-4D1A-A4B9-8DC87A63C4E4}&viewguid={99E2223F-C1E0-4A14-87E8-C39C14325C03}" "HTTPS://test-fr-vp-01.easyvista-training.com/api/v1/50011/internalqueries?queryguid={57667FCD-134B-48A7-A188-CE700EF02C15}&filterguid={B4B3A15D-1DE2-41B5-91A7-A8E8343784E1}&viewguid={DB9C013B-28E0-45C8-A4C2-79E7D43C5421}" --entity-names "table1" "table2"

```

### Exporting entities using entities defined in configuration

It is also possible to export data by specifying the Identity Manager's server URL, so the export
tool automatically fetches the entity type mapping property names linked to the specified
connection:

```

--url "https://test-fr-vp-01.easyvista-training.com" --login "usercube" --password "usercube2021" --connection-identifier "ConnectionEasyVista" --output-path "C:/EasyVistaExport" --account "{account}" --cookie-path "C:/EasyVistaExport" --log-level Verbose --fetching-urls "HTTPS://test-fr-vp-01.easyvista-training.com/api/v1/50011/internalqueries?queryguid={3226F4FE-F3FC-4301-965A-32E546707BD0}&filterguid={9F3146C5-4EE0-4D1A-A4B9-8DC87A63C4E4}&viewguid={99E2223F-C1E0-4A14-87E8-C39C14325C03}" "HTTPS://test-fr-vp-01.easyvista-training.com/api/v1/50011/internalqueries?queryguid={57667FCD-134B-48A7-A188-CE700EF02C15}&filterguid={B4B3A15D-1DE2-41B5-91A7-A8E8343784E1}&viewguid={DB9C013B-28E0-45C8-A4C2-79E7D43C5421}" --entity-names "table1" "table2" --api-url "http://localhost:5000" --api-client-id Job  --api-secret secret

```

For each exported table, there is a resulting CSV file containing exported data.

The server has to be running.

## Arguments

| Argument Name                                         | Details                                                                                                                                                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| --attributes optional                                 | **Type** String list **Description** List of attributes to enrich the research. Format is: ```-at "Table1=[last_name, begin_of_contract, department_id, location_id]                       | Table2=[profile_id, e_mail]"``` |
| --fetching-urls required **if** --entity-names is set | **Type** String list **Description** The specific URLs to fetch data, corresponding to entity names. It must be the same length and have the same order as `--entity-names`.               |
| --entity-names required **if** --fetching-urls is set | **Type** String list **Description** The corresponding table names to fetch data, corresponding to fetching URLs. It must be the same length and have the same order as `--fetching-urls`. |
|                                                       |                                                                                                                                                                                            |
| ---                                                   | ---                                                                                                                                                                                        |
| --url required                                        | **Type** String **Description** EasyVista API Endpoint URL.                                                                                                                                |
| --account required                                    | **Type** String **Description** EasyVista account.                                                                                                                                         |
| --login required                                      | **Type** String **Description** Path of the file used for complete synchronization.                                                                                                        |
| --password required                                   | **Type** String **Description** EasyVista server password.                                                                                                                                 |
