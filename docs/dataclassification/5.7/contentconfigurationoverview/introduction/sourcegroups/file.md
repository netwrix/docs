---
title: "Dynamic Source Groups — File Servers"
description: "Dynamic Source Groups — File Servers"
sidebar_position: 20
---

# Dynamic Source Groups — File Servers

This section contains information on how to configure File Servers dynamic source groups. Toggle
between Basic and Advanced configuration settings by clicking the icons in the Settings button in
the bottom left corner of the page.

![dynamicsourcegroupfs](/images/dataclassification/5.7/admin/sources/sourcegroups/dynamicsourcegroups/dynamicsourcegroupfs.webp)

The following options can be configured for File Servers Dynamic Source Groups:

| Option                           | Description                                                                                                                                                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server Path                      | Enter the URL for the File Servers tenant. Entering a tenant here will apply the configurations on the Source Configuration page to all source groups that are created under the tenant.                                                          |
| Username and Password            | Enter the username and password to authenticate to the server                                                                                                                                                                                     |
| Crawl User-Defined Hidden Shares | Check the box to enable data collection from user-created hidden shares. Uncheck the box to disable this option.                                                                                                                                  |
| Match Rules                      | At least one match rule must be included, match rules are Regular expressions, such as: <ul><li>`\\\\myserver\\sales.*`</li><li>`\\\\myserver\\.*\$`</li></ul>                                                                                    |
| Classification Template          | Search for a Classification Template to apply to Dynamic Source Groups                                                                                                                                                                            |
| Detection Period                 | The Detection Period set here will apply to all File Servers source groups configured under the URL set in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to **0** days and **0** hours. |
| Re-Index Period                  | The Re-Index Period set here will apply to all File Servers source groups configured under the URL set in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to **0**.                      |
