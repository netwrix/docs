---
title: "Dynamic Source Groups — Exchange (EWS)"
description: "Dynamic Source Groups — Exchange (EWS)"
sidebar_position: 10
---

# Dynamic Source Groups — Exchange (EWS)

:::warning
Microsoft is deprecating Exchange Web Services (EWS) and will fully disable it in April 2027. 
For all new Exchange Online dynamic source groups, Netwrix recommends using the [Exchange (Graph)](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/sourcegroups/exchangegraph.md) dynamic source group.
:::

This section describes how to configure Exchange and Exchange Online dynamic source
groups. Toggle between Basic and Advanced configuration settings by clicking the icons in the
Settings button in the bottom left corner of the page.

You can configure the following options for Exchange (EWS) Dynamic Source Groups:

| Option                 | Description                                                                                                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication Type    | Basic — With **Credentials**, users authenticate using email address and password credentials Modern (O365) — With **Modern (O365)**, users authenticate using Tenant ID                                                                                      |
| Exchange API Url       | Enter a URL for an Exchange API for data collection. Leave this field blank to autodetect Exchange APIs.                                                                                                                                                          |
| Crawl Range            | Configure whether to crawl data over a date range or from a specific date onwards.                                                                                                                                                                                |
| Match Rules            | You must include at least one match rule. Match rules are regular expressions, such as: <ul><li>`.*@mydomain.com`</li><li>`.*@mydomain.co.uk`</li></ul>                                                                                                           |
| Crawl In-Place Archive | Check the box to enable crawling the Exchange In-Place Archive for data. Uncheck the box to disable this option.                                                                                                                                                  |
| Detection Period       | The Detection Period you set here applies to all Exchange and Exchange Online source groups configured under the URL you enter in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to **0** days and **0** hours. |
| Re-Index Period        | The Re-Index Period you set here applies to all Exchange and Exchange Online source groups configured under the URL you enter in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to **0**.                      |
