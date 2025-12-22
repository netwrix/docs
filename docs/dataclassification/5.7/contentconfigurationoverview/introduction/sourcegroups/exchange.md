---
title: "Dynamic Source Groups — Exchange"
description: "Dynamic Source Groups — Exchange"
sidebar_position: 10
---

# Dynamic Source Groups — Exchange

This section contains information on how to configure Exchange and Exchange Online dynamic source
groups. Toggle between Basic and Advanced configuration settings by clicking the icons in the
Settings button in the bottom left corner of the page.

![dynamicsourcegroupex](/images/dataclassification/5.7/admin/sources/sourcegroups/dynamicsourcegroups/dynamicsourcegroupex.webp)

The following options can be configured for Exchange Dynamic Source Groups:

| Option                 | Description                                                                                                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication Type    | Basic — Selecting **Credentials** enables users to authenticate using email address and password credentials Modern (O365) — Selecting **Modern (O365)** enables users to authenticate using Tenant ID                                                            |
| Exchange API Url       | Enter a URL for an Exchange API for data collection. Leave this field blank to autodetect Exchange APIs.                                                                                                                                                          |
| Crawl Range            | Configure whether to crawl data over a date range or from a specific date onwards.                                                                                                                                                                                |
| Match Rules            | At least one match rule must be included, match rules are Regular expressions, such as: <ul><li>`.*@mydomain.com`</li><li>`.*@mydomain.co.uk`</li></ul>                                                                                                           |
| Crawl In-Place Archive | Check the box to enable crawling the Exchange In-Place Archive for data. Uncheck the box to disable this option.                                                                                                                                                  |
| Detection Period       | The Detection Period set here will apply to all Exchange and Exchange Online source groups configured under the URL set in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to **0** days and **0** hours. |
| Re-Index Period        | The Re-Index Period set here will apply to all Exchange and Exchange Online source groups configured under the URL set in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to **0**.                      |
