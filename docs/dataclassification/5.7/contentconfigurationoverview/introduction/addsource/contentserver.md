---
title: "Content Server"
description: "Content Server"
sidebar_position: 60
---

# Content Server

The Content Server source configuration screen allows you to enable the crawling and classification
of content stored in a Content Server volume.

Complete the following fields:

| Option                   | Description                                                                                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content Server URL       | Contain the path to the API functionality, so, in the example displayed: _https://ot-contentserver.conceptsearching.com/OTCS_ would be used to access the API at: https://ot-contentserver.conceptsearching.com/OTCS/cs.exe/api/v1/nodes |
| Username / Password      | The credentials specified should provide sufficient access to allow crawling / enumeration of the desired volumes information, and where appropriate, the writing back of classifications to custom categories.                          |
| Volume ID                | Specify the volume desired for crawling, “141” is the default enterprise volume.                                                                                                                                                         |
| Write Classifications    | Identifies whether classifications should be written back to the Content Server custom categories – subject to the sources Write Configuration settings.                                                                                 |
| Re-Index Period          | Specifies how often the source should be checked for changes. The number specifies the period in days.                                                                                                                                   |
| Document Type            | Used to specify a value which can be used to restrict queries when utilizing the Netwrix Data Classification search index.                                                                                                               |
| Pause source on creation | Select if you want to make other configuration changes before collection of the source occurs.                                                                                                                                           |
