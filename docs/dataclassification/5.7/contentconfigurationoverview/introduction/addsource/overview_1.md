---
title: "SharePoint"
description: "SharePoint"
sidebar_position: 90
---

# SharePoint

The SharePoint section allows for one or more site collections to be queued for processing that
share the same set of crawling credentials.

The following versions of SharePoint are supported: 2010, 2013, 2016, 2019 and SharePoint Online.

If you wish to make other configuration changes before collection of the source occurs ensure you
tick the checkbox Pause source on creation.

![addsharepoint](/images/dataclassification/5.7/admin/sources/sharepoint/addsharepoint.webp)

Complete the following fields:

| Option                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SharePoint URL        | <ul><li>The root of the site collections to be added, by clicking the “(Multiple Urls)” link you can add multiple SharePoint Site Collections to be crawled against the same credentials.</li></ul>                                                                                                                                                                                                                                                                                                                                                   |
| Username              | Enter username in the following formats: DOMAIN\USERNAME and USERNAME@DOMAIN.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Write Classifications | Enables synchronization of classifications back to the SharePoint managed metadata fields. The written classifications will be subject to the classification configuration for the site collection.                                                                                                                                                                                                                                                                                                                                                   |
| OCR Processing Mode   | Select documents' images processing mode: <ul><li>Disabled – documents' images will not be processed.</li><li>Default – defaults to the source settings if configuring a path or the global setting if configured on a source.</li><li>Normal – images are processed with normal quality settings.</li><li>Enhanced – upscale images further to allow more.</li></ul>                                                                                                                                                                                 |
| Re-Index Period       | Specifies how often the source should be checked for changes. The number specifies the period in days. <br />**NOTE:** Netwrix Data Classification monitors site collections to detect when a document is added/modified. These will then be queued for reprocessing. The source will still be checked for changes based on the re-index period in case any updates are not received. [See Manage Sources and Control Data Processing for more information.](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/manage/manage.md) |
| Document Type         | Specify a value which can be used to restrict queries when utilizing the Netwrix Data Classification search index.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
