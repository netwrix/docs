---
title: "Data Sources in Directory Manager"
description: "See the providers you can create data sources for and how Synchronize jobs, searches, and membership queries use them."
keywords:
  - data source providers
  - Synchronize jobs
  - Query Designer
  - external data source
sidebar_position: 50
---

# Data Sources in Directory Manager

You can create data sources in Directory Manager for the following providers, which include directories, databases, and files:

- MS Excel
- MS Access
- Oracle
- SQL Server
- Text/CSV (can only be used as a source in a Synchronize job)
- ODBC
- SCIM

## Data source usage

The Directory Manager portal uses data sources in the following ways:

**As source and destination in Synchronize jobs**

Use Synchronize jobs to provision objects, deprovision objects, and sync data from one data source to another. See the [Directory Manager Synchronize Overview](/docs/directorymanager/11.2/portal/synchronize/overview.md) topic for additional information.

**As external data source for query-based searches**

You use a Query Designer to perform targeted searches in the directory. While creating a search query, you can combine a data source with the directory to search for specific objects. See the [Search Directory Objects With a Saved Query](/docs/directorymanager/11.2/portal/generalfeatures/querysearch.md) topic for additional information.

**As external data source for membership queries**

Use a Query Designer to specify membership queries for Smart Groups and Dynasties. When you specify a data source in the Query Designer, Directory Manager reads records from it and fetches similar objects from the directory to add to a group's membership. See the [Query Designer - Database tab](/docs/directorymanager/11.2/portal/group/querydesigner/database.md) topic for additional information.

**As external data source for query-based searches**

You use another Query Designer to perform targeted searches in the directory. While creating a search query, you can combine a data source with the directory to search for specific objects. See the [Search Directory Objects With a Saved Query](/docs/directorymanager/11.2/portal/generalfeatures/querysearch.md) topic for additional information.
