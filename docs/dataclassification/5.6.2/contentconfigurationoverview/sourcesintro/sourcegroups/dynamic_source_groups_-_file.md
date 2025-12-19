---
title: "Dynamic Source Groups — File Servers"
description: "Dynamic Source Groups — File Servers"
sidebar_position: 20
---

# Dynamic Source Groups — File Servers

This section contains information on how to configure File Servers dynamic source groups. Toggle between Basic and Advanced configuration settings by clicking the icons in the Settings button in the bottom left corner of the page.

![dynamicsourcegroupfs](/images/dataclassification/5.6.2/sources/source_groups/dynamicsourcegroupfs.webp)

The following options can be configured for File Servers Dynamic Source Groups:

| Option | Description |
| :--- | :--- |
| Server Path | Enter the path to the server (e.g., `\\fileserver\share`). |
| Username and Password | Enter the username and password to authenticate to the server. |
| Crawl User-Defined Hidden Shares | Check the box to enable data collection from user-created hidden shares. Uncheck the box to disable this option. |
| Match Rules | At least one match rule must be included. Match rules are Regular expressions, such as:<br />`\\myserver\sales.*`<br />`\\myserver\.*\$$` |
| Classification Template | Search for and select a Classification Template to apply to the source group. |
| Detection Period | Use the slider to set the interval for detecting new or modified files. To disable detection, set the period to 0 days and 0 hours. |
| Re-Index Period | Use the slider to set the interval for re-indexing the data source. To disable re-indexing, set the period to 0. |
