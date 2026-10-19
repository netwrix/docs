---
title: "Database tab"
description: "Query Designer - Database tab"
sidebar_position: 70
---

# Database tab

You can combine an external data provider with the directory to determine a group's membership.

The supported external data providers are:

- Microsoft Access
- Microsoft Excel
- Oracle
- ODBC
- Microsoft SQL Server
- Text/CSV
- SCIM

Before using any of these external data providers, you must define a data source for the provider in Admin Center. See the [Create a Data Source](/docs/directorymanager/11.1/admincenter/datasource/create.md)
topic.

Directory Manager portal configures a connection in the data source, connects to the external database, retrieves the results, and then queries the directory for matching records.

You must map one column returned by the command on the Database tab with a directory attribute to
join the external data source to the identity store. The query compares the values of the mapped
attributes and extracts objects with matching values to add to the group’s membership.

For example, if you want to add to group membership all employees whose employee IDs are present in
an external data source, you can select that data source and map a key attribute with a directory
attribute. Use attributes that store the employee ID. When you update group membership, Directory Manager will fetch only those users from the directory whose employee IDs also exist in the data source.

**External Data Provider**

Select the data source from the dropdown list that you want to use to determine the group's
membership.

**External Provider Table**

After you select the data source, select the provider's table that contains the data. If the table
you need isn't listed, type its name in the External Provider Table box to select the table.

**Identity Store Attribute**

Select an identity store attribute to map a database attribute to it.

**External Provider Attribute**

Select a data provider attribute to map it to the selected identity store attribute.

**Command String**

This field displays the command that the **Query Designer** executes to retrieve the query results
from the data source. The value can be a query statement and can include multiple columns separated
by commas. Field names are enclosed in brackets ([ ]) to prevent any ambiguity that the query engine
might encounter due to spaces between column names.

You can modify the command and even write your own command.

For better performance, it is recommended to select only the columns required to create your group.

For example:

```
SELECT [Column1],[Column2] FROM [Filename.csv]
```

**Execute**

Click this button to execute the command and preview the results. This process may take several
minutes depending on the size of your data source.

**Clear**

Click this button to clear the query.

**Preview**

Preview the results returned with the criteria specified on all tabs of the Query Designer dialog box. This checks the accuracy of data before you commit changes to the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.
