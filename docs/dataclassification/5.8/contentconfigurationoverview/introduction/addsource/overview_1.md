---
title: "SharePoint"
description: "SharePoint"
sidebar_position: 90
---

# SharePoint

The SharePoint section lets you queue for processing one or more site collections that share the
same set of crawling credentials.

Netwrix Data Classification supports the following versions of SharePoint: 2010, 2013, 2016, 2019,
and SharePoint Online.

To make other configuration changes before collection of the source occurs, select the
**Pause source on creation** checkbox.

![addsharepoint](/images/dataclassification/5.8/admin/sources/sharepoint/addsharepoint.webp)

Complete the following fields:

| Option                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SharePoint URL        | <ul><li>The root of the site collections to add. Click the “(Multiple Urls)” link to add multiple SharePoint Site Collections that use the same credentials for crawling.</li></ul>                                                                                                                                                                                                                                                                                                                                                   |
| Username              | Enter username in the following formats: DOMAIN\USERNAME and USERNAME@DOMAIN.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Write Classifications | Synchronizes classifications back to the SharePoint managed metadata fields. The written classifications are subject to the classification configuration for the site collection.                                                                                                                                                                                                                                                                                                                                                   |
| OCR Processing Mode   | Select documents' images processing mode: <ul><li>Disabled – the program doesn't process documents' images.</li><li>Default – defaults to the source settings if configuring a path or the global setting if configured on a source.</li><li>Normal – the program processes images with normal quality settings.</li><li>Enhanced – upscale images further to allow more.</li></ul>                                                                                                                                                                                 |
| Re-Index Period       | Specifies how often the product checks the source for changes. The number specifies the period in days. <br />**NOTE:** Netwrix Data Classification monitors site collections to detect when a document is added/modified. It then queues these documents for reprocessing. It still checks the source for changes based on the re-index period in case any updates don't arrive. [See Manage Sources and Control Data Processing for more information.](/docs/dataclassification/5.8/contentconfigurationoverview/introduction/manage/manage.md) |
| Document Type         | Specify a value to restrict queries when using the Netwrix Data Classification search index.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
