---
title: "Search Directory Objects With a Saved Query"
description: "Create, preview, run, edit, and delete query-based searches for users, mailboxes, contacts, and groups with the Query Designer."
keywords:
  - query based search
  - Query Designer
  - advanced search
  - saved queries
  - LDAP query
sidebar_position: 40
---

# Search Directory Objects With a Saved Query

Use the Directory Manager portal to search directory objects (users, mailboxes, contacts, and groups) in the identity store based on a query. You can create queries and save them for future use.

The **Query Designer** option on the **Advanced Search** page opens the [Query Designer in the Directory Manager portal](/docs/directorymanager/11.2/portal/group/querydesigner/overview.md) dialog box. It is similar to the Query Designer dialog box that creates queries for Smart Groups and Dynasties.

In Linked mode, query-based searches aren't available.

## Create a query

The Query Designer dialog box provides a visual interface for creating search queries.

1. Click **Advanced Search** at the top.

2. On the **Advanced Search** page, click **Or**, then use the new query based search link.

   The **Queries** page appears.

   :::note
   If you are creating a search query for the first time, the **Query Designer** dialog box opens automatically.
   :::

3. Click **Query Designer** to create queries to search directory objects.

4. Select an option from the [Query Designer - General tab](/docs/directorymanager/11.2/portal/group/querydesigner/general.md) list to specify the type of object the query returns.

5. Specify the containers where the query should search for directory objects. Click the **Start in** button and select a container in the **Select Container** dialog box. The query searches for objects only in this container and its sub-containers.

6. Set the query options. The **Query Designer** dialog box groups similar query options by tabs.

   - **General tab**: Select the object categories that you want the query to search. The available options vary according to the object type selected in the **Find** list. See the [Query Designer - General tab](/docs/directorymanager/11.2/portal/group/querydesigner/general.md) topic for more information.
   - **Storage tab**: Filter the mailboxes to return. See the [Query Designer - Storage tab](/docs/directorymanager/11.2/portal/group/querydesigner/storage.md) topic for more information.
   - **Filter Criteria tab**: Add more filter criteria. For example, you can add criteria to retrieve all directory users who live in Houston and have a fax number. You can also apply logical operators (AND, OR) to your custom query to get the most accurate results. The condition list can vary while creating queries for object searches. See the [Query Designer - Filter Criteria tab](/docs/directorymanager/11.2/portal/group/querydesigner/filtercriteria.md) topic for more information.
   - **Include/Exclude tab**: Include or exclude objects regardless of whether the query returns them. Use the **Add** and **Remove** buttons to add and remove objects in the **Include** and **Exclude** sections, respectively. See the [Query Designer - Include/Exclude tab](/docs/directorymanager/11.2/portal/group/querydesigner/includeexclude.md) topic for more information.
   - **Database tab**: Combine an external data source with the directory to search directory objects. See the [Query Designer - Database tab](/docs/directorymanager/11.2/portal/group/querydesigner/database.md) topic for more information.

7. Click the **LDAP Query** button to view the query generated from the settings you have entered so far.

8. In the **Query name** box, enter a name for the query.

9. Select the **Global Query** checkbox to share this query with other users in the connected identity store.

10. Click the **Save Query** button to save the query.

## Preview query results

Use the **Preview** button to preview query results obtained with the current settings on all tabs of the Query Designer dialog box. This check confirms the accuracy of data before changes are committed to the directory.

The results appear in the **Preview Results** pane at the bottom of the dialog box.

## Execute a query

To run the query, click the **Run** arrow. The portal displays all the results that match the search criteria.

## Modify a query

To edit the query, click the **Edit** button. It opens the Query Designer, where you can apply changes to the search query.

## Delete a query

To delete a query, click the **Delete** icon. The portal removes the query from the saved queries list.
