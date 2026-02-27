---
title: "Dropbox"
description: "Dropbox"
sidebar_position: 20
---

# Dropbox

The Dropbox source configuration screen allows you to enable the crawling and classification of
content stored in Dropbox cloud storage.

**IMPORTANT!** Make sure you created a suitable App for Dropbox crawling before adding the source.
[See Configure Dropbox for Crawling for more information.](/docs/dataclassification/5.7/introduction/introduction/dropbox.md)

![source_dropbox_thumb_0_0](/images/dataclassification/5.7/admin/sources/dropbox/source_dropbox_thumb_0_0.webp)

Complete the following fields:

| Option                       | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App key                      | Generated automatically as you create your Dropbox app.                                                                                                                                                                                                                                                                                                                             |
| App secret                   | Generated automatically as you create your Dropbox app. Click Show in the Dropbox app to view the value.                                                                                                                                                                                                                                                                            |
| Authorization code           | Select Generate and copy the code from your app.                                                                                                                                                                                                                                                                                                                                                        |
| Access Shared Team Folder as | If you have team folders in your Dropbox namespace and you want to crawl one or more of these folders with Netwrix Data Classification, provide the email address of an account that has access to the desired team folders. For personal folders, this option is not required. For more information, refer to Dropbox [Namespace guide](https://www.dropbox.com/developers/reference/namespace-guide). |
| OCR Processing mode          | Select document images processing mode: <ul><li>Disabled – document images will not be processed.</li><li>Default – defaults to the source settings (if configuring a path) or the global setting (if configuring a source).</li><li>Normal – images are processed with normal quality settings.</li><li>Enhanced – upscale images further to increase detail and accuracy of results.</li></ul>                                   |
| Source Group                 | Netwrix recommends creating a dedicated source group for Dropbox. If none exists, a source group named Dropbox Sources will be created automatically.                                                                                                                                                                                                                                                                                                                                     |
| Pause source on creation     | Select if you want to make other configuration changes before collection of the source occurs.                                                                                                                                                                                                                                                                                                          |
