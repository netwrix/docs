---
title: "Database"
description: "Database"
sidebar_position: 20
---

# Database

This section describes how to specify configuration settings for the Database source. You can
specify which tables, views, and queries to crawl, configure table settings, and use **Write Configuration** options to set up tagging.

## Configure tagging

Use tagging to write classification taxonomy attributes back to the source database.

Each registered taxonomy can be mapped to a property in the database table’s metadata. The program
will update a specific column per taxonomy within the source repository with the associated
classifications for a record. You can specify how the classifications should be mapped to the table:

- Which table should be updated
- Which column should be updated
- How to filter the table to ensure only one row is updated (each update statement
  is verified before execution to ensure that only one row is updated).

These settings are configured in the **Write Configuration** window for the selected entity (table
or query).

To configure tagging, do the following:

1. In the **Sources** window, select the required source by clicking on the triple cog icon.
2. Select the entity that you want to configure tagging for (table or query) and click **Edit**.
3. Select **Write Configuration** on the left.

Configure the following tagging options:

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Table Name    | Specify the name of the table to be updated (in most cases this will be the same as the table being crawled).                                                                                                                                                                                                                                                                                                                                         |
| Column Name   | Specify the name of the column to be updated (text/varchar column).                                                                                                                                                                                                                                                                                                                                                                                   |
| Update Filter | Update filters are the method used to restrict the update at the target destination. If multiple filters are configured then they all must be true. Filters should be created in the format: ` ColumnName=@Parameter` where `@Parameter` is a correctly configured metadata value from the source table/query. The specified values will result in a query in the following format: `UPDATE TABLENAME SET COLUMNNAME=@Classifications WHERE FILTERS ` |

## Other Database Configuration settings

You can also specify the following settings:

- [Source Configuration](#source-configuration)
- [Primary Key Query](#primary-key-query)
- [Content Query](#content-query)
- [Table Configuration](#table-configuration)

### Source Configuration

Use the Source Configuration screen to define which tables, views, and queries are crawled.
The following options are available:

- Add Source—Add a new SQL database connection
- Edit Connection—Edit the connection details of the selected source
- Add Query—Add a custom method for crawling content (custom SELECT statements). Templates are
  provided for Hummingbird, Worksite, and Documentum.

You can access the Source Configuration screen by selecting the multi-cog (Advanced Configuration)
icon from the sources
grid:![advancedsourceconfiguration](/images/dataclassification/5.6.2/sources/database/advancedsourceconfiguration.webp).

Selecting Edit for one of the tables / queries on the list will redirect you to the entity level
configuration, which identifies how content will be mapped into the core index.

![sqlsourceconfiguration_thumb_0_0](/images/dataclassification/5.6.2/sources/database/sqlsourceconfiguration_thumb_0_0.webp)

Selecting the Add Query option will present a popup allowing you to select a unique name for the
query, as well as the queries to be used for crawling:

![addsqlquery](/images/dataclassification/5.6.2/sources/database/addsqlquery.webp)

### Primary Key Query

The primary key query should return a set of values that uniquely identify each row to be crawled.
If JOINs are used, JOIN from the largest dataset to the smallest to ensure
that each row is unique.

Example: `SELECT PageID FROM Pages`

**NOTE:** Stored procedures aren't supported.

### Content Query

The content query must return all fields to be indexed/classified on, as well as the fields included
in the primary key query.

Example: `SELECT * FROM Pages`

**NOTE:** Stored procedures aren't supported

Adding the query will take you to the custom query configuration. Here you can update the primary
key query and the content query, all other configuration options are described in the Table
Configuration section:

![setsqlquery](/images/dataclassification/5.6.2/sources/database/setsqlquery.webp)

### Table Configuration

Use table configuration to choose how each specific entity is crawled:

| Option                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Include for Crawling                 | When checked the table/entity will be enabled in the collection schema.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Upload Content                       | When checked the Content fields will be uploaded into the SQL database. Uploaded content can be retrieved after collection by passing the PageId for the record to the QS API call "GetDownload".                                                                                                                                                                                                                                                                                                                    |
| PK - Primary Key                     | Select the fields that uniquely identify the row to be crawled. If multiple rows are returned by the Primary Key, the query is aborted. Custom queries don't require the primary key to be defined; it's set automatically from the primary key query.                                                                                                                                                                                                                        |
| Content                              | Identifies the fields that are crawled as searchable text in the core search index. Multiple fields can be mapped to Content; each is appended with a line break. You can configure a single binary field type that contains a document; the collection process loads the binary and converts and extracts text from the document. When using this functionality, set the ContentFilename or ContentType index mapping to aid text extraction. |
| Metadata                             | Identifies the fields that will be mapped as metadata values.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Index Mappings                       | Index mappings identifies mappings between the entities fields and the internal core database. Each row also contains an information icon identifying its purpose within the crawling process.                                                                                                                                                                                                                                                                                                                       |
| Modified Filter (Incremental Crawls) | This should be set to a field that defines when a row has changed (the modified date for the row). When set the collection process will automatically filter the re-indexing process to rows that have a modified date that is larger than the last crawl time.                                                                                                                                                                                                                                                      |
| Re-Index Period                      | This value is the number of days, hours, or minutes between re-indexing. The re-indexing process queries the tables to find new and changed records.                                                                                                                                                                                                                                                                                                                                           |

![sqltableconfiguration_thumb_0_0](/images/dataclassification/5.6.2/sources/database/sqltableconfiguration_thumb_0_0.webp)
