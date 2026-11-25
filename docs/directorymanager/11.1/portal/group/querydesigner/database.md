---
title: "Use an External Data Source in Query Designer"
description: "Combine an external data provider such as SQL Server, Oracle, or SCIM with the directory to determine a group's membership in Query Designer."
keywords:
  - Query Designer
  - external data source
  - Database tab
  - command string
  - group membership query
sidebar_position: 70
---

# Use an External Data Source in Query Designer

You can combine an external data provider with the directory to determine a group's membership.

The supported external data providers are:

- Microsoft Access
- Microsoft Excel
- Oracle
- ODBC
- Microsoft SQL Server
- Text/CSV
- SCIM

Before you use any of these external data providers, define a data source for the provider in Admin Center. See the [Create Data Sources in Directory Manager](/docs/directorymanager/11.1/admincenter/datasource/create.md) topic.

The Directory Manager portal configures a connection in the data source, connects to the external database, retrieves the results, and then queries the directory for matching records.

To join the external data source to the identity store, map one column that the command returns on the Database tab to a directory attribute. The query compares the values of the mapped attributes. It then extracts the objects with matching values and adds them to the group's membership.

For example, to add all employees whose employee IDs are in an external data source to a group, select that data source. Then map a key attribute to a directory attribute that stores the employee ID. When you update group membership, Directory Manager fetches only the users from the directory whose employee IDs also exist in the data source.

**External Data Provider**

Select the data source to use to determine the group's membership from the dropdown list.

**External Provider Table**

After you select the data source, select the provider's table that contains the data. If the table you need isn't listed, type its name in the External Provider Table box.

**Identity Store Attribute**

Select the identity store attribute to map a database attribute to.

**External Provider Attribute**

Select the data provider attribute to map to the selected identity store attribute.

**Command String**

This field displays the command that **Query Designer** runs to retrieve the query results from the data source. The value can be a query statement and can include multiple columns separated by commas. Field names are enclosed in brackets ([ ]) to prevent ambiguity that the query engine might encounter because of spaces in column names.

You can modify the command or write your own command.

For better performance, select only the columns required to create your group.

For example:

```
SELECT [Column1],[Column2] FROM [Filename.csv]
```

**Execute**

Click this button to run the command and preview the results. This process can take several minutes, depending on the size of your data source.

**Clear**

Click this button to clear the query.

**Preview**

Preview the results returned with the criteria specified on all tabs of the Query Designer dialog box. This check confirms the accuracy of the data before you commit changes to the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.
