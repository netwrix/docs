---
description: >-
  Shows how to move Netwrix Reporting databases to a different drive by
  detaching and attaching the databases in SQL Management Studio.
keywords:
  - reporting
  - database
  - SQL Management Studio
  - MDF
  - LDF
  - detach
  - attach
  - move database
  - Netwrix
products:
  - auditor
sidebar_label: How to move reporting databases to a new drive
tags: []
title: "How to move reporting databases to a new drive"
knowledge_article_id: kA00g000000H9W0CAK
---

# How to move reporting databases to a new drive

How do I move the Netwrix Reporting databases to another drive?

## Procedure

1) Open **SQL Management Studio** on the computer where the SQL Instance resides.  
2) **Right click** on the **database** you would like to move and go to **Properties**.  
3) Under **Select a page**, select **Files**.  
4) By default there will be two files for each database, an **`MDF`** and an **`LDF`** file. Note the location of these files in the **`Path`** column.  
5) Hit **Okay**  
6) **Right click** the database and go to **Tasks -> Detach**.  
7) In the **Detach Database Window** check the box to **Drop Connections** and hit **Okay**.  
8) Navigate to the location from **step #4** and copy the **`MDF` and `LDF` file** to the new location.  
9) In **SQL Management Studio** **right click** the **Databases folder** and select **Attach**.  
10) **Click Add** under **Databases to Attach** and select the location and **`MDF`** file for the database and hit okay (The **`LDF`** will be located automatically if in the same location).  
11) Hit **okay** again on the **Attach databases** screen. Your database should now be attached once again and now residing in it's new location.
