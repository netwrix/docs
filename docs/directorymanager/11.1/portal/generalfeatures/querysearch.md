---
title: "Query Based Advanced Search"
description: "Query Based Advanced Search"
sidebar_position: 40
---

# Query Based Advanced Search

Directory Manager portal enables you to search directory objects (users, mailboxes, contacts,
groups) in the identity store based on a query. You can create queries and save them for later
directory objects searches.

The Query Designer option on the Advanced Search page is available which presents you the
[Query Designer](/docs/directorymanager/11.1/portal/group/querydesigner/overview.md) dialog box similar to the query designer dialog
box used for creating queries for Smart Groups and Dynasties.

In Linked mode – Query based searches cannot be performed.

## Create a query

The Query Designer dialog box provides you a visual interface for creating search queries.

Step 1 – Click **Advanced Search** at the top.

Step 2 – On the **Advanced Search** page, click **Or use the new query based search** link.

The **Queries** page is displayed.

:::note
If you are creating a search query for the first time the **Query Designer** dialog box opens
automatically.
:::


Step 3 – Click **Query Designer** to create queries to search directory objects.

Step 4 – Select an option from the [Query Designer - General tab](/docs/directorymanager/11.1/portal/group/querydesigner/general.md)
list to specify the type of object the query should fetch.

Step 5 – You must specify the containers that the query should search for retrieving the directory
objects.

Click the **Start in** button and select a container on the Select Container dialog box. The query
would search for objects only in this container and its sub-containers.

Step 6 – The **Query Designer** dialog box groups similar query options by tabs.

1. **General tab**: lets you select object categories that you want the query to search in. The
   available options vary according to the object type selected in the **Find** list. See the
   [Query Designer - General tab](/docs/directorymanager/11.1/portal/group/querydesigner/general.md) topic for additional
   information.
2. **Storage tab**: lets you filter the mailboxes to return. See the
   [Query Designer - Storage tab](/docs/directorymanager/11.1/portal/group/querydesigner/storage.md) topic for additional
   information.
3. **Filter Criteria tab**: lets you add additional filter criteria. For example, you can add
   criteria to retrieve all directory users who live in Houston and have a fax number. You can also
   apply logical operators (AND, OR) to your custom query to achieve the most accurate results.

    The condition list may vary while creating queries for object searches. See the
    [Query Designer - Filter Criteria tab](/docs/directorymanager/11.1/portal/group/querydesigner/filtercriteria.md) topic for
    additional information.

4. **Include/Exclude tab:** lets you include or exclude objects regardless of whether they are
   returned by the query or not. Use the Add and Remove buttons to add and remove objects in the
   Include and Exclude sections respectively. See the
   [Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/portal/group/querydesigner/includeexclude.md) topic for
   additional information.
5. **Database tab**: enables you to combine an external data source with the directory to search
   directory objects. See the [Query Designer - Database tab](/docs/directorymanager/11.1/portal/group/querydesigner/database.md)
   topic for additional information.

Step 7 – Click the **LDAP Query** button to view the query generated from the settings you have
entered so far.

Step 8 – In the **Query name** box, type a name for the query.

Step 9 – Select the **Global Query** check box, if you want to share this query with other users in
the connected identity store.

Step 10 – Click the **Save Query** button to save the query.

## Preview query results

Use the **Preview** button to preview query results obtained with the current settings on all tabs
of the Query Designer dialog box. This is a check to ensure the accuracy of data before changes are
committed to the directory.

On clicking it, results are displayed in the **Preview Results** pane, that appear at the bottom of
the dialog box.

## Execute a query

To execute the query, click the **Run** arrow. It will display all the results matching the search
criteria.

## Modify a query

To modify the query, click the **Edit** button. It will open the query designer where you can apply
changes to the search query.

## Delete a query

To delete a query, click the **Delete** icon. The query will be removed from the saved queries list.
