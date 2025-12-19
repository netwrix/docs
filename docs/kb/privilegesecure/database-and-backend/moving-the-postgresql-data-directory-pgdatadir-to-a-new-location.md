---
description: >-
  Instructions to move the PostgreSQL 16 data directory (PgDataDir) for Netwrix
  Privilege Secure to a new location, including required registry updates and
  service steps. Repeat the procedure on each server in a High Availability (HA)
  pair.
keywords:
  - PostgreSQL
  - PgDataDir
  - PostgreSQL 16
  - Netwrix Privilege Secure
  - data directory
  - registry
  - services.msc
  - Network Service
  - ACL
products:
  - privilege-secure-access-management
sidebar_label: Moving the PostgreSQL Data Directory (PgDataDir) t
tags: []
title: "Moving the PostgreSQL Data Directory (PgDataDir) to a New Location"
knowledge_article_id: kA04u0000000HjaCAE
---
# Moving the PostgreSQL Data Directory (PgDataDir) to a New Location

## Overview

This article outlines the steps required to move an installed PostgreSQL data directory (**PgDataDir**) for Netwrix Privilege Secure to a new location. In a High Availability (HA) pair, you must perform this procedure on each server separately.

## Instructions

> **IMPORTANT:** It is recommended to make a backup of the PostgreSQL data directory before making manual modifications or moving it. Also, this article pertains specifically to **PostgreSQL 16**. If using **PostgreSQL 12**, please contact [Netwrix Technical Support](https://www.netwrix.com/support.html) to upgrade before proceeding with the following instructions.

1. While Netwrix Privilege Secure is not in use, stop the **postgresql-x64-16 – PostgreSQL Server 16** service in the Windows Services menu (`services.msc`).
2. Open the Windows Registry and navigate to:
   `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\postgresql-x64-16`  
   Update the value of **ImagePath** to reflect the data directory's new location. Only modify the path between quotes after `-D`, as this is the path to the database.
3. In the Windows Registry, navigate to:
   `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\PostgreSQL\Services\postgresql-x64-16`  
   Update the value of **Data Directory** to reflect the data directory's new location.
4. In the Windows Registry, navigate to:
   `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\PostgreSQL\Installations\postgresql-x64-16`  
   Update the value of **Data Directory** to reflect the data directory's new location.
5. Move the PostgreSQL data directory to its new location. Ensure that the new path matches the one specified in the previous steps.
6. After moving the PostgreSQL data directory, start the **postgresql-x64-16 – PostgreSQL Server 16** service in the Windows Services menu (`services.msc`).

> **IMPORTANT:** After moving the database to a new location, add the **Network Service** account to the new folder's Access Control List (ACL).

7. Verify that you can log in to Netwrix Privilege Secure as usual, navigate the UI, and provision sessions. If everything functions normally, the process is complete.
