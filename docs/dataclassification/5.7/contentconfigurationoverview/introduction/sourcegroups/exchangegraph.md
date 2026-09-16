---
title: "Dynamic Source Groups — Exchange (Graph)"
description: "Dynamic Source Groups — Exchange (Graph)"
sidebar_position: 15
---

# Dynamic Source Groups — Exchange (Graph)

This section contains information on how to configure Exchange Online dynamic source
groups. Toggle between Basic and Advanced configuration settings by clicking the icons in the
Settings button in the bottom left corner of the page.

You can configure the following options for Exchange (Graph) Dynamic Source Groups:

| Option                 | Description                                                                                                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cloud Environment      | Select the Azure Cloud Environment hosting the Exchange tenancy you want to crawl.                                                                                      |
| Crawl Range            | Configure whether to crawl data over a date range or from a specific date onwards.                                                                                                                                                                                |
| Match Rules            | You must include at least one match rule. Match rules are regular expressions, such as: <ul><li>`.*@mydomain.com`</li><li>`.*@mydomain.co.uk`</li></ul>                                                                                                           |
| Crawl In-Place Archive | Check the box to enable crawling the Exchange In-Place Archive for data. Uncheck the box to disable this option.                                                                                                                                                  |
| Detection Period       | The Detection Period you set here applies to all Exchange and Exchange Online source groups configured under the URL you enter in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to **0** days and **0** hours. |
| Re-Index Period        | The Re-Index Period you set here applies to all Exchange and Exchange Online source groups configured under the URL you enter in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to **0**.                      |
