# Usercube-Create-DatabaseViews

Generates entity model SQL views in the Identity Manager database. All views are prefixed by `zz_`.
This tool deletes all views starting by `zz_` and creates views from the entity model described in
the running configuration.

For every **EntityType**, a matching SQL view is created from the UR_Resource table.

## Example

The following example allows the user to connect to Identity Manager server at
`http://usercube.contoso.com`, using the ClientId `Job` and Secret `secret`, to generate views for
Identity Manager's database.

```
./Usercube-Create-DatabaseViews.exe --api-secret secret --api-client-id Job --api-url "http://usercube.contoso.com" --log-level Debug
```

## Arguments

| Argument Name                                   | Details                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --progress-use-database optional                | **Type** String **Description** Update progress in the SQL database.                                                                                                                                                                                                                                                         |
| --progress-use-database-child-instance optional | **Type** String **Description** Initiate child task instance.                                                                                                                                                                                                                                                                |
| --progress-use-api optional                     | **Type** String **Description** Update progress with the API.                                                                                                                                                                                                                                                                |
|                                                 |                                                                                                                                                                                                                                                                                                                              |
| ---                                             | ---                                                                                                                                                                                                                                                                                                                          |
| --api-client-id required                        | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](../../../toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions.    |
| --api-secret required                           | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](../../../toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required                              | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                              |
|                                                 |                                                                                                                                                                                                                                                                                                                              |
| ---                                             | ---                                                                                                                                                                                                                                                                                                                          |
| --log-level optional                            | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                                                                            |

You can explore created views in the Identity Manager database's Views folder in SQL Server
Management Studio

![SSMS Views](../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/executables/references/create-databaseviews/usercube-create-databaseviews_ssms.webp)
