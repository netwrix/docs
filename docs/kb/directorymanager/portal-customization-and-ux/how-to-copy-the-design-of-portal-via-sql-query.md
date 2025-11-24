---
description: >-
  Shows how to copy a portal design between environments using SQL queries.
  Covers copying within the same server and database, between different
  databases on the same server, and between different SQL servers using linked
  servers.
keywords:
  - portal design
  - SQL
  - PortalDesigns
  - linked server
  - Netwrix Directory Manager
  - SSPR
  - SQL Server Management Studio
  - copy design
products:
  - directory-manager
sidebar_label: How to Copy the Design of Portal via SQL Query
tags:
  - portal-customization-and-ux
title: "How to Copy the Design of Portal via SQL Query"
knowledge_article_id: kA0Qk000000161lKAA
---

# How to Copy the Design of Portal via SQL Query

## Overview

This article provides step-by-step instructions for copying a portal design between environments using SQL queries. The process covers scenarios for the same SQL server and database, different databases on the same server, and different SQL servers.

## Instructions

### Copy the Design Within the Same SQL Server and Database

1. Go to the database used with the test server.
2. Select the database and create a new query.  
   ![SQL Server Management Studio new query window with database selected](./../0-images/ka0Qk000000DSzN_0EMQk000004n9O2.png)
3. Enter the following query:

```sql
DECLARE @fromClient AS int = n
DECLARE @fromStore AS int = n
DECLARE @toClient AS int = n
DECLARE @tostore AS int = n

UPDATE [SSPR].[PortalDesigns]
SET Design = (SELECT Design FROM [SSPR].[PortalDesigns] WHERE ClientId = @fromClient AND IdentityStoreId = @fromStore)
WHERE ClientId = @toClient AND IdentityStoreId = @tostore
```

4. In `@fromClient`, enter the Client ID of the portal you want to copy. For example, to copy the design of Portal 1, use Client ID 11.  
   ![PortalDesigns table showing Client ID and Identity Store ID values](./../0-images/ka0Qk000000DSzN_0EMQk000004nLdh.png)
5. In `@fromStore`, enter the Identity Store ID. For example, use 2.  
   ![Identity Store ID value in PortalDesigns table](./../0-images/ka0Qk000000DSzN_0EMQk000004nH3t.png)
6. In `@toClient` and `@toStore`, enter the Client ID and Identity Store ID for the target portal. For example, Client ID 13 and Store ID 2.
7. Run the query.
8. The following screenshot shows the executed query:  
   ![Screenshot of executed SQL query](./../0-images/ka0Qk000000DSzN_0EMQk000004nLfJ.png)

### Copy the Design with the Same SQL Server and Different Databases

Environment: Test instance configured with **SQLTestServer-DB1**, production instance configured with **SQLTestServer-DB2**.

1. Go to SQL Server and create a new query.
2. Enter the following query:

```sql
DECLARE @fromClient AS int = n
DECLARE @fromStore AS int = n
DECLARE @toClient AS int = n
DECLARE @tostore AS int = n

UPDATE [toDB].[SSPR].[PortalDesigns]
SET Design = (SELECT Design FROM [fromDB].[SSPR].[PortalDesigns] WHERE ClientId = @fromClient AND IdentityStoreId = @fromStore)
WHERE ClientId = @toClient AND IdentityStoreId = @tostore
```

3. In `@fromClient`, `@fromStore`, `@toClient`, and `@toStore`, enter the appropriate Client ID and Store ID values as described above.
4. In `[toDB]`, enter the database name of the production portal.  
   ![Screenshot of SQL query for copying design between databases](./../0-images/ka0Qk000000DSzN_0EMQk000004nLgv.png)
5. In `[fromDB]`, enter the database name of the test portal.
6. Run the query.
7. The following screenshot shows the executed query:  
   ![Screenshot of executed SQL query for different databases](./../0-images/ka0Qk000000DSzN_0EMQk000004nLiX.png)

### Copy the Design with Different SQL Servers and Databases

Environment: Test server configured with **DB1**, production server configured with **DB2**.

1. On the test server, connect to the SQL Server instance where you want to create the linked server.
2. In Object Explorer, go to **Server Objects** and click **Linked Servers**.
3. Create a new linked server.
4. In the **New Linked Server** window, enter the name of the server you want to link.
5. Select **Server type** as **SQL Server**.  
   ![Linked server properties window](./../0-images/ka0Qk000000DSzN_0EMQk000004nIXn.png)
6. Select **Security** from the left pane, choose the appropriate login option, and enter the server credentials.
7. Click **OK**. The linked server will appear in the list.  
   ![Linked server security settings](./../0-images/ka0Qk000000DSzN_0EMQk000004nIXo.png)

![Linked server shown in SQL Server Management Studio](./../0-images/ka0Qk000000DSzN_0EMQk000004nIXp.png)

8. Go to the Netwrix Directory Manager portal of the test server and make the required changes to the portal design.
9. Return to SQL Server.
10. Right-click the server and select **New Query**.  
    ![SQL Server Management Studio new query window for linked server](./../0-images/ka0Qk000000DSzN_0EMQk000004nIXq.png)
11. Enter the following query:

```sql
DECLARE @fromClient AS int = n
DECLARE @fromStore AS int = n
DECLARE @toClient AS int = n
DECLARE @tostore AS int = n

UPDATE [toSourceServer].[toDB].[SSPR].[PortalDesigns]
SET Design = (
    SELECT Design FROM [fromSourceServer].[fromDB].[SSPR].[PortalDesigns]
    WHERE ClientId = @fromClient AND IdentityStoreId = @fromStore
)
WHERE ClientId = @toClient AND IdentityStoreId = @tostore
```

12. In `@fromClient`, `@fromStore`, `@toClient`, and `@toStore`, enter the appropriate Client ID and Store ID values as described above.
13. In `[toSourceServer]`, enter the server name of the production server.  
    ![Linked server name entry in SQL query](./../0-images/ka0Qk000000DSzN_0EMQk000004nIXr.png)
14. In `[fromSourceServer]`, enter the server name of the test server.
15. In `[fromDB]` and `[toDB]`, enter the database names as described above.
16. Execute the query.  

![Screenshot of executed SQL query for linked server](./../0-images/ka0Qk000000DSzN_0EMQk000004nIXs.png)
