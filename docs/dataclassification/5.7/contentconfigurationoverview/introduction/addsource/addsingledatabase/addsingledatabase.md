---
title: "Add Single Database"
description: "Add Single Database"
sidebar_position: 120
---

# Add Single Database

Use the Database source configuration screen to configure the crawling and classification of
content stored in your Microsoft SQL Server, MySQL, PostgreSQL, and Oracle databases.

Content must either be configured / crawled using the configured service accounts (IIS Application
Pool User, Windows Services) or by using specific connection details.

When crawling the data, Unicode table names or unicode primary keys aren't supported. Primary keys
are supported only with Latin alphabet.

After connecting, you can create an intelligent content mapping, crawling certain fields as
unstructured index text, and other fields as mapped metadata. See the
[Database Configuration Wizard](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/addsingledatabase/databaseconfigwizard.md) section for instructions on configuring field mappings.

If you want to make other configuration changes before collection of the source occurs ensure you
tick the checkbox "_Pause source on creation_".

![add_database_thumb_0_0](/images/dataclassification/5.7/admin/sources/database/add_database_thumb_0_0.webp)

Complete the following fields:

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection Type          | Select your connection type: MS SQL, MySQL, PostgreSQL, or Oracle.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Server                   | Specify the server name of the database system to be crawled (use "." to indicate the local server).                                                                                                                                                                                                                                                                                                                                                                                                          |
| Database Name            | Specify the name of the database that will be crawled. You can configure multiple databases from the same server.                                                                                                                                                                                                                                                                                                                                                                                                        |
| Authentication Method    | Select authentication method: **Integrated** or **SQL**. <ul><li>With **Integrated** option selected, NDC accesses the database via the NDC Service Account (the account the collector is configured to run as).</li><li>With **SQL** option selected, you specify the user name and password to be used when accessing the database.</li></ul>
Integrated authentication is only supported for MS SQL databases                                                                                                                                                                                                               |
| OCR Processing Mode      | Select processing mode for images in the documents: <ul><li>Disabled – document images will not be processed.</li><li>Default – defaults to the source settings if configuring a path or the global setting if configured on a source.</li><li>Normal – images are processed with normal quality settings.</li><li>Enhanced – upscale images further to allow more accurate results. This will provide better accuracy but can lead to longer processing time if the images don't contain text.</li></ul> |
| Source Group             | If you want to add the database source to a source group, select an existing source group or create a new one.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Pause source on creation | Pauses the source upon creation to allow for further configuration before collection begins.                                                                                                                                                                                                                                                                                                                                                                                                                      |
:::note
Integrated authentication is only supported by 
:::

After the source configuration is completed, you will be prompted to lauch SQL crawling
configuration wizard.
See [Database Configuration Wizard](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/addsingledatabase/databaseconfigwizard.md) for instructions on mapping fields and configuring crawling.
