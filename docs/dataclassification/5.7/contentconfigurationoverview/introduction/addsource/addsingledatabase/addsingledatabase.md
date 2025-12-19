---
title: "Add Single Database"
description: "Add Single Database"
sidebar_position: 120
---

# Add Single Database

The Database source configuration screen allows you to enable the crawling and classification of
content stored in your Microsoft SQL Server, MySQL, and Oracle databases.

Content must either be configured / crawled using the configured service accounts (IIS Application
Pool User, Windows Services) or by using specific connection details.

When crawling the data, Unicode table names or unicode primary keys are not supported. Primary keys
are supported only with Latin alphabet.

Once connected it is possible to create an intelligent content mapping, crawling certain fields as
unstructured index text, and other fields as mapped metadata. For more information please see the
[Database Configuration Wizard](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/addsingledatabase/databaseconfigwizard.md) section.

If you wish to make other configuration changes before collection of the source occurs ensure you
tick the checkbox "_Pause source on creation_".

![add_database_thumb_0_0](/images/dataclassification/5.7/admin/sources/database/add_database_thumb_0_0.webp)

Complete the following fields:

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection Type          | Select your connection type: MS SQL, MySQL, or Oracle.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Server                   | Specify the server name of the database system to be crawled ("." can be used to indicate the local server).                                                                                                                                                                                                                                                                                                                                                                                                 |
| Database Name            | Specify the database that will be crawled. It is possible to configure multiple databases from the same server.                                                                                                                                                                                                                                                                                                                                                                                              |
| Authentication Method    | Select authentication method: **Integrated** or **SQL**. <ul><li>With **Integration** option selected, database will be accessed under the account currently logged on.</li><li>With **SQL** option selected, specify user name and password to be used when accessing the database.</li></ul>                                                                                                                                                                                                               |
| OCR Processing Mode      | Select processing mode for images in the documents: <ul><li>Disabled – documents' images will not be processed.</li><li>Default – defaults to the source settings if configuring a path or the global setting if configured on a source.</li><li>Normal – images are processed with normal quality settings.</li><li>Enhanced – upscale images further to allow more accurate results. This will provide better accuracy but can lead to longer processing time if the images do not contain text.</li></ul> |
| Source Group             | If you want to add database to a source group, select existing, or create a new one.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Pause source on creation | Select to make other configuration changes before the initial data collection starts.                                                                                                                                                                                                                                                                                                                                                                                                                        |


After the source configuration is completed, you will be prompted to lauch SQL crawling
configuration wizard.
[See Database Configuration Wizard for more information.](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/addsingledatabase/databaseconfigwizard.md)
