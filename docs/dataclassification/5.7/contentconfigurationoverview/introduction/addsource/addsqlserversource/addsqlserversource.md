---
title: "SQL Server"
description: "SQL Server"
sidebar_position: 110
---

# SQL Server

The SQL Server source configuration screen lets you enable the crawling and classification of
content stored in your MS SQL, MySQL, PostgreSQL, and Oracle servers. The **SQL Server** source crawls 
all databases found on a given server.

After connecting, you can create an intelligent content mapping, crawling certain fields as
unstructured index text, and other fields as mapped metadata.

To crawl SQL server:

1. Go to **Content → Sources** and select **Add**.
2. Select **SQL Server**.
3. Specify the server type: [MS SQL Server](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/addsqlserversource/mssqlserver.md), [MySQL Server](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/addsqlserversource/mysqlserver.md), [Oracle Server](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/addsqlserversource/oracleserver.md), [PostgreSQL Server](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/addsqlserversource/postgresqlserver.md).

    ![sqlserver_source](/images/dataclassification/5.7/admin/sources/sqlserver/sqlserver_source.webp)
4. Complete the following fields:

    | Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | Server                   | Specify the server name of the database system to be crawled (use "." to indicate the local server).                                                                                                                                                                                                                                                                                                                                                                                                          |
    | Authentication Method    | Select authentication method: **Integrated** or **SQL**. <ul><li>With **Integrated** option selected, NDC accesses the database via the NDC Service Accounts.</li><li>With **SQL** option selected, you specify the user name and password to be used when accessing the database.</li></ul> Integrated authentication is only supported for MS SQL databases.                                                                                                                                                                                                               |
    | OCR Processing Mode      | Select processing mode for images in the documents: <ul><li>Disabled – document images will not be processed.</li><li>Default – defaults to the source settings if configuring a path or the global setting if configured on a source.</li><li>Normal – images are processed with normal quality settings.</li><li>Enhanced – upscale images further to allow more accurate results. This will provide better accuracy but can lead to longer processing time if the images don't contain text.</li></ul> |
    | Source Group             | If you want to add the database source to a source group, select an existing source group or create a new one.                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | Pause source on creation | Pauses the source upon creation, to allow for further configuration before collection begins.                                                                                                                                                                                                                                                                                                                                                                                                                        |
5. Select Save.

    You can then review summary, text, metadata, classifications, and properties of your crawling by
    selecting information icon against your server. You can also build the report for more details.

![sqlserver_source2](/images/dataclassification/5.7/admin/sources/sqlserver/sqlserver_source2.webp)
