---
title: "Content Server"
description: "Content Server"
sidebar_position: 60
---

# Content Server

Use the Content Server source configuration screen to enable the crawling and classification
of content stored in a Content Server volume.

Complete the following fields:

| Option                   | Description                                                                                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content Server URL       | Contain the path to the API functionality, so, in the example displayed, you would use _https://ot-contentserver.conceptsearching.com/OTCS_ to access the API at: https://ot-contentserver.conceptsearching.com/OTCS/cs.exe/api/v1/nodes |
| Username / Password      | Specify credentials with sufficient access to allow crawling / enumeration of the volumes you want to access, and where appropriate, to write classifications back to custom categories.                          |
| Volume ID                | Specify the volume desired for crawling, “141” is the default enterprise volume.                                                                                                                                                         |
| Write Classifications    | Identifies whether the product writes classifications back to the Content Server custom categories – subject to the sources Write Configuration settings.                                                                                 |
| Re-Index Period          | Specifies how often the product checks the source for changes. The number specifies the period in days.                                                                                                                                   |
| Document Type            | Specify a value that you can use to restrict queries when using the Netwrix Data Classification search index.                                                                                                               |
| Pause source on creation | Select if you want to make other configuration changes before collection of the source occurs.                                                                                                                                           |
